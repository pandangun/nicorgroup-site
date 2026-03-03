// components/game/types.ts

export type GameStatus = "idle" | "running" | "paused" | "gameover"

export interface PipeNode {
  id: string
  x: number
  y: number
}

export interface Leak {
  id: string
  nodeId: string
  hp: number
  maxHp: number
  severity: number
  createdAt: number
}

export interface GameState {
  status: GameStatus
  score: number
  bestScore: number
  pressure: number
  timeLeft: number
  leaks: Leak[]
}

export const GAME_DURATION = 60
export const MAX_PRESSURE = 100

export const PIPE_NODES: PipeNode[] = [
  { id: "n1", x: 20, y: 20 },
  { id: "n2", x: 50, y: 20 },
  { id: "n3", x: 80, y: 20 },
  { id: "n4", x: 20, y: 50 },
  { id: "n5", x: 50, y: 50 },
  { id: "n6", x: 80, y: 50 },
  { id: "n7", x: 20, y: 80 },
  { id: "n8", x: 50, y: 80 },
  { id: "n9", x: 80, y: 80 },
]