import Image from "next/image";
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
  MessageCircle,
  Send,
} from "lucide-react";
import { Hero } from "@/components/home/Hero";

const PHONE_DISPLAY = "+7 900 630-09-74";
const PHONE_HREF = "+79006300974";
const TELEGRAM_USERNAME = "nicor_group";
const MAX_LINK = "https://max.ru/";
const WHATSAPP_LINK = `https://wa.me/${PHONE_HREF.replace("+", "")}?text=${encodeURIComponent(
  "Здравствуйте! Нужна предварительная оценка. Могу отправить фото и описание."
)}`;
const TELEGRAM_LINK = `https://t.me/${TELEGRAM_USERNAME}`;

const services = [
  {
    title: "Санузел под ключ",
    desc: "Разводка труб, инсталляция, душ/ванна, подключения, контроль узлов.",
    icon: Droplets,
    href: "/services/bathroom",
    bullets: ["Смета до начала", "Аккуратно и чисто", "Гарантия по договору"],
    tag: "Комплекс",
    image: "/images/services/sanuzel1.jpg",
    imageAlt: "Санузел под ключ",
    imagePosition: "50% 44%",
    tint: "linear-gradient(160deg, rgba(15,23,42,.10), rgba(20,184,166,.44))",
  },
  {
    title: "Тёплый пол",
    desc: "Водяной тёплый пол: укладка, коллектор, опрессовка, запуск.",
    icon: Flame,
    href: "/services/floor-heating",
    bullets: ["Опрессовка", "Коллекторный узел", "Пуск и проверка"],
    tag: "Комфорт",
    image: "/images/services/heatfloor.jpg",
    imageAlt: "Тёплый пол",
    imagePosition: "50% 52%",
    tint: "linear-gradient(160deg, rgba(15,23,42,.10), rgba(59,130,246,.42))",
  },
  {
    title: "Отопление",
    desc: "Котёл, радиаторы, обвязка, балансировка, разводка по дому/квартире.",
    icon: Flame,
    href: "/services/heating",
    bullets: ["Узлы и обвязка", "Балансировка", "Настройка/проверка"],
    tag: "Инженерия",
    image: "/images/services/otoplenie1.jpeg",
    imageAlt: "Отопление",
    imagePosition: "50% 46%",
    tint: "linear-gradient(160deg, rgba(15,23,42,.08), rgba(30,64,175,.44))",
  },
  {
    title: "Установка сантехники",
    desc: "Унитазы, смесители, сифоны, душевые, подключение техники, ремонт.",
    icon: Wrench,
    href: "/services/installation",
    bullets: ["Монтаж и замена", "Устранение течей", "Подключения"],
    tag: "Сервис",
    image: "/images/services/sanuzel1.jpg",
    imageAlt: "Установка сантехники",
    imagePosition: "50% 62%",
    tint: "linear-gradient(160deg, rgba(15,23,42,.08), rgba(14,165,233,.44))",
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

const geoDistricts = [
  { name: "Приморский", points: "17,35 25,31 31,35 28,41 19,42", labelX: 23, labelY: 36 },
  { name: "Выборгский", points: "28,24 35,20 41,24 36,30 30,29", labelX: 34, labelY: 24 },
  { name: "Калининский", points: "38,29 45,27 50,31 46,37 40,36", labelX: 44, labelY: 31 },
  { name: "Московский", points: "46,56 54,54 58,59 54,65 47,64", labelX: 52, labelY: 59 },
  { name: "Невский", points: "57,43 64,41 69,47 64,53 58,50", labelX: 63, labelY: 46 },
  { name: "Фрунзенский", points: "53,60 60,58 64,64 59,70 53,68", labelX: 58, labelY: 63 },
  { name: "Петроградский", points: "34,41 40,39 43,44 38,49 33,47", labelX: 38, labelY: 44 },
  { name: "Красносельский", points: "23,66 31,64 36,70 31,76 24,74", labelX: 29, labelY: 70 },
  { name: "Кудрово", points: "69,47 74,45 78,50 74,55 69,53", labelX: 73, labelY: 50 },
  { name: "Мурино", points: "55,19 61,18 64,23 60,27 55,25", labelX: 60, labelY: 22 },
  { name: "Парнас", points: "47,14 54,13 57,17 52,21 47,19", labelX: 52, labelY: 16 },
] as const;

const geoPlaces = [
  {
    name: "Офис НИКОР",
    x: 50,
    y: 54,
    type: "office" as const,
    href: "https://yandex.ru/maps/?ll=30.3158%2C59.9386&z=12&pt=30.3158,59.9386,pm2rdm",
  },
  {
    name: "Магазин Север",
    x: 56,
    y: 28,
    type: "store" as const,
    href: "https://yandex.ru/maps/?ll=30.3605%2C60.0515&z=12&pt=30.3605,60.0515,pm2blm",
  },
  {
    name: "Магазин Центр",
    x: 44,
    y: 48,
    type: "store" as const,
    href: "https://yandex.ru/maps/?ll=30.3025%2C59.9343&z=13&pt=30.3025,59.9343,pm2blm",
  },
  {
    name: "Магазин Юг",
    x: 54,
    y: 72,
    type: "store" as const,
    href: "https://yandex.ru/maps/?ll=30.3465%2C59.8110&z=12&pt=30.3465,59.8110,pm2blm",
  },
] as const;

const YMAPS_GEO_EMBED =
  "https://yandex.ru/map-widget/v1/?ll=30.3158%2C59.9386&z=9&pt=30.3158,59.9386,pm2blm";

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

          <div className="mt-8 grid gap-5 md:grid-cols-2">
            {services.map((s) => {
              const Icon = s.icon;
              const photoHref = `/contacts?service=${encodeURIComponent(s.title)}#message`;
              return (
                <article key={s.title} className="nicor-home-service group">
                  <div className="nicor-home-service__media">
                    <Image
                      src={s.image}
                      alt={s.imageAlt}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="nicor-home-service__img object-cover"
                      style={{ objectPosition: s.imagePosition ?? "50% 50%" }}
                    />
                    <div className="nicor-home-service__veil" style={{ background: s.tint }} />

                    <div className="nicor-home-service__top">
                      <span className="nicor-home-service__tag">{s.tag}</span>
                      <span className="nicor-home-service__icon">
                        <Icon className="h-4 w-4" />
                      </span>
                    </div>

                    <Link href={photoHref} className="nicor-home-service__photo-btn">
                      Рассчитать по фото <Camera className="h-4 w-4" />
                    </Link>
                  </div>

                  <div className="nicor-home-service__body">
                    <h3 className="nicor-home-service__title">{s.title}</h3>
                    <p className="mt-2 text-sm text-zinc-600 md:text-[15px]">{s.desc}</p>

                    <ul className="mt-4 grid gap-2 text-sm text-zinc-700">
                      {s.bullets.map((b) => (
                        <li key={b} className="flex gap-2">
                          <CheckCircle2 className="mt-0.5 h-4 w-4 text-zinc-900" />
                          {b}
                        </li>
                      ))}
                    </ul>

                    <div className="mt-5 flex flex-wrap gap-2">
                      <Link href={s.href} className="nicor-btn-primary nicor-btn-sm !text-white">
                        Подробнее <ArrowRight className="h-4 w-4 opacity-90" />
                      </Link>
                      <Link href={photoHref} className="nicor-btn-subtle nicor-btn-sm">
                        По фото <Camera className="h-4 w-4 opacity-90" />
                      </Link>
                    </div>
                  </div>
                </article>
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
          <div className="mx-auto max-w-5xl">
            <div className="nicor-card-premium p-6 md:p-8 lg:p-10">
              <div className="max-w-3xl">
                <h2 className="nicor-h2">География работ</h2>
                <p className="mt-2 nicor-p">
                  Санкт-Петербург и ближайшие районы Ленинградской области. Уточним выезд и время
                  по заявке.
                </p>
              </div>

              <div className="mt-8 grid gap-6 lg:grid-cols-[minmax(0,1fr)_320px]">
                <div className="nicor-geo-stage">
                  <div className="nicor-geo-map" aria-hidden="true">
                    <iframe
                      title="География работ НИКОР"
                      src={YMAPS_GEO_EMBED}
                      className="nicor-geo-map__frame"
                      loading="lazy"
                    />
                  </div>

                  <div className="nicor-geo-orbit" />
                  <div className="nicor-geo-core">
                    <MapPin className="h-4 w-4" />
                    <span>Санкт-Петербург</span>
                  </div>

                  <svg className="nicor-geo-districts" viewBox="0 0 100 100" aria-hidden="true">
                    {geoDistricts.map((district) => (
                      <g key={district.name}>
                        <polygon className="nicor-geo-district" points={district.points} />
                        <text
                          x={district.labelX}
                          y={district.labelY}
                          textAnchor="middle"
                          className="nicor-geo-district-label"
                        >
                          {district.name}
                        </text>
                      </g>
                    ))}
                  </svg>

                  {geoPlaces.map((point, idx) => (
                    <a
                      key={point.name}
                      href={point.href}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`Открыть точку ${point.name} в Яндекс Картах`}
                      className={[
                        "nicor-geo-place",
                        point.type === "office" ? "is-office" : "is-store",
                      ].join(" ")}
                      style={{
                        left: `${point.x}%`,
                        top: `${point.y}%`,
                        animationDelay: `${idx * 140}ms`,
                      }}
                    >
                      <MapPin className="h-3.5 w-3.5" />
                      <span>{point.name}</span>
                    </a>
                  ))}
                </div>

                <div className="nicor-card-soft p-5 md:p-6">
                  <div className="flex items-center gap-2 text-sm font-semibold">
                    <MapPin className="h-4 w-4" />
                    Активные районы
                  </div>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {geoList.map((x, idx) => (
                      <span
                        key={x}
                        className="nicor-chip nicor-geo-chip"
                        style={{ animationDelay: `${idx * 130}ms` }}
                      >
                        {x}
                      </span>
                    ))}
                  </div>

                  <div className="mt-5 rounded-2xl border nicor-border bg-white/55 p-4 text-sm text-zinc-700">
                    <div className="flex items-center gap-2 font-semibold text-zinc-900">
                      <Clock className="h-4 w-4" />
                      Скорость ответа
                    </div>
                    <p className="mt-2">
                      Быстрее всего отвечаем по заявкам с фото. Если срочно, лучше звонок.
                    </p>
                  </div>

                  <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
                    <a href={`tel:${PHONE_HREF}`} className="nicor-btn-ghost">
                      Позвонить <PhoneCall className="h-4 w-4 opacity-90" />
                    </a>
                  </div>

                  <div className="mt-3 rounded-2xl border nicor-border bg-white/55 p-4">
                    <div className="mb-2 text-xs font-semibold uppercase tracking-[0.08em] text-zinc-500">
                      Мессенджеры
                    </div>
                    <div className="flex flex-wrap gap-2">
                      <a
                        href={WHATSAPP_LINK}
                        target="_blank"
                        rel="noreferrer"
                        className="nicor-pill nicor-pill--wa"
                        aria-label="Написать в WhatsApp"
                      >
                        <MessageCircle className="h-4 w-4" />
                        WhatsApp
                      </a>
                      <a
                        href={TELEGRAM_LINK}
                        target="_blank"
                        rel="noreferrer"
                        className="nicor-pill nicor-pill--tg"
                        aria-label="Написать в Telegram"
                      >
                        <Send className="h-4 w-4" />
                        Telegram
                      </a>
                      <a
                        href={MAX_LINK}
                        target="_blank"
                        rel="noreferrer"
                        className="nicor-pill nicor-pill--max"
                        aria-label="Открыть MAX"
                      >
                        <span className="nicor-max-dot" />
                        MAX
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-6 text-xs text-zinc-500">
                География показана как ориентир по основным зонам выезда. Точный адрес и время
                согласуем в заявке.
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
