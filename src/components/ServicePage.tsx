// src/components/ServicePage.tsx
import Link from "next/link";

type FaqItem = { q: string; a: string };
type Step = { title: string; desc: string };
type PriceRow = { name: string; from?: string; note?: string };

function slugify(input: string) {
  return input
    .toLowerCase()
    .replace(/ё/g, "е")
    .replace(/[^a-z0-9а-я\s-]/gi, "")
    .trim()
    .replace(/\s+/g, "-");
}

export default function ServicePage(props: {
  title: string;
  subtitle: string;
  bullets: string[];
  prices?: PriceRow[];
  steps?: Step[];
  faq?: FaqItem[];
  city?: string; // "СПб"
  area?: string; // "Ленинградская область"
  serviceLinks?: { title: string; href: string }[];
}) {
  const {
    title,
    subtitle,
    bullets,
    prices,
    steps,
    faq,
    city = "СПб",
    area = "область",
    serviceLinks,
  } = props;

  const faqId = "faq";
  const toc = [
    { title: "Что входит", id: "includes" },
    { title: "Цены", id: "prices" },
    { title: "Как мы работаем", id: "steps" },
    { title: "Вопросы", id: faqId },
  ];

  return (
    <div className="mx-auto max-w-6xl px-4 py-10 md:py-14">
      {/* HERO */}
      <div className="rounded-3xl border bg-white p-6 md:p-10">
        <div className="flex flex-wrap items-center gap-2 text-sm text-zinc-600">
          <span className="rounded-full border px-3 py-1">Выезд сегодня</span>
          <span className="rounded-full border px-3 py-1">Договор</span>
          <span className="rounded-full border px-3 py-1">Гарантия</span>
          <span className="rounded-full border px-3 py-1">
            {city} и {area}
          </span>
        </div>

        <h1 className="mt-5 text-3xl font-semibold tracking-tight md:text-5xl">
          {title}
        </h1>
        <p className="mt-4 max-w-3xl text-base text-zinc-700 md:text-lg">
          {subtitle}
        </p>

        <div className="mt-6 flex flex-wrap gap-3">
          <Link
            href="/contacts"
            className="rounded-2xl bg-black px-5 py-3 text-sm font-medium text-white hover:opacity-90"
          >
            Рассчитать по фото
          </Link>
          <Link
            href="/prices"
            className="rounded-2xl border px-5 py-3 text-sm font-medium hover:bg-zinc-50"
          >
            Смотреть цены
          </Link>
          <a
            href="#includes"
            className="rounded-2xl border px-5 py-3 text-sm font-medium hover:bg-zinc-50"
          >
            Что входит
          </a>
        </div>

        {/* TOC */}
        <div className="mt-8 grid gap-2 md:grid-cols-4">
          {toc.map((x) => (
            <a
              key={x.id}
              href={`#${x.id}`}
              className="rounded-2xl border px-4 py-3 text-sm text-zinc-700 hover:bg-zinc-50"
            >
              {x.title} →
            </a>
          ))}
        </div>
      </div>

      {/* INCLUDES */}
      <section id="includes" className="mt-10">
        <h2 className="text-2xl font-semibold md:text-3xl">Что входит</h2>
        <p className="mt-3 max-w-3xl text-zinc-600">
          Нормальная “под ключ” — это не один пункт в чате. Это понятный состав
          работ, защита отделки и ответственность за результат.
        </p>

        <div className="mt-6 grid gap-4 md:grid-cols-2">
          <div className="rounded-3xl border bg-white p-6">
            <div className="text-sm font-semibold text-zinc-900">
              Состав работ
            </div>
            <ul className="mt-4 space-y-3 text-sm text-zinc-700">
              {bullets.map((b) => (
                <li key={b} className="flex gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-zinc-900" />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-3xl border bg-white p-6">
            <div className="text-sm font-semibold text-zinc-900">
              Для кого подходит
            </div>
            <div className="mt-4 space-y-3 text-sm text-zinc-700">
              <div className="rounded-2xl border px-4 py-3">
                Новостройка: разводка, коллектор, монтаж сантехники “с нуля”.
              </div>
              <div className="rounded-2xl border px-4 py-3">
                Вторичка: замена узлов, переносы, устранение течей/запахов,
                аккуратная работа без разрушений “где можно”.
              </div>
              <div className="rounded-2xl border px-4 py-3">
                Ремонт с отделкой: защита поверхностей, чистота, согласование
                решений до старта.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PRICES */}
      <section id="prices" className="mt-10">
        <h2 className="text-2xl font-semibold md:text-3xl">
          Цены и от чего зависят
        </h2>
        <p className="mt-3 max-w-3xl text-zinc-600">
          Мы не играем в “от 500 ₽ за всё”. Даём диапазон после фото/замеров и
          фиксируем в смете до начала.
        </p>

        <div className="mt-6 grid gap-4 md:grid-cols-2">
          <div className="rounded-3xl border bg-white p-6">
            <div className="text-sm font-semibold text-zinc-900">
              Базовые позиции
            </div>

            {prices?.length ? (
              <div className="mt-4 divide-y">
                {prices.map((row) => (
                  <div
                    key={row.name}
                    className="flex items-start justify-between gap-4 py-3"
                  >
                    <div className="text-sm text-zinc-800">{row.name}</div>
                    <div className="text-right">
                      {row.from ? (
                        <div className="text-sm font-semibold">
                          от {row.from}
                        </div>
                      ) : (
                        <div className="text-sm font-semibold">по смете</div>
                      )}
                      {row.note ? (
                        <div className="text-xs text-zinc-500">{row.note}</div>
                      ) : null}
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="mt-4 rounded-2xl border px-4 py-3 text-sm text-zinc-700">
                Прайс сейчас в наполнении. Можем оценить по фото и дать диапазон
                в день обращения.
              </div>
            )}

            <div className="mt-5 flex flex-wrap gap-3">
              <Link
                href="/prices"
                className="rounded-2xl border px-4 py-2 text-sm font-medium hover:bg-zinc-50"
              >
                Полный прайс →
              </Link>
              <Link
                href="/contacts"
                className="rounded-2xl bg-black px-4 py-2 text-sm font-medium text-white hover:opacity-90"
              >
                Оценить по фото →
              </Link>
            </div>
          </div>

          <div className="rounded-3xl border bg-white p-6">
            <div className="text-sm font-semibold text-zinc-900">
              Что влияет на стоимость
            </div>
            <ul className="mt-4 space-y-3 text-sm text-zinc-700">
              {[
                "Объём работ: замена отдельных узлов или полный монтаж с нуля",
                "Материалы: бренды, диаметр труб, фитинги, коллектор/редуктор/фильтры",
                "Доступ: штробы/короба/скрытый монтаж, этаж, парковка/подъезд",
                "Срочность: аварийный выезд vs плановые работы",
                "Гарантии и ответственность: по смете и договору, без “потом допов”",
              ].map((x) => (
                <li key={x} className="flex gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-zinc-900" />
                  <span>{x}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* STEPS */}
      <section id="steps" className="mt-10">
        <h2 className="text-2xl font-semibold md:text-3xl">Как мы работаем</h2>
        <p className="mt-3 max-w-3xl text-zinc-600">
          Чётко, спокойно, без “пропаданий”. На каждом шаге понятно что, когда и
          сколько стоит.
        </p>

        <div className="mt-6 grid gap-4 md:grid-cols-4">
          {(steps?.length
            ? steps
            : [
                { title: "Фото/созвон", desc: "Смотрим задачу, задаём вопросы, даём диапазон." },
                { title: "Выезд", desc: "Проверяем узлы, предлагаем решения, фиксируем смету." },
                { title: "Работа", desc: "Монтаж/замена, проверка герметичности, уборка." },
                { title: "Сдача", desc: "Результат + рекомендации, гарантия по договору." },
              ]
          ).map((s, idx) => (
            <div key={s.title} className="rounded-3xl border bg-white p-6">
              <div className="text-xs font-semibold text-zinc-500">
                Шаг {idx + 1}
              </div>
              <div className="mt-2 text-sm font-semibold">{s.title}</div>
              <div className="mt-2 text-sm text-zinc-600">{s.desc}</div>
            </div>
          ))}
        </div>
      </section>

      {/* RELATED */}
      {serviceLinks?.length ? (
        <section className="mt-10">
          <h2 className="text-2xl font-semibold md:text-3xl">
            Смежные работы
          </h2>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {serviceLinks.map((x) => (
              <Link
                key={x.href}
                href={x.href}
                className="rounded-3xl border bg-white p-6 hover:bg-zinc-50"
              >
                <div className="text-sm font-semibold">{x.title}</div>
                <div className="mt-3 text-sm text-zinc-600">Открыть →</div>
              </Link>
            ))}
          </div>
        </section>
      ) : null}

      {/* FAQ */}
      {faq?.length ? (
        <section id={faqId} className="mt-10">
          <h2 className="text-2xl font-semibold md:text-3xl">
            Частые вопросы
          </h2>
          <div className="mt-6 divide-y rounded-3xl border bg-white">
            {faq.map((item) => {
              const id = slugify(item.q);
              return (
                <details key={id} className="group p-6">
                  <summary className="cursor-pointer list-none text-sm font-semibold">
                    {item.q}
                    <span className="ml-2 text-zinc-500 group-open:hidden">+</span>
                    <span className="ml-2 hidden text-zinc-500 group-open:inline">
                      –
                    </span>
                  </summary>
                  <div className="mt-3 text-sm text-zinc-700">{item.a}</div>
                </details>
              );
            })}
          </div>
        </section>
      ) : null}

      {/* CTA */}
      <section className="mt-10">
        <div className="rounded-3xl border bg-black p-7 text-white md:p-10">
          <h2 className="text-2xl font-semibold md:text-3xl">
            Хочешь быстро понять цену?
          </h2>
          <p className="mt-3 max-w-2xl text-sm text-white/80">
            Пришли фото и кратко опиши задачу. Скажем диапазон стоимости и ближайшее
            окно по времени.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href="/contacts"
              className="rounded-2xl bg-white px-5 py-3 text-sm font-semibold text-black hover:opacity-90"
            >
              Отправить фото →
            </Link>
            <Link
              href="/prices"
              className="rounded-2xl border border-white/30 px-5 py-3 text-sm font-semibold text-white hover:bg-white/10"
            >
              Сначала посмотрю прайс →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
