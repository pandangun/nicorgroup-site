"use client"

import React, {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useMemo,
  useRef,
} from "react"
import type { Leak, PipeNode } from "../types"

type Particle = {
  x: number
  y: number
  vx: number
  vy: number
  life: number
  size: number
  kind: "drop" | "mist"
  bright: number
}

export type WaterCanvasHandle = {
  burst: (xPct: number, yPct: number, intensity?: number) => void
  reset: () => void
}

function clamp(v: number, a: number, b: number) {
  return Math.max(a, Math.min(b, v))
}

// Жёсткие лимиты, чтобы никогда не улететь в “canvas exceeds max size”
const MAX_CANVAS_PX = 4096 // по ширине/высоте, безопасно
const MAX_DPR = 2 // 2 достаточно красиво, но не взрывает память

export const WaterCanvas = forwardRef<
  WaterCanvasHandle,
  {
    nodes: PipeNode[]
    leaks: Leak[]
    pressure: number
    className?: string
  }
>(function WaterCanvas({ nodes, leaks, pressure, className }, ref) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null)
  const rafRef = useRef<number | null>(null)
  const particlesRef = useRef<Particle[]>([])
  const puddlesRef = useRef<Map<string, number>>(new Map())
  const lastTRef = useRef<number>(performance.now())
  const sizeRef = useRef<{ w: number; h: number; dpr: number }>({ w: 0, h: 0, dpr: 1 })

  const nodeById = useMemo(() => {
    const m = new Map<string, PipeNode>()
    nodes.forEach((n) => m.set(n.id, n))
    return m
  }, [nodes])

  const safeDpr =
    typeof window !== "undefined"
      ? clamp(window.devicePixelRatio || 1, 1, MAX_DPR)
      : 1

  useImperativeHandle(ref, () => ({
    burst(xPct, yPct, intensity = 0.9) {
      const c = canvasRef.current
      if (!c) return
      const rect = c.getBoundingClientRect()
      if (rect.width <= 0 || rect.height <= 0) return

      const x = (xPct / 100) * rect.width
      const y = (yPct / 100) * rect.height

      const drops = Math.round(60 + intensity * 90)
      const mist = Math.round(18 + intensity * 22)

      for (let i = 0; i < drops; i++) {
        const a = Math.random() * Math.PI * 2
        const sp = 180 + Math.random() * (420 + intensity * 260)
        particlesRef.current.push({
          x,
          y,
          vx: Math.cos(a) * sp,
          vy: Math.sin(a) * sp - (120 + Math.random() * 140),
          life: 1,
          size: 1.6 + Math.random() * (3.8 + intensity * 2.2),
          kind: "drop",
          bright: 0.7 + Math.random() * 0.5,
        })
      }

      for (let i = 0; i < mist; i++) {
        const a = Math.random() * Math.PI * 2
        const sp = 60 + Math.random() * 140
        particlesRef.current.push({
          x,
          y,
          vx: Math.cos(a) * sp,
          vy: Math.sin(a) * sp - (40 + Math.random() * 80),
          life: 1,
          size: 10 + Math.random() * (22 + intensity * 18),
          kind: "mist",
          bright: 0.35 + Math.random() * 0.35,
        })
      }
    },
    reset() {
      particlesRef.current = []
      puddlesRef.current = new Map()
    },
  }))

  // resize with clamps
  useEffect(() => {
    const c = canvasRef.current
    if (!c) return

    const resize = () => {
      const rect = c.getBoundingClientRect()
      const w = Math.floor(rect.width)
      const h = Math.floor(rect.height)

      if (w <= 0 || h <= 0) {
        sizeRef.current = { w: 0, h: 0, dpr: safeDpr }
        c.width = 0
        c.height = 0
        return
      }

      // clamp css size (not dpr) to protect GPU/memory
      const cssW = clamp(w, 1, MAX_CANVAS_PX)
      const cssH = clamp(h, 1, MAX_CANVAS_PX)

      const pxW = Math.floor(cssW * safeDpr)
      const pxH = Math.floor(cssH * safeDpr)

      // clamp again in device pixels
      const finalW = clamp(pxW, 1, MAX_CANVAS_PX * safeDpr)
      const finalH = clamp(pxH, 1, MAX_CANVAS_PX * safeDpr)

      c.width = finalW
      c.height = finalH

      sizeRef.current = { w: cssW, h: cssH, dpr: safeDpr }
    }

    resize()
    const ro = new ResizeObserver(resize)
    ro.observe(c)
    return () => ro.disconnect()
  }, [safeDpr])

  useEffect(() => {
    const c = canvasRef.current
    if (!c) return
    const ctx = c.getContext("2d", { alpha: true })
    if (!ctx) return

    const drawJet = (x: number, y: number, strength01: number) => {
      const len = 140 + strength01 * 230
      const width = 7 + strength01 * 12

      const dir = Math.random() < 0.5 ? -1 : 1
      const dx = dir * (60 + Math.random() * 90) * strength01
      const dy = 110 + Math.random() * 90

      const x2 = x + dx
      const y2 = y + dy

      ctx.save()
      ctx.globalCompositeOperation = "lighter"

      // glow
      ctx.strokeStyle = "rgba(59,130,246,0.20)"
      ctx.lineWidth = width * 2.4
      ctx.lineCap = "round"
      ctx.beginPath()
      ctx.moveTo(x, y)
      ctx.quadraticCurveTo(x + dx * 0.35, y + dy * 0.25, x2, y2)
      ctx.stroke()

      // core
      const grad = ctx.createLinearGradient(x, y, x2, y2)
      grad.addColorStop(0, "rgba(255,255,255,0.95)")
      grad.addColorStop(0.25, "rgba(147,197,253,0.95)")
      grad.addColorStop(1, "rgba(59,130,246,0.30)")
      ctx.strokeStyle = grad
      ctx.lineWidth = width
      ctx.beginPath()
      ctx.moveTo(x, y)
      ctx.quadraticCurveTo(x + dx * 0.35, y + dy * 0.25, x2, y2)
      ctx.stroke()

      // highlight
      ctx.strokeStyle = "rgba(255,255,255,0.42)"
      ctx.lineWidth = Math.max(1.2, width * 0.22)
      ctx.beginPath()
      ctx.moveTo(x, y)
      ctx.quadraticCurveTo(x + dx * 0.33, y + dy * 0.22, x2, y2)
      ctx.stroke()

      ctx.restore()

      // spray emit
      const emit = 6 + Math.round(strength01 * 10)
      for (let i = 0; i < emit; i++) {
        particlesRef.current.push({
          x: x + (Math.random() - 0.5) * 6,
          y: y + (Math.random() - 0.5) * 6,
          vx: (Math.random() - 0.5) * 220 + dx * 1.1,
          vy: 70 + Math.random() * 240,
          life: 1,
          size: 1.2 + Math.random() * (2.6 + strength01 * 2.1),
          kind: "drop",
          bright: 0.65 + Math.random() * 0.55,
        })
      }
    }

    const step = (t: number) => {
      const dt = clamp((t - lastTRef.current) / 1000, 0, 0.033)
      lastTRef.current = t

      const { w, h, dpr } = sizeRef.current
      if (w <= 0 || h <= 0 || c.width <= 0 || c.height <= 0) {
        rafRef.current = requestAnimationFrame(step)
        return
      }

      try {
        // clear
        ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
        ctx.clearRect(0, 0, w, h)
      } catch {
        // если вдруг браузер всё равно ругнулся — останавливаем анимацию
        if (rafRef.current) cancelAnimationFrame(rafRef.current)
        rafRef.current = null
        return
      }

      // vignette + fog
      ctx.save()
      const vign = ctx.createRadialGradient(w * 0.5, h * 0.35, 40, w * 0.5, h * 0.45, Math.max(w, h) * 0.72)
      vign.addColorStop(0, "rgba(0,0,0,0)")
      vign.addColorStop(1, "rgba(0,0,0,0.55)")
      ctx.fillStyle = vign
      ctx.fillRect(0, 0, w, h)

      const fog = ctx.createRadialGradient(w * 0.5, h * 0.0, 10, w * 0.5, h * 0.0, w * 0.9)
      fog.addColorStop(0, "rgba(59,130,246,0.10)")
      fog.addColorStop(1, "rgba(59,130,246,0.0)")
      ctx.fillStyle = fog
      ctx.fillRect(0, 0, w, h)
      ctx.restore()

      // puddles update
      const puddles = puddlesRef.current
      const activeNodeIds = new Set(leaks.map((l) => l.nodeId))
      for (const n of nodes) {
        const has = activeNodeIds.has(n.id)
        const cur = puddles.get(n.id) ?? 0
        const next = has ? clamp(cur + dt * 0.25, 0, 1) : clamp(cur - dt * 0.12, 0, 1)
        if (next > 0.001) puddles.set(n.id, next)
        else puddles.delete(n.id)
      }

      // draw puddles
      ctx.save()
      for (const [nodeId, a] of puddles) {
        const n = nodeById.get(nodeId)
        if (!n) continue
        const x = (n.x / 100) * w
        const y = (n.y / 100) * h + 58

        const rx = 26 + a * 62
        const ry = 10 + a * 26

        ctx.globalAlpha = 0.12 + a * 0.18
        ctx.fillStyle = "rgba(59,130,246,1)"
        ctx.beginPath()
        ctx.ellipse(x, y, rx, ry, 0, 0, Math.PI * 2)
        ctx.fill()

        ctx.globalAlpha = 0.08 + a * 0.12
        ctx.fillStyle = "rgba(255,255,255,1)"
        ctx.beginPath()
        ctx.ellipse(x - rx * 0.2, y - ry * 0.15, rx * 0.45, ry * 0.4, 0, 0, Math.PI * 2)
        ctx.fill()
      }
      ctx.restore()

      // jets
      const p01 = clamp(pressure / 100, 0, 1)
      for (const leak of leaks) {
        const n = nodeById.get(leak.nodeId)
        if (!n) continue
        const x = (n.x / 100) * w
        const y = (n.y / 100) * h

        const hp01 = clamp(leak.hp / Math.max(1, leak.maxHp), 0, 1)
        const strength = clamp(0.45 + p01 * 0.8 + (1 - hp01) * 0.15, 0, 1)

        drawJet(x, y, strength)
        if (Math.random() < 0.32 + p01 * 0.25) drawJet(x, y, strength * 0.85)
      }

      // particles
      const parts = particlesRef.current
      const gravity = 980
      const drag = 0.985

      ctx.save()
      ctx.globalCompositeOperation = "lighter"

      for (let i = parts.length - 1; i >= 0; i--) {
        const p = parts[i]
        p.vx *= Math.pow(drag, 60 * dt)
        p.vy *= Math.pow(drag, 60 * dt)
        p.vy += gravity * dt

        p.x += p.vx * dt
        p.y += p.vy * dt

        p.life -= dt * (p.kind === "mist" ? 1.9 : 1.4)

        if (p.life <= 0 || p.y > h + 140 || p.x < -160 || p.x > w + 160) {
          parts.splice(i, 1)
          continue
        }

        const a = p.life
        if (p.kind === "mist") {
          ctx.globalAlpha = a * p.bright * 0.35
          const r = p.size
          const g = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, r)
          g.addColorStop(0, "rgba(147,197,253,0.55)")
          g.addColorStop(1, "rgba(59,130,246,0)")
          ctx.fillStyle = g
          ctx.beginPath()
          ctx.arc(p.x, p.y, r, 0, Math.PI * 2)
          ctx.fill()
        } else {
          ctx.globalAlpha = a * p.bright * 0.9
          const r = p.size
          const g = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, r * 1.8)
          g.addColorStop(0, "rgba(255,255,255,0.95)")
          g.addColorStop(0.35, "rgba(147,197,253,0.85)")
          g.addColorStop(1, "rgba(59,130,246,0)")
          ctx.fillStyle = g
          ctx.beginPath()
          ctx.arc(p.x, p.y, r * 1.2, 0, Math.PI * 2)
          ctx.fill()
        }
      }

      ctx.restore()

      // grain
      ctx.save()
      ctx.globalAlpha = 0.06
      for (let i = 0; i < 220; i++) {
        const x = Math.random() * w
        const y = Math.random() * h
        const s = Math.random() * 1.3
        ctx.fillStyle = Math.random() > 0.5 ? "rgba(255,255,255,1)" : "rgba(0,0,0,1)"
        ctx.fillRect(x, y, s, s)
      }
      ctx.restore()

      // cap particles
      if (particlesRef.current.length > 1200) {
        particlesRef.current.splice(0, particlesRef.current.length - 1200)
      }

      rafRef.current = requestAnimationFrame(step)
    }

    rafRef.current = requestAnimationFrame(step)
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
      rafRef.current = null
    }
  }, [leaks, nodes, nodeById, pressure])

  return (
    <canvas
      ref={canvasRef}
      className={"pointer-events-none absolute inset-0 " + (className ?? "")}
    />
  )
})