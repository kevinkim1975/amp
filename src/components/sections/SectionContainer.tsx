/**
 * SectionContainer - 섹션 플레이스홀더 컨테이너
 * v0.dev 생성 후 Boris Cherny 원칙에 따라 수정
 * - 하드코딩 색상 → Tailwind 변수
 * - 영어 라벨 → 한국어
 */

import React from 'react';
import type { SectionProps, SectionType } from '@/types';
import { cn } from '@/lib/utils';

/** 섹션 타입별 한국어 라벨 */
const TYPE_LABELS: Record<SectionType, string> = {
  cover: '표지',
  toc: '목차',
  content: '콘텐츠',
  closing: '마무리',
};

export const SectionContainer = React.forwardRef<HTMLElement, SectionProps>(
  ({ section, isActive }, ref) => {
    // 홀수/짝수 섹션에 따른 배경색
    const isOddSection = section.id % 2 === 1;

    return (
      <section
        ref={ref}
        id={`section-${section.id}`}
        className={cn(
          'min-h-[calc(100vh-144px)] flex items-center justify-center transition-all',
          isOddSection ? 'bg-white' : 'bg-neutral-50',
          isActive && 'border-l-4 border-l-primary'
        )}
      >
        <div className="flex flex-col items-center justify-center gap-4 text-center px-8">
          {/* 섹션 번호 */}
          <div className="text-6xl font-bold text-primary">
            {section.id.toString().padStart(2, '0')}
          </div>

          {/* 섹션 제목 */}
          <h2 className="text-2xl font-medium text-gray-700">
            {section.title}
          </h2>

          {/* 섹션 타입 뱃지 */}
          <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-primary text-white text-sm font-medium">
            {TYPE_LABELS[section.type]}
          </div>
        </div>
      </section>
    );
  }
);

SectionContainer.displayName = 'SectionContainer';
