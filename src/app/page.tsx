import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  ShieldCheck,
  Flame,
  Droplets,
  Wrench,
} from "lucide-react";
import { Hero } from "@/components/home/Hero";

const services = [
  {
    title: "Санузел под ключ",
    desc: "Разводка труб, инсталляция, душ/ванна, подключение, герметичность.",
    icon: Droplets,
    href: "/services/bathroom",
    bullets: ["Смета до начала", "Аккуратно и чисто", "Гарантия по договору"],
  },
  {
    title: "Тёплый пол",
    desc: "Водяной тёплый пол: укладка, коллектор, опрессовка, запуск.",
    icon: Flame,
    href: "/services/floor-heating",
    bullets: ["Опрессовка", "Коллекторный узел", "Пуск и проверка"],
  },
  {
    title: "Отопление",
    desc: "Котёл, радиаторы, узлы, балансировка, разводка по дому/квартире.",
    icon: Flame,
    href: "/services/heating",
    bullets: ["Узлы и обвязка", "Балансировка", "Проверка/настройка"],
  },
  {
    title: "Установка сантехники",
    desc: "Унитазы, смесители, сифоны, душевые системы, мелкий ремонт.",
    icon: Wrench,
    href: "/services/installation",
    bullets: ["Монтаж и замена", "Устранение течей", "Подключения"],
  },
];

const faq = [
  {
    q: "Сколько стоит санузел под ключ?",
    a: "Мы не играем в «от 500 ₽ за всё». Даём диапазон после фото/замеров и фиксируем смету до старта. Цена зависит от объёма работ, материалов и доступа.",
  },
  {
    q: "Вы работаете по договору?",
    a: "Да. Фиксируем состав работ, сроки, стоимость и гарантию. Без «потом допов» и сюрпризов.",
  },
  {
    q: "Можно ли быстро — сегодня/завтра?",
    a: "Часто да. Напиши/позвони, пришли фото — скажем ближайшее окно и что нужно подготовить.",
  },
];

