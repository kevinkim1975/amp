/**
 * Section02TOC - 목차 섹션
 * Design Guide (docs/design-guide.md) 기반
 * v0.dev 생성 후 Boris Cherny 원칙 적용
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
  readonly isCurrent?: boolean;
}

const sections: readonly TOCItem[] = [
  { number: "01", title: "표지" },
  { number: "02", title: "목차", isCurrent: true },
  { number: "03", title: "제안 개요" },
  { number: "04", title: "의료 시장 현황" },
  { number: "05", title: "서일메디컬 현황" },
  { number: "06", title: "경쟁사 분석" },
  { number: "07", title: "SWOT 분석" },
  { number: "08", title: "핵심 전략" },
  { number: "09", title: "브랜드 포지셔닝" },
  { number: "10", title: "디지털 마케팅" },
  { number: "11", title: "콘텐츠 전략" },
  { number: "12", title: "고객 여정 설계" },
  { number: "13", title: "CRM 구축 방안" },
  { number: "14", title: "실행 로드맵" },
  { number: "15", title: "예상 성과" },
  { number: "16", title: "투자 비용" },
  { number: "17", title: "마무리" },
] as const;

export function Section02TOC() {
  return (
    <section className="min-h-[calc(100vh-144px)] bg-background py-12 px-6">
      <div className="mx-auto max-w-content">
        {/* 제목 섹션 */}
        <div className="mb-12 text-center">
          <h2 className="text-heading-2 text-primary">목차</h2>
          <div 
            className="mt-4 mx-auto h-[2px] w-20 bg-gradient-to-r from-primary to-secondary" 
            aria-hidden="true" 
          />
        </div>

        {/* 2열 그리드 레이아웃 */}
        <div className="grid grid-cols-1 md:grid-cols-2 md:gap-12">
          {/* 좌측 열: 1-9번 */}
          <ul className="flex flex-col gap-2">
            {sections.slice(0, 9).map((section) => (
              <li
                key={section.number}
                className={`
                  rounded-md px-4 py-3 transition-colors cursor-pointer
                  hover:bg-surface
                  ${section.isCurrent 
                    ? "border-l-[3px] border-primary bg-surface" 
                    : ""
                  }
                `}
              >
                <div className="flex items-center gap-4">
                  <span className="text-body font-semibold text-primary">
                    {section.number}
                  </span>
                  <span className="text-body text-text-primary">
                    {section.title}
                  </span>
                </div>
              </li>
            ))}
          </ul>

          {/* 우측 열: 10-17번 */}
          <ul className="flex flex-col gap-2 mt-2 md:mt-0">
            {sections.slice(9).map((section) => (
              <li
                key={section.number}
                className={`
                  rounded-md px-4 py-3 transition-colors cursor-pointer
                  hover:bg-surface
                  ${section.isCurrent 
                    ? "border-l-[3px] border-primary bg-surface" 
                    : ""
                  }
                `}
              >
                <div className="flex items-center gap-4">
                  <span className="text-body font-semibold text-primary">
                    {section.number}
                  </span>
                  <span className="text-body text-text-primary">
                    {section.title}
                  </span>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
