import Link from "next/link";
import { CheckCircle2, Clock, ShieldCheck, Wrench, Flame, Droplets, ArrowRight } from "lucide-react";

const cards = [
  { title: "Тёплый пол", desc: "Водяной тёплый пол: укладка, коллектор, опрессовка.", icon: Flame, href: "/services/floor-heating" },
  { title: "Отопление", desc: "Котлы, радиаторы, разводка, узлы, балансировка.", icon: Flame, href: "/services/heating" },
  { title: "Санузел под ключ", desc: "Душ, унитаз, раковина, инсталляция, подводка.", icon: Droplets, href: "/services/bathroom" },
  { title: "Установка сантехники", desc: "Унитазы, смесители, сифоны, душевые системы.", icon: Wrench, href: "/services/installation" },
];

const bullets = [
  "Тёплый пол: укладка + коллектор + опрессовка",
  "Санузел под ключ: душ/унитаз/раковина",
  "Отопление: радиаторы, котёл, узлы",
  "Установка сантехники и устранение течей",
];

function StatCard({
  title,
  desc,
  Icon,
}: {
  title: string;
  desc: string;
  Icon: any;
}) {
  return (
    <div className="nicor-card nicor-lift nicor-ring-hover p-4">
      <div className="flex items-start gap-3">
        <div className="grid h-10 w-10 place-items-center rounded-2xl border bg-white nicor-border">
          <Icon className="h-5 w-5 text-zinc-900" />
        </div>
        <div>
          <div className="text-sm font-semibold text-zinc-900">{title}</div>
          <div className="mt-1 text-sm text-zinc-500">{desc}</div>
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <div className="bg-[rgb(var(--bg))]">
      {/* HERO */}
      <section className="relative overflow-hidden">
        {/* ambient background */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(900px_500px_at_15%_10%,rgba(20,184,166,0.12),transparent_60%),radial-gradient(900px_500px_at_90%_15%,rgba(59,130,246,0.10),transparent_60%),radial-gradient(700px_420px_at_35%_95%,rgba(244,63,94,0.08),transparent_60%)]" />
          {/* subtle grid */}
          <div className="absolute inset-0 opacity-[0.05] [background-image:linear-gradient(to_right,rgba(0,0,0,.9)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,.9)_1px,transparent_1px)] [background-size:64px_64px]" />
          {/* top vignette */}
          <div className="absolute inset-x-0 top-0 h-40 bg-[linear-gradient(180deg,rgba(0,0,0,0.05),transparent)]" />
        </div>

        <div className="nicor-container relative grid gap-10 py-14 md:grid-cols-2 md:py-20">
          {/* LEFT */}
          <div className="relative nicor-animate-in">
            <div className="flex flex-wrap items-center gap-2">
              <span className="nicor-chip">
                <Clock className="h-3.5 w-3.5" />
                Выезд в день обращения • Договор • Гарантия
              </span>

              <span className="nicor-chip">
                <ShieldCheck className="h-3.5 w-3.5" />
                Премиум-аккуратность
              </span>
            </div>

            <h1 className="mt-5 nicor-title">
              Сантехнические работы{" "}
              <span className="nicor-gradient-text">под ключ</span>
            </h1>

            <p className="mt-4 nicor-p">
              Тёплые полы, отопление, унитазы, раковины, души, разводка труб,
              санузел под ключ. Работаем аккуратно: защита, чистота, контроль.
            </p>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <Link href="/contacts#lead" className="nicor-btn-primary">
                Рассчитать по фото <ArrowRight className="h-4 w-4 opacity-90" />
              </Link>
              <Link href="/services" className="nicor-btn-ghost">
                Смотреть услуги
              </Link>
            </div>

            {/* premium value cards */}
            <div className="mt-9 grid grid-cols-1 gap-3 sm:grid-cols-2">
              <StatCard
                title="Гарантия"
                desc="Фиксируем условия и цену до старта."
                Icon={ShieldCheck}
              />
              <StatCard
                title="Аккуратно"
                desc="Защита поверхностей и уборка после работ."
                Icon={CheckCircle2}
              />
            </div>

            {/* trust line */}
            <div className="mt-8 nicor-glass rounded-3xl p-4 border nicor-border">
              <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-zinc-600">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-zinc-900" />
                  Без “сюрпризов” по цене
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-zinc-900" />
                  Согласование до начала
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-zinc-900" />
                  Чистота на объекте
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT */}
          <div className="relative nicor-animate-in">
            <div className="nicor-card-premium nicor-noise p-6">
              <div className="flex items-center justify-between gap-3">
                <div>
                  <div className="text-sm font-semibold text-zinc-900">
                    Что мы делаем чаще всего
                  </div>
                  <div className="mt-1 text-sm text-zinc-500">
                    Популярные работы и быстрый расчёт
                  </div>
                </div>

                <div className="hidden sm:flex items-center gap-2">
                  <span className="nicor-chip">24/7 мессенджер</span>
                </div>
              </div>

              <div className="mt-5 grid gap-3">
                {bullets.map((t) => (
                  <div
                    key={t}
                    className="group nicor-glass rounded-3xl border nicor-border p-4 nicor-lift"
                  >
                    <div className="flex items-start gap-3">
                      <div className="mt-0.5 grid h-9 w-9 place-items-center rounded-2xl border bg-white nicor-border">
                        <CheckCircle2 className="h-4 w-4 text-zinc-900" />
                      </div>
                      <div className="text-sm text-zinc-700">
                        {t}
                        <div className="mt-2 text-xs text-zinc-500">
                          Оценим по фото и предложим варианты.
                        </div>
                      </div>
                    </div>

                    <div className="mt-3 nicor-divider opacity-70" />

                    <div className="mt-3 flex items-center justify-between text-xs text-zinc-500">
                      <span>Сроки: согласуем</span>
                      <span className="text-zinc-900 opacity-0 transition-opacity duration-200 group-hover:opacity-100">
                        Подробнее →
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 rounded-3xl border nicor-border bg-[rgb(var(--panel))] p-5 shadow-[var(--shadow-sm)]">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <div className="text-sm font-semibold text-zinc-900">Быстрый расчёт</div>
                    <div className="mt-1 text-sm text-zinc-600">
                      Пришли фото → скажем диапазон цены и ближайшее окно.
                    </div>
                  </div>
                  <div className="hidden sm:grid h-10 w-10 place-items-center rounded-2xl border bg-white nicor-border">
                    <Clock className="h-5 w-5 text-zinc-900" />
                  </div>
                </div>

                <Link href="/contacts#lead" className="mt-4 nicor-btn-brand w-full">
                  Отправить фото <ArrowRight className="h-4 w-4 opacity-90" />
                </Link>

                <div className="mt-4 text-xs text-zinc-500">
                  Ответим быстро. Без спама. Только по делу.
                </div>
              </div>
            </div>

            {/* small floating detail */}
            <div className="pointer-events-none absolute -right-10 -top-10 hidden h-48 w-48 rounded-full bg-[radial-gradient(circle,rgba(20,184,166,0.18),transparent_60%)] blur-2xl md:block" />
          </div>
        </div>
      </section>

      {/* SERVICES GRID */}
      <section className="border-t nicor-border bg-[rgb(var(--panel))]">
        <div className="nicor-container py-12">
          <div className="flex items-end justify-between gap-4">
            <div className="nicor-animate-in">
              <h2 className="nicor-h2">Основные направления</h2>
              <p className="mt-2 nicor-p">
                Сантехника в широком смысле: от монтажа до инженерных узлов.
              </p>
            </div>

            <Link
              href="/services"
              className="hidden nicor-btn-ghost px-4 py-2 text-sm md:inline-flex"
            >
              Все услуги <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="mt-7 grid gap-4 md:grid-cols-2">
            {cards.map((c) => {
              const Icon = c.icon;
              return (
                <Link
                  key={c.title}
                  href={c.href}
                  className="group nicor-card-premium p-6 nicor-lift"
                >
                  <div className="flex items-start gap-3">
                    <div className="grid h-11 w-11 place-items-center rounded-2xl border bg-white nicor-border">
                      <Icon className="h-5 w-5 text-zinc-900" />
                    </div>

                    <div className="min-w-0">
                      <div className="flex items-center gap-2">
                        <div className="truncate font-semibold text-zinc-900">{c.title}</div>
                        <span className="hidden sm:inline-flex nicor-chip text-[11px]">
                          Премиум
                        </span>
                      </div>

                      <div className="mt-1 text-sm text-zinc-600">{c.desc}</div>

                      <div className="mt-4 inline-flex items-center gap-2 text-sm text-zinc-700 transition-colors group-hover:text-zinc-950">
                        Подробнее <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                      </div>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>

          <div className="mt-10 nicor-divider" />
        </div>
      </section>
    </div>
  );
}

