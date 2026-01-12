/**
 * Section01Cover - 표지 섹션
 * Design Guide (docs/design-guide.md) 기반
 * 
 * 타이포그래피:
 *   - Heading 1: 48px (3rem), Weight 600
 *   - Heading 2: 36px (2.25rem), Weight 600
 * 색상:
 *   - Primary: #004B8D
 *   - Text Primary: #1F2937
 *   - Text Secondary: #6B7280
 */

export function Section01Cover() {
  return (
    <section className="min-h-[calc(100vh-144px)] bg-background flex items-center justify-center p-8">
      <div className="w-full max-w-content">
        <div className="flex flex-col items-center text-center space-y-12">
          {/* 고객사명 - Heading 2: 36px */}
          <h2 className="text-heading-2 text-primary">
            서일메디컬그룹
          </h2>

          {/* 장식선 */}
          <div className="h-[2px] w-20 bg-gradient-to-r from-primary to-secondary" />

          {/* 제안서 제목 - Heading 1: 48px */}
          <h1 className="text-heading-1 text-text-primary max-w-4xl break-keep">
            온라인 마케팅 경쟁 분석 및
            <br />
            전략 제안서
          </h1>

          {/* 범위 정보 - Body: 18px */}
          <div className="space-y-2 text-body text-text-secondary">
            <p>대상: 서일메디컬그룹 (부산)</p>
            <p>범위: 재건성형 + 미용성형 온라인 마케팅</p>
          </div>

          {/* 날짜 - Body Large: 20px */}
          <p className="text-body-large text-text-primary pt-8">2026년 1월</p>

          {/* 제출사 - Heading 3: 24px */}
          <h3 className="text-heading-3 text-primary pt-4">
            호원앤컴퍼니(주)
          </h3>

          {/* 대외비 뱃지 - Caption: 14px */}
          <div className="pt-8">
            <span className="inline-block px-4 py-1.5 bg-red-50 text-red-600 text-caption rounded-md border border-red-200 shadow-card">
              대외비
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
