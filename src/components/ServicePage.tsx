import Link from "next/link";
import { CheckCircle2, Clock, ShieldCheck, Wrench } from "lucide-react";

type Props = {
  title: string;
  subtitle: string;
  bullets: string[];
  steps: { title: string; desc: string }[];
  faq: { q: string; a: string }[];
};

export default function ServicePage({ title, subtitle, bullets, steps, faq }: Props) {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12">
      <div className="rounded-3xl border bg-white p-8 md:p-10">
        <div className="inline-flex items-center gap-2 rounded-full border bg-zinc-50 px-3 py-1 text-xs text-zinc-700">
          <Clock className="h-3.5 w-3.5" />
          Выезд в день обращения • Договор • Гарантия
        </div>

        <h1 className="mt-4 text-3xl font-semibold md:text-5xl">{title}</h1>
        <p className="mt-3 max-w-2xl text-zinc-600 md:text-lg">{subtitle}</p>

        <div className="mt-6 flex flex-col gap-3 sm:flex-row">
          <Link
            href="/contacts#lead"
            className="inline-flex items-center justify-center rounded-2xl bg-zinc-900 px-5 py-3 text-white hover:bg-zinc-800"
          >
            Рассчитать по фото
          </Link>
          <Link
            href="/prices"
            className="inline-flex items-center justify-center rounded-2xl border px-5 py-3 hover:bg-zinc-50"
          >
            Смотреть цены
          </Link>
        </div>

        <div className="mt-10 grid gap-3 md:grid-cols-2">
          {bullets.map((b) => (
            <div key={b} className="flex gap-2 rounded-2xl border bg-zinc-50 p-4 text-sm text-zinc-700">
              <CheckCircle2 className="mt-0.5 h-4 w-4" />
              {b}
            </div>
          ))}
        </div>
      </div>

      <div className="mt-10 grid gap-6 md:grid-cols-3">
        <div className="rounded-3xl border p-6">
          <div className="flex items-center gap-2 font-semibold">
            <ShieldCheck className="h-4 w-4" /> Гарантия
          </div>
          <div className="mt-2 text-sm text-zinc-600">
            Фиксируем условия и стоимость до старта работ.
          </div>
        </div>

        <div className="rounded-3xl border p-6">
          <div className="flex items-center gap-2 font-semibold">
            <Wrench className="h-4 w-4" /> Аккуратно
          </div>
          <div className="mt-2 text-sm text-zinc-600">
            Защита поверхностей, чистота, контроль узлов.
          </div>
        </div>

        <div className="rounded-3xl border p-6">
          <div className="flex items-center gap-2 font-semibold">
            <Clock className="h-4 w-4" /> Сроки
          </div>
          <div className="mt-2 text-sm text-zinc-600">
            Согласуем график и этапы, без “растягивания”.
          </div>
        </div>
      </div>

      <section className="mt-10 rounded-3xl border bg-white p-8">
        <h2 className="text-2xl font-semibold">Как проходит работа</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {steps.map((s) => (
            <div key={s.title} className="rounded-2xl border bg-zinc-50 p-5">
              <div className="font-semibold">{s.title}</div>
              <div className="mt-2 text-sm text-zinc-600">{s.desc}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-10 rounded-3xl border bg-white p-8">
        <h2 className="text-2xl font-semibold">FAQ</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {faq.map((x) => (
            <div key={x.q} className="rounded-2xl border p-5">
              <div className="font-semibold">{x.q}</div>
              <div className="mt-2 text-sm text-zinc-600">{x.a}</div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
