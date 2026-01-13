/**
 * Section12PositioningCosmetic - 미용성형 시장 포지셔닝 분석
 * Design Guide (docs/design-guide.md) 기반
 *
 * 수정: 2026-01-13 - v0.dev MCP 기반 화살표 정확도 개선
 * 
 * 30년차 디자이너 원칙:
 * - DOM 위치 기반 동적 화살표 계산 (getBoundingClientRect)
 * - 콘텐츠가 한 페이지에 완전히 들어오도록 공간 최적화
 * - Design Guide의 max-w-content 및 스페이싱 시스템 준수
 * 
 * 데이터 소스: data/seoil-medical.yaml (page 12)
 */

"use client"

import { Lightbulb } from "lucide-react"
import { useEffect, useRef, useState } from "react"

// ============================================================================
// Type Definitions (Boris Cherny: readonly 타입으로 불변성 보장)
// ============================================================================

interface Position {
  readonly id: string
  readonly label: string
  readonly description?: string
  readonly percentage?: string
  readonly x: number  // percentage (0-100)
  readonly y: number  // percentage (0-100, bottom-based)
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
// Color Mapping (Design Guide 준수)
// ============================================================================

const colorMap: Record<Position['color'], string> = {
  red: 'bg-red-500',
  orange: 'bg-amber-500',
  'light-blue': 'bg-secondary',
  'dark-blue': 'bg-primary',
}

// ============================================================================
// Component (v0.dev MCP 기반 동적 화살표 계산)
// ============================================================================

export function Section12PositioningCosmetic() {
  const chartRef = useRef<HTMLDivElement>(null)
  const [arrowPath, setArrowPath] = useState("")

  // 화살표 경로 동적 계산 (v0.dev 솔루션 적용)
  useEffect(() => {
    if (!chartRef.current) return

    const updateArrow = () => {
      const currentBadge = document.getElementById("badge-seoil-current")
      const targetBadge = document.getElementById("badge-seoil-target")

      if (!currentBadge || !targetBadge || !chartRef.current) return

      const chartRect = chartRef.current.getBoundingClientRect()
      const currentRect = currentBadge.getBoundingClientRect()
      const targetRect = targetBadge.getBoundingClientRect()

      // 시작점: 현재 배지 중앙
      const startX = currentRect.left + currentRect.width / 2 - chartRect.left
      const startY = currentRect.top + currentRect.height / 2 - chartRect.top

      // 끝점: 목표 배지 왼쪽 가장자리 중앙
      const endX = targetRect.left - chartRect.left
      const endY = targetRect.top + targetRect.height / 2 - chartRect.top

      // Quadratic Bezier 곡선 제어점
      const controlX = startX + (endX - startX) * 0.6
      const controlY = startY - (startY - endY) * 0.5

      const path = `M ${startX} ${startY} Q ${controlX} ${controlY} ${endX} ${endY}`
      setArrowPath(path)
    }

    updateArrow()
    window.addEventListener("resize", updateArrow)
    // 배지 렌더링 후 화살표 업데이트
    const timer = setTimeout(updateArrow, 100)

    return () => {
      window.removeEventListener("resize", updateArrow)
      clearTimeout(timer)
    }
  }, [])

  return (
    <section className="w-full bg-background">
      {/* Design Guide 준수: max-w-content (1280px), 콘텐츠 크기에 맞춤 */}
      <div className="mx-auto max-w-content px-6 min-h-[calc(100vh-144px)] flex flex-col">
        {/* Section Header */}
        <div className="text-center py-4">
          <h2 className="text-heading-2 text-primary mb-1">
            4. 포지셔닝 분석 - <span className="text-secondary">미용성형 시장 (부산 지역)</span>
          </h2>
          <div 
            className="mx-auto w-16 h-0.5 bg-gradient-to-r from-primary to-secondary" 
            aria-hidden="true"
          />
        </div>

        {/* Main Content - flex-1로 남은 공간 채우기 */}
        <div className="flex-1 flex flex-col pb-4">
          {/* Positioning Map */}
          <div className="flex-1 bg-background border border-border rounded-lg p-5 shadow-card">
            <h3 className="text-lg font-semibold text-text-primary mb-3">
              미용성형 시장 포지셔닝 맵
            </h3>

            {/* 차트 컨테이너 */}
            <div 
              ref={chartRef}
              className="relative h-[320px] bg-surface rounded-md"
            >
              {/* Axis Labels */}
              <div className="absolute left-2 top-1/2 -translate-y-1/2 -rotate-90 text-sm font-medium text-text-secondary whitespace-nowrap z-10">
                ← 온라인 점유율
              </div>
              <div className="absolute bottom-2 left-1/2 -translate-x-1/2 text-sm font-medium text-text-secondary z-10">
                차별화 →
              </div>

              {/* Grid */}
              <div className="absolute inset-8 border border-dashed border-border">
                <div className="absolute top-1/2 left-0 right-0 border-t border-dashed border-border" />
                <div className="absolute left-1/2 top-0 bottom-0 border-l border-dashed border-border" />
              </div>

              {/* SVG Arrow Overlay - 동적 경로 */}
              <svg 
                className="absolute inset-0 pointer-events-none z-10" 
                style={{ width: "100%", height: "100%" }}
              >
                <defs>
                  <marker 
                    id="arrowhead-cosmetic" 
                    markerWidth="10" 
                    markerHeight="10" 
                    refX="9" 
                    refY="3" 
                    orient="auto"
                  >
                    <polygon points="0 0, 10 3, 0 6" fill="#10B981" />
                  </marker>
                </defs>
                {arrowPath && (
                  <path
                    d={arrowPath}
                    stroke="#10B981"
                    strokeWidth="3"
                    strokeDasharray="8,4"
                    fill="none"
                    markerEnd="url(#arrowhead-cosmetic)"
                  />
                )}
              </svg>

              {/* Position Badges */}
              {positions.map((pos) => (
                <div
                  key={pos.id}
                  id={`badge-${pos.id}`}
                  className="absolute transform -translate-x-1/2 -translate-y-1/2 z-20"
                  style={{
                    left: `${pos.x}%`,
                    bottom: `${pos.y}%`,
                  }}
                >
                  <div className="flex flex-col items-center gap-1">
                    <div
                      className={`${colorMap[pos.color]} text-white px-3 py-1.5 rounded-md shadow-card whitespace-nowrap font-semibold text-xs`}
                    >
                      {pos.label} {pos.percentage}
                    </div>
                    {pos.description && (
                      <div className="text-[10px] text-text-secondary font-medium bg-background px-2 py-0.5 rounded shadow-sm border border-border">
                        {pos.description}
                      </div>
                    )}
                  </div>
                </div>
              ))}

              {/* Legend */}
              <div className="absolute bottom-3 right-3 bg-background border border-border rounded-md p-3 shadow-sm">
                <div className="space-y-1.5 text-xs">
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
                    <div className="w-3 h-3 bg-primary rounded" />
                    <span className="text-text-secondary">목표 위치</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Strategy Callout - 차트 바로 아래 */}
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
