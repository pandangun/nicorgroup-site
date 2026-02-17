import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  ShieldCheck,
  Flame,
  Droplets,
  Wrench,
  PhoneCall,
  MapPin,
  Clock,
  FileText,
  Sparkles,
  Camera,
  Hammer,
} from "lucide-react";
import { Hero } from "@/components/home/Hero";

const services = [
  {
    title: "Санузел под ключ",
    desc: "Разводка труб, инсталляция, душ/ванна, подключение, контроль герметичности.",
    icon: Droplets,
    href: "/services/bathroom",
    bullets: ["Смета до начала", "Аккуратно и чисто", "Гарантия по договору"],
  },
  {
    title: "Тёплый пол",
    desc: "Водяной тёплый пол: укладка, коллектор, опрессовка, запуск и проверка.",
    icon: Flame,
    href: "/services/floor-heating",
    bullets: ["Опрессовка", "Коллекторный узел", "Пуск и проверка"],
  },
  {
    title: "Отопление",
    desc: "Котёл, радиаторы, узлы, балансировка, разводка по дому или квартире.",
    icon: Flame,
    href: "/services/heating",
    bullets: ["Узлы и обвязка", "Балансировка", "Проверка/настройка"],
  },
  {
    title: "Установка сантехники",
    desc: "Унитазы, смесители, сифоны, душевые системы, подключение техники, мелкий ремонт.",
    icon: Wrench,
    href: "/services/installation",
    bullets: ["Монтаж и замена", "Устранение течей", "Подключения"],
  },
];

const faq = [
  {
    q: "Сколько стоит санузел под ключ?",
    a: "Цена зависит от объёма работ, материалов и состояния объекта. Сначала даём диапазон по фото и вводным, затем фиксируем смету до начала работ.",
  },
  {
    q: "Вы работаете по договору и с гарантией?",
    a: "Да. Фиксируем состав работ, сроки, стоимость и гарантию. Условия понятные и прозрачные.",
  },
  {
    q: "Можно ли быстро, сегодня или завтра?",
    a: "Часто да. Напишите или позвоните, пришлите фото, мы скажем ближайшее окно и что нужно подготовить.",
  },
  {
    q: "С чем вы работаете чаще всего?",
    a: "Санузлы под ключ, тёплый пол, отопление, разводка труб, установка сантехники, устранение течей и подключение бытовой техники.",
  },
  {
    q: "Что нужно для точного расчёта?",
    a: "2–4 фото узла/места работ, короткое описание задачи, район или адрес, желаемые сроки. По этим данным даём понятную вилку и план.",
  },
  {
    q: "Выезжаете по области?",
    a: "Да, Санкт-Петербург и ближайшие районы Ленинградской области. Географию уточняем при заявке.",
  },
];

const geoList = [
  "Приморский",
  "Выборгский",
  "Калининский",
  "Московский",
  "Невский",
  "Фрунзенский",
  "Петроградский",
  "Красносельский",
  "Кудрово",
  "Мурино",
  "Парнас",
];

