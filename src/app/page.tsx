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

const PHONE_DISPLAY = "+7 900 630-09-74";
const PHONE_HREF = "+79006300974";

const services = [
  {
    title: "Санузел под ключ",
    desc: "Разводка труб, инсталляция, душ/ванна, подключения, контроль узлов.",
    icon: Droplets,
    href: "/services/bathroom",
    bullets: ["Смета до начала", "Аккуратно и чисто", "Гарантия по договору"],
    tag: "Комплекс",
  },
  {
    title: "Тёплый пол",
    desc: "Водяной тёплый пол: укладка, коллектор, опрессовка, запуск.",
    icon: Flame,
    href: "/services/floor-heating",
    bullets: ["Опрессовка", "Коллекторный узел", "Пуск и проверка"],
    tag: "Комфорт",
  },
  {
    title: "Отопление",
    desc: "Котёл, радиаторы, обвязка, балансировка, разводка по дому/квартире.",
    icon: Flame,
    href: "/services/heating",
    bullets: ["Узлы и обвязка", "Балансировка", "Настройка/проверка"],
    tag: "Инженерия",
  },
  {
    title: "Установка сантехники",
    desc: "Унитазы, смесители, сифоны, душевые, подключение техники, ремонт.",
    icon: Wrench,
    href: "/services/installation",
    bullets: ["Монтаж и замена", "Устранение течей", "Подключения"],
    tag: "Сервис",
  },
];

