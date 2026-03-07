import { useEffect, useState } from 'react'
import { NavLink, useParams } from 'react-router-dom'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import { projects } from '../data/projects'
import { fetchText } from '../shared/content'

const pages = ['star', 'report'] as const

type PageName = (typeof pages)[number]

type Params = {
  project?: string
  page?: string
}

export default function MarkdownPage() {
  const { project, page } = useParams<Params>()
  const [content, setContent] = useState('')
  const currentPage = (page as PageName) || 'star'
  const meta = projects.find((item) => item.slug === project)

  useEffect(() => {
    if (!project || !meta) return
    const safePage = pages.includes(currentPage) ? currentPage : 'star'
    if (!meta.pages.includes(safePage)) {
      setContent('')
      return
    }
    fetchText(`${meta.contentBasePath}/${safePage}.md`)
      .then((text) => setContent(text))
      .catch(() => setContent(''))
  }, [project, currentPage, meta])

  if (!project) return null

  return (
    <div className="landing">
      <header className="hero">
        <div className="hero__copy">
          <p className="hero__eyebrow">Project</p>
          <h1>{meta?.title || project}</h1>
          {meta?.subtitle ? <p className="hero__subtitle">{meta.subtitle}</p> : null}
          <div className="hero__cta">
            <NavLink
              className={({ isActive }) => `btn${isActive ? ' btn--primary-solar' : ''}`}
              to={`/projects/${project}`}
              end
            >
              Infographic
            </NavLink>
            <NavLink
              className={({ isActive }) => `btn${isActive ? ' btn--primary-solar' : ''}`}
              to={`/projects/${project}/star`}
              end
            >
              Summary
            </NavLink>
            <NavLink
              className={({ isActive }) => `btn${isActive ? ' btn--primary-solar' : ''}`}
              to={`/projects/${project}/report`}
              end
            >
              Report
            </NavLink>
            <NavLink className={({ isActive }) => `btn${isActive ? ' btn--primary-solar' : ''}`} to="/projects">
              Project List
            </NavLink>
          </div>
        </div>
      </header>

      <section className="section markdown">
        <ReactMarkdown remarkPlugins={[remarkGfm]} components={{ h1: () => null }}>
          {content || '콘텐츠를 준비 중입니다.'}
        </ReactMarkdown>
      </section>
    </div>
  )
}
