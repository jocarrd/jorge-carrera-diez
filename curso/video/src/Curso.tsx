import { AbsoluteFill } from "remotion";
import { TransitionSeries, linearTiming, springTiming } from "@remotion/transitions";
import { fade } from "@remotion/transitions/fade";
import { slide } from "@remotion/transitions/slide";
import { wipe } from "@remotion/transitions/wipe";
import { clockWipe } from "@remotion/transitions/clock-wipe";

import { COLOR, Marca } from "./comun";
import { LoQuePaso } from "./escenas/LoQuePaso";
import { Gancho } from "./escenas/Gancho";
import { Tuberia } from "./escenas/Tuberia";
import { Cifras } from "./escenas/Cifras";
import { Producto } from "./escenas/Producto";
import { Cierre } from "./escenas/Cierre";

export const FPS = 30;

const D = {
  loQuePaso: 118,
  gancho: 128,
  tuberia: 236,
  cifras: 158,
  producto: 190,
  cierre: 128,
};
const T = { z: 22, a: 22, b: 20, c: 24, d: 20 };

export const DURACION =
  D.loQuePaso + D.gancho + D.tuberia + D.cifras + D.producto + D.cierre -
  (T.z + T.a + T.b + T.c + T.d);

export const Curso: React.FC = () => (
  <AbsoluteFill style={{ background: COLOR.fondo }}>
    <TransitionSeries>
      <TransitionSeries.Sequence durationInFrames={D.loQuePaso}>
        <LoQuePaso />
      </TransitionSeries.Sequence>

      <TransitionSeries.Transition
        presentation={slide({ direction: "from-bottom" })}
        timing={springTiming({ config: { damping: 200 }, durationInFrames: T.z })}
      />

      <TransitionSeries.Sequence durationInFrames={D.gancho}>
        <Gancho />
      </TransitionSeries.Sequence>

      <TransitionSeries.Transition
        presentation={wipe({ direction: "from-bottom" })}
        timing={springTiming({ config: { damping: 200 }, durationInFrames: T.a })}
      />

      <TransitionSeries.Sequence durationInFrames={D.tuberia}>
        <Tuberia />
      </TransitionSeries.Sequence>

      <TransitionSeries.Transition
        presentation={clockWipe({ width: 1920, height: 1080 })}
        timing={linearTiming({ durationInFrames: T.b })}
      />

      <TransitionSeries.Sequence durationInFrames={D.cifras}>
        <Cifras />
      </TransitionSeries.Sequence>

      <TransitionSeries.Transition
        presentation={slide({ direction: "from-right" })}
        timing={springTiming({ config: { damping: 200 }, durationInFrames: T.c })}
      />

      <TransitionSeries.Sequence durationInFrames={D.producto}>
        <Producto />
      </TransitionSeries.Sequence>

      <TransitionSeries.Transition
        presentation={fade()}
        timing={linearTiming({ durationInFrames: T.d })}
      />

      <TransitionSeries.Sequence durationInFrames={D.cierre}>
        <Cierre />
      </TransitionSeries.Sequence>
    </TransitionSeries>

    <Marca />
  </AbsoluteFill>
);
