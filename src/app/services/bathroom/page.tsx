import Link from "next/link";
import ServicePage from "@/components/ServicePage";
import { CheckCircle2, ShieldCheck, Clock, Sparkles, BadgeCheck, ArrowRight, MessageCircle } from "lucide-react";

const bullets = [
  "Подключение унитаза/инсталляции, раковины, душевой системы",
  "Замена/перенос выводов, сифоны, запорная арматура",
  "Аккуратная сборка узлов и проверка",
  "Опционально: бойлер, фильтры, редукторы давления",
];

const steps = [
  { title: "Согласование", desc: "Быстро уточняем: что ставим, где выводы, какие материалы, сроки и окно." },
  { title: "Защита + подготовка", desc: "Укрываем зоны работ, проверяем ввод/узлы, согласуем точки подключения." },
  { title: "Монтаж", desc: "Установка сантехники и узлов, подводка, герметизация, аккуратная сборка." },
  { title: "Тест", desc: "Проверяем соединения и герметичность. Контрольные фото/видео по желанию." },
  { title: "Сдача", desc: "Показываем, как пользоваться и обслуживать. Рекомендации по расходникам." },
];

const faq = [
  { q: "Вы работаете с моими материалами?", a: "Да. Перед стартом проверим совместимость и комплектность, чтобы не было сюрпризов." },
  { q: "Можно сделать быстро?", a: "Можно, если материалы уже закуплены и выводы готовы. Скажем ближайшее окно после фото/видео." },
  { q: "Даете гарантию?", a: "Да. Фиксируем договорённости до старта и даём гарантию на работы." },
];

const includes = [
  "Монтаж и подключение сантехники (унитаз/инсталляция, раковина, душ/смесители)",
  "Сифоны, гибкая подводка, запорная арматура, герметизация",
  "Проверка на течи и корректная работа узлов",
  "Уборка рабочего места после монтажа",
];

const excludes = [
  "Плиточные работы, электрика, отделка (если не согласовано отдельно)",
  "Демонтаж сложных конструкций/коробов без предварительного осмотра",
  "Материалы и сантехника (можем помочь с подбором)",
];

const trust = [
  { title: "Договорённости до старта", desc: "Фиксируем объём работ и логику цены до выезда/монтажа.", icon: BadgeCheck },
  { title: "Аккуратно и чисто", desc: "Защита поверхностей, бережная сборка, чистота после работ.", icon: Sparkles },
  { title: "Сроки без сказок", desc: "Называем окно и держим его. Если что-то меняется — предупреждаем заранее.", icon: Clock },
  { title: "Гарантия", desc: "Работаем как инженерная команда: проверка, тест, сдача.", icon: ShieldCheck },
];

