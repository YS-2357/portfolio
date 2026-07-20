import { useEffect } from 'react'

/** Keeps document title/description in sync during SPA navigation.
 *  Crawler-facing metadata is baked at build time by scripts/prerender.ts. */
export function useDocumentMeta(title: string, description?: string) {
  useEffect(() => {
    document.title = title
    if (description) {
      document.querySelector('meta[name="description"]')?.setAttribute('content', description)
    }
  }, [title, description])
}
