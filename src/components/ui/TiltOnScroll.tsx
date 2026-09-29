"use client";

import { useEffect, useRef } from "react";
import type { ReactNode } from "react";
import { useReducedMotion } from "@/lib/use-reduced-motion";

export function TiltOnScroll({ children }: { children: ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();

  useEffect(() => {
    const node = ref.current;
    if (!node || reduced) return;
    let frame = 0;
    const update = () => {
      frame = 0;
      const rect = node.getBoundingClientRect();
      const start = window.innerHeight;
      const end = window.innerHeight * 0.35;
      const progress = Math.min(
        1,
        Math.max(0, (start - rect.top) / (start - end)),
      );
      node.style.setProperty("--tilt", String(1 - progress));
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      cancelAnimationFrame(frame);
    };
  }, [reduced]);

  return (
    <div className="tilt-stage">
      <div ref={ref} className="tilt-card">
        {children}
      </div>
    </div>
  );
}
