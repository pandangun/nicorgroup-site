import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  Clock,
  ShieldCheck,
  MapPin,
  PhoneCall,
  Flame,
  Droplets,
  Wrench,
  Home,
} from "lucide-react";

const services = [
  {
    title: "Санузел под ключ",
    href: "/services/bathroom",
    desc: "Разводка труб, инсталляция, душ/ванна, подключение и герметичность.",
    icon: Droplets,
    bullets: ["Смета до старта", "Аккуратно и чисто", "Гарантия по договору"],
    tag: "Популярно",
  },
  {
    title: "Тёплый пол",
    href: "/services/floor-heating",
    desc: "Водяной тёплый пол: укладка, коллектор, опрессовка, запуск.",
    icon: Flame,
    bullets: ["Опрессовка", "Коллекторный узел", "Пуск и проверка"],
    tag: "Тепло",
  },
  {
    title: "Отопление",
    href: "/services/heating",
    desc: "Котёл, радиаторы, узлы, балансировка, разводка по дому/квартире.",
    icon: Home,
    bullets: ["Узлы и обвязка", "Балансировка", "Настройка системы"],
    tag: "Системно",
  },
  {
    title: "Установка сантехники",
    href: "/services/installation",
    desc: "Унитазы, смесители, сифоны, душевые системы, мелкий ремонт.",
    icon: Wrench,
    bullets: ["Монтаж и замена", "Устранение течей", "Подключения"],
    tag: "Быстро",
  },
];

const steps = [
  {
    title: "Фото / звонок",
    desc: "Кидаешь 2–4 фото и коротко что нужно. Сразу уточняем детали.",
    icon: PhoneCall,
  },
  {
    title: "Диапазон цены",
    desc: "Даём вилку и ближайшее окно. Без сказок про «от 500 ₽ за всё».",
    icon: CheckCircle2,
  },
  {
    title: "Смета и договор",
    desc: "Фиксируем состав работ, сроки и стоимость до старта.",
    icon: ShieldCheck,
  },
  {
    title: "Монтаж и сдача",
    desc: "Делаем аккуратно, проверяем, сдаём. Дальше — гарантия.",
    icon: Clock,
  },
];

const faqs = [
  {
    q: "Можно ли «сегодня/завтра»?",
    a: "Часто да — зависит от загрузки и объёма. Напиши/позвони, скажем ближайшее окно.",
  },
  {
    q: "Работаете по договору?",
    a: "Да. Фиксируем состав работ, сроки, стоимость и гарантию.",
  },
  {
    q: "Как быстрее получить точную цену?",
    a: "Фото узла/места работ + адрес/район + что нужно (замена/с нуля) + сроки.",
  },
];

