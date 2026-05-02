import { useEffect, useState } from 'react'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import { fetchText } from '../shared/content'
import PageShell from '../components/PageShell'
import OrbitalRing from '../components/OrbitalRing'

export default function AboutPage() {
  const [content, setContent] = useState('')

  useEffect(() => {
    fetchText('/content/resume/miscelleneous.md')
      .then((text) => setContent(text))
      .catch(() => setContent(''))
  }, [])

  return (
    <PageShell>
      <OrbitalRing
        size={450}
        opacity={0.05}
        className="absolute top-16 right-0"
        style={{ position: 'absolute' }}
      />

      <div className="relative z-10 max-w-[1080px] mx-auto px-4 sm:px-6 lg:px-8 pt-14 pb-24">
        <p className="eyebrow mb-3">Personal</p>
        <h1 className="text-4xl md:text-5xl font-bold mb-12" style={{ color: 'var(--color-bright)', letterSpacing: '-0.03em' }}>
          About Me
        </h1>

        <div className="glass-card p-8">
          <div className="prose prose-invert max-w-none prose-headings:text-space-bright prose-a:text-solar prose-code:text-solar prose-code:bg-space-deep prose-pre:bg-space-deep prose-pre:border prose-pre:border-space-border">
            <ReactMarkdown remarkPlugins={[remarkGfm]} components={{ h1: () => null }}>
              {content || '내용이 없습니다.'}
            </ReactMarkdown>
          </div>
        </div>
      </div>
    </PageShell>
  )
}
