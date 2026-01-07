export default function PricesPage() {
  const rows = [
    ["Установка смесителя", "от 2 500 ₽"],
    ["Установка унитаза", "от 3 500 ₽"],
    ["Подключение бойлера", "от 4 500 ₽"],
    ["Тёплый пол (м²)", "от 1 800 ₽"],
    ["Разводка (точка)", "от 1 500 ₽"],
    ["Устранение течи", "от 2 000 ₽"],
  ];

  return (
    <div className="mx-auto max-w-6xl px-4 py-12">
      <h1 className="text-3xl font-semibold md:text-4xl">Цены</h1>
      <p className="mt-3 text-zinc-600 md:text-lg">
        Точная стоимость зависит от объекта и материалов. Фиксируем цену до старта работ.
      </p>

      <div className="mt-8 overflow-hidden rounded-3xl border">
        <div className="grid bg-zinc-50 px-6 py-4 text-sm font-semibold md:grid-cols-2">
          <div>Работа</div>
          <div>Цена</div>
        </div>
        {rows.map(([a, b]) => (
          <div key={a} className="grid border-t px-6 py-4 text-sm md:grid-cols-2">
            <div className="font-medium">{a}</div>
            <div className="text-zinc-700">{b}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
