"use client";

import Link from "next/link";
import Image from "next/image";
import { useMemo, useState } from "react";
import {
  ArrowRight,
  BadgeCheck,
  CheckCircle2,
  Clock,
  Flame,
  ShieldCheck,
  Sparkles,
  Wrench,
  Droplets,
} from "lucide-react";

function cn(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

/** -----------------------------
 *  Pricing model (simple & honest)
 *  -----------------------------
 *  This is NOT final pricing; it's an estimator for lead-gen.
 *  You can tune these numbers later without touching layout.
 */
function formatRUB(n: number) {
  return new Intl.NumberFormat("ru-RU").format(Math.round(n));
}

type SystemType = "new" | "upgrade";
type Complexity = "simple" | "standard" | "complex";
type MaterialTier = "standard" | "pro";

const baseWorkPerM2: Record<Complexity, number> = {
  simple: 1400,
  standard: 1800,
  complex: 2300,
};

const baseMaterialsPerM2: Record<MaterialTier, number> = {
  standard: 900,
  pro: 1300,
};

const optionsPrice = {
  collectorNode: 18000, // коллекторный узел (ориентир)
  pressureTest: 3500, // опрессовка/акт
  insulation: 450, // доп. слой/материал (на м2)
};

function estimate({
  area,
  system,
  complexity,
  tier,
  loops,
  withCollector,
  withTest,
  withInsulation,
}: {
  area: number;
  system: SystemType;
  complexity: Complexity;
  tier: MaterialTier;
  loops: number;
  withCollector: boolean;
  withTest: boolean;
  withInsulation: boolean;
}) {
  const a = Math.max(1, Math.min(500, area || 0));

  const work = a * baseWorkPerM2[complexity] * (system === "upgrade" ? 1.15 : 1);
  const materials = a * baseMaterialsPerM2[tier];

  // “петли” увеличивают труд/материалы слегка (разница в раскладке/подводке)
  const loopsFactor = 1 + Math.max(0, loops - 1) * 0.04;

  const opts =
    (withCollector ? optionsPrice.collectorNode : 0) +
    (withTest ? optionsPrice.pressureTest : 0) +
    (withInsulation ? a * optionsPrice.insulation : 0);

  const subtotal = (work + materials) * loopsFactor + opts;

  // диапазон, чтобы это выглядело честно и не было “обманки”
  const min = subtotal * 0.9;
  const max = subtotal * 1.15;

  return {
    min,
    max,
    breakdown: {
      work,
      materials,
      opts,
    },
  };
}

const trustCards = [
  {
    title: "Договорённости до старта",
    desc: "Фиксируем объём и логику цены до выезда/монтажа.",
    icon: BadgeCheck,
  },
  {
    title: "Опрессовка и проверка",
    desc: "Делаем контроль герметичности и спокойную сдачу.",
    icon: Droplets,
  },
  {
    title: "Аккуратно и чисто",
    desc: "Защита поверхностей, порядок на объекте, уборка.",
    icon: Sparkles,
  },
  {
    title: "Гарантия",
    desc: "Работаем как инженеры: сборка узлов, тест, сдача.",
    icon: ShieldCheck,
  },
];

const packages = [
  {
    name: "Стандарт",
    tagline: "Базовый тёплый пол без лишнего.",
    priceHint: "от 1 800 ₽/м²",
    bullets: [
      "Укладка контуров по схеме",
      "Подключение к коллектору (если есть)",
      "Крепёж, герметизация, контроль",
      "Рекомендации по стяжке/запуску",
    ],
    accent: "border-zinc-200",
  },
  {
    name: "Комфорт",
    tagline: "Оптимум по цене/качеству для квартиры/дома.",
    priceHint: "от 2 300 ₽/м²",
    bullets: [
      "План раскладки контуров",
      "Коллекторный узел (по ситуации)",
      "Опрессовка и контроль герметичности",
      "Сдача + рекомендации по эксплуатации",
    ],
    accent: "border-zinc-900/15",
    featured: true,
  },
  {
    name: "Под ключ",
    tagline: "Когда нужно закрыть всё целиком.",
    priceHint: "индивидуально",
    bullets: [
      "Подбор материалов и комплектации",
      "Коллектор, узлы, редуктор/фильтры (опц.)",
      "Опрессовка + акт (по запросу)",
      "Сдача как проекта: чисто и понятно",
    ],
    accent: "border-zinc-200",
  },
];

const gallery = [
  { src: "/images/floor/01.jpg", alt: "Укладка контуров тёплого пола" },
  { src: "/images/floor/02.jpg", alt: "Коллекторный узел и подключение" },
  { src: "/images/floor/03.jpg", alt: "Опрессовка и тест герметичности" },
  { src: "/images/floor/04.jpg", alt: "Готовая раскладка перед стяжкой" },
];

const includes = [
  "Раскладка и укладка контуров по схеме",
  "Подводка к коллектору / узлам (по ситуации)",
  "Герметизация соединений и контроль",
  "Консультация по запуску и режимам прогрева",
  "Уборка зоны работ",
];

const excludes = [
  "Стяжка и плиточные работы (если не согласовано отдельно)",
  "Электрика/подключение автоматики (по отдельной задаче)",
  "Скрытые дефекты основания без предварительного осмотра",
  "Материалы и оборудование (можем помочь с подбором)",
];

const faq = [
  {
    q: "Сколько стоит тёплый пол за м²?",
    a: "Зависит от основания, количества контуров, узлов и сложности. Калькулятор выше даёт честный диапазон. Финал — после фото/плана.",
  },
  {
    q: "Делаете опрессовку?",
    a: "Да. Это ключевой этап, чтобы исключить течи до стяжки. По запросу — акт/фиксация.",
  },
  {
    q: "Работаете с моими материалами?",
    a: "Да. Но заранее проверим совместимость и комплектность, чтобы не было остановок и лишних трат.",
  },
  {
    q: "Можно сделать быстро?",
    a: "Можно, если объект готов и материалы на месте. Скажем ближайшее окно после фото/плана.",
  },
];

export default function Page() {
  // Calculator state
  const [area, setArea] = useState<number>(25);
  const [system, setSystem] = useState<SystemType>("new");
  const [complexity, setComplexity] = useState<Complexity>("standard");
  const [tier, setTier] = useState<MaterialTier>("standard");
  const [loops, setLoops] = useState<number>(2);
  const [withCollector, setWithCollector] = useState<boolean>(true);
  const [withTest, setWithTest] = useState<boolean>(true);
  const [withInsulation, setWithInsulation] = useState<boolean>(false);

  const est = useMemo(
    () =>
      estimate({
        area,
        system,
        complexity,
        tier,
        loops,
        withCollector,
        withTest,
        withInsulation,
      }),
    [area, system, complexity, tier, loops, withCollector, withTest, withInsulation]
  );

  return (
    <div>
      {/* Top strip */}
      <section className="border-b bg-white/70">
        <div className="nicor-container py-3">
          <div className="flex flex-wrap items-center justify-between gap-2 text-sm text-zinc-600">
            <div className="inline-flex items-center gap-2">
              <Flame className="h-4 w-4" />
              Тёплый пол • СПб и область • Аккуратно • Гарантия
            </div>
            <div className="inline-flex items-center gap-2">
              <Clock className="h-4 w-4" />
              Выезд в день обращения — если есть окно
            </div>
          </div>
        </div>
      </section>

      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_18%,rgba(20,184,166,0.10),transparent_55%),radial-gradient(circle_at_80%_18%,rgba(59,130,246,0.10),transparent_55%),radial-gradient(circle_at_55%_90%,rgba(244,63,94,0.06),transparent_60%)]" />
        <div className="nicor-container relative py-12 md:py-16">
          <div className="grid gap-8 md:grid-cols-2 md:items-start">
            {/* Left */}
            <div className="nicor-noise">
              <div className="inline-flex items-center gap-2 rounded-full border bg-white/80 px-3 py-1 text-xs text-zinc-700">
                <CheckCircle2 className="h-3.5 w-3.5" />
                Укладка тёплого пола “под ключ” • Инженерный подход
              </div>

              <h1 className="mt-4 text-3xl font-semibold leading-tight tracking-tight md:text-5xl">
                Водяной тёплый пол{" "}
                <span className="text-zinc-500">— тепло, которое не подводит</span>
              </h1>

              <p className="mt-4 text-zinc-600 md:text-lg">
                План раскладки, контуры, коллектор, узлы, опрессовка. Сдаём работу так, чтобы можно было
                спокойно заливать стяжку и включать без “сюрпризов”.
              </p>

              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/contacts#lead"
                  className="nicor-btn-primary inline-flex items-center justify-center gap-2 rounded-2xl px-5 py-3"
                >
                  Рассчитать по фото <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href="#calc"
                  className="nicor-btn-ghost inline-flex items-center justify-center rounded-2xl px-5 py-3"
                >
                  Калькулятор по площади
                </Link>
              </div>

              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                {trustCards.slice(0, 2).map((t) => {
                  const Icon = t.icon;
                  return (
                    <div key={t.title} className="nicor-card p-5">
                      <div className="flex items-start gap-3">
                        <div className="grid h-10 w-10 place-items-center rounded-2xl border bg-white">
                          <Icon className="h-5 w-5" />
                        </div>
                        <div>
                          <div className="font-semibold">{t.title}</div>
                          <div className="mt-1 text-sm text-zinc-600">{t.desc}</div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="mt-6 flex flex-wrap gap-2">
                <span className="nicor-chip">Опрессовка</span>
                <span className="nicor-chip">Коллекторный узел</span>
                <span className="nicor-chip">План раскладки</span>
                <span className="nicor-chip">Уборка после работ</span>
              </div>
            </div>

            {/* Right panel: Calculator preview */}
            <div className="relative">
              <div className="nicor-card overflow-hidden">
                <div className="p-6">
                  <div className="flex items-center justify-between gap-3">
                    <div>
                      <div className="text-sm font-semibold">Оценка по площади</div>
                      <div className="mt-1 text-sm text-zinc-600">
                        Быстрый диапазон стоимости (работы + материалы). Финал — после фото/плана.
                      </div>
                    </div>
                    <div className="nicor-chip">калькулятор</div>
                  </div>

                  <div className="mt-5 rounded-2xl border bg-zinc-50 p-4">
                    <div className="text-xs text-zinc-600">Ваш ориентир</div>
                    <div className="mt-1 flex flex-wrap items-end gap-x-2">
                      <div className="text-2xl font-semibold">
                        {formatRUB(est.min)} – {formatRUB(est.max)} ₽
                      </div>
                      <div className="text-sm text-zinc-500">за {Math.max(1, area)} м²</div>
                    </div>
                    <div className="mt-3 grid gap-2 text-sm text-zinc-700">
                      <div className="flex items-center justify-between">
                        <span className="text-zinc-600">Работы (ориентир)</span>
                        <span className="font-medium">{formatRUB(est.breakdown.work)} ₽</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-zinc-600">Материалы (ориентир)</span>
                        <span className="font-medium">{formatRUB(est.breakdown.materials)} ₽</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-zinc-600">Опции/узлы</span>
                        <span className="font-medium">{formatRUB(est.breakdown.opts)} ₽</span>
                      </div>
                    </div>

                    <Link
                      href="/contacts#lead"
                      className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-zinc-900 px-4 py-3 text-sm text-white hover:bg-zinc-800"
                    >
                      Получить точный расчёт по фото <ArrowRight className="h-4 w-4" />
                    </Link>

                    <div className="mt-2 text-xs text-zinc-500">
                      *Диапазон честный: зависит от узлов, основания, количества контуров и доступа.
                    </div>
                  </div>
                </div>

                <div className="border-t bg-white p-5">
                  <div className="grid gap-3 sm:grid-cols-2">
                    {trustCards.slice(2, 4).map((t) => {
                      const Icon = t.icon;
                      return (
                        <div key={t.title} className="rounded-2xl border bg-white p-4">
                          <div className="flex items-start gap-3">
                            <div className="grid h-10 w-10 place-items-center rounded-2xl border bg-white">
                              <Icon className="h-5 w-5" />
                            </div>
                            <div>
                              <div className="text-sm font-semibold">{t.title}</div>
                              <div className="mt-1 text-sm text-zinc-600">{t.desc}</div>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>

              <div className="pointer-events-none absolute -top-4 right-6 hidden rounded-full border bg-white/80 px-3 py-1 text-xs text-zinc-700 shadow-sm md:inline-flex">
                <Sparkles className="mr-2 h-3.5 w-3.5" />
                премиум-монтаж
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CALCULATOR SECTION */}
      <section id="calc" className="border-t bg-white">
        <div className="nicor-container py-12">
          <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
            <div>
              <h2 className="text-2xl font-semibold md:text-3xl">Калькулятор тёплого пола</h2>
              <p className="mt-2 text-zinc-600 md:text-lg">
                Быстро прикинем диапазон стоимости по площади и конфигурации.
              </p>
            </div>
            <Link href="/contacts#lead" className="nicor-btn-ghost inline-flex items-center justify-center rounded-2xl px-4 py-2 text-sm">
              Рассчитать по фото точнее
            </Link>
          </div>

          <div className="mt-6 grid gap-6 lg:grid-cols-5">
            {/* Controls */}
            <div className="lg:col-span-3">
              <div className="nicor-card p-6">
                <div className="grid gap-4 md:grid-cols-2">
                  <div>
                    <label className="text-sm font-semibold">Площадь, м²</label>
                    <div className="mt-2 flex items-center gap-3">
                      <input
                        className="nicor-input w-full"
                        type="number"
                        min={1}
                        max={500}
                        value={area}
                        onChange={(e) => setArea(Number(e.target.value))}
                        placeholder="Например, 25"
                      />
                      <div className="nicor-chip">м²</div>
                    </div>
                    <input
                      className="mt-3 w-full"
                      type="range"
                      min={5}
                      max={150}
                      value={area}
                      onChange={(e) => setArea(Number(e.target.value))}
                    />
                    <div className="mt-1 text-xs text-zinc-500">Подходит для быстрого ориентирования.</div>
                  </div>

                  <div>
                    <label className="text-sm font-semibold">Количество контуров</label>
                    <div className="mt-2 flex items-center gap-3">
                      <input
                        className="nicor-input w-full"
                        type="number"
                        min={1}
                        max={12}
                        value={loops}
                        onChange={(e) => setLoops(Number(e.target.value))}
                      />
                      <div className="nicor-chip">шт</div>
                    </div>
                    <div className="mt-2 text-xs text-zinc-500">
                      Больше контуров → больше подводок и аккуратной работы.
                    </div>
                  </div>

                  <div>
                    <label className="text-sm font-semibold">Тип объекта</label>
                    <div className="mt-2 grid grid-cols-2 gap-2">
                      <button
                        type="button"
                        className={cn(
                          "rounded-2xl border px-4 py-3 text-left text-sm transition",
                          system === "new" ? "bg-zinc-900 text-white border-zinc-900" : "bg-white hover:bg-zinc-50"
                        )}
                        onClick={() => setSystem("new")}
                      >
                        <div className="font-semibold">Новый монтаж</div>
                        <div className={cn("mt-1 text-xs", system === "new" ? "text-white/80" : "text-zinc-500")}>
                          С нуля по плану
                        </div>
                      </button>
                      <button
                        type="button"
                        className={cn(
                          "rounded-2xl border px-4 py-3 text-left text-sm transition",
                          system === "upgrade" ? "bg-zinc-900 text-white border-zinc-900" : "bg-white hover:bg-zinc-50"
                        )}
                        onClick={() => setSystem("upgrade")}
                      >
                        <div className="font-semibold">Доработка/апгрейд</div>
                        <div className={cn("mt-1 text-xs", system === "upgrade" ? "text-white/80" : "text-zinc-500")}>
                          С существующими узлами
                        </div>
                      </button>
                    </div>
                  </div>

                  <div>
                    <label className="text-sm font-semibold">Сложность</label>
                    <div className="mt-2 grid grid-cols-3 gap-2">
                      {(
                        [
                          ["simple", "Просто"],
                          ["standard", "Стандарт"],
                          ["complex", "Сложно"],
                        ] as Array<[Complexity, string]>
                      ).map(([key, label]) => (
                        <button
                          key={key}
                          type="button"
                          className={cn(
                            "rounded-2xl border px-3 py-3 text-sm transition",
                            complexity === key ? "bg-zinc-900 text-white border-zinc-900" : "bg-white hover:bg-zinc-50"
                          )}
                          onClick={() => setComplexity(key)}
                        >
                          {label}
                        </button>
                      ))}
                    </div>
                    <div className="mt-2 text-xs text-zinc-500">
                      “Сложно” — много зон, сложный доступ, больше узлов.
                    </div>
                  </div>

                  <div>
                    <label className="text-sm font-semibold">Материалы</label>
                    <div className="mt-2 grid grid-cols-2 gap-2">
                      <button
                        type="button"
                        className={cn(
                          "rounded-2xl border px-4 py-3 text-left text-sm transition",
                          tier === "standard" ? "bg-zinc-900 text-white border-zinc-900" : "bg-white hover:bg-zinc-50"
                        )}
                        onClick={() => setTier("standard")}
                      >
                        <div className="font-semibold">Стандарт</div>
                        <div className={cn("mt-1 text-xs", tier === "standard" ? "text-white/80" : "text-zinc-500")}>
                          Надёжно и честно
                        </div>
                      </button>
                      <button
                        type="button"
                        className={cn(
                          "rounded-2xl border px-4 py-3 text-left text-sm transition",
                          tier === "pro" ? "bg-zinc-900 text-white border-zinc-900" : "bg-white hover:bg-zinc-50"
                        )}
                        onClick={() => setTier("pro")}
                      >
                        <div className="font-semibold">Pro</div>
                        <div className={cn("mt-1 text-xs", tier === "pro" ? "text-white/80" : "text-zinc-500")}>
                          Под задачу и ресурс
                        </div>
                      </button>
                    </div>
                  </div>

                  <div>
                    <label className="text-sm font-semibold">Опции</label>
                    <div className="mt-2 grid gap-2">
                      {[
                        {
                          key: "withCollector",
                          label: "Коллекторный узел",
                          desc: "Если узла нет или нужно собрать по уму",
                          checked: withCollector,
                          toggle: () => setWithCollector((v) => !v),
                        },
                        {
                          key: "withTest",
                          label: "Опрессовка",
                          desc: "Контроль герметичности до стяжки",
                          checked: withTest,
                          toggle: () => setWithTest((v) => !v),
                        },
                        {
                          key: "withInsulation",
                          label: "Доп. изоляция (ориентир)",
                          desc: "Если нужно добавить слой/материал",
                          checked: withInsulation,
                          toggle: () => setWithInsulation((v) => !v),
                        },
                      ].map((o) => (
                        <button
                          key={o.key}
                          type="button"
                          onClick={o.toggle}
                          className={cn(
                            "flex items-start justify-between gap-4 rounded-2xl border bg-white px-4 py-3 text-left transition hover:bg-zinc-50"
                          )}
                        >
                          <div>
                            <div className="text-sm font-semibold">{o.label}</div>
                            <div className="mt-1 text-xs text-zinc-500">{o.desc}</div>
                          </div>
                          <div
                            className={cn(
                              "mt-1 h-5 w-9 rounded-full border p-0.5 transition",
                              o.checked ? "bg-zinc-900 border-zinc-900" : "bg-white"
                            )}
                          >
                            <div
                              className={cn(
                                "h-4 w-4 rounded-full bg-white transition",
                                o.checked ? "translate-x-4" : "translate-x-0"
                              )}
                            />
                          </div>
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="mt-6 rounded-2xl border bg-zinc-50 p-4 text-sm text-zinc-600">
                  Хотите точнее? Пришлите фото/видео пола, где будет укладка, и место коллектора — скажем точный диапазон и ближайшее окно.
                </div>
              </div>
            </div>

            {/* Result */}
            <div className="lg:col-span-2">
              <div className="nicor-card p-6">
                <div className="text-sm font-semibold">Ваш ориентир</div>
                <div className="mt-2 text-3xl font-semibold">
                  {formatRUB(est.min)} – {formatRUB(est.max)} ₽
                </div>
                <div className="mt-2 text-sm text-zinc-600">
                  {Math.max(1, area)} м² • {loops} контур(а) • {system === "new" ? "новый монтаж" : "апгрейд"} •{" "}
                  {complexity === "simple" ? "просто" : complexity === "standard" ? "стандарт" : "сложно"}
                </div>

                <div className="mt-5 space-y-2 text-sm text-zinc-700">
                  <div className="flex items-center justify-between">
                    <span className="text-zinc-600">Работы</span>
                    <span className="font-medium">{formatRUB(est.breakdown.work)} ₽</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-zinc-600">Материалы</span>
                    <span className="font-medium">{formatRUB(est.breakdown.materials)} ₽</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-zinc-600">Опции</span>
                    <span className="font-medium">{formatRUB(est.breakdown.opts)} ₽</span>
                  </div>
                </div>

                <Link
                  href="/contacts#lead"
                  className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-zinc-900 px-4 py-3 text-sm text-white hover:bg-zinc-800"
                >
                  Получить точный расчёт по фото <ArrowRight className="h-4 w-4" />
                </Link>

                <div className="mt-3 text-xs text-zinc-500">
                  *Это ориентир. Если основание сложное или нужна автоматика/узлы — пересчитаем честно.
                </div>
              </div>

              <div className="mt-4 nicor-card p-6">
                <div className="flex items-center gap-2 font-semibold">
                  <Wrench className="h-5 w-5" />
                  Что нужно для точного расчёта
                </div>
                <ul className="mt-3 space-y-2 text-sm text-zinc-700">
                  {[
                    "Фото пола и зон, где будет укладка",
                    "План/эскиз помещений (если есть)",
                    "Где будет коллектор и как подведены трубы",
                    "Какая финишная отделка (плитка/ламинат/др.)",
                  ].map((x) => (
                    <li key={x} className="flex gap-2">
                      <CheckCircle2 className="mt-0.5 h-4 w-4" />
                      {x}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PACKAGES */}
      <section className="border-t bg-white">
        <div className="nicor-container py-12">
          <div className="flex items-end justify-between gap-4">
            <div>
              <h2 className="text-2xl font-semibold md:text-3xl">Пакеты работ</h2>
              <p className="mt-2 text-zinc-600 md:text-lg">
                Выберите подходящий формат — или просто пришлите фото, и мы предложим лучший вариант.
              </p>
            </div>
            <Link href="/contacts#lead" className="hidden rounded-2xl border px-4 py-2 text-sm hover:bg-zinc-50 md:inline-flex">
              Подобрать вариант
            </Link>
          </div>

          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {packages.map((p) => (
              <div
                key={p.name}
                className={cn(
                  "nicor-card p-6",
                  p.featured && "ring-1 ring-zinc-900/10 shadow-md"
                )}
              >
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <div className="text-sm text-zinc-500">{p.tagline}</div>
                    <div className="mt-2 text-xl font-semibold">{p.name}</div>
                    <div className="mt-2 inline-flex items-center gap-2 rounded-full border bg-white px-3 py-1 text-xs text-zinc-700">
                      <Flame className="h-3.5 w-3.5" />
                      {p.priceHint}
                    </div>
                  </div>
                  {p.featured && (
                    <div className="nicor-chip">рекомендуем</div>
                  )}
                </div>

                <ul className="mt-4 space-y-2 text-sm text-zinc-700">
                  {p.bullets.map((x) => (
                    <li key={x} className="flex gap-2">
                      <CheckCircle2 className="mt-0.5 h-4 w-4" />
                      {x}
                    </li>
                  ))}
                </ul>

                <Link
                  href="/contacts#lead"
                  className={cn(
                    "mt-6 inline-flex w-full items-center justify-center gap-2 rounded-2xl px-4 py-3 text-sm",
                    p.featured ? "bg-zinc-900 text-white hover:bg-zinc-800" : "border hover:bg-zinc-50"
                  )}
                >
                  {p.featured ? "Выбрать «Комфорт»" : "Получить расчёт"} <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section className="border-t bg-white">
        <div className="nicor-container py-12">
          <div className="flex items-end justify-between gap-4">
            <div>
              <h2 className="text-2xl font-semibold md:text-3xl">Как выглядит работа</h2>
              <p className="mt-2 text-zinc-600 md:text-lg">
                Фото-галерея. Поменяешь картинки — будет “дорого и богато” сразу.
              </p>
            </div>
            <div className="nicor-chip">галерея</div>
          </div>

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {gallery.map((g) => (
              <div key={g.src} className="nicor-card overflow-hidden">
                <div className="relative aspect-[16/10] bg-zinc-100">
                  {/* If images don't exist yet, it will show broken; create placeholders in /public/images/floor */}
                  <Image
                    src={g.src}
                    alt={g.alt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                    priority={false}
                  />
                </div>
                <div className="p-4">
                  <div className="text-sm font-semibold">{g.alt}</div>
                  <div className="mt-1 text-sm text-zinc-600">
                    Премиум-монтаж: аккуратная раскладка, чистые узлы, тест перед стяжкой.
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 nicor-card p-6">
            <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
              <div>
                <div className="inline-flex items-center gap-2 rounded-full border bg-white/80 px-3 py-1 text-xs text-zinc-700">
                  <Sparkles className="h-3.5 w-3.5" />
                  Сдача без нервов
                </div>
                <div className="mt-3 text-xl font-semibold md:text-2xl">
                  Хотите так же аккуратно? Давайте оценим по фото
                </div>
                <div className="mt-2 text-zinc-600">
                  2–3 фото → диапазон цены → ближайшее окно → договорённости до старта.
                </div>
              </div>
              <div className="flex w-full gap-3 md:w-auto">
                <Link
                  href="/contacts#lead"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-zinc-900 px-5 py-3 text-sm text-white hover:bg-zinc-800 md:w-auto"
                >
                  Рассчитать по фото <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href="/prices"
                  className="inline-flex w-full items-center justify-center rounded-2xl border px-5 py-3 text-sm hover:bg-zinc-50 md:w-auto"
                >
                  Цены
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* INCLUDES / EXCLUDES */}
      <section className="border-t bg-white">
        <div className="nicor-container py-12">
          <div className="grid gap-6 md:grid-cols-2">
            <div className="nicor-card p-6">
              <div className="flex items-center gap-2 font-semibold">
                <CheckCircle2 className="h-5 w-5" />
                Что входит
              </div>
              <ul className="mt-4 space-y-2 text-sm text-zinc-700">
                {includes.map((x) => (
                  <li key={x} className="flex gap-2">
                    <CheckCircle2 className="mt-0.5 h-4 w-4" />
                    {x}
                  </li>
                ))}
              </ul>
            </div>

            <div className="nicor-card p-6">
              <div className="flex items-center gap-2 font-semibold">
                <ShieldCheck className="h-5 w-5" />
                Что не входит (честно)
              </div>
              <ul className="mt-4 space-y-2 text-sm text-zinc-700">
                {excludes.map((x) => (
                  <li key={x} className="flex gap-2">
                    <CheckCircle2 className="mt-0.5 h-4 w-4" />
                    {x}
                  </li>
                ))}
              </ul>
              <div className="mt-4 rounded-2xl border bg-zinc-50 p-4 text-sm text-zinc-600">
                Если нужна стяжка/плитка/электрика — скажем заранее, что можем закрыть и чем лучше усилить проект.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="border-t bg-white">
        <div className="nicor-container py-12">
          <div>
            <h2 className="text-2xl font-semibold md:text-3xl">FAQ</h2>
            <p className="mt-2 text-zinc-600 md:text-lg">
              Коротко отвечаем на главные вопросы — без маркетинговой воды.
            </p>
          </div>

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {faq.map((f) => (
              <div key={f.q} className="nicor-card p-6">
                <div className="font-semibold">{f.q}</div>
                <div className="mt-2 text-sm text-zinc-600">{f.a}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mobile sticky CTA */}
      <div className="fixed inset-x-0 bottom-0 z-50 border-t bg-white/90 p-3 backdrop-blur md:hidden">
        <div className="nicor-container">
          <Link
            href="/contacts#lead"
            className="inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-zinc-900 px-4 py-3 text-sm text-white"
          >
            Рассчитать тёплый пол по фото <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