export default function Home() {
  return (
    <div className="bg-[rgb(var(--bg))]">
      {/* HERO */}
      <Hero />

      {/* Intro SEO text block right after hero (vertical, no “каша”) */}
      <section className="border-t nicor-border bg-[rgb(var(--panel))]">
        <div className="nicor-container py-12 md:py-14">
          <div className="max-w-3xl">
            <div className="nicor-kicker">Сантехнические работы</div>
            <h2 className="mt-2 nicor-h2">Сантехник в Санкт-Петербурге и области</h2>
            <p className="mt-4 nicor-p">
              Сантехнические работы в Санкт-Петербурге и Ленинградской области. Выполняем
              санузел под ключ, монтаж тёплого пола, установку систем отопления, разводку труб
              и установку сантехники в квартирах, домах и коммерческих помещениях. Работаем
              с новостройками и вторичным жильём, выполняем как комплексные проекты, так и
              отдельные виды работ. Перед началом работ составляем смету. Стоимость
              фиксируется до старта и не меняется без согласования. После завершения
              выполняем контроль герметичности, проверку узлов и сдачу объекта заказчику.
            </p>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <Link href="/contacts#lead" className="nicor-btn-brand">
                Рассчитать по фото <ArrowRight className="h-4 w-4 opacity-90" />
              </Link>
              <a href="tel:+79990000000" className="nicor-btn-ghost">
                Позвонить <PhoneCall className="h-4 w-4 opacity-90" />
              </a>
            </div>

            <div className="mt-6 flex flex-wrap gap-2">
              <span className="nicor-badge">
                <FileText className="h-3.5 w-3.5" />
                Договор
              </span>
              <span className="nicor-badge">
                <ShieldCheck className="h-3.5 w-3.5" />
                Гарантия
              </span>
              <span className="nicor-badge">
                <Sparkles className="h-3.5 w-3.5" />
                Чистота на объекте
              </span>
              <span className="nicor-badge">
                <Clock className="h-3.5 w-3.5" />
                Выезд в день обращения
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES (your block, kept and tightened) */}
      <section className="bg-[rgb(var(--panel))] border-t nicor-border">
        <div className="nicor-container py-14">
          <div className="max-w-3xl">
            <h2 className="nicor-h2">Основные услуги</h2>
            <p className="mt-2 nicor-p">
              Выберите направление. На каждой странице услуги будет подробное описание,
              примеры работ, ответы на вопросы и понятные шаги заказа.
            </p>
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

          <div className="mt-8">
            <Link href="/services" className="inline-flex nicor-btn-ghost">
              Открыть все услуги <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* PLACE FOR PHOTOS / CASES PREVIEW */}
      <section className="bg-[rgb(var(--bg))] border-t nicor-border">
        <div className="nicor-container py-14">
          <div className="max-w-3xl">
            <h2 className="nicor-h2">Фото работ и примеры объектов</h2>
            <p className="mt-2 nicor-p">
              Этот блок специально оставлен под фотографии и кейсы. Сюда добавим реальные
              объекты, короткие описания задач и результат. Это повышает доверие и конверсию.
            </p>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {["Санузел под ключ", "Тёплый пол", "Отопление/разводка"].map((t) => (
              <div
                key={t}
                className="nicor-card-soft p-5"
              >
                <div className="flex items-center gap-2 text-sm font-semibold">
                  <Camera className="h-4 w-4" />
                  {t}
                </div>
                <div className="mt-3 nicor-skeleton h-44" />
                <div className="mt-3 text-sm text-zinc-600">
                  Место под фото. Добавим 1–2 строки описания задачи и результата.
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8">
            <Link href="/cases" className="inline-flex nicor-btn-brand">
              Смотреть кейсы <ArrowRight className="h-4 w-4 opacity-90" />
            </Link>
          </div>
        </div>
      </section>

      {/* PROCESS (vertical) */}
      <section className="bg-[rgb(var(--panel))] border-t nicor-border">
        <div className="nicor-container py-14">
          <div className="max-w-3xl">
            <h2 className="nicor-h2">Как мы работаем</h2>
            <p className="mt-2 nicor-p">
              Логика простая. Сначала понимаем задачу и даём вилку. Затем фиксируем смету и
              выполняем работы по технологии. На выходе проверка и сдача.
            </p>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-2">
            <div className="rounded-[28px] border nicor-border bg-white p-6">
              <div className="flex items-center gap-2 text-sm font-semibold">
                <FileText className="h-4 w-4" />
                Порядок работ
              </div>
              <ol className="mt-4 space-y-3 text-sm text-zinc-700">
                <li className="flex gap-3">
                  <span className="nicor-chip">1</span>
                  Фото или звонок. Уточняем задачу и условия на объекте.
                </li>
                <li className="flex gap-3">
                  <span className="nicor-chip">2</span>
                  Даём диапазон цены и ближайшее окно по времени.
                </li>
                <li className="flex gap-3">
                  <span className="nicor-chip">3</span>
                  Смета и договор. Фиксация работ, сроков, стоимости и гарантии.
                </li>
                <li className="flex gap-3">
                  <span className="nicor-chip">4</span>
                  Монтаж, контроль герметичности, сдача, рекомендации по эксплуатации.
                </li>
              </ol>
            </div>

            <div className="rounded-[28px] border nicor-border bg-white p-6">
              <div className="flex items-center gap-2 text-sm font-semibold">
                <Hammer className="h-4 w-4" />
                Что подготовить для точного расчёта
              </div>
              <ul className="mt-4 grid gap-2 text-sm text-zinc-700">
                <li className="flex gap-2">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 text-zinc-900" />
                  2–4 фото узла или места работ, общий план и крупно
                </li>
                <li className="flex gap-2">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 text-zinc-900" />
                  Коротко, что нужно сделать, замена или с нуля
                </li>
                <li className="flex gap-2">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 text-zinc-900" />
                  Район или адрес, этаж, особенности доступа
                </li>
                <li className="flex gap-2">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 text-zinc-900" />
                  Сроки, сегодня, завтра, на неделе
                </li>
              </ul>

              <div className="mt-5 flex flex-col gap-3 sm:flex-row">
                <Link href="/contacts#lead" className="nicor-btn-primary !text-white">
                  Отправить фото <ArrowRight className="h-4 w-4 opacity-90" />
                </Link>
                <a href="tel:+79990000000" className="nicor-btn-ghost">
                  Быстрый звонок <PhoneCall className="h-4 w-4 opacity-90" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* GEO + SEO */}
      <section className="bg-[rgb(var(--bg))] border-t nicor-border">
        <div className="nicor-container py-14">
          <div className="max-w-3xl">
            <h2 className="nicor-h2">География работ</h2>
            <p className="mt-2 nicor-p">
              Работаем по Санкт-Петербургу и ближайшим районам Ленинградской области.
              Часто выезжаем в крупные районы города и ближайшие пригороды. Уточним выезд и
              время по заявке.
            </p>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-2">
            <div className="rounded-[28px] border nicor-border bg-white p-6">
              <div className="flex items-center gap-2 text-sm font-semibold">
                <MapPin className="h-4 w-4" />
                Районы (пример)
              </div>
              <div className="mt-4 flex flex-wrap gap-2">
                {geoList.map((x) => (
                  <span key={x} className="nicor-chip">
                    {x}
                  </span>
                ))}
              </div>
              <div className="mt-4 text-xs text-zinc-500">
                Позже сделаем гео-страницы под SEO без спама и без мусорных текстов.
              </div>
            </div>

            <div className="rounded-[28px] border nicor-border bg-white p-6">
              <div className="flex items-center gap-2 text-sm font-semibold">
                <Clock className="h-4 w-4" />
                Режим и скорость
              </div>
              <div className="mt-3 text-sm text-zinc-700">
                Приоритет по заявкам с фото. По ним быстрее всего даём вилку цены и
                ближайшее время. Если нужно срочно, лучше позвонить.
              </div>
              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                <a href="tel:+79990000000" className="nicor-btn-ghost">
                  Позвонить <PhoneCall className="h-4 w-4 opacity-90" />
                </a>
                <Link href="/contacts#lead" className="nicor-btn-brand">
                  Оставить заявку <ArrowRight className="h-4 w-4 opacity-90" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-[rgb(var(--panel))] border-t nicor-border">
        <div className="nicor-container py-14">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2">
              <ShieldCheck className="h-5 w-5 text-zinc-900" />
              <h2 className="nicor-h2">Вопросы и ответы</h2>
            </div>
            <p className="mt-2 nicor-p">
              Коротко и по делу. Если у вас нестандартная задача, пришлите фото, это самый
              быстрый путь к точному ответу.
            </p>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {faq.map((f) => (
              <div key={f.q} className="rounded-[24px] border nicor-border bg-white p-5">
                <div className="text-sm font-semibold">{f.q}</div>
                <div className="mt-2 text-sm text-zinc-600">{f.a}</div>
              </div>
            ))}
          </div>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link href="/contacts#lead" className="nicor-btn-brand">
              Рассчитать по фото <ArrowRight className="h-4 w-4 opacity-90" />
            </Link>
            <Link href="/services" className="nicor-btn-ghost">
              Перейти к услугам <ArrowRight className="h-4 w-4 opacity-90" />
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-[rgb(var(--bg))] border-t nicor-border">
        <div className="nicor-container py-14">
          <div className="rounded-[32px] border nicor-border bg-white p-6 md:p-10">
            <div className="max-w-2xl">
              <h2 className="nicor-h2">Нужен расчёт стоимости</h2>
              <p className="mt-2 nicor-p">
                Отправьте фото и короткое описание. Мы ответим с вилкой цены и предложим
                ближайшее время. Затем фиксируем смету и выполняем работы.
              </p>

              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <Link href="/contacts#lead" className="nicor-btn-primary !text-white">
                  Оставить заявку <ArrowRight className="h-4 w-4 opacity-90" />
                </Link>
                <a href="tel:+79990000000" className="nicor-btn-ghost">
                  Позвонить <PhoneCall className="h-4 w-4 opacity-90" />
                </a>
              </div>

              <div className="mt-5 text-xs text-zinc-500">
                Санкт-Петербург и область. Договор, гарантия, аккуратная работа.
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
