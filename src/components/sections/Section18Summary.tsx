/**
 * Section17Summary - 요약 및 권장사항
 * Design Guide (docs/design-guide.md) 기반
 *
 * 생성: 2026-01-13
 * 데이터 소스: data/seoil-medical.yaml (page 17)
 */

export function Section18Summary() {
  return (
    <section className="min-h-[calc(100vh-144px)] bg-white">
      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Section Header */}
        <div className="text-center mb-8">
          <h2 className="text-4xl font-semibold text-[#004B8D] mb-2">9. 요약 및 권장사항</h2>
          <div className="mx-auto w-16 h-0.5 bg-gradient-to-r from-[#004B8D] to-[#48A9C5]" />
        </div>

        {/* 핵심 요약 테이블 */}
        <div className="bg-white border border-[#E5E7EB] rounded-md overflow-hidden mb-8">
          <div className="bg-[#F6F8FA] px-6 py-3 border-b border-[#E5E7EB]">
            <h3 className="text-lg font-semibold text-[#1F2937]">핵심 요약</h3>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-[#F6F8FA]">
                <tr>
                  <th className="px-6 py-3 text-left text-sm font-medium text-[#6B7280] w-1/4">구분</th>
                  <th className="px-6 py-3 text-left text-sm font-medium text-[#6B7280] w-1/4">현황</th>
                  <th className="px-6 py-3 text-left text-sm font-medium text-[#6B7280] w-1/2">제안</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#E5E7EB]">
                <tr>
                  <td className="px-6 py-4 text-sm font-medium text-[#1F2937]">전후사진</td>
                  <td className="px-6 py-4 text-sm text-[#EF4444]">없음</td>
                  <td className="px-6 py-4 text-sm text-[#1F2937]">확보 프로세스 구축 (최우선)</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-sm font-medium text-[#1F2937]">지역 키워드</td>
                  <td className="px-6 py-4 text-sm text-[#EF4444]">미노출</td>
                  <td className="px-6 py-4 text-sm text-[#1F2937]">지식인 채널 확대</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-sm font-medium text-[#1F2937]">채널 구성</td>
                  <td className="px-6 py-4 text-sm text-[#F59E0B]">블로그만</td>
                  <td className="px-6 py-4 text-sm text-[#1F2937]">지식인 + 언론보도 추가</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-sm font-medium text-[#1F2937]">카페</td>
                  <td className="px-6 py-4 text-sm text-[#F59E0B]">비효율 운영</td>
                  <td className="px-6 py-4 text-sm text-[#1F2937]">사진 확보 전까지 중단 권고</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-sm font-medium text-[#1F2937]">파워링크</td>
                  <td className="px-6 py-4 text-sm text-[#F59E0B]">통합 운영</td>
                  <td className="px-6 py-4 text-sm text-[#1F2937]">캠페인 분리 권고</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* 권장 옵션 안내 */}
        <div className="bg-white border border-[#E5E7EB] rounded-md overflow-hidden">
          <div className="bg-[#F6F8FA] px-6 py-3 border-b border-[#E5E7EB]">
            <h3 className="text-lg font-semibold text-[#1F2937]">권장 옵션 안내</h3>
          </div>
          <div className="p-6 space-y-4">
            {/* 옵션 1 */}
            <div className="bg-[#004B8D]/5 border-l-4 border-[#004B8D] p-4 rounded-r-lg">
              <h4 className="font-semibold text-[#1F2937] mb-2">전체 마케팅 통합 관리 원할 경우</h4>
              <p className="text-[#004B8D] font-medium">
                → 옵션 1: 바이럴 + 파워링크 (약 550~600만원)
              </p>
            </div>

            {/* 옵션 2 */}
            <div className="bg-[#48A9C5]/5 border-l-4 border-[#48A9C5] p-4 rounded-r-lg">
              <h4 className="font-semibold text-[#1F2937] mb-2">콘텐츠 마케팅 집중 원할 경우</h4>
              <p className="text-[#48A9C5] font-medium">
                → 옵션 2: 바이럴만 (약 278만원)
              </p>
            </div>

            {/* 옵션 3 */}
            <div className="bg-[#6B7280]/5 border-l-4 border-[#6B7280] p-4 rounded-r-lg">
              <h4 className="font-semibold text-[#1F2937] mb-2">기존 예산 재배분 원할 경우</h4>
              <p className="text-[#6B7280] font-medium mb-2">
                → 옵션 3: 채널 전환형 (약 194만원)
              </p>
              <ul className="text-sm text-[#6B7280] space-y-1 pl-4">
                <li>• 카페 예산 → 지식인 + 언론보도로 전환</li>
                <li>• 블로그는 기존 대행사와 협업 구조</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
