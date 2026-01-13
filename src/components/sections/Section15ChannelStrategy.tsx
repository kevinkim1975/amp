/**
 * Section14ChannelStrategy - 전략 제안: 채널별 전략
 * Design Guide (docs/design-guide.md) 기반
 *
 * 생성: 2026-01-13
 * 데이터 소스: data/seoil-medical.yaml (page 14)
 */

import { FileText, MessageCircle, Newspaper, Coffee } from "lucide-react"

export function Section15ChannelStrategy() {
  return (
    <section className="min-h-[calc(100vh-144px)] bg-white">
      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Section Header */}
        <div className="text-center mb-8">
          <h2 className="text-4xl font-semibold text-[#004B8D] mb-2">6. 전략 제안 - 채널별 전략</h2>
          <div className="mx-auto w-16 h-0.5 bg-gradient-to-r from-[#004B8D] to-[#48A9C5]" />
        </div>

        {/* 2x2 Grid - 채널 카드 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* 블로그 */}
          <div className="bg-white border border-[#E5E7EB] rounded-md overflow-hidden">
            <div className="bg-[#10B981] px-6 py-3 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <FileText className="text-white" size={20} />
                <h3 className="text-lg font-semibold text-white">블로그 (유지 + 개선)</h3>
              </div>
            </div>
            <div className="p-6">
              <p className="text-sm text-[#6B7280] mb-4">현재: 15건/월, 콘텐츠 차별화 부족</p>

              <div className="space-y-4">
                <div>
                  <h4 className="text-sm font-semibold text-[#1F2937] mb-2">개선 방향</h4>
                  <ul className="space-y-1.5 text-sm text-[#1F2937]">
                    <li>• 콘텐츠 질적 개선</li>
                    <li>• 논문/학술자료 기반 콘텐츠</li>
                    <li>• 부산대 교수 경력 강조</li>
                    <li>• 시술 원리/과정 상세 설명</li>
                  </ul>
                </div>

                <div>
                  <h4 className="text-sm font-semibold text-[#1F2937] mb-2">운영 옵션</h4>
                  <ul className="space-y-1.5 text-sm text-[#1F2937]">
                    <li>A. 기존 대행사 유지 + 방향 조정</li>
                    <li>B. 콘텐츠 협업 (기획은 당사)</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* 지식인 */}
          <div className="bg-white border border-[#E5E7EB] rounded-md overflow-hidden">
            <div className="bg-[#004B8D] px-6 py-3 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <MessageCircle className="text-white" size={20} />
                <h3 className="text-lg font-semibold text-white">지식인 (신규 추가)</h3>
              </div>
              <span className="bg-white text-[#004B8D] text-xs font-bold px-2 py-1 rounded">NEW</span>
            </div>
            <div className="p-6">
              <p className="text-sm text-[#6B7280] mb-4">현재: 미운영</p>

              <div className="space-y-4">
                <div>
                  <h4 className="text-sm font-semibold text-[#1F2937] mb-2">왜 지식인인가?</h4>
                  <ul className="space-y-1.5 text-sm text-[#1F2937]">
                    <li>• 전후사진 없이도 효과적</li>
                    <li>• 전문 상담으로 신뢰 구축</li>
                    <li>• 지역 키워드 노출 가능</li>
                  </ul>
                </div>

                <div>
                  <h4 className="text-sm font-semibold text-[#1F2937] mb-2">운영 방향</h4>
                  <ul className="space-y-1.5 text-sm text-[#1F2937]">
                    <li>• 월 20건 답변 작성</li>
                    <li>• 재건성형 관련 질문 타겟</li>
                    <li>• 의료진 전문성 기반 상세 답변</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* 언론보도 */}
          <div className="bg-white border border-[#E5E7EB] rounded-md overflow-hidden">
            <div className="bg-[#48A9C5] px-6 py-3 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Newspaper className="text-white" size={20} />
                <h3 className="text-lg font-semibold text-white">언론보도 (강화)</h3>
              </div>
            </div>
            <div className="p-6">
              <p className="text-sm text-[#6B7280] mb-4">현재: 월 20만원/1건, 노출 불확실</p>

              <div className="space-y-4">
                <div>
                  <h4 className="text-sm font-semibold text-[#1F2937] mb-2">개선 방향</h4>
                  <ul className="space-y-1.5 text-sm text-[#1F2937]">
                    <li>• 키워드 3~5개 네이버 노출 보장</li>
                    <li>• AI 추천 (큐:) 결과 노출 확보</li>
                    <li>• 의료진 전문성/경력 중심 보도</li>
                  </ul>
                </div>

                <div>
                  <h4 className="text-sm font-semibold text-[#1F2937] mb-2">기대 효과</h4>
                  <ul className="space-y-1.5 text-sm text-[#1F2937]">
                    <li>• 뉴스 탭 노출 + AI 검색 신뢰도</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* 카페 */}
          <div className="bg-white border border-[#E5E7EB] rounded-md overflow-hidden">
            <div className="bg-[#EF4444] px-6 py-3 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Coffee className="text-white" size={20} />
                <h3 className="text-lg font-semibold text-white">카페 (일시 중단 권고)</h3>
              </div>
              <span className="bg-white text-[#EF4444] text-xs font-bold px-2 py-1 rounded">PAUSE</span>
            </div>
            <div className="p-6">
              <p className="text-sm text-[#6B7280] mb-4">현재: 112만원/월, 전후사진 없이 진행</p>

              <div className="space-y-4">
                <div>
                  <h4 className="text-sm font-semibold text-[#1F2937] mb-2">권고 사항</h4>
                  <ul className="space-y-1.5 text-sm text-[#1F2937]">
                    <li>• 사진 확보 전까지 예산 → 지식인 재배분</li>
                    <li>• 전후사진 확보 후 재활성화 검토</li>
                  </ul>
                </div>

                <div>
                  <h4 className="text-sm font-semibold text-[#1F2937] mb-2">이유</h4>
                  <ul className="space-y-1.5 text-sm text-[#1F2937]">
                    <li>• 사진 없는 카페 작업은 효율 제한</li>
                    <li>• 카페는 후기/사진 기반 채널</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
