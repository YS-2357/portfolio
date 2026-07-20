import { useEffect, useState } from 'react'
import { parseMarkdownBlocks } from '../lib/markdownBlocks'
import { STATIC_META } from '../data/routeMeta'
import { useDocumentMeta } from '../lib/useDocumentMeta'
import { fetchText } from '../shared/content'
import PageShell from '../components/PageShell'
import OrbitalRing from '../components/OrbitalRing'

export default function AboutPage() {
  useDocumentMeta(STATIC_META['/about'].title, STATIC_META['/about'].description)
  const [blocks, setBlocks] = useState<ReturnType<typeof parseMarkdownBlocks>>([])

  useEffect(() => {
    fetchText('/content/resume/miscelleneous.md')
      .then((text) => setBlocks(parseMarkdownBlocks(text)))
      .catch(() => setBlocks([]))
  }, [])

  const nationality = blocks.find((b) => b.title.includes('국적'))
  const hobbies     = blocks.find((b) => b.title.includes('취미'))
  const military    = blocks.find((b) => b.title.includes('병역'))

  return (
    <PageShell system="natural">
      <OrbitalRing size={450} opacity={0.07} className="absolute top-16 right-0" style={{ position: 'absolute' }} />

      <div className="relative z-10 max-w-[1080px] mx-auto px-4 sm:px-6 lg:px-8 pt-14 pb-24">
        <div className="flex items-center gap-5 mb-3">
          <span className="glyph text-7xl md:text-8xl">ℕ</span>
          <div>
            <p className="eyebrow mb-2">Natural numbers · About</p>
            <h1 className="text-4xl md:text-5xl font-bold" style={{ color: 'var(--card-bright)', letterSpacing: '-0.03em' }}>
              About Me
            </h1>
          </div>
        </div>
        <p className="text-base mb-12 max-w-2xl" style={{ color: 'var(--card-dim)' }}>
          ℕ — 셈의 첫 단위이자 모든 것이 시작되는 곳. 코드 너머, 나를 이루는 가장 근본의 것들.
        </p>

        <div className="space-y-6">

          {/* ── Nationality ── */}
          {nationality && (
            <div className="glass-card p-6">
              <h2 className="eyebrow mb-4">Nationality</h2>
              <div className="flex flex-wrap gap-3">
                <div
                  className="flex items-center gap-2.5 rounded-xl px-4 py-3"
                  style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.10)' }}
                >
                  <span className="text-2xl">🇰🇷</span>
                  <div>
                    <p className="text-base font-semibold" style={{ color: 'var(--card-bright)' }}>Korea</p>
                    <p className="text-sm" style={{ color: 'var(--card-muted)' }}>대한민국</p>
                  </div>
                </div>
                <div
                  className="flex items-center gap-2.5 rounded-xl px-4 py-3"
                  style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.10)' }}
                >
                  <span className="text-2xl">🇺🇸</span>
                  <div>
                    <p className="text-base font-semibold" style={{ color: 'var(--card-bright)' }}>USA</p>
                    <p className="text-sm" style={{ color: 'var(--card-muted)' }}>United States</p>
                  </div>
                </div>
                <div className="flex items-center self-center ml-2">
                  <span className="project-label text-sm px-3 py-1.5">Dual Citizenship</span>
                </div>
              </div>
            </div>
          )}

          {/* ── Hobbies ── */}
          {hobbies && (
            <div>
              <h2 className="eyebrow mb-4">Hobbies</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

                {/* Coffee */}
                <div className="glass-card p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-3xl">☕</span>
                    <h3 className="text-xl font-semibold" style={{ color: 'var(--card-bright)' }}>Coffee</h3>
                  </div>
                  <p className="text-base mb-4" style={{ color: 'var(--card-dim)' }}>
                    단순한 취미를 넘어 체계적으로 공부했습니다.
                  </p>
                  <span className="project-label text-sm px-3 py-1.5">바리스타 자격증 취득</span>
                </div>

                {/* Running */}
                <div className="glass-card p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-3xl">🏃</span>
                    <h3 className="text-xl font-semibold" style={{ color: 'var(--card-bright)' }}>Running</h3>
                  </div>
                  <div className="flex items-end gap-3 mb-2">
                    <span className="text-4xl font-bold" style={{ color: 'var(--accent)' }}>30:30</span>
                    <span className="text-base mb-1" style={{ color: 'var(--card-dim)' }}>5K best</span>
                  </div>
                  <p className="text-sm" style={{ color: 'var(--card-muted)' }}>5.01 km · 06'06"/km pace</p>
                </div>
              </div>
            </div>
          )}

          {/* ── Military ── */}
          {military && (
            <div className="glass-card p-6">
              <div className="flex items-center gap-3 mb-6">
                <span className="text-2xl">🪖</span>
                <h2 className="eyebrow" style={{ marginBottom: 0 }}>Military Service</h2>
              </div>
              <div className="space-y-5">

                <div className="timeline-entry">
                  <p className="text-base font-semibold" style={{ color: 'var(--card-bright)' }}>육군 병장 만기 전역</p>
                  <p className="text-sm mt-1" style={{ color: 'var(--card-dim)' }}>Republic of Korea Army · Honorable Discharge</p>
                </div>

                <div className="timeline-entry">
                  <p className="text-base font-semibold" style={{ color: 'var(--card-bright)' }}>연대 다독왕 수상</p>
                  <p className="text-sm mt-1" style={{ color: 'var(--card-dim)' }}>Most-Read Soldier in Regiment — reading as a habit, even in service</p>
                </div>

                <div className="timeline-entry">
                  <p className="text-base font-semibold" style={{ color: 'var(--card-bright)' }}>모범병사 나라사랑 투어 2회</p>
                  <p className="text-sm mt-1" style={{ color: 'var(--card-dim)' }}>Exemplary Soldier Award — national heritage tour, twice</p>
                </div>

                <div className="timeline-entry">
                  <p className="text-base font-semibold mb-1" style={{ color: 'var(--card-bright)' }}>
                    한미연합훈련{' '}
                    <span style={{ color: 'var(--accent)' }}>Key Resolve</span>{' '}
                    참가
                  </p>
                  <p className="text-sm mt-1" style={{ color: 'var(--card-dim)' }}>ROK-US Combined Forces Command joint exercise</p>
                </div>

              </div>
            </div>
          )}

        </div>
      </div>
    </PageShell>
  )
}
