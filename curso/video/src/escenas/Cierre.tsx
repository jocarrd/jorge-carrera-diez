import { AbsoluteFill, interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";
import { COLOR, MONO, SANS, Rejilla } from "../comun";

export const Cierre: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const entrada = spring({ frame, fps, config: { damping: 200, mass: 1 } });
  const url = "jorge-carrera-diez.com/cursos";
  const brillo = interpolate(frame, [0, 40, 120], [0, 1, 0.55], { extrapolateRight: "clamp" });

  return (
    <AbsoluteFill style={{ background: COLOR.fondo, fontFamily: SANS }}>
      <Rejilla />
      <AbsoluteFill
        style={{
          background: `radial-gradient(60% 50% at 50% 52%, rgba(249,115,22,${0.2 * brillo}) 0%, rgba(10,10,10,0) 68%)`,
        }}
      />

      <AbsoluteFill style={{ justifyContent: "center", alignItems: "center", textAlign: "center" }}>
        <div
          style={{
            fontSize: 88,
            fontWeight: 700,
            letterSpacing: "-0.045em",
            color: COLOR.texto,
            opacity: entrada,
            transform: `translateY(${interpolate(entrada, [0, 1], [42, 0])}px)`,
          }}
        >
          Todo gratis, para quien quiera repasarlo.
        </div>

        <div style={{ display: "flex", marginTop: 40, overflow: "hidden" }}>
          {url.split("").map((c, i) => {
            const s = spring({ frame: frame - 14 - i * 0.45, fps, config: { damping: 200 } });
            return (
              <span
                key={`${c}-${i}`}
                style={{
                  fontFamily: MONO,
                  fontSize: 54,
                  letterSpacing: "0.01em",
                  color: COLOR.acentoSuave,
                  opacity: s,
                  transform: `translateY(${interpolate(s, [0, 1], [46, 0])}px)`,
                  whiteSpace: "pre",
                }}
              >
                {c}
              </span>
            );
          })}
        </div>

        <div
          style={{
            marginTop: 46,
            display: "flex",
            gap: 16,
            opacity: spring({ frame: frame - 58, fps, config: { damping: 200 } }),
          }}
        >
          {["29 lecciones", "9 módulos", "sin registro"].map((t) => (
            <span
              key={t}
              style={{
                border: `1px solid ${COLOR.linea}`,
                borderRadius: 999,
                padding: "14px 28px",
                fontFamily: MONO,
                fontSize: 21,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                color: COLOR.apagado,
              }}
            >
              {t}
            </span>
          ))}
        </div>

        <div
          style={{
            position: "absolute",
            bottom: 140,
            left: 0,
            right: 0,
            textAlign: "center",
            fontFamily: MONO,
            fontSize: 20,
            letterSpacing: "0.06em",
            color: COLOR.tenue,
            opacity: spring({ frame: frame - 74, fps, config: { damping: 200 } }),
          }}
        >
          Curso no oficial · Hecho a partir del directo y de la documentación de xAI
        </div>
      </AbsoluteFill>
    </AbsoluteFill>
  );
};
