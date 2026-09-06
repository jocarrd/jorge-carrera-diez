export type Source = {
  sigla: string;
  nombre: string;
  aporta: string;
  /** Dominio del dato: de ahí sale el color de la pieza. */
  campo: string;
};

type SourceGridProps = {
  sources: Source[];
  className?: string;
};

// Siete etiquetas grises en fila no dicen nada: no se sabe quien es cada una ni
// que aporta. Aqui cada fuente lleva su sigla grande, quien es y que dato pone,
// y el color viene del dominio —tiempo, agua, sismo, aire—, que es lo que
// agrupa de verdad.
export function SourceGrid({ sources, className = "" }: SourceGridProps) {
  return (
    <ul className={`sources ${className}`}>
      {sources.map((source) => (
        <li key={source.sigla} className={`source is-${source.campo}`}>
          <p className="source-sigla">{source.sigla}</p>
          <p className="source-nombre">{source.nombre}</p>
          <p className="source-aporta">{source.aporta}</p>
        </li>
      ))}
    </ul>
  );
}
