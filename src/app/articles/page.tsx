"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  Search,
  Sparkles,
  Clock,
  Tag,
  TrendingUp,
  Filter,
} from "lucide-react";

type Article = {
  slug: string;
  title: string;
  excerpt: string;
  date: string; // "2026-03-01"
  readTime: number; // minutes
  tags: string[];
  level?: "База" | "Практика" | "Эксперт";
  featured?: boolean;
};

const ARTICLES: Article[] = [
  {
    slug: "kak-ne-popast-na-peredelki",
    title: "Как не попасть на переделки: 7 ошибок в сантехнике, которые стоят дороже работ",
    excerpt:
      "Разбираем типовые ошибки: узлы, доступ, коллекторы, уклоны, материалы — и что попросить у мастера до старта.",
    date: "2026-03-01",
    readTime: 6,
    tags: ["Санузел", "Ошибки", "Контроль"],
    level: "Практика",
    featured: true,
  },
  {
    slug: "kak-prinyat-rabotu",
    title: "Чек-лист приёмки сантехнических работ: что проверить, чтобы потом не платить дважды",
    excerpt:
      "Пункты приёмки по узлам, соединениям, герметичности, доступу и документации. Понятно, коротко, по делу.",
    date: "2026-02-15",
    readTime: 5,
    tags: ["Контроль", "Чек-лист"],
    level: "База",
  },
  {
    slug: "teplyy-pol-vodyanoy",
    title: "Водяной тёплый пол: как понять, что сделано правильно (и где чаще всего косячат)",
    excerpt:
      "Коллекторный узел, опрессовка, шаг укладки, балансировка — признаки нормальной инженерки.",
    date: "2026-01-28",
    readTime: 7,
    tags: ["Тёплый пол", "Отопление"],
    level: "Эксперт",
  },
  {
    slug: "kollektor-v-kvartire",
    title: "Коллектор в квартире: когда он нужен и почему это часто экономит деньги",
    excerpt:
      "Коллектор — не “дорого ради красоты”. Это управляемость, ремонтопригодность и меньше аварий.",
    date: "2026-01-09",
    readTime: 4,
    tags: ["Разводка", "Узлы"],
    level: "Практика",
  },
  {
    slug: "stoimost-smeta",
    title: "Смета без сюрпризов: как мы фиксируем стоимость и почему это выгоднее торга",
    excerpt:
      "Что влияет на цену, как читать смету и как избежать “а это отдельно” на объекте.",
    date: "2025-12-20",
    readTime: 5,
    tags: ["Смета", "Договор"],
    level: "База",
  },
];

type SortMode = "new" | "popular" | "time";

function formatRuDate(iso: string) {
  const d = new Date(iso);
  const fmt = new Intl.DateTimeFormat("ru-RU", { day: "2-digit", month: "long", year: "numeric" });
  return fmt.format(d);
}

function uniqueTags(items: Article[]) {
  const set = new Set<string>();
  items.forEach((a) => a.tags.forEach((t) => set.add(t)));
  return Array.from(set).sort((a, b) => a.localeCompare(b, "ru"));
}

function scorePopular(a: Article) {
  // псевдо-популярность, чтобы сортировка работала даже без бэка
  // (потом заменишь на real metrics)
  const base = a.tags.length * 7 + (a.level === "Эксперт" ? 10 : a.level === "Практика" ? 6 : 2);
  const age = Math.max(1, Math.round((Date.now() - new Date(a.date).getTime()) / 86400000));
  return base * (1 / Math.sqrt(age));
}

function levelPill(level?: Article["level"]) {
  if (!level) return null;
  const map: Record<string, { icon: any; label: string }> = {
    "База": { icon: Sparkles, label: "База" },
    "Практика": { icon: TrendingUp, label: "Практика" },
    "Эксперт": { icon: Filter, label: "Эксперт" },
  };
  const conf = map[level];
  const Icon = conf.icon;
  return (
    <span className="nicor-badge">
      <Icon className="h-3.5 w-3.5" />
      {conf.label}
    </span>
  );
}

