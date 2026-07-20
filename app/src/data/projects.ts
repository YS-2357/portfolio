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
    cardSummary: 'AWS 서버·DB 인프라 전체를 코드(Terraform)로 만들고 배포·테스트까지 자동화한 커뮤니티 웹앱 (ALB→EC2→RDS)',
    subtitle: '인프라를 코드로 세우고(IaC), 배포·모니터링을 거쳐 흔적 없이 철거되는지까지 전체 수명주기 검증',
    ctaLabel: 'Terraform 아키텍처·검증 →',
    primaryMetric: '50 → 0',
    primaryMetricLabel: '리소스 50개 생성 → 전부 삭제 검증 (Terraform apply→destroy)',
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
    cardSummary: '서버 없이 AWS Lambda 11개 + API Gateway + DynamoDB로 돌아가는 실시간 채팅 — 안 쓸 때 비용 거의 0',
    subtitle: '일반 요청(REST)과 실시간 연결(WebSocket)을 나눠 설계, Terraform 명령 한 번으로 전체 배포',
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
    cardSummary: '여러 AI 코딩 도구(Claude·Codex·Kiro)의 규칙·설정을 한 곳(SSOT)에서 관리, 품질은 테스트·린터 같은 자동 검사로 판정',
    subtitle: '여러 AI 에이전트를 규칙과 구조로 안정되게 운영하는 하니스(harness) 설계',
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
    cardSummary: '질문 하나로 8개 AI 모델(LLM)을 동시에 호출해 답변을 실시간 비교·요약하는 서비스',
    subtitle: '한 요청을 여러 모델로 동시에 뿌리고(팬아웃) 스트리밍으로 받아 순위를 매기는 파이프라인 설계',
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
    cardSummary: 'AI 검색에 잘 노출되도록(GEO) 소상공인 상세페이지를 자동 생성 — K-Digital 해커톤 장관상 수상작',
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
    cardSummary: '정부 입찰 제안요청서(RFP)를 요약하고 질문에 답하는 시스템 — 키워드+의미 검색(Hybrid Search)과 재순위화(Re-ranking)',
    subtitle: '문서를 찾아 근거와 함께 답하는 RAG 파이프라인과 QA 챗봇 설계',
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
    cardSummary: '사진 속 알약을 찾아내는 객체 탐지 모델(YOLOv8) — 데이터 준비부터 학습·평가까지 파이프라인 구현',
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
