"use client";

import { useEffect, useRef } from "react";
import { FlightSky } from "@/components/courses/FlightSky";

type FlightStep = {
  title: string;
  text: string;
  tool: string;
};

const CLAROS = 3;

export function CourseFlight({
  title,
  steps,
}: {
  title: string;
  steps: FlightStep[];
}) {
  const seccion = useRef<HTMLElement>(null);
  const raiz = useRef<HTMLOListElement>(null);
  const lienzo = useRef<SVGSVGElement>(null);
  const trazo = useRef<SVGPathElement>(null);
  const guia = useRef<SVGPathElement>(null);
  const cohete = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const zona = seccion.current;
    const lista = raiz.current;
    const svg = lienzo.current;
    const linea = trazo.current;
    const rail = guia.current;
    const nave = cohete.current;
    if (!zona || !lista || !svg || !linea || !rail || !nave) return;

    const sinMovimiento = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    lista.classList.add("is-armed");

    let largo = 0;
    let hitos: number[] = [];
    let pedido = 0;

    const trazar = () => {
      const caja = lista.getBoundingClientRect();
      svg.setAttribute("viewBox", `0 0 ${caja.width} ${caja.height}`);

      const nodos = Array.from(lista.querySelectorAll(".flight-node"));
      if (nodos.length < 2) return;

      const puntos = nodos.map((nodo) => {
        const r = nodo.getBoundingClientRect();
        return {
          x: r.left - caja.left + r.width / 2,
          y: r.top - caja.top + r.height / 2,
        };
      });

      let d = `M ${puntos[0].x} ${puntos[0].y}`;
      for (let i = 1; i < puntos.length; i += 1) {
        const previo = puntos[i - 1];
        const actual = puntos[i];
        const salto = actual.y - previo.y;
        const giro = Math.min(96, Math.max(28, salto * 0.4));
        const arranque = actual.y - giro;
        d += ` L ${previo.x} ${arranque}`;
        d += ` C ${previo.x} ${arranque + giro / 2}, ${actual.x} ${arranque + giro / 2}, ${actual.x} ${actual.y}`;
      }
      linea.setAttribute("d", d);
      rail.setAttribute("d", d);
      largo = linea.getTotalLength();
      linea.style.strokeDasharray = `${largo}`;

      hitos = puntos.map((p) => {
        let mejor = 0;
        let distancia = Infinity;
        for (let l = 0; l <= largo; l += largo / 200) {
          const q = linea.getPointAtLength(l);
          const dd = (q.x - p.x) ** 2 + (q.y - p.y) ** 2;
          if (dd < distancia) {
            distancia = dd;
            mejor = l;
          }
        }
        return mejor / largo;
      });

      const pasos = Array.from(lista.querySelectorAll(".flight-step"));
      const ultimoClaro = pasos[CLAROS - 1];
      const primerOscuro = pasos[CLAROS];
      if (ultimoClaro && primerOscuro) {
        const zonaCaja = zona.getBoundingClientRect();
        const fin = ultimoClaro.getBoundingClientRect().bottom - zonaCaja.top;
        const inicio = primerOscuro.getBoundingClientRect().top - zonaCaja.top;
        const centro = ((fin + inicio) / 2 / zonaCaja.height) * 100;
        const margen = Math.max(
          1.5,
          (((inicio - fin) * 0.42) / zonaCaja.height) * 100,
        );
        zona.style.setProperty("--cruce", `${centro.toFixed(2)}%`);
        zona.style.setProperty(
          "--cruce-antes",
          `${(centro - margen).toFixed(2)}%`,
        );
        zona.style.setProperty(
          "--cruce-despues",
          `${(centro + margen).toFixed(2)}%`,
        );
      }
    };

    const pintar = (avance: number) => {
      linea.style.strokeDashoffset = `${largo * (1 - avance)}`;

      const recorrido = largo * avance;
      const punto = linea.getPointAtLength(recorrido);
      nave.style.transform = `translate(${punto.x}px, ${punto.y}px) translate(-50%, -50%) rotate(180deg)`;
      nave.style.opacity = avance > 0.001 ? "1" : "0";

      const pasos = lista.querySelectorAll(".flight-step");
      hitos.forEach((hito, i) => {
        pasos[i]?.classList.toggle("is-passed", avance >= hito - 0.02);
      });
    };

    const medir = () => {
      const caja = lista.getBoundingClientRect();
      const umbral = window.innerHeight * 0.68;
      const bruto = (umbral - caja.top) / Math.max(caja.height, 1);
      return Math.min(1, Math.max(0, bruto));
    };

    const alScroll = () => {
      if (pedido) return;
      pedido = requestAnimationFrame(() => {
        pedido = 0;
        pintar(medir());
      });
    };

    trazar();

    if (sinMovimiento) {
      lista.classList.remove("is-armed");
      linea.style.strokeDashoffset = "0";
      nave.style.opacity = "0";
      return () => {};
    }

    pintar(medir());

    const ro = new ResizeObserver(() => {
      trazar();
      pintar(medir());
    });
    ro.observe(lista);
    window.addEventListener("scroll", alScroll, { passive: true });

    return () => {
      if (pedido) cancelAnimationFrame(pedido);
      ro.disconnect();
      window.removeEventListener("scroll", alScroll);
    };
  }, []);

  return (
    <section ref={seccion} className="flight">
      <div aria-hidden className="flight-sky" />
      <div aria-hidden className="flight-clouds">
        <span className="flight-cloud flight-cloud--1" />
        <span className="flight-cloud flight-cloud--2" />
        <span className="flight-cloud flight-cloud--3" />
        <span className="flight-cloud flight-cloud--4" />
        <span className="flight-cloud flight-cloud--5" />
        <span className="flight-cloud flight-cloud--6" />
        <span className="flight-cloud flight-cloud--7" />
        <span className="flight-cloud flight-cloud--8" />
        <span className="flight-cloud flight-cloud--9" />
      </div>
      <FlightSky />
      <div aria-hidden className="flight-glow" />

      <div className="flight-inner">
        <h2 className="t-section flight-heading">{title}</h2>

        <ol ref={raiz} className="flight-track">
          <svg
            ref={lienzo}
            aria-hidden
            className="flight-canvas"
            preserveAspectRatio="none"
          >
            <path ref={guia} className="flight-rail" fill="none" />
            <path ref={trazo} className="flight-trail" fill="none" />
          </svg>

          <div ref={cohete} aria-hidden className="flight-rocket">
            <span className="flight-plume" />
            <svg viewBox="0 0 24 24" fill="none" aria-hidden>
              <path
                d="M12 2.2c2.6 2.2 4 5.4 4 9v3.1l1.8 2.1a1 1 0 0 1 .2.6v1.6l-3-1.1h-6l-3 1.1v-1.6a1 1 0 0 1 .2-.6L8 14.3v-3.1c0-3.6 1.4-6.8 4-9Z"
                fill="currentColor"
              />
              <circle cx="12" cy="10" r="1.6" className="flight-rocket-eye" />
            </svg>
          </div>

          {steps.map((step, i) => (
            <li
              key={step.title}
              className={`flight-step ${i < CLAROS ? "is-low" : "is-high"}`}
            >
              <span aria-hidden className="flight-node">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div className="flight-card">
                <h3 className="flight-title">{step.title}</h3>
                <p className="flight-text">{step.text}</p>
                <p className="flight-tool">{step.tool}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
