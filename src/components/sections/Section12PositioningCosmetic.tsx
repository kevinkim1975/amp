/**
 * Section12PositioningCosmetic - 미용성형 시장 포지셔닝 분석
 * Design Guide (docs/design-guide.md) 기반
 *
 * 수정: 2026-01-13 - 레이아웃 최적화 (한 페이지 내 완전 표시)
 * 
 * 30년차 디자이너 원칙:
 * - 콘텐츠가 한 페이지에 완전히 들어오도록 공간 최적화
 * - 차트 가독성 유지하면서 공간 효율성 확보
 * - Design Guide의 max-w-content 및 스페이싱 시스템 준수
 * 
 * 데이터 소스: data/seoil-medical.yaml (page 12)
 */

import { Lightbulb } from "lucide-react"

// ============================================================================
// Type Definitions (Boris Cherny: readonly 타입으로 불변성 보장)
// ============================================================================

interface Position {
  readonly id: string
  readonly label: string
  readonly description?: string
  readonly percentage?: string
  readonly x: number
  readonly y: number
  readonly highlight?: 'current' | 'target'
  readonly color: 'red' | 'orange' | 'light-blue' | 'dark-blue'
}

// ============================================================================
// Sample Data (YAML page 12 기반)
// ============================================================================

const positions: readonly Position[] = [
  { id: 'haneul', label: '하늘성형외과', percentage: '44%', description: '부산 압도적 1위', x: 50, y: 90, color: 'red' },
  { id: 'galaxy', label: '갤럭시성형외과', percentage: '21%', description: '재수술 전문', x: 45, y: 60, color: 'orange' },
  { id: 'iandco', label: '아이앤코', percentage: '19%', description: '눈/코 전문', x: 40, y: 45, color: 'orange' },
  { id: 'seoil-current', label: '서일메디컬 현재', percentage: '0%', x: 30, y: 5, highlight: 'current', color: 'light-blue' },
  { id: 'seoil-target', label: '서일메디컬 목표', description: '재건+미용 결합', x: 80, y: 50, highlight: 'target', color: 'dark-blue' },
] as const

const strategyItems: readonly string[] = [
  '전후사진 확보 전까지 직접적인 점유율 경쟁 회피',
  '"재건+미용 결합" 포지셔닝으로 차별화 (재건 기술력 = 미용 품질 신뢰)',
  '지식인/언론보도 통해 전문성·안전성 메시지 우선 확산',
  '중장기: 전후사진 확보 후 본격적인 점유율 경쟁 진입',
] as const

// ============================================================================
// Component (레이아웃 최적화: 한 페이지 내 완전 표시)
// ============================================================================

