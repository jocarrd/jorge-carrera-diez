export type Rung = {
  count: number;
  value: string;
  label: string;
};

type ScaleLadderProps = {
  rungs: Rung[];
  className?: string;
};

const MAX_PIECES = 60;

export function ScaleLadder({ rungs, className = "" }: ScaleLadderProps) {
  return (
    <ol className={`ladder ${className}`}>
      {rungs.map((rung, index) => {
        const pieces = Math.min(rung.count, MAX_PIECES);
        const sampled = rung.count > MAX_PIECES;

        return (
          <li
            key={rung.label}
            className="ladder-rung"
            style={{ ["--rung" as string]: index }}
          >
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
