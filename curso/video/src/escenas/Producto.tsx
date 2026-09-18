import { AbsoluteFill, Img, interpolate, spring, staticFile, useCurrentFrame, useVideoConfig } from "remotion";
import { COLOR, MONO, SANS, Rejilla } from "../comun";

const Movil: React.FC<{
  src: string;
  retardo: number;
  giro: number;
  desplazamiento: number;
  profundidad: number;
}> = ({ src, retardo, giro, desplazamiento, profundidad }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const s = spring({ frame: frame - retardo, fps, config: { damping: 200, mass: 1.2 } });
  const flote = Math.sin((frame - retardo) / 26) * 7;

  return (
    <div
      style={{
        position: "relative",
        width: 330,
        borderRadius: 42,
        overflow: "hidden",
        border: "10px solid #16161a",
        boxShadow: "0 50px 120px -40px rgba(0,0,0,0.9)",
        opacity: s,
        transform: `translateY(${interpolate(s, [0, 1], [190, 0]) + flote + desplazamiento}px) rotate(${giro}deg) scale(${interpolate(s, [0, 1], [0.86, 1])})`,
        zIndex: profundidad,
      }}
    >
      <Img src={staticFile(src)} style={{ width: "100%", display: "block" }} />
    </div>
  );
};

export const Producto: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const entrada = spring({ frame, fps, config: { damping: 200, mass: 1 } });
  const perspectiva = interpolate(frame, [0, 200], [16, 2], { extrapolateRight: "clamp" });
  const empuje = interpolate(frame, [0, 200], [0.9, 1.02], {
    extrapolateRight: "clamp",
    easing: (t) => 1 - Math.pow(1 - t, 3),
  });

  return (
    <AbsoluteFill style={{ background: COLOR.fondo, fontFamily: SANS }}>
      <Rejilla />
      <AbsoluteFill
        style={{
          background: "radial-gradient(70% 60% at 50% 60%, rgba(249,115,22,0.16) 0%, rgba(10,10,10,0) 70%)",
          opacity: entrada,
        }}
      />

      <AbsoluteFill style={{ alignItems: "center", justifyContent: "center" }}>
        <div
          style={{
            fontSize: 74,
            fontWeight: 700,
            letterSpacing: "-0.04em",
            color: COLOR.texto,
            opacity: spring({ frame: frame - 6, fps, config: { damping: 200 } }),
            transform: `translateY(${interpolate(spring({ frame: frame - 6, fps, config: { damping: 200 } }), [0, 1], [34, 0])}px)`,
            marginBottom: 14,
          }}
        >
          Lecciones cortas, en el móvil
        </div>
        <div
          style={{
            fontFamily: MONO,
            fontSize: 23,
            letterSpacing: "0.13em",
            textTransform: "uppercase",
            color: COLOR.acento,
            opacity: spring({ frame: frame - 16, fps, config: { damping: 200 } }),
            marginBottom: 46,
          }}
        >
          Sin registro · Guarda por dónde vas
        </div>

        <div
          style={{
            display: "flex",
            gap: 54,
            alignItems: "center",
            perspective: 1600,
            transform: `scale(${empuje}) rotateX(${perspectiva}deg)`,
          }}
        >
          <Movil src="movil-modulos.webp" retardo={20} giro={-5} desplazamiento={26} profundidad={1} />
          <Movil src="movil-leccion.webp" retardo={34} giro={4} desplazamiento={-16} profundidad={2} />
        </div>
      </AbsoluteFill>
    </AbsoluteFill>
  );
};
