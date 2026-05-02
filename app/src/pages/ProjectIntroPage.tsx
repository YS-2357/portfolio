import { useEffect } from 'react'
import { NavLink, useParams } from 'react-router-dom'
import { projects } from '../data/projects'
import PageShell from '../components/PageShell'
import OrbitalRing from '../components/OrbitalRing'

type Params = { project?: string }

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
    return () => { document.head.removeChild(link) }
  }, [meta.imagePath])

  return (
    <PageShell planet="mercury">
      <OrbitalRing
        size={400}
        opacity={0.04}
        className="absolute top-24 right-8"
        style={{ position: 'absolute' }}
      />

      <div className="relative z-10 max-w-[1080px] mx-auto px-4 sm:px-6 lg:px-8 pt-14 pb-24">
        <p className="eyebrow mb-3">Project</p>
        <h1 className="text-4xl md:text-5xl font-bold mb-2" style={{ color: 'var(--card-bright)', letterSpacing: '-0.03em' }}>
          {meta.title}
        </h1>
        {meta.subtitle && (
          <p className="text-base mb-8" style={{ color: 'var(--card-dim)' }}>{meta.subtitle}</p>
        )}

        <div className="tab-nav mb-10 overflow-x-auto">
          <NavLink
            to={`/projects/${meta.slug}`}
            end
            className={({ isActive }) => `tab-link${isActive ? ' active' : ''}`}
          >
            Infographic
          </NavLink>
          <NavLink
            to={`/projects/${meta.slug}/star`}
            end
            className={({ isActive }) => `tab-link${isActive ? ' active' : ''}`}
          >
            Summary
          </NavLink>
          <NavLink
            to={`/projects/${meta.slug}/report`}
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

        <div className="flex justify-center">
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
      </div>
    </PageShell>
  )
}
