import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  ShieldCheck,
  Clock,
  Wrench,
  Droplets,
  Flame,
  Home,
  ReceiptRussianRuble,
  Info,
} from "lucide-react";

type PriceItem = {
  name: string;
  price: string;
  note?: string;
  popular?: boolean;
};

type PriceSection = {
  id: string;
  title: string;
  subtitle: string;
  icon: React.ComponentType<{ className?: string }>;
  items: PriceItem[];
};

const SECTIONS: PriceSection[] = [
  {
    id: "installation",
    title: "Установка сантехники",
    subtitle: "Смесители, унитазы, сифоны, душевые системы, замены и подключение.",
    icon: Wrench,
    items: [
      { name: "Установка смесителя", price: "от 2 500 ₽", note: "Цена зависит от типа (врезной/настенный), доступа и состояния выводов." },
      { name: "Установка унитаза", price: "от 3 500 ₽", note: "Подключение, герметизация, проверка." , popular: true},
      { name: "Установка инсталляции", price: "от 9 500 ₽", note: "Без учёта короба/плитки. Уточняем по фото/замерам." },
      { name: "Установка раковины / тумбы", price: "от 3 500 ₽", note: "Сифон, герметизация, проверка." },
      { name: "Установка душевой системы", price: "от 4 500 ₽", note: "С учётом сверления/крепежа/подключения." },
      { name: "Подключение стиральной/посудомоечной", price: "от 2 500 ₽", note: "Шланги, сифон/врезка, проверка на протечки." },
    ],
  },
  {
    id: "water",
    title: "Вода и разводка",
    subtitle: "Разводка, точки, фильтры, коллекторы, бойлеры, герметичность.",
    icon: Droplets,
    items: [
      { name: "Разводка (1 точка)", price: "от 1 500 ₽", note: "Цена зависит от материала (PPR/PEX/металлопласт), штробы и доступа." , popular: true},
      { name: "Замена/перенос точки", price: "от 2 500 ₽", note: "Уточняем по месту/фото." },
      { name: "Установка фильтра грубой очистки", price: "от 1 800 ₽", note: "С ревизией/уплотнением/проверкой." },
      { name: "Установка редуктора давления", price: "от 2 500 ₽", note: "Настройка по месту." },
      { name: "Подключение бойлера", price: "от 4 500 ₽", note: "Подводка, группа безопасности, проверка." },
      { name: "Коллекторный узел (сборка/монтаж)", price: "от 6 500 ₽", note: "Зависит от количества линий и комплектации." },
    ],
  },
  {
    id: "heating",
    title: "Отопление и тёплый пол",
    subtitle: "Радиаторы, узлы, котлы (обвязка), водяной тёплый пол, опрессовка.",
    icon: Flame,
    items: [
      { name: "Тёплый пол (м²)", price: "от 1 800 ₽", note: "Укладка трубы + крепёж. Коллектор/узлы отдельно." , popular: true},
      { name: "Опрессовка системы", price: "от 3 500 ₽", note: "Проверка на герметичность, фиксация результатов." },
      { name: "Установка радиатора", price: "от 3 500 ₽", note: "Крепление, подключение, проверка." },
      { name: "Балансировка/настройка", price: "от 2 500 ₽", note: "По факту системы и узлов." },
      { name: "Узел подмеса (сборка/монтаж)", price: "от 7 500 ₽", note: "Зависит от схемы и комплектации." },
      { name: "Замена циркуляционного насоса", price: "от 3 500 ₽", note: "С проверкой и запуском." },
    ],
  },
  {
    id: "bathroom",
    title: "Санузел под ключ",
    subtitle: "Комплексные работы: разводка + установка + узлы + герметичность.",
    icon: Home,
    items: [
      { name: "Санузел под ключ — работа", price: "индивидуально", note: "Даем диапазон по фото/плану, затем фиксируем смету до старта." , popular: true},
      { name: "Разводка + коллектор + узлы", price: "от 25 000 ₽", note: "Зависит от количества точек и материала." },
      { name: "Комплект “черновая сантехника”", price: "от 18 000 ₽", note: "Разводка без финальной установки приборов." },
      { name: "Комплект “чистовая установка”", price: "от 15 000 ₽", note: "Монтаж приборов, герметизация, проверка." },
    ],
  },
  {
    id: "emergency",
    title: "Аварийные работы",
    subtitle: "Течи, замены, срочные выезды. Пытаемся помочь быстро и аккуратно.",
    icon: ShieldCheck,
    items: [
      { name: "Устранение течи", price: "от 2 000 ₽", note: "Цена зависит от доступности узла и причины." , popular: true},
      { name: "Замена сифона", price: "от 2 000 ₽", note: "С герметизацией и проверкой." },
      { name: "Прочистка/устранение засора", price: "от 2 500 ₽", note: "По месту уточняем сложность." },
      { name: "Срочный выезд (при наличии окна)", price: "от 1 500 ₽", note: "Если можем взять “сегодня/завтра”." },
    ],
  },
];

