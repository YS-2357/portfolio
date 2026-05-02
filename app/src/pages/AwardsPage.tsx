import { useEffect, useState } from 'react'
import { fetchText } from '../shared/content'
import PageShell from '../components/PageShell'
import OrbitalRing from '../components/OrbitalRing'

type AwardItem = {
  title: string
  meta: string
  note?: string
  link?: string
}

type AwardSection = {
  title: string
  items: AwardItem[]
}

const normalizeValue = (value: string) => {
  const cleaned = value.trim()
  if (!cleaned || cleaned === '-') return ''
  return cleaned
}

const parseLine = (line: string): AwardItem | null => {
  const raw = line.replace(/^-\s*/, '')
  const fields = raw.split('|').reduce<Record<string, string>>((acc, part) => {
    const [key, ...rest] = part.split(':')
    if (!key || rest.length === 0) return acc
    acc[key.trim()] = rest.join(':').trim()
    return acc
  }, {})
  const date  = normalizeValue(fields['일자'] || '')
  const title = normalizeValue(fields['수상명'] || fields['대회'] || '')
  const grade = normalizeValue(fields['등급'] || fields['수상내역'] || '')
  const host  = normalizeValue(fields['주관'] || fields['기관'] || '')
  const note  = normalizeValue(fields['비고'] || fields['대상'] || '')
  const link  = normalizeValue(fields['링크'] || '')
  const meta  = [date, grade, host].filter(Boolean).join(' · ')
  return { title, meta, note: note || undefined, link: link || undefined }
}

const parseAwards = (text: string): AwardSection[] => {
  const lines = text.split('\n').map((l) => l.trim())
  const sections: AwardSection[] = []
  let current: AwardSection | null = null
  for (const line of lines) {
    if (!line || line.startsWith('# ')) continue
    if (line.startsWith('##')) {
      const cleaned = line.replace(/^##\s*/, '').replace(/^#+\s*/, '').trim()
      current = { title: cleaned, items: [] }
      sections.push(current)
      continue
    }
    if (line.startsWith('#')) continue
    if (line.startsWith('- ')) {
      const item = parseLine(line)
      if (item && current) current.items.push(item)
    }
  }
  return sections
}

export default function AwardsPage() {
  const [sections, setSections] = useState<AwardSection[]>([])

  useEffect(() => {
    fetchText('/content/awards/all.md')
      .then((text) => setSections(parseAwards(text)))
      .catch(() => setSections([]))
  }, [])

  return (
    <PageShell>
      <OrbitalRing
        size={320}
        opacity={0.05}
        rotate={15}
        className="absolute bottom-12 left-0"
        style={{ position: 'absolute' }}
      />

      <div className="relative z-10 max-w-[1080px] mx-auto px-4 sm:px-6 lg:px-8 pt-14 pb-24">
        <p className="eyebrow mb-3">Recognition</p>
        <h1 className="text-4xl md:text-5xl font-bold mb-12" style={{ color: 'var(--color-bright)', letterSpacing: '-0.03em' }}>
          Awards
        </h1>

        {sections.length === 0 ? (
          <div className="glass-card p-8">
            <p className="text-sm" style={{ color: 'var(--color-dim)' }}>내용이 없습니다.</p>
          </div>
        ) : (
          <div className="space-y-10">
            {sections.map((section) => (
              <div key={section.title}>
                <p className="eyebrow mb-4">{section.title}</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {section.items.map((item, i) => (
                    <div
                      key={`${section.title}-${i}`}
                      className="glass-card p-5 flex flex-col gap-1.5"
                    >
                      <p className="text-base font-semibold" style={{ color: 'var(--color-bright)' }}>{item.title}</p>
                      {item.meta && (
                        <p className="text-xs tracking-wide" style={{ color: 'var(--color-muted)' }}>{item.meta}</p>
                      )}
                      {item.note && (
                        <p className="text-xs italic" style={{ color: 'var(--color-dim)' }}>{item.note}</p>
                      )}
                      {item.link && (
                        <div className="mt-2">
                          <a
                            href={item.link}
                            target="_blank"
                            rel="noreferrer"
                            className="btn-solar text-xs px-3 py-1.5"
                          >
                            Details ↗
                          </a>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </PageShell>
  )
}
