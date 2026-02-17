import "./globals.css";
import type { Metadata, Viewport } from "next";
import Link from "next/link";
import { Header } from "@/components/layout/Header";

export const metadata: Metadata = {
  metadataBase: new URL("https://nicorgroup-site.vercel.app"),
  title: "НИКОР — сантехнические работы в СПб и области",
  description:
    "Тёплые полы, отопление, установка сантехники, санузел под ключ. Выезд в день обращения. Гарантия и договор.",
  applicationName: "НИКОР",
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    locale: "ru_RU",
    title: "НИКОР — сантехнические работы в СПб и области",
    description:
      "Тёплые полы, отопление, установка сантехники, санузел под ключ. Выезд в день обращения. Гарантия и договор.",
    siteName: "НИКОР",
  },
  twitter: {
    card: "summary_large_image",
    title: "НИКОР — сантехнические работы в СПб и области",
    description:
      "Тёплые полы, отопление, установка сантехники, санузел под ключ. Выезд в день обращения. Гарантия и договор.",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const year = new Date().getFullYear();

  return (
    <html lang="ru" className="scroll-smooth" suppressHydrationWarning>
      <body className="min-h-screen bg-[rgb(var(--bg))] text-[rgb(var(--text))] antialiased">
        {/* Sticky premium header (desktop nav + mobile burger lives inside Header) */}
        <Header />

        {/* Main */}
        <main className="relative">
          {/* Global premium background polish across all pages */}
          <div className="pointer-events-none absolute inset-0 -z-10">
            {/* Base */}
            <div className="absolute inset-0 bg-[rgb(var(--bg))]" />

            {/* Soft multi-radial brand glow */}
            <div className="absolute inset-0 bg-[radial-gradient(1100px_520px_at_18%_8%,rgba(20,184,166,0.10),transparent_62%),radial-gradient(1000px_520px_at_86%_10%,rgba(59,130,246,0.10),transparent_62%),radial-gradient(900px_520px_at_45%_92%,rgba(244,63,94,0.07),transparent_65%)]" />

            {/* Very subtle grid (premium, not “techy”) */}
            <div className="absolute inset-0 opacity-[0.032] [background-image:linear-gradient(to_right,rgba(0,0,0,.9)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,.9)_1px,transparent_1px)] [background-size:84px_84px]" />

            {/* Edge vignette */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_46%,rgba(0,0,0,0.07)_100%)]" />
          </div>

          {children}

          {/* Spacer so fixed mobile bar never overlaps content */}
          <div className="h-[104px] md:hidden" />
        </main>

        {/* Footer */}
        <footer className="relative border-t border-zinc-200/70 bg-white">
          {/* Top soft glow to blend footer with page */}
          <div className="pointer-events-none absolute inset-x-0 top-0 h-28 bg-[radial-gradient(900px_180px_at_50%_0%,rgba(59,130,246,0.08),transparent_72%)]" />

          <div className="mx-auto max-w-6xl px-4 py-10">
            <div className="grid gap-8 md:grid-cols-3">
              <div>
                <div className="font-semibold">НИКОР</div>
                <div className="mt-2 text-sm text-zinc-600">
                  Сантехнические работы: тёплые полы, отопление, установка сантехники,
                  санузел под ключ, аварийные выезды. Работаем аккуратно и прозрачно.
                </div>

                <div className="mt-4 inline-flex items-center gap-2 text-xs text-zinc-500">
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
                  <a href="tel:+79920444258" className="hover:text-zinc-900" aria-label="Позвонить в НИКОР">
                    +7 (992) 044-42-58
                  </a>
                  <div>СПб и область</div>
                  <div className="text-xs text-zinc-400">© {year} НИКОР</div>
                </div>
              </div>
            </div>

            {/* Trust line */}
            <div className="mt-10 flex flex-col gap-2 border-t border-zinc-200/70 pt-6 text-xs text-zinc-500 sm:flex-row sm:items-center sm:justify-between">
              <div>Договор • Гарантия • Чистота на объекте</div>
              <div className="text-zinc-400">Сделано аккуратно.</div>
            </div>
          </div>

          {/* Mobile Bottom Bar (only mobile) */}
          <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden">
            {/* A soft overlay behind bar for guaranteed readability on any background */}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-white/95 via-white/70 to-white/0" />

            <div className="relative border-t border-zinc-200/70 bg-white/80 backdrop-blur-xl">
              <div className="mx-auto grid max-w-6xl grid-cols-2 gap-3 px-4 py-3 [padding-bottom:calc(env(safe-area-inset-bottom)+12px)]">
                <a
                  href="tel:+79920444258"
                  className="flex items-center justify-center rounded-2xl border border-zinc-200 bg-white py-3 text-sm font-semibold text-zinc-900 shadow-sm transition active:scale-[0.98]"
                >
                  Позвонить
                </a>

                <a
                  href="/contacts#lead"
                  className="flex items-center justify-center rounded-2xl py-3 text-sm font-semibold !text-white shadow-md transition active:scale-[0.98]"
                  style={{
                    background:
                      "linear-gradient(135deg, rgba(24,24,27,0.96), rgba(24,24,27,0.92), rgba(59,130,246,0.85))",
                  }}
                >
                  Заявка
                </a>
              </div>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
