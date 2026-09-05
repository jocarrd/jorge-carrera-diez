"use client";

import { useEffect, useRef } from "react";
import type { ReactNode } from "react";

// Las clases se ponen sobre el nodo en vez de pasar por estado: así el estado
// de partida solo existe si el efecto llegó a ejecutarse, y sin JavaScript o
// con movimiento reducido el contenido se ve desde el primer pintado. Se
// observa una vez y se deja de observar; el movimiento no se repite.
export function Reveal({
  children,
  className = "",
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    el.style.transitionDelay = `${delay}ms`;
    el.classList.add("reveal-init");

    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          el.classList.add("reveal-in");
          io.disconnect();
        }
      },
      { rootMargin: "0px 0px -12% 0px", threshold: 0.05 },
    );

    io.observe(el);
    return () => io.disconnect();
  }, [delay]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
