/**
 * ProgressFooter 컴포넌트
 * Design Guide (docs/design-guide.md) 8. UI 컴포넌트 - 진행률 푸터
 * 
 * 높이: 80px
 * 진행률 바: Primary Color, 높이 4px
 * 버튼:
 *   - 기본: Secondary Color 배경, 흰색 텍스트
 *   - 호버: Primary Color 배경
 *   - 비활성: Gray-300 배경, Gray-500 텍스트
 */

"use client";

import type { ProgressFooterProps } from "@/types";

export function ProgressFooter({ progress, onPrev, onNext }: ProgressFooterProps) {
  const { currentSection, totalSections } = progress;
  const isPrevDisabled = currentSection === 1;
  const isNextDisabled = currentSection === totalSections;
  
  // 진행률 계산 (퍼센트)
  const progressPercent = (currentSection / totalSections) * 100;

  return (
    <footer className="fixed bottom-0 left-0 right-0 z-50 h-20 bg-white border-t border-[#E5E7EB]">
      {/* 진행률 바: Primary Color, 4px 높이 */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gray-200">
        <div 
          className="h-full bg-primary transition-all duration-300"
          style={{ width: `${progressPercent}%` }}
          role="progressbar"
          aria-valuenow={currentSection}
          aria-valuemin={1}
          aria-valuemax={totalSections}
          aria-label={`진행률: ${currentSection}/${totalSections} 페이지`}
        />
      </div>

      <div className="mx-auto flex h-full max-w-content items-center justify-between px-6">
        {/* 이전 버튼 */}
        <button
          onClick={onPrev}
          disabled={isPrevDisabled}
          className={`
            min-w-[100px] rounded-md px-6 py-2.5 font-medium transition-all
            ${isPrevDisabled 
              ? "bg-gray-300 text-gray-500 cursor-not-allowed" 
              : "bg-secondary text-white hover:bg-primary"
            }
          `}
        >
          이전
        </button>

        {/* 중앙: 페이지 표시 */}
        <div className="flex items-center gap-2 text-text-secondary">
          <span className="font-medium text-text-primary">{currentSection}</span>
          <span>/</span>
          <span>{totalSections}</span>
        </div>

        {/* 다음 버튼 */}
        <button
          onClick={onNext}
          disabled={isNextDisabled}
          className={`
            min-w-[100px] rounded-md px-6 py-2.5 font-medium transition-all
            ${isNextDisabled 
              ? "bg-gray-300 text-gray-500 cursor-not-allowed" 
              : "bg-secondary text-white hover:bg-primary"
            }
          `}
        >
          다음
        </button>
      </div>
    </footer>
  );
}
