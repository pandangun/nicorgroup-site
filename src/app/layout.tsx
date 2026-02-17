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
      <body className="min-h-screen bg-white text-zinc-900 antialiased">
        {/* Premium sticky header with animated nav + active state */}
        <Header />

        {/* Main */}
        <main className="relative">
          {/* subtle background polish across all pages */}
          <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(1100px_520px_at_18%_8%,rgba(20,184,166,0.08),transparent_60%),radial-gradient(1000px_520px_at_86%_10%,rgba(59,130,246,0.08),transparent_60%),radial-gradient(900px_520px_at_45%_92%,rgba(244,63,94,0.06),transparent_62%)]" />
          {children}
        </main>

        {/* Footer */}
        <footer className="border-t bg-white">
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
            <div className="mt-10 flex flex-col gap-2 border-t pt-6 text-xs text-zinc-500 sm:flex-row sm:items-center sm:justify-between">
              <div>Договор • Гарантия • Чистота на объекте</div>
              <div>
                <span className="text-zinc-400">Сделано аккуратно.</span>
              </div>
            </div>
          </div>

          {/* Mobile bar */}
          <div className="fixed bottom-0 left-0 right-0 z-50 border-t border-zinc-200/70 bg-white/90 backdrop-blur md:hidden">
            <div className="mx-auto grid max-w-6xl grid-cols-2 gap-2 px-4 py-2">
              <a
                href="tel:+79990000000"
                className="rounded-xl border border-zinc-200 bg-white py-3 text-center text-sm font-semibold shadow-sm active:scale-[0.99]"
              >
                Позвонить
              </a>
              <a
                href="/contacts#lead"
                className="rounded-xl bg-zinc-900 py-3 text-center text-sm font-semibold text-white shadow-sm active:scale-[0.99]"
              >
                Заявка
              </a>
            </div>
          </div>

          {/* Spacer so mobile bar doesn't cover content */}
          <div className="h-16 md:hidden" />
        </footer>
      </body>
    </html>
  );
}
