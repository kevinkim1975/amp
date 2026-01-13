# MCP 서버 연결 확인 및 v0.dev MCP 테스트 가이드

## 단계 1: MCP 서버 연결 상태 확인

### 1.1 현재 상태 확인

**현재 상태**: ❌ MCP 서버가 연결되지 않음

`list_mcp_resources` 결과: `No MCP resources found`

### 1.2 연결 확인 방법

#### 방법 A: Cursor UI에서 확인
1. Cursor 설정 열기 (`Ctrl + ,`)
2. "MCP" 또는 "Model Context Protocol" 검색
3. MCP 서버 목록 확인
4. "v0-dev" 서버가 목록에 있는지 확인

#### 방법 B: 설정 파일 확인
```powershell
# PowerShell에서 실행
notepad $env:APPDATA\Cursor\User\settings.json
```

설정 파일에서 다음 항목 확인:
```json
{
  "mcp.servers": {
    "v0-dev": {
      "command": "C:\\Program Files\\nodejs\\node.exe",
      "args": [...]
    }
  }
}
```

### 1.3 연결 문제 해결

**문제 1: 설정 파일에 없음**
- `V0_DEV_MCP_설정_가이드.md` 참조하여 설정 추가
- Cursor 재시작

**문제 2: Node.js 경로 오류**
```powershell
# Node.js 설치 확인
node --version

# Node.js 경로 확인
where node
```

**문제 3: mcp-remote 패키지 없음**
```powershell
cd C:\Users\gram\mcp-remote-pkg
npm install
```

**문제 4: 네트워크 연결 문제**
```powershell
# v0.dev 접근 확인
curl https://mcp.v0.dev
```

---

## 단계 2: MCP 서버 설정 재확인

### 2.1 설정 파일 위치

Windows에서 Cursor 설정 파일:
```
%APPDATA%\Cursor\User\settings.json
```

경로 확인:
```powershell
echo $env:APPDATA\Cursor\User\settings.json
```

### 2.2 올바른 설정 형식

```json
{
  "mcp.servers": {
    "v0-dev": {
      "command": "C:\\Program Files\\nodejs\\node.exe",
      "args": [
        "C:\\Users\\gram\\mcp-remote-pkg\\node_modules\\mcp-remote\\dist\\proxy.js",
        "https://mcp.v0.dev",
        "--header",
        "Authorization: Bearer v1:naCSZrnCmzUdXkrkEEfPd7JV:LwYkVuJ8cCYtlJML7L9QdkFh"
      ],
      "env": {}
    }
  }
}
```

### 2.3 설정 후 필수 작업

1. ✅ 설정 파일 저장
2. ✅ Cursor 완전히 종료
3. ✅ Cursor 재시작
4. ✅ MCP 서버 연결 확인

---

## 단계 3: v0.dev MCP 테스트

### 3.1 기본 연결 테스트

설정 완료 후 Cursor에서:

1. **채팅 창 열기**
   - `Ctrl + L` 또는 채팅 아이콘 클릭

2. **MCP 서버 확인**
   - 채팅에서 MCP 관련 기능 사용 가능 여부 확인
   - 에러 메시지 확인

### 3.2 간단한 컴포넌트 생성 테스트

**테스트 프롬프트:**
```
v0.dev MCP를 사용하여 간단한 React 컴포넌트를 생성해주세요.

요구사항:
- 컴포넌트명: TestComponent
- TypeScript + Tailwind CSS
- 간단한 버튼 컴포넌트
- Primary Color: #004B8D
```

### 3.3 실제 프로젝트 컴포넌트 생성 테스트

**테스트 섹션**: Section06Competition (이미 구현됨, 비교용)

**프롬프트 예시:**
```
v0.dev MCP를 사용하여 Section06Competition 컴포넌트를 생성해주세요.

데이터 소스: data/seoil-medical.yaml의 page 7

디자인 가이드:
- Primary Color: #004B8D
- Secondary Color: #48A9C5
- Surface: #F6F8FA
- Text Primary: #1F2937
- 최대 너비: 1280px
- 반응형 디자인

기술 스택:
- Next.js 15
- TypeScript strict
- Tailwind CSS
- lucide-react
```

---

## 단계 4: 문제 해결 체크리스트

### ✅ 사전 확인 사항

- [ ] Node.js 설치 확인 (`node --version`)
- [ ] mcp-remote 패키지 설치 확인
- [ ] 설정 파일에 올바른 경로 입력
- [ ] Bearer 토큰 유효성 확인
- [ ] 인터넷 연결 확인
- [ ] Cursor 재시작 완료

### 🔍 디버깅 단계

1. **Cursor 로그 확인**
   - Cursor 개발자 도구 열기 (`Ctrl + Shift + I`)
   - Console 탭에서 MCP 관련 에러 확인

2. **수동 실행 테스트**
   ```powershell
   # PowerShell에서 직접 실행 테스트
   & "C:\Program Files\nodejs\node.exe" "C:\Users\gram\mcp-remote-pkg\node_modules\mcp-remote\dist\proxy.js" "https://mcp.v0.dev" "--header" "Authorization: Bearer v1:naCSZrnCmzUdXkrkEEfPd7JV:LwYkVuJ8cCYtlJML7L9QdkFh"
   ```

3. **에러 메시지 분석**
   - 경로 오류: 경로 확인 및 수정
   - 인증 오류: Bearer 토큰 재확인
   - 네트워크 오류: 방화벽/프록시 설정 확인

---

## 단계 5: 성공적인 연결 후 작업

### 5.1 연결 확인

MCP 서버가 연결되면:
- `list_mcp_resources`에서 리소스 확인 가능
- v0.dev 관련 도구/기능 사용 가능

### 5.2 실제 사용 예시

**섹션 컴포넌트 생성:**
```
v0.dev MCP를 사용하여 Section07Reconstruction 컴포넌트를 생성해주세요.

요구사항:
- data/seoil-medical.yaml의 page 8 데이터 사용
- docs/design-guide.md 디자인 규칙 준수
- TypeScript strict 모드
- 반응형 레이아웃
- 한 페이지 내 완전 표시
```

### 5.3 생성된 컴포넌트 검증

1. ✅ TypeScript 컴파일 확인
2. ✅ 디자인 가이드 준수 확인
3. ✅ 반응형 동작 확인
4. ✅ 접근성 확인

---

## 현재 상태 요약

### ❌ 현재 문제
- MCP 서버가 연결되지 않음
- `list_mcp_resources` 결과: `No MCP resources found`

### ✅ 다음 단계
1. 설정 파일 확인 및 수정
2. Cursor 재시작
3. 연결 상태 재확인
4. 테스트 실행

---

## 참고 자료

- `V0_DEV_MCP_설정_가이드.md`: 상세 설정 가이드
- `prompts/claude-code-handoff.md`: v0.dev 사용 템플릿
- `docs/design-guide.md`: 디자인 규칙

---

**작성일**: 2026-01-13  
**프로젝트**: 서일메디컬 마케팅 제안서
