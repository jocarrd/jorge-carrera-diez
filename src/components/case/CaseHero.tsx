import type { ReactNode } from "react";
import { PageHero, Reveal } from "@/components/ui";
import type { CaseFact } from "@/types/content";

type CaseHeroProps = {
  eyebrow: string;
  heading: string;
  lead: string;
  detail?: string;
  facts: CaseFact[];
  actions?: ReactNode;
};

export function CaseHero({
  eyebrow,
  heading,
  lead,
  detail,
  facts,
  actions,
}: CaseHeroProps) {
  return (
    <PageHero
      label={eyebrow}
      title={heading}
      lead={lead}
      detail={detail}
      actions={actions}
    >
      <Reveal>
        <dl className="page-hero-facts">
          {facts.map((fact) => (
            <div key={fact.label}>
              <dt>{fact.label}</dt>
              <dd>{fact.value}</dd>
            </div>
          ))}
        </dl>
      </Reveal>
    </PageHero>
  );
}
