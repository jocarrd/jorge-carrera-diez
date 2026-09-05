type Tick = { at: number; label: string };

type SpreadConeProps = {
  ticks: Tick[];
  spreadLabel: string;
  answerLabel: string;
  className?: string;
};

const W = 960;
const H = 340;
const BASE = H * 0.58;

// Cuanto más lejos se mira, más se separan los modelos entre sí: la banda es
// esa distancia y la línea es la respuesta que hay que dar igualmente. Es la
// forma real del problema —la misma que tiene un cono de incertidumbre—, no un
// adorno.
//
// Todo sale de funciones del avance horizontal, sin aleatoriedad: el dibujo es
// idéntico en servidor y cliente y no cambia entre recargas.
const curve = (t: number) => BASE - Math.sin(t * 2.1) * H * 0.1 - t * H * 0.06;
const halfWidth = (t: number) => Math.pow(t, 1.55) * H * 0.42;

function band(): string {
  const top: string[] = [];
  const bottom: string[] = [];
  const steps = 48;

  for (let i = 0; i <= steps; i++) {
    const t = i / steps;
    const x = t * W;
    const y = curve(t);
    const h = halfWidth(t);
    top.push(`${x.toFixed(1)} ${(y - h).toFixed(1)}`);
    bottom.unshift(`${x.toFixed(1)} ${(y + h).toFixed(1)}`);
  }

  return `M ${top.join(" L ")} L ${bottom.join(" L ")} Z`;
}

function line(): string {
  const points: string[] = [];
  for (let i = 0; i <= 48; i++) {
    const t = i / 48;
    points.push(`${(t * W).toFixed(1)} ${curve(t).toFixed(1)}`);
  }
  return `M ${points.join(" L ")}`;
}

// Unas pocas trayectorias sueltas dentro de la banda: sin ellas la banda es una
// mancha, y lo que se cuenta es que ahí dentro hay modelos que no coinciden.
function member(k: number): string {
  const bias = (k - 1.5) / 1.5;
  const points: string[] = [];
  for (let i = 0; i <= 48; i++) {
    const t = i / 48;
    const drift = bias * halfWidth(t) * 0.82 + Math.sin(t * 6 + k * 1.7) * halfWidth(t) * 0.16;
    points.push(`${(t * W).toFixed(1)} ${(curve(t) + drift).toFixed(1)}`);
  }
  return `M ${points.join(" L ")}`;
}

export function SpreadCone({ ticks, spreadLabel, answerLabel, className = "" }: SpreadConeProps) {
  return (
    <figure className={`cone ${className}`}>
      <div className="cone-stage">
        {/* Antes del dibujo: en móvil es leyenda y tiene que leerse primero; en
            escritorio se posiciona encima y el orden del marcado da igual. */}
        <span className="cone-tag is-spread">{spreadLabel}</span>
        <span className="cone-tag is-answer">{answerLabel}</span>

        <svg viewBox={`0 0 ${W} ${H}`} className="cone-svg" aria-hidden>
          <defs>
            <linearGradient id="cone-fill" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0" stopColor="#0f766e" stopOpacity="0.04" />
              <stop offset="1" stopColor="#0f766e" stopOpacity="0.16" />
            </linearGradient>
          </defs>

          {ticks.map((tick) => (
            <line
              key={tick.label}
              x1={tick.at * W}
              y1={H * 0.06}
              x2={tick.at * W}
              y2={H * 0.82}
              className="cone-grid"
            />
          ))}

          <path d={band()} fill="url(#cone-fill)" />

          {[0, 1, 2, 3].map((k) => (
            <path key={k} d={member(k)} className="cone-member" />
          ))}

          <path d={line()} className="cone-line" />
          <circle cx={W} cy={curve(1)} r="8" className="cone-head" />
        </svg>

        <div className="cone-ticks">
          {ticks.map((tick) => (
            <span key={tick.label} style={{ left: `${tick.at * 100}%` }}>
              {tick.label}
            </span>
          ))}
        </div>

      </div>
    </figure>
  );
}
