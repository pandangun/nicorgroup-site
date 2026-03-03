"use client"

import { useEffect, useRef } from "react"
import { GameState, Leak, PIPE_NODES, MAX_PRESSURE } from "../types"

export function useGameLoop(
  state: GameState,
  setState: React.Dispatch<React.SetStateAction<GameState>>
) {
  const spawnRef = useRef<NodeJS.Timeout | null>(null)
  const tickRef = useRef<NodeJS.Timeout | null>(null)

  useEffect(() => {
    if (state.status !== "running") return

    spawnRef.current = setInterval(() => {
      setState((prev) => {
        if (prev.leaks.length >= 8) return prev

        const freeNodes = PIPE_NODES.filter(
          (node) => !prev.leaks.some((l) => l.nodeId === node.id)
        )

        if (!freeNodes.length) return prev

        const node = freeNodes[Math.floor(Math.random() * freeNodes.length)]

        const newLeak: Leak = {
          id: crypto.randomUUID(),
          nodeId: node.id,
          hp: Math.random() > 0.6 ? 2 : 1,
          maxHp: 2,
          severity: 1,
          createdAt: Date.now(),
        }

        return { ...prev, leaks: [...prev.leaks, newLeak] }
      })
    }, 1200)

    tickRef.current = setInterval(() => {
      setState((prev) => {
        let pressureIncrease = prev.leaks.length * 0.8
        const newPressure = Math.min(
          MAX_PRESSURE,
          prev.pressure + pressureIncrease
        )

        const newTime = prev.timeLeft - 1

        if (newPressure >= MAX_PRESSURE) {
          return { ...prev, pressure: MAX_PRESSURE, status: "gameover" }
        }

        if (newTime <= 0) {
          return { ...prev, timeLeft: 0, status: "gameover" }
        }

        return {
          ...prev,
          pressure: newPressure,
          timeLeft: newTime,
        }
      })
    }, 1000)

    return () => {
      if (spawnRef.current) clearInterval(spawnRef.current)
      if (tickRef.current) clearInterval(tickRef.current)
    }
  }, [state.status, setState])
}