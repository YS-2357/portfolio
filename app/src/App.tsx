import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { featuredProjects, bootcampProjects } from './data/projects'
import { fetchText } from './shared/content'
import PageShell from './components/PageShell'
import OrbitalRing from './components/OrbitalRing'
import './App.css'

const METRICS = [
  { value: '3rd / 389', label: 'K-Digital Hackathon', sub: 'Ministry of Labor Award' },
]

const TRUST_SIGNALS = [
  { label: 'Megazone Cloud', sub: 'AI Architect Unit · Manager' },
  { label: 'AWS GenAI Pro', sub: 'AIP-C01 Beta · Early Adopter' },
  { label: 'Top 0.8%', sub: '3rd / 389 teams · K-Digital' },
]

const SKILLS_AI  = ['Claude', 'Codex', 'Kiro', 'LangChain', 'LangGraph']
const SKILLS_AWS = ['Amazon Bedrock', 'Amazon Q', 'SageMaker', 'Lambda', 'EC2']
const SKILLS_ENG = ['Python', 'FastAPI', 'React', 'TypeScript', 'Firebase']

function App() {
  const [intro, setIntro] = useState('')
  const [awards, setAwards] = useState({
    bootcamp: '제7회 K-디지털 해커톤 장관상: 우수상, 전체 389팀 중 3등',
    university: '전국 대학생 수학 경시대회: 동상, 제1분야',
  })
  const [contact, setContact] = useState({
    email: '',
    github: '',
    blog: '',
    linkedin: '',
    phone: '',
  })

  const parseAwardSummary = (text: string) => {
    const line = text.split('\n').map((v) => v.trim()).find((v) => v && !v.startsWith('#') && v.startsWith('-'))
    if (!line) return ''
    const raw = line.replace(/^-\s*/, '')
    const fields = raw.split('|').reduce<Record<string, string>>((acc, part) => {
      const [key, ...rest] = part.split(':')
      if (!key || rest.length === 0) return acc
      acc[key.trim()] = rest.join(':').trim()
      return acc
    }, {})
    const date  = fields['일자']?.slice(0, 4) || ''
    const title = fields['수상명'] || ''
    const grade = fields['등급'] || ''
    const note  = fields['비고'] || ''
    const main  = [date && `${date}년`, title, grade].filter(Boolean).join(' ')
    return note ? `${main} (${note})` : main
  }

  useEffect(() => {
    fetchText('/content/resume/one-line-intro.md')
      .then((text) => { const c = text.replace(/^#\s+/m, '').trim(); if (c) setIntro(c) })
      .catch(() => {})

    Promise.all([
      fetchText('/content/awards/bootcamp/awards.md'),
      fetchText('/content/awards/university/awards.md'),
    ])
      .then(([b, u]) => {
        setAwards((prev) => ({
          bootcamp: parseAwardSummary(b) || prev.bootcamp,
          university: parseAwardSummary(u) || prev.university,
        }))
      })
      .catch(() => {})

    fetchText('/content/resume/contact.md')
      .then((text) => {
        const next = { ...contact }
        text.split('\n').map((l) => l.trim()).filter(Boolean).forEach((line) => {
          const [rawKey, ...rest] = line.split(':')
          if (!rawKey || rest.length === 0) return
          const value = rest.join(':').trim()
          const key = rawKey.toLowerCase()
          if (key.includes('email') || key.includes('e-mail')) next.email = value
          if (key.includes('github')) next.github = value
          if (key.includes('linkedin')) next.linkedin = value
          if (key.includes('velog') || key.includes('blog')) next.blog = value
          if (key.includes('phone')) next.phone = value
        })
        setContact(next)
      })
      .catch(() => {})
  }, [])

  return (
    <PageShell planet="sun">
      <div className="relative z-10 max-w-[1080px] mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-24">

        {/* ── Hero ── */}
        <section className="grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-12 lg:gap-16 items-start mb-14">
          <div>
            <p className="eyebrow mb-4">AI Engineer · AWS GenAI Professional</p>
            <h1 className="text-5xl md:text-6xl font-bold mb-2" style={{ color: 'var(--card-bright)', letterSpacing: '-0.03em' }}>
              Young Sun Joung
            </h1>
            <p className="text-2xl font-medium mb-5" style={{ color: 'var(--color-solar)' }}>정영선</p>
            {intro && (
              <p className="text-base leading-relaxed mb-8 max-w-lg" style={{ color: 'var(--card-dim)' }}>
                {intro}
              </p>
            )}
            <div className="flex flex-wrap gap-3 mb-10">
              <Link to="/projects" className="btn-solar">View Projects</Link>
              <Link to="/experience" className="btn-ghost">Experience →</Link>
            </div>
            <div className="flex flex-wrap gap-2">
              {contact.email && (
                <a href={`mailto:${contact.email}`} className="btn-ghost text-xs px-3 py-1.5">{contact.email}</a>
              )}
              {contact.github && (
                <a href={contact.github} target="_blank" rel="noreferrer" className="btn-ghost text-xs px-3 py-1.5">GitHub</a>
              )}
              {contact.linkedin && (
                <a href={contact.linkedin} target="_blank" rel="noreferrer" className="btn-ghost text-xs px-3 py-1.5">LinkedIn</a>
              )}
              {contact.blog && (
                <a href={contact.blog} target="_blank" rel="noreferrer" className="btn-ghost text-xs px-3 py-1.5">Velog</a>
              )}
            </div>
          </div>

          {/* YS card — dark space interior */}
          <div className="relative flex justify-center lg:justify-end">
            <OrbitalRing size={320} opacity={0.08} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
            <div className="glass-card p-7 text-center animate-float w-full max-w-[260px] relative z-10">
              <div
                className="w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center text-2xl font-bold"
                style={{ background: 'rgba(242,193,78,0.15)', color: 'var(--color-solar)', border: '1px solid rgba(242,193,78,0.3)' }}
              >
                YS
              </div>
              <p className="text-sm font-semibold mb-1" style={{ color: 'var(--card-bright)' }}>AI Engineer</p>
              <p className="text-xs mb-3" style={{ color: 'var(--card-dim)' }}>M.S. Mathematics · Korea Univ.</p>
              <div className="space-y-2 pt-3" style={{ borderTop: '1px solid var(--card-border)' }}>
                {TRUST_SIGNALS.map((s) => (
                  <div key={s.label}>
                    <p className="text-xs font-semibold" style={{ color: 'var(--color-solar)' }}>{s.label}</p>
                    <p className="text-xs" style={{ color: 'var(--card-muted)' }}>{s.sub}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── K-Digital Award chip (only verified external metric) ── */}
        <section className="flex gap-4 mb-16">
          {METRICS.map(({ value, label, sub }) => (
            <div key={label} className="stat-chip flex-1 max-w-xs">
              <div className="text-2xl font-bold mb-1" style={{ color: 'var(--color-solar)' }}>{value}</div>
              <div className="text-xs font-semibold mb-0.5" style={{ color: 'var(--card-text)' }}>{label}</div>
              <div className="text-xs" style={{ color: 'var(--card-muted)' }}>{sub}</div>
            </div>
          ))}
        </section>

        {/* ── Featured Project (Compare-AI) ── */}
        <section className="mb-12">
          <div className="flex items-center justify-between mb-5">
            <h2 className="section-heading">Active Project</h2>
            <Link to="/projects" className="btn-ghost text-xs px-3 py-1.5">All Projects →</Link>
          </div>
          {featuredProjects.map((p) => (
            <div key={p.slug} className="glass-card p-7">
              <div className="flex items-start gap-3 flex-wrap mb-4">
                <span className="project-label">{p.label}</span>
                <span className="text-xs px-2 py-0.5 rounded-full" style={{ background: 'rgba(96,165,250,0.15)', color: 'var(--color-earth)', border: '1px solid rgba(96,165,250,0.25)' }}>
                  ongoing
                </span>
              </div>
              <h3 className="text-xl font-semibold mb-2" style={{ color: 'var(--card-bright)' }}>{p.title}</h3>
              <p className="text-sm leading-relaxed mb-5" style={{ color: 'var(--card-dim)' }}>{p.cardSummary}</p>
              <div className="flex justify-end pt-4" style={{ borderTop: '1px solid var(--card-border)' }}>
                <Link to={`/projects/${p.slug}`} className="btn-solar text-xs px-4 py-2">View Details →</Link>
              </div>
            </div>
          ))}
        </section>

        {/* ── Bootcamp Highlights ── */}
        <section className="mb-16">
          <div className="flex items-center justify-between mb-5">
            <h2 className="section-heading">Bootcamp Projects</h2>
            <span className="eyebrow" style={{ fontSize: '0.6rem' }}>Codeit AI Sprint 01기 · 2024.12–2025.07</span>
          </div>
          <div className="glass-card overflow-hidden">
            {bootcampProjects.map((p, i) => (
              <div
                key={p.slug}
                className="flex items-center justify-between gap-4 px-6 py-4 flex-wrap"
                style={i > 0 ? { borderTop: '1px solid var(--card-border)' } : {}}
              >
                <div className="flex items-center gap-3 min-w-0">
                  <span className="project-label shrink-0">{p.label}</span>
                  <span className="text-sm font-medium truncate" style={{ color: 'var(--card-text)' }}>{p.title}</span>
                </div>
                <Link to={`/projects/${p.slug}`} className="btn-ghost text-xs px-3 py-1.5 shrink-0">View →</Link>
              </div>
            ))}
          </div>
          <div className="mt-3 flex items-center gap-2">
            <span className="project-label">🏆</span>
            <p className="text-xs" style={{ color: 'var(--card-dim)' }}>{awards.bootcamp}</p>
          </div>
        </section>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-16">
          {/* ── Skills ── */}
          <section className="glass-card p-6">
            <h2 className="section-heading mb-5" style={{ color: 'var(--card-bright)' }}>Tech Stack</h2>
            <div className="space-y-4">
              <div>
                <p className="text-xs font-semibold tracking-widest uppercase mb-2" style={{ color: 'var(--card-muted)' }}>AI Agents</p>
                <div className="flex flex-wrap gap-2">
                  {SKILLS_AI.map((s) => <span key={s} className="skill-tag">{s}</span>)}
                </div>
              </div>
              <div>
                <p className="text-xs font-semibold tracking-widest uppercase mb-2" style={{ color: 'var(--card-muted)' }}>AWS</p>
                <div className="flex flex-wrap gap-2">
                  {SKILLS_AWS.map((s) => <span key={s} className="skill-tag">{s}</span>)}
                </div>
              </div>
              <div>
                <p className="text-xs font-semibold tracking-widest uppercase mb-2" style={{ color: 'var(--card-muted)' }}>Engineering</p>
                <div className="flex flex-wrap gap-2">
                  {SKILLS_ENG.map((s) => <span key={s} className="skill-tag">{s}</span>)}
                </div>
              </div>
            </div>
          </section>

          {/* ── Experience preview ── */}
          <section className="glass-card p-6">
            <div className="flex items-center justify-between mb-5">
              <h2 className="section-heading" style={{ color: 'var(--card-bright)' }}>Experience</h2>
              <Link to="/experience" className="btn-ghost text-xs px-3 py-1.5">View All →</Link>
            </div>
            <div className="space-y-5">
              <div className="timeline-entry">
                <p className="text-sm font-semibold mb-0.5" style={{ color: 'var(--card-bright)' }}>Megazone Cloud · Manager, AI Architect Unit</p>
                <p className="text-xs" style={{ color: 'var(--card-muted)' }}>2026.02 – 현재</p>
              </div>
              <div className="timeline-entry">
                <p className="text-sm font-semibold mb-0.5" style={{ color: 'var(--card-bright)' }}>(주)인톡 · AI Developer Intern</p>
                <p className="text-xs" style={{ color: 'var(--card-muted)' }}>2025.11 – 2026.01</p>
              </div>
            </div>
          </section>
        </div>

        {/* ── Contact ── */}
        <section className="glass-card p-6 text-center">
          <p className="eyebrow mb-3">Contact</p>
          {contact.phone && (
            <p className="text-sm mb-5" style={{ color: 'var(--card-dim)' }}>{contact.phone}</p>
          )}
          <div className="flex flex-wrap justify-center gap-3">
            {contact.email && (
              <a href={`mailto:${contact.email}`} className="btn-solar text-xs px-4 py-2">Email</a>
            )}
            {contact.github && (
              <a href={contact.github} target="_blank" rel="noreferrer" className="btn-ghost text-xs px-4 py-2">GitHub</a>
            )}
            {contact.linkedin && (
              <a href={contact.linkedin} target="_blank" rel="noreferrer" className="btn-ghost text-xs px-4 py-2">LinkedIn</a>
            )}
            {contact.blog && (
              <a href={contact.blog} target="_blank" rel="noreferrer" className="btn-ghost text-xs px-4 py-2">Velog</a>
            )}
          </div>
        </section>

      </div>

      <OrbitalRing size={300} opacity={0.05} rotate={25} className="absolute bottom-12 right-8" style={{ position: 'absolute' }} />
    </PageShell>
  )
}

export default App