export default function ServicesPage() {
  return (
    <div className="bg-[rgb(var(--bg))]">
      {/* HERO */}
      <section className="nicor-section">
        <div className="nicor-container">
          <div className="grid gap-8 md:grid-cols-[1.15fr_.85fr] md:items-center">
            <div>
              <div className="flex flex-wrap items-center gap-2">
                <span className="nicor-chip">
                  <MapPin className="h-3.5 w-3.5" />
                  СПб и область
                </span>
                <span className="nicor-chip">
                  <ShieldCheck className="h-3.5 w-3.5" />
                  Договор + гарантия
                </span>
                <span className="nicor-chip">
                  <Clock className="h-3.5 w-3.5" />
                  Выезд по ситуации
                </span>
              </div>

              <h1 className="mt-4 nicor-title">
                Услуги сантехника{" "}
                <span className="nicor-gradient-text">под ключ</span>
              </h1>

              <p className="mt-4 nicor-p">
                Мы не “просто приезжаем”. Мы делаем работу так, чтобы было
                спокойно жить: смета до старта, аккуратность на объекте,
                проверка и сдача.
              </p>

              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <Link href="/contacts#lead" className="nicor-btn-brand">
                  Рассчитать по фото <ArrowRight className="h-4 w-4 opacity-90" />
                </Link>
                <a href="tel:+79920444258" className="nicor-btn-ghost">
                  Позвонить <PhoneCall className="h-4 w-4 opacity-90" />
                </a>
              </div>

              <div className="mt-6 text-xs text-zinc-500">
                Подходит для квартиры, дома, коммерции. Частые запросы: санузел,
                тёплый пол, отопление, установка/замена.
              </div>
            </div>

            {/* Right card */}
            <div className="nicor-card-premium nicor-noise p-6 md:p-7">
              <div className="flex items-center justify-between gap-3">
                <div>
                  <div className="text-sm font-semibold text-zinc-900">
                    Быстрый расчёт по фото
                  </div>
                  <div className="mt-1 text-sm text-zinc-600">
                    Пришли фото → дадим вилку цены и ближайшее окно.
                  </div>
                </div>
                <span className="nicor-badge">
                  <ShieldCheck className="h-3.5 w-3.5" />
                  без сюрпризов
                </span>
              </div>

              <div className="mt-6 grid gap-3">
                <div className="nicor-glass border nicor-border p-4">
                  <div className="text-sm font-semibold">Что прислать</div>
                  <ul className="mt-3 grid gap-2 text-sm text-zinc-700">
                    <li className="flex gap-2">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 text-zinc-900" />
                      2–4 фото узла/места работ (общий + крупно)
                    </li>
                    <li className="flex gap-2">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 text-zinc-900" />
                      Коротко: “замена” или “с нуля”, что именно нужно
                    </li>
                    <li className="flex gap-2">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 text-zinc-900" />
                      Район/адрес + сроки (сегодня/на неделе/позже)
                    </li>
                  </ul>
                </div>

                <div className="grid gap-3 sm:grid-cols-2">
                  <a href="tel:+79920444258" className="nicor-btn-ghost nicor-btn-sm">
                    Позвонить <PhoneCall className="h-4 w-4 opacity-90" />
                  </a>
                  <Link href="/contacts#lead" className="nicor-btn-primary nicor-btn-sm !text-white">
                    Оставить заявку <ArrowRight className="h-4 w-4 opacity-90" />
                  </Link>
                </div>

                <div className="text-xs text-zinc-500">
                  Сначала диапазон → затем фиксируем смету до старта работ.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES GRID */}
      <section className="border-t nicor-border bg-[rgb(var(--panel))]">
        <div className="nicor-container py-14">
          <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h2 className="nicor-h2">Основные услуги</h2>
              <p className="mt-2 nicor-p">
                Выбирай направление — внутри будет страница с подробностями, примерами и FAQ.
              </p>
            </div>
            <Link href="/contacts#lead" className="hidden sm:inline-flex nicor-btn-ghost">
              Быстрый расчёт <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {services.map((s) => {
              const Icon = s.icon;
              return (
                <Link
                  key={s.href}
                  href={s.href}
                  className="group nicor-card-soft p-6 nicor-lift"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex items-start gap-4">
                      <div className="grid h-12 w-12 place-items-center rounded-2xl border nicor-border bg-white">
                        <Icon className="h-5 w-5 text-zinc-900" />
                      </div>
                      <div className="min-w-0">
                        <div className="flex items-center gap-2">
                          <div className="truncate text-base font-semibold">
                            {s.title}
                          </div>
                          <span className="nicor-chip text-[11px]">{s.tag}</span>
                        </div>
                        <div className="mt-1 text-sm text-zinc-600">{s.desc}</div>
                      </div>
                    </div>

                    <ArrowRight className="mt-2 h-5 w-5 text-zinc-400 transition-transform group-hover:translate-x-0.5 group-hover:text-zinc-700" />
                  </div>

                  <div className="mt-5 grid gap-2 text-sm text-zinc-700">
                    {s.bullets.map((b) => (
                      <div key={b} className="flex gap-2">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 text-zinc-900" />
                        {b}
                      </div>
                    ))}
                  </div>

                  <div className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-zinc-800 group-hover:text-zinc-950">
                    Открыть услугу <ArrowRight className="h-4 w-4" />
                  </div>
                </Link>
              );
            })}
          </div>

          <div className="mt-10 rounded-[28px] border nicor-border bg-white p-6">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <div className="text-sm font-semibold">Не видишь свою задачу?</div>
                <div className="mt-1 text-sm text-zinc-600">
                  Напиши в заявке — подскажем решение и стоимость по фото.
                </div>
              </div>
              <Link href="/contacts#lead" className="nicor-btn-brand">
                Описать задачу <ArrowRight className="h-4 w-4 opacity-90" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* PROCESS + FAQ */}
      <section className="bg-[rgb(var(--bg))]">
        <div className="nicor-container py-14">
          <div className="grid gap-10 md:grid-cols-2 md:items-start">
            <div>
              <h2 className="nicor-h2">Как работаем</h2>
              <p className="mt-3 nicor-p">
                Вся логика простая: быстро понять задачу → назвать цену → зафиксировать → сделать.
              </p>

              <div className="mt-6 grid gap-3">
                {steps.map((x) => {
                  const Icon = x.icon;
                  return (
                    <div key={x.title} className="nicor-panel p-5">
                      <div className="flex items-start gap-3">
                        <div className="grid h-10 w-10 place-items-center rounded-2xl border nicor-border bg-white">
                          <Icon className="h-5 w-5 text-zinc-900" />
                        </div>
                        <div>
                          <div className="text-sm font-semibold">{x.title}</div>
                          <div className="mt-1 text-sm text-zinc-600">{x.desc}</div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="nicor-card p-6">
              <div className="flex items-center gap-2">
                <ShieldCheck className="h-5 w-5 text-zinc-900" />
                <h3 className="text-lg font-semibold">Частые вопросы</h3>
              </div>

              <div className="mt-4 grid gap-3">
                {faqs.map((f) => (
                  <div key={f.q} className="rounded-[22px] bg-zinc-50 p-4">
                    <div className="text-sm font-semibold">{f.q}</div>
                    <div className="mt-2 text-sm text-zinc-600">{f.a}</div>
                  </div>
                ))}
              </div>

              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                <a href="tel:+79920444258" className="nicor-btn-ghost">
                  Позвонить <PhoneCall className="h-4 w-4 opacity-90" />
                </a>
                <Link href="/contacts#lead" className="nicor-btn-primary !text-white">
                  Заявка <ArrowRight className="h-4 w-4 opacity-90" />
                </Link>
              </div>

              <div className="mt-4 text-xs text-zinc-500">
                Работаем по СПб и области. Смета фиксируется до старта работ.
              </div>
            </div>
          </div>

          <div className="mt-12 nicor-divider" />

          {/* Bottom CTA */}
          <div className="mt-10 nicor-card-premium nicor-noise p-6 md:p-8">
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
              <div>
                <div className="nicor-kicker">Готовы?</div>
                <div className="mt-2 text-xl font-semibold md:text-2xl">
                  Пришли фото — скажем цену и ближайшее окно.
                </div>
                <div className="mt-2 text-sm text-zinc-600">
                  Быстро, аккуратно, по договору. Без “потом допов”.
                </div>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row">
                <Link href="/contacts#lead" className="nicor-btn-brand">
                  Рассчитать по фото <ArrowRight className="h-4 w-4 opacity-90" />
                </Link>
                <a href="tel:+79920444258" className="nicor-btn-ghost">
                  Позвонить <PhoneCall className="h-4 w-4 opacity-90" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