export default function Page() {
  return (
    <div>
      {/* Premium top strip */}
      <section className="border-b bg-white/70">
        <div className="nicor-container py-3">
          <div className="flex flex-wrap items-center justify-between gap-2 text-sm text-zinc-600">
            <div className="inline-flex items-center gap-2">
              <ShieldCheck className="h-4 w-4" />
              Санузел под ключ • Договорённости до старта • Гарантия
            </div>
            <div className="inline-flex items-center gap-2">
              <Clock className="h-4 w-4" />
              Выезд в день обращения — если есть окно
            </div>
          </div>
        </div>
      </section>

      {/* Hero (selling layer) */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_18%,rgba(20,184,166,0.10),transparent_55%),radial-gradient(circle_at_80%_18%,rgba(59,130,246,0.10),transparent_55%),radial-gradient(circle_at_55%_90%,rgba(244,63,94,0.06),transparent_60%)]" />
        <div className="nicor-container relative py-12 md:py-16">
          <div className="grid gap-8 md:grid-cols-2 md:items-start">
            <div className="nicor-noise">
              <div className="inline-flex items-center gap-2 rounded-full border bg-white/80 px-3 py-1 text-xs text-zinc-700">
                <CheckCircle2 className="h-3.5 w-3.5" />
                Премиум-аккуратность • Без «сюрпризов»
              </div>

              <h1 className="mt-4 text-3xl font-semibold leading-tight tracking-tight md:text-5xl">
                Санузел под ключ{" "}
                <span className="text-zinc-500">— как инженерная система</span>
              </h1>

              <p className="mt-4 text-zinc-600 md:text-lg">
                Душ/ванна, унитаз, раковина, инсталляция, подводка. Собираем узлы аккуратно,
                тестируем и сдаём с понятной логикой цены.
              </p>

              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <Link href="/contacts#lead" className="nicor-btn-primary inline-flex items-center justify-center gap-2 rounded-2xl px-5 py-3">
                  Рассчитать по фото <ArrowRight className="h-4 w-4" />
                </Link>
                <Link href="/prices" className="nicor-btn-ghost inline-flex items-center justify-center rounded-2xl px-5 py-3">
                  Сориентироваться по цене
                </Link>
              </div>

              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                {trust.slice(0, 2).map((t) => {
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
                <span className="nicor-chip">СПб и область</span>
                <span className="nicor-chip">Уборка после работ</span>
                <span className="nicor-chip">Тест герметичности</span>
                <span className="nicor-chip">Подбор комплектующих</span>
              </div>
            </div>

            {/* Right selling panel */}
            <div className="relative">
              <div className="nicor-card overflow-hidden">
                <div className="p-6">
                  <div className="flex items-center justify-between gap-3">
                    <div>
                      <div className="text-sm font-semibold">Быстрый расчёт</div>
                      <div className="mt-1 text-sm text-zinc-600">
                        Пришлите фото/видео санузла и список сантехники — скажем диапазон цены и окно.
                      </div>
                    </div>
                    <div className="nicor-chip">24/7 мессенджер</div>
                  </div>

                  <div className="mt-5 grid gap-3">
                    <div className="rounded-2xl border bg-white p-4">
                      <div className="text-sm font-semibold">Что нужно прислать</div>
                      <ul className="mt-2 space-y-2 text-sm text-zinc-700">
                        {[
                          "1–2 фото места установки + общий план",
                          "Что ставим: унитаз/инсталляция/раковина/душ",
                          "Есть ли бойлер/фильтры/редуктор давления",
                          "Сроки: когда хотите начать",
                        ].map((x) => (
                          <li key={x} className="flex gap-2">
                            <CheckCircle2 className="mt-0.5 h-4 w-4" />
                            {x}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="rounded-2xl border bg-zinc-50 p-4">
                      <div className="flex items-center justify-between gap-3">
                        <div>
                          <div className="text-sm font-semibold">Ориентир по стоимости</div>
                          <div className="mt-1 text-sm text-zinc-600">
                            Скажем диапазон по фото. Финальная цена — после согласования объёма.
                          </div>
                        </div>
                        <div className="text-sm font-semibold">от 9 900 ₽</div>
                      </div>
                      <div className="mt-3 text-xs text-zinc-500">
                        *Это ориентир для простых подключений. Сложные узлы/переносы считаем отдельно.
                      </div>
                    </div>

                    <Link
                      href="/contacts#lead"
                      className="inline-flex items-center justify-center gap-2 rounded-2xl bg-zinc-900 px-4 py-3 text-sm text-white hover:bg-zinc-800"
                    >
                      <MessageCircle className="h-4 w-4" />
                      Отправить фото и получить расчёт
                    </Link>

                    <div className="text-xs text-zinc-500">
                      Ответ обычно в течение 10–30 минут (если рабочее время).
                    </div>
                  </div>
                </div>

                <div className="border-t bg-white p-5">
                  <div className="grid gap-3 sm:grid-cols-2">
                    {trust.slice(2, 4).map((t) => {
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

              {/* subtle badge */}
              <div className="pointer-events-none absolute -top-4 right-6 hidden rounded-full border bg-white/80 px-3 py-1 text-xs text-zinc-700 shadow-sm md:inline-flex">
                <Sparkles className="mr-2 h-3.5 w-3.5" />
                Премиум-монтаж
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main content via component */}
      <ServicePage
        title="Что входит в «санузел под ключ»"
        subtitle="Мы делаем сборку узлов и подключение так, чтобы после сдачи всё работало стабильно, без течей и нервов."
        bullets={bullets}
        steps={steps}
        faq={faq}
      />

      {/* Includes / Excludes */}
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
                Что не входит (чтобы было честно)
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
                Если нужны смежные работы — скажем сразу, что можем закрыть сами, а что лучше отдать профильным.
              </div>
            </div>
          </div>

          <div className="mt-8 nicor-card p-6">
            <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
              <div>
                <div className="inline-flex items-center gap-2 rounded-full border bg-white/80 px-3 py-1 text-xs text-zinc-700">
                  <Sparkles className="h-3.5 w-3.5" />
                  Быстро и аккуратно
                </div>
                <div className="mt-3 text-xl font-semibold md:text-2xl">
                  Готовы оценить по фото и предложить ближайшее окно
                </div>
                <div className="mt-2 text-zinc-600">
                  Напишите в мессенджер — ответим и дадим понятный диапазон.
                </div>
              </div>
              <div className="flex w-full gap-3 md:w-auto">
                <Link
                  href="/contacts#lead"
                  className="nicor-btn-primary inline-flex w-full items-center justify-center gap-2 rounded-2xl px-5 py-3 md:w-auto"
                >
                  Получить расчёт <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href="/services"
                  className="nicor-btn-ghost inline-flex w-full items-center justify-center rounded-2xl px-5 py-3 md:w-auto"
                >
                  Все услуги
                </Link>
              </div>
            </div>
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
            Рассчитать по фото <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
