# Projects

## AI 개발 하니스 엔지니어링 (멀티 에이전트 SSOT) | 2026.05 – Ongoing
- 형태: 사이드 프로젝트
- 기술: Bash, Python, Node.js, Claude Code, Codex, Kiro
- GitHub: 비공개 저장소 (요청 시 시연 가능)
- 요약: 멀티 AI 코딩 에이전트(Claude/Codex/Kiro) 공용 설정·스킬을 단일 진실 공급원으로 관리하는 개발 하니스 구축
- 성과:
  - 에이전트 간 공용 원칙·스킬·런타임 설정 SSOT 구성 및 적용 자동화
  - 스킬 시스템 구축: 문서 생성·검증, 클라우드 아키텍처 다이어그램, 로컬 LLM 연동 등
  - 결정적 검증 게이트(테스트·린트·렌더 검증) 기반 품질 관리 체계 수립
  - spec 기반 AI-DLC 워크플로 설계, launchd 주간 자기개선 파이프라인 운영

## AWS 서버리스 실시간 채팅 서비스 | 2026.06 – 2026.07
- 형태: 사이드 프로젝트
- 기술: Terraform, AWS Lambda, API Gateway(REST·WebSocket), DynamoDB, Cognito, Python, Node.js
- GitHub: 비공개 저장소 (요청 시 시연 가능)
- 요약: EC2/RDS 없이 Lambda + API Gateway + DynamoDB만으로 실시간 채팅 풀스택을 Terraform으로 배포
- 성과:
  - 엔드포인트별 Lambda 11개 분리 설계(Python 8 + Node.js 3) — 언어·quota 독립 운영
  - OpenAPI/AsyncAPI contract-first로 FE/BE 계약 고정, WebSocket fan-out 브로드캐스트 구현
  - JWT 검증·IDOR 차단·throttling 등 보안 강화, 유휴 비용 ~0 서버리스 설계
  - Terraform 단일 패스 배포(런타임 config.json 자동 생성)로 배포 절차 1단계화

## AWS 3-tier 커뮤니티 웹앱 (Terraform IaC) | 2026.05 – 2026.07
- 형태: 사이드 프로젝트
- 기술: Terraform, AWS(ALB, EC2, RDS PostgreSQL, SSM, CloudWatch, Secrets Manager), FastAPI, React, Playwright
- GitHub: 비공개 저장소 (요청 시 시연 가능)
- 요약: ALB(public) → EC2(nginx·FastAPI, private) → RDS(private) 3-tier 전 구간을 Terraform 코드로 배포·운영
- 성과:
  - 게시판·검색·실시간 WebSocket 채팅·신고/관리자·다크모드를 8개 spec으로 완성
  - bastion 없이 SSM Run Command 배포 파이프라인 구축(로컬 빌드→S3→deploy)
  - CloudWatch 대시보드+알람 7종·SNS·예산 알림 등 관측성 구성
  - Playwright e2e + 접근성(a11y) 라이트/다크 이중 스캔으로 검증, 비밀은 Secrets Manager 참조로만 전달
  - terraform apply→destroy 재현성 검증(잔여 리소스 0)

## 멀티 LLM 응답 비교·요약 웹 서비스 | 2025.11 – 2026.03
- 형태: 사이드 프로젝트
- 기술: Python, Streamlit, FastAPI, LangChain, LangGraph, Supabase, Upstash, Render
- LLM API: OpenAI, Anthropic(Claude), Gemini, Perplexity, Mistral, Groq, Cohere, DeepSeek
- GitHub: https://github.com/YS-2357/compare-ai
- 요약: 멀티 LLM 병렬 호출과 실시간 스트리밍 기반 응답 비교·요약 서비스 개발
- 성과:
  - FastAPI·Streamlit 기반 MVP 완성 및 Render 최초 배포
  - 병렬 호출 파이프라인 구축(OpenAI, Anthropic, Gemini, Perplexity, Mistral, Groq, Cohere, DeepSeek)
  - 스트리밍 응답 요약/정렬 후 챗 UI 시각화
  - 사용자 인증(Supabase)·사용량 제한(Upstash) 적용으로 안정성 강화
  - FE/BE 분리 및 배포 구조 정비로 확장성 확보

## GEO 기반 상세페이지 자동생성 서비스 | 2025.06 – 2025.09
- 형태: 팀 프로젝트 (교육 기간 팀원 / K-디지털 해커톤 팀장)
- 기술: Python, React, FastAPI
- GitHub: https://github.com/gyurili/2025-GEO-Project
- 요약: GEO 최적화 기반 소상공인 상세페이지 자동 생성 도구 개발
- 성과:
  - 사용자 30명 설문: 마케팅 활용 의향 74%, 만족도 7.14/10, NPS 30점
  - SD+IP-Adapter로 이미지 품질 개선, Gemini API로 생성 속도 8→1초 단축
  - GPT·HF+LoRA로 한국어 GEO 텍스트 품질 향상
  - FastAPI+Streamlit 기반 MVP, GCP 테스트 환경 구축
  - 제작 소요 6h→10m, 건당 평균 비용 약 10만 원 절감

## RFP 문서 요약·질의응답 RAG 서비스 | 2025.05 – 2025.06
- 형태: 팀 프로젝트(팀장)
- 기술: Python, Streamlit, FastAPI, LangChain
- GitHub: https://github.com/gyurili/2025-RAG-Project
- 요약: 정부·기업 RFP 문서 대상 의미 기반 요약/QA 자동화 시스템 구현
- 성과:
  - PDF/HWP 100개 문서 자동 요약·QA 시스템으로 전환, 검색시간 90% 절감
  - PDF 처리 속도 93% 개선(14.42s→1.06s)
  - Header 기반 청킹 최적화로 청크 수 86% 감소(419→56개)
  - Hybrid Search+Re-ranking 적용으로 검색 정확도 4배 개선
  - 캐시/로딩 구조 개선으로 HF 모델 반복 로딩 제거, 추론 지연 1~2분 절감

## 알약탐지 AI 모델 개발 | 2025.03 – 2025.04
- 형태: 팀 프로젝트(팀장)
- 기술: Python, YOLO, Faster R-CNN
- GitHub: https://github.com/codeit-Al-Project1/pill_detection_ai
- 요약: 객체 탐지 기반 알약 위치/종류 자동 인식 모델 개발
- 성과:
  - YOLOv8-l: mAP@0.5 0.99334, Kaggle 0.99857
  - Faster R-CNN: mAP@0.5 0.8752, Kaggle 0.39573
  - 어노테이션 오류 26건 수정 및 Stratified Split 적용
  - Faster R-CNN(MobileNet_v3)·YOLOv8-l 파이프라인 구현/학습 자동화
  - Focal Loss 및 Loss Weight 조정으로 소수 클래스 성능 10%+ 개선
