"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useMemo, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { PhoneCall } from "lucide-react";

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

  // На ресайзе пересчитывать — чтобы не съезжало
  useEffect(() => {
    const onResize = () => setHoverRect((r) => (r ? { ...r } : r));
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return { wrapRef, hoverRect, setFromEl, clear };
}

export function Header() {
  const pathname = usePathname();

  const activeHref = useMemo(() => {
    const found = NAV.find((i) => isActivePath(pathname, i.href));
    return found?.href ?? null;
  }, [pathname]);

  const { wrapRef, hoverRect, setFromEl, clear } = usePillTracker();
  const activeElRef = useRef<HTMLElement | null>(null);

  // Если мы ушли с навигации мышкой — можно “подтягивать” ховер на активный (не обязательно)
  const snapHoverToActive = () => {
    if (activeElRef.current) setFromEl(activeElRef.current);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-zinc-200/70 bg-white/75 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <div className="grid h-10 w-10 place-items-center rounded-xl border border-zinc-200 bg-zinc-50 font-black tracking-wide shadow-sm">
            Н
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
            onMouseLeave={() => {
              // можно либо полностью скрывать hover-пилюлю:
              clear();
              // или “прилипать” к активному:
              // snapHoverToActive();
            }}
            className="relative flex items-center gap-1 rounded-full border border-zinc-200 bg-white/60 p-1 shadow-sm"
          >
            {/* общий мягкий glow под всей капсулой */}
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

            {/* Hover pill (магнитная) */}
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
                    // “дорогая” подложка на ховер — очень деликатная
                    background:
                      "linear-gradient(120deg, rgba(99,102,241,.12), rgba(16,185,129,.10), rgba(236,72,153,.09))",
                    boxShadow: "inset 0 0 0 1px rgba(0,0,0,.06)",
                  }}
                />
              )}
            </AnimatePresence>

            {/* Active pill (переливающаяся) */}
            {activeHref && (
              <motion.div
                layoutId="nicor-active-pill"
                className="pointer-events-none absolute top-1 bottom-1 rounded-full"
                style={{
                  // тут именно “перелив”, но тонко
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
                    ref={(node) => {
                      if (active) activeElRef.current = node;
                    }}
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

        {/* Right actions */}
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
      </div>
    </header>
  );
}
