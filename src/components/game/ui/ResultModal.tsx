// components/game/ui/ResultModal.tsx

interface Props {
  score: number
  bestScore: number
  onRestart: () => void
}

export function ResultModal({ score, bestScore, onRestart }: Props) {
  return (
    <div className="absolute inset-0 bg-black/70 flex flex-col items-center justify-center text-white">
      <h2 className="text-2xl mb-2">Game Over</h2>
      <p>Score: {score}</p>
      <p>Best: {bestScore}</p>

      <button
        onClick={onRestart}
        className="mt-4 px-4 py-2 bg-blue-600 rounded"
      >
        Play Again
      </button>
    </div>
  )
}