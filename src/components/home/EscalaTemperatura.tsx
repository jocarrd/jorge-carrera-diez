import type { CSSProperties } from "react";

import { RANGO_MAX, RANGO_MIN, type Extremo } from "@/lib/snowy-live";

// El dato es un rango, así que se dibuja como un rango. Una tabla de dos filas
// decía lo mismo sin dejar ver lo único que importa: lo lejos que están hoy los
// dos extremos de España y por dónde se agrupa todo lo demás.
//
// La rampa de color es la misma que usa Snowy en su mapa —azul, cian,
// esmeralda, ámbar y rojo, con los cortes en 0, 10, 20 y 30— para que el
// producto y la web de quien lo hace hablen el mismo idioma.
const pct = (t: number) =>
  ((Math.min(Math.max(t, RANGO_MIN), RANGO_MAX) - RANGO_MIN) / (RANGO_MAX - RANGO_MIN)) * 100;

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

  // La columna más poblada marca el 100 %: lo que importa es la forma del
  // reparto, no cuántas estaciones caen en un grado concreto.
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
                // Cada columna toma el color que le toca de la misma rampa que
                // pinta la barra: el degradado se estira al ancho completo y se
                // desplaza por tramo, así el reparto y la escala son el mismo
                // dibujo y no dos elementos que coinciden por casualidad.
                "--tramo": `${(i / (reparto.length - 1)) * 100}%`,
              } as CSSProperties
            }
          />
        ))}
      </div>

      <div className="escala-barra" aria-hidden>
        {REFERENCIAS.map((t) => (
          <span key={t} className="escala-guia" style={{ left: `${pct(t)}%` }} />
        ))}
        {/* Los puntos van siempre pegados a la barra: son la posición real. */}
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

      {/* Los rótulos, en cambio, no pueden colgar de su punto en una pantalla
          estrecha: con los dos extremos juntos se pisaban. Ahí van en dos
          columnas debajo, y sólo se anclan a la barra cuando hay sitio. */}
      <dl className="escala-leyenda">
        {marcas.map(({ clave, extremo, etiqueta }) => (
          <div
            key={clave}
            className={`escala-marca is-${clave}`}
            style={{ "--x": `${pct(extremo.temperatura)}%` } as CSSProperties}
          >
            <dt className="escala-etiqueta">{etiqueta}</dt>
            <dd>
              <span className="escala-valor">{grados(extremo.temperatura)}°</span>
              <span className="escala-lugar">
                {extremo.estacion}
                {extremo.zona ? <span className="escala-zona">{extremo.zona}</span> : null}
              </span>
            </dd>
          </div>
        ))}
      </dl>
    </div>
  );
}
