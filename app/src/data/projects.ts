export type ProjectMeta = {
  slug: string
  title: string
  label: string
  imagePath: string
  contentBasePath: string
  summaryPath: string
  pages: Array<'star' | 'report'>
  cardSummary: string
  subtitle: string
  primaryMetric: string
  primaryMetricLabel: string
  featured: boolean
}

export const projects: ProjectMeta[] = [
  {
    slug: 'compare-ai',
    title: 'Compare-AI: 멀티 LLM 응답 비교·요약',
    label: 'LLM',
    imagePath: '/asset/images/projects/compare-ai/infographic.png',
    contentBasePath: '/content/projects/codeit/compare-ai',
    summaryPath: '/content/projects/codeit/compare-ai/summary.md',
    pages: ['star', 'report'],
    cardSummary: '단일 쿼리로 8개 LLM을 병렬 호출해 응답을 실시간 비교·요약하는 서비스',
    subtitle: '멀티 모델 팬아웃·스트리밍·랭킹 파이프라인 설계/구현',
    primaryMetric: '8 LLMs',
    primaryMetricLabel: '병렬 동시 호출',
    featured: true,
  },
  {
    slug: 'geo-product-page',
    title: 'GEOPage: 소상공인 상세페이지 자동 생성',
    label: 'GEO',
    imagePath: '/asset/images/projects/codeit/geo-product-page/infographic.png',
    contentBasePath: '/content/projects/codeit/geo-product-page',
    summaryPath: '/content/projects/codeit/geo-product-page/summary.md',
    pages: ['star', 'report'],
    cardSummary: 'GEO 최적화 기반 소상공인 상세페이지 자동 생성 — K-Digital 장관상 수상작',
    subtitle: '데이터 분석→자동 생성→출력까지 이어지는 End-to-End 흐름',
    primaryMetric: '6h → 10m',
    primaryMetricLabel: '페이지 제작 시간',
    featured: false,
  },
  {
    slug: 'rfp-rag',
    title: 'RFPilot: B2G 제안서 분석 RAG',
    label: 'RAG',
    imagePath: '/asset/images/projects/codeit/rfp-rag/infographic.png',
    contentBasePath: '/content/projects/codeit/rfp-rag',
    summaryPath: '/content/projects/codeit/rfp-rag/summary.md',
    pages: ['star', 'report'],
    cardSummary: 'Hybrid Search + Re-ranking 기반 RFP 문서 요약·질의응답 시스템',
    subtitle: '최적화된 RAG 파이프라인과 QA 챗봇 설계',
    primaryMetric: '−90%',
    primaryMetricLabel: '문서 검색 시간',
    featured: false,
  },
  {
    slug: 'pill-recognition',
    title: 'AI 기반 알약 이미지 객체 탐지',
    label: 'AI',
    imagePath: '/asset/images/projects/codeit/pill-recognition/infographic.png',
    contentBasePath: '/content/projects/codeit/pill-recognition',
    summaryPath: '/content/projects/codeit/pill-recognition/summary.md',
    pages: ['star', 'report'],
    cardSummary: 'YOLOv8 기반 알약 객체 탐지 모델 — Kaggle 1위 달성',
    subtitle: '정확도와 재현성을 동시에 확보한 헬스케어 탐지 시스템',
    primaryMetric: '0.99334',
    primaryMetricLabel: 'mAP@0.5',
    featured: false,
  },
]

export const featuredProjects = projects.filter((p) => p.featured)
export const bootcampProjects = projects.filter((p) => !p.featured)
