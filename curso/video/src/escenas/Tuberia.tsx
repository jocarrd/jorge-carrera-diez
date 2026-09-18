import { AbsoluteFill, interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";
import { COLOR, MONO, SANS, Rejilla } from "../comun";

const PASOS = [
  { titulo: "Capturar", tool: "yt-dlp" },
  { titulo: "Transcribir", tool: "faster-whisper" },
  { titulo: "Anotar", tool: "Claude Code" },
  { titulo: "Contrastar", tool: "documentación oficial" },
  { titulo: "Escribir", tool: "Markdown" },
  { titulo: "Publicar", tool: "Next.js" },
];

const SEPARACION = 20;
const ANCHO = 1920;

const Onda: React.FC<{ avance: number; colapso: number }> = ({ avance, colapso }) => {
  const barras = 44;
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 5, height: 92 }}>
      {Array.from({ length: barras }).map((_, i) => {
        const vivo = i / barras < avance;
        const alto = vivo
          ? 12 + Math.abs(Math.sin(i * 0.9) * Math.cos(i * 0.31)) * 74
          : 4;
        return (
          <div
            key={i}
            style={{
              width: 5,
              height: interpolate(colapso, [0, 1], [alto, 3]),
              borderRadius: 4,
              background: vivo ? COLOR.acento : "rgba(255,255,255,0.14)",
              opacity: interpolate(colapso, [0, 1], [1, 0.25]),
            }}
          />
        );
      })}
    </div>
  );
};

export const Tuberia: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const activo = Math.min(PASOS.length - 1, Math.floor(frame / 34));
  const anterior = -Math.max(0, activo - 1) * 300;
  const objetivo = -activo * 300;
  const suave = spring({ frame: frame - activo * 34, fps, config: { damping: 200, mass: 1.1 } });
  const desplazamiento = interpolate(suave, [0, 1], [anterior, objetivo]);

  const trazo = interpolate(frame, [4, PASOS.length * 34], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  return (
    <AbsoluteFill style={{ background: COLOR.fondo, fontFamily: SANS }}>
      <Rejilla />

      <div
        style={{
          position: "absolute",
          top: 96,
          left: 0,
          right: 0,
          textAlign: "center",
          fontFamily: MONO,
          fontSize: 24,
          letterSpacing: "0.16em",
          textTransform: "uppercase",
          color: COLOR.acento,
          opacity: spring({ frame: frame - 2, fps, config: { damping: 200 } }),
        }}
      >
        De un directo a una lección
      </div>

      <svg style={{ position: "absolute", inset: 0 }} viewBox={`0 0 ${ANCHO} 1080`}>
        <line
          x1={0}
          y1={560}
          x2={ANCHO}
          y2={560}
          stroke="rgba(255,255,255,0.09)"
          strokeWidth={2}
        />
        <line
          x1={0}
          y1={560}
          x2={ANCHO * trazo}
          y2={560}
          stroke={COLOR.acento}
          strokeWidth={3}
          strokeLinecap="round"
        />
      </svg>

      <div
        style={{
          position: "absolute",
          top: 523,
          left: 820,
          display: "flex",
          alignItems: "flex-start",
          gap: SEPARACION,
          transform: `translateX(${desplazamiento}px)`,
        }}
      >
        {PASOS.map((p, i) => {
          const s = spring({ frame: frame - i * 34, fps, config: { damping: 200, mass: 0.8 } });
          const esActivo = i === activo;
          return (
            <div
              key={p.titulo}
              style={{
                position: "relative",
                width: 280,
                height: 74,
                opacity: interpolate(s, [0, 1], [0, esActivo ? 1 : 0.3]),
                transform: `scale(${interpolate(s, [0, 1], [0.8, esActivo ? 1 : 0.86])})`,
              }}
            >
              <div
                style={{
                  position: "absolute",
                  bottom: 108,
                  left: 0,
                  right: 0,
                  textAlign: "center",
                  fontSize: 46,
                  fontWeight: 600,
                  letterSpacing: "-0.03em",
                  color: COLOR.texto,
                  whiteSpace: "nowrap",
                }}
              >
                {p.titulo}
              </div>

              <div
                style={{
                  position: "absolute",
                  top: 0,
                  left: "50%",
                  transform: "translateX(-50%)",
                  width: 74,
                  height: 74,
                  borderRadius: 999,
                  display: "grid",
                  placeItems: "center",
                  border: `2px solid ${esActivo ? COLOR.acento : COLOR.linea}`,
                  background: esActivo ? COLOR.acento : COLOR.fondo,
                  color: esActivo ? "#180d04" : COLOR.apagado,
                  fontFamily: MONO,
                  fontSize: 26,
                  fontWeight: 500,
                }}
              >
                {String(i + 1).padStart(2, "0")}
              </div>

              <div
                style={{
                  position: "absolute",
                  top: 108,
                  left: 0,
                  right: 0,
                  textAlign: "center",
                  fontFamily: MONO,
                  fontSize: 21,
                  color: COLOR.tenue,
                  whiteSpace: "nowrap",
                }}
              >
                {p.tool}
              </div>
            </div>
          );
        })}
      </div>

      <div
        style={{
          position: "absolute",
          left: 0,
          right: 0,
          top: 760,
          display: "flex",
          justifyContent: "center",
          opacity: interpolate(frame, [34, 60, 118, 140], [0, 1, 1, 0], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
          }),
        }}
      >
        <Onda
          avance={interpolate(frame, [38, 96], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" })}
          colapso={interpolate(frame, [100, 126], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" })}
        />
      </div>
    </AbsoluteFill>
  );
};
