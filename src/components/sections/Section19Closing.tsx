/**
 * Section19Closing - 감사합니다 (마무리)
 * Design Guide (docs/design-guide.md) 기반
 *
 * 생성: 2026-01-13
 * 19페이지 확장으로 신규 생성
 */

import { Mail, Phone, MapPin, Building2 } from "lucide-react"

export function Section19Closing() {
  return (
    <section className="min-h-[calc(100vh-144px)] bg-gradient-to-b from-white to-[#F8FAFC] flex items-center justify-center">
      <div className="max-w-4xl mx-auto px-6 py-16 text-center">
        {/* Logo/Company */}
        <div className="mb-10">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-[#004B8D] to-[#48A9C5] rounded-2xl mb-6 shadow-lg">
            <Building2 className="w-10 h-10 text-white" />
          </div>
          <p className="text-lg text-[#6B7280]">호원앤컴퍼니</p>
        </div>

        {/* Main Title */}
        <h1 className="text-5xl font-bold text-[#004B8D] mb-4">
          감사합니다
        </h1>
        <p className="text-xl text-[#6B7280] mb-12">
          서일메디컬의 성공적인 마케팅을 함께 만들어 가겠습니다
        </p>

        {/* Contact Info */}
        <div className="bg-white rounded-2xl shadow-sm border border-[#E5E7EB] p-8 mb-10">
          <h2 className="text-lg font-semibold text-[#1F2937] mb-6">문의 및 상담</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Phone */}
            <div className="flex flex-col items-center gap-2">
              <div className="w-12 h-12 bg-[#004B8D]/10 rounded-full flex items-center justify-center">
                <Phone className="w-5 h-5 text-[#004B8D]" />
              </div>
              <p className="text-sm text-[#6B7280]">전화</p>
              <p className="text-base font-medium text-[#1F2937]">02-1234-5678</p>
            </div>

            {/* Email */}
            <div className="flex flex-col items-center gap-2">
              <div className="w-12 h-12 bg-[#48A9C5]/10 rounded-full flex items-center justify-center">
                <Mail className="w-5 h-5 text-[#48A9C5]" />
              </div>
              <p className="text-sm text-[#6B7280]">이메일</p>
              <p className="text-base font-medium text-[#1F2937]">contact@howon.co.kr</p>
            </div>

            {/* Address */}
            <div className="flex flex-col items-center gap-2">
              <div className="w-12 h-12 bg-[#6B7280]/10 rounded-full flex items-center justify-center">
                <MapPin className="w-5 h-5 text-[#6B7280]" />
              </div>
              <p className="text-sm text-[#6B7280]">주소</p>
              <p className="text-base font-medium text-[#1F2937]">서울시 강남구</p>
            </div>
          </div>
        </div>

        {/* Footer */}
        <p className="text-sm text-[#9CA3AF]">
          © 2026 호원앤컴퍼니. All rights reserved.
        </p>
      </div>
    </section>
  )
}
