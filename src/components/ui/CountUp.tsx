"use client";

import { useEffect, useRef } from "react";

type CountUpProps = {
  to: number;
  /** Separador de millares del idioma; el punto en español. */
  separator?: string;
  duration?: number;
  className?: string;
};

/* Escribe directamente en el nodo en vez de pasar por estado: son sesenta
   actualizaciones por segundo y no hay razón para que React re-renderice en
   cada una. Si el sistema pide reducir movimiento, aparece ya el número final.

   Reserva su propio ancho con el valor final oculto, para que la maqueta no se
   mueva mientras cuenta. */
export function CountUp({ to, separator = ".", duration = 1900, className = "" }: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const formatear = (n: number) =>
      Math.round(n).toString().replace(/\B(?=(\d{3})+(?!\d))/g, separator);

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
            // Desaceleración fuerte: el número llega, no aterriza de golpe.
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

  /* Lo que se anuncia es el valor final, no la cuenta: un lector de pantalla
     leyendo "cero" mientras sube el contador da justo el dato contrario. Toda
     la parte visible va oculta a la tecnología asistiva. */
  return (
    <span className={`relative inline-grid ${className}`}>
      <span className="sr-only">{formateado}</span>
      <span aria-hidden className="invisible col-start-1 row-start-1">
        {formateado}
      </span>
      <span ref={ref} aria-hidden className="col-start-1 row-start-1 tabular-nums">
        {formateado}
      </span>
    </span>
  );
}