const PACKAGES = [
  {
    title: "Быстрый монтаж",
    price: "от 6 500 ₽",
    desc: "1–2 задачи за выезд: смеситель + сифон / унитаз + подключение и т.д.",
    bullets: ["Подбор расходников по фото", "Герметизация и проверка", "Чисто после работ"],
    tag: "Самый популярный",
  },
  {
    title: "Кухня/ванная — подключение техники",
    price: "от 7 500 ₽",
    desc: "Стиралка/ПММ + смеситель + сифон + диагностика узлов.",
    bullets: ["Подключения без сюрпризов", "Проверка протечек", "Мини-рекомендации по узлам"],
    tag: "Частый кейс",
  },
  {
    title: "Черновая сантехника",
    price: "от 18 000 ₽",
    desc: "Разводка точек + подготовка под чистовую. Хорошо для ремонтов.",
    bullets: ["Смета до начала", "Опрессовка/контроль", "Аккуратная трассировка"],
    tag: "Для ремонта",
  },
];

const FAQ = [
  {
    q: "Почему везде “от”?",
    a: "Потому что честно: цена зависит от доступа, состояния узлов, материала труб, штробления/открытых трасс и объёма. Мы даём диапазон по фото/замерам и фиксируем смету до старта.",
  },
  {
    q: "Можно зафиксировать цену заранее?",
    a: "Да. После фото/замеров фиксируем перечень работ и смету. Если в процессе выявляется скрытая проблема (например, гнилой вывод), согласовываем изменения до того, как что-то делаем.",
  },
  {
    q: "Материалы входят в стоимость?",
    a: "Работы — отдельно. Материалы/расходники считаем по необходимости: можем купить сами (по чеку) или вы закупаете — как удобнее.",
  },
  {
    q: "Срочно сегодня/завтра реально?",
    a: "Часто — да, если есть окно. Напиши/позвони и скинь фото — скажем ближайший слот и что подготовить.",
  },
];

function AnchorNav() {
  return (
    <div className="flex flex-wrap gap-2">
      {SECTIONS.map((s) => (
        <a key={s.id} href={`#${s.id}`} className="nicor-chip hover:shadow-sm">
          <span className="text-xs">{s.title}</span>
        </a>
      ))}
    </div>
  );
}

