export type Milestone = {
  /** Posición sobre la línea, en fracción del recorrido total. */
  at: number;
  year: string;
  title: string;
  text?: string;
  /** El hito propio se marca lleno; el resto, hueco. */
  own?: boolean;
};

type TimelineProps = {
  milestones: Milestone[];
  className?: string;
};

// Doce años de proyecto no se cuentan con una lista de fechas: se ven en una
// línea, donde se entiende de un vistazo cuánto llevaba andando el sitio antes
// de que llegara nadie nuevo. El hito propio va marcado en lleno para que se
// distinga sin tener que escribirlo.
export function Timeline({ milestones, className = "" }: TimelineProps) {
  return (
    <div className={`timeline ${className}`}>
      <ol className="timeline-track">
        {milestones.map((milestone) => (
          <li
            key={milestone.year}
            className={`timeline-stop ${milestone.own ? "is-own" : ""}`}
            style={{ ["--at" as string]: milestone.at }}
          >
            <span aria-hidden className="timeline-dot" />
            <p className="timeline-year">{milestone.year}</p>
            <p className="timeline-title">{milestone.title}</p>
            {milestone.text ? <p className="timeline-text">{milestone.text}</p> : null}
          </li>
        ))}
      </ol>
    </div>
  );
}
