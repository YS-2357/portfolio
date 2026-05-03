import { useEffect, useState } from 'react'
import { parseMarkdownBlocks } from '../lib/markdownBlocks'
import { fetchText } from '../shared/content'
import PageShell from '../components/PageShell'
import OrbitalRing from '../components/OrbitalRing'

export default function ExperiencePage() {
  const [blocks, setBlocks] = useState<ReturnType<typeof parseMarkdownBlocks>>([])

  useEffect(() => {
    fetchText('/content/resume/work-experience.md')
      .then((text) => setBlocks(parseMarkdownBlocks(text)))
      .catch(() => setBlocks([]))
  }, [])

  return (
    <PageShell planet="venus">
      <OrbitalRing size={350} opacity={0.06} className="absolute bottom-16 left-0" style={{ position: 'absolute' }} />

      <div className="relative z-10 max-w-[1080px] mx-auto px-4 sm:px-6 lg:px-8 pt-14 pb-24">
        <p className="eyebrow mb-3">Career</p>
        <h1 className="text-4xl md:text-5xl font-bold mb-12" style={{ color: 'var(--card-bright)', letterSpacing: '-0.03em' }}>
          Experience
        </h1>

        {blocks.length === 0 ? (
          <div className="glass-card p-8">
            <p className="text-sm" style={{ color: 'var(--card-dim)' }}>내용이 없습니다.</p>
          </div>
        ) : (
          <div className="glass-card p-8 space-y-10">
            {blocks.map((block) => (
              <article key={block.heading} className="timeline-entry">
                <div className="flex flex-wrap justify-between gap-3 mb-2">
                  <div>
                    <h2 className="text-xl font-semibold" style={{ color: 'var(--card-bright)' }}>{block.title}</h2>
                    {block.subtitle && (
                      <p className="text-base mt-0.5" style={{ color: 'var(--card-dim)' }}>{block.subtitle}</p>
                    )}
                  </div>
                  {block.period && (
                    <span className="text-sm font-medium shrink-0 mt-1" style={{ color: 'var(--card-muted)' }}>{block.period}</span>
                  )}
                </div>

                {block.title.includes('인톡') && (
                  <div className="my-4">
                    <img
                      src="/asset/images/intalk/infographic.png"
                      alt="Intalk infographic"
                      loading="lazy"
                      decoding="async"
                      className="w-full rounded-xl"
                      style={{ border: '1px solid var(--card-border)' }}
                    />
                  </div>
                )}

                {block.paragraphs.map((text) => (
                  <p key={text} className="text-base leading-relaxed mb-3" style={{ color: 'var(--card-dim)' }}>
                    {text}
                  </p>
                ))}

                {block.bullets.length > 0 && (
                  <ul className="space-y-2 mt-3">
                    {block.bullets.map((bullet, i) => (
                      <li key={`${block.heading}-${i}`} className="text-sm" style={{ color: 'var(--card-text)' }}>
                        {bullet.label && (
                          <span className="font-semibold mr-1.5" style={{ color: 'var(--card-bright)' }}>{bullet.label}</span>
                        )}
                        {bullet.value && <span>{bullet.value}</span>}
                        {bullet.items && (
                          <ul className="mt-1.5 ml-4 space-y-1">
                            {bullet.items.map((item) => (
                              <li key={item} className="text-sm" style={{ color: 'var(--card-muted)' }}>{item}</li>
                            ))}
                          </ul>
                        )}
                      </li>
                    ))}
                  </ul>
                )}
              </article>
            ))}
          </div>
        )}
      </div>
    </PageShell>
  )
}
