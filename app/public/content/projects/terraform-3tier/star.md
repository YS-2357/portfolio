# ✨ Info

- **프로젝트명**: AWS 3-tier 커뮤니티 웹앱 (Terraform IaC)
- **기간**: 2026.05 ~ 2026.07
- **형태**: 개인 사이드 프로젝트
- **자료**: 비공개 저장소 (요청 시 시연 가능)

# 🧾 Technical Evidence — 핵심 증거 요약

- **terraform apply → destroy 전체 재현**: 배포 리소스 50개, 철거 후 잔여 리소스 0
- **SSM Run Command 배포 파이프라인** — bastion 없이 로컬 빌드 → tarball → S3 → deploy.sh
- **Secrets Manager ARN 참조**로만 비밀 전달 (SSM 커맨드·로컬 파일에 비밀 미탑재)
- **CloudWatch 대시보드 + 알람 7종 + SNS + 예산 알림** 관측성 구성
- **Playwright e2e + a11y 라이트/다크 이중 스캔** fresh ALL_PASS
- **WebSocket 프록시 검증** — ALB 경유 두 브라우저 간 실시간 왕복(WS Upgrade)

# 🔹 S (Situation) — 배경

> 콘솔 클릭으로 만든 인프라는 재현이 불가능하고, 학습용 실습은 대부분 배포 직전에 멈춥니다.
>
> ALB → EC2 → RDS로 이어지는 고전적인 3-tier 아키텍처를 **전 구간 코드(Terraform)로 관리**하고, 그 위에 실제 사용 가능한 서비스를 올려 배포·운영·철거까지 전체 수명주기를 검증하는 것을 목표로 했습니다.

---

# 🔹 T (Task) — 목표와 과제

> 인프라 프로비저닝부터 애플리케이션 기능, 관측성, 보안, 검증 자동화까지 단독으로 설계·구현.
>
> 완료 기준을 "코드가 돌아간다"가 아니라 **재현 가능한 명령 기반 증거**(테스트 통과 로그, apply→destroy 잔여 리소스 0)로 정의했습니다.

---

# 🔹 A (Action) — 수행 작업

## 🏗️ 인프라 (Terraform)

- VPC·서브넷(public/private)·ALB·EC2·RDS PostgreSQL 전 구간 모듈화, S3 remote state
- bastion 없이 **SSM Run Command 배포 파이프라인**: 로컬 빌드 → tarball → S3 → deploy.sh
- 비밀은 값이 아닌 **Secrets Manager ARN 참조**로만 전달 (SSM 커맨드·로컬 파일에 비밀 미탑재)
- CloudWatch 대시보드 + 알람 7종(ALB 5xx 등) + SNS + 예산 알림 구성

## 💬 애플리케이션 (FastAPI + React)

- 게시판·조회수·추천·검색, 실시간 WebSocket 채팅, 신고/관리자, 다크모드를 8개 spec으로 단계 구현
- 관리자 권한은 2차 인증 토큰(fail-closed) 기반으로 부여, 신고 처리 흐름 포함
- 다크모드는 표면/텍스트 토큰화 + `prefers-color-scheme` + FOUC 방지 스크립트로 구현

## ✅ 검증 자동화

- Playwright e2e + **접근성(a11y) 라이트/다크 이중 스캔** — 다크 전용 위반 1건 검출·해소
- spec마다 검증 스크립트 작성, fresh 환경 ALL_PASS 로그를 증거로 완료 처리
- 교차 모델(AI) 코드리뷰 다회 라운드로 보안·대비(contrast)·레이스 컨디션 이슈 조기 발견

---

# 🔹 R (Result) — 결과

- **terraform apply → destroy 전체 재현 검증 완료** — 배포 리소스 50개, 철거 후 잔여 리소스 0
- WebSocket 채팅이 ALB를 거쳐 두 브라우저 간 실시간 왕복 — 프록시 계층 WS Upgrade 검증
- e2e·a11y·계약 테스트 fresh ALL_PASS 상태로 8개 spec 전부 종결
- 아키텍처 다이어그램·데모 영상·GIF 등 showcase 패키지 제작

# 📌 회고 (Reflection)

- dev 프록시와 운영 프록시(nginx)의 기능 패리티는 **명시적으로 점검해야 한다**는 것을 WS Upgrade 이슈로 체감했습니다.
- 비밀을 값이 아니라 참조로 전달하는 습관, 미검증 입력에 권한을 걸지 않는 원칙을 실제 사고 없이 몸에 붙였습니다.
- 단일 EC2(non-HA)·HTTP 등 학습용 한계는 의도된 범위로 명시 — 한계를 숨기지 않고 문서화하는 쪽이 더 신뢰를 준다고 판단했습니다.
