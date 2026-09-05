export type Rung = {
  /** Cuántas piezas se dibujan. Si supera el tope se dibuja una muestra. */
  count: number;
  value: string;
  label: string;
};

type ScaleLadderProps = {
  rungs: Rung[];
  className?: string;
};

// Cuatro áreas que se abren en doce pilares, que se miden con ciento cuarenta y
// ocho indicadores, que ordenan ciento cincuenta y un países. Eso es una escala,
// y una escala se entiende viéndola: las piezas encogen y se multiplican de un
// peldaño al siguiente.
//
// Por encima de 60 piezas el dibujo deja de sumar y empieza a pesar, así que se
// dibuja una muestra y la cifra real la dice el número, que es lo que se lee.
const MAX_PIECES = 60;

export function ScaleLadder({ rungs, className = "" }: ScaleLadderProps) {
  return (
    <ol className={`ladder ${className}`}>
      {rungs.map((rung, index) => {
        const pieces = Math.min(rung.count, MAX_PIECES);
        const sampled = rung.count > MAX_PIECES;

        return (
          <li key={rung.label} className="ladder-rung" style={{ ["--rung" as string]: index }}>
            <div className="ladder-pieces" aria-hidden>
              {Array.from({ length: pieces }, (_, i) => (
                <span key={i} className="ladder-piece" />
              ))}
              {sampled ? <span className="ladder-more" /> : null}
            </div>
            <p className="ladder-value">{rung.value}</p>
            <p className="ladder-label">{rung.label}</p>
          </li>
        );
      })}
    </ol>
  );
}
