/**
 * Section02TOC - 목차 섹션
 * Design Guide (docs/design-guide.md) 기반
 * 
 * 변경: 2026-01-13 - 18페이지 구조 반영
 * 
 * 타이포그래피:
 *   - Heading 2: 36px (2.25rem), Weight 600
 *   - Body: 18px (1.125rem), Weight 400
 * 색상:
 *   - Primary: #004B8D
 *   - Secondary: #48A9C5
 *   - Surface: #F6F8FA
 *   - Text Primary: #1F2937
 */

interface TOCItem {
  readonly number: string;
  readonly title: string;
  readonly isSubsection?: boolean;
}

const sections: readonly TOCItem[] = [
  { number: "1", title: "서일메디컬 현황 진단" },
  { number: "2", title: "바이럴 키워드 노출 현황 분석" },
  { number: "3", title: "경쟁사 분석" },
  { number: "3.1", title: "경쟁 구도 개요", isSubsection: true },
  { number: "3.2", title: "재건성형 경쟁사", isSubsection: true },
  { number: "3.3", title: "미용성형 경쟁사", isSubsection: true },
  { number: "3.4", title: "경쟁사 비교 및 SWOT", isSubsection: true },
  { number: "4", title: "포지셔닝 분석" },
  { number: "5", title: "핵심 문제점 진단" },
  { number: "6", title: "전략 제안" },
  { number: "7", title: "마케팅 예산안" },
  { number: "8", title: "향후 확장 방향" },
  { number: "9", title: "요약 및 권장사항" },
] as const;

export function Section02TOC() {
  // 좌측: 1~5번 (서브섹션 포함)
  const leftItems = sections.filter(s => {
    const mainNum = parseFloat(s.number);
    return mainNum <= 5;
  });
  
  // 우측: 6~9번
  const rightItems = sections.filter(s => {
    const mainNum = parseFloat(s.number);
    return mainNum >= 6;
  });

  return (
    <section className="min-h-[calc(100vh-144px)] bg-background py-16 px-6">
      <div className="mx-auto max-w-content">
        {/* 제목 섹션 */}
        <div className="mb-14 text-center">
          <h2 className="text-heading-2 text-primary">목 차</h2>
          <div 
            className="mt-4 mx-auto h-[2px] w-20 bg-gradient-to-r from-primary to-secondary" 
            aria-hidden="true" 
          />
        </div>

        {/* 2열 그리드 레이아웃 */}
        <div className="grid grid-cols-1 md:grid-cols-2 md:gap-16">
          {/* 좌측 열 */}
          <ul className="flex flex-col gap-1">
            {leftItems.map((section) => (
              <li
                key={section.number}
                className={`
                  rounded-md px-4 py-3 transition-colors
                  ${section.isSubsection ? 'pl-10' : ''}
                `}
              >
                <div className="flex items-center gap-4">
                  <span className={`
                    font-semibold text-primary min-w-[2.5rem]
                    ${section.isSubsection ? 'text-caption' : 'text-body'}
                  `}>
                    {section.number}
                  </span>
                  <span className={`
                    text-text-primary
                    ${section.isSubsection ? 'text-caption text-text-secondary' : 'text-body'}
                  `}>
                    {section.title}
                  </span>
                </div>
              </li>
            ))}
          </ul>

          {/* 우측 열 */}
          <ul className="flex flex-col gap-1 mt-4 md:mt-0">
            {rightItems.map((section) => (
              <li
                key={section.number}
                className={`
                  rounded-md px-4 py-3 transition-colors
                  ${section.isSubsection ? 'pl-10' : ''}
                `}
              >
                <div className="flex items-center gap-4">
                  <span className={`
                    font-semibold text-primary min-w-[2.5rem]
                    ${section.isSubsection ? 'text-caption' : 'text-body'}
                  `}>
                    {section.number}
                  </span>
                  <span className={`
                    text-text-primary
                    ${section.isSubsection ? 'text-caption text-text-secondary' : 'text-body'}
                  `}>
                    {section.title}
                  </span>
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* 페이지 정보 */}
        <div className="mt-12 text-center">
          <p className="text-caption text-text-secondary">
            총 18페이지
          </p>
        </div>
      </div>
    </section>
  );
}