export function Section12PositioningCosmetic() {
  return (
    <section className="w-full bg-background py-6">
      {/* Design Guide 준수: max-w-content (1280px), 콘텐츠 크기에 맞춤 */}
      <div className="mx-auto max-w-content px-6 min-h-[calc(100vh-144px)] flex flex-col justify-start">
        {/* Section Header - 압축 */}
        <div className="text-center mb-4">
          <h2 className="text-heading-2 text-primary mb-1">
            4. 포지셔닝 분석 - 미용성형 시장 (부산 지역)
          </h2>
          <div 
            className="mx-auto w-16 h-0.5 bg-gradient-to-r from-primary to-secondary" 
            aria-hidden="true"
          />
        </div>

        {/* Positioning Map - 공간 최적화 (상단/하단 여백 증가, 하단 여백 제거) */}
        <div className="flex flex-col">
          <div className="bg-background border border-border rounded-lg p-5 shadow-card">
            <h3 className="text-lg font-semibold text-text-primary mb-4">
              미용성형 시장 포지셔닝 맵
            </h3>

            {/* 차트 컨테이너 - 상단/하단 패딩 추가하여 박스가 잘리지 않도록 */}
            <div className="relative h-[280px] bg-surface rounded-md pt-12 pb-10 px-8">
              {/* Axis Labels */}
              <div className="absolute left-2 top-1/2 -translate-y-1/2 -rotate-90 text-sm font-medium text-text-secondary z-10">
                온라인 점유율 ↑
              </div>
              <div className="absolute bottom-2 left-1/2 -translate-x-1/2 text-sm font-medium text-text-secondary z-10">
                차별화 →
              </div>

              {/* Grid */}
              <div className="absolute inset-8 border border-dashed border-border">
                <div className="absolute top-1/2 left-0 right-0 border-t border-dashed border-border" />
                <div className="absolute left-1/2 top-0 bottom-0 border-l border-dashed border-border" />
              </div>

              {/* Positions - 단순화된 좌표 계산 */}
              {positions.map((pos) => {
                const isCurrent = pos.highlight === 'current'
                const isTarget = pos.highlight === 'target'
                
                const colorMap = {
                  red: 'bg-red-500',
                  orange: 'bg-amber-500',
                  'light-blue': 'bg-secondary',
                  'dark-blue': 'bg-primary',
                }

                return (
                  <div
                    key={pos.id}
                    className="absolute z-20"
                    style={{
                      left: `${pos.x}%`,
                      top: `${100 - pos.y}%`, // Y축 반전 (위쪽이 높은 값)
                      transform: 'translate(-50%, -50%)',
                    }}
                  >
                    <div
                      className={`px-2.5 py-1 rounded-md text-xs shadow-card ${
                        isCurrent
                          ? `${colorMap[pos.color]} text-white border-2 border-white`
                          : isTarget
                          ? `${colorMap[pos.color]} text-white border-2 border-accent`
                          : `${colorMap[pos.color]} text-white`
                      }`}
                    >
                      <p className="font-medium whitespace-nowrap">
                        {pos.label} {pos.percentage && pos.percentage}
                      </p>
                      {pos.description && (
                        <p className="text-[10px] opacity-80 mt-0.5">{pos.description}</p>
                      )}
                    </div>
                  </div>
                )
              })}

              {/* Arrow from current to target - 정확한 위치 계산 */}
              {/* 현재 위치: x:30, y:5 → left: 30%, top: 95% */}
              {/* 목표 위치: x:80, y:50 → left: 80%, top: 50% */}
              {/* 화살표는 현재 위치에서 시작하여 목표 박스 가장자리에 정확히 닿도록 */}
              {/* SVG 위치: 현재 위치를 기준으로 시작, 목표 위치까지의 거리만큼 width/height 설정 */}
              <svg
                className="absolute z-10"
                style={{
                  left: '30%',
                  top: '95%',
                  width: '50%',
                  height: '45%',
                  transform: 'translate(-50%, -50%)',
                }}
                viewBox="0 0 100 100"
                preserveAspectRatio="none"
              >
                <defs>
                  <marker
                    id="arrowhead-cosmetic"
                    markerWidth="10"
                    markerHeight="8"
                    refX="9"
                    refY="4"
                    orient="auto"
                  >
                    <polygon points="0 0, 10 4, 0 8" fill="currentColor" />
                  </marker>
                </defs>
                {/* 화살표 경로: 현재(0, 100)에서 목표(100, 0)로 */}
                {/* 목표 박스 크기 고려하여 화살표 끝점을 약간 앞당김 (박스 가장자리에 닿도록) */}
                <path
                  d="M 0 100 Q 50 50 96 4"
                  stroke="currentColor"
                  strokeWidth="2"
                  fill="none"
                  markerEnd="url(#arrowhead-cosmetic)"
                  strokeDasharray="4,3"
                  className="text-accent"
                />
              </svg>

              {/* Legend */}
              <div className="absolute bottom-3 right-3 bg-background p-2.5 rounded-md shadow-sm text-xs space-y-1">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-red-500 rounded" />
                  <span className="text-text-secondary">1위 경쟁사</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-amber-500 rounded" />
                  <span className="text-text-secondary">2-3위 경쟁사</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-secondary rounded" />
                  <span className="text-text-secondary">현재 위치</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-primary rounded border border-accent" />
                  <span className="text-text-secondary">목표 위치</span>
                </div>
              </div>
            </div>
          </div>

          {/* Insight Callout - 차트 바로 아래 연결 (하단 여백 최소화) */}
          <div className="mt-3 p-4 bg-surface border-l-4 border-primary rounded-r-lg">
            <div className="flex gap-3">
              <Lightbulb className="text-primary flex-shrink-0 mt-0.5" size={20} strokeWidth={1.5} />
              <div className="flex-1">
                <p className="text-sm font-semibold text-text-primary mb-2">
                  서일메디컬 미용성형 포지션 전략
                </p>
                <ul className="space-y-1.5 text-sm text-text-primary">
                  {strategyItems.map((item, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <span className="text-accent font-bold shrink-0">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
