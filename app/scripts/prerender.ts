// Post-build prerender: stamps route-specific <title>/description/canonical/OG/Twitter
// metadata into per-route copies of dist/index.html, and emits dist/sitemap.xml.
// Route list and metadata come from src/data/routeMeta.ts (single source of truth).
// Firebase Hosting serves real files before applying SPA rewrites, so these copies
// are what crawlers and social scrapers receive on direct hits.
import { mkdirSync, readFileSync, writeFileSync } from 'node:fs'
import { join } from 'node:path'
import { fileURLToPath } from 'node:url'
import { getRouteMetas, SITE_URL } from '../src/data/routeMeta'

const DIST = fileURLToPath(new URL('../dist', import.meta.url))

const escapeHtml = (s: string) =>
  s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;')

const template = readFileSync(join(DIST, 'index.html'), 'utf8')
if (!/<title>.*?<\/title>/s.test(template) || !template.includes('name="description"')) {
  throw new Error('prerender: dist/index.html is missing <title> or meta description — template changed?')
}

const routes = getRouteMetas()

for (const route of routes) {
  const canonical = `${SITE_URL}${route.path === '/' ? '/' : route.path}`
  const title = escapeHtml(route.title)
  const description = escapeHtml(route.description)

  const socialTags = [
    `    <link rel="canonical" href="${canonical}" />`,
    `    <meta property="og:type" content="website" />`,
    `    <meta property="og:title" content="${title}" />`,
    `    <meta property="og:description" content="${description}" />`,
    `    <meta property="og:url" content="${canonical}" />`,
    ...(route.image ? [`    <meta property="og:image" content="${SITE_URL}${route.image}" />`] : []),
    `    <meta name="twitter:card" content="${route.image ? 'summary_large_image' : 'summary'}" />`,
    `    <meta name="twitter:title" content="${title}" />`,
    `    <meta name="twitter:description" content="${description}" />`,
    ...(route.image ? [`    <meta name="twitter:image" content="${SITE_URL}${route.image}" />`] : []),
  ].join('\n')

  const html = template
    .replace(/<title>.*?<\/title>/s, `<title>${title}</title>`)
    .replace(/<meta name="description" content=".*?" \/>/s, `<meta name="description" content="${description}" />`)
    .replace('</head>', `${socialTags}\n  </head>`)

  if (!html.includes(canonical)) {
    throw new Error(`prerender: canonical injection failed for ${route.path}`)
  }

  const outDir = route.path === '/' ? DIST : join(DIST, route.path)
  mkdirSync(outDir, { recursive: true })
  writeFileSync(join(outDir, 'index.html'), html)
}

const sitemap = [
  '<?xml version="1.0" encoding="UTF-8"?>',
  '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
  ...routes.map((r) => `  <url><loc>${SITE_URL}${r.path === '/' ? '/' : r.path}</loc></url>`),
  '</urlset>',
  '',
].join('\n')
writeFileSync(join(DIST, 'sitemap.xml'), sitemap)

console.log(`prerender: ${routes.length} routes + sitemap.xml`)
