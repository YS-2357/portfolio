import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import remarkMath from 'remark-math'
import rehypeKatex from 'rehype-katex'
import { projects } from '../data/projects'
import { projectPageMeta, STATIC_META } from '../data/routeMeta'
import { useDocumentMeta } from '../lib/useDocumentMeta'
import { fetchText } from '../shared/content'
import PageShell from '../components/PageShell'

const pages = ['star', 'report'] as const
type PageName = (typeof pages)[number]
type Params = { project?: string; page?: string }

export default function MarkdownPage() {
  const { project, page } = useParams<Params>()
  const [content, setContent] = useState('')
  const currentPage = (page as PageName) || 'star'
  const meta = projects.find((item) => item.slug === project)

  const doc = meta
    ? projectPageMeta(meta, pages.includes(currentPage) ? currentPage : 'star')
    : STATIC_META['/projects']
  useDocumentMeta(doc.title, doc.description)

  useEffect(() => {
    if (!project || !meta) return
    const safePage = pages.includes(currentPage) ? currentPage : 'star'
    if (!meta.pages.includes(safePage)) { setContent(''); return }
    fetchText(`${meta.contentBasePath}/${safePage}.md`)
      .then((text) => setContent(text))
      .catch(() => setContent(''))
  }, [project, currentPage, meta])

  if (!project) return null

  return (
    <PageShell system="algebraic">
      <div className="relative z-10 max-w-[1080px] mx-auto px-4 sm:px-6 lg:px-8 pt-14 pb-24">
        <p className="eyebrow mb-3"><span className="font-math">𝒪</span><sub>K</sub> · Project</p>
        <h1 className="text-4xl md:text-5xl font-bold mb-2" style={{ color: 'var(--card-bright)', letterSpacing: '-0.03em' }}>
          {meta?.title || project}
        </h1>
        {meta?.subtitle && (
          <p className="text-base mb-8" style={{ color: 'var(--card-dim)' }}>{meta.subtitle}</p>
        )}

        <Link to={`/projects/${project}`} className="inline-flex items-center gap-1 text-sm mb-10" style={{ color: 'var(--card-dim)' }}>
          ← Project Overview
        </Link>

        <div className="glass-card p-8">
          <div className="prose prose-invert max-w-none prose-img:rounded-xl prose-img:border prose-img:border-white/10 prose-a:text-[color:var(--accent)] prose-headings:text-white prose-code:text-[color:var(--accent)] prose-code:bg-space-void prose-pre:bg-space-void prose-pre:border prose-pre:border-white/10">
            <ReactMarkdown remarkPlugins={[remarkGfm, remarkMath]} rehypePlugins={[rehypeKatex]} components={{ h1: () => null }}>
              {content || '콘텐츠를 준비 중입니다.'}
            </ReactMarkdown>
          </div>
        </div>
      </div>
    </PageShell>
  )
}
