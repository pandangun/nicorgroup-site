import "./globals.css";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "НИКОР — сантехнические работы в СПб и области",
  description:
    "Тёплые полы, отопление, установка сантехники, санузел под ключ. Выезд в день обращения. Гарантия и договор.",
};

const NavLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <Link
    href={href}
    className="text-sm text-zinc-700 hover:text-zinc-950 transition-colors"
  >
    {children}
  </Link>
);

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ru">
      <body className="min-h-screen bg-white text-zinc-900">
        <header className="sticky top-0 z-50 border-b bg-white/80 backdrop-blur">
          <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
            <Link href="/" className="flex items-center gap-3">
              <div className="grid h-10 w-10 place-items-center rounded-xl border bg-zinc-50 font-black tracking-wide">
                Н
              </div>
              <div className="leading-tight">
                <div className="font-semibold">НИКОР</div>
                <div className="text-xs text-zinc-500">Сантехника • СПб и область</div>
              </div>
            </Link>

            <nav className="hidden items-center gap-6 md:flex">
              <NavLink href="/services">Услуги</NavLink>
              <NavLink href="/prices">Цены</NavLink>
              <NavLink href="/cases">Кейсы</NavLink>
              <NavLink href="/contacts">Контакты</NavLink>
            </nav>

            <div className="hidden items-center gap-2 md:flex">
              <a
                href="tel:+79990000000"
                className="rounded-xl border px-3 py-2 text-sm hover:bg-zinc-50"
              >
                +7 (999) 000-00-00
              </a>
              <a
                href="/contacts#lead"
                className="rounded-xl bg-zinc-900 px-4 py-2 text-sm text-white hover:bg-zinc-800"
              >
                Расчёт по фото
              </a>
            </div>
          </div>
        </header>

        <main>{children}</main>

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
                  <Link href="/services" className="hover:text-zinc-900">Услуги</Link>
                  <Link href="/prices" className="hover:text-zinc-900">Цены</Link>
                  <Link href="/cases" className="hover:text-zinc-900">Кейсы</Link>
                  <Link href="/contacts" className="hover:text-zinc-900">Контакты</Link>
                </div>
              </div>

              <div className="text-sm">
                <div className="font-semibold">Связь</div>
                <div className="mt-2 grid gap-2 text-zinc-600">
                  <a href="tel:+79990000000" className="hover:text-zinc-900">+7 (999) 000-00-00</a>
                  <div>СПб и область</div>
                  <div className="text-xs text-zinc-400">
                    © {new Date().getFullYear()} НИКОР
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Mobile bar */}
          <div className="fixed bottom-0 left-0 right-0 z-50 border-t bg-white/90 backdrop-blur md:hidden">
            <div className="mx-auto grid max-w-6xl grid-cols-2 gap-2 px-4 py-2">
              <a href="tel:+79990000000" className="rounded-xl border py-3 text-center text-sm">
                Позвонить
              </a>
              <a href="/contacts#lead" className="rounded-xl bg-zinc-900 py-3 text-center text-sm text-white">
                Заявка
              </a>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
