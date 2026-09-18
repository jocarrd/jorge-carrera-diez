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
