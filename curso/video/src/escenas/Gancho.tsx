import { AbsoluteFill, interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";
import { COLOR, MONO, SANS, Rejilla } from "../comun";

const DIAS = [
  { dia: "Día 1", tiempo: "8:42:23" },
  { dia: "Día 2", tiempo: "8:10:34" },
  { dia: "Día 3", tiempo: "7:58:12" },
];

export const Gancho: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const titulo = "Yo quería entender qué hacían.";
  const empuje = interpolate(frame, [0, 110], [1.14, 1], {
    extrapolateRight: "clamp",
    easing: (t) => 1 - Math.pow(1 - t, 3),
  });

  const fusion = spring({ frame: frame - 54, fps, config: { damping: 200, mass: 0.9 } });
  const salidaDias = interpolate(fusion, [0, 1], [1, 0]);
  const entradaTotal = spring({ frame: frame - 62, fps, config: { damping: 200, mass: 0.8 } });

  return (
    <AbsoluteFill style={{ background: COLOR.fondo, transform: `scale(${empuje})` }}>
      <Rejilla />
      <AbsoluteFill
        style={{
          justifyContent: "center",
          alignItems: "center",
          fontFamily: SANS,
          textAlign: "center",
        }}
      >
        <div style={{ display: "flex", overflow: "hidden", paddingBottom: 10 }}>
          {titulo.split("").map((c, i) => {
            const s = spring({ frame: frame - 4 - i * 1.6, fps, config: { damping: 200 } });
            return (
              <span
                key={`${c}-${i}`}
                style={{
                  fontSize: 92,
                  fontWeight: 700,
                  letterSpacing: "-0.04em",
                  color: COLOR.texto,
                  opacity: s,
                  transform: `translateY(${interpolate(s, [0, 1], [70, 0])}px)`,
                  whiteSpace: "pre",
                }}
              >
                {c}
              </span>
            );
          })}
        </div>

        <div style={{ position: "relative", height: 230, width: 1200, marginTop: 34 }}>
          <div
            style={{
              position: "absolute",
              inset: 0,
              display: "flex",
              justifyContent: "center",
              gap: 34,
              opacity: salidaDias,
            }}
          >
            {DIAS.map((d, i) => {
              const s = spring({ frame: frame - 26 - i * 7, fps, config: { damping: 200, mass: 0.7 } });
              return (
                <div
                  key={d.dia}
                  style={{
                    width: 300,
                    padding: "30px 0",
                    border: `1px solid ${COLOR.linea}`,
                    borderRadius: 16,
                    background: COLOR.panel,
                    opacity: s,
                    transform: `translateY(${interpolate(s, [0, 1], [44, 0])}px) scale(${interpolate(fusion, [0, 1], [1, 0.82])})`,
                  }}
                >
                  <div style={{ fontFamily: MONO, fontSize: 22, letterSpacing: "0.12em", color: COLOR.acento, textTransform: "uppercase" }}>
                    {d.dia}
                  </div>
                  <div style={{ fontFamily: MONO, fontSize: 52, fontWeight: 500, color: COLOR.texto, marginTop: 10 }}>
                    {d.tiempo}
                  </div>
                </div>
              );
            })}
          </div>

          <div
            style={{
              position: "absolute",
              inset: 0,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              opacity: entradaTotal,
              transform: `scale(${interpolate(entradaTotal, [0, 1], [0.78, 1])})`,
            }}
          >
            <div style={{ fontSize: 150, fontWeight: 700, letterSpacing: "-0.05em", color: COLOR.acentoSuave, lineHeight: 1 }}>
              24 h 51 min
            </div>
            <div style={{ fontFamily: MONO, fontSize: 26, letterSpacing: "0.14em", color: COLOR.apagado, textTransform: "uppercase", marginTop: 18 }}>
              de directo que ver
            </div>
          </div>
        </div>

        <div
          style={{
            marginTop: 30,
            fontSize: 42,
            color: COLOR.apagado,
            opacity: spring({ frame: frame - 92, fps, config: { damping: 200 } }),
          }}
        >
          Y no tenía tiempo de verlo.
        </div>
      </AbsoluteFill>
    </AbsoluteFill>
  );
};
