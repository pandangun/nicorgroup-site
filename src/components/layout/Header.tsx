"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useMemo, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, PhoneCall } from "lucide-react";

const NAV = [
  { href: "/services", label: "Услуги" },
  { href: "/prices", label: "Цены" },
  { href: "/cases", label: "Кейсы" },
  { href: "/contacts", label: "Контакты" },
];

function isActivePath(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(href + "/");
}

type PillRect = { left: number; width: number };

function usePillTracker() {
  const wrapRef = useRef<HTMLDivElement | null>(null);
  const [hoverRect, setHoverRect] = useState<PillRect | null>(null);

  const setFromEl = (el: HTMLElement | null) => {
    const wrap = wrapRef.current;
    if (!wrap || !el) return;

    const wrapBox = wrap.getBoundingClientRect();
    const elBox = el.getBoundingClientRect();

    setHoverRect({
      left: elBox.left - wrapBox.left,
      width: elBox.width,
    });
  };

  const clear = () => setHoverRect(null);

  useEffect(() => {
    const onResize = () => setHoverRect((r) => (r ? { ...r } : r));
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return { wrapRef, hoverRect, setFromEl, clear };
}

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const activeHref = useMemo(() => {
    const found = NAV.find((i) => isActivePath(pathname, i.href));
    return found?.href ?? null;
  }, [pathname]);

  // Close drawer on route change
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  // Close on ESC
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  // Desktop hover-pill tracking
  const { wrapRef, hoverRect, setFromEl, clear } = usePillTracker();

  return (
    <header className="sticky top-0 z-50 border-b border-zinc-200/70 bg-white/75 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-3">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <div className="relative grid h-10 w-10 place-items-center rounded-xl border border-zinc-200 bg-white shadow-sm overflow-hidden">
            <div
              className="absolute inset-0 opacity-70"
              style={{
                backgroundImage:
                  "linear-gradient(120deg, rgba(99,102,241,.12), rgba(16,185,129,.10), rgba(236,72,153,.08), rgba(99,102,241,.12))",
                backgroundSize: "300% 300%",
                animation: "nicorShimmer 9s ease infinite",
              }}
            />
            <span className="relative font-black tracking-wide">Н</span>
          </div>

          <div className="leading-tight">
            <div className="font-semibold">НИКОР</div>
            <div className="text-xs text-zinc-500">Сантехника • СПб и область</div>
          </div>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex">
          <div
            ref={wrapRef}
            onMouseLeave={() => clear()}
            className="relative flex items-center gap-1 rounded-full border border-zinc-200 bg-white/60 p-1 shadow-sm"
          >
            {/* glow under capsule */}
            <div
              className="pointer-events-none absolute inset-0 -z-10 rounded-full blur-xl"
              style={{
                background:
                  "radial-gradient(60% 120% at 25% 20%, rgba(99,102,241,.18), transparent 60%)," +
                  "radial-gradient(70% 140% at 70% 25%, rgba(16,185,129,.14), transparent 60%)," +
                  "radial-gradient(80% 160% at 55% 95%, rgba(236,72,153,.10), transparent 55%)",
                animation: "nicorGlow 6s ease-in-out infinite",
              }}
            />

            {/* hover pill */}
            <AnimatePresence>
              {hoverRect && (
                <motion.div
                  key="hover-pill"
                  initial={{ opacity: 0, y: 2 }}
                  animate={{ opacity: 1, y: 0, left: hoverRect.left, width: hoverRect.width }}
                  exit={{ opacity: 0, y: 2 }}
                  transition={{ type: "spring", stiffness: 520, damping: 34 }}
                  className="pointer-events-none absolute top-1 bottom-1 rounded-full"
                  style={{
                    background:
                      "linear-gradient(120deg, rgba(99,102,241,.12), rgba(16,185,129,.10), rgba(236,72,153,.09))",
                    boxShadow: "inset 0 0 0 1px rgba(0,0,0,.06)",
                  }}
                />
              )}
            </AnimatePresence>

            {/* active pill */}
            {activeHref && (
              <motion.div
                layoutId="nicor-active-pill"
                className="pointer-events-none absolute top-1 bottom-1 rounded-full"
                style={{
                  backgroundImage:
                    "linear-gradient(120deg, rgba(99,102,241,.28), rgba(16,185,129,.20), rgba(236,72,153,.16), rgba(99,102,241,.28))",
                  backgroundSize: "300% 300%",
                  animation: "nicorShimmer 5.5s ease infinite",
                  boxShadow:
                    "0 10px 22px rgba(0,0,0,.06), inset 0 0 0 1px rgba(0,0,0,.10)",
                }}
                transition={{ type: "spring", stiffness: 520, damping: 34 }}
              />
            )}

            {NAV.map((item) => {
              const active = isActivePath(pathname, item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onMouseEnter={(e) => setFromEl(e.currentTarget)}
                  className="relative"
                >
                  <motion.span
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.99 }}
                    transition={{ type: "spring", stiffness: 520, damping: 38 }}
                    className={[
                      "relative z-10 inline-flex items-center rounded-full px-3 py-2 text-sm font-semibold",
                      "transition-colors",
                      active ? "text-zinc-900" : "text-zinc-700 hover:text-zinc-950",
                    ].join(" ")}
                  >
                    {item.label}
                  </motion.span>
                </Link>
              );
            })}
          </div>
        </nav>

        {/* Right (desktop) */}
        <div className="hidden items-center gap-2 md:flex">
          <a
            href="tel:+79990000000"
            className="inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-white px-4 py-2 text-sm font-semibold shadow-sm transition hover:shadow"
          >
            <PhoneCall className="h-4 w-4" />
            +7 (999) 000-00-00
          </a>
          <Link
            href="/contacts#lead"
            className="rounded-full bg-zinc-900 px-4 py-2 text-sm font-semibold text-white transition hover:bg-zinc-800"
          >
            Расчёт по фото
          </Link>
        </div>

        {/* Mobile: burger + CTA */}
        <div className="flex items-center gap-2 md:hidden">
          <Link
            href="/contacts#lead"
            className="rounded-full bg-zinc-900 px-3 py-2 text-xs font-semibold text-white shadow-sm active:scale-[0.99]"
          >
            Заявка
          </Link>

          <button
            aria-label="Открыть меню"
            onClick={() => setOpen(true)}
            className="rounded-full border border-zinc-200 bg-white p-2 shadow-sm active:scale-[0.99]"
          >
            <Menu className="h-5 w-5" />
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      <AnimatePresence>
        {open && (
          <>
            {/* Backdrop */}
            <motion.button
              aria-label="Закрыть меню"
              className="fixed inset-0 z-[60] bg-black/25 backdrop-blur-[2px]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
            />

            {/* Panel */}
            <motion.aside
              className="fixed right-0 top-0 z-[70] h-dvh w-[86vw] max-w-[360px] border-l border-zinc-200/70 bg-white/85 backdrop-blur-xl"
              initial={{ x: "110%" }}
              animate={{ x: 0 }}
              exit={{ x: "110%" }}
              transition={{ type: "spring", stiffness: 520, damping: 46 }}
            >
              <div className="flex items-center justify-between border-b border-zinc-200/70 px-4 py-3">
                <div className="text-sm font-semibold">Меню</div>
                <button
                  aria-label="Закрыть"
                  onClick={() => setOpen(false)}
                  className="rounded-full border border-zinc-200 bg-white p-2 shadow-sm active:scale-[0.99]"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              <div className="p-4">
                <div className="rounded-[22px] border border-zinc-200 bg-white/70 p-2 shadow-sm">
                  {NAV.map((item) => {
                    const active = isActivePath(pathname, item.href);

                    return (
                      <Link
                        key={item.href}
                        href={item.href}
                        className="block"
                        onClick={() => setOpen(false)}
                      >
                        <div className="relative rounded-[18px] px-4 py-3">
                          {/* active row */}
                          {active && (
                            <div
                              className="absolute inset-0 rounded-[18px]"
                              style={{
                                backgroundImage:
                                  "linear-gradient(120deg, rgba(99,102,241,.22), rgba(16,185,129,.16), rgba(236,72,153,.12), rgba(99,102,241,.22))",
                                backgroundSize: "300% 300%",
                                animation: "nicorShimmer 6s ease infinite",
                                boxShadow:
                                  "0 12px 30px rgba(0,0,0,.08), inset 0 0 0 1px rgba(0,0,0,.10)",
                              }}
                            />
                          )}

                          <div className="relative flex items-center justify-between">
                            <span className={active ? "font-semibold text-zinc-900" : "text-zinc-800"}>
                              {item.label}
                            </span>
                            <span className="text-xs text-zinc-500">
                              {active ? "сейчас" : ""}
                            </span>
                          </div>
                        </div>
                      </Link>
                    );
                  })}
                </div>

                <div className="mt-4 grid gap-2">
                  <a
                    href="tel:+79990000000"
                    className="inline-flex items-center justify-center gap-2 rounded-[18px] border border-zinc-200 bg-white px-4 py-3 text-sm font-semibold shadow-sm active:scale-[0.99]"
                  >
                    <PhoneCall className="h-4 w-4" />
                    Позвонить
                  </a>

                  <Link
                    href="/contacts#lead"
                    onClick={() => setOpen(false)}
                    className="inline-flex items-center justify-center rounded-[18px] bg-zinc-900 px-4 py-3 text-sm font-semibold text-white shadow-sm active:scale-[0.99]"
                  >
                    Рассчитать по фото
                  </Link>
                </div>

                <div className="mt-4 text-xs text-zinc-500">
                  СПб и область • Договор • Гарантия
                </div>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
