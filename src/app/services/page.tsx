import Link from "next/link";
import {
  ArrowRight,
  PhoneCall,
  Sparkles,
  MapPin,
  ShieldCheck,
  Clock,
  FileText,
  Camera,
} from "lucide-react";
import { ServiceSelector, type ServiceSelectorItem } from "@/components/services/ServiceSelector";

const SERVICES: ServiceSelectorItem[] = [
  {
    title: "Санузел под ключ",
    href: "/services/bathroom",
    desc:
      "Разводка труб, инсталляция, душ/ванна, подключение, герметичность. Сделаем так, чтобы было спокойно жить: без течей и «потом переделаем».",
    bullets: ["Смета до старта", "Аккуратно и чисто", "Гарантия по договору"],
    tag: "квартира / дом",
    image: "/images/services/sanuzel1.jpg",
    imageAlt: "Санузел под ключ",
    imagePosition: "50% 44%",
  },
  {
    title: "Тёплый пол (водяной)",
    href: "/services/floor-heating",
    desc:
      "Укладка, коллектор, опрессовка, запуск. Подберём правильную схему и объясним, что будет с температурой и расходом.",
    bullets: ["Опрессовка", "Коллекторный узел", "Пуск и проверка"],
    tag: "комфорт",
    image: "/images/services/heatfloor.jpg",
    imageAlt: "Тёплый пол (водяной)",
    imagePosition: "50% 52%",
  },
  {
    title: "Отопление",
    href: "/services/heating",
    desc:
      "Котёл, радиаторы, узлы, разводка по дому/квартире. Балансировка и настройка, чтобы грело равномерно, а не «в одной комнате Африка».",
    bullets: ["Узлы и обвязка", "Балансировка", "Настройка системы"],
    tag: "дом / коттедж",
    image: "/images/services/otoplenie1.jpeg",
    imageAlt: "Отопление",
    imagePosition: "50% 46%",
  },
  {
    title: "Установка сантехники",
    href: "/services/installation",
    desc:
      "Унитазы, смесители, сифоны, душевые системы, замены и мелкий ремонт. Быстро, аккуратно, без грязи и сюрпризов.",
    bullets: ["Монтаж и замена", "Устранение течей", "Подключения"],
    tag: "быстро",
    image: "/images/services/sanuzel1.jpg",
    imageAlt: "Установка сантехники",
    imagePosition: "50% 62%",
  },
];

const FAQ = [
  {
    q: "Сколько стоит работа?",
    a:
      "Даем вилку цены по фото/описанию, затем фиксируем смету до старта работ. Без «потом допов» и внезапных счетов.",
  },
  {
    q: "Работаете по договору?",
    a:
      "Да. Фиксируем состав работ, сроки, стоимость и гарантию. Это защищает и вас, и нас.",
  },
  {
    q: "Можно срочно (сегодня/завтра)?",
    a:
      "Часто — да. Напишите или позвоните: скажем ближайшее окно и что нужно подготовить.",
  },
];

