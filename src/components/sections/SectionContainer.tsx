/**
 * SectionContainer - 섹션 컨테이너
 * Boris Cherny 원칙: 섹션 ID에 따라 해당 콘텐츠 컴포넌트 렌더링
 *
 * 변경: 2026-01-13 - Section07-17 추가 (전체 섹션 완성)
 */

import React from 'react';
import type { SectionProps, SectionType } from '@/types';
import { cn } from '@/lib/utils';
import { Section01Cover } from './Section01Cover';
import { Section02TOC } from './Section02TOC';
import { Section03Diagnosis } from './Section03Diagnosis';
import { Section04Channel } from './Section04Channel';
import { Section05Keywords } from './Section05Keywords';
import { Section06Competition } from './Section06Competition';
import { Section07Reconstruction } from './Section07Reconstruction';
import { Section08Cosmetic } from './Section08Cosmetic';
import { Section09SeoilDiagnosis } from './Section09SeoilDiagnosis';
import { Section10PositioningReconstruction } from './Section10PositioningReconstruction';
import { Section11PositioningCosmetic } from './Section11PositioningCosmetic';
import { Section12Problems } from './Section12Problems';
import { Section13PhotoStrategy } from './Section13PhotoStrategy';
import { Section14ChannelStrategy } from './Section14ChannelStrategy';
import { Section15Budget } from './Section15Budget';
import { Section16Expansion } from './Section16Expansion';
import { Section17Summary } from './Section17Summary';

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
  2: Section02TOC,
  3: Section03Diagnosis,
  4: Section04Channel,
  5: Section05Keywords,
  6: Section06Competition,
  7: Section07Reconstruction,
  8: Section08Cosmetic,
  9: Section09SeoilDiagnosis,
  10: Section10PositioningReconstruction,
  11: Section11PositioningCosmetic,
  12: Section12Problems,
  13: Section13PhotoStrategy,
  14: Section14ChannelStrategy,
  15: Section15Budget,
  16: Section16Expansion,
  17: Section17Summary,
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
