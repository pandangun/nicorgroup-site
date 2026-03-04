import Link from "next/link"

const PHONE_DISPLAY = "+7 900 630-09-74"
const PHONE_TEL = "+79006300974"
const EMAIL = "info@nicor-group.ru"
const ADDRESS = "Санкт-Петербург, пр. Гражданский"

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="relative border-t border-zinc-200/70 bg-white">
      {/* Top soft glow to blend footer with page */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-28 bg-[radial-gradient(900px_180px_at_50%_0%,rgba(59,130,246,0.08),transparent_72%)]" />

      <div className="mx-auto max-w-6xl px-4 py-10">
        <div className="grid gap-10 md:grid-cols-3">
          {/* Brand */}
          <div>
            <div className="font-semibold">НИКОР-ГРУПП</div>
            <div className="mt-2 text-sm text-zinc-600">
              Сантехнические работы: тёплые полы, отопление, установка сантехники,
              санузел под ключ, аварийные выезды. Работаем аккуратно, прозрачно и по договору.
            </div>

            <div className="mt-4 flex flex-wrap items-center gap-2 text-xs text-zinc-500">
              <span className="inline-flex rounded-full border border-zinc-200 bg-white px-2 py-1">
                Договор
              </span>
              <span className="inline-flex rounded-full border border-zinc-200 bg-white px-2 py-1">
                Гарантия
              </span>
              <span className="inline-flex rounded-full border border-zinc-200 bg-white px-2 py-1">
                Чистота
              </span>
            </div>

            {/* Policies + easter egg */}
            <div className="mt-5 flex flex-col gap-2 text-sm text-zinc-500">
              <Link href="/personal-data" className="hover:text-zinc-900 transition">
                Политика обработки персональных данных
              </Link>

              <div className="flex items-baseline gap-2">
                <Link href="/terms" className="hover:text-zinc-900 transition">
                  Пользовательское соглашение
                </Link>

                <Link
                  href="/game"
                  className="text-[11px] text-zinc-400 hover:text-zinc-600 transition"
                  aria-label="Пасхалка: игра"
                  title="pipe panic"
                >
                  .game
                </Link>
              </div>
            </div>
          </div>

          {/* Nav */}
          <div className="text-sm">
            <div className="font-semibold">Разделы</div>
            <div className="mt-3 grid gap-2 text-zinc-600">
              <Link href="/services" className="hover:text-zinc-900 transition">
                Услуги
              </Link>
              <Link href="/prices" className="hover:text-zinc-900 transition">
                Цены
              </Link>
              <Link href="/cases" className="hover:text-zinc-900 transition">
                Кейсы
              </Link>
              <Link href="/articles" className="hover:text-zinc-900 transition">
                Статьи
              </Link>
              <Link href="/contacts" className="hover:text-zinc-900 transition">
                Контакты
              </Link>
            </div>
          </div>

          {/* Contact (air, no "button cards") */}
          <div className="text-sm">
            <div className="mt-1 space-y-5 text-sm text-zinc-700">
              <div>
                <div className="text-xs uppercase tracking-wide text-zinc-400">Телефон</div>
                <a
                  href={`tel:${PHONE_TEL}`}
                  className="mt-1 inline-block text-lg font-semibold tracking-[-0.02em] text-zinc-900 hover:opacity-80 transition"
                  aria-label="Позвонить в НИКОР-ГРУПП"
                >
                  {PHONE_DISPLAY}
                </a>
              </div>

              <div>
                <div className="text-xs uppercase tracking-wide text-zinc-400">Почта</div>
                <a
                  href={`mailto:${EMAIL}`}
                  className="mt-1 inline-block text-base text-zinc-900 hover:opacity-80 transition"
                >
                  {EMAIL}
                </a>
              </div>

              <div>
                <div className="text-xs uppercase tracking-wide text-zinc-400">Адрес</div>
                <div className="mt-1 text-base text-zinc-900">{ADDRESS}</div>
              </div>
            </div>
          </div>
        </div>

        {/* Trust line */}
        <div className="mt-10 flex flex-col gap-2 border-t border-zinc-200/70 pt-6 text-xs text-zinc-500 sm:flex-row sm:items-center sm:justify-between">
          <div>Договор • Гарантия • Чистота на объекте</div>
          <div className="text-zinc-400">© {year} НИКОР-ГРУПП</div>
        </div>
      </div>

      {/* Mobile Bottom Bar (only mobile) */}
      <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden">
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-white/95 via-white/70 to-white/0" />

        <div className="relative border-t border-zinc-200/70 bg-white/80 backdrop-blur-xl">
          <div className="mx-auto grid max-w-6xl grid-cols-2 gap-3 px-4 py-3 [padding-bottom:calc(env(safe-area-inset-bottom)+12px)]">
            <a
              href={`tel:${PHONE_TEL}`}
              className="flex items-center justify-center rounded-2xl border border-zinc-200 bg-white py-3 text-sm font-semibold text-zinc-900 shadow-sm transition active:scale-[0.98]"
            >
              Позвонить
            </a>

            <a
              href="/contacts#message"
              className="flex items-center justify-center rounded-2xl py-3 text-sm font-semibold !text-white shadow-md transition active:scale-[0.98]"
              style={{
                background:
                  "linear-gradient(135deg, rgba(24,24,27,0.96), rgba(24,24,27,0.92), rgba(59,130,246,0.85))",
              }}
            >
              Сообщение
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
