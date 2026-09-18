"use client";

import { useEffect, useRef } from "react";

type CountUpProps = {
  to: number;

  separator?: string;
  duration?: number;
  className?: string;
};

export function CountUp({
  to,
  separator = ".",
  duration = 1900,
  className = "",
}: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const formatear = (n: number) =>
      Math.round(n)
        .toString()
        .replace(/\B(?=(\d{3})+(?!\d))/g, separator);

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      el.textContent = formatear(to);
      return;
    }

    el.textContent = formatear(0);
    let cancelado = false;
    let raf = 0;

    const io = new IntersectionObserver(
      (entradas) => {
        for (const entrada of entradas) {
          if (!entrada.isIntersecting) continue;
          io.disconnect();
          const inicio = performance.now();
          const paso = (ahora: number) => {
            if (cancelado) return;
            const t = Math.min(1, (ahora - inicio) / duration);

            el.textContent = formatear(to * (1 - Math.pow(1 - t, 4)));
            if (t < 1) raf = requestAnimationFrame(paso);
          };
          raf = requestAnimationFrame(paso);
        }
      },
      { threshold: 0.4 },
    );

    io.observe(el);
    return () => {
      cancelado = true;
      cancelAnimationFrame(raf);
      io.disconnect();
    };
  }, [to, separator, duration]);

  const formateado = to.toString().replace(/\B(?=(\d{3})+(?!\d))/g, separator);

  return (
    <span className={`relative inline-grid ${className}`}>
      <span className="sr-only">{formateado}</span>
      <span aria-hidden className="invisible col-start-1 row-start-1">
        {formateado}
      </span>
      <span
        ref={ref}
        aria-hidden
        className="col-start-1 row-start-1 tabular-nums"
      >
        {formateado}
      </span>
    </span>
  );
}
