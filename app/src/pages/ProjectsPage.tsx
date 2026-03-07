import { useEffect, useState } from 'react'
import { NavLink, Link } from 'react-router-dom'
import { projects } from '../data/projects'
import { fetchText, getSummaryLine } from '../shared/content'

export default function ProjectsPage() {
  const [content, setContent] = useState<Record<string, string>>({})

  useEffect(() => {
    Promise.all(projects.map((project) => fetchText(project.summaryPath))).then((texts) => {
      const next: Record<string, string> = {}
      texts.forEach((text, index) => {
        const project = projects[index]
        next[project.slug] = getSummaryLine(text, project.title)
      })
      setContent(next)
    })
  }, [])

  return (
    <div className="landing">
      <header className="hero">
        <div className="hero__copy">
          <p className="hero__eyebrow">Projects</p>
          <h1>Project Highlights</h1>
          <div className="hero__cta">
            <NavLink className={({ isActive }) => `btn${isActive ? ' btn--primary-solar' : ''}`} to="/projects" end>
              Projects
            </NavLink>
            <NavLink className={({ isActive }) => `btn${isActive ? ' btn--primary-solar' : ''}`} to="/" end>
              Landing
            </NavLink>
          </div>
        </div>
      </header>

      <section className="section">
        <div className="grid grid--3">
          {projects.map((project) => (
            <div className="card project-card" key={project.slug}>
              <h2>{project.title}</h2>
              <p>{project.cardSummary || content[project.slug] || '내용이 없습니다.'}</p>
              <div className="project-card__actions">
                <Link className="btn btn--primary-solar" to={`/projects/${project.slug}`}>
                  View Details
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
