/**
 * 메인 페이지
 * Boris Cherny 원칙: 타입을 import하여 타입 안전성 보장
 * 레이아웃: flexbox로 콘텐츠 수직 중앙 배치
 */

'use client';

import { useState } from 'react';
import { TopbarHeader } from '@/components/layout/TopbarHeader';
import { ProgressFooter } from '@/components/layout/ProgressFooter';
import type { SectionId, ProgressState } from '@/types';
import { TOTAL_SECTIONS } from '@/types';

export default function HomePage() {
  // 현재 섹션 상태 (Boris Cherny: 리터럴 타입으로 타입 안전성 보장)
  const [currentSection, setCurrentSection] = useState<SectionId>(1);

  const progress: ProgressState = {
    currentSection,
    totalSections: TOTAL_SECTIONS,
  };

  // 이전 섹션으로 이동
  const handlePrev = () => {
    if (currentSection > 1) {
      setCurrentSection((prev) => (prev - 1) as SectionId);
    }
  };

  // 다음 섹션으로 이동
  const handleNext = () => {
    if (currentSection < TOTAL_SECTIONS) {
      setCurrentSection((prev) => (prev + 1) as SectionId);
    }
  };

  return (
    <div className="flex min-h-screen flex-col">
      {/* 상단 헤더 - v0.dev 생성 */}
      <TopbarHeader 
        title="서일메디컬 마케팅 제안서" 
        progress={progress} 
      />
      
      {/* 메인 콘텐츠 - flexbox로 중앙 배치 */}
      <main className="flex flex-1 flex-col justify-center pt-16 pb-20 bg-neutral-50">
        <div className="mx-auto w-full max-w-content px-6">
          <div className="rounded-lg bg-white p-8 shadow-sm">
            <h2 className="text-2xl font-semibold text-primary mb-4">
              Phase 1-C, 1-D 완료 (v0.dev)
            </h2>
            
            {/* 현재 섹션 표시 */}
            <div className="rounded-lg border border-gray-200 bg-neutral-50 p-12 text-center mt-6">
              <div className="mb-4 text-6xl font-bold text-primary">
                {currentSection}
              </div>
              <p className="text-lg text-neutral-600">
                섹션 {currentSection} / {TOTAL_SECTIONS}
              </p>
              <p className="mt-2 text-sm text-neutral-500">
                이전/다음 버튼을 사용하여 섹션을 탐색하세요
              </p>
            </div>
          </div>
        </div>
      </main>

      {/* 하단 푸터 - v0.dev 생성 */}
      <ProgressFooter 
        progress={progress}
        onPrev={handlePrev}
        onNext={handleNext}
      />
    </div>
  );
}
