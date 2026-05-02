import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { projects } from '../data/projects'
import { fetchText, getSummaryLine } from '../shared/content'
import PageShell from '../components/PageShell'
import OrbitalRing from '../components/OrbitalRing'

export default function ProjectsPage() {
  const [content, setContent] = useState<Record<string, string>>({})

  useEffect(() => {
    Promise.all(projects.map((p) => fetchText(p.summaryPath))).then((texts) => {
      const next: Record<string, string> = {}
      texts.forEach((text, i) => {
        next[projects[i].slug] = getSummaryLine(text, projects[i].title)
      })
      setContent(next)
    })
  }, [])

  return (
    <PageShell>
      <OrbitalRing
        size={500}
        opacity={0.05}
        rotate={20}
        className="absolute top-16 right-0"
        style={{ position: 'absolute' }}
      />

      <div className="relative z-10 max-w-[1080px] mx-auto px-4 sm:px-6 lg:px-8 pt-14 pb-24">
        <p className="eyebrow mb-3">Observatory</p>
        <h1 className="text-4xl md:text-5xl font-bold mb-2" style={{ color: 'var(--color-bright)', letterSpacing: '-0.03em' }}>
          Project Highlights
        </h1>
        <p className="text-base mb-12" style={{ color: 'var(--color-dim)' }}>
          AI engineering projects — from model research to production deployment.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <div key={project.slug} className="glass-card p-7 flex flex-col gap-4">
              <div className="flex items-start justify-between gap-3">
                <span className="project-label">{project.label}</span>
              </div>
              <div>
                <h2 className="text-xl font-semibold mb-2" style={{ color: 'var(--color-bright)' }}>
                  {project.title}
                </h2>
                <p className="text-sm leading-relaxed" style={{ color: 'var(--color-dim)' }}>
                  {project.cardSummary || content[project.slug] || '내용이 없습니다.'}
                </p>
              </div>
              <div className="mt-auto flex justify-end pt-4" style={{ borderTop: '1px solid var(--color-border)' }}>
                <Link to={`/projects/${project.slug}`} className="btn-solar text-xs px-4 py-2">
                  View Details →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </PageShell>
  )
}
