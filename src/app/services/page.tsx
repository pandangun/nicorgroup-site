import Link from "next/link";

const items = [
  { title: "Отопление", href: "/services/heating", desc: "Котлы, радиаторы, узлы, разводка." },
  { title: "Тёплый пол", href: "/services/floor-heating", desc: "Укладка, коллектор, опрессовка." },
  { title: "Санузел под ключ", href: "/services/bathroom", desc: "Душ, унитаз, раковина, инсталляция." },
  { title: "Установка сантехники", href: "/services/installation", desc: "Смесители, унитазы, сифоны, душ." },
];

export default function ServicesPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12">
      <h1 className="text-3xl font-semibold md:text-4xl">Услуги</h1>
      <p className="mt-3 text-zinc-600 md:text-lg">
        Работаем по СПб и области. Прозрачно, аккуратно, с гарантией.
      </p>

      <div className="mt-8 grid gap-4 md:grid-cols-2">
        {items.map((x) => (
          <Link key={x.href} href={x.href} className="rounded-3xl border p-6 hover:bg-zinc-50">
            <div className="font-semibold">{x.title}</div>
            <div className="mt-2 text-sm text-zinc-600">{x.desc}</div>
            <div className="mt-4 text-sm text-zinc-700">Открыть →</div>
          </Link>
        ))}
      </div>
    </div>
  );
}
