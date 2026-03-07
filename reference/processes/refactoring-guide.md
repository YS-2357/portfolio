# 리팩토링 가이드

## 목적
코드 중복 제거 및 유지보수성 향상을 위한 정리 항목.

## 우선순위

### 1순위: fetchText 유틸 분리 (5분)

**현황:** 여러 페이지에 동일한 함수 중복
- `App.tsx`
- `pages/ProjectsPage.tsx`
- `pages/MarkdownPage.tsx`
- `pages/AboutPage.tsx`

**해결:**
`src/shared/content.ts`로 공통화

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

각 파일에서:
```typescript
import { fetchText } from '../shared/content'
```

---

### 2순위: PageLayout 컴포넌트 (15분)

**현황:** 모든 페이지가 동일한 레이아웃 구조 반복

**해결:**
```
src/pages/_shared/PageLayout.tsx (신규 생성)
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
            <Link className="btn" to="/">랜딩</Link>
          </div>
        </div>
      </header>
      <section className="section">
        {children}
      </section>
    </div>
  )
}
```

사용 예시 (AboutPage.tsx):
```typescript
import PageLayout from './_shared/PageLayout'

export default function AboutPage() {
  const [content, setContent] = useState('')
  // ...
  return (
    <PageLayout title="About Me">
      <ReactMarkdown remarkPlugins={[remarkGfm]}>
        {content || '내용이 없습니다.'}
      </ReactMarkdown>
    </PageLayout>
  )
}
```

---

### 3순위: 파일명 오타 수정 (1분)

**현황:** `miscelleneous.md` (오타)

**해결:** `miscellaneous.md`로 수정

관련 파일:
- `app/public/content/resume/miscelleneous.md` → `miscellaneous.md`
- `pages/AboutPage.tsx` 경로 수정

---

## 정리 후 구조

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

## 추가 개선 (선택)

| 항목 | 설명 |
|------|------|
| 로딩 상태 | `useState(true)` → 로딩 UI 표시 |
| 에러 처리 | `.catch(() => {})` → `console.error` 추가 |
| ESLint | useEffect 의존성 배열 정리 |
