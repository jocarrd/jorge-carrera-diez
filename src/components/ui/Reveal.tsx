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
          // Con `isIntersecting` a secas, un scroll rápido deja bloques en
          // blanco: si el elemento entra y sale entre dos fotogramas el
          // observador nunca llega a verlo dentro, y como se desconecta al
          // primer aviso, ya no vuelve. Medido bajando la portada de un tirón:
          // nueve de catorce se quedaban invisibles.
          //
          // El borde inferior del elemento por encima del alto de la ventana
          // significa que ya ha pasado de largo por arriba: revelar igual.
          const yaPasado = entry.boundingClientRect.bottom < window.innerHeight;
          if (!entry.isIntersecting && !yaPasado) continue;
          el.classList.add("reveal-in");
          io.disconnect();
        }
      },
      // Un umbral con área pedía que asomase un trozo del bloque, y los que
      // miden más que la ventana no llegaban a cumplirlo nunca. Basta el primer
      // píxel.
      { rootMargin: "0px 0px -10% 0px", threshold: 0 },
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
