import { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import { fetchText } from '../shared/content'

export default function AboutPage() {
  const [content, setContent] = useState('')

  useEffect(() => {
    fetchText('/content/resume/miscelleneous.md')
      .then((text) => setContent(text))
      .catch(() => setContent(''))
  }, [])

  return (
    <div className="landing">
      <header className="hero">
        <div className="hero__copy">
          <h1>About Me</h1>
          <div className="hero__cta">
            <NavLink className={({ isActive }) => `btn${isActive ? ' btn--primary-solar' : ''}`} to="/about" end>
              About Me
            </NavLink>
            <NavLink className={({ isActive }) => `btn${isActive ? ' btn--primary-solar' : ''}`} to="/" end>
              Landing
            </NavLink>
          </div>
        </div>
      </header>

      <section className="section markdown">
        <ReactMarkdown remarkPlugins={[remarkGfm]} components={{ h1: () => null }}>
          {content || '내용이 없습니다.'}
        </ReactMarkdown>
      </section>
    </div>
  )
}
