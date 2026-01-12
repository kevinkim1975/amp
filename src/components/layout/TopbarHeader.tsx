/**
 * TopbarHeader 컴포넌트
 * Boris Cherny 원칙: 1-B에서 정의한 타입을 그대로 사용
 */

import type { TopbarHeaderProps } from '@/types';

export function TopbarHeader({ title, progress }: TopbarHeaderProps) {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 h-16 bg-primary">
      <div className="mx-auto h-full max-w-content px-6 flex items-center justify-between">
        {/* 왼쪽: 제목 */}
        <h1 className="text-white text-lg font-semibold">
          {title}
        </h1>
        
        {/* 오른쪽: 진행률 */}
        <div className="text-white text-sm">
          <span className="font-medium">{progress.currentSection}</span>
          <span className="mx-1 opacity-70">/</span>
          <span className="opacity-70">{progress.totalSections}</span>
        </div>
      </div>
    </header>
  );
}
