/**
 * 메인 페이지 - 17개 섹션 스크롤 인프라
 * Boris Cherny 원칙: 타입 안전성 + Intersection Observer
 */

'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import { TopbarHeader } from '@/components/layout/TopbarHeader';
import { ProgressFooter } from '@/components/layout/ProgressFooter';
import { SectionContainer } from '@/components/sections/SectionContainer';
import type { SectionId, ProgressState } from '@/types';
import { SECTIONS, TOTAL_SECTIONS } from '@/types';

export default function HomePage() {
  // 현재 섹션 상태 (Boris Cherny: 리터럴 타입)
  const [currentSection, setCurrentSection] = useState<SectionId>(1);
  
  // 섹션 ref 배열 (스크롤 타겟팅용)
  const sectionRefs = useRef<(HTMLElement | null)[]>([]);

  const progress: ProgressState = {
    currentSection,
    totalSections: TOTAL_SECTIONS,
  };

  // Intersection Observer: 스크롤 시 현재 섹션 감지
  useEffect(() => {
    const observers: IntersectionObserver[] = [];
    
    sectionRefs.current.forEach((ref, index) => {
      if (!ref) return;
      
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              // 화면에 50% 이상 보이면 현재 섹션으로 설정
              setCurrentSection((index + 1) as SectionId);
            }
          });
        },
        { threshold: 0.5 }
      );
      
      observer.observe(ref);
      observers.push(observer);
    });

    return () => {
      observers.forEach((observer) => observer.disconnect());
    };
  }, []);

  // 특정 섹션으로 스크롤 이동
  const scrollToSection = useCallback((sectionId: SectionId) => {
    const targetRef = sectionRefs.current[sectionId - 1];
    if (targetRef) {
      targetRef.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, []);

  // 이전 섹션으로 이동
  const handlePrev = useCallback(() => {
    if (currentSection > 1) {
      const prevSection = (currentSection - 1) as SectionId;
      scrollToSection(prevSection);
    }
  }, [currentSection, scrollToSection]);

  // 다음 섹션으로 이동
  const handleNext = useCallback(() => {
    if (currentSection < TOTAL_SECTIONS) {
      const nextSection = (currentSection + 1) as SectionId;
      scrollToSection(nextSection);
    }
  }, [currentSection, scrollToSection]);

  return (
    <div className="flex min-h-screen flex-col">
      {/* 상단 헤더 */}
      <TopbarHeader 
        title="서일메디컬 마케팅 제안서" 
        progress={progress} 
      />
      
      {/* 메인 콘텐츠: 17개 섹션 */}
      <main className="pt-16 pb-20">
        {SECTIONS.map((section, index) => (
          <SectionContainer
            key={section.id}
            ref={(el) => { sectionRefs.current[index] = el; }}
            section={section}
            isActive={section.id === currentSection}
          />
        ))}
      </main>

      {/* 하단 푸터 */}
      <ProgressFooter 
        progress={progress}
        onPrev={handlePrev}
        onNext={handleNext}
      />
    </div>
  );
}
