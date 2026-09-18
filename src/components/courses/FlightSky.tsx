"use client";

import { useEffect, useRef } from "react";

type Estrella = {
  x: number;
  y: number;
  r: number;
  base: number;
  fase: number;
  velocidad: number;
  brillante: boolean;
};

const DENSIDAD = 0.00042;
const MAXIMO = 1100;

export function FlightSky({ inicio = 0.46 }: { inicio?: number }) {
  const lienzo = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const cv = lienzo.current;
    if (!cv) return;
    const ctx = cv.getContext("2d");
    if (!ctx) return;

    const sinMovimiento = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    let ancho = 0;
    let alto = 0;
    let estrellas: Estrella[] = [];
    let bucle = 0;
    let visible = false;

    const sembrar = () => {
      const caja = cv.getBoundingClientRect();
      ancho = Math.max(1, Math.round(caja.width));
      alto = Math.max(1, Math.round(caja.height));
      const dpr = Math.min(2, window.devicePixelRatio || 1);
      cv.width = ancho * dpr;
      cv.height = alto * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      const zona = alto * (1 - inicio);
      const cuantas = Math.min(MAXIMO, Math.round(ancho * zona * DENSIDAD));
      estrellas = Array.from({ length: cuantas }, () => {
        const t = Math.random() ** 0.6;
        const brillante = Math.random() < 0.07;
        return {
          x: Math.random() * ancho,
          y: alto * inicio + t * zona,
          r: brillante ? 1.4 + Math.random() * 1.1 : 0.5 + Math.random() ** 2 * 1.3,
          base: brillante ? 0.95 : 0.4 + Math.random() * 0.6,
          fase: Math.random() * Math.PI * 2,
          velocidad: 0.4 + Math.random() * 1.1,
          brillante,
        };
      });
    };

    const luna = (cx: number, cy: number, r: number) => {
      const g = ctx.createRadialGradient(
        cx - r * 0.3,
        cy - r * 0.35,
        r * 0.1,
        cx,
        cy,
        r,
      );
      g.addColorStop(0, "#fdfcf7");
      g.addColorStop(0.62, "#e4e2da");
      g.addColorStop(1, "#b9b7ae");
      ctx.beginPath();
      ctx.arc(cx, cy, r, 0, Math.PI * 2);
      ctx.fillStyle = g;
      ctx.fill();

      ctx.globalAlpha = 0.16;
      ctx.fillStyle = "#6f6d66";
      for (const [dx, dy, dr] of [
        [-0.32, -0.18, 0.2],
        [0.22, 0.26, 0.15],
        [0.34, -0.3, 0.1],
        [-0.12, 0.38, 0.11],
        [0.02, -0.02, 0.13],
      ]) {
        ctx.beginPath();
        ctx.arc(cx + dx * r, cy + dy * r, dr * r, 0, Math.PI * 2);
        ctx.fill();
      }
      ctx.globalAlpha = 1;
    };

    const planeta = (
      cx: number,
      cy: number,
      r: number,
      dentro: string,
      fuera: string,
      anillo: boolean,
    ) => {
      if (anillo) {
        ctx.save();
        ctx.translate(cx, cy);
        ctx.rotate(-0.38);
        ctx.beginPath();
        ctx.ellipse(0, 0, r * 2.05, r * 0.52, 0, 0, Math.PI * 2);
        ctx.strokeStyle = "rgba(226, 216, 199, 0.55)";
        ctx.lineWidth = Math.max(1.2, r * 0.16);
        ctx.stroke();
        ctx.restore();
      }
      const g = ctx.createRadialGradient(
        cx - r * 0.35,
        cy - r * 0.35,
        r * 0.12,
        cx,
        cy,
        r,
      );
      g.addColorStop(0, dentro);
      g.addColorStop(1, fuera);
      ctx.beginPath();
      ctx.arc(cx, cy, r, 0, Math.PI * 2);
      ctx.fillStyle = g;
      ctx.fill();
    };

    const cuerpos = () => {
      const zona = alto * (1 - inicio);
      luna(ancho * 0.82, alto * inicio + zona * 0.22, Math.min(46, ancho * 0.035));
      planeta(
        ancho * 0.065,
        alto * inicio + zona * 0.68,
        Math.min(30, ancho * 0.023),
        "#f0c08a",
        "#a8703c",
        true,
      );
      planeta(
        ancho * 0.92,
        alto * inicio + zona * 0.86,
        Math.min(17, ancho * 0.013),
        "#9fc7e8",
        "#3f6d95",
        false,
      );
    };

    const pintar = (t: number) => {
      ctx.clearRect(0, 0, ancho, alto);
      cuerpos();
      for (const e of estrellas) {
        const profundidad =
          (e.y - alto * inicio) / Math.max(1, alto * (1 - inicio));
        const entrada = Math.min(1, profundidad * 3);
        const parpadeo = sinMovimiento
          ? 1
          : 0.75 + 0.25 * Math.sin(t * 0.0013 * e.velocidad + e.fase);
        ctx.globalAlpha = Math.min(1, e.base * entrada * parpadeo);
        if (e.brillante) {
          const halo = ctx.createRadialGradient(e.x, e.y, 0, e.x, e.y, e.r * 4);
          halo.addColorStop(0, "rgba(255,255,255,0.9)");
          halo.addColorStop(1, "rgba(255,255,255,0)");
          ctx.beginPath();
          ctx.arc(e.x, e.y, e.r * 4, 0, Math.PI * 2);
          ctx.fillStyle = halo;
          ctx.fill();
        }
        ctx.beginPath();
        ctx.arc(e.x, e.y, e.r, 0, Math.PI * 2);
        ctx.fillStyle = "#ffffff";
        ctx.fill();
      }
      ctx.globalAlpha = 1;
    };

    const animar = (t: number) => {
      if (!visible) return;
      pintar(t);
      bucle = requestAnimationFrame(animar);
    };

    sembrar();
    pintar(0);

    const ro = new ResizeObserver(() => {
      sembrar();
      pintar(performance.now());
    });
    ro.observe(cv);

    const io = new IntersectionObserver(
      (entradas) => {
        visible = entradas.some((e) => e.isIntersecting);
        if (visible && !sinMovimiento && !bucle) {
          bucle = requestAnimationFrame(animar);
        }
        if (!visible && bucle) {
          cancelAnimationFrame(bucle);
          bucle = 0;
        }
      },
      { rootMargin: "200px 0px" },
    );
    io.observe(cv);

    return () => {
      if (bucle) cancelAnimationFrame(bucle);
      ro.disconnect();
      io.disconnect();
    };
  }, [inicio]);

  return <canvas ref={lienzo} aria-hidden className="flight-stars" />;
}
