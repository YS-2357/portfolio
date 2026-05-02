import { useEffect, useState } from 'react'
import { NavLink, useParams } from 'react-router-dom'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import { projects } from '../data/projects'
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
    <PageShell>
      <div className="relative z-10 max-w-[1080px] mx-auto px-4 sm:px-6 lg:px-8 pt-14 pb-24">
        <p className="eyebrow mb-3">Project</p>
        <h1 className="text-4xl md:text-5xl font-bold mb-2" style={{ color: 'var(--page-text)', letterSpacing: '-0.03em' }}>
          {meta?.title || project}
        </h1>
        {meta?.subtitle && (
          <p className="text-base mb-8" style={{ color: 'var(--page-muted)' }}>{meta.subtitle}</p>
        )}

        <div className="tab-nav mb-10 overflow-x-auto">
          <NavLink
            to={`/projects/${project}`}
            end
            className={({ isActive }) => `tab-link${isActive ? ' active' : ''}`}
          >
            Infographic
          </NavLink>
          <NavLink
            to={`/projects/${project}/star`}
            end
            className={({ isActive }) => `tab-link${isActive ? ' active' : ''}`}
          >
            Summary
          </NavLink>
          <NavLink
            to={`/projects/${project}/report`}
            end
            className={({ isActive }) => `tab-link${isActive ? ' active' : ''}`}
          >
            Report
          </NavLink>
          <NavLink
            to="/projects"
            end
            className={({ isActive }) => `tab-link${isActive ? ' active' : ''}`}
          >
            Project List
          </NavLink>
        </div>

        <div className="glass-card p-8">
          <div className="prose prose-invert max-w-none prose-img:rounded-xl prose-img:border prose-img:border-white/10 prose-a:text-solar prose-headings:text-white prose-code:text-solar prose-code:bg-space-void prose-pre:bg-space-void prose-pre:border prose-pre:border-white/10">
            <ReactMarkdown remarkPlugins={[remarkGfm]} components={{ h1: () => null }}>
              {content || '콘텐츠를 준비 중입니다.'}
            </ReactMarkdown>
          </div>
        </div>
      </div>
    </PageShell>
  )
}