export default function ServicesPage() {
  return (
    <div className="bg-[rgb(var(--bg))]">
      {/* HERO — VERTICAL */}
      <section className="nicor-section">
        <div className="nicor-container">
          {/* Kicker line */}
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

          <h1 className="mt-6 nicor-title">
            Услуги сантехника{" "}
            <span className="nicor-gradient-text">под ключ</span>
          </h1>

          <p className="mt-4 nicor-p max-w-3xl">
            На этой странице представлены основные направления сантехнических и
            инженерных работ, которые выполняет компания «НИКОР». Мы работаем с
            системами водоснабжения, отопления и канализации в квартирах,
            частных домах и коммерческих помещениях Санкт-Петербурга и области.
            Каждая услуга предполагает аккуратный подход к монтажу, внимательное
            отношение к соединениям и узлам, а также соблюдение технических
            требований к инженерным системам. Перед началом работ важно понять
            условия на объекте и подобрать решение, которое будет работать
            надёжно и стабильно в ежедневной эксплуатации.
          </p>

        </div>
      </section>

      <div className="nicor-divider" />

      {/* SERVICES GRID */}
      <section className="nicor-section">
        <div className="nicor-container">
          <div className="flex items-end justify-between gap-4">
            <div>
              <h2 className="nicor-h2">Основные услуги</h2>
              <p className="mt-2 nicor-p max-w-2xl">
                Выбирай направление — внутри будет страница услуги с деталями,
                примерами, частыми вопросами и кнопкой «Рассчитать по фото».
              </p>
            </div>

            <Link href="/contacts#message" className="hidden md:inline-flex nicor-btn-ghost">
              Быстрый расчёт <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="mt-8">
            <ServiceSelector items={SERVICES} />
          </div>
        </div>
      </section>

      <div className="nicor-divider" />

      {/* PHOTO PLACEHOLDER / PORTFOLIO */}
      <section className="nicor-section">
        <div className="nicor-container">
          <h2 className="nicor-h2">Фото работ</h2>
          <p className="mt-2 nicor-p max-w-2xl">
            Здесь будет портфолио: аккуратные узлы, коллекторные шкафы, санузлы,
            разводка. Пока добавь 6–9 фото — и раздел сразу станет «дороже».
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {Array.from({ length: 6 }).map((_, idx) => (
              <div
                key={idx}
                className="nicor-skeleton aspect-[4/3] w-full"
                aria-label="Место под фото"
              />
            ))}
          </div>

          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <Link href="/contacts#message" className="nicor-btn-primary !text-white">
              Хочу так же — рассчитать <ArrowRight className="h-4 w-4 opacity-90" />
            </Link>
            <Link href="/cases" className="nicor-btn-ghost">
              Кейсы и примеры <ArrowRight className="h-4 w-4 opacity-90" />
            </Link>
          </div>
        </div>
      </section>

      <div className="nicor-divider" />

      {/* GEO + FAQ */}
      <section className="nicor-section">
        <div className="nicor-container">
          <div className="grid gap-6 md:grid-cols-2">
            <div className="nicor-card p-6 md:p-7">
              <div className="flex items-center gap-2">
                <MapPin className="h-5 w-5 text-zinc-900" />
                <h3 className="text-lg font-semibold">География работ</h3>
              </div>
              <p className="mt-3 text-sm text-zinc-600">
                Работаем по Санкт-Петербургу и ближайшим районам области. Если
                нужно срочно — лучше звонок: так быстрее оценим окно.
              </p>
              <div className="mt-4 rounded-[18px] bg-zinc-50 p-4 text-sm text-zinc-700">
                Приморский • Выборгский • Калининский • Московский • Невский •
                Фрунзенский • Петроградский • Красносельский • Кудрово • Мурино •
                Парнас и др.
              </div>
              <div className="mt-4 text-xs text-zinc-500">
                Позже можно сделать «гео-страницы» аккуратно, без спама.
              </div>
            </div>

            <div className="nicor-card p-6 md:p-7">
              <div className="flex items-center gap-2">
                <ShieldCheck className="h-5 w-5 text-zinc-900" />
                <h3 className="text-lg font-semibold">FAQ</h3>
              </div>

              <div className="mt-4 grid gap-3">
                {FAQ.map((f) => (
                  <div key={f.q} className="rounded-[18px] bg-zinc-50 p-4">
                    <div className="text-sm font-semibold">{f.q}</div>
                    <div className="mt-2 text-sm text-zinc-600">{f.a}</div>
                  </div>
                ))}
              </div>

              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <Link href="/contacts#message" className="nicor-btn-brand">
                  Рассчитать по фото <ArrowRight className="h-4 w-4 opacity-90" />
                </Link>
                <a href="tel:+79990000000" className="nicor-btn-ghost">
                  <PhoneCall className="h-4 w-4" />
                  Позвонить
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="nicor-divider" />

      {/* HOW TO GET EXACT PRICE */}
      <section className="nicor-section">
        <div className="nicor-container">
          <div className="nicor-card-premium p-6 md:p-8">
            <div className="flex items-center gap-2">
              <Sparkles className="h-5 w-5 text-zinc-900" />
              <h2 className="text-lg font-semibold md:text-xl">Как быстро получить точную цену</h2>
            </div>

            <div className="mt-5 grid gap-4 md:grid-cols-3">
              <div className="nicor-panel p-5">
                <div className="flex items-center gap-2 text-sm font-semibold text-zinc-900">
                  <Camera className="h-4 w-4" />
                  2–4 фото
                </div>
                <div className="mt-2 text-sm text-zinc-600">
                  Общий план + крупно узел/место работ.
                </div>
              </div>

              <div className="nicor-panel p-5">
                <div className="flex items-center gap-2 text-sm font-semibold text-zinc-900">
                  <FileText className="h-4 w-4" />
                  Коротко по задаче
                </div>
                <div className="mt-2 text-sm text-zinc-600">
                  «Замена» или «с нуля», что именно нужно.
                </div>
              </div>

              <div className="nicor-panel p-5">
                <div className="flex items-center gap-2 text-sm font-semibold text-zinc-900">
                  <MapPin className="h-4 w-4" />
                  Район + сроки
                </div>
                <div className="mt-2 text-sm text-zinc-600">
                  Сегодня/завтра/на неделе, есть ли ограничения по доступу.
                </div>
              </div>
            </div>

            <div className="mt-5 text-xs text-zinc-500">
              Сначала диапазон, затем фиксируем смету до старта работ.
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

