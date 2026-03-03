// components/game/ui/WaterSplash.tsx
"use client"

import React from "react"

type Splash = {
  id: string
  x: number // %
  y: number // %
  createdAt: number
  intensity: number // 0..1
}

function mulberry32(seed: number) {
  return function () {
    let t = (seed += 0x6d2b79f5)
    t = Math.imul(t ^ (t >>> 15), t | 1)
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61)
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296
  }
}

export function WaterSplashLayer({ splashes }: { splashes: Splash[] }) {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {splashes.map((s) => (
        <WaterSplash key={s.id} x={s.x} y={s.y} intensity={s.intensity} />
      ))}
    </div>
  )
}

function WaterSplash({
  x,
  y,
  intensity,
}: {
  x: number
  y: number
  intensity: number
}) {
  // количество частиц — регулируй
  const count = Math.round(18 + intensity * 18) // 18..36
  const rand = mulberry32(Math.floor((x * 1000 + y * 10000) * 13))

  const particles = Array.from({ length: count }).map((_, i) => {
    // угол разлёта
    const a = rand() * Math.PI * 2
    // дальность (px)
    const dist = 40 + rand() * (120 + intensity * 60)
    // размер капли
    const size = 3 + rand() * (6 + intensity * 4)
    // длительность
    const dur = 420 + rand() * 260
    // задержка чуть-чуть, чтобы не было "одной плоскостью"
    const delay = rand() * 40
    // “гравитация”: вниз тянем сильнее
    const dx = Math.cos(a) * dist
    const dy = Math.sin(a) * dist + (35 + rand() * 35)

    // прозрачность
    const alpha = 0.7 + rand() * 0.25

    return {
      i,
      dx,
      dy,
      size,
      dur,
      delay,
      alpha,
    }
  })

  return (
    <div
      className="absolute"
      style={{
        left: `${x}%`,
        top: `${y}%`,
        transform: "translate(-50%, -50%)",
      }}
    >
      {/* центральный “пшик” (mist) */}
      <div
        className="water-mist"
        style={{
          ["--mistScale" as any]: String(1 + intensity * 0.6),
        }}
      />

      {/* частицы */}
      {particles.map((p) => (
        <span
          key={p.i}
          className="water-drop"
          style={{
            width: `${p.size}px`,
            height: `${p.size}px`,
            opacity: p.alpha,
            ["--dx" as any]: `${p.dx}px`,
            ["--dy" as any]: `${p.dy}px`,
            ["--dur" as any]: `${p.dur}ms`,
            ["--delay" as any]: `${p.delay}ms`,
          }}
        />
      ))}
    </div>
  )
}