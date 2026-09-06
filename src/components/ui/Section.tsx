import type { ReactNode } from "react";
import { Container } from "./Container";

type SectionProps = {
  children: ReactNode;
  className?: string;
  id?: string;
  ritmo?: "normal" | "amplio";
};

// El aire vertical es lo que separa las ideas: cada sección respira lo
// suficiente para que se lean de una en una, sin necesitar líneas divisorias.
//
// Dos ritmos y no más. Había cinco repartidos por los componentes —48/80/96,
// 64/96, 64/96/112, 80/112/128 y 96/112/128— y una página que encadena tres
// secciones con tres aires distintos se lee como tres plantillas pegadas. El
// amplio es para las bandas de remate, que sí piden más aire alrededor.
const RITMO = {
  normal: "py-16 sm:py-24 lg:py-28",
  amplio: "py-20 sm:py-28 lg:py-32",
} as const;

export function Section({ children, className = "", id, ritmo = "normal" }: SectionProps) {
  return (
    <section id={id} className={`${RITMO[ritmo]} ${className}`}>
      <Container>{children}</Container>
    </section>
  );
}
