/**
 * TopbarHeader 컴포넌트
 * Design Guide (docs/design-guide.md) 8. UI 컴포넌트 - 상단바
 * 
 * 구성: 로고 (좌측) + 제목 (중앙) + 목차 버튼 + 페이지 번호 (우측)
 * 배경색: Primary Color (#004B8D)
 * 높이: 64px
 * 텍스트: 흰색, Weight 600
 */

import type { TopbarHeaderProps } from "@/types";

export function TopbarHeader({ title, progress }: TopbarHeaderProps) {
  return (
    <header className="fixed top-0 z-50 w-full h-16 bg-primary">
      <div className="mx-auto flex h-full max-w-content items-center justify-between px-6">
        {/* 좌측: 로고 영역 */}
        <div className="flex items-center gap-3 min-w-[200px]">
          {/* 로고 플레이스홀더 - 추후 실제 로고로 교체 */}
          <div className="w-8 h-8 rounded bg-white/20 flex items-center justify-center">
            <span className="text-white text-sm font-semibold">H</span>
          </div>
          <span className="text-white text-sm font-medium hidden sm:inline">
            호원앤컴퍼니
          </span>
        </div>

        {/* 중앙: 제목 */}
        <h1 className="text-lg font-semibold text-white text-center absolute left-1/2 transform -translate-x-1/2">
          {title}
        </h1>

        {/* 우측: 목차 버튼 + 페이지 번호 */}
        <div className="flex items-center gap-4 min-w-[200px] justify-end">
          {/* 목차 버튼 - TocDrawer 연결 예정 */}
          <button 
            className="text-white/80 hover:text-white transition-colors text-sm font-medium"
            aria-label="목차 열기"
          >
            목차
          </button>
          
          {/* 페이지 번호 */}
          <span className="text-white font-semibold">
            {progress.currentSection} / {progress.totalSections}
          </span>
        </div>
      </div>
    </header>
  );
}
