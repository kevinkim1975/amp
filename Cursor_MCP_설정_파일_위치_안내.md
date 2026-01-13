# Cursor MCP 설정 파일 위치 안내

## 설정 파일이란?

Cursor에서 MCP (Model Context Protocol) 서버를 연결하려면 **설정 파일**에 서버 정보를 추가해야 합니다.

## Windows에서 Cursor 설정 파일 위치

### 주요 위치

1. **settings.json** (가장 일반적)
   ```
   C:\Users\[사용자명]\AppData\Roaming\Cursor\User\settings.json
   ```

2. **또는 전역 설정**
   ```
   C:\Users\[사용자명]\AppData\Local\Cursor\User\settings.json
   ```

### 실제 경로 확인 방법

**PowerShell에서 실행:**
```powershell
# 설정 파일 경로 확인
$env:APPDATA + "\Cursor\User\settings.json"
```

**또는 직접 탐색기에서:**
1. Windows 키 + R
2. `%APPDATA%\Cursor\User` 입력
3. Enter 키
4. `settings.json` 파일 확인

## 설정 파일 열기 방법

### 방법 1: Cursor에서 직접 열기

1. **Cursor 열기**
2. **설정 열기**
   - `Ctrl + ,` (설정 단축키)
   - 또는 `File` → `Preferences` → `Settings`
3. **설정 파일 열기**
   - 우측 상단의 `{}` 아이콘 클릭 (Open Settings JSON)
   - 또는 `Ctrl + Shift + P` → "Preferences: Open User Settings (JSON)" 입력

### 방법 2: 파일 탐색기에서 직접 열기

1. **Windows 탐색기 열기**
2. **주소창에 입력:**
   ```
   %APPDATA%\Cursor\User
   ```
3. **Enter 키**
4. **settings.json 파일 찾기**
5. **메모장 또는 Cursor로 열기**

### 방법 3: PowerShell에서 열기

```powershell
# 메모장으로 열기
notepad "$env:APPDATA\Cursor\User\settings.json"

# 또는 Cursor로 열기
cursor "$env:APPDATA\Cursor\User\settings.json"
```

## 설정 파일이 없는 경우

설정 파일이 없다면:

1. **Cursor에서 설정 열기** (`Ctrl + ,`)
2. **아무 설정이나 변경** (예: 폰트 크기)
3. **저장** → 자동으로 `settings.json` 파일 생성됨
4. **설정 파일 열기** (`{}` 아이콘 클릭)

## MCP 서버 설정 추가 방법

### Step 1: 설정 파일 열기

위의 방법 중 하나로 `settings.json` 파일을 엽니다.

### Step 2: MCP 설정 추가

파일이 비어있거나 기본 설정만 있다면, 다음 내용을 추가하세요:

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

### Step 3: 기존 설정이 있는 경우

이미 다른 설정이 있다면, `mcp.servers` 부분만 추가하세요:

```json
{
  // 기존 설정들...
  "editor.fontSize": 14,
  "editor.wordWrap": "on",
  // ... 기타 설정들
  
  // 여기에 MCP 설정 추가
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

### Step 4: 저장 및 재시작

1. **파일 저장** (`Ctrl + S`)
2. **Cursor 완전히 종료**
3. **Cursor 재시작**
4. **MCP 서버 연결 확인**

## 설정 파일 예시 (완전한 형태)

```json
{
  "editor.fontSize": 14,
  "editor.fontFamily": "Consolas, 'Courier New', monospace",
  "editor.wordWrap": "on",
  "files.autoSave": "afterDelay",
  "files.autoSaveDelay": 1000,
  
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

## 주의사항

1. **JSON 형식 준수**: 쉼표, 중괄호 등 문법 정확히 작성
2. **경로 이스케이프**: Windows 경로의 백슬래시는 `\\`로 작성
3. **따옴표**: 키와 값은 모두 쌍따옴표(`"`) 사용
4. **마지막 쉼표**: 마지막 항목 뒤에는 쉼표 없음

## 설정 파일 확인 체크리스트

- [ ] 설정 파일 위치 확인 (`%APPDATA%\Cursor\User\settings.json`)
- [ ] 설정 파일 열기 성공
- [ ] `mcp.servers` 섹션 추가
- [ ] JSON 형식 올바름 (문법 오류 없음)
- [ ] 파일 저장 완료
- [ ] Cursor 재시작 완료

## 문제 해결

### 문제 1: 설정 파일을 찾을 수 없음
- Cursor에서 설정을 한 번 변경하면 자동 생성됨
- 또는 위의 방법으로 직접 생성

### 문제 2: JSON 문법 오류
- JSON 유효성 검사기 사용: https://jsonlint.com/
- 또는 Cursor에서 저장 시 자동으로 오류 표시됨

### 문제 3: 설정이 적용되지 않음
- Cursor 완전히 종료 후 재시작 확인
- 설정 파일 저장 확인 (`Ctrl + S`)

---

**작성일**: 2026-01-13  
**프로젝트**: 서일메디컬 마케팅 제안서
