"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowLeft, ArrowRight, CheckCircle2 } from "lucide-react";

export type ServiceSelectorItem = {
  title: string;
  href: string;
  desc: string;
  bullets: string[];
  tag: string;
  image: string;
  imageAlt: string;
  imagePosition?: string;
};

export function ServiceSelector({ items }: { items: ServiceSelectorItem[] }) {
  const [index, setIndex] = useState(0);
  const [dir, setDir] = useState<1 | -1>(1);
  const touchStartRef = useRef<{ x: number; y: number } | null>(null);
  const current = items[index];

  const goPrev = () => {
    setDir(-1);
    setIndex((prev) => (prev - 1 + items.length) % items.length);
  };

  const goNext = () => {
    setDir(1);
    setIndex((prev) => (prev + 1) % items.length);
  };

  const selectAt = (nextIndex: number) => {
    if (nextIndex === index) return;
    setDir(nextIndex > index ? 1 : -1);
    setIndex(nextIndex);
  };

  const onTouchStart: React.TouchEventHandler<HTMLDivElement> = (e) => {
    const t = e.touches[0];
    touchStartRef.current = { x: t.clientX, y: t.clientY };
  };

  const onTouchEnd: React.TouchEventHandler<HTMLDivElement> = (e) => {
    const start = touchStartRef.current;
    if (!start) return;
    touchStartRef.current = null;

    const t = e.changedTouches[0];
    const dx = t.clientX - start.x;
    const dy = t.clientY - start.y;

    // keep native vertical scroll intact; react only to clear horizontal swipes
    if (Math.abs(dx) < 52) return;
    if (Math.abs(dx) < Math.abs(dy) * 1.2) return;

    if (dx < 0) goNext();
    else goPrev();
  };

  return (
    <div className="nicor-card-premium p-4 md:p-6">
      <div className="mb-4 flex items-center justify-between gap-3">
        <div className="text-sm font-semibold text-zinc-900">Выбор услуги</div>
        <div className="inline-flex items-center gap-2">
          <button
            type="button"
            onClick={goPrev}
            aria-label="Предыдущая услуга"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-zinc-200 bg-white/90 transition hover:bg-white active:scale-[0.98]"
          >
            <ArrowLeft className="h-4 w-4" />
          </button>
          <div className="min-w-[72px] text-center text-xs font-semibold text-zinc-600">
            {index + 1} / {items.length}
          </div>
          <button
            type="button"
            onClick={goNext}
            aria-label="Следующая услуга"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-zinc-200 bg-white/90 transition hover:bg-white active:scale-[0.98]"
          >
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>
      </div>

      <div
        className="grid gap-5 lg:grid-cols-[1.15fr_1fr] [touch-action:pan-y]"
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
        onTouchCancel={() => {
          touchStartRef.current = null;
        }}
      >
        <div className="relative overflow-hidden rounded-[24px] border border-zinc-200 bg-white/80">
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={current.href}
              initial={{ opacity: 0, x: dir > 0 ? 36 : -36 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: dir > 0 ? -36 : 36 }}
              transition={{ duration: 0.28, ease: "easeOut" }}
              className="relative aspect-[16/11] w-full"
            >
              <Image
                src={current.image}
                alt={current.imageAlt}
                fill
                sizes="(max-width: 1024px) 100vw, 56vw"
                className="object-cover"
                style={{ objectPosition: current.imagePosition ?? "50% 50%" }}
                priority={index === 0}
              />
              <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.04),rgba(0,0,0,0.18))]" />
            </motion.div>
          </AnimatePresence>
        </div>

        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={`${current.href}-content`}
            initial={{ opacity: 0, x: dir > 0 ? 22 : -22 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: dir > 0 ? -22 : 22 }}
            transition={{ duration: 0.24, ease: "easeOut" }}
          >
            <div className="nicor-badge text-[11px]">{current.tag}</div>
            <h3 className="mt-2 text-2xl font-semibold tracking-[-0.02em] text-zinc-900">{current.title}</h3>
            <p className="mt-3 text-sm text-zinc-600">{current.desc}</p>

            <ul className="mt-4 grid gap-2 text-sm text-zinc-700">
              {current.bullets.map((b) => (
                <li key={b} className="flex gap-2">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 text-zinc-900" />
                  {b}
                </li>
              ))}
            </ul>

            <div className="mt-5 flex flex-wrap gap-3">
              <Link href={current.href} className="nicor-btn-primary !text-white">
                Открыть услугу <ArrowRight className="h-4 w-4 opacity-90" />
              </Link>
              <Link href="/contacts#message" className="nicor-btn-ghost">
                Рассчитать по фото
              </Link>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="mt-4 lg:hidden">
        <div className="flex items-center justify-center gap-1.5">
          {items.map((item, i) => {
            const active = i === index;
            return (
              <button
                key={`${item.href}-dot`}
                type="button"
                onClick={() => selectAt(i)}
                aria-label={`Перейти к карточке ${i + 1}`}
                className={[
                  "h-2.5 rounded-full transition-all",
                  active ? "w-6 bg-zinc-900" : "w-2.5 bg-zinc-300",
                ].join(" ")}
              />
            );
          })}
        </div>

        <div className="mx-auto mt-3 h-1.5 w-full max-w-[240px] overflow-hidden rounded-full bg-zinc-200/70">
          <motion.div
            className="h-full rounded-full bg-zinc-900/85"
            animate={{ width: `${((index + 1) / items.length) * 100}%` }}
            transition={{ type: "spring", stiffness: 280, damping: 32 }}
          />
        </div>
      </div>

      <div className="mt-4 grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
        {items.map((item, i) => {
          const active = i === index;

          return (
            <button
              key={item.href}
              type="button"
              onClick={() => selectAt(i)}
              className={[
                "group overflow-hidden rounded-2xl border text-left transition",
                active
                  ? "border-zinc-900/35 bg-white shadow-[0_10px_30px_rgba(0,0,0,0.10)]"
                  : "border-zinc-200 bg-white/70 hover:border-zinc-300 hover:bg-white/90",
              ].join(" ")}
              aria-label={`Выбрать услугу: ${item.title}`}
            >
              <div className="relative aspect-[16/9] w-full">
                <Image
                  src={item.image}
                  alt={item.imageAlt}
                  fill
                  sizes="(max-width: 1280px) 50vw, 25vw"
                  style={{ objectPosition: item.imagePosition ?? "50% 50%" }}
                  className={[
                    "object-cover transition duration-300",
                    active ? "scale-[1.03]" : "group-hover:scale-[1.04]",
                  ].join(" ")}
                />
              </div>
              <div className="px-3 py-2">
                <div className="line-clamp-1 text-sm font-semibold text-zinc-900">{item.title}</div>
                <div className="mt-0.5 text-xs text-zinc-500">{item.tag}</div>
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}
