import { AbsoluteFill, interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";
import { COLOR, MONO, SANS, Rejilla } from "../comun";
import {
  GROK_BOT_SHAPES,
  GROK_BOT_TRANSFORM,
  GROK_BOT_VIEWBOX,
  type GrokBotShape,
} from "../grok-bot-shapes";

const Marca: React.FC<{ forma: GrokBotShape; lado: number }> = ({ forma, lado }) => {
  const { head, eyes } = GROK_BOT_SHAPES[forma];
  return (
    <svg viewBox={GROK_BOT_VIEWBOX} width={lado} height={lado}>
      <g transform={GROK_BOT_TRANSFORM}>
        <path d={head} fill={COLOR.texto} />
        {eyes.map((d) => (
          <path key={d.slice(0, 20)} d={d} fill={COLOR.fondo} />
        ))}
      </g>
    </svg>
  );
};

const FORMAS: GrokBotShape[] = ["circle", "triangle", "diamond"];

export const LoQuePaso: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const forma = FORMAS[Math.min(FORMAS.length - 1, Math.floor(frame / 22))];
  const latido = spring({ frame: frame - Math.floor(frame / 22) * 22, fps, config: { damping: 200, mass: 0.5 } });
  const entrada = spring({ frame, fps, config: { damping: 200, mass: 0.9 } });

  const subeMarca = spring({ frame: frame - 44, fps, config: { damping: 200, mass: 1 } });
  const desplazaY = interpolate(subeMarca, [0, 1], [0, -158]);
  const encoge = interpolate(subeMarca, [0, 1], [1, 0.72]);

  const linea1 = spring({ frame: frame - 50, fps, config: { damping: 200 } });
  const linea2 = spring({ frame: frame - 68, fps, config: { damping: 200 } });

  return (
    <AbsoluteFill style={{ background: COLOR.fondo, fontFamily: SANS }}>
      <Rejilla />
      <AbsoluteFill
        style={{
          background: "radial-gradient(48% 42% at 50% 42%, rgba(249,115,22,0.13) 0%, rgba(10,10,10,0) 70%)",
          opacity: entrada,
        }}
      />

      <AbsoluteFill style={{ justifyContent: "center", alignItems: "center" }}>
        <div
          style={{
            transform: `translateY(${desplazaY}px) scale(${interpolate(entrada, [0, 1], [0.6, 1]) * encoge * interpolate(latido, [0, 1], [1.06, 1])})`,
            opacity: entrada,
          }}
        >
          <Marca forma={forma} lado={260} />
        </div>

        <div
          style={{
            position: "absolute",
            top: 545,
            left: 0,
            right: 0,
            textAlign: "center",
          }}
        >
          <div
            style={{
              fontSize: 76,
              fontWeight: 700,
              letterSpacing: "-0.04em",
              color: COLOR.texto,
              opacity: linea1,
              transform: `translateY(${interpolate(linea1, [0, 1], [38, 0])}px)`,
            }}
          >
            El equipo de Grok Bot montó una empresa
          </div>
          <div
            style={{
              fontSize: 76,
              fontWeight: 700,
              letterSpacing: "-0.04em",
              color: COLOR.acentoSuave,
              opacity: linea2,
              transform: `translateY(${interpolate(linea2, [0, 1], [38, 0])}px)`,
              marginTop: 6,
            }}
          >
            desde cero, en tres días y en directo.
          </div>
          <div
            style={{
              fontFamily: MONO,
              fontSize: 25,
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              color: COLOR.apagado,
              marginTop: 40,
              opacity: spring({ frame: frame - 86, fps, config: { damping: 200 } }),
            }}
          >
            Usando sus propios Bots
          </div>
        </div>
      </AbsoluteFill>
    </AbsoluteFill>
  );
};
