# v0.dev MCP 설정 가이드

## 개요

v0.dev MCP 서버를 Cursor에 연결하여 React 컴포넌트를 자동 생성할 수 있습니다.

## 제공된 정보

- **명령어**: `C:\Program Files\nodejs\node.exe`
- **인수**: `C:\Users\gram\mcp-remote-pkg\node_modules\mcp-remote\dist\proxy.js https://mcp.v0.dev --header Authorization: Bearer v1:naCSZrnCmzUdXkrkEEfPd7JV:LwYkVuJ8cCYtlJML7L9QdkFh`

## 설정 방법

### 방법 1: Cursor 설정 UI 사용 (권장)

1. **Cursor 열기**
   - Cursor 애플리케이션 실행

2. **설정 열기**
   - `Ctrl + ,` (설정 열기)
   - 또는 `File` → `Preferences` → `Settings`

3. **MCP 설정 찾기**
   - 설정 검색창에 "MCP" 또는 "Model Context Protocol" 입력
   - MCP 관련 설정 섹션 찾기

4. **서버 추가**
   - "Add MCP Server" 또는 "Configure MCP Servers" 클릭
   - 새 서버 추가

5. **설정 입력**
   ```json
   {
     "name": "v0-dev",
     "command": "C:\\Program Files\\nodejs\\node.exe",
     "args": [
       "C:\\Users\\gram\\mcp-remote-pkg\\node_modules\\mcp-remote\\dist\\proxy.js",
       "https://mcp.v0.dev",
       "--header",
       "Authorization: Bearer v1:naCSZrnCmzUdXkrkEEfPd7JV:LwYkVuJ8cCYtlJML7L9QdkFh"
     ]
   }
   ```

### 방법 2: 설정 파일 직접 편집

1. **설정 파일 위치 찾기**
   - Windows: `%APPDATA%\Cursor\User\settings.json`
   - 또는 `%APPDATA%\Cursor\User\globalStorage\mcp.json`

2. **설정 파일 열기**
   ```powershell
   # PowerShell에서 실행
   code $env:APPDATA\Cursor\User\settings.json
   ```

3. **MCP 설정 추가**
   
   **settings.json에 추가하는 경우:**
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
         ]
       }
     }
   }
   ```

   **또는 별도 mcp.json 파일인 경우:**
   ```json
   {
     "mcpServers": {
       "v0-dev": {
         "command": "C:\\Program Files\\nodejs\\node.exe",
         "args": [
           "C:\\Users\\gram\\mcp-remote-pkg\\node_modules\\mcp-remote\\dist\\proxy.js",
           "https://mcp.v0.dev",
           "--header",
           "Authorization: Bearer v1:naCSZrnCmzUdXkrkEEfPd7JV:LwYkVuJ8cCYtlJML7L9QdkFh"
         ]
       }
     }
   }
   ```

### 방법 3: Cursor 설정 파일 경로 확인

Windows에서 Cursor 설정 파일 위치:

```
%APPDATA%\Cursor\User\settings.json
%APPDATA%\Cursor\User\globalStorage\mcp.json
%LOCALAPPDATA%\Cursor\User\settings.json
```

**경로 확인 방법:**
```powershell
# PowerShell에서 실행
echo $env:APPDATA\Cursor\User
```

## 설정 검증

### 1. Cursor 재시작
- 설정 변경 후 Cursor 완전히 종료 후 재시작

### 2. MCP 서버 확인
- Cursor에서 MCP 서버 목록 확인
- v0-dev 서버가 연결되어 있는지 확인

### 3. 테스트
- Cursor 채팅에서 v0.dev 관련 기능 사용 시도
- 에러 메시지 확인

## 문제 해결

### 문제 1: 경로에 공백이 있는 경우
- Windows 경로의 공백은 이스케이프 처리 필요
- 또는 경로를 따옴표로 감싸기

### 문제 2: node.exe를 찾을 수 없는 경우
- Node.js 설치 확인: `node --version`
- 경로 확인: `where node`

### 문제 3: mcp-remote 패키지가 없는 경우
```powershell
cd C:\Users\gram\mcp-remote-pkg
npm install
```

### 문제 4: 인증 토큰 오류
- Bearer 토큰이 유효한지 확인
- v0.dev에서 새 토큰 발급 필요할 수 있음

## 설정 예시 (완전한 형태)

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

## 참고사항

1. **경로 이스케이프**: Windows 경로의 백슬래시는 JSON에서 `\\`로 이스케이프 필요
2. **인증 토큰 보안**: Bearer 토큰은 민감 정보이므로 공유하지 마세요
3. **Node.js 버전**: Node.js 18 이상 권장
4. **네트워크**: 인터넷 연결 필요 (https://mcp.v0.dev 접근)

## 다음 단계

설정 완료 후:
1. Cursor 재시작
2. MCP 서버 연결 확인
3. v0.dev MCP를 사용하여 컴포넌트 생성 테스트

---

**작성일**: 2026-01-13  
**프로젝트**: 서일메디컬 마케팅 제안서
