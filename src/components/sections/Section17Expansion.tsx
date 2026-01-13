/**
 * Section17Expansion - 향후 확장 방향
 * Design: v0.dev chat qxvOxjvHGBl
 * 
 * 개선: 2026-01-13
 * - 단일 뷰포트 내 컴팩트 레이아웃
 * - 2컬럼 타임라인 그리드
 * - 홈페이지 섹션 인라인 태그화
 */

import { Home, AlertCircle, TrendingUp } from "lucide-react"

export function Section17Expansion() {
  return (
    <section className="min-h-[calc(100vh-144px)] flex items-center justify-center bg-white">
      <div className="w-full max-w-7xl px-6">
        {/* Header */}
        <div className="mb-4">
          <h2 className="text-2xl font-bold text-[#004B8D] mb-2">8. 향후 확장 방향</h2>
          <div className="h-1 w-48 bg-gradient-to-r from-[#004B8D] to-[#48A9C5] rounded-full mb-3" />
          <div className="bg-gray-100 py-2 px-4 rounded">
            <p className="text-sm font-medium text-gray-700">📅 전후사진 확보 후 마케팅 확장 로드맵</p>
          </div>
        </div>

        {/* 2-Column Timeline Grid */}
        <div className="grid md:grid-cols-2 gap-4 mb-4">
          {/* Left Column - Phase 1 */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200">
            <div className="bg-[#004B8D] text-white py-2 px-4 font-bold text-sm">【1단계】 사진 확보 완료 시점</div>
            <div className="p-4 space-y-3">
              {/* Item 1 */}
              <div className="flex gap-3">
                <div className="flex-shrink-0 w-7 h-7 bg-[#004B8D] text-white rounded-full flex items-center justify-center text-sm font-bold">
                  1
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-sm text-[#004B8D] mb-1">카페 채널 재활성화</h3>
                  <ul className="text-xs text-gray-700 space-y-0.5">
                    <li>• 자연스러운 후기 형태 게시물</li>
                    <li>• 전후사진 포함 콘텐츠 배포</li>
                    <li>• 맘카페, 성형 커뮤니티 타겟</li>
                  </ul>
                </div>
              </div>

              {/* Item 2 */}
              <div className="flex gap-3">
                <div className="flex-shrink-0 w-7 h-7 bg-[#004B8D] text-white rounded-full flex items-center justify-center text-sm font-bold">
                  2
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-sm text-[#004B8D] mb-1">블로그 상위노출 강화</h3>
                  <ul className="text-xs text-gray-700 space-y-0.5">
                    <li>• 전후사진 포함 → 체류시간 증가</li>
                    <li>• 콘텐츠 경쟁력 확보 후 노출 본격화</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Phase 2 */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200">
            <div className="bg-[#48A9C5] text-white py-2 px-4 font-bold text-sm">【2단계】 채널 확장</div>
            <div className="p-4 space-y-3">
              {/* Item 3 */}
              <div className="flex gap-3">
                <div className="flex-shrink-0 w-7 h-7 bg-[#48A9C5] text-white rounded-full flex items-center justify-center text-sm font-bold">
                  3
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-sm text-[#48A9C5] mb-1">릴스와 쇼츠 강화 검토</h3>
                  <ul className="text-xs text-gray-700 space-y-0.5">
                    <li>• 전후사진 기반 숏폼 콘텐츠</li>
                    <li>• 시술 과정 타임랩스</li>
                    <li>• 의료진 인터뷰 영상</li>
                  </ul>
                </div>
              </div>

              {/* Item 4 */}
              <div className="flex gap-3">
                <div className="flex-shrink-0 w-7 h-7 bg-[#48A9C5] text-white rounded-full flex items-center justify-center text-sm font-bold">
                  4
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-sm text-[#48A9C5] mb-1">네이버 플레이스 최적화</h3>
                  <ul className="text-xs text-gray-700 space-y-0.5">
                    <li>• 병원 정보 상세화</li>
                    <li>• 리뷰 관리 체계 구축</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section - Homepage Banner */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200">
          <div className="bg-gray-100 py-2 px-4 flex items-center gap-2">
            <Home className="w-4 h-4 text-[#004B8D]" />
            <span className="font-bold text-sm text-gray-800">홈페이지 개선 필요성</span>
            <span className="text-xs text-gray-600 ml-2">온라인 마케팅의 최종 전환점 = 홈페이지</span>
          </div>

          <div className="p-4 space-y-2">
            {/* Warning Box */}
            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-3 flex items-start gap-2">
              <AlertCircle className="w-4 h-4 text-yellow-600 flex-shrink-0 mt-0.5" />
              <p className="text-xs text-gray-800">
                <strong>바이럴, 파워링크로 유입된 잠재 환자가 홈페이지에서 이탈하면 마케팅 효과 반감</strong>
              </p>
            </div>

            {/* Review Items as Inline Tags */}
            <div className="flex flex-wrap gap-2 items-center">
              <TrendingUp className="w-4 h-4 text-[#004B8D] flex-shrink-0" />
              <span className="text-xs font-semibold text-gray-700">검토 필요 사항:</span>
              {[
                "모바일 최적화 상태",
                "상담 예약 동선",
                "의료진 소개 페이지 구성",
                "시술 정보 상세도",
                "전후사진 갤러리 (확보 후)",
                "시술 성과 및 치료 사례 개발"
              ].map((item) => (
                <span key={item} className="inline-block bg-blue-100 text-[#004B8D] px-2 py-1 rounded text-xs font-medium">
                  {item}
                </span>
              ))}
            </div>

            {/* Footer Note */}
            <p className="text-xs text-gray-500 italic pt-1">
              ※ 홈페이지 개선은 본 제안서 범위 외이며, 필요 시 별도 진단 및 제안 가능
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
