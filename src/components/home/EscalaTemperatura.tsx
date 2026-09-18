import type { CSSProperties } from "react";

import { RANGO_MAX, RANGO_MIN, type Extremo } from "@/lib/snowy-live";

const pct = (t: number) =>
  ((Math.min(Math.max(t, RANGO_MIN), RANGO_MAX) - RANGO_MIN) /
    (RANGO_MAX - RANGO_MIN)) *
  100;

const REFERENCIAS = [0, 10, 20, 30, 40];

export function EscalaTemperatura({
  minima,
  maxima,
  reparto,
  etiquetaMinima,
  etiquetaMaxima,
  idioma,
}: {
  minima: Extremo;
  maxima: Extremo;
  reparto: number[];
  etiquetaMinima: string;
  etiquetaMaxima: string;
  idioma: string;
}) {
  const grados = (v: number) =>
    new Intl.NumberFormat(idioma, {
      minimumFractionDigits: 1,
      maximumFractionDigits: 1,
    }).format(v);

  const cima = Math.max(...reparto, 1);
  const anchoTramo = 100 / reparto.length;

  const marcas = [
    { clave: "min", extremo: minima, etiqueta: etiquetaMinima },
    { clave: "max", extremo: maxima, etiqueta: etiquetaMaxima },
  ];

  return (
    <div className="escala">
      <div className="escala-reparto" aria-hidden>
        {reparto.map((n, i) => (
          <span
            key={i}
            className="escala-columna"
            style={
              {
                left: `${i * anchoTramo}%`,
                width: `${anchoTramo}%`,
                height: `${(n / cima) * 100}%`,
                opacity: n === 0 ? 0 : 0.42 + (n / cima) * 0.58,

                "--tramo": `${(i / (reparto.length - 1)) * 100}%`,
                "--i": i,
              } as CSSProperties
            }
          />
        ))}
      </div>

      <div className="escala-barra" aria-hidden>
        {REFERENCIAS.map((t) => (
          <span
            key={t}
            className="escala-guia"
            style={{ left: `${pct(t)}%` }}
          />
        ))}
        {marcas.map(({ clave, extremo }) => (
          <span
            key={clave}
            aria-hidden
            className="escala-punto"
            style={{ left: `${pct(extremo.temperatura)}%` }}
          />
        ))}
      </div>

      <div className="escala-eje" aria-hidden>
        {REFERENCIAS.map((t) => (
          <span key={t} className="escala-ref" style={{ left: `${pct(t)}%` }}>
            {t}°
          </span>
        ))}
      </div>

      <dl className="escala-leyenda">
        {marcas.map(({ clave, extremo, etiqueta }) => (
          <div
            key={clave}
            className={`escala-marca is-${clave}`}
            style={{ "--x": `${pct(extremo.temperatura)}%` } as CSSProperties}
          >
            <dt className="escala-etiqueta">{etiqueta}</dt>
            <dd>
              <span className="escala-valor">
                {grados(extremo.temperatura)}°
              </span>
              <span className="escala-lugar">
                {extremo.estacion}
                {extremo.zona ? (
                  <span className="escala-zona">{extremo.zona}</span>
                ) : null}
              </span>
            </dd>
          </div>
        ))}
      </dl>
    </div>
  );
}
