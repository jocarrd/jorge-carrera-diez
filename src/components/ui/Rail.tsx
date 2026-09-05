"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import type { ReactNode } from "react";

type RailProps = {
  children: ReactNode;
  label: string;
  className?: string;
};

// Tres tarjetas apiladas son tres pantallas de scroll; en fila son una. El
// carril mantiene el gesto nativo (dedo en móvil, trackpad en escritorio) y
// añade los controles sólo donde el ratón no puede arrastrar.
export function Rail({ children, label, className = "" }: RailProps) {
  const trackRef = useRef<HTMLDivElement>(null);
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(false);
  const [index, setIndex] = useState(0);
  const [count, setCount] = useState(0);

  const sync = useCallback(() => {
    const track = trackRef.current;
    if (!track) return;

    // 1px de holgura: con zoom o pantallas HiDPI el scrollLeft máximo queda en
    // decimales y el botón "siguiente" nunca llegaba a desactivarse.
    const max = track.scrollWidth - track.clientWidth;
    setAtStart(track.scrollLeft <= 1);
    setAtEnd(track.scrollLeft >= max - 1);

    const items = Array.from(track.children) as HTMLElement[];
    setCount(items.length);
    if (items.length === 0) return;

    const closest = items.reduce(
      (best, item, i) => {
        const distance = Math.abs(item.offsetLeft - track.scrollLeft);
        return distance < best.distance ? { distance, i } : best;
      },
      { distance: Infinity, i: 0 },
    );
    setIndex(closest.i);
  }, []);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    sync();
    track.addEventListener("scroll", sync, { passive: true });

    const observer = new ResizeObserver(sync);
    observer.observe(track);

    return () => {
      track.removeEventListener("scroll", sync);
      observer.disconnect();
    };
  }, [sync]);

  const step = (direction: 1 | -1) => {
    const track = trackRef.current;
    if (!track) return;

    const items = Array.from(track.children) as HTMLElement[];
    const target = items[index + direction];
    if (!target) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    track.scrollTo({ left: target.offsetLeft, behavior: reduced ? "auto" : "smooth" });
  };

  const hasControls = count > 1;

  return (
    <div className={className}>
      {hasControls ? (
        <div className="mb-5 flex items-center justify-end gap-3">
          <p className="rail-counter font-mono text-xs tabular-nums">
            {String(index + 1).padStart(2, "0")}
            <span className="rail-counter-sep mx-1">/</span>
            {String(count).padStart(2, "0")}
          </p>
          <div className="rail-controls gap-2">
            <RailButton
              direction="prev"
              disabled={atStart}
              label={`${label}: anterior`}
              onClick={() => step(-1)}
            />
            <RailButton
              direction="next"
              disabled={atEnd}
              label={`${label}: siguiente`}
              onClick={() => step(1)}
            />
          </div>
        </div>
      ) : null}

      {/* tabIndex hace el carril enfocable: sin él, quien navega con teclado no
          puede desplazarlo con las flechas porque no hay nada que reciba foco. */}
      <div
        ref={trackRef}
        role="group"
        aria-label={label}
        tabIndex={0}
        className="rail-track -mx-[22px] flex snap-x snap-mandatory gap-5 overflow-x-auto px-[22px] pb-2 sm:-mx-8 sm:px-8"
      >
        {children}
      </div>
    </div>
  );
}

function RailButton({
  direction,
  disabled,
  label,
  onClick,
}: {
  direction: "prev" | "next";
  disabled: boolean;
  label: string;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      aria-label={label}
      disabled={disabled}
      onClick={onClick}
      className="rail-btn flex h-9 w-9 items-center justify-center rounded-full transition disabled:cursor-default disabled:opacity-30"
    >
      <svg
        aria-hidden
        viewBox="0 0 24 24"
        className={`h-4 w-4 ${direction === "prev" ? "rotate-180" : ""}`}
        fill="none"
        stroke="currentColor"
        strokeWidth={2.2}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="m9 5 7 7-7 7" />
      </svg>
    </button>
  );
}
