import { useEffect } from 'react'
import { NavLink, useParams } from 'react-router-dom'
import { projects } from '../data/projects'

type Params = {
  project?: string
}

export default function ProjectIntroPage() {
  const { project } = useParams<Params>()
  const meta = projects.find((item) => item.slug === project)

  if (!meta) return null

  useEffect(() => {
    const link = document.createElement('link')
    link.rel = 'preload'
    link.as = 'image'
    link.href = meta.imagePath
    link.setAttribute('fetchpriority', 'high')
    document.head.appendChild(link)

    return () => {
      document.head.removeChild(link)
    }
  }, [meta.imagePath])

  return (
    <div className="landing">
      <header className="hero">
        <div className="hero__copy">
          <p className="hero__eyebrow">Project</p>
          <h1>{meta.title}</h1>
          <p className="hero__subtitle">{meta.subtitle}</p>
          <div className="hero__cta">
            <NavLink
              className={({ isActive }) => `btn${isActive ? ' btn--primary-solar' : ''}`}
              to={`/projects/${meta.slug}`}
              end
            >
              Infographic
            </NavLink>
            <NavLink
              className={({ isActive }) => `btn${isActive ? ' btn--primary-solar' : ''}`}
              to={`/projects/${meta.slug}/star`}
              end
            >
              Summary
            </NavLink>
            <NavLink
              className={({ isActive }) => `btn${isActive ? ' btn--primary-solar' : ''}`}
              to={`/projects/${meta.slug}/report`}
              end
            >
              Report
            </NavLink>
            <NavLink
              className={({ isActive }) => `btn${isActive ? ' btn--primary-solar' : ''}`}
              to="/projects"
              end
            >
              Project List
            </NavLink>
          </div>
        </div>
      </header>

      <section className="section">
        <div className="project-hero">
          <img
            src={meta.imagePath}
            alt={`${meta.title} infographic`}
            loading="eager"
            decoding="async"
            fetchPriority="high"
          />
        </div>
      </section>
    </div>
  )
}
