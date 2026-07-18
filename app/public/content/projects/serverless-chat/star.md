# ✨ Info

- **프로젝트명**: AWS 서버리스 실시간 채팅
- **기간**: 2026.06 ~ 2026.07
- **형태**: 개인 사이드 프로젝트
- **자료**: 비공개 저장소 (요청 시 시연 가능)

# 🔹 S (Situation) — 배경

> 서버리스 아키텍처 강의에서 "엔드포인트마다 Lambda를 하나씩 배정하는" 마이크로 매니징 방식을 접하고, 듣고 끝내기 아쉬워 직접 검증하기로 했습니다.
>
> 서버리스 백엔드를 가장 잘 배울 수 있는 주제로 **실시간 채팅**을 골랐습니다 — REST와 WebSocket, 상태 관리, 인증이 전부 등장하기 때문입니다.

---

# 🔹 T (Task) — 목표와 과제

> EC2도 RDS도 없이 **Lambda + API Gateway + DynamoDB만으로** 채팅 풀스택을 구축하고, 유휴 비용 ~0을 유지하면서 Terraform 한 번의 apply로 전체가 배포되는 구조를 만드는 것.

---

# 🔹 A (Action) — 수행 작업

## ⚡ 서버리스 백엔드

- **엔드포인트당 Lambda 1개, 총 11개** — Python 8 + Node.js 3 혼합. 엔드포인트별로 언어·quota·동시성을 독립 운영
- HTTP API(native JWT authorizer) + WebSocket API(Lambda authorizer) 이원 구성
- DynamoDB 3테이블(rooms·messages·connections, GSI room-index), WebSocket **fan-out 브로드캐스트** — REST 삭제 이벤트도 WS로 실시간 전파
- Cognito(Hosted UI·OAuth2 PKCE) 인증, JWT 검증·IDOR 차단·throttling·동시성 제한

## 🏗️ 인프라·배포 (Terraform)

- CloudFront + S3(OAC, private origin) 정적 호스팅, CloudWatch Logs 11그룹 14일 보존
- **Terraform 단일 패스 배포**: 배포 시 런타임 `config.json`을 자동 생성해 프론트가 API 주소를 주입받는 구조 — 수동 설정 단계 0
- OpenAPI/AsyncAPI 명세로 FE/BE 계약 고정

## ✅ 검증

- Playwright 데모 하니스로 2브라우저 실시간 채팅 시나리오 자동 재현
- 메시지 삭제 브로드캐스트는 TDD로 구현, 아키텍처 문서는 교차 모델 리뷰로 검증

---

# 🔹 R (Result) — 결과

- Lambda·API Gateway·DynamoDB만으로 **유휴 비용 ~0** 실시간 채팅 서비스 완성
- `terraform apply` 1회로 인프라+설정 전체 배포 — 재현 절차 1단계
- 아키텍처 다이어그램(공식 AWS 아이콘)·데모 GIF 제작

# 📌 회고 (Reflection)

- 엔드포인트별 Lambda 분리는 이론이 아니라 **quota·언어 선택의 자유**라는 실익으로 다가왔습니다 — 같은 서비스 안에서 Python과 Node.js가 자연스럽게 공존합니다.
- 서버리스의 진짜 비용 모델(안 쓰면 0)을 청구서로 확인했고, cold start와 연결 상태 관리가 설계의 중심 변수임을 체감했습니다.
- API별 quota 차등, OpenAPI 기반 코드 생성, AI agent 연동은 다음 단계로 남겨두었습니다.
