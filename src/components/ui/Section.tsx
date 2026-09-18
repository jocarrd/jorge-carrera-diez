import type { ReactNode } from "react";
import { Container } from "./Container";

type SectionProps = {
  children: ReactNode;
  className?: string;
  id?: string;
  ritmo?: "normal" | "amplio";
};

const RITMO = {
  normal: "py-16 sm:py-24 lg:py-28",
  amplio: "py-20 sm:py-28 lg:py-32",
} as const;

export function Section({
  children,
  className = "",
  id,
  ritmo = "normal",
}: SectionProps) {
  return (
    <section id={id} className={`${RITMO[ritmo]} ${className}`}>
      <Container>{children}</Container>
    </section>
  );
}
