import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import { projects } from '../data/projects'
import { fetchText } from '../shared/content'
import PageShell from '../components/PageShell'
import OrbitalRing from '../components/OrbitalRing'

type Params = { project?: string }

export default function ProjectIntroPage() {
  const { project } = useParams<Params>()
  const [starContent, setStarContent] = useState('')
  const meta = projects.find((item) => item.slug === project)

  if (!meta) return null

  useEffect(() => {
    const link = document.createElement('link')
    link.rel = 'preload'
    link.as = 'image'
    link.href = meta.imagePath
    link.setAttribute('fetchpriority', 'high')
    document.head.appendChild(link)
    return () => { document.head.removeChild(link) }
  }, [meta.imagePath])

  useEffect(() => {
    fetchText(`${meta.contentBasePath}/star.md`)
      .then((text) => setStarContent(text))
      .catch(() => setStarContent(''))
  }, [meta.contentBasePath])

  return (
    <PageShell planet="mercury">
      <OrbitalRing
        size={400}
        opacity={0.04}
        className="absolute top-24 right-8"
        style={{ position: 'absolute' }}
      />

      <div className="relative z-10 max-w-[1080px] mx-auto px-4 sm:px-6 lg:px-8 pt-14 pb-24">
        <Link to="/projects" className="inline-flex items-center gap-1 text-sm mb-6" style={{ color: 'var(--card-dim)' }}>
          ← All Projects
        </Link>

        <p className="eyebrow mb-3">Project</p>
        <h1 className="text-4xl md:text-5xl font-bold mb-2" style={{ color: 'var(--card-bright)', letterSpacing: '-0.03em' }}>
          {meta.title}
        </h1>
        {meta.subtitle && (
          <p className="text-base mb-10" style={{ color: 'var(--card-dim)' }}>{meta.subtitle}</p>
        )}

        <div className="flex justify-center mb-10">
          <img
            src={meta.imagePath}
            alt={`${meta.title} infographic`}
            loading="eager"
            decoding="async"
            fetchPriority="high"
            className="w-full max-w-[960px] rounded-2xl"
            style={{ border: '1px solid var(--card-border)' }}
          />
        </div>

        <div className="glass-card p-8">
          <div className="prose prose-invert max-w-none prose-img:rounded-xl prose-img:border prose-img:border-white/10 prose-a:text-solar prose-headings:text-white prose-code:text-solar prose-code:bg-space-void prose-pre:bg-space-void prose-pre:border prose-pre:border-white/10">
            <ReactMarkdown remarkPlugins={[remarkGfm]} components={{ h1: () => null }}>
              {starContent || '콘텐츠를 준비 중입니다.'}
            </ReactMarkdown>
          </div>
        </div>
      </div>
    </PageShell>
  )
}
