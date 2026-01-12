/**
 * 메인 페이지
 * Boris Cherny 원칙: 타입을 import하여 타입 안전성 보장
 */

import { TopbarHeader } from '@/components/layout/TopbarHeader';
import type { ProgressState } from '@/types';
import { TOTAL_SECTIONS } from '@/types';

export default function HomePage() {
  // 임시 진행 상태 (1-E에서 동적으로 변경 예정)
  const progress: ProgressState = {
    currentSection: 1,
    totalSections: TOTAL_SECTIONS,
  };

  return (
    <>
      {/* 상단 헤더 */}
      <TopbarHeader 
        title="서일메디컬 마케팅 제안서" 
        progress={progress} 
      />
      
      {/* 메인 콘텐츠 */}
      <main className="pt-16 min-h-screen bg-neutral-50">
        <div className="mx-auto max-w-content px-6 py-12">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-primary mb-4">
              Phase 1-C 완료
            </h2>
            <p className="text-neutral-600">
              TopbarHeader 컴포넌트가 상단에 표시됩니다
            </p>
          </div>
        </div>
      </main>
    </>
  );
}
