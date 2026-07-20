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
  ctaLabel: string
  primaryMetric: string
  primaryMetricLabel: string
  featured: boolean
  group: 'codeit' | 'side'
}

export const projects: ProjectMeta[] = [
  {
    slug: 'terraform-3tier',
    title: 'AWS 3-tier 커뮤니티 웹앱 (Terraform IaC)',
    label: 'IaC',
    imagePath: '/asset/images/projects/terraform-3tier/infographic.png',
    contentBasePath: '/content/projects/terraform-3tier',
    summaryPath: '/content/projects/terraform-3tier/star.md',
    pages: ['star'],
    cardSummary: 'ALB→EC2→RDS 전 구간 Terraform 관리, SSM 배포·e2e/a11y 검증까지 완료한 커뮤니티 앱',
    subtitle: '인프라 코드화부터 배포·관측성·철거 검증까지 전체 수명주기',
    ctaLabel: 'Terraform 아키텍처·검증 →',
    primaryMetric: '50 → 0',
    primaryMetricLabel: 'apply→destroy 리소스 검증',
    featured: true,
    group: 'side',
  },
  {
    slug: 'serverless-chat',
    title: 'AWS 서버리스 실시간 채팅',
    label: 'Serverless',
    imagePath: '/asset/images/projects/serverless-chat/infographic.png',
    contentBasePath: '/content/projects/serverless-chat',
    summaryPath: '/content/projects/serverless-chat/star.md',
    pages: ['star'],
    cardSummary: 'Lambda 11개(Python 8 + Node 3) + API Gateway + DynamoDB, 유휴 비용 ~0 실시간 채팅',
    subtitle: 'REST·WebSocket 이원 구성과 Terraform 단일 패스 배포',
    ctaLabel: '서버리스 채팅 설계 →',
    primaryMetric: '',
    primaryMetricLabel: '',
    featured: false,
    group: 'side',
  },
  {
    slug: 'ai-harness',
    title: 'AI 개발 하니스 (멀티 에이전트 SSOT)',
    label: 'DevX',
    imagePath: '/asset/images/projects/ai-harness/infographic.svg',
    contentBasePath: '/content/projects/ai-harness',
    summaryPath: '/content/projects/ai-harness/star.md',
    pages: ['star'],
    cardSummary: 'Claude·Codex·Kiro 공용 원칙/스킬/설정을 SSOT로 관리, 결정적 검증 게이트로 품질 판정',
    subtitle: '멀티 AI 에이전트 운영을 구조로 푸는 하니스 엔지니어링',
    ctaLabel: 'AI 하니스 설계 →',
    primaryMetric: '',
    primaryMetricLabel: '',
    featured: false,
    group: 'side',
  },
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
    ctaLabel: 'Compare-AI 사례 →',
    primaryMetric: '',
    primaryMetricLabel: '',
    featured: false,
    group: 'codeit',
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
    ctaLabel: 'GEOPage 상세 →',
    primaryMetric: '3rd / 389',
    primaryMetricLabel: 'K-Digital Hackathon',
    featured: true,
    group: 'codeit',
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
    ctaLabel: 'RFPilot RAG 설계 →',
    primaryMetric: '',
    primaryMetricLabel: '',
    featured: false,
    group: 'codeit',
  },
  {
    slug: 'pill-recognition',
    title: 'AI 기반 알약 이미지 객체 탐지',
    label: 'AI',
    imagePath: '/asset/images/projects/codeit/pill-recognition/infographic.png',
    contentBasePath: '/content/projects/codeit/pill-recognition',
    summaryPath: '/content/projects/codeit/pill-recognition/summary.md',
    pages: ['star', 'report'],
    cardSummary: 'YOLOv8 기반 알약 객체 탐지 모델 — 객체 탐지 파이프라인 구현',
    subtitle: '정확도와 재현성을 동시에 확보한 헬스케어 탐지 시스템',
    ctaLabel: '알약 탐지 파이프라인 →',
    primaryMetric: '',
    primaryMetricLabel: '',
    featured: false,
    group: 'codeit',
  },
]

export const featuredProjects = projects.filter((p) => p.featured)
export const bootcampProjects = projects.filter((p) => p.group === 'codeit' && !p.featured)
