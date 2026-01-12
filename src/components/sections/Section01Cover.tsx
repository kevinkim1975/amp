/**
 * Section01Cover - 표지 섹션
 * v0.dev 생성 후 Boris Cherny 원칙 적용
 * - 하드코딩 색상 → Tailwind 변수
 * - 시맨틱 HTML 적용
 */

export function Section01Cover() {
  return (
    <section className="min-h-[calc(100vh-144px)] bg-white flex items-center justify-center p-8">
      <div className="w-full max-w-content">
        <div className="flex flex-col items-center text-center space-y-12">
          {/* 고객사명 */}
          <h2 className="text-[2.25rem] font-semibold leading-tight text-primary">
            서일메디컬그룹
          </h2>

          {/* 장식선 */}
          <div className="h-[2px] w-20 bg-gradient-to-r from-primary to-secondary" />

          {/* 제안서 제목 */}
          <h1 className="text-5xl font-semibold leading-tight text-neutral-800 max-w-4xl break-keep">
            온라인 마케팅 경쟁 분석 및
            <br />
            전략 제안서
          </h1>

          {/* 범위 정보 */}
          <div className="space-y-2 text-lg text-neutral-500">
            <p>대상: 서일메디컬그룹 (부산)</p>
            <p>범위: 재건성형 + 미용성형 온라인 마케팅</p>
          </div>

          {/* 날짜 */}
          <p className="text-xl text-neutral-800 pt-8">2026년 1월</p>

          {/* 제출사 */}
          <h3 className="text-2xl font-semibold text-primary pt-4">
            호원앤컴퍼니(주)
          </h3>

          {/* 대외비 뱃지 */}
          <div className="pt-8">
            <span className="inline-block px-4 py-1.5 bg-red-50 text-red-600 text-sm rounded-full border border-red-200 shadow-sm">
              대외비
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
