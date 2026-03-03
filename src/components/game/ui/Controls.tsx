// components/game/ui/Controls.tsx

interface Props {
  status: string
  onStart: () => void
  onRestart: () => void
}

export function Controls({ status, onStart, onRestart }: Props) {
  return (
    <div className="mt-4 flex gap-4 justify-center">
      {status === "idle" && (
        <button onClick={onStart} className="px-4 py-2 bg-blue-600 text-white rounded">
          Start
        </button>
      )}
      {status === "gameover" && (
        <button onClick={onRestart} className="px-4 py-2 bg-yellow-500 text-black rounded">
          Restart
        </button>
      )}
    </div>
  )
}