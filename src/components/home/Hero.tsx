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
} from "lucide-react";

function HeroIllustration() {
  return (
    <div className="relative nicor-card-premium nicor-noise overflow-hidden p-6 md:p-8">
      <div className="flex items-center justify-between gap-4">
        <div>
          <div className="text-sm font-semibold text-zinc-900">Быстрый расчёт по фото</div>
          <div className="mt-1 text-sm text-zinc-600">
            Пришли фото → дадим диапазон цены и ближайшее окно.
          </div>
        </div>
        <span className="nicor-chip">
          <Sparkles className="h-3.5 w-3.5" />
          без спама
        </span>
      </div>

      <div className="mt-6 grid gap-4 md:grid-cols-2">
        <div className="nicor-glass nicor-border border p-4">
          <div className="text-sm font-semibold text-zinc-900">Что прислать</div>
          <ul className="mt-2 space-y-2 text-sm text-zinc-700">
            <li className="flex gap-2">
              <CheckCircle2 className="mt-0.5 h-4 w-4 text-zinc-900" />
              2–4 фото узла / санузла / места работ
            </li>
            <li className="flex gap-2">
              <CheckCircle2 className="mt-0.5 h-4 w-4 text-zinc-900" />
              Адрес (район), этаж, есть ли парковка/лифт
            </li>
            <li className="flex gap-2">
              <CheckCircle2 className="mt-0.5 h-4 w-4 text-zinc-900" />
              Что хотите: “замена” или “с нуля”
            </li>
          </ul>
        </div>

        <div className="nicor-glass nicor-border border p-4">
          <div className="text-sm font-semibold text-zinc-900">Мини-гарантии</div>
          <div className="mt-2 grid gap-2 text-sm text-zinc-700">
            <div className="flex items-center gap-2">
              <ShieldCheck className="h-4 w-4 text-zinc-900" />
              Смета фиксируется до начала
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-zinc-900" />
              Защита поверхностей и уборка
            </div>
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4 text-zinc-900" />
              Выезд в день обращения (часто)
            </div>
          </div>
        </div>
      </div>

      <div className="mt-6 nicor-border border rounded-[28px] bg-white/70 p-4">
        <svg viewBox="0 0 900 260" className="h-[140px] w-full">
          <defs>
            <linearGradient id="g1" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0" stopColor="rgba(59,130,246,0.35)" />
              <stop offset="1" stopColor="rgba(20,184,166,0.35)" />
            </linearGradient>
          </defs>
          <rect x="0" y="0" width="900" height="260" rx="22" fill="url(#g1)" />
          <circle cx="160" cy="130" r="74" fill="rgba(255,255,255,0.55)" />
          <rect x="280" y="70" width="540" height="36" rx="18" fill="rgba(255,255,255,0.65)" />
          <rect x="280" y="126" width="460" height="26" rx="13" fill="rgba(255,255,255,0.55)" />
          <rect x="280" y="170" width="380" height="22" rx="11" fill="rgba(255,255,255,0.45)" />
        </svg>
        <div className="mt-3 text-xs text-zinc-500">
          Здесь позже заменим на реальные фото работ (до/после) — будет огонь.
        </div>
      </div>

      <Link href="/contacts#lead" className="mt-5 nicor-btn-brand w-full">
        Отправить фото <ArrowRight className="h-4 w-4 opacity-90" />
      </Link>
    </div>
  );
}

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* BACKGROUND: фото + “пустое место слева” + читабельность */}
      <div className="pointer-events-none absolute inset-0">
        {/* Фото */}
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

        {/* Левый “чистый” слой под текст (делает пустое пространство слева) */}
        <div
          className="
            absolute inset-0
            bg-[linear-gradient(90deg,rgba(255,255,255,0.92)_0%,rgba(255,255,255,0.82)_38%,rgba(255,255,255,0.55)_62%,rgba(255,255,255,0.25)_82%,rgba(255,255,255,0.10)_100%)]
          "
        />

        {/* Мягкое “стекло” сверху (чтоб текст всегда читался) */}
        <div className="absolute inset-0 bg-white/20" />

        {/* Твоя фирменная атмосфера */}
        <div className="absolute inset-0 bg-[radial-gradient(900px_520px_at_15%_10%,rgba(20,184,166,0.18),transparent_62%),radial-gradient(900px_520px_at_90%_15%,rgba(59,130,246,0.16),transparent_62%),radial-gradient(700px_420px_at_35%_95%,rgba(244,63,94,0.10),transparent_62%)]" />

        {/* Тонкая сетка (очень деликатно) */}
        <div className="absolute inset-0 opacity-[0.040] [background-image:linear-gradient(to_right,rgba(0,0,0,.9)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,.9)_1px,transparent_1px)] [background-size:72px_72px]" />

        {/* Виньетка по краям — “дорого” */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_38%,rgba(0,0,0,0.10)_100%)]" />

        {/* Нижняя подложка для следующего блока (чтобы переход был мягким) */}
        <div className="absolute inset-x-0 bottom-0 h-40 bg-[linear-gradient(180deg,transparent,rgba(248,250,252,1))]" />
      </div>

      {/* CONTENT: строго вертикально */}
      <div className="nicor-container relative flex flex-col items-center gap-10 py-14 md:py-20">
        {/* TOP TEXT */}
        <div className="w-full max-w-[860px] text-center nicor-animate-in">
          <div className="flex flex-wrap items-center justify-center gap-2">
            <span className="nicor-chip">
              <Clock className="h-3.5 w-3.5" />
              Выезд в день обращения
            </span>
            <span className="nicor-chip">
              <ShieldCheck className="h-3.5 w-3.5" />
              Договор + гарантия
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

          <h1 className="mt-5 nicor-title">
            Сантехнические работы <span className="nicor-gradient-text">под ключ</span>
          </h1>

          <p className="mt-4 nicor-p">
            Санузел под ключ, тёплый пол, отопление, установка сантехники. Прозрачно:
            смета до начала, контроль герметичности, чистота на объекте.
          </p>

          <div className="mt-7 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link href="/contacts#lead" className="nicor-btn-primary">
              Рассчитать по фото <ArrowRight className="h-4 w-4 opacity-90" />
            </Link>
            <Link href="/services" className="nicor-btn-ghost">
              Смотреть услуги
            </Link>
          </div>

          {/* Тезисы — визуально легче, больше “воздуха” */}
          <div className="mt-10 grid gap-4 md:grid-cols-3 text-left">
            <div className="rounded-[22px] bg-white/80 p-4 shadow-[var(--shadow-sm)] nicor-ring-hover">
              <div className="text-sm font-semibold">Цена фиксируется</div>
              <div className="mt-1 text-sm text-zinc-600">
                Смета до старта работ — без “потом допов”.
              </div>
            </div>
            <div className="rounded-[22px] bg-white/80 p-4 shadow-[var(--shadow-sm)] nicor-ring-hover">
              <div className="text-sm font-semibold">Аккуратность</div>
              <div className="mt-1 text-sm text-zinc-600">
                Защита поверхностей + уборка после.
              </div>
            </div>
            <div className="rounded-[22px] bg-white/80 p-4 shadow-[var(--shadow-sm)] nicor-ring-hover">
              <div className="text-sm font-semibold">Гарантия</div>
              <div className="mt-1 text-sm text-zinc-600">
                По договору и понятным условиям.
              </div>
            </div>
          </div>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3 text-sm text-zinc-700">
            <span className="inline-flex items-center gap-2">
              <PhoneCall className="h-4 w-4" />
              +7 (999) 000-00-00
            </span>
            <span className="text-zinc-400">•</span>
            <span>Ответим быстро — по делу</span>
          </div>
        </div>

        {/* BELOW: PHOTO QUOTE CARD */}
        <div className="w-full max-w-[980px] nicor-animate-in">
          <HeroIllustration />
        </div>
      </div>
    </section>
  );
}
