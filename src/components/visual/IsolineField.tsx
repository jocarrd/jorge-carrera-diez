"use client";

import { useEffect, useRef } from "react";

/**
 * Campo de isolíneas, como una carta de presión.
 *
 * El fondo anterior —rejilla de puntos, anillos, degradados— es el fondo por
 * defecto de cualquier portfolio oscuro: no dice nada de quien lo usa. Esto sí:
 * Snowy son dieciséis modelos meteorológicos y un radar, y EQx es un índice que
 * mide países. El lenguaje de la casa es el de los instrumentos, no el de "tech".
 *
 * El campo escalar es una suma de gaussianas que derivan despacio; las curvas
 * salen por marching squares sobre esa malla. Una de cada cuatro va más marcada,
 * como las isohipsas maestras de una carta real.
 */
const CELL = 18;
const LEVELS = 22;

type Blob = { x: number; y: number; vx: number; vy: number; r: number; a: number };

export function IsolineField({ className = "" }: { className?: string }) {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let width = 0;
    let height = 0;
    let cols = 0;
    let rows = 0;
    let blobs: Blob[] = [];
    let frame = 0;

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = rect.width;
      height = rect.height;
      canvas.width = Math.round(width * dpr);
      canvas.height = Math.round(height * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      cols = Math.ceil(width / CELL) + 1;
      rows = Math.ceil(height / CELL) + 1;

      // Radios pequeños: el gradiente es más pronunciado y las curvas salen
      // juntas, como en una carta real. Con radios grandes salían cuatro arcos.
      const base = Math.min(width, height);
      blobs = Array.from({ length: 9 }, (_, i) => ({
        x: width * (0.08 + 0.11 * i),
        y: height * (0.18 + 0.62 * ((i * 0.37) % 1)),
        vx: (i % 2 ? 1 : -1) * (0.06 + i * 0.010),
        vy: (i % 3 ? -1 : 1) * (0.045 + i * 0.007),
        r: base * (0.11 + (i % 4) * 0.045),
        a: i % 2 ? 1 : -1,
      }));
    };

    const valueAt = (x: number, y: number) => {
      let sum = 0;
      for (const b of blobs) {
        const dx = x - b.x;
        const dy = y - b.y;
        sum += b.a * Math.exp(-(dx * dx + dy * dy) / (2 * b.r * b.r));
      }
      return sum;
    };

    const draw = () => {
      ctx.clearRect(0, 0, width, height);

      const grid: number[][] = [];
      for (let r = 0; r <= rows; r += 1) {
        const row: number[] = [];
        for (let c = 0; c <= cols; c += 1) row.push(valueAt(c * CELL, r * CELL));
        grid.push(row);
      }

      let lo = Infinity;
      let hi = -Infinity;
      for (const row of grid) {
        for (const v of row) {
          if (v < lo) lo = v;
          if (v > hi) hi = v;
        }
      }

      for (let i = 1; i < LEVELS; i += 1) {
        const t = lo + ((hi - lo) * i) / LEVELS;
        const master = i % 4 === 0;
        ctx.beginPath();

        for (let r = 0; r < rows; r += 1) {
          for (let c = 0; c < cols; c += 1) {
            const x = c * CELL;
            const y = r * CELL;
            const tl = grid[r][c];
            const tr = grid[r][c + 1];
            const br = grid[r + 1][c + 1];
            const bl = grid[r + 1][c];
            const idx =
              (tl > t ? 8 : 0) | (tr > t ? 4 : 0) | (br > t ? 2 : 0) | (bl > t ? 1 : 0);
            if (idx === 0 || idx === 15) continue;

            const ip = (a: number, b: number) => (t - a) / (b - a || 1e-6);
            const top = { x: x + CELL * ip(tl, tr), y };
            const right = { x: x + CELL, y: y + CELL * ip(tr, br) };
            const bottom = { x: x + CELL * ip(bl, br), y: y + CELL };
            const left = { x, y: y + CELL * ip(tl, bl) };

            const seg = (a: { x: number; y: number }, b: { x: number; y: number }) => {
              ctx.moveTo(a.x, a.y);
              ctx.lineTo(b.x, b.y);
            };

            switch (idx) {
              case 1: case 14: seg(left, bottom); break;
              case 2: case 13: seg(bottom, right); break;
              case 3: case 12: seg(left, right); break;
              case 4: case 11: seg(top, right); break;
              case 6: case 9: seg(top, bottom); break;
              case 7: case 8: seg(left, top); break;
              case 5: seg(left, top); seg(bottom, right); break;
              case 10: seg(left, bottom); seg(top, right); break;
              default: break;
            }
          }
        }

        ctx.strokeStyle = master ? "rgba(103, 232, 249, 0.30)" : "rgba(103, 232, 249, 0.13)";
        ctx.lineWidth = master ? 1.1 : 0.75;
        ctx.stroke();
      }
    };

    const tick = () => {
      for (const b of blobs) {
        b.x += b.vx;
        b.y += b.vy;
        if (b.x < -width * 0.2 || b.x > width * 1.2) b.vx *= -1;
        if (b.y < -height * 0.2 || b.y > height * 1.2) b.vy *= -1;
      }
      draw();
      frame = requestAnimationFrame(tick);
    };

    resize();
    draw();
    if (!reduced) frame = requestAnimationFrame(tick);

    const onResize = () => {
      resize();
      draw();
    };
    window.addEventListener("resize", onResize);

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return <canvas ref={ref} aria-hidden className={className} />;
}
