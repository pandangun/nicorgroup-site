import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  CheckCircle2,
  Clock,
  ShieldCheck,
  MapPin,
  PhoneCall,
} from "lucide-react";

const PHONE_HREF = "+79006300974";

function HeroIllustration() {
  return (
    <div className="relative nicor-card-premium nicor-noise overflow-hidden p-6 md:p-8 nicor-animate-in nicor-delay-5">
      <div className="flex items-start justify-between gap-4">
        <div className="min-w-0">
          <div className="text-sm font-semibold text-zinc-900">
            Быстрый расчёт по заявке
          </div>
          <div className="mt-1 text-sm text-zinc-600">
            Пришлите фото и короткое описание задачи. Ответим диапазоном стоимости
            и предложим ближайшее окно.
          </div>
        </div>

        <span className="nicor-chip shrink-0">Без лишних ожиданий</span>
      </div>

      <div className="mt-6 grid gap-4 md:grid-cols-2">
        <div className="nicor-glass nicor-border border p-4">
          <div className="text-sm font-semibold text-zinc-900">
            Что важно указать
          </div>
          <ul className="mt-2 space-y-2 text-sm text-zinc-700">
            <li className="flex gap-2">
              <CheckCircle2 className="mt-0.5 h-4 w-4 text-zinc-900" />
              Фото узла/помещения: общий план + крупный фрагмент
            </li>
            <li className="flex gap-2">
              <CheckCircle2 className="mt-0.5 h-4 w-4 text-zinc-900" />
              Адрес и особенности доступа к объекту
            </li>
            <li className="flex gap-2">
              <CheckCircle2 className="mt-0.5 h-4 w-4 text-zinc-900" />
              Монтаж с нуля или модернизация существующей системы
            </li>
          </ul>
        </div>

        <div className="nicor-glass nicor-border border p-4">
          <div className="text-sm font-semibold text-zinc-900">
            Прозрачный порядок работы
          </div>
          <div className="mt-2 grid gap-2 text-sm text-zinc-700">
            <div className="flex items-center gap-2">
              <ShieldCheck className="h-4 w-4 text-zinc-900" />
              Стоимость фиксируется до начала работ
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-zinc-900" />
              Контроль ключевых соединений и узлов
            </div>
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4 text-zinc-900" />
              Часто выезжаем в день обращения
            </div>
          </div>
        </div>
      </div>

      <div className="mt-5 grid gap-2 sm:grid-cols-2">
        <a
          href={`tel:${PHONE_HREF}`}
          className="inline-flex items-center justify-center gap-2 rounded-[18px] border border-zinc-200 bg-white px-4 py-3 text-sm font-semibold text-zinc-900 shadow-sm active:scale-[0.99]"
        >
          <PhoneCall className="h-4 w-4" />
          Позвонить
        </a>

        <Link href="/contacts#message" className="nicor-btn-primary text-center">
          Оставить заявку <ArrowRight className="h-4 w-4 opacity-90" />
        </Link>
      </div>

      <div className="mt-3 text-xs text-zinc-500">
        Сначала даём диапазон, затем фиксируем смету до старта работ.
      </div>
    </div>
  );
}

