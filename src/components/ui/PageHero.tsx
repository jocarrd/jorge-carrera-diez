import type { ReactNode } from "react";
import { Container } from "./Container";

type PageHeroProps = {
  label?: string;
  title: string;
  lead?: string;
  detail?: string;
  actions?: ReactNode;
  children?: ReactNode;
};

export function PageHero({
  label,
  title,
  lead,
  detail,
  actions,
  children,
}: PageHeroProps) {
  return (
    <section className="page-hero on-dark">
      <Container>
        {label ? (
          <p className="sh-label rise rise-1">
            {label}
            <span aria-hidden className="sh-line" />
          </p>
        ) : null}
        <h1 className="page-hero-title rise rise-2">{title}</h1>
        {lead || detail ? (
          <div className="page-hero-copy rise rise-3">
            {lead ? <p className="page-hero-lead">{lead}</p> : null}
            {detail ? <p className="page-hero-detail">{detail}</p> : null}
          </div>
        ) : null}
        {actions ? (
          <div className="page-hero-actions rise rise-4">{actions}</div>
        ) : null}
        {children}
      </Container>
    </section>
  );
}