function PriceBlock({ section }: { section: PriceSection }) {
  const Icon = section.icon;

  return (
    <section id={section.id} className="scroll-mt-28">
      <div className="flex items-start justify-between gap-4">
        <div className="min-w-0">
          <div className="flex items-center gap-2">
            <div className="grid h-10 w-10 place-items-center rounded-2xl border nicor-border bg-white">
              <Icon className="h-5 w-5" />
            </div>
            <h2 className="nicor-h2">{section.title}</h2>
          </div>
          <p className="mt-2 nicor-p">{section.subtitle}</p>
        </div>

        <Link href="/contacts#lead" className="hidden sm:inline-flex nicor-btn-ghost nicor-btn-sm">
          Рассчитать <ArrowRight className="h-4 w-4 opacity-80" />
        </Link>
      </div>

      <div className="mt-6 nicor-price-card">
        {section.items.map((it) => (
          <div key={it.name} className="nicor-price-row">
            <div>
              <div className="flex items-center gap-2">
                <div className="nicor-price-name">{it.name}</div>
                {it.popular && <span className="nicor-badge">часто</span>}
              </div>
              {it.note && <div className="nicor-price-note">{it.note}</div>}
            </div>
            <div className="nicor-price-value">{it.price}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default function PricesPage() {
  return (
    <div className="bg-[rgb(var(--bg))]">
      <div className="nicor-container nicor-section">
        <div className="flex flex-col gap-6">
          <div>
            <div className="inline-flex items-center gap-2">
              <span className="nicor-chip">
                <ReceiptRussianRuble className="h-3.5 w-3.5" />
                Прайс-лист
              </span>
              <span className="nicor-chip">
                <Clock className="h-3.5 w-3.5" />
                Выезд часто в день обращения
              </span>
              <span className="nicor-chip">
                <ShieldCheck className="h-3.5 w-3.5" />
                Договор + гарантия
              </span>
            </div>

            <h1 className="mt-4 text-3xl font-semibold md:text-4xl">
              Цены на сантехнические работы
            </h1>

            <p className="mt-3 nicor-p max-w-3xl">
              Здесь — ориентиры по стоимости. Финальная цена зависит от объекта, доступа и состояния узлов.
              Сначала даём диапазон по фото/замерам, затем фиксируем смету до старта работ.
            </p>
          </div>

          {/* Anchor nav */}
          <div className="nicor-card-soft p-5">
            <div className="flex items-start gap-3">
              <div className="grid h-10 w-10 place-items-center rounded-2xl border nicor-border bg-white">
                <Info className="h-5 w-5" />
              </div>
              <div className="min-w-0">
                <div className="text-sm font-semibold">Быстрая навигация</div>
                <p className="mt-1 text-sm text-zinc-600">
                  Прыгай к нужному разделу — дальше будет прайс по категориям и пакеты.
                </p>
                <div className="mt-3">
                  <AnchorNav />
                </div>
              </div>
            </div>
          </div>

          {/* How pricing works */}
          <div className="grid gap-4 md:grid-cols-3">
            <div className="nicor-card-soft p-6">
              <div className="text-sm font-semibold">Что влияет на цену</div>
              <ul className="mt-3 grid gap-2 text-sm text-zinc-700">
                {[
                  "Доступ к узлам (встроено/открыто, ниша, короб)",
                  "Материал труб и фитингов (PPR/PEX/металл)",
                  "Нужна ли штроба/демонтаж/сборка узлов",
                  "Состояние выводов и арматуры",
                ].map((t) => (
                  <li key={t} className="flex gap-2">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 text-zinc-900" />
                    {t}
                  </li>
                ))}
              </ul>
            </div>

            <div className="nicor-card-soft p-6">
              <div className="text-sm font-semibold">Как мы фиксируем стоимость</div>
              <ol className="mt-3 grid gap-2 text-sm text-zinc-700">
                {[
                  "Вы присылаете фото/описание или делаем замер",
                  "Даём диапазон и уточняем состав работ",
                  "Фиксируем смету до старта",
                  "Проверка/сдача/гарантия",
                ].map((t, i) => (
                  <li key={t} className="flex gap-2">
                    <span className="nicor-chip">{i + 1}</span>
                    {t}
                  </li>
                ))}
              </ol>
            </div>

            <div className="nicor-card-soft p-6">
              <div className="text-sm font-semibold">Что вы получите</div>
              <ul className="mt-3 grid gap-2 text-sm text-zinc-700">
                {[
                  "Аккуратный монтаж + герметизация",
                  "Проверка на течи и запуск",
                  "Рекомендации по узлам (если видим риск)",
                  "Чистота после работ",
                ].map((t) => (
                  <li key={t} className="flex gap-2">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 text-zinc-900" />
                    {t}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="nicor-divider my-2" />

          {/* Packages */}
          <section id="packages" className="scroll-mt-28">
            <div className="flex items-end justify-between gap-4">
              <div>
                <h2 className="nicor-h2">Пакеты</h2>
                <p className="mt-2 nicor-p">
                  Если задач несколько — пакет почти всегда выгоднее, чем “по одной позиции”.
                </p>
              </div>
              <Link href="/contacts#lead" className="hidden md:inline-flex nicor-btn-brand">
                Рассчитать по фото <ArrowRight className="h-4 w-4 opacity-90" />
              </Link>
            </div>

            <div className="mt-6 grid gap-4 md:grid-cols-3">
              {PACKAGES.map((p) => (
                <div key={p.title} className="nicor-card-premium p-6 nicor-glow-hover">
                  <div className="flex items-center justify-between gap-3">
                    <div className="text-base font-semibold">{p.title}</div>
                    <span className="nicor-badge">{p.tag}</span>
                  </div>
                  <div className="mt-2 text-2xl font-semibold">{p.price}</div>
                  <div className="mt-2 text-sm text-zinc-600">{p.desc}</div>

                  <ul className="mt-4 grid gap-2 text-sm text-zinc-700">
                    {p.bullets.map((b) => (
                      <li key={b} className="flex gap-2">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 text-zinc-900" />
                        {b}
                      </li>
                    ))}
                  </ul>

                  <Link href="/contacts#lead" className="mt-5 w-full nicor-btn-primary">
                    Узнать точнее <ArrowRight className="h-4 w-4 opacity-90" />
                  </Link>
                </div>
              ))}
            </div>
          </section>

          <div className="nicor-divider my-2" />

          {/* Price sections */}
          <div className="grid gap-10">
            {SECTIONS.map((s) => (
              <PriceBlock key={s.id} section={s} />
            ))}
          </div>

          <div className="nicor-divider my-2" />

          {/* FAQ */}
          <section id="faq" className="scroll-mt-28">
            <h2 className="nicor-h2">Вопросы по ценам</h2>
            <p className="mt-2 nicor-p max-w-3xl">
              Если коротко: мы за прозрачность. Диапазон → смета → фиксация → работа.
            </p>

            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {FAQ.map((f) => (
                <div key={f.q} className="nicor-panel p-6">
                  <div className="text-sm font-semibold">{f.q}</div>
                  <div className="mt-2 text-sm text-zinc-600">{f.a}</div>
                </div>
              ))}
            </div>
          </section>

          {/* CTA */}
          <section className="mt-2">
            <div className="nicor-card-premium p-6 md:p-8">
              <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
                <div className="max-w-2xl">
                  <div className="text-sm font-semibold">Быстрый расчёт</div>
                  <div className="mt-2 text-2xl font-semibold md:text-3xl">
                    Пришлите фото — скажем диапазон и ближайшее окно
                  </div>
                  <p className="mt-2 text-sm text-zinc-600">
                    2–4 фото узла/места работ + район/этаж + кратко “замена” или “с нуля”.
                  </p>
                </div>

                <div className="flex w-full flex-col gap-3 sm:flex-row md:w-auto">
                  <Link href="/contacts#lead" className="nicor-btn-brand w-full md:w-auto">
                    Рассчитать по фото <ArrowRight className="h-4 w-4 opacity-90" />
                  </Link>
                  <Link href="/services" className="nicor-btn-ghost w-full md:w-auto">
                    Смотреть услуги
                  </Link>
                </div>
              </div>
            </div>
          </section>

          {/* Bottom spacing */}
          <div className="h-4" />
        </div>
      </div>
    </div>
  );
}