export default function ArticlesPage() {
  const featured = useMemo(() => ARTICLES.find((a) => a.featured) ?? ARTICLES[0], []);
  const allTags = useMemo(() => uniqueTags(ARTICLES), []);

  const [query, setQuery] = useState("");
  const [activeTag, setActiveTag] = useState<string | null>(null);
  const [sort, setSort] = useState<SortMode>("new");
  const [limit, setLimit] = useState(8);

  const filtered = useMemo(() => {
    let list = ARTICLES.filter((a) => a.slug !== featured.slug);

    if (activeTag) list = list.filter((a) => a.tags.includes(activeTag));

    if (query.trim()) {
      const q = query.trim().toLowerCase();
      list = list.filter((a) => {
        const hay = `${a.title} ${a.excerpt} ${a.tags.join(" ")}`.toLowerCase();
        return hay.includes(q);
      });
    }

    if (sort === "new") {
      list = [...list].sort((a, b) => +new Date(b.date) - +new Date(a.date));
    } else if (sort === "time") {
      list = [...list].sort((a, b) => a.readTime - b.readTime);
    } else if (sort === "popular") {
      list = [...list].sort((a, b) => scorePopular(b) - scorePopular(a));
    }

    return list;
  }, [activeTag, query, sort, featured.slug]);

  const visible = filtered.slice(0, limit);
  const hasMore = filtered.length > visible.length;

  return (
    <div className="nicor-page">
      {/* top spacing under sticky header */}
      <section className="nicor-container pt-8 md:pt-12">
        {/* Header */}
        <div className="max-w-4xl">
          <div className="nicor-kicker">База знаний</div>
          <h1 className="mt-2 nicor-title">
            Статьи: <span className="nicor-gradient-text">инженерно, коротко, без воды</span>
          </h1>

          {/* Главный абзац (отделён “своей рамкой”, без стандартных карточек) */}
          <div className="mt-5 rounded-[26px] border nicor-border bg-[rgba(255,255,255,.45)] px-5 py-4 backdrop-blur-md shadow-[var(--shadow-sm)]">
            <p className="nicor-p">
              Тут мы собираем практику по сантехнике и отоплению: как правильно принять работу,
              на чём нельзя экономить, какие узлы делать “по-взрослому” и как избежать переделок.
              Тексты написаны так, чтобы вы могли быстро понять суть и задавать мастерам правильные вопросы.
            </p>
          </div>
        </div>
      </section>

      {/* Featured */}
      <section className="nicor-container mt-8 md:mt-10">
        <div className="nicor-panel-premium overflow-hidden">
          <div className="relative z-10 grid gap-8 md:grid-cols-[1.15fr_0.85fr] md:items-center">
            <div className="min-w-0">
              <div className="flex flex-wrap items-center gap-2">
                <span className="nicor-chip">
                  <Sparkles className="h-3.5 w-3.5" />
                  Рекомендуем
                </span>
                {levelPill(featured.level)}
                <span className="nicor-badge">
                  <Clock className="h-3.5 w-3.5" />
                  {featured.readTime} мин
                </span>
              </div>

              <h2 className="mt-4 text-[clamp(1.35rem,2.4vw,2rem)] font-[650] leading-tight tracking-[-0.02em]">
                {featured.title}
              </h2>

              <p className="mt-3 text-sm text-zinc-700 md:text-base">
                {featured.excerpt}
              </p>

              <div className="mt-4 flex flex-wrap gap-2">
                {featured.tags.map((t) => (
                  <button
                    key={t}
                    onClick={() => setActiveTag(t)}
                    className="nicor-btn-subtle text-sm"
                    type="button"
                  >
                    <Tag className="h-4 w-4 opacity-80" />
                    {t}
                  </button>
                ))}
              </div>

              <div className="mt-6 flex flex-wrap gap-3">
                <Link href={`/articles/${featured.slug}`} className="nicor-btn-brand">
                  Читать статью <ArrowRight className="h-4 w-4 opacity-90" />
                </Link>
                <span className="text-xs text-zinc-500 self-center">
                  {formatRuDate(featured.date)}
                </span>
              </div>
            </div>

            {/* Right “info card” */}
            <div className="relative z-10">
              <div className="nicor-card-premium p-5">
                <div className="text-sm font-semibold">Как пользоваться разделом</div>
                <ul className="mt-3 grid gap-2 text-sm text-zinc-700">
                  <li className="flex gap-2">
                    <span className="nicor-chip">1</span>
                    Выберите тег — получите подборку по теме
                  </li>
                  <li className="flex gap-2">
                    <span className="nicor-chip">2</span>
                    Поиск — находит даже по фразам из текста
                  </li>
                  <li className="flex gap-2">
                    <span className="nicor-chip">3</span>
                    Сортировка — новые, короткие, “популярные”
                  </li>
                </ul>

                <div className="mt-4 text-xs text-zinc-500">
                  Позже добавим “серии” (например: Санузел → Разводка → Приёмка).
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Controls (sticky) */}
      <section className="nicor-container mt-8 md:mt-10">
        <div className="sticky top-[72px] z-40 rounded-[26px] border nicor-border bg-[rgba(255,255,255,.55)] backdrop-blur-xl shadow-[var(--shadow-sm)]">
          <div className="flex flex-col gap-3 p-4 md:flex-row md:items-center md:justify-between">
            {/* Search */}
            <div className="flex items-center gap-2 rounded-[18px] border nicor-border bg-white/60 px-3 py-2">
              <Search className="h-4 w-4 opacity-70" />
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Поиск по статьям: узлы, смета, тёплый пол…"
                className="w-full bg-transparent text-sm outline-none placeholder:text-zinc-400"
              />
              {query.trim() && (
                <button
                  type="button"
                  onClick={() => setQuery("")}
                  className="text-xs text-zinc-500 hover:text-zinc-900"
                >
                  очистить
                </button>
              )}
            </div>

            {/* Sort */}
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-xs text-zinc-500">Сортировка:</span>
              <div className="flex rounded-full border nicor-border bg-white/55 p-1">
                {[
                  { id: "new", label: "Новые" },
                  { id: "popular", label: "Топ" },
                  { id: "time", label: "Короткие" },
                ].map((x) => (
                  <button
                    key={x.id}
                    type="button"
                    onClick={() => setSort(x.id as SortMode)}
                    className={[
                      "rounded-full px-3 py-1.5 text-xs font-semibold transition",
                      sort === x.id
                        ? "bg-zinc-900 text-white shadow-sm"
                        : "text-zinc-700 hover:text-zinc-950",
                    ].join(" ")}
                  >
                    {x.label}
                  </button>
                ))}
              </div>

              {(activeTag || query.trim()) && (
                <button
                  type="button"
                  onClick={() => {
                    setActiveTag(null);
                    setQuery("");
                    setLimit(8);
                  }}
                  className="nicor-btn-subtle text-xs"
                >
                  Сбросить фильтры
                </button>
              )}
            </div>
          </div>

          {/* Tags row */}
          <div className="flex flex-wrap gap-2 border-t nicor-border px-4 py-3">
            <button
              type="button"
              onClick={() => setActiveTag(null)}
              className={[
                "nicor-chip",
                !activeTag ? "bg-white/80" : "",
              ].join(" ")}
            >
              Все темы
            </button>

            {allTags.map((t) => (
              <button
                key={t}
                type="button"
                onClick={() => {
                  setActiveTag(t);
                  setLimit(8);
                }}
                className={[
                  "nicor-chip",
                  activeTag === t ? "bg-white/85" : "",
                ].join(" ")}
              >
                {t}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Grid */}
      <section className="nicor-container mt-6 md:mt-8 pb-14">
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {visible.map((a) => (
            <Link
              key={a.slug}
              href={`/articles/${a.slug}`}
              className="group nicor-card-premium p-5"
            >
              <div className="relative z-10">
                <div className="flex flex-wrap items-center gap-2">
                  {levelPill(a.level)}
                  <span className="nicor-badge">
                    <Clock className="h-3.5 w-3.5" />
                    {a.readTime} мин
                  </span>
                  <span className="text-xs text-zinc-500">{formatRuDate(a.date)}</span>
                </div>

                <div className="mt-3 text-base font-semibold leading-snug tracking-[-0.01em] text-zinc-950">
                  {a.title}
                </div>

                <div className="mt-2 text-sm text-zinc-700">
                  {a.excerpt}
                </div>

                <div className="mt-4 flex flex-wrap gap-2">
                  {a.tags.slice(0, 3).map((t) => (
                    <span key={t} className="nicor-chip text-[11px]">
                      {t}
                    </span>
                  ))}
                  {a.tags.length > 3 && (
                    <span className="nicor-chip text-[11px] opacity-80">
                      +{a.tags.length - 3}
                    </span>
                  )}
                </div>

                <div className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-zinc-800 group-hover:text-zinc-950">
                  Читать <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Empty */}
        {filtered.length === 0 && (
          <div className="mt-10 nicor-panel-premium">
            <div className="relative z-10">
              <div className="text-sm font-semibold">Ничего не найдено</div>
              <div className="mt-2 text-sm text-zinc-700">
                Попробуй другой тег или убери часть запроса.
              </div>
            </div>
          </div>
        )}

        {/* Load more */}
        {hasMore && (
          <div className="mt-8 flex justify-center">
            <button
              type="button"
              onClick={() => setLimit((x) => x + 6)}
              className="nicor-btn-brand"
            >
              Показать ещё <ArrowRight className="h-4 w-4 opacity-90" />
            </button>
          </div>
        )}

        {/* Bottom note */}
        <div className="mt-10 text-center text-xs text-zinc-500">
          Раздел будет расширяться: серии, “гайд-маршруты”, мини-чек-листы под скачивание.
        </div>
      </section>
    </div>
  );
}