const faq = [
  {
    q: "Сколько стоит санузел под ключ?",
    a: "Зависит от объёма работ, материалов и состояния объекта. Сначала даём диапазон по фото и вводным, затем фиксируем смету до начала.",
  },
  {
    q: "Вы работаете по договору и с гарантией?",
    a: "Да. Фиксируем состав работ, сроки, стоимость и гарантию. Всё прозрачно и без скрытых условий.",
  },
  {
    q: "Можно ли быстро — сегодня/завтра?",
    a: "Часто да. Пришлите фото — скажем ближайшее окно и что подготовить.",
  },
  {
    q: "Что нужно для точного расчёта?",
    a: "2–4 фото, короткое описание, район/адрес и желаемые сроки. По этим данным дадим понятную вилку и план.",
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
    <div className="nicor-page">
      {/* HERO */}
      <Hero />

      {/* ONE strong intro block (premium, not “white sheet”) */}
      <section className="nicor-section">
        <div className="nicor-container py-12 md:py-16">
          <div className="nicor-panel-premium max-w-3xl">
            <div className="nicor-kicker">Сантехнические работы</div>
            <h2 className="mt-2 nicor-h2">Сантехник в Санкт-Петербурге и области</h2>

            <p className="mt-4 nicor-p">
              Выполняем санузел под ключ, тёплые полы, отопление, разводку труб и установку
              сантехники в квартирах, домах и коммерческих объектах. Начинаем с понятной
              оценки, затем фиксируем смету до старта. По завершению — проверка ключевых узлов
              и сдача результата.
            </p>

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
                Аккуратно
              </span>
              <span className="nicor-badge">
                <Clock className="h-3.5 w-3.5" />
                Быстрый выезд
              </span>
            </div>

            {/* CTA here: ONLY phone (no second “form”) */}
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <a href={`tel:${PHONE_HREF}`} className="nicor-btn-ghost">
                Позвонить {PHONE_DISPLAY} <PhoneCall className="h-4 w-4 opacity-90" />
              </a>

              <Link href="/services" className="nicor-btn-subtle">
                Смотреть услуги <ArrowRight className="h-4 w-4 opacity-90" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="nicor-section">
        <div className="nicor-container py-14">
          <div className="max-w-3xl">
            <h2 className="nicor-h2">Основные услуги</h2>
            <p className="mt-2 nicor-p">
              Выберите направление. На странице услуги — подробности, примеры работ и шаги заказа.
            </p>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {services.map((s) => {
              const Icon = s.icon;
              return (
                <Link key={s.title} href={s.href} className="nicor-card-premium group p-6">
                  <div className="flex items-start gap-4">
                    <div className="grid h-11 w-11 place-items-center rounded-2xl border nicor-border bg-white/60 backdrop-blur">
                      <Icon className="h-5 w-5 text-zinc-900" />
                    </div>

                    <div className="min-w-0">
                      <div className="flex items-center gap-2">
                        <div className="truncate text-base font-semibold">{s.title}</div>
                        <span className="nicor-chip text-[11px]">{s.tag}</span>
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
            <Link href="/services" className="inline-flex nicor-btn-subtle">
              Открыть все услуги <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* CASES PREVIEW */}
      <section className="nicor-section">
        <div className="nicor-container py-14">
          <div className="max-w-3xl">
            <h2 className="nicor-h2">Фото работ и примеры объектов</h2>
            <p className="mt-2 nicor-p">
              Здесь будут реальные объекты: задача → решение → результат. Это самый сильный блок доверия.
            </p>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {["Санузел под ключ", "Тёплый пол", "Отопление/разводка"].map((t) => (
              <div key={t} className="nicor-card-soft p-5">
                <div className="flex items-center gap-2 text-sm font-semibold">
                  <Camera className="h-4 w-4" />
                  {t}
                </div>
                <div className="mt-3 nicor-skeleton h-44" />
                <div className="mt-3 text-sm text-zinc-600">
                  Место под фото. Добавим 1–2 строки: условия и итог.
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8">
            <Link href="/cases" className="inline-flex nicor-btn-subtle">
              Смотреть кейсы <ArrowRight className="h-4 w-4 opacity-90" />
            </Link>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="nicor-section">
        <div className="nicor-container py-14">
          <div className="max-w-3xl">
            <h2 className="nicor-h2">Как мы работаем</h2>
            <p className="mt-2 nicor-p">
              Сначала понимаем задачу и даём вилку. Затем фиксируем смету и выполняем работы по технологии.
              На выходе — проверка и сдача.
            </p>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-2">
            <div className="nicor-card-premium p-6">
              <div className="flex items-center gap-2 text-sm font-semibold">
                <FileText className="h-4 w-4" />
                Порядок работ
              </div>
              <ol className="mt-4 space-y-3 text-sm text-zinc-700">
                <li className="flex gap-3">
                  <span className="nicor-chip">1</span>
                  Фото или звонок — уточняем задачу и условия.
                </li>
                <li className="flex gap-3">
                  <span className="nicor-chip">2</span>
                  Диапазон цены + ближайшее окно по времени.
                </li>
                <li className="flex gap-3">
                  <span className="nicor-chip">3</span>
                  Смета и договор — фиксация работ, сроков, стоимости и гарантии.
                </li>
                <li className="flex gap-3">
                  <span className="nicor-chip">4</span>
                  Монтаж → контроль узлов → сдача → рекомендации.
                </li>
              </ol>
            </div>

            <div className="nicor-card-premium p-6">
              <div className="flex items-center gap-2 text-sm font-semibold">
                <Hammer className="h-4 w-4" />
                Что подготовить
              </div>
              <ul className="mt-4 grid gap-2 text-sm text-zinc-700">
                <li className="flex gap-2">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 text-zinc-900" />
                  2–4 фото: общий план и крупно
                </li>
                <li className="flex gap-2">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 text-zinc-900" />
                  Коротко: что нужно сделать
                </li>
                <li className="flex gap-2">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 text-zinc-900" />
                  Район/адрес, этаж, доступ
                </li>
                <li className="flex gap-2">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 text-zinc-900" />
                  Сроки: сегодня/завтра/на неделе
                </li>
              </ul>

              {/* CTA #2 – one clean place to lead to form */}
              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <Link href="/contacts#message" className="nicor-btn-primary !text-white">
                  Оставить заявку <ArrowRight className="h-4 w-4 opacity-90" />
                </Link>
                <a href={`tel:${PHONE_HREF}`} className="nicor-btn-ghost">
                  Быстрый звонок <PhoneCall className="h-4 w-4 opacity-90" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* GEO */}
      <section className="nicor-section">
        <div className="nicor-container py-14">
          <div className="max-w-3xl">
            <h2 className="nicor-h2">География работ</h2>
            <p className="mt-2 nicor-p">
              Санкт-Петербург и ближайшие районы Ленинградской области. Уточним выезд и время по заявке.
            </p>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-2">
            <div className="nicor-card-soft p-6">
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
                Позже добавим geo-страницы под SEO без мусора.
              </div>
            </div>

            <div className="nicor-card-soft p-6">
              <div className="flex items-center gap-2 text-sm font-semibold">
                <Clock className="h-4 w-4" />
                Скорость ответа
              </div>
              <div className="mt-3 text-sm text-zinc-700">
                Быстрее всего отвечаем по заявкам с фото. Если срочно — лучше звонок.
              </div>
              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                <a href={`tel:${PHONE_HREF}`} className="nicor-btn-ghost">
                  Позвонить <PhoneCall className="h-4 w-4 opacity-90" />
                </a>
                <Link href="/contacts" className="nicor-btn-subtle">
                  Контакты <ArrowRight className="h-4 w-4 opacity-90" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="nicor-section">
        <div className="nicor-container py-14">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2">
              <ShieldCheck className="h-5 w-5 text-zinc-900" />
              <h2 className="nicor-h2">Вопросы и ответы</h2>
            </div>
            <p className="mt-2 nicor-p">
              Коротко и по делу. Если задача нестандартная — фото решает 80% вопросов.
            </p>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {faq.map((f) => (
              <div key={f.q} className="nicor-card-soft p-5">
                <div className="text-sm font-semibold">{f.q}</div>
                <div className="mt-2 text-sm text-zinc-600">{f.a}</div>
              </div>
            ))}
          </div>

          <div className="mt-8">
            <Link href="/services" className="inline-flex nicor-btn-subtle">
              Перейти к услугам <ArrowRight className="h-4 w-4 opacity-90" />
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA (#3 only) */}
      <section className="nicor-section">
        <div className="nicor-container py-14">
          <div className="nicor-cta-premium p-6 md:p-10">
            <div className="max-w-2xl">
              <h2 className="nicor-h2">Нужна оценка стоимости?</h2>
              <p className="mt-2 nicor-p">
                Оставьте заявку с фото и описанием. Дадим вилку, предложим время,
                затем фиксируем смету и выполняем работы.
              </p>

              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <Link href="/contacts#message" className="nicor-btn-primary !text-white">
                  Оставить заявку <ArrowRight className="h-4 w-4 opacity-90" />
                </Link>
                <a href={`tel:${PHONE_HREF}`} className="nicor-btn-ghost">
                  Позвонить <PhoneCall className="h-4 w-4 opacity-90" />
                </a>
              </div>

              <div className="mt-5 text-xs text-zinc-500">
                СПб и область • Договор • Гарантия • Аккуратная работа
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
