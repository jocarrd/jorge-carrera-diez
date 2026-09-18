"use client";

import { useEffect, useRef } from "react";
import { Container, LaptopFrame } from "@/components/ui";
import { getCopy, site } from "@/content";
import type { Locale } from "@/i18n/config";

const TOTAL = 14;
const MS_POR_PASO = 420;
const MS_PAUSA_FINAL = 1400;

const fotograma = (i: number) =>
  `/images/radar/r${String(i).padStart(2, "0")}.webp`;

export function RadarScrub({ locale }: { locale: Locale }) {
  const copy = getCopy(locale).radarScrub;
  const contenedor = useRef<HTMLDivElement>(null);
  const lienzo = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const nodo = contenedor.current;
    const cv = lienzo.current;
    if (!nodo || !cv) return;

    const ctx = cv.getContext("2d");
    if (!ctx) return;

    const sinMovimiento = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    let cancelado = false;
    let imagenes: HTMLImageElement[] = [];
    let indice = 0;
    let temporizador: number | undefined;
    let visible = false;

    const pintar = (i: number) => {
      const img = imagenes[i];
      if (!img?.naturalWidth) return;
      if (cv.width !== img.naturalWidth) {
        cv.width = img.naturalWidth;
        cv.height = img.naturalHeight;
      }
      ctx.drawImage(img, 0, 0, cv.width, cv.height);
    };

    const paso = () => {
      if (cancelado || !visible) return;
      pintar(indice);
      const ultimo = indice === TOTAL - 1;
      indice = ultimo ? 0 : indice + 1;
      temporizador = window.setTimeout(
        paso,
        ultimo ? MS_PAUSA_FINAL : MS_POR_PASO,
      );
    };

    const parar = () => {
      if (temporizador) window.clearTimeout(temporizador);
      temporizador = undefined;
    };

    const io = new IntersectionObserver(
      async (entradas) => {
        const dentro = entradas.some((e) => e.isIntersecting);
        if (dentro && !imagenes.length) {
          const cargas = Array.from({ length: TOTAL }, (_, i) => {
            const img = new Image();
            img.src = fotograma(i);
            return img
              .decode()
              .then(() => img)
              .catch(() => img);
          });
          const cargadas = await Promise.all(cargas);
          if (cancelado) return;
          imagenes = cargadas;
          pintar(0);
        }
        visible = dentro;
        if (sinMovimiento) return;
        if (dentro) {
          if (!temporizador) paso();
        } else {
          parar();
        }
      },
      { rootMargin: "300px 0px", threshold: 0 },
    );

    io.observe(nodo);
    return () => {
      cancelado = true;
      parar();
      io.disconnect();
    };
  }, []);

  return (
    <section ref={contenedor} className="bg-[var(--panel)] py-16 sm:py-24">
      <Container>
        <div className="mx-auto max-w-[46rem] text-center">
          <h2 className="t-section">{copy.title}</h2>
        </div>
        <div className="mx-auto mt-8 max-w-[52rem]">
          <LaptopFrame label={site.snowyDomain}>
            <canvas ref={lienzo} role="img" aria-label={copy.imageAlt} />
          </LaptopFrame>
        </div>
        <p className="mt-5 text-center text-sm text-[var(--muted)]">
          {copy.caption}
        </p>
      </Container>
    </section>
  );
}
