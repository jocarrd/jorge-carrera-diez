import { interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";
import { loadFont as cargarSans } from "@remotion/google-fonts/Geist";
import { loadFont as cargarMono } from "@remotion/google-fonts/GeistMono";

export const { fontFamily: SANS } = cargarSans();
export const { fontFamily: MONO } = cargarMono();

export const COLOR = {
  fondo: "#0a0a0a",
  texto: "#f6f7ff",
  apagado: "#a8a29e",
  tenue: "#78716c",
  acento: "#f97316",
  acentoSuave: "#fdba74",
  linea: "rgba(255,255,255,0.12)",
  panel: "rgba(255,255,255,0.035)",
};

export const useEntrada = (inicio: number, retardo = 0) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const t = frame - inicio - retardo;
  const s = spring({ frame: t, fps, config: { damping: 200, mass: 0.6 } });
  return {
    opacidad: interpolate(t, [0, 12], [0, 1], {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
    }),
    subida: interpolate(s, [0, 1], [26, 0]),
    escala: interpolate(s, [0, 1], [0.965, 1]),
  };
};

export const Salida: React.FC<{
  desde: number;
  duracion?: number;
  children: React.ReactNode;
}> = ({ desde, duracion = 14, children }) => {
  const frame = useCurrentFrame();
  const o = interpolate(frame, [desde, desde + duracion], [1, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  return <div style={{ opacity: o, height: "100%" }}>{children}</div>;
};

export const Marca: React.FC = () => (
  <div
    style={{
      position: "absolute",
      right: 72,
      bottom: 56,
      fontFamily: MONO,
      fontSize: 26,
      letterSpacing: "0.02em",
      color: COLOR.tenue,
    }}
  >
    jorge-carrera-diez.com
  </div>
);

export const Rejilla: React.FC = () => (
  <div
    style={{
      position: "absolute",
      inset: 0,
      backgroundImage:
        "linear-gradient(to right, rgba(255,255,255,.022) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,.022) 1px, transparent 1px)",
      backgroundSize: "86px 86px",
    }}
  />
);

export const Contador: React.FC<{
  hasta: number;
  inicio: number;
  duracion?: number;
  sufijo?: string;
  decimales?: number;
}> = ({ hasta, inicio, duracion = 34, sufijo = "", decimales = 0 }) => {
  const frame = useCurrentFrame();
  const v = interpolate(frame, [inicio, inicio + duracion], [0, hasta], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: (t) => 1 - Math.pow(1 - t, 3),
  });
  return (
    <>
      {v.toFixed(decimales).replace(".", ",")}
      {sufijo}
    </>
  );
};