/** Универсальный блок "картинка + заголовок поверх" (мобилка) */
function ImageTitleCard({
  src,
  alt,
  title,
}: {
  src: string;
  alt: string;
  title: string;
}) {
  return (
    <div className="nicor-photo">
      <div className="relative aspect-[16/10] md:aspect-[4/3]">
        <Image
          src={src}
          alt={alt}
          fill
          sizes="(max-width: 768px) 100vw, 420px"
          className="object-cover"
        />
        {/* overlay title */}
        <div className="absolute inset-x-0 bottom-0 p-4">
          <div className="inline-flex max-w-[92%] rounded-[18px] border border-white/30 bg-black/35 px-4 py-2 text-[13px] font-semibold text-white backdrop-blur-md shadow-sm">
            {title}
          </div>
        </div>

        {/* subtle top vignette for readability */}
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.20),transparent_45%,rgba(0,0,0,0.10))]" />
      </div>
    </div>
  );
}

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* BACKGROUND: градиент + tech grid */}
      <div className="pointer-events-none absolute inset-0">
        {/* базовый градиент */}
        <div className="absolute inset-0 bg-[radial-gradient(1100px_540px_at_18%_12%,rgba(20,184,166,0.16),transparent_60%),radial-gradient(1000px_540px_at_88%_18%,rgba(59,130,246,0.14),transparent_58%),linear-gradient(180deg,rgba(248,250,252,1)_0%,rgba(255,255,255,1)_42%,rgba(248,250,252,1)_100%)]" />

        {/* тех. сетка: тонкие линии + крупные клетки */}
        <div
          className="absolute inset-0 opacity-[0.18]"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(15,23,42,.10) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(15,23,42,.10) 1px, transparent 1px),
              linear-gradient(to right, rgba(15,23,42,.14) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(15,23,42,.14) 1px, transparent 1px)
            `,
            backgroundSize: "18px 18px, 18px 18px, 90px 90px, 90px 90px",
            backgroundPosition: "0 0, 0 0, 0 0, 0 0",
            maskImage:
              "radial-gradient(900px 520px at 50% 20%, black 55%, transparent 80%)",
            WebkitMaskImage:
              "radial-gradient(900px 520px at 50% 20%, black 55%, transparent 80%)",
          }}
        />

        {/* мягкая виньетка */}
        <div className="absolute inset-0 opacity-[0.55] bg-[radial-gradient(900px_520px_at_50%_16%,rgba(0,0,0,0.06),transparent_55%)]" />

        {/* низ — мягкая подложка */}
        <div className="absolute inset-x-0 bottom-0 h-44 bg-[linear-gradient(180deg,transparent,rgba(248,250,252,1))]" />
      </div>

      <div className="nicor-container relative py-14 md:py-20">
        <div className="mx-auto max-w-[980px]">
          {/* Chips */}
          <div className="flex flex-wrap justify-center gap-2 nicor-animate-in">
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
              Санкт-Петербург и область
            </span>
          </div>

          {/* Title */}
          <h1 className="mt-6 text-center nicor-title nicor-animate-in nicor-delay-1">
            Сантехнические работы{" "}
            <span className="nicor-gradient-text">под ключ</span>
          </h1>

          {/* Главный абзац */}
          <div className="mt-7 flex justify-center nicor-animate-in nicor-delay-2">
            <div className="relative w-full max-w-[860px] rounded-[26px] border border-zinc-200/80 bg-white/70 px-6 py-5 backdrop-blur-md shadow-sm">
              <div className="pointer-events-none absolute inset-0 rounded-[26px] bg-[linear-gradient(135deg,rgba(20,184,166,0.10),transparent_45%,rgba(59,130,246,0.08))]" />
              <p className="relative text-[15px] md:text-[16px] leading-relaxed text-zinc-700">
                НИКОР-ГРУПП — специалисты по отоплению и сантехническим работам в Санкт-Петербурге и Ленинградской области. Выполняем монтаж и замену систем в квартирах и частных домах, работаем по договору и сдаём результат в согласованные сроки.
              </p>
            </div>
          </div>

          {/* CTA */}
          <div className="mt-7 flex flex-col items-center justify-center gap-3 sm:flex-row nicor-animate-in nicor-delay-3">
            <Link href="/contacts#message" className="nicor-btn-primary">
              Оставить заявку <ArrowRight className="h-4 w-4 opacity-90" />
            </Link>
            <Link href="/services" className="nicor-btn-ghost">
              Смотреть услуги
            </Link>
          </div>

          {/* 3 смысловых блока */}
          <div className="mt-12 grid gap-6">
            {/* Block 1 */}
            <div className="nicor-card-soft p-6 md:p-8 nicor-animate-in nicor-delay-3">
              {/* Mobile layout: image(title overlay) -> text */}
              <div className="grid gap-6 md:hidden">
                <ImageTitleCard
                  src="/images/main_1.png"
                  alt="Аккуратная инженерная система"
                  title="Инженерные системы, продуманные до результата"
                />
                <p className="nicor-p">
                  «НИКОР-ГРУПП» выполняет сантехнические и отопительные работы любой сложности
                  в Санкт-Петербурге и Ленинградской области. Мы проектируем системы с нуля,
                  модернизируем существующие решения, монтируем отопление и тёплые полы,
                  устанавливаем водоснабжение и канализацию в квартирах, частных домах и
                  коммерческих объектах.
                </p>
              </div>

              {/* Desktop layout: text + image side-by-side */}
              <div className="hidden md:grid gap-8 md:grid-cols-[1.15fr_0.85fr] md:items-center">
                <div>
                  <div className="nicor-h3">Инженерные системы, продуманные до результата</div>
                  <p className="mt-3 nicor-p">
                    «НИКОР-ГРУПП» выполняет сантехнические и отопительные работы любой сложности
                    в Санкт-Петербурге и Ленинградской области. Мы проектируем системы с нуля,
                    модернизируем существующие решения, монтируем отопление и тёплые полы,
                    устанавливаем водоснабжение и канализацию в квартирах, частных домах и
                    коммерческих объектах.
                  </p>
                </div>

                <div className="nicor-photo">
                  <div className="relative aspect-[4/3]">
                    <Image
                      src="/images/main_1.png"
                      alt="Аккуратная инженерная система отопления и водоснабжения"
                      fill
                      sizes="(max-width: 768px) 100vw, 420px"
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Block 2 */}
            <div className="nicor-card-soft p-6 md:p-8 nicor-animate-in nicor-delay-4">
              {/* Mobile */}
              <div className="grid gap-6 md:hidden">
                <ImageTitleCard
                  src="/images/main_2.png"
                  alt="Монтаж и контроль качества"
                  title="Контроль этапов и внимание к деталям"
                />
                <p className="nicor-p">
                  Работа начинается с анализа условий и точного расчёта. Мы формируем прозрачную
                  смету и фиксируем стоимость до старта работ. Монтаж выполняется по продуманной
                  схеме с проверкой ключевых соединений и соблюдением технологической последовательности.
                </p>
              </div>

              {/* Desktop */}
              <div className="hidden md:grid gap-8 md:grid-cols-[0.85fr_1.15fr] md:items-center">
                <div className="nicor-photo">
                  <div className="relative aspect-[4/3]">
                    <Image
                      src="/images/main_2.png"
                      alt="Монтаж соединений и контроль качества на объекте"
                      fill
                      sizes="(max-width: 768px) 100vw, 420px"
                      className="object-cover"
                    />
                  </div>
                </div>

                <div>
                  <div className="nicor-h3">Контроль этапов и внимание к деталям</div>
                  <p className="mt-3 nicor-p">
                    Работа начинается с анализа условий и точного расчёта. Мы формируем прозрачную
                    смету и фиксируем стоимость до старта работ. Монтаж выполняется по продуманной
                    схеме с проверкой ключевых соединений и соблюдением технологической последовательности.
                  </p>
                </div>
              </div>
            </div>

            {/* Block 3 */}
            <div className="nicor-card-soft p-6 md:p-8 nicor-animate-in nicor-delay-5">
              {/* Mobile */}
              <div className="grid gap-6 md:hidden">
                <ImageTitleCard
                  src="/images/main_3.png"
                  alt="Консультация и согласование работ"
                  title="Понятный старт и согласованные сроки"
                />
                <p className="nicor-p">
                  Для предварительной оценки достаточно отправить фото и короткое описание задачи.
                  В большинстве случаев этого хватает, чтобы определить объём работ и ориентировочные сроки.
                  Если требуется детальная оценка, согласуем выезд и подготовим расчёт с конкретной датой старта.
                </p>
              </div>

              {/* Desktop */}
              <div className="hidden md:grid gap-8 md:grid-cols-[1.15fr_0.85fr] md:items-center">
                <div>
                  <div className="nicor-h3">Понятный старт и согласованные сроки</div>
                  <p className="mt-3 nicor-p">
                    Для предварительной оценки достаточно отправить фото и короткое описание задачи.
                    В большинстве случаев этого хватает, чтобы определить объём работ и ориентировочные сроки.
                    Если требуется детальная оценка, согласуем выезд и подготовим расчёт с конкретной датой старта.
                  </p>
                </div>

                <div className="nicor-photo">
                  <div className="relative aspect-[4/3]">
                    <Image
                      src="/images/main_3.png"
                      alt="Консультация и согласование работ"
                      fill
                      sizes="(max-width: 768px) 100vw, 420px"
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Нижний блок */}
          <div className="mt-12">
            <HeroIllustration />
          </div>
        </div>
      </div>
    </section>
  );
}
