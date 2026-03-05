"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef, useState } from "react";
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
  const touchStartRef = useRef<{ x: number; y: number } | null>(null);
  const half = Math.floor(items.length / 2);

  const goPrev = () => {
    setIndex((prev) => (prev - 1 + items.length) % items.length);
  };

  const goNext = () => {
    setIndex((prev) => (prev + 1) % items.length);
  };

  const selectAt = (nextIndex: number) => {
    if (nextIndex === index) return;
    setIndex(nextIndex);
  };

  const onTouchStart: React.TouchEventHandler<HTMLElement> = (e) => {
    const t = e.touches[0];
    touchStartRef.current = { x: t.clientX, y: t.clientY };
  };

  const onTouchEnd: React.TouchEventHandler<HTMLElement> = (e) => {
    const start = touchStartRef.current;
    if (!start) return;
    touchStartRef.current = null;

    const t = e.changedTouches[0];
    const dx = t.clientX - start.x;
    const dy = t.clientY - start.y;

    if (Math.abs(dx) < 52) return;
    if (Math.abs(dx) < Math.abs(dy) * 1.2) return;

    if (dx < 0) goNext();
    else goPrev();
  };

  const getRelativeOffset = (itemIndex: number) => {
    let offset = itemIndex - index;
    if (offset > half) offset -= items.length;
    if (offset < -half) offset += items.length;
    return offset;
  };

  const getCardTransform = (offset: number) => {
    const abs = Math.abs(offset);
    const direction = offset === 0 ? 0 : offset > 0 ? 1 : -1;
    const x = offset * 48;
    const y = abs * 18;
    const z = abs === 0 ? 98 : abs === 1 ? -72 : -184;
    const scale = abs === 0 ? 1 : abs === 1 ? 0.82 : 0.64;
    const rotateY = direction * -38;

    return `translate(-50%, -50%) translate3d(${x}%, ${y}px, ${z}px) rotateY(${rotateY}deg) scale(${scale})`;
  };

  return (
    <section className="nicor-service-3d-full">
      <div className="nicor-service-3d-top">
        <div className="text-sm font-semibold text-zinc-900 md:text-base">Выбор услуги</div>
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
        className="nicor-service-3d-wrap [touch-action:pan-y]"
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
        onTouchCancel={() => {
          touchStartRef.current = null;
        }}
      >
        <div className="nicor-service-3d-bg" />
        <div className="nicor-service-3d-stage">
          {items.map((item, i) => {
            const offset = getRelativeOffset(i);
            const abs = Math.abs(offset);
            if (abs > 2) return null;
            const active = i === index;

            return (
              <div
                key={`${item.href}-stage`}
                role="button"
                tabIndex={0}
                onClick={() => selectAt(i)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    selectAt(i);
                  }
                }}
                className={[
                  "nicor-service-3d-card",
                  active ? "is-active" : "",
                  abs >= 2 ? "is-far" : "",
                ].join(" ")}
                style={{
                  transform: getCardTransform(offset),
                  zIndex: 80 - abs * 14,
                  opacity: abs === 0 ? 1 : abs === 1 ? 0.9 : 0.56,
                }}
                aria-label={`Выбрать услугу: ${item.title}`}
              >
                <div className="relative h-full w-full overflow-hidden rounded-[20px]">
                  <Image
                    src={item.image}
                    alt={item.imageAlt}
                    fill
                    sizes="100vw"
                    className="object-cover"
                    style={{ objectPosition: item.imagePosition ?? "50% 50%" }}
                    priority={i === 0}
                  />
                  <div
                    className={[
                      "pointer-events-none absolute inset-0",
                      active
                        ? "bg-[linear-gradient(180deg,rgba(0,0,0,0.06),rgba(0,0,0,0.70))]"
                        : "bg-[linear-gradient(180deg,rgba(0,0,0,0.02),rgba(0,0,0,0.36))]",
                    ].join(" ")}
                  />

                  {active ? (
                    <div className="nicor-service-3d-content">
                      <div className="nicor-badge w-fit !text-[11px] !text-white/95 !border-white/35 !bg-black/35">
                        {item.tag}
                      </div>
                      <h3 className="mt-2 text-xl font-semibold tracking-[-0.02em] text-white md:text-3xl">
                        {item.title}
                      </h3>
                      <p className="mt-2 max-w-2xl text-sm text-white/90 md:text-base">{item.desc}</p>

                      <ul className="mt-3 grid gap-1.5 text-xs text-white/95 md:text-sm">
                        {item.bullets.map((b) => (
                          <li key={b} className="flex gap-2">
                            <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0" />
                            {b}
                          </li>
                        ))}
                      </ul>

                      <div className="mt-4 flex flex-wrap gap-2">
                        <Link
                          href={item.href}
                          onClick={(e) => e.stopPropagation()}
                          className="nicor-btn-primary nicor-btn-sm !text-white"
                        >
                          Открыть услугу
                        </Link>
                        <Link
                          href="/contacts#message"
                          onClick={(e) => e.stopPropagation()}
                          className="nicor-btn-ghost nicor-btn-sm !border-white/40 !bg-white/20 !text-white"
                        >
                          Рассчитать по фото
                        </Link>
                      </div>
                    </div>
                  ) : (
                    <div className="nicor-service-3d-card__meta">
                      <span className="truncate">{item.title}</span>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="mt-4">
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
      </div>
    </section>
  );
}
