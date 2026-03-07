# Refactoring Guide

## Goal
Refactoring checklist for reducing duplication and improving maintainability.

## Priority

### Priority 1: Extract `fetchText` utility (5 min)

**Current state:** duplicate logic across pages
- `App.tsx`
- `pages/ProjectsPage.tsx`
- `pages/MarkdownPage.tsx`
- `pages/AboutPage.tsx`

**Solution:** consolidate into `src/shared/content.ts`

```typescript
export const fetchText = async (url: string): Promise<string> => {
  const res = await fetch(url)
  if (!res.ok) return ''
  const contentType = res.headers.get('content-type') || ''
  const text = await res.text()
  if (contentType.includes('text/html')) return ''
  if (text.trim().toLowerCase().startsWith('<!doctype html')) return ''
  return text
}
```

Import pattern:
```typescript
import { fetchText } from '../shared/content'
```

---

### Priority 2: Introduce `PageLayout` component (15 min)

**Current state:** repeated page layout structure

**Solution:** create
```
src/pages/_shared/PageLayout.tsx
```

```typescript
import { Link } from 'react-router-dom'

interface PageLayoutProps {
  title: string
  eyebrow?: string
  children: React.ReactNode
  actions?: React.ReactNode
}

export default function PageLayout({ title, eyebrow, children, actions }: PageLayoutProps) {
  return (
    <div className="landing">
      <header className="hero">
        <div className="hero__copy">
          {eyebrow && <p className="hero__eyebrow">{eyebrow}</p>}
          <h1>{title}</h1>
          <div className="hero__cta">
            {actions}
            <Link className="btn" to="/">Landing</Link>
          </div>
        </div>
      </header>
      <section className="section">{children}</section>
    </div>
  )
}
```

Usage example (`AboutPage.tsx`):
```typescript
import PageLayout from './_shared/PageLayout'

export default function AboutPage() {
  const [content, setContent] = useState('')
  return (
    <PageLayout title="About Me">
      <ReactMarkdown remarkPlugins={[remarkGfm]}>
        {content || 'No content available.'}
      </ReactMarkdown>
    </PageLayout>
  )
}
```

---

### Priority 3: Fix filename typo (1 min)

**Current state:** `miscelleneous.md` typo

**Solution:** rename to `miscellaneous.md`

Related files:
- `app/public/content/resume/miscelleneous.md` -> `miscellaneous.md`
- update path usage in `pages/AboutPage.tsx`

---

## Target Structure

```
src/
├── pages/
│   ├── AboutPage.tsx
│   ├── AwardsPage.tsx
│   ├── EducationPage.tsx
│   ├── ExperiencePage.tsx
│   ├── MarkdownPage.tsx
│   └── ProjectsPage.tsx
├── shared/
│   └── content.ts
├── App.tsx
└── main.tsx
```

## Optional Improvements

| Item | Description |
|------|-------------|
| Loading state | Add `useState(true)` loading UI |
| Error handling | Replace silent catch with `console.error` |
| ESLint | Clean up `useEffect` dependency arrays |
