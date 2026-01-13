/**
 * Section12Problems - 핵심 문제점 진단
 * Design Guide (docs/design-guide.md) 기반
 *
 * 생성: 2026-01-13
 * 데이터 소스: data/seoil-medical.yaml (page 13 - 첫번째)
 */

export function Section13Problems() {
  return (
    <section className="min-h-[calc(100vh-144px)] bg-white">
      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Section Header */}
        <div className="text-center mb-8">
          <h2 className="text-4xl font-semibold text-[#004B8D] mb-2">5. 핵심 문제점 진단</h2>
          <div className="mx-auto w-16 h-0.5 bg-gradient-to-r from-[#004B8D] to-[#48A9C5]" />
        </div>

        {/* Problem Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {/* Critical */}
          <div className="bg-white border border-[#E5E7EB] rounded-md overflow-hidden">
            <div className="bg-[#EF4444] px-4 py-2">
              <h3 className="text-white font-semibold flex items-center gap-2">
                <span className="text-lg">🔴</span> Critical
              </h3>
            </div>
            <div className="p-4 space-y-4">
              <div>
                <p className="font-medium text-[#1F2937] mb-2">1. 전후사진 부재</p>
                <ul className="text-sm text-[#6B7280] space-y-1 pl-4">
                  <li>→ 성형 마케팅 핵심 원천 없음</li>
                  <li>→ 카페 채널 효과 제한</li>
                </ul>
              </div>
              <div>
                <p className="font-medium text-[#1F2937] mb-2">2. 부산 지역 키워드 미노출</p>
                <ul className="text-sm text-[#6B7280] space-y-1 pl-4">
                  <li>→ 지역 환자 유입 경로 차단</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Major */}
          <div className="bg-white border border-[#E5E7EB] rounded-md overflow-hidden">
            <div className="bg-[#F59E0B] px-4 py-2">
              <h3 className="text-white font-semibold flex items-center gap-2">
                <span className="text-lg">🟠</span> Major
              </h3>
            </div>
            <div className="p-4 space-y-4">
              <div>
                <p className="font-medium text-[#1F2937] mb-2">3. 채널 편중 (블로그만)</p>
                <ul className="text-sm text-[#6B7280] space-y-1 pl-4">
                  <li>→ 경쟁사는 4채널 동시 운영</li>
                </ul>
              </div>
              <div>
                <p className="font-medium text-[#1F2937] mb-2">4. 파워링크 혼합 운영</p>
                <ul className="text-sm text-[#6B7280] space-y-1 pl-4">
                  <li>→ 정신과+성형 통합 캠페인</li>
                </ul>
              </div>
              <div>
                <p className="font-medium text-[#1F2937] mb-2">5. 의료진 경력 활용 미흡</p>
                <ul className="text-sm text-[#6B7280] space-y-1 pl-4">
                  <li>→ 부산대 교수 경력 미노출</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Minor */}
          <div className="bg-white border border-[#E5E7EB] rounded-md overflow-hidden">
            <div className="bg-[#FCD34D] px-4 py-2">
              <h3 className="text-[#1F2937] font-semibold flex items-center gap-2">
                <span className="text-lg">🟡</span> Minor
              </h3>
            </div>
            <div className="p-4 space-y-4">
              <div>
                <p className="font-medium text-[#1F2937]">6. 카페 비효율</p>
              </div>
              <div>
                <p className="font-medium text-[#1F2937]">7. 지식인 미활용</p>
              </div>
            </div>
          </div>
        </div>

        {/* Priority Matrix */}
        <div className="bg-white border border-[#E5E7EB] rounded-md p-6">
          <h3 className="text-lg font-semibold text-[#1F2937] mb-6">문제 우선순위 매트릭스</h3>

          <div className="relative h-[350px] bg-[#F6F8FA] rounded-md overflow-hidden">
            {/* Axis Labels */}
            <div className="absolute left-2 top-1/2 -translate-y-1/2 -rotate-90 text-sm font-medium text-[#6B7280]">
              영향도 ↑
            </div>
            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 text-sm font-medium text-[#6B7280]">
              해결 용이 →
            </div>

            {/* Quadrant Labels */}
            <div className="absolute top-4 left-12 text-xs text-[#6B7280]">어려움 / 높은 영향</div>
            <div className="absolute top-4 right-4 text-xs text-[#6B7280]">용이 / 높은 영향</div>
            <div className="absolute bottom-12 left-12 text-xs text-[#6B7280]">어려움 / 낮은 영향</div>
            <div className="absolute bottom-12 right-4 text-xs text-[#6B7280]">용이 / 낮은 영향</div>

            {/* Grid */}
            <div className="absolute inset-8 border border-dashed border-[#D1D5DB]">
              <div className="absolute top-1/2 left-0 right-0 border-t border-dashed border-[#D1D5DB]" />
              <div className="absolute left-1/2 top-0 bottom-0 border-l border-dashed border-[#D1D5DB]" />
            </div>

            {/* Issues */}
            {/* 1.전후사진 부재 - x:25, y:90 */}
            <div className="absolute" style={{ left: '20%', top: '10%' }}>
              <div className="bg-[#EF4444] text-white px-2 py-1 rounded text-xs">
                <p className="font-medium">1.전후사진 부재</p>
                <p className="text-[10px] opacity-80">최우선 해결</p>
              </div>
            </div>

            {/* 2.지역 키워드 - x:75, y:85 */}
            <div className="absolute" style={{ left: '70%', top: '15%' }}>
              <div className="bg-[#EF4444] text-white px-2 py-1 rounded text-xs">
                <p className="font-medium">2.지역 키워드</p>
                <p className="text-[10px] opacity-80">지식인 확대</p>
              </div>
            </div>

            {/* 4.파워링크 - x:30, y:60 */}
            <div className="absolute" style={{ left: '25%', top: '40%' }}>
              <div className="bg-[#F59E0B] text-white px-2 py-1 rounded text-xs">
                <p className="font-medium">4.파워링크</p>
                <p className="text-[10px] opacity-80">구조 개선</p>
              </div>
            </div>

            {/* 3.채널 편중 - x:70, y:55 */}
            <div className="absolute" style={{ left: '65%', top: '45%' }}>
              <div className="bg-[#F59E0B] text-white px-2 py-1 rounded text-xs">
                <p className="font-medium">3.채널 편중</p>
                <p className="text-[10px] opacity-80">확장 필요</p>
              </div>
            </div>

            {/* 5.강점 부각 - x:35, y:35 */}
            <div className="absolute" style={{ left: '30%', top: '65%' }}>
              <div className="bg-[#6B7280] text-white px-2 py-1 rounded text-xs">
                <p className="font-medium">5.강점 부각</p>
                <p className="text-[10px] opacity-80">콘텐츠 강화</p>
              </div>
            </div>

            {/* 6.카페 재활성 - x:75, y:30 */}
            <div className="absolute" style={{ left: '70%', top: '70%' }}>
              <div className="bg-[#6B7280] text-white px-2 py-1 rounded text-xs">
                <p className="font-medium">6.카페 재활성</p>
                <p className="text-[10px] opacity-80">중기 과제</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
