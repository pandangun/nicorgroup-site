"use client";

import Link from "next/link";
import { ArrowLeft, ArrowRight, CheckCircle2 } from "lucide-react";
import { useRef, useState } from "react";

export type PackageItem = {
  title: string;
  price: string;
  desc: string;
  bullets: string[];
  tag: string;
};

type SpinState = {
  x: number;
  y: number;
  transitioning: boolean;
  transitionMs: number;
};

function PackageWheelCard({ item }: { item: PackageItem }) {
  return (
    <div className="nicor-card-premium h-full p-6">
      <div className="flex items-center justify-between gap-3">
        <div className="text-base font-semibold">{item.title}</div>
        <span className="nicor-badge">{item.tag}</span>
      </div>
      <div className="mt-2 text-2xl font-semibold">{item.price}</div>
      <div className="mt-2 text-sm text-zinc-600">{item.desc}</div>

      <ul className="mt-4 grid gap-2 text-sm text-zinc-700">
        {item.bullets.map((b) => (
          <li key={b} className="flex gap-2">
            <CheckCircle2 className="mt-0.5 h-4 w-4 text-zinc-900" />
            {b}
          </li>
        ))}
      </ul>

      <Link href="/contacts#message" className="mt-5 w-full nicor-btn-primary">
        Узнать точнее <ArrowRight className="h-4 w-4 opacity-90" />
      </Link>
    </div>
  );
}

export function PackageSpinGrid({ items }: { items: PackageItem[] }) {
  const step = 360 / items.length;
  const [spin, setSpin] = useState<SpinState>({
    x: -8,
    y: 0,
    transitioning: true,
    transitionMs: 800,
  });
  const dragRef = useRef<{ x: number; y: number } | null>(null);
  const motionRef = useRef<{ lastX: number; lastTs: number; velY: number }>({
    lastX: 0,
    lastTs: 0,
    velY: 0,
  });

  const snapToClosestStep = (angle: number) => Math.round(angle / step) * step;
  const clamp = (value: number, min: number, max: number) => Math.max(min, Math.min(max, value));

  const onPointerDown: React.PointerEventHandler<HTMLDivElement> = (e) => {
    dragRef.current = { x: e.clientX, y: e.clientY };
    motionRef.current = { lastX: e.clientX, lastTs: performance.now(), velY: 0 };
    setSpin((prev) => ({ ...prev, transitioning: false, transitionMs: 0 }));
    e.currentTarget.setPointerCapture(e.pointerId);
  };

  const onPointerMove: React.PointerEventHandler<HTMLDivElement> = (e) => {
    const start = dragRef.current;
    if (!start) return;
    const dx = e.clientX - start.x;
    const dy = e.clientY - start.y;
    const deltaRotY = dx * 0.42;

    const now = performance.now();
    const dt = Math.max(8, now - motionRef.current.lastTs);
    const instantVelY = deltaRotY / dt;
    motionRef.current.velY = motionRef.current.velY * 0.72 + instantVelY * 0.28;
    motionRef.current.lastX = e.clientX;
    motionRef.current.lastTs = now;

    setSpin((prev) => ({
      ...prev,
      x: Math.max(-22, Math.min(14, prev.x - dy * 0.12)),
      y: prev.y + deltaRotY,
    }));

    dragRef.current = { x: e.clientX, y: e.clientY };
  };

  const onPointerUp: React.PointerEventHandler<HTMLDivElement> = () => {
    dragRef.current = null;
    const inertialThrow = clamp(motionRef.current.velY * 320, -140, 140);
    const inertiaAbs = Math.abs(inertialThrow);
    const releaseDuration = Math.round(clamp(560 + inertiaAbs * 2.2, 560, 980));

    setSpin((prev) => ({
      ...prev,
      transitioning: true,
      x: -8,
      y: snapToClosestStep(prev.y + inertialThrow),
      transitionMs: releaseDuration,
    }));
  };

  const rotate360 = () => {
    setSpin((prev) => ({ ...prev, y: prev.y + 360, transitioning: true, transitionMs: 900 }));
  };

  const goPrev = () => {
    setSpin((prev) => ({ ...prev, y: prev.y + step, transitioning: true, transitionMs: 700 }));
  };

  const goNext = () => {
    setSpin((prev) => ({ ...prev, y: prev.y - step, transitioning: true, transitionMs: 700 }));
  };

  return (
    <div className="mt-6">
      <div className="nicor-package-wheel-shell">
        <div className="nicor-package-wheel-controls">
          <button
            type="button"
            className="nicor-package-wheel-btn"
            onClick={goPrev}
            aria-label="Повернуть пакеты влево"
          >
            <ArrowLeft className="h-4 w-4" />
          </button>

          <button
            type="button"
            className="nicor-package-wheel-btn is-360"
            onClick={rotate360}
            aria-label="Повернуть колесо пакетов на 360 градусов"
          >
            360°
          </button>

          <button
            type="button"
            className="nicor-package-wheel-btn"
            onClick={goNext}
            aria-label="Повернуть пакеты вправо"
          >
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>

        <div
          className="nicor-package-wheel-stage"
          onPointerDown={onPointerDown}
          onPointerMove={onPointerMove}
          onPointerUp={onPointerUp}
          onPointerCancel={onPointerUp}
        >
          <div
            className={[
              "nicor-package-wheel-rotor",
              spin.transitioning ? "is-transitioning" : "",
            ].join(" ")}
            style={
              {
                "--pkg-wheel-rot-y": `${spin.y}deg`,
                "--pkg-wheel-tilt-x": `${spin.x}deg`,
                "--pkg-wheel-rotor-dur": `${spin.transitionMs}ms`,
              } as React.CSSProperties
            }
          >
            {items.map((item, i) => (
              <article
                key={item.title}
                className="nicor-package-wheel-face"
                style={{
                  transform: `translate(-50%, -50%) rotateY(${step * i}deg) translateZ(var(--pkg-wheel-radius))`,
                }}
              >
                <div className="nicor-package-wheel-card">
                  <div className="nicor-package-wheel-card-side nicor-package-wheel-card-side--front">
                    <PackageWheelCard item={item} />
                  </div>
                  <div
                    className="nicor-package-wheel-card-side nicor-package-wheel-card-side--back"
                    aria-hidden="true"
                  />
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
