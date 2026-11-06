import type { ExperienceItem } from "@/types/content";

type CareerSpanProps = {
  items: ExperienceItem[];
  currentLabel: string;
  className?: string;
};

const mes = (valor: string) => {
  const [anio, m] = valor.split("-").map(Number);
  return anio * 12 + (m - 1);
};

export function CareerSpan({
  items,
  currentLabel,
  className = "",
}: CareerSpanProps) {
  const ahora = new Date();
  const inicios = items.map((item) => mes(item.start));
  const fin = Math.max(
    ahora.getFullYear() * 12 + ahora.getMonth(),
    Math.max(...inicios) + 1,
  );
  const desde = Math.min(...inicios);
  const total = fin - desde;

  if (total <= 0) return null;

  const anios: number[] = [];
  for (let a = Math.floor(desde / 12); a * 12 <= fin; a++) anios.push(a);
  const posicion = (valor: number) => ((fin - valor) / total) * 100;

  return (
    <div className={`span ${className}`}>
      <div className="span-grid" aria-hidden>
        {anios.map((a) => (
          <span
            key={a}
            className="span-year"
            style={{
              left: `${Math.min(97, Math.max(3, posicion(Math.max(a * 12, desde) + (Math.min(a * 12 + 12, fin) - Math.max(a * 12, desde)) / 2)))}%`,
            }}
          >
            {a}
          </span>
        ))}
      </div>

      <ol className="span-rows">
        {items.map((item) => {
          const ini = mes(item.start);
          const acaba = item.end ? mes(item.end) : fin;
          const enCurso = !item.end;
          const izquierda = posicion(acaba);
          const ancho = Math.max(((acaba - ini) / total) * 100, 2.5);

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
                {item.client && item.client !== item.company
                  ? `${item.company.replace(/ \(.*\)$/, "")} · ${item.client.split(",")[0]}`
                  : item.company}
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
