/**
 * Section16Expansion - 향후 확장 방향
 * Design Guide (docs/design-guide.md) 기반
 *
 * 생성: 2026-01-13
 * 데이터 소스: data/seoil-medical.yaml (page 16)
 */

import { Lightbulb, Calendar, TrendingUp, Home, AlertCircle } from "lucide-react"

export function Section17Expansion() {
  return (
    <section className="min-h-[calc(100vh-144px)] bg-white">
      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Section Header */}
        <div className="text-center mb-8">
          <h2 className="text-4xl font-semibold text-[#004B8D] mb-2">8. 향후 확장 방향</h2>
          <div className="mx-auto w-16 h-0.5 bg-gradient-to-r from-[#004B8D] to-[#48A9C5]" />
        </div>

        {/* Callout */}
        <div className="mb-8 p-4 bg-[#F6F8FA] border-l-4 border-[#E5E7EB] rounded-r-lg">
          <div className="flex items-center gap-2">
            <Calendar className="text-[#6B7280] flex-shrink-0" size={20} />
            <p className="text-lg text-[#1F2937]">전후사진 확보 후 마케팅 확장 로드맵</p>
          </div>
        </div>

        {/* Timeline - Two Phases */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          {/* 1단계 */}
          <div className="bg-white border border-[#E5E7EB] rounded-md overflow-hidden">
            <div className="bg-[#004B8D] px-6 py-3">
              <h3 className="text-lg font-semibold text-white">【1단계】 사진 확보 완료 시점</h3>
            </div>
            <div className="p-6 space-y-6">
              {/* 카페 채널 재활성화 */}
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <span className="flex items-center justify-center w-6 h-6 bg-[#004B8D] text-white rounded-full text-xs font-bold">1</span>
                  <h4 className="font-semibold text-[#1F2937]">카페 채널 재활성화</h4>
                </div>
                <ul className="space-y-2 text-sm text-[#1F2937] pl-8">
                  <li>• 자연스러운 후기 형태 게시물</li>
                  <li>• 전후사진 포함 콘텐츠 배포</li>
                  <li>• 맘카페, 성형 커뮤니티 타겟</li>
                </ul>
              </div>

              {/* 블로그 상위노출 강화 */}
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <span className="flex items-center justify-center w-6 h-6 bg-[#004B8D] text-white rounded-full text-xs font-bold">2</span>
                  <h4 className="font-semibold text-[#1F2937]">블로그 상위노출 강화</h4>
                </div>
                <ul className="space-y-2 text-sm text-[#1F2937] pl-8">
                  <li>• 전후사진 포함 → 체류시간 증가</li>
                  <li>• 콘텐츠 경쟁력 확보 후 노출 본격화</li>
                </ul>
              </div>
            </div>
          </div>

          {/* 2단계 */}
          <div className="bg-white border border-[#E5E7EB] rounded-md overflow-hidden">
            <div className="bg-[#48A9C5] px-6 py-3">
              <h3 className="text-lg font-semibold text-white">【2단계】 채널 확장</h3>
            </div>
            <div className="p-6 space-y-6">
              {/* 릴스와 쇼츠 강화 검토 */}
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <span className="flex items-center justify-center w-6 h-6 bg-[#48A9C5] text-white rounded-full text-xs font-bold">3</span>
                  <h4 className="font-semibold text-[#1F2937]">릴스와 쇼츠 강화 검토</h4>
                </div>
                <ul className="space-y-2 text-sm text-[#1F2937] pl-8">
                  <li>• 전후사진 기반 숏폼 콘텐츠</li>
                  <li>• 시술 과정 타임랩스</li>
                  <li>• 의료진 인터뷰 영상</li>
                </ul>
              </div>

              {/* 네이버 플레이스 최적화 */}
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <span className="flex items-center justify-center w-6 h-6 bg-[#48A9C5] text-white rounded-full text-xs font-bold">4</span>
                  <h4 className="font-semibold text-[#1F2937]">네이버 플레이스 최적화</h4>
                </div>
                <ul className="space-y-2 text-sm text-[#1F2937] pl-8">
                  <li>• 병원 정보 상세화</li>
                  <li>• 리뷰 관리 체계 구축</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* 홈페이지 개선 필요성 */}
        <div className="bg-white border border-[#E5E7EB] rounded-md overflow-hidden">
          <div className="bg-[#F6F8FA] px-6 py-4 border-b border-[#E5E7EB]">
            <div className="flex items-center gap-3">
              <Home className="text-[#004B8D]" size={24} />
              <div>
                <h3 className="text-lg font-semibold text-[#1F2937]">홈페이지 개선 필요성</h3>
                <p className="text-sm text-[#6B7280]">
                  온라인 마케팅의 최종 전환점 = 홈페이지
                </p>
              </div>
            </div>
          </div>
          <div className="p-6">
            <div className="mb-4 p-4 bg-[#FEF3C7] border-l-4 border-[#F59E0B] rounded-r-lg">
              <div className="flex items-start gap-2">
                <AlertCircle className="text-[#F59E0B] flex-shrink-0 mt-0.5" size={18} />
                <p className="text-sm text-[#1F2937]">
                  바이럴, 파워링크로 유입된 잠재 환자가 홈페이지에서 이탈하면 마케팅 효과 반감
                </p>
              </div>
            </div>

            <div className="mb-4">
              <h4 className="text-sm font-semibold text-[#1F2937] mb-3">검토 필요 사항</h4>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {[
                  "모바일 최적화 상태",
                  "상담 예약 동선",
                  "의료진 소개 페이지 구성",
                  "시술 정보 상세도",
                  "전후사진 갤러리 (확보 후)",
                  "시술 성과 및 치료 사례 개발"
                ].map((item) => (
                  <div key={item} className="flex items-center gap-2 text-sm text-[#1F2937] bg-[#F6F8FA] px-3 py-2 rounded">
                    <TrendingUp className="text-[#10B981] flex-shrink-0" size={14} />
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <p className="text-sm text-[#6B7280] italic">
              ※ 홈페이지 개선은 본 제안서 범위 외이며, 필요 시 별도 진단 및 제안 가능
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
