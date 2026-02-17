import "./globals.css";
import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/layout/Header";

export const metadata: Metadata = {
  title: "НИКОР — сантехнические работы в СПб и области",
  description:
    "Тёплые полы, отопление, установка сантехники, санузел под ключ. Выезд в день обращения. Гарантия и договор.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const year = new Date().getFullYear();

  return (
    <html lang="ru" className="scroll-smooth">
      <body className="min-h-screen bg-[rgb(var(--bg))] text-[rgb(var(--text))] antialiased">
        {/* Premium sticky header with animated nav + active state */}
        <Header />

        {/* Main */}
        <main className="relative">
          {/* subtle background polish across all pages */}
          <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(1100px_520px_at_18%_8%,rgba(20,184,166,0.08),transparent_60%),radial-gradient(1000px_520px_at_86%_10%,rgba(59,130,246,0.08),transparent_60%),radial-gradient(900px_520px_at_45%_92%,rgba(244,63,94,0.06),transparent_62%)]" />
          {children}

          {/* Mobile bottom-safe spacer so bar never covers CTA/footer */}
          <div className="h-20 md:hidden" />
        </main>

        {/* Footer */}
        <footer className="border-t nicor-border bg-white">
          <div className="mx-auto max-w-6xl px-4 py-10">
            <div className="grid gap-8 md:grid-cols-3">
              <div>
                <div className="font-semibold">НИКОР</div>
                <div className="mt-2 text-sm text-zinc-600">
                  Сантехнические работы в широком смысле: тёплые полы, отопление,
                  установка сантехники, санузел под ключ, аварийные выезды.
                </div>
              </div>

              <div className="text-sm">
                <div className="font-semibold">Разделы</div>
                <div className="mt-2 grid gap-2 text-zinc-600">
                  <Link href="/services" className="hover:text-zinc-900">
                    Услуги
                  </Link>
                  <Link href="/prices" className="hover:text-zinc-900">
                    Цены
                  </Link>
                  <Link href="/cases" className="hover:text-zinc-900">
                    Кейсы
                  </Link>
                  <Link href="/contacts" className="hover:text-zinc-900">
                    Контакты
                  </Link>
                </div>
              </div>

              <div className="text-sm">
                <div className="font-semibold">Связь</div>
                <div className="mt-2 grid gap-2 text-zinc-600">
                  <a href="tel:+79990000000" className="hover:text-zinc-900">
                    +7 (999) 000-00-00
                  </a>
                  <div>СПб и область</div>
                  <div className="text-xs text-zinc-400">© {year} НИКОР</div>
                </div>
              </div>
            </div>

            {/* tiny “trust” line */}
            <div className="mt-10 flex flex-col gap-2 border-t nicor-border pt-6 text-xs text-zinc-500 sm:flex-row sm:items-center sm:justify-between">
              <div>Договор • Гарантия • Чистота на объекте</div>
              <div>
                <span className="text-zinc-400">Сделано аккуратно.</span>
              </div>
            </div>
          </div>

          {/* Mobile bar */}
          <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden">
            {/* backdrop + hairline */}
            <div className="absolute inset-0 border-t border-zinc-200/70 bg-white/92 backdrop-blur-md" />

            {/* subtle glow */}
            <div className="pointer-events-none absolute inset-0 opacity-70 blur-xl [background:radial-gradient(70%_120%_at_25%_30%,rgba(59,130,246,0.14),transparent_60%),radial-gradient(70%_120%_at_75%_30%,rgba(20,184,166,0.12),transparent_60%),radial-gradient(80%_140%_at_50%_110%,rgba(244,63,94,0.10),transparent_60%)]" />

            <div className="relative mx-auto grid max-w-6xl grid-cols-2 gap-3 px-4 py-3">
              <a
                href="tel:+79990000000"
                className="
                  flex items-center justify-center
                  rounded-2xl
                  border border-zinc-200
                  bg-white
                  py-3
                  text-sm font-semibold
                  text-zinc-900
                  shadow-sm
                  active:scale-[0.98]
                  transition
                "
              >
                Позвонить
              </a>

              <a
                href="/contacts#lead"
                className="
                  relative
                  flex items-center justify-center
                  rounded-2xl
                  py-3
                  text-sm font-semibold
                  text-white
                  shadow-md
                  active:scale-[0.98]
                  transition
                  overflow-hidden
                  bg-gradient-to-r
                  from-zinc-900
                  via-zinc-800
                  to-zinc-900
                "
              >
                {/* tiny shimmer, very subtle */}
                <span className="pointer-events-none absolute inset-0 opacity-40 [background:linear-gradient(120deg,transparent,rgba(255,255,255,0.22),transparent)] translate-x-[-60%] animate-[nicor-shimmer_2.8s_var(--ease-out)_infinite]" />
                Заявка
              </a>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
