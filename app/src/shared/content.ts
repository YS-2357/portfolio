export const fetchText = async (url: string) => {
  const res = await fetch(url)
  if (!res.ok) return ''

  const contentType = res.headers.get('content-type') || ''
  const text = await res.text()

  if (contentType.includes('text/html')) return ''
  if (text.trim().toLowerCase().startsWith('<!doctype html')) return ''

  return text
}

export const getSummaryLine = (text: string, fallback: string) => {
  const line = text
    .split('\n')
    .map((value) => value.trim())
    .find(
      (value) =>
        value &&
        !value.startsWith('```') &&
        !value.startsWith('#') &&
        !value.startsWith('##') &&
        !value.startsWith('###') &&
        !value.startsWith('작성 예정'),
    )

  if (!line) return fallback
  return line.replace(/^[-*]+\s*/, '').trim() || fallback
}
