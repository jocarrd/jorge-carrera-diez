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

  const groups: ExperienceItem[][] = [];
  for (const item of items) {
    const last = groups[groups.length - 1];
    if (last && last[0].company === item.company) last.push(item);
    else groups.push([item]);
  }

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
        {groups.map((group) => {
          const ini = Math.min(...group.map((item) => mes(item.start)));
          const acaba = Math.max(
            ...group.map((item) => (item.end ? mes(item.end) : fin)),
          );
          const enCurso = group.some((item) => !item.end);
          const izquierda = posicion(acaba);
          const ancho = Math.max(((acaba - ini) / total) * 100, 2.5);
          const alBorde = izquierda + ancho > 62;
          const empresa = group[0].company.replace(/ \(.*\)$/, "");
          const clientes = group
            .map((item) => item.client?.split(",")[0])
            .filter((client): client is string => Boolean(client) && client !== group[0].company);

          return (
            <li key={`${group[0].company}-${group[0].start}`} className="span-row">
              <span
                className={`span-bar ${enCurso ? "is-live" : ""}`}
                style={{ left: `${izquierda}%`, width: `${ancho}%` }}
              >
                {group.length > 1
                  ? group.slice(1).map((item) => {
                      const corte = item.end ? mes(item.end) : fin;
                      return (
                        <span
                          key={item.start}
                          aria-hidden
                          className="span-cut"
                          style={{ left: `${((acaba - corte) / (acaba - ini)) * 100}%` }}
                        />
                      );
                    })
                  : null}
              </span>
              <span
                className="span-name"
                style={
                  alBorde
                    ? { right: `calc(${100 - izquierda}% + 0.625rem)` }
                    : { left: `calc(${izquierda + ancho}% + 0.625rem)` }
                }
              >
                {empresa}
                {clientes.length ? (
                  <span className="span-clients"> · {clientes.join(" · ")}</span>
                ) : null}
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
