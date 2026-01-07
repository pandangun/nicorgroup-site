export default function CasesPage() {
  const items = [
    { title: "Санузел под ключ", desc: "Душ + инсталляция, 5 дней, квартира." },
    { title: "Тёплый пол", desc: "Водяной пол + коллектор, 42 м²." },
    { title: "Отопление", desc: "Радиаторы и котёл, частный дом." },
  ];

  return (
    <div className="mx-auto max-w-6xl px-4 py-12">
      <h1 className="text-3xl font-semibold md:text-4xl">Кейсы</h1>
      <p className="mt-3 text-zinc-600 md:text-lg">
        Реальные примеры работ. Скоро добавим фото «до/после», сроки и материалы.
      </p>

      <div className="mt-8 grid gap-4 md:grid-cols-3">
        {items.map((c) => (
          <div key={c.title} className="rounded-3xl border bg-white p-6">
            <div className="font-semibold">{c.title}</div>
            <div className="mt-2 text-sm text-zinc-600">{c.desc}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
