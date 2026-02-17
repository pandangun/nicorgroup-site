import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  CheckCircle2,
  Clock,
  ShieldCheck,
  MapPin,
  PhoneCall,
  Sparkles,
  Camera,
  FileText,
  Droplets,
  Flame,
  Wrench,
} from "lucide-react";

function HeroIllustration() {
  return (
    <div className="relative nicor-card-premium nicor-noise overflow-hidden p-6 md:p-8">
      <div className="flex items-center justify-between gap-4">
        <div>
          <div className="text-sm font-semibold text-zinc-900">
            Быстрый расчёт по фото
          </div>
          <div className="mt-1 text-sm text-zinc-600">
            Пришли фото и короткое описание задачи. Ответим диапазоном цены и ближайшим окном.
          </div>
        </div>

        <span className="nicor-chip">
          <Sparkles className="h-3.5 w-3.5" />
          без спама
        </span>
      </div>

      <div className="mt-6 grid gap-4 md:grid-cols-2">
        <div className="nicor-glass nicor-border border p-4">
          <div className="flex items-center gap-2 text-sm font-semibold text-zinc-900">
            <Camera className="h-4 w-4" />
            Что прислать
          </div>
          <ul className="mt-2 space-y-2 text-sm text-zinc-700">
            <li className="flex gap-2">
              <CheckCircle2 className="mt-0.5 h-4 w-4 text-zinc-900" />
              2–4 фото узла или санузла общий план и крупно
            </li>
            <li className="flex gap-2">
              <CheckCircle2 className="mt-0.5 h-4 w-4 text-zinc-900" />
              Район и адрес, этаж, есть ли лифт и парковка
            </li>
            <li className="flex gap-2">
              <CheckCircle2 className="mt-0.5 h-4 w-4 text-zinc-900" />
              Что нужно сделать замена или монтаж с нуля
            </li>
          </ul>
        </div>

        <div className="nicor-glass nicor-border border p-4">
          <div className="flex items-center gap-2 text-sm font-semibold text-zinc-900">
            <FileText className="h-4 w-4" />
            Прозрачные условия
          </div>
          <div className="mt-2 grid gap-2 text-sm text-zinc-700">
            <div className="flex items-center gap-2">
              <ShieldCheck className="h-4 w-4 text-zinc-900" />
              Смета фиксируется до начала работ
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-zinc-900" />
              Контроль герметичности и проверка узлов
            </div>
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4 text-zinc-900" />
              Часто выезжаем в день обращения
            </div>
          </div>
        </div>
      </div>

      {/* место под реальные фото работ */}
      <div className="mt-6 rounded-[28px] border nicor-border bg-white/70 p-4">
        <div className="text-sm font-semibold text-zinc-900">Фото работ</div>
        <div className="mt-3 grid gap-3 sm:grid-cols-3">
          <div className="aspect-[4/3] rounded-2xl border nicor-border bg-zinc-50" />
          <div className="aspect-[4/3] rounded-2xl border nicor-border bg-zinc-50" />
          <div className="aspect-[4/3] rounded-2xl border nicor-border bg-zinc-50" />
        </div>
        <div className="mt-3 text-xs text-zinc-500">
          Позже подставим реальные фото и сделаем слайдер до и после.
        </div>
      </div>

      <div className="mt-5 grid gap-2 sm:grid-cols-2">
        <a
          href="tel:+79990000000"
          className="inline-flex items-center justify-center gap-2 rounded-[18px] border border-zinc-200 bg-white px-4 py-3 text-sm font-semibold text-zinc-900 shadow-sm active:scale-[0.99]"
        >
          <PhoneCall className="h-4 w-4" />
          Позвонить
        </a>

        <Link
          href="/contacts#lead"
          className="inline-flex items-center justify-center gap-2 rounded-[18px] px-4 py-3 text-sm font-semibold text-white shadow-md active:scale-[0.99]"
          style={{
            backgroundImage:
              "linear-gradient(120deg, rgba(24,24,27,1), rgba(39,39,42,1), rgba(24,24,27,1))",
          }}
        >
          Отправить фото <ArrowRight className="h-4 w-4 opacity-90" />
        </Link>
      </div>

      <div className="mt-3 text-xs text-zinc-500">
        Сначала даём диапазон, затем фиксируем смету до старта работ.
      </div>
    </div>
  );
}

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* BACKGROUND */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0">
          <Image
            src="/images/plumber-hero.png"
            alt=""
            fill
            priority
            sizes="100vw"
            className="
              object-cover
              object-right
              scale-[1.04]
              brightness-[1.06]
              contrast-[0.98]
              saturate-[0.95]
            "
          />
        </div>

        <div
          className="
            absolute inset-0
            bg-[linear-gradient(90deg,rgba(255,255,255,0.92)_0%,rgba(255,255,255,0.82)_38%,rgba(255,255,255,0.55)_62%,rgba(255,255,255,0.25)_82%,rgba(255,255,255,0.10)_100%)]
          "
        />
        <div className="absolute inset-0 bg-white/20" />
        <div className="absolute inset-0 bg-[radial-gradient(900px_520px_at_15%_10%,rgba(20,184,166,0.18),transparent_62%),radial-gradient(900px_520px_at_90%_15%,rgba(59,130,246,0.16),transparent_62%),radial-gradient(700px_420px_at_35%_95%,rgba(244,63,94,0.10),transparent_62%)]" />
        <div className="absolute inset-0 opacity-[0.040] [background-image:linear-gradient(to_right,rgba(0,0,0,.9)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,.9)_1px,transparent_1px)] [background-size:72px_72px]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_38%,rgba(0,0,0,0.10)_100%)]" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-[linear-gradient(180deg,transparent,rgba(248,250,252,1))]" />
      </div>

      {/* CONTENT: строго сверху вниз */}
      <div className="nicor-container relative flex flex-col items-center gap-10 py-14 md:py-20">
        {/* 1) Чипсы доверия */}
        <div className="w-full max-w-[900px] text-center">
          <div className="flex flex-wrap items-center justify-center gap-2">
            <span className="nicor-chip">
              <Clock className="h-3.5 w-3.5" />
              Выезд в день обращения
            </span>
            <span className="nicor-chip">
              <ShieldCheck className="h-3.5 w-3.5" />
              Договор и гарантия
            </span>
            <span className="nicor-chip">
              <MapPin className="h-3.5 w-3.5" />
              СПб и область
            </span>
            <span className="nicor-chip">
              <CheckCircle2 className="h-3.5 w-3.5" />
              Аккуратно, без грязи
            </span>
          </div>

          {/* 2) Заголовок */}
          <h1 className="mt-5 nicor-title">
            Сантехнические работы <span className="nicor-gradient-text">под ключ</span>
          </h1>

          {/* 3) SEO текст без тире */}
          <div className="mx-auto mt-4 max-w-[860px] space-y-3 text-zinc-700">
            <p className="text-base md:text-lg">
              Компания «НИКОР» выполняет сантехнические работы любой сложности в Санкт-Петербурге и Ленинградской области. Мы занимаемся монтажом отопления и тёплых полов, подключением сантехники, заменой узлов и модернизацией систем в квартирах, частных домах и коммерческих помещениях.
            </p>
            <p className="text-base md:text-lg">Работа начинается с внимательного обсуждения задачи и подготовки подробной сметы, чтобы все объёмы и решения были понятны заранее. После согласования стоимость остаётся фиксированной. В процессе мы тщательно проверяем каждый этап монтажа, соблюдаем аккуратность, защищаем отделку и по завершении приводим пространство в порядок.
              
            </p>
            <p className="text-base md:text-lg">
              Чтобы оценить объём работ, материалы и сроки, достаточно отправить фотографии объекта. Во многих случаях этого хватает для точного расчёта. Если задача требует детального изучения, мы организуем выезд и согласуем все нюансы на месте.
              Свяжитесь с нами удобным способом, и мы подготовим расчёт и предложим оптимальное время для выполнения работ.
            </p>
          </div>

          {/* 4) CTA */}
          <div className="mt-7 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link href="/contacts#lead" className="nicor-btn-primary">
              Рассчитать по фото <ArrowRight className="h-4 w-4 opacity-90" />
            </Link>
            <Link href="/services" className="nicor-btn-ghost">
              Смотреть услуги
            </Link>
          </div>

          {/* 5) Мини преимущества */}
          <div className="mt-10 grid gap-4 md:grid-cols-3 text-left">
            <div className="rounded-[22px] bg-white/80 p-4 shadow-[var(--shadow-sm)] nicor-ring-hover">
              <div className="text-sm font-semibold">Цена фиксируется</div>
              <div className="mt-1 text-sm text-zinc-600">
                Смета согласуется до старта работ.
              </div>
            </div>
            <div className="rounded-[22px] bg-white/80 p-4 shadow-[var(--shadow-sm)] nicor-ring-hover">
              <div className="text-sm font-semibold">Герметичность</div>
              <div className="mt-1 text-sm text-zinc-600">
                Проверка соединений и узлов на ключевых этапах.
              </div>
            </div>
            <div className="rounded-[22px] bg-white/80 p-4 shadow-[var(--shadow-sm)] nicor-ring-hover">
              <div className="text-sm font-semibold">Чистота</div>
              <div className="mt-1 text-sm text-zinc-600">
                Защита поверхностей и уборка после работ.
              </div>
            </div>
          </div>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3 text-sm text-zinc-700">
            <span className="inline-flex items-center gap-2">
              <PhoneCall className="h-4 w-4" />
              +7 (999) 000-00-00
            </span>
            <span className="text-zinc-400">•</span>
            <span>Ответим быстро и по делу</span>
          </div>
        </div>

        {/* 6) Блок услуг кнопками сверху вниз */}
        <div className="w-full max-w-[980px] rounded-[28px] border nicor-border bg-white/70 p-5 backdrop-blur">
          <div className="text-base font-semibold text-zinc-900">Направления работ</div>
          <div className="mt-3 grid gap-3 md:grid-cols-2">
            <Link
              href="/services/bathroom"
              className="group rounded-[22px] border nicor-border bg-white p-4 shadow-[var(--shadow-sm)] nicor-lift"
            >
              <div className="flex items-center gap-3">
                <div className="grid h-11 w-11 place-items-center rounded-2xl border nicor-border bg-white">
                  <Droplets className="h-5 w-5 text-zinc-900" />
                </div>
                <div className="min-w-0">
                  <div className="font-semibold">Санузел под ключ</div>
                  <div className="mt-1 text-sm text-zinc-600">
                    Разводка труб, инсталляция, душ или ванна, подключение.
                  </div>
                </div>
              </div>
              <div className="mt-3 inline-flex items-center gap-2 text-sm text-zinc-700 group-hover:text-zinc-950">
                Открыть страницу <ArrowRight className="h-4 w-4" />
              </div>
            </Link>

            <Link
              href="/services/floor-heating"
              className="group rounded-[22px] border nicor-border bg-white p-4 shadow-[var(--shadow-sm)] nicor-lift"
            >
              <div className="flex items-center gap-3">
                <div className="grid h-11 w-11 place-items-center rounded-2xl border nicor-border bg-white">
                  <Flame className="h-5 w-5 text-zinc-900" />
                </div>
                <div className="min-w-0">
                  <div className="font-semibold">Тёплый пол</div>
                  <div className="mt-1 text-sm text-zinc-600">
                    Укладка, коллектор, опрессовка, запуск и проверка.
                  </div>
                </div>
              </div>
              <div className="mt-3 inline-flex items-center gap-2 text-sm text-zinc-700 group-hover:text-zinc-950">
                Открыть страницу <ArrowRight className="h-4 w-4" />
              </div>
            </Link>

            <Link
              href="/services/heating"
              className="group rounded-[22px] border nicor-border bg-white p-4 shadow-[var(--shadow-sm)] nicor-lift"
            >
              <div className="flex items-center gap-3">
                <div className="grid h-11 w-11 place-items-center rounded-2xl border nicor-border bg-white">
                  <Flame className="h-5 w-5 text-zinc-900" />
                </div>
                <div className="min-w-0">
                  <div className="font-semibold">Отопление</div>
                  <div className="mt-1 text-sm text-zinc-600">
                    Котёл, радиаторы, узлы, балансировка, разводка по дому.
                  </div>
                </div>
              </div>
              <div className="mt-3 inline-flex items-center gap-2 text-sm text-zinc-700 group-hover:text-zinc-950">
                Открыть страницу <ArrowRight className="h-4 w-4" />
              </div>
            </Link>

            <Link
              href="/services/installation"
              className="group rounded-[22px] border nicor-border bg-white p-4 shadow-[var(--shadow-sm)] nicor-lift"
            >
              <div className="flex items-center gap-3">
                <div className="grid h-11 w-11 place-items-center rounded-2xl border nicor-border bg-white">
                  <Wrench className="h-5 w-5 text-zinc-900" />
                </div>
                <div className="min-w-0">
                  <div className="font-semibold">Установка сантехники</div>
                  <div className="mt-1 text-sm text-zinc-600">
                    Смесители, унитазы, сифоны, душевые системы, мелкий ремонт.
                  </div>
                </div>
              </div>
              <div className="mt-3 inline-flex items-center gap-2 text-sm text-zinc-700 group-hover:text-zinc-950">
                Открыть страницу <ArrowRight className="h-4 w-4" />
              </div>
            </Link>
          </div>
        </div>

        {/* 7) Нижний блок расчёта */}
        <div className="w-full max-w-[980px]">
          <HeroIllustration />
        </div>
      </div>
    </section>
  );
}