export default function Home() {
  return (
    <div className="bg-[rgb(var(--bg))]">
      <Hero />

      {/* SERVICES */}
      <section className="bg-[rgb(var(--panel))] border-t nicor-border">
        <div className="nicor-container py-14">
          <div className="flex items-end justify-between gap-4">
            <div>
              <h2 className="nicor-h2">Услуги</h2>
              <p className="mt-2 nicor-p">
                Основные направления. Каждую страницу услуги усилим под SEO и конверсию.
              </p>
            </div>
            <Link href="/services" className="hidden md:inline-flex nicor-btn-ghost">
              Все услуги <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {services.map((s) => {
              const Icon = s.icon;
              return (
                <Link
                  key={s.title}
                  href={s.href}
                  className="group rounded-[28px] border nicor-border bg-white p-6 shadow-[var(--shadow-sm)] nicor-lift"
                >
                  <div className="flex items-start gap-4">
                    <div className="grid h-11 w-11 place-items-center rounded-2xl border nicor-border bg-white">
                      <Icon className="h-5 w-5 text-zinc-900" />
                    </div>

                    <div className="min-w-0">
                      <div className="flex items-center gap-2">
                        <div className="truncate text-base font-semibold">{s.title}</div>
                        <span className="nicor-chip text-[11px]">СПб</span>
                      </div>
                      <div className="mt-1 text-sm text-zinc-600">{s.desc}</div>

                      <ul className="mt-4 grid gap-2 text-sm text-zinc-700">
                        {s.bullets.map((b) => (
                          <li key={b} className="flex gap-2">
                            <CheckCircle2 className="mt-0.5 h-4 w-4 text-zinc-900" />
                            {b}
                          </li>
                        ))}
                      </ul>

                      <div className="mt-5 inline-flex items-center gap-2 text-sm text-zinc-700 group-hover:text-zinc-950">
                        Подробнее{" "}
                        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                      </div>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* SEO + PROCESS + FAQ */}
      <section className="bg-[rgb(var(--bg))]">
        <div className="nicor-container py-14">
          <h2 className="nicor-h2">Сантехник в СПб и области</h2>
          <p className="mt-3 nicor-p">
            Работаем по городу и ближайшим районам. Частые задачи: санузел под ключ,
            установка сантехники, тёплый пол, отопление и аварийные выезды. Формируем
            смету до начала и фиксируем условия по договору.
          </p>

          <div className="mt-8 grid gap-6 md:grid-cols-2">
            <div className="rounded-[28px] border nicor-border bg-white p-6">
              <div className="text-sm font-semibold">Районы (пример)</div>
              <p className="mt-2 text-sm text-zinc-600">
                Приморский • Выборгский • Калининский • Московский • Невский •
                Фрунзенский • Петроградский • Красносельский • Кудрово • Мурино •
                Парнас и др.
              </p>
              <div className="mt-4 text-xs text-zinc-500">
                Под SEO позже сделаем отдельный блок “гео-страниц” (без спама).
              </div>
            </div>

            <div className="rounded-[28px] border nicor-border bg-white p-6">
              <div className="text-sm font-semibold">Как работаем</div>
              <ol className="mt-3 space-y-2 text-sm text-zinc-700">
                <li className="flex gap-2">
                  <span className="nicor-chip">1</span> Фото/звонок → уточняем задачу
                </li>
                <li className="flex gap-2">
                  <span className="nicor-chip">2</span> Диапазон цены → согласуем состав работ
                </li>
                <li className="flex gap-2">
                  <span className="nicor-chip">3</span> Смета и договор → выезд/монтаж
                </li>
                <li className="flex gap-2">
                  <span className="nicor-chip">4</span> Проверка → сдача → гарантия
                </li>
              </ol>
            </div>
          </div>

          <div className="mt-10 rounded-[28px] border nicor-border bg-white p-6">
            <div className="flex items-center gap-2">
              <ShieldCheck className="h-5 w-5 text-zinc-900" />
              <h3 className="text-lg font-semibold">Вопросы</h3>
            </div>

            <div className="mt-4 grid gap-4 md:grid-cols-3">
              {faq.map((f) => (
                <div key={f.q} className="rounded-[22px] bg-zinc-50 p-4">
                  <div className="text-sm font-semibold">{f.q}</div>
                  <div className="mt-2 text-sm text-zinc-600">{f.a}</div>
                </div>
              ))}
            </div>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <Link href="/contacts#lead" className="nicor-btn-brand">
                Рассчитать по фото <ArrowRight className="h-4 w-4 opacity-90" />
              </Link>
              <Link href="/services/bathroom" className="nicor-btn-ghost">
                Санузел под ключ <ArrowRight className="h-4 w-4 opacity-90" />
              </Link>
            </div>
          </div>

          {/* tiny SEO hook-links */}
          <div className="mt-10 grid gap-4 md:grid-cols-3">
            <Link
              href="/services/bathroom"
              className="rounded-[22px] border nicor-border bg-white p-5 nicor-lift"
            >
              <div className="flex items-center gap-2 font-semibold">
                <Droplets className="h-4 w-4" />
                Санузел под ключ
              </div>
              <div className="mt-2 text-sm text-zinc-600">
                Разводка труб, монтаж, герметичность, чистота.
              </div>
            </Link>

            <Link
              href="/services/floor-heating"
              className="rounded-[22px] border nicor-border bg-white p-5 nicor-lift"
            >
              <div className="flex items-center gap-2 font-semibold">
                <Flame className="h-4 w-4" />
                Тёплый пол
              </div>
              <div className="mt-2 text-sm text-zinc-600">
                Коллектор, опрессовка, запуск и проверка.
              </div>
            </Link>

            <Link
              href="/services/installation"
              className="rounded-[22px] border nicor-border bg-white p-5 nicor-lift"
            >
              <div className="flex items-center gap-2 font-semibold">
                <Wrench className="h-4 w-4" />
                Установка сантехники
              </div>
              <div className="mt-2 text-sm text-zinc-600">
                Монтаж/замена, устранение течей, подключения.
              </div>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
