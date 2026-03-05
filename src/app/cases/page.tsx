import Link from "next/link";
import { ArrowRight, CheckCircle2, Clock, MapPin, Sparkles, Wrench } from "lucide-react";

type CaseCategory = "Санузел" | "Тёплый пол" | "Отопление" | "Водоснабжение" | "Канализация";

type CaseItem = {
  id: string;
  title: string;
  category: CaseCategory;
  location: string;
  objectType: string;
  duration: string;
  scope: string[];
  materials: string[];
  result: string;
  metrics: { label: string; value: string }[];
};

const cases: CaseItem[] = [
  {
    id: "bathroom-turnkey",
    title: "Санузел под ключ",
    category: "Санузел",
    location: "СПб, Приморский район",
    objectType: "Квартира, новостройка",
    duration: "5 дней",
    scope: [
      "Разводка воды и канализации",
      "Инсталляция + подвесной унитаз",
      "Душевой угол + трап",
      "Смесители и подключение сантехники",
      "Проверка узлов и аккуратная сдача",
    ],
    materials: ["PPR/PEX (по задаче)", "Фитинги", "Запорная арматура", "Сифоны и трапы"],
    result:
      "Собран чистый узел, доступ к обслуживанию сохранён. Точки выведены ровно по проекту, всё подписано и проверено.",
    metrics: [
      { label: "Срок", value: "5 дней" },
      { label: "Точек воды", value: "8" },
      { label: "Узел", value: "инсталляция + душ" },
    ],
  },
  {
    id: "floor-heating",
    title: "Тёплый пол",
    category: "Тёплый пол",
    location: "ЛО, Мурино",
    objectType: "Квартира",
    duration: "2 дня",
    scope: [
      "Подготовка основания",
      "Укладка труб по схеме",
      "Монтаж коллектора",
      "Опрессовка",
      "Сдача под стяжку",
    ],
    materials: ["Труба PEX/PERT", "Коллектор", "Узел подключения", "Крепёж/изоляция"],
    result:
      "Контуры собраны без лишних соединений, давление держится. Коллектор установлен удобно для будущего обслуживания.",
    metrics: [
      { label: "Площадь", value: "42 м²" },
      { label: "Контуров", value: "6" },
      { label: "Опрессовка", value: "выполнена" },
    ],
  },
  {
    id: "heating-house",
    title: "Отопление в частном доме",
    category: "Отопление",
    location: "ЛО, Всеволожский район",
    objectType: "Дом",
    duration: "6 дней",
    scope: [
      "Радиаторы + обвязка",
      "Котёл и группа безопасности",
      "Разводка по этажам",
      "Пуск и настройка",
      "Инструкция для владельца",
    ],
    materials: ["Радиаторы", "Запорная арматура", "Трубы (по проекту)", "Крепёж и узлы"],
    result:
      "Система работает ровно, прогрев стабильный. Сделали понятную логику узлов, чтобы обслуживать без боли.",
    metrics: [
      { label: "Срок", value: "6 дней" },
      { label: "Этажей", value: "2" },
      { label: "Запуск", value: "настроен" },
    ],
  },
  {
    id: "water-supply",
    title: "Разводка водоснабжения",
    category: "Водоснабжение",
    location: "СПб, Выборгский район",
    objectType: "Квартира",
    duration: "1–2 дня",
    scope: [
      "Сборка узла ввода",
      "Фильтры и краны",
      "Разводка по точкам",
      "Проверка соединений",
    ],
    materials: ["Фильтры", "Редуктор (по необходимости)", "Фитинги", "Краны"],
    result:
      "Узел аккуратный и обслуживаемый. Никаких «змей» и хаоса — всё читается и работает.",
    metrics: [
      { label: "Срок", value: "1–2 дня" },
      { label: "Узел", value: "ввод + фильтрация" },
      { label: "Точек", value: "по задаче" },
    ],
  },
  {
    id: "sewer-rework",
    title: "Переделка канализации",
    category: "Канализация",
    location: "СПб, Красногвардейский район",
    objectType: "Квартира",
    duration: "1 день",
    scope: [
      "Диагностика причины запаха/подтёков",
      "Замена проблемных участков",
      "Правильные уклоны и ревизии",
      "Проверка и сдача",
    ],
    materials: ["Трубы и фасонина", "Манжеты", "Ревизии", "Сифоны"],
    result:
      "Запах ушёл, уклоны нормальные, ревизии на месте. Сделано так, чтобы это больше не возвращалось.",
    metrics: [
      { label: "Срок", value: "1 день" },
      { label: "Причина", value: "уклон/узлы" },
      { label: "Результат", value: "исправлено" },
    ],
  },
];

