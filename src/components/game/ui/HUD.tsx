// components/game/ui/HUD.tsx

interface Props {
  score: number
  pressure: number
  timeLeft: number
}

export function HUD({ score, pressure, timeLeft }: Props) {
  return (
    <div className="flex justify-between items-center mb-4 text-white">
      <div>Score: {score}</div>
      <div>Time: {timeLeft}s</div>
      <div className="w-40 h-3 bg-gray-700 rounded overflow-hidden">
        <div
          className={`h-full ${
            pressure > 70 ? "bg-red-500" : "bg-green-500"
          }`}
          style={{ width: `${pressure}%` }}
        />
      </div>
    </div>
  )
}