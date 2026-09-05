import type { ExperienceItem } from "@/types/content";

type CareerSpanProps = {
  items: ExperienceItem[];
  currentLabel: string;
  className?: string;
};

// Una lista de puestos esconde lo que mejor se ve en una barra: que hay dos
// tracks corriendo a la vez —el enterprise y el freelance— y desde cuándo. Las
// fechas ya estaban en el contenido; aquí solo se dibujan.
const mes = (valor: string) => {
  const [anio, m] = valor.split("-").map(Number);
  return anio * 12 + (m - 1);
};

export function CareerSpan({ items, currentLabel, className = "" }: CareerSpanProps) {
  const ahora = new Date();
  const fin = ahora.getFullYear() * 12 + ahora.getMonth();
  const inicios = items.map((item) => mes(item.start));
  const desde = Math.min(...inicios);
  const total = fin - desde;

  if (total <= 0) return null;

  const anios: number[] = [];
  for (let a = Math.ceil(desde / 12); a * 12 <= fin; a++) anios.push(a);

  return (
    <div className={`span ${className}`}>
      <div className="span-grid" aria-hidden>
        {anios.map((a) => (
          <span key={a} className="span-year" style={{ left: `${((a * 12 - desde) / total) * 100}%` }}>
            {a}
          </span>
        ))}
      </div>

      <ol className="span-rows">
        {[...items].reverse().map((item) => {
          const ini = mes(item.start);
          const acaba = item.end ? mes(item.end) : fin;
          const enCurso = !item.end;
          const izquierda = ((ini - desde) / total) * 100;
          const ancho = Math.max(((acaba - ini) / total) * 100, 2.5);
          // El rótulo va siempre fuera de la barra, nunca encima. Dentro habría
          // que cambiarle el color según el relleno, y en las barras cortas no
          // cabe: se quedaba en una letra. Fuera se lee siempre igual.
          // Si la barra acaba pegada al borde, el rótulo va por delante para no
          // salirse de la tarjeta.
          const alBorde = izquierda + ancho > 62;

          return (
            <li key={`${item.company}-${item.start}`} className="span-row">
              <span
                className={`span-bar ${enCurso ? "is-live" : ""}`}
                style={{ left: `${izquierda}%`, width: `${ancho}%` }}
              />
              <span
                className="span-name"
                style={
                  alBorde
                    ? { right: `calc(${100 - izquierda}% + 0.625rem)` }
                    : { left: `calc(${izquierda + ancho}% + 0.625rem)` }
                }
              >
                {item.client ?? item.company}
              </span>
            </li>
          );
        })}
      </ol>

      <p className="span-legend">
        <span aria-hidden className="span-chip is-live" />
        {currentLabel}
      </p>
    </div>
  );
}
