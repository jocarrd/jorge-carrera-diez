type CapabilityArtProps = { kind: number };

// Apple no pone capturas en estas tarjetas: pone el objeto —el portatil, el
// chip— renderizado y brillando sobre un fondo. El equivalente aqui es dibujar
// aquello de lo que habla cada capacidad, no ensenar un pantallazo reducido.
//
// Seis dibujos de trazo sobre el fondo oscuro de la tarjeta, con halo: los
// modelos abriendose, el barrido del radar, el campo de estaciones, el indice
// de paginas, el agente con sus conexiones y una base que se ramifica.
export function CapabilityArt({ kind }: CapabilityArtProps) {
  return (
    <span className="cap-art" aria-hidden>
      <svg viewBox="0 0 200 132" fill="none">
        <defs>
          <radialGradient id="cap-halo" cx="0.5" cy="0.5" r="0.5">
            <stop offset="0" stopColor="#2dd4bf" stopOpacity="0.34" />
            <stop offset="1" stopColor="#2dd4bf" stopOpacity="0" />
          </radialGradient>
        </defs>
        <circle cx="100" cy="66" r="62" fill="url(#cap-halo)" />

        {kind === 0 ? (
          <>
            {/* Los modelos se abren con el alcance y una linea responde. */}
            {[-30, -18, -7, 7, 18, 30].map((d) => (
              <path
                key={d}
                d={`M 22 66 C 78 66, 104 ${66 + d * 0.35}, 178 ${66 + d}`}
                className="ca-soft"
              />
            ))}
            <path d="M 22 66 C 78 66, 104 66, 178 66" className="ca-bold" />
            <circle cx="178" cy="66" r="5.5" className="ca-dot" />
          </>
        ) : null}

        {kind === 1 ? (
          <>
            {/* Barrido de radar sobre una mancha de precipitacion. */}
            {[20, 34, 48].map((r) => (
              <circle key={r} cx="100" cy="66" r={r} className="ca-soft" />
            ))}
            <path d="M 100 66 L 100 18" className="ca-bold" />
            <path
              d="M 112 52 q 14 -6 22 6 q 10 -2 12 10 q 6 8 -4 14 q -18 6 -30 -4 q -12 -8 0 -26 Z"
              className="ca-fill"
            />
            <circle cx="100" cy="66" r="4" className="ca-dot" />
          </>
        ) : null}

        {kind === 2 ? (
          <>
            {/* Campo de estaciones: unas reportando, otras no. */}
            {[
              [40, 34], [72, 52], [58, 88], [100, 30], [96, 70], [124, 46],
              [140, 84], [166, 40], [158, 66], [116, 98], [82, 24], [176, 92],
            ].map(([x, y], i) => (
              <circle
                key={`${x}-${y}`}
                cx={x}
                cy={y}
                r={i % 4 === 0 ? 5 : 3}
                className={i % 4 === 0 ? "ca-dot" : "ca-soft-dot"}
              />
            ))}
            <circle cx="40" cy="34" r="11" className="ca-soft" />
            <circle cx="140" cy="84" r="11" className="ca-soft" />
          </>
        ) : null}

        {kind === 3 ? (
          <>
            {/* Un indice: paginas apiladas en fuga. */}
            {[0, 1, 2].map((i) => (
              <rect
                key={i}
                x={44 + i * 10}
                y={30 + i * 14}
                width="112"
                height="26"
                rx="8"
                className={i === 2 ? "ca-bold-rect" : "ca-soft"}
              />
            ))}
            <path d="M 56 92 h 60" className="ca-soft" />
            <path d="M 56 104 h 34" className="ca-soft" />
          </>
        ) : null}

        {kind === 4 ? (
          <>
            {/* El agente y lo que toca. */}
            {[[46, 30], [154, 30], [46, 102], [154, 102]].map(([x, y]) => (
              <g key={`${x}-${y}`}>
                <path d={`M 100 66 L ${x} ${y}`} className="ca-soft" />
                <circle cx={x} cy={y} r="6" className="ca-soft-dot" />
              </g>
            ))}
            <circle cx="100" cy="66" r="22" className="ca-soft" />
            <circle cx="100" cy="66" r="11" className="ca-fill" />
          </>
        ) : null}

        {kind === 5 ? (
          <>
            {/* Una base que se ramifica en productos. */}
            <rect x="18" y="52" width="52" height="28" rx="10" className="ca-bold-rect" />
            <path d="M 70 66 h 22" className="ca-soft" />
            {[26, 66, 106].map((y) => (
              <g key={y}>
                <path d={`M 92 66 C 108 66, 108 ${y}, 124 ${y}`} className="ca-soft" />
                <rect x="124" y={y - 11} width="56" height="22" rx="9" className="ca-soft" />
              </g>
            ))}
          </>
        ) : null}
      </svg>
    </span>
  );
}
