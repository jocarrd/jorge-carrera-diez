import { Composition } from "remotion";
import { Curso, DURACION, FPS } from "./Curso";

export const Root: React.FC = () => (
  <Composition
    id="Curso"
    component={Curso}
    durationInFrames={DURACION}
    fps={FPS}
    width={1920}
    height={1080}
  />
);
