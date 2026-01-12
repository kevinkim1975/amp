/**
 * 메인 페이지
 * Boris Cherny 원칙: 타입을 import하여 타입 안전성 보장
 */

'use client';

import { TopbarHeader } from '@/components/layout/TopbarHeader';
import { ProgressFooter } from '@/components/layout/ProgressFooter';
import type { ProgressState } from '@/types';
import { TOTAL_SECTIONS } from '@/types';

export default function HomePage() {
  // 임시 진행 상태 (1-E에서 동적으로 변경 예정)
  const progress: ProgressState = {
    currentSection: 1,
    totalSections: TOTAL_SECTIONS,
  };

  // 임시 핸들러 (1-E에서 실제 네비게이션으로 변경 예정)
  const handlePrev = () => {
    console.log('이전 버튼 클릭');
  };

  const handleNext = () => {
    console.log('다음 버튼 클릭');
  };

  return (
    <>
      {/* 상단 헤더 - v0.dev 생성 */}
      <TopbarHeader 
        title="서일메디컬 마케팅 제안서" 
        progress={progress} 
      />
      
      {/* 메인 콘텐츠 */}
      <main className="pt-16 pb-20 min-h-screen bg-neutral-50">
        <div className="mx-auto max-w-content px-6 py-12">
          <div className="rounded-lg bg-white p-8 shadow-sm">
            <h2 className="text-2xl font-semibold text-primary mb-4">
              Phase 1-C 완료 (v0.dev)
            </h2>
            <p className="text-neutral-600 leading-relaxed">
              TopbarHeader 컴포넌트가 v0.dev로 생성되어 상단에 표시됩니다.
            </p>
          </div>
        </div>
      </main>

      {/* 하단 푸터 */}
      <ProgressFooter 
        progress={progress}
        onPrev={handlePrev}
        onNext={handleNext}
      />
    </>
  );
}
