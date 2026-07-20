import { Link } from 'react-router-dom'
import { projects } from '../data/projects'
import { STATIC_META } from '../data/routeMeta'
import { useDocumentMeta } from '../lib/useDocumentMeta'
import PageShell from '../components/PageShell'
import OrbitalRing from '../components/OrbitalRing'

export default function ProjectsPage() {
  useDocumentMeta(STATIC_META['/projects'].title, STATIC_META['/projects'].description)
  return (
    <PageShell system="complex">
      <OrbitalRing size={500} opacity={0.06} rotate={20} className="absolute top-16 right-0" style={{ position: 'absolute' }} />

      <div className="relative z-10 max-w-[1080px] mx-auto px-4 sm:px-6 lg:px-8 pt-14 pb-24">
        <div className="flex items-center gap-5 mb-3">
          <span className="glyph text-7xl md:text-8xl">ℂ</span>
          <div>
            <p className="eyebrow mb-2">Complex numbers · Projects</p>
            <h1 className="text-4xl md:text-5xl font-bold" style={{ color: 'var(--card-bright)', letterSpacing: '-0.03em' }}>
              Projects
            </h1>
          </div>
        </div>
        <p className="text-base mb-14 max-w-2xl" style={{ color: 'var(--card-dim)' }}>
          ℂ — 대수적으로 닫힌 곳. 모든 방정식이 해를 갖듯, 문제를 끝까지 풀어낸 결과물.
        </p>

        {/* Side projects */}
        <section className="mb-14">
          <div className="flex items-end justify-between gap-4 mb-4">
            <p className="eyebrow">Side Projects</p>
            <span className="text-sm" style={{ color: 'var(--card-dim)' }}>2026 · 개인</span>
          </div>
          <div className="glass-card overflow-hidden">
            {projects.filter((p) => p.group === 'side').map((p, i) => (
              <div
                key={p.slug}
                className="flex items-center justify-between gap-4 px-6 py-5 flex-wrap"
                style={i > 0 ? { borderTop: '1px solid var(--card-border)' } : {}}
              >
                <div className="flex items-center gap-3 min-w-0 flex-1">
                  <span className="project-label shrink-0">{p.label}</span>
                  <div className="min-w-0">
                    <p className="text-sm font-semibold truncate" style={{ color: 'var(--card-bright)' }}>{p.title}</p>
                    <p className="text-xs mt-0.5 truncate" style={{ color: 'var(--card-dim)' }}>{p.cardSummary}</p>
                  </div>
                </div>
                <Link to={`/projects/${p.slug}`} className="btn-ghost text-xs px-3 py-1.5 shrink-0">{p.ctaLabel}</Link>
              </div>
            ))}
          </div>
        </section>

        {/* Bootcamp — Codeit Sprint projects */}
        <section>
          <div className="flex items-end justify-between gap-4 mb-4">
            <p className="eyebrow">Codeit AI Sprint 01기</p>
            <span className="text-sm" style={{ color: 'var(--card-dim)' }}>2024.12 – 2025.07 · 팀장 3회</span>
          </div>
          <div className="glass-card overflow-hidden">
            {projects.filter((p) => p.group === 'codeit').map((p, i) => (
              <div
                key={p.slug}
                className="flex items-center justify-between gap-4 px-6 py-5 flex-wrap"
                style={i > 0 ? { borderTop: '1px solid var(--card-border)' } : {}}
              >
                <div className="flex items-center gap-3 min-w-0 flex-1">
                  <span className="project-label shrink-0">{p.label}</span>
                  <div className="min-w-0">
                    <p className="text-sm font-semibold truncate" style={{ color: 'var(--card-bright)' }}>{p.title}</p>
                    <p className="text-xs mt-0.5 truncate" style={{ color: 'var(--card-dim)' }}>{p.cardSummary}</p>
                  </div>
                </div>
                <Link to={`/projects/${p.slug}`} className="btn-ghost text-xs px-3 py-1.5 shrink-0">{p.ctaLabel}</Link>
              </div>
            ))}
          </div>
          <div className="mt-3 px-1">
            <span className="text-xs font-medium" style={{ color: 'var(--accent)' }}>
              🏆 제7회 K-디지털 해커톤 고용노동부 장관상 — 전체 389팀 중 3등 (GEOPage)
            </span>
          </div>
        </section>
      </div>
    </PageShell>
  )
}
