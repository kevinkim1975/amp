/**
 * ProgressFooter 컴포넌트
 * Boris Cherny 원칙: 1-B에서 정의한 타입을 그대로 사용
 */

'use client';

import type { ProgressFooterProps } from '@/types';

export function ProgressFooter({ progress, onPrev, onNext }: ProgressFooterProps) {
  const { currentSection, totalSections } = progress;
  const isFirst = currentSection === 1;
  const isLast = currentSection === totalSections;

  return (
    <footer className="fixed bottom-0 left-0 right-0 z-50 h-20 bg-white border-t border-neutral-200">
      <div className="mx-auto h-full max-w-content px-6 flex items-center justify-between">
        {/* 왼쪽: 이전 버튼 */}
        <button
          onClick={onPrev}
          disabled={isFirst}
          className="px-6 py-2 rounded-lg border border-neutral-300 text-neutral-700 font-medium
                     hover:bg-neutral-50 disabled:opacity-40 disabled:cursor-not-allowed
                     transition-colors"
        >
          이전
        </button>

        {/* 중앙: 진행바 (17개 점) */}
        <div className="flex items-center gap-1.5">
          {Array.from({ length: totalSections }, (_, i) => {
            const sectionNum = i + 1;
            const isActive = sectionNum === currentSection;
            const isPast = sectionNum < currentSection;
            
            return (
              <div
                key={sectionNum}
                className={`w-2 h-2 rounded-full transition-colors ${
                  isActive
                    ? 'bg-primary w-3 h-3'
                    : isPast
                    ? 'bg-primary opacity-50'
                    : 'bg-neutral-300'
                }`}
              />
            );
          })}
        </div>

        {/* 오른쪽: 다음 버튼 */}
        <button
          onClick={onNext}
          disabled={isLast}
          className="px-6 py-2 rounded-lg bg-primary text-white font-medium
                     hover:bg-primary-dark disabled:opacity-40 disabled:cursor-not-allowed
                     transition-colors"
        >
          다음
        </button>
      </div>
    </footer>
  );
}
