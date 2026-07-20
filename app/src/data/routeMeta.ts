import { projects, type ProjectMeta } from './projects'

export const SITE_URL = 'https://youngsun-joung.web.app'
export const SITE_SUFFIX = '정영선 | AI Engineer'

export type RouteMeta = {
  path: string
  title: string
  description: string
  /** Absolute-path PNG for og:image. Omitted when no PNG asset exists. */
  image?: string
}

export const STATIC_META: Record<string, { title: string; description: string }> = {
  '/': {
    title: '정영선 | AI Engineer · M.S. Mathematics',
    description:
      '수학 10년 연구에서 출발한 Forward Deployed Engineer. Amazon Bedrock 기반 AI Agent·RAG를 Terraform·CI/CD·검증 자동화로 운영 가능한 시스템까지 만듭니다.',
  },
  '/projects': {
    title: `Projects — ${SITE_SUFFIX}`,
    description:
      'AI Agent·RAG·AWS IaC 프로젝트 — Terraform 3-tier 웹앱, 서버리스 실시간 채팅, AI 개발 하니스, Codeit 부트캠프 프로젝트(GEOPage·RFPilot·Compare-AI·알약 탐지).',
  },
  '/about': {
    title: `About — ${SITE_SUFFIX}`,
    description: '코드 너머, 나를 이루는 가장 근본의 것들 — 국적, 취미, 병역.',
  },
  '/experience': {
    title: `Experience — ${SITE_SUFFIX}`,
    description: 'Megazone Cloud AI Architect Unit Manager, (주)인톡 AI Developer Intern — 실무 이력.',
  },
  '/education': {
    title: `Education — ${SITE_SUFFIX}`,
    description: '고려대학교 수학 석사를 포함한 배움의 자취.',
  },
  '/awards': {
    title: `Awards — ${SITE_SUFFIX}`,
    description: '제7회 K-디지털 트레이닝 해커톤 고용노동부 장관상(389팀 중 3등) 등 수상 기록.',
  },
}

const pngOrUndefined = (imagePath: string) => (imagePath.endsWith('.png') ? imagePath : undefined)

export function projectMeta(p: ProjectMeta): { title: string; description: string } {
  return { title: `${p.title} — ${SITE_SUFFIX}`, description: p.cardSummary }
}

export function projectPageMeta(p: ProjectMeta, page: 'star' | 'report'): { title: string; description: string } {
  const label = page === 'star' ? 'STAR' : 'Report'
  return { title: `${p.title} · ${label} — ${SITE_SUFFIX}`, description: p.subtitle || p.cardSummary }
}

/** Every prerenderable route with its metadata — single source for prerender + sitemap. */
export function getRouteMetas(): RouteMeta[] {
  const staticRoutes: RouteMeta[] = Object.entries(STATIC_META).map(([path, m]) => ({ path, ...m }))
  const projectRoutes: RouteMeta[] = projects.flatMap((p) => [
    { path: `/projects/${p.slug}`, ...projectMeta(p), image: pngOrUndefined(p.imagePath) },
    ...p.pages.map((page) => ({
      path: `/projects/${p.slug}/${page}`,
      ...projectPageMeta(p, page),
      image: pngOrUndefined(p.imagePath),
    })),
  ])
  return [...staticRoutes, ...projectRoutes]
}
