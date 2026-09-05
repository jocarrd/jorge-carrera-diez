import type { ReactNode } from "react";
import { Container } from "./Container";

type SectionProps = {
  children: ReactNode;
  className?: string;
  id?: string;
};

// El aire vertical es lo que separa las ideas: cada sección respira lo
// suficiente para que se lean de una en una, sin necesitar líneas divisorias.
export function Section({ children, className = "", id }: SectionProps) {
  return (
    <section id={id} className={`py-16 sm:py-24 lg:py-28 ${className}`}>
      <Container>{children}</Container>
    </section>
  );
}
