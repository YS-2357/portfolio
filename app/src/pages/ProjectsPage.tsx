import { Link } from 'react-router-dom'
import { featuredProjects, bootcampProjects } from '../data/projects'
import PageShell from '../components/PageShell'
import OrbitalRing from '../components/OrbitalRing'

export default function ProjectsPage() {
  return (
    <PageShell>
      <OrbitalRing size={500} opacity={0.05} rotate={20} className="absolute top-16 right-0" style={{ position: 'absolute' }} />

      <div className="relative z-10 max-w-[1080px] mx-auto px-4 sm:px-6 lg:px-8 pt-14 pb-24">
        <p className="eyebrow mb-3">Observatory</p>
        <h1 className="text-4xl md:text-5xl font-bold mb-2" style={{ color: 'var(--color-bright)', letterSpacing: '-0.03em' }}>
          Projects
        </h1>
        <p className="text-base mb-14" style={{ color: 'var(--color-dim)' }}>
          Production systems and research projects in AI engineering.
        </p>

        {/* Featured — active personal projects */}
        <section className="mb-14">
          <p className="eyebrow mb-4">Active</p>
          <div className="grid grid-cols-1 gap-6">
            {featuredProjects.map((p) => (
              <div key={p.slug} className="glass-card p-7 flex flex-col gap-4">
                <div className="flex items-start justify-between gap-4 flex-wrap">
                  <div className="flex items-center gap-3">
                    <span className="project-label">{p.label}</span>
                    <span className="text-xs px-2 py-0.5 rounded-full" style={{ background: 'rgba(96,165,250,0.12)', color: 'var(--color-nebula)', border: '1px solid rgba(96,165,250,0.2)' }}>
                      ongoing
                    </span>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold" style={{ color: 'var(--color-solar)' }}>{p.primaryMetric}</div>
                    <div className="text-xs" style={{ color: 'var(--color-muted)' }}>{p.primaryMetricLabel}</div>
                  </div>
                </div>
                <div>
                  <h2 className="text-xl font-semibold mb-2" style={{ color: 'var(--color-bright)' }}>{p.title}</h2>
                  <p className="text-sm leading-relaxed" style={{ color: 'var(--color-dim)' }}>{p.cardSummary}</p>
                </div>
                <div className="mt-auto flex justify-end pt-4" style={{ borderTop: '1px solid var(--color-border)' }}>
                  <Link to={`/projects/${p.slug}`} className="btn-solar text-xs px-4 py-2">View Details →</Link>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Bootcamp — Codeit Sprint projects */}
        <section>
          <div className="flex items-end justify-between gap-4 mb-4">
            <p className="eyebrow">Codeit AI Sprint 01기</p>
            <span className="text-xs" style={{ color: 'var(--color-muted)' }}>2024.12 – 2025.07 · 팀장 3회</span>
          </div>
          <div className="glass-card overflow-hidden">
            {bootcampProjects.map((p, i) => (
              <div
                key={p.slug}
                className="flex items-center justify-between gap-4 px-6 py-5 flex-wrap"
                style={i > 0 ? { borderTop: '1px solid var(--color-border)' } : {}}
              >
                <div className="flex items-center gap-3 min-w-0 flex-1">
                  <span className="project-label shrink-0">{p.label}</span>
                  <div className="min-w-0">
                    <p className="text-sm font-semibold truncate" style={{ color: 'var(--color-bright)' }}>{p.title}</p>
                    <p className="text-xs mt-0.5 truncate" style={{ color: 'var(--color-dim)' }}>{p.cardSummary}</p>
                  </div>
                </div>
                <div className="flex items-center gap-5 shrink-0">
                  <div className="text-right">
                    <div className="text-lg font-bold" style={{ color: 'var(--color-solar)' }}>{p.primaryMetric}</div>
                    <div className="text-xs" style={{ color: 'var(--color-muted)' }}>{p.primaryMetricLabel}</div>
                  </div>
                  <Link to={`/projects/${p.slug}`} className="btn-ghost text-xs px-3 py-1.5">View →</Link>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-3 px-1">
            <span className="text-xs" style={{ color: 'var(--color-solar)' }}>🏆 제7회 K-디지털 해커톤 고용노동부 장관상 — 전체 389팀 중 3등 (GEOPage)</span>
          </div>
        </section>
      </div>
    </PageShell>
  )
}
