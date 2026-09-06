export type Source = {
  sigla: string;
  nombre: string;
  aporta: string;
  campo: string;
};

type SourceGridProps = {
  sources: Source[];
  className?: string;
};

// Primero fueron siete etiquetas grises, que no decian nada. Luego siete
// tarjetas con borde y barrita de color, que decian demasiado y parecian un
// panel de control. Aqui la respuesta es tipografia y aire: el nombre grande,
// lo que aporta debajo en pequeno, y nada mas. Sin caja, sin filete, sin color.
export function SourceGrid({ sources, className = "" }: SourceGridProps) {
  return (
    <ul className={`sources ${className}`}>
      {sources.map((source) => (
        <li key={source.sigla} className="source">
          <p className="source-sigla">{source.sigla}</p>
          <p className="source-aporta">{source.aporta}</p>
        </li>
      ))}
    </ul>
  );
}
