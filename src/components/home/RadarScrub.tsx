"use client";

import { useEffect, useRef, useState } from "react";
import { Container, LaptopFrame } from "@/components/ui";
import { getCopy, site } from "@/content";
import type { Locale } from "@/i18n/config";

const TOTAL = 14;
const fotograma = (i: number) => `/images/radar/r${String(i).padStart(2, "0")}.webp`;

/* El radar avanza en el tiempo según bajas: la secuencia son capturas reales
   del radar de Snowy, un paso cada media hora.
 *
 * Se pinta en un canvas y no con <img>, porque cambiar el `src` en cada paso
 * provoca un parpadeo mientras el navegador decodifica. Con el canvas se
 * decodifica todo una vez y luego solo se copia el bitmap.
 *
 * Las imágenes no se cargan hasta que la sección se acerca: es medio mega y no
 * tiene por qué pagarlo quien no llega hasta aquí.
 */
export function RadarScrub({ locale }: { locale: Locale }) {
  const copy = getCopy(locale).radarScrub;
  const contenedor = useRef<HTMLDivElement>(null);
  const lienzo = useRef<HTMLCanvasElement>(null);
  const imagenes = useRef<HTMLImageElement[]>([]);
  const [listo, setListo] = useState(false);

  useEffect(() => {
    const nodo = contenedor.current;
    if (!nodo) return;

    let cancelado = false;
    const io = new IntersectionObserver(
      async (entradas) => {
        if (!entradas.some((e) => e.isIntersecting)) return;
        io.disconnect();
        const cargas = Array.from({ length: TOTAL }, (_, i) => {
          const img = new Image();
          img.src = fotograma(i);
          return img.decode().then(() => img).catch(() => img);
        });
        const cargadas = await Promise.all(cargas);
        if (cancelado) return;
        imagenes.current = cargadas;
        setListo(true);
      },
      { rootMargin: "600px 0px" },
    );

    io.observe(nodo);
    return () => {
      cancelado = true;
      io.disconnect();
    };
  }, []);

  useEffect(() => {
    if (!listo) return;
    const nodo = contenedor.current;
    const cv = lienzo.current;
    if (!nodo || !cv) return;

    const ctx = cv.getContext("2d");
    if (!ctx) return;

    const primera = imagenes.current[0];
    if (primera?.naturalWidth) {
      cv.width = primera.naturalWidth;
      cv.height = primera.naturalHeight;
    }

    let ultimo = -1;
    let pendiente = false;

    const pintar = () => {
      pendiente = false;
      const caja = nodo.getBoundingClientRect();
      // Progreso mientras la sección atraviesa la ventana.
      const recorrido = caja.height - window.innerHeight;
      const avance = recorrido > 0 ? (-caja.top) / recorrido : 0;
      const i = Math.max(0, Math.min(TOTAL - 1, Math.round(avance * (TOTAL - 1))));
      if (i === ultimo) return;
      const img = imagenes.current[i];
      if (img?.naturalWidth) {
        ctx.drawImage(img, 0, 0, cv.width, cv.height);
        ultimo = i;
      }
    };

    const alDesplazar = () => {
      if (pendiente) return;
      pendiente = true;
      requestAnimationFrame(pintar);
    };

    pintar();
    window.addEventListener("scroll", alDesplazar, { passive: true });
    window.addEventListener("resize", alDesplazar);
    return () => {
      window.removeEventListener("scroll", alDesplazar);
      window.removeEventListener("resize", alDesplazar);
    };
  }, [listo]);

  return (
    <section ref={contenedor} className="relative h-[130vh] bg-[var(--panel)]">
      <div className="sticky top-0 flex h-screen flex-col justify-center overflow-hidden">
        <Container>
          <div className="mx-auto max-w-[46rem] text-center">
            <p className="text-[15px] font-semibold uppercase tracking-[0.14em] text-[var(--accent-text)]">
              {copy.eyebrow}
            </p>
            <h2 className="mt-3 text-[1.75rem] font-bold leading-[1.1] tracking-[-0.035em] sm:text-[2.75rem]">
              {copy.title}
            </h2>
          </div>
          {/* Los fotogramas traen la interfaz de Snowy dentro: el play, las
              capas, el selector de temperatura. En una caja pelada eso se lee
              como botonera muerta de esta web; dentro del portátil se lee como
              lo que es, una aplicación de escritorio en uso. */}
          <div className="mx-auto mt-7 max-w-[52rem]">
            <LaptopFrame label={site.snowyDomain}>
              <canvas ref={lienzo} role="img" aria-label={copy.imageAlt} />
            </LaptopFrame>
          </div>
          <p className="mt-5 text-center text-sm text-[var(--muted)]">{copy.caption}</p>
        </Container>
      </div>
    </section>
  );
}
