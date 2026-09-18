import { AbsoluteFill, interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";
import { COLOR, MONO, SANS, Contador, Rejilla } from "../comun";

const CIFRAS = [
  { valor: 29, sufijo: "", etiqueta: "Lecciones" },
  { valor: 9, sufijo: "", etiqueta: "Módulos" },
  { valor: 2, sufijo: "", etiqueta: "Idiomas" },
  { valor: 0, sufijo: " €", etiqueta: "Precio" },
];

export const Cifras: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const destacado = spring({ frame: frame - 46, fps, config: { damping: 200, mass: 0.9 } });
  const empuje = interpolate(frame, [0, 150], [1, 1.06], { extrapolateRight: "clamp" });

  return (
    <AbsoluteFill style={{ background: COLOR.fondo, fontFamily: SANS, transform: `scale(${empuje})` }}>
      <Rejilla />
      <AbsoluteFill style={{ justifyContent: "center", alignItems: "center" }}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            opacity: destacado,
            transform: `translateY(${interpolate(destacado, [0, 1], [40, 0])}px)`,
          }}
        >
          <div
            style={{
              fontSize: 210,
              fontWeight: 700,
              letterSpacing: "-0.055em",
              lineHeight: 1,
              color: COLOR.acentoSuave,
            }}
          >
            <Contador hasta={122} inicio={46} duracion={44} />
          </div>
          <div
            style={{
              fontFamily: MONO,
              fontSize: 27,
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              color: COLOR.apagado,
              marginTop: 16,
            }}
          >
            enlaces al minuto exacto
          </div>
          <div style={{ fontSize: 34, color: COLOR.tenue, marginTop: 26, maxWidth: 900, textAlign: "center" }}>
            Cada cosa que se afirma apunta al segundo del directo donde se dijo.
          </div>
        </div>

        <div style={{ display: "flex", gap: 30, marginTop: 84 }}>
          {CIFRAS.map((c, i) => {
            const s = spring({ frame: frame - 96 - i * 6, fps, config: { damping: 200, mass: 0.7 } });
            return (
              <div
                key={c.etiqueta}
                style={{
                  width: 240,
                  padding: "28px 0",
                  borderTop: `1px solid ${COLOR.linea}`,
                  textAlign: "center",
                  opacity: s,
                  transform: `translateY(${interpolate(s, [0, 1], [30, 0])}px)`,
                }}
              >
                <div style={{ fontSize: 68, fontWeight: 600, letterSpacing: "-0.04em", color: COLOR.texto }}>
                  <Contador hasta={c.valor} inicio={96 + i * 6} duracion={26} />
                  {c.sufijo}
                </div>
                <div
                  style={{
                    fontFamily: MONO,
                    fontSize: 19,
                    letterSpacing: "0.12em",
                    textTransform: "uppercase",
                    color: COLOR.tenue,
                    marginTop: 8,
                  }}
                >
                  {c.etiqueta}
                </div>
              </div>
            );
          })}
        </div>
      </AbsoluteFill>
    </AbsoluteFill>
  );
};