const categories: Array<"Все" | CaseCategory> = ["Все", "Санузел", "Тёплый пол", "Отопление", "Водоснабжение", "Канализация"];

const steps = [
  { title: "Понимаем задачу", desc: "Коротко уточняем, что делаем: замена или с нуля, какие точки, какие ограничения по доступу." },
  { title: "Оцениваем по фото", desc: "2–4 фото узла и общий план. Чаще всего этого хватает, чтобы назвать вилку и ближайшее окно." },
  { title: "Выезд по ситуации", desc: "Если объект сложный, выезжаем, смотрим, фиксируем объём и материалы." },
  { title: "Монтаж и проверка", desc: "Работаем аккуратно, узлы собираем логично, после — проверка и сдача." },
];

const faq = [
  { q: "Можно назвать точную цену сразу?", a: "Для простых работ часто достаточно фото и короткого созвона. Для сложных объектов точность даёт осмотр на месте. Мы не «играем в сюрпризы», просто честно считаем по факту задачи." },
  { q: "Работаете по договору?", a: "Да. Если нужно — договор и гарантия, понятная смета, фиксируем объём работ до старта." },
  { q: "Делаете «под ключ»?", a: "Да. Санузлы, тёплые полы, отопление, узлы водоснабжения и канализации — от планирования до сдачи." },
  { q: "В какие районы выезжаете?", a: "Санкт-Петербург и Ленинградская область. Если объект далеко — просто согласуем логистику." },
];

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="nicor-glass nicor-border border p-4">
      <div className="text-xs font-semibold text-zinc-500">{label}</div>
      <div className="mt-1 text-sm font-extrabold text-zinc-900">{value}</div>
    </div>
  );
}

