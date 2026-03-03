"use client"

import { useEffect, useMemo, useRef, useState } from "react"
import { GameState, GAME_DURATION, PIPE_NODES } from "./types"
import { useGameLoop } from "./hooks/useGameLoop"
import { HUD } from "./ui/HUD"
import { Controls } from "./ui/Controls"
import { ResultModal } from "./ui/ResultModal"
import { WaterCanvas, type WaterCanvasHandle } from "./ui/WaterCanvas"
import { WaterSplashLayer } from "./ui/WaterSplash"

type Splash = {
  id: string
  x: number
  y: number
  createdAt: number
  intensity: number
}

export function PipePanic() {
  const [state, setState] = useState<GameState>({
    status: "idle",
    score: 0,
    bestScore:
      typeof window !== "undefined"
        ? Number(localStorage.getItem("pipe_best") || 0)
        : 0,
    pressure: 0,
    timeLeft: GAME_DURATION,
    leaks: [],
  })

  useGameLoop(state, setState)

  const waterRef = useRef<WaterCanvasHandle | null>(null)

  const [splashes, setSplashes] = useState<Splash[]>([])
  const spawnSplash = (x: number, y: number, intensity = 0.8) => {
    const id = crypto.randomUUID()
    setSplashes((prev) => [...prev, { id, x, y, createdAt: Date.now(), intensity }])
    window.setTimeout(() => {
      setSplashes((prev) => prev.filter((s) => s.id !== id))
    }, 750)
  }

  const nodeById = useMemo(() => {
    const m = new Map<string, (typeof PIPE_NODES)[number]>()
    PIPE_NODES.forEach((n) => m.set(n.id, n))
    return m
  }, [])

  const links = useMemo(() => {
    const pairs: [string, string][] = [
      ["n1", "n2"], ["n2", "n3"],
      ["n4", "n5"], ["n5", "n6"],
      ["n7", "n8"], ["n8", "n9"],
      ["n1", "n4"], ["n4", "n7"],
      ["n2", "n5"], ["n5", "n8"],
      ["n3", "n6"], ["n6", "n9"],
    ]
    return pairs
      .map(([a, b]) => {
        const A = nodeById.get(a)
        const B = nodeById.get(b)
        if (!A || !B) return null
        return { a: A, b: B }
      })
      .filter(Boolean) as { a: { x: number; y: number }, b: { x: number; y: number } }[]
  }, [nodeById])

  const resetFx = () => {
    setSplashes([])
    waterRef.current?.reset()
  }

  const startGame = () => {
    resetFx()
    setState((prev) => ({
      ...prev,
      status: "running",
      score: 0,
      pressure: 0,
      timeLeft: GAME_DURATION,
      leaks: [],
    }))
  }

  const restartGame = () => startGame()

  useEffect(() => {
    if (state.status !== "gameover") return
    const best = Math.max(state.score, state.bestScore)
    localStorage.setItem("pipe_best", String(best))
    setState((prev) => ({ ...prev, bestScore: best }))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state.status])

  const fixLeak = (id: string) => {
    setState((prev) => {
      if (prev.status !== "running") return prev

      const before = prev.leaks
      const hit = before.find((l) => l.id === id)
      if (!hit) return prev

      const after = before
        .map((l) => (l.id === id ? { ...l, hp: l.hp - 1 } : l))
        .filter((l) => l.hp > 0)

      const killed = before.length !== after.length
      const add = killed ? 14 : 3

      if (killed) {
        const node = nodeById.get(hit.nodeId)
        if (node) {
          queueMicrotask(() => {
            waterRef.current?.burst(node.x, node.y, 1)
            spawnSplash(node.x, node.y, 0.95)
          })
        }
      }

      return {
        ...prev,
        leaks: after,
        score: prev.score + add,
        pressure: Math.max(0, prev.pressure - (killed ? 10 : 4)),
      }
    })
  }

  const danger = state.pressure >= 80
  const warn = state.pressure >= 65

  return (
    <div className="relative bg-zinc-950 p-6 rounded-2xl max-w-3xl mx-auto overflow-hidden ring-1 ring-white/5 shadow-[0_30px_90px_rgba(0,0,0,0.55)]">
      <div className="pointer-events-none absolute inset-x-0 -top-24 h-48 bg-[radial-gradient(900px_240px_at_50%_0%,rgba(59,130,246,0.22),transparent_70%)]" />

      <div className="relative z-10">
        <HUD score={state.score} pressure={state.pressure} timeLeft={state.timeLeft} />

        <div
          className={[
            "relative w-full h-[560px] rounded-2xl overflow-hidden",
            "bg-gradient-to-b from-zinc-900 via-zinc-950 to-black",
            "ring-1 ring-white/5",
            danger ? "animate-[shake_0.22s_linear_infinite]" : warn ? "animate-[shake_0.35s_linear_infinite]" : "",
          ].join(" ")}
        >
          <div className="pointer-events-none absolute inset-0 opacity-[0.20] [background-image:linear-gradient(to_right,rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.06)_1px,transparent_1px)] [background-size:44px_44px]" />

          {/* cinematic water */}
          <WaterCanvas
            ref={waterRef}
            nodes={PIPE_NODES}
            leaks={state.leaks}
            pressure={state.pressure}
          />

          {/* extra burst layer */}
          <WaterSplashLayer splashes={splashes} />

          {/* pipes */}
          <svg className="pointer-events-none absolute inset-0" viewBox="0 0 100 100" preserveAspectRatio="none">
            <defs>
              <filter id="pipeGlow" x="-30%" y="-30%" width="160%" height="160%">
                <feGaussianBlur stdDeviation="0.9" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>

              <linearGradient id="pipeMetal" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="rgba(255,255,255,0.18)" />
                <stop offset="45%" stopColor="rgba(255,255,255,0.08)" />
                <stop offset="100%" stopColor="rgba(59,130,246,0.18)" />
              </linearGradient>
            </defs>

            {links.map((l, idx) => (
              <g key={idx} filter="url(#pipeGlow)">
                <line
                  x1={l.a.x}
                  y1={l.a.y}
                  x2={l.b.x}
                  y2={l.b.y}
                  stroke="url(#pipeMetal)"
                  strokeWidth="5.0"
                  strokeLinecap="round"
                  opacity="0.7"
                />
                <line
                  x1={l.a.x}
                  y1={l.a.y}
                  x2={l.b.x}
                  y2={l.b.y}
                  stroke="rgba(255,255,255,0.10)"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  opacity="0.9"
                />
              </g>
            ))}
          </svg>

          {/* nodes */}
          {PIPE_NODES.map((node) => (
            <div
              key={node.id}
              className="absolute -translate-x-1/2 -translate-y-1/2"
              style={{ left: `${node.x}%`, top: `${node.y}%` }}
            >
              <div className="w-9 h-9 rounded-full bg-zinc-700/90 ring-1 ring-white/10 shadow-[0_0_0_1px_rgba(0,0,0,0.4),0_18px_40px_rgba(0,0,0,0.5)]" />
              <div className="pointer-events-none absolute inset-0 rounded-full bg-[radial-gradient(circle_at_30%_25%,rgba(255,255,255,0.16),transparent_55%)]" />
            </div>
          ))}

          {/* leaks */}
          {state.leaks.map((leak) => {
            const node = nodeById.get(leak.nodeId)!
            const hpRatio = Math.max(0, Math.min(1, leak.hp / Math.max(1, leak.maxHp)))

            return (
              <button
                key={leak.id}
                type="button"
                onClick={() => fixLeak(leak.id)}
                className="group absolute -translate-x-1/2 -translate-y-1/2"
                style={{ left: `${node.x}%`, top: `${node.y}%` }}
                aria-label="Fix leak"
              >
                <span
                  className="pointer-events-none absolute inset-0 -m-2 rounded-full"
                  style={{
                    background: `conic-gradient(rgba(59,130,246,0.95) ${hpRatio * 360}deg, rgba(255,255,255,0.10) 0deg)`,
                  }}
                />
                <span className="pointer-events-none absolute inset-0 -m-8 rounded-full bg-[radial-gradient(circle,rgba(59,130,246,0.32),transparent_65%)] opacity-70 group-hover:opacity-95 transition" />
                <span className="relative block w-8 h-8 rounded-full bg-sky-400/90 ring-1 ring-white/20 shadow-[0_16px_40px_rgba(0,0,0,0.55)] group-hover:scale-[1.05] transition">
                  <span className="pointer-events-none absolute inset-0 rounded-full bg-[radial-gradient(circle_at_30%_25%,rgba(255,255,255,0.9),rgba(255,255,255,0.0)_45%)] opacity-75" />
                  <span className="pointer-events-none absolute left-1/2 top-[88%] h-4 w-2 -translate-x-1/2 rounded-full bg-sky-300/80 opacity-70" />
                </span>
              </button>
            )
          })}

          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(900px_520px_at_50%_30%,rgba(0,0,0,0.0),rgba(0,0,0,0.55))]" />
        </div>

        <Controls status={state.status} onStart={startGame} onRestart={restartGame} />

        {state.status === "gameover" && (
          <ResultModal
            score={state.score}
            bestScore={Math.max(state.score, state.bestScore)}
            onRestart={restartGame}
          />
        )}
      </div>

      <style jsx global>{`
        @keyframes shake {
          0% { transform: translate(0, 0); }
          25% { transform: translate(0.5px, -0.6px); }
          50% { transform: translate(-0.6px, 0.4px); }
          75% { transform: translate(0.6px, 0.6px); }
          100% { transform: translate(0, 0); }
        }
      `}</style>
    </div>
  )
}