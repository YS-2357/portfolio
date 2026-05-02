import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { projects } from './data/projects'
import { fetchText, getSummaryLine } from './shared/content'
import PageShell from './components/PageShell'
import OrbitalRing from './components/OrbitalRing'
import './App.css'

const METRICS = [
  { value: '0.99334', label: 'mAP@0.5', sub: 'Pill Recognition' },
  { value: '−90%',   label: 'Search Time', sub: 'RFP RAG' },
  { value: '3rd/389', label: 'K-Digital Hackathon', sub: 'Ministry of Labor Award' },
  { value: '6h→10m', label: 'Page Generation', sub: 'GEOPage' },
]

const SKILLS_AI = ['Python', 'YOLOv8', 'LangChain', 'LangGraph', 'FAISS', 'Chroma', 'LLM API']
const SKILLS_ENG = ['FastAPI', 'React', 'TypeScript', 'Firebase', 'Streamlit', 'GCP']

function App() {
  const [intro, setIntro] = useState('문제 정의에서 배포까지 실행하는 개발자')
  const [projectSummaries, setProjectSummaries] = useState<Record<string, string>>({})
  const [awards, setAwards] = useState({
    bootcamp: '제7회 K-디지털 해커톤 장관상: 우수상, 전체 389팀 중 3등',
    university: '전국 대학생 수학 경시대회: 동상, 제1분야',
  })
  const [contact, setContact] = useState({
    email: 'joungyoungsun20@gmail.com',
    github: 'https://github.com/YS-2357',
    blog: 'https://velog.io/@ys2357/posts',
    linkedin: 'https://www.linkedin.com/in/youngsun-joung-5b0584345',
    phone: '010-8766-4095',
  })

  const parseAwardSummary = (text: string) => {
    const line = text
      .split('\n')
      .map((v) => v.trim())
      .find((v) => v && !v.startsWith('#') && v.startsWith('-'))
    if (!line) return ''
    const raw = line.replace(/^-\s*/, '')
    const fields = raw.split('|').reduce<Record<string, string>>((acc, part) => {
      const [key, ...rest] = part.split(':')
      if (!key || rest.length === 0) return acc
      acc[key.trim()] = rest.join(':').trim()
      return acc
    }, {})
    const date = fields['일자']?.slice(0, 4) || ''
    const title = fields['수상명'] || ''
    const grade = fields['등급'] || ''
    const note = fields['비고'] || ''
    const parts = [date && `${date}년`, title, grade].filter(Boolean)
    const main = parts.join(' ')
    return note ? `${main} (${note})` : main
  }

  useEffect(() => {
    fetchText('/content/resume/one-line-intro.md')
      .then((text) => {
        const cleaned = text.replace(/^#\s+/m, '').trim()
        if (cleaned) setIntro(cleaned)
      })
      .catch(() => {})

    Promise.all(projects.map((p) => fetchText(p.summaryPath)))
      .then((texts) => {
        const next: Record<string, string> = {}
        texts.forEach((text, i) => {
          next[projects[i].slug] = getSummaryLine(text, projects[i].title)
        })
        setProjectSummaries(next)
      })
      .catch(() => {})

    Promise.all([
      fetchText('/content/awards/bootcamp/awards.md'),
      fetchText('/content/awards/university/awards.md'),
    ])
      .then(([bootcamp, university]) => {
        const b = parseAwardSummary(bootcamp)
        const u = parseAwardSummary(university)
        setAwards((prev) => ({
          bootcamp: b || prev.bootcamp,
          university: u || prev.university,
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
    <PageShell>
      <div className="relative z-10 max-w-[1080px] mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-24">

        {/* ── Hero ── */}
        <section className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-12 lg:gap-16 items-start mb-16">
          <div>
            <p className="eyebrow mb-4">M.S. Mathematics · AI Engineer</p>
            <h1 className="text-5xl md:text-6xl font-bold mb-2" style={{ color: 'var(--color-bright)', letterSpacing: '-0.03em' }}>
              Young Sun Joung
            </h1>
            <p className="text-2xl font-medium mb-5" style={{ color: 'var(--color-solar)' }}>정영선</p>
            <p className="text-base leading-relaxed mb-8 max-w-lg" style={{ color: 'var(--color-dim)' }}>
              {intro}
            </p>
            <div className="flex flex-wrap gap-3 mb-10">
              <Link to="/projects" className="btn-solar">View Projects</Link>
              <Link to="/about" className="btn-ghost">About →</Link>
            </div>
            <div className="flex flex-wrap gap-2">
              <a href={`mailto:${contact.email}`} className="btn-ghost text-xs px-3 py-1.5">
                {contact.email}
              </a>
              <a href={contact.github} target="_blank" rel="noreferrer" className="btn-ghost text-xs px-3 py-1.5">GitHub</a>
              <a href={contact.linkedin} target="_blank" rel="noreferrer" className="btn-ghost text-xs px-3 py-1.5">LinkedIn</a>
              <a href={contact.blog} target="_blank" rel="noreferrer" className="btn-ghost text-xs px-3 py-1.5">Velog</a>
            </div>
          </div>

          <div className="relative flex justify-center lg:justify-end">
            <OrbitalRing size={340} opacity={0.06} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
            <div className="glass-card p-8 text-center animate-float w-full max-w-[280px] relative z-10">
              <div
                className="w-20 h-20 rounded-full mx-auto mb-4 flex items-center justify-center text-3xl font-bold"
                style={{ background: 'rgba(242,193,78,0.1)', color: 'var(--color-solar)', border: '1px solid rgba(242,193,78,0.2)' }}
              >
                YS
              </div>
              <p className="text-sm font-semibold mb-1" style={{ color: 'var(--color-bright)' }}>Junior AI Engineer</p>
              <p className="text-xs" style={{ color: 'var(--color-muted)' }}>M.S. Mathematics</p>
              <div className="mt-4 pt-4 flex justify-center" style={{ borderTop: '1px solid var(--color-border)' }}>
                <span className="eyebrow" style={{ fontSize: '0.6rem' }}>Korea University · Inha Univ.</span>
              </div>
            </div>
          </div>
        </section>

        {/* ── Metrics ── */}
        <section className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
          {METRICS.map(({ value, label, sub }) => (
            <div key={label} className="stat-chip">
              <div className="text-2xl font-bold mb-1" style={{ color: 'var(--color-solar)' }}>{value}</div>
              <div className="text-xs font-semibold mb-0.5" style={{ color: 'var(--color-text)' }}>{label}</div>
              <div className="text-xs" style={{ color: 'var(--color-muted)' }}>{sub}</div>
            </div>
          ))}
        </section>

        {/* ── Projects ── */}
        <section className="mb-16">
          <div className="flex items-center justify-between mb-6">
            <h2 className="section-heading">Projects</h2>
            <Link to="/projects" className="btn-ghost text-xs px-3 py-1.5">View All →</Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {projects.map((project) => (
              <div key={project.slug} className="glass-card p-6 flex flex-col gap-3">
                <div className="flex items-center justify-between">
                  <span className="project-label">{project.label}</span>
                </div>
                <h3 className="text-base font-semibold" style={{ color: 'var(--color-bright)' }}>{project.title}</h3>
                <p className="text-sm leading-relaxed flex-1" style={{ color: 'var(--color-dim)' }}>
                  {project.cardSummary || projectSummaries[project.slug] || project.title}
                </p>
                <div className="flex justify-end pt-2" style={{ borderTop: '1px solid var(--color-border)' }}>
                  <Link to={`/projects/${project.slug}`} className="btn-solar text-xs px-3 py-1.5">
                    View Details →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-16">
          {/* ── Skills ── */}
          <section className="glass-card p-6">
            <h2 className="section-heading mb-5">Tech Stack</h2>
            <div className="space-y-4">
              <div>
                <p className="text-xs font-semibold tracking-widest uppercase mb-2" style={{ color: 'var(--color-muted)' }}>AI / ML</p>
                <div className="flex flex-wrap gap-2">
                  {SKILLS_AI.map((s) => <span key={s} className="skill-tag">{s}</span>)}
                </div>
              </div>
              <div>
                <p className="text-xs font-semibold tracking-widest uppercase mb-2" style={{ color: 'var(--color-muted)' }}>Engineering</p>
                <div className="flex flex-wrap gap-2">
                  {SKILLS_ENG.map((s) => <span key={s} className="skill-tag">{s}</span>)}
                </div>
              </div>
            </div>
          </section>

          {/* ── Experience preview ── */}
          <section className="glass-card p-6">
            <div className="flex items-center justify-between mb-5">
              <h2 className="section-heading">Experience</h2>
              <Link to="/experience" className="btn-ghost text-xs px-3 py-1.5">View All →</Link>
            </div>
            <div className="timeline-entry">
              <p className="text-sm font-semibold mb-0.5" style={{ color: 'var(--color-bright)' }}>메가존클라우드 · AI 아키텍처 유닛 매니저</p>
              <p className="text-xs mb-2" style={{ color: 'var(--color-muted)' }}>2026.02.09 – 현재</p>
              <p className="text-sm leading-relaxed" style={{ color: 'var(--color-dim)' }}>
                AI 아키텍처 유닛 매니저, 클라우드 기반 AI 솔루션 아키텍처 설계 및 팀 운영
              </p>
            </div>
          </section>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-16">
          {/* ── Education preview ── */}
          <section className="glass-card p-6">
            <div className="flex items-center justify-between mb-5">
              <h2 className="section-heading">Education</h2>
              <Link to="/education" className="btn-ghost text-xs px-3 py-1.5">View All →</Link>
            </div>
            <div className="space-y-4">
              {[
                { title: '코드잇 스프린트 AI 엔지니어 01기', period: '2024.12 – 2025.07' },
                { title: '고려대학교 수학과 석사', period: '2019.03 – 2024.08' },
                { title: '인하대학교 수학과 학사', period: '2013.03 – 2019.02' },
              ].map((item) => (
                <div key={item.title} className="flex justify-between gap-4 items-start">
                  <p className="text-sm font-medium" style={{ color: 'var(--color-text)' }}>{item.title}</p>
                  <p className="text-xs shrink-0" style={{ color: 'var(--color-muted)' }}>{item.period}</p>
                </div>
              ))}
            </div>
          </section>

          {/* ── Awards preview ── */}
          <section className="glass-card p-6">
            <div className="flex items-center justify-between mb-5">
              <h2 className="section-heading">Awards</h2>
              <Link to="/awards" className="btn-ghost text-xs px-3 py-1.5">View All →</Link>
            </div>
            <div className="space-y-3">
              <p className="text-sm leading-relaxed" style={{ color: 'var(--color-dim)' }}>{awards.bootcamp}</p>
              <p className="text-sm leading-relaxed" style={{ color: 'var(--color-dim)' }}>{awards.university}</p>
            </div>
          </section>
        </div>

        {/* ── Contact ── */}
        <section className="glass-card p-6 text-center">
          <p className="eyebrow mb-3">Contact</p>
          <p className="text-sm mb-5" style={{ color: 'var(--color-dim)' }}>
            {contact.phone}
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <a href={`mailto:${contact.email}`} className="btn-solar text-xs px-4 py-2">Email</a>
            <a href={contact.github} target="_blank" rel="noreferrer" className="btn-ghost text-xs px-4 py-2">GitHub</a>
            <a href={contact.linkedin} target="_blank" rel="noreferrer" className="btn-ghost text-xs px-4 py-2">LinkedIn</a>
            <a href={contact.blog} target="_blank" rel="noreferrer" className="btn-ghost text-xs px-4 py-2">Velog</a>
          </div>
        </section>

      </div>

      {/* Decorative orbital ring bottom-right */}
      <OrbitalRing
        size={300}
        opacity={0.05}
        rotate={25}
        className="absolute bottom-12 right-8"
        style={{ position: 'absolute' }}
      />
    </PageShell>
  )
}

export default App
