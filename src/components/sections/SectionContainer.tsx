/**
 * SectionContainer - 섹션 컨테이너
 * Boris Cherny 원칙: 섹션 ID에 따라 해당 콘텐츠 컴포넌트 렌더링
 */

import React from 'react';
import type { SectionProps, SectionType } from '@/types';
import { cn } from '@/lib/utils';
import { Section01Cover } from './Section01Cover';

/** 섹션 타입별 한국어 라벨 */
const TYPE_LABELS: Record<SectionType, string> = {
  cover: '표지',
  toc: '목차',
  content: '콘텐츠',
  closing: '마무리',
};

/** 플레이스홀더 컴포넌트 (아직 구현되지 않은 섹션용) */
const Placeholder = ({ section }: SectionProps) => {
  const isOddSection = section.id % 2 === 1;

  return (
    <div
      className={cn(
        'min-h-[calc(100vh-144px)] flex items-center justify-center',
        isOddSection ? 'bg-white' : 'bg-neutral-50'
      )}
    >
      <div className="flex flex-col items-center justify-center gap-4 text-center px-8">
        <div className="text-6xl font-bold text-primary">
          {section.id.toString().padStart(2, '0')}
        </div>
        <h2 className="text-2xl font-medium text-gray-700">{section.title}</h2>
        <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-primary text-white text-sm font-medium">
          {TYPE_LABELS[section.type]}
        </div>
      </div>
    </div>
  );
};

/** 섹션 ID별 컴포넌트 매핑 */
const SectionComponents: Partial<Record<number, React.ComponentType>> = {
  1: Section01Cover,
  // 2: Section02TOC,
  // 3: Section03Overview,
  // ... 추후 섹션 추가
};

export const SectionContainer = React.forwardRef<HTMLElement, SectionProps>(
  ({ section, isActive }, ref) => {
    const SectionContent = SectionComponents[section.id];

    return (
      <section
        ref={ref}
        id={`section-${section.id}`}
        className={cn(
          'transition-all',
          isActive && 'ring-2 ring-primary ring-inset'
        )}
      >
        {SectionContent ? (
          <SectionContent />
        ) : (
          <Placeholder section={section} isActive={isActive} />
        )}
      </section>
    );
  }
);

SectionContainer.displayName = 'SectionContainer';