function CaseCard({ item }: { item: CaseItem }) {
  return (
    <article className="nicor-card-premium nicor-noise p-6">
      <div className="flex items-start justify-between gap-3">
        <div>
          <div className="inline-flex items-center gap-2">
            <span className="nicor-badge">
              <Sparkles className="h-4 w-4" />
              {item.category}
            </span>
            <span className="nicor-badge">
              <MapPin className="h-4 w-4" />
              {item.location}
            </span>
          </div>

          <h3 className="mt-3 nicor-h3">{item.title}</h3>
          <p className="mt-2 text-sm text-zinc-600">{item.objectType} · {item.duration}</p>
        </div>

        <div className="hidden sm:flex items-center gap-2">
          <span className="nicor-chip">
            <Clock className="h-4 w-4" />
            {item.duration}
          </span>
        </div>
      </div>

      <div className="mt-5 grid gap-3 sm:grid-cols-3">
        {item.metrics.map((m) => (
          <Stat key={m.label} label={m.label} value={m.value} />
        ))}
      </div>

      <div className="mt-5 grid gap-4 md:grid-cols-2">
        <div className="nicor-panel nicor-border border p-4">
          <div className="text-sm font-extrabold text-zinc-900">Что сделали</div>
          <ul className="mt-3 space-y-2 text-sm text-zinc-700">
            {item.scope.map((s) => (
              <li key={s} className="flex gap-2">
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-zinc-900/70" />
                <span>{s}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="nicor-panel nicor-border border p-4">
          <div className="text-sm font-extrabold text-zinc-900">Материалы и узлы</div>
          <ul className="mt-3 space-y-2 text-sm text-zinc-700">
            {item.materials.map((m) => (
              <li key={m} className="flex gap-2">
                <Wrench className="mt-0.5 h-4 w-4 shrink-0 text-zinc-900/70" />
                <span>{m}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mt-5 nicor-glass nicor-border border p-4">
        <div className="text-sm font-extrabold text-zinc-900">Результат</div>
        <p className="mt-2 text-sm text-zinc-700">{item.result}</p>
      </div>

      <div className="mt-6 flex flex-wrap items-center gap-3">
        <Link href="/contact" className="nicor-btn-brand">
          Оставить заявку <ArrowRight className="h-4 w-4" />
        </Link>
        <Link href="/pricing" className="nicor-btn-ghost">
          Посмотреть цены
        </Link>
        <span className="text-xs text-zinc-500">
          Скоро добавим фото до/после и подробные сметы
        </span>
      </div>
    </article>
  );
}

export default function CasesPage() {
  // без useState чтобы не превращать страницу в client-компонент.
  // фильтр делаем “визуально” через якоря-кнопки — потом легко включишь реальный фильтр, если захочешь.
  return (
    <div className="nicor-page">
      <div className="nicor-container nicor-section relative">
        {/* HERO */}
        <div className="nicor-panel-premium nicor-noise">
          <div className="relative z-[1]">
            <div className="flex flex-wrap items-center gap-2">
              <span className="nicor-chip">СПб и область</span>
              <span className="nicor-chip">Монтаж и ремонт</span>
              <span className="nicor-chip">Аккуратные узлы</span>
              <span className="nicor-chip">Проверка на объекте</span>
            </div>

            <h1 className="mt-5 nicor-title">
              Кейсы, где всё сделано <span className="nicor-gradient-text">по уму</span>
            </h1>

            <p className="mt-4 nicor-p max-w-2xl">
              Здесь собраны реальные примеры работ: санузлы под ключ, тёплые полы, отопление, узлы водоснабжения и канализации.
              Мы постепенно добавляем фото до/после, сроки, материалы и детали по каждому объекту.
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-3">
              <Link href="/contact" className="nicor-btn-brand">
                Рассчитать по фото <ArrowRight className="h-4 w-4" />
              </Link>
              <Link href="/pricing" className="nicor-btn-ghost">
                Открыть прайс
              </Link>
              <span className="text-sm text-zinc-600">
                Обычно хватает 2–4 фото и короткого звонка
              </span>
            </div>

            <div className="mt-8 grid gap-3 sm:grid-cols-3">
              <div className="nicor-card-soft p-5">
                <div className="text-sm font-extrabold text-zinc-900">Прозрачный объём</div>
                <p className="mt-2 text-sm text-zinc-600">
                  Сначала фиксируем, что именно делаем. Потом работаем по плану, без сюрпризов.
                </p>
              </div>
              <div className="nicor-card-soft p-5">
                <div className="text-sm font-extrabold text-zinc-900">Чистые узлы</div>
                <p className="mt-2 text-sm text-zinc-600">
                  Узлы собираем логично и обслуживаемо. Чтобы не превращать квартиру в ребус.
                </p>
              </div>
              <div className="nicor-card-soft p-5">
                <div className="text-sm font-extrabold text-zinc-900">Проверка после монтажа</div>
                <p className="mt-2 text-sm text-zinc-600">
                  Проверяем соединения и результат на объекте. Сдаём аккуратно, без беготни.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* FILTER PILLS (визуальные) */}
        <div className="mt-10 flex flex-wrap items-center gap-2">
          {categories.map((cat) => (
            <a
              key={cat}
              href={cat === "Все" ? "#cases" : `#${encodeURIComponent(cat)}`}
              className="nicor-pill"
            >
              {cat}
            </a>
          ))}
        </div>

        <div className="mt-6 nicor-divider" />

        {/* CASES */}
        <section id="cases" className="mt-10">
          <div className="flex items-end justify-between gap-4 flex-wrap">
            <div>
              <div className="nicor-kicker">Портфолио</div>
              <h2 className="mt-2 nicor-h2">Примеры выполненных работ</h2>
            </div>
            <div className="text-sm text-zinc-600 max-w-md">
              Сейчас здесь “витрина”. Позже добавим фото до/после, списки материалов и короткие комментарии по нюансам монтажа.
            </div>
          </div>

          <div className="mt-8 grid gap-5">
            {/* якоря под категории */}
            {(["Санузел", "Тёплый пол", "Отопление", "Водоснабжение", "Канализация"] as CaseCategory[]).map((cat) => (
              <div key={cat} id={encodeURIComponent(cat)} className="scroll-mt-24">
                <div className="mb-4 flex items-center gap-3">
                  <span className="nicor-chip">{cat}</span>
                  <div className="h-px flex-1 bg-gradient-to-r from-transparent via-slate-200 to-transparent" />
                </div>

                <div className="grid gap-5 md:grid-cols-2">
                  {cases
                    .filter((c) => c.category === cat)
                    .map((item) => (
                      <CaseCard key={item.id} item={item} />
                    ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* PROCESS */}
        <section className="nicor-section">
          <div className="flex items-end justify-between gap-4 flex-wrap">
            <div>
              <div className="nicor-kicker">Подход</div>
              <h2 className="mt-2 nicor-h2">Как мы ведём объект</h2>
            </div>
            <div className="text-sm text-zinc-600 max-w-md">
              Нормальный рабочий процесс. Без суеты и “давайте потом переделаем”.
            </div>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-4">
            {steps.map((s) => (
              <div key={s.title} className="nicor-card-premium nicor-noise p-6">
                <div className="text-sm font-extrabold text-zinc-900">{s.title}</div>
                <p className="mt-2 text-sm text-zinc-600">{s.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 nicor-cta-premium p-7 md:p-10">
            <div className="grid gap-8 md:grid-cols-[1.2fr_.8fr] items-center">
              <div>
                <h3 className="nicor-h2">Хочешь так же аккуратно у себя</h3>
                <p className="mt-3 nicor-p">
                  Пришли 2–4 фото и пару слов по задаче. Мы быстро скажем вилку по цене и предложим ближайшее окно.
                </p>
                <div className="mt-6 flex flex-wrap items-center gap-3">
                  <Link href="/contact" className="nicor-btn-brand">
                    Оставить заявку <ArrowRight className="h-4 w-4" />
                  </Link>
                  <Link href="/pricing" className="nicor-btn-ghost">
                    Посмотреть цены
                  </Link>
                </div>
              </div>

              <div className="nicor-card-soft p-6">
                <div className="text-sm font-extrabold text-zinc-900">Что прислать</div>
                <div className="mt-3 space-y-2 text-sm text-zinc-700">
                  <div className="flex gap-2">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 text-zinc-900/70" />
                    <span>2–4 фото узла или места работ</span>
                  </div>
                  <div className="flex gap-2">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 text-zinc-900/70" />
                    <span>Коротко: замена или “с нуля”</span>
                  </div>
                  <div className="flex gap-2">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 text-zinc-900/70" />
                    <span>Район и желательные сроки</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="pb-16">
          <div className="flex items-end justify-between gap-4 flex-wrap">
            <div>
              <div className="nicor-kicker">FAQ</div>
              <h2 className="mt-2 nicor-h2">Частые вопросы</h2>
            </div>
            <div className="text-sm text-zinc-600 max-w-md">
              Если хочешь, добавим сюда ответы короткими блоками или раскроем в аккордеоны.
            </div>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {faq.map((f) => (
              <div key={f.q} className="nicor-card-premium nicor-noise p-6">
                <div className="text-sm font-extrabold text-zinc-900">{f.q}</div>
                <p className="mt-2 text-sm text-zinc-600">{f.a}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}