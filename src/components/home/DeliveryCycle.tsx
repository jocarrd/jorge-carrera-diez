import { getCopy } from "@/content";
import type { Locale } from "@/i18n/config";

export function DeliveryCycle({ locale }: { locale: Locale }) {
  const cycle = getCopy(locale).hero.cycle;

  return (
    <div className="cycle" aria-hidden>
      <div className="cycle-in">
        <div className="cycle-head">
          <p className="cycle-label">{cycle.label}</p>
          <p className="cycle-state">
            <span className="cycle-led" />
            {cycle.state}
          </p>
        </div>

        <ol className="cycle-steps">
          {cycle.steps.map((step, index) => (
            <li
              key={step.title}
              style={{ ["--d" as string]: `${index * 0.9}s` }}
            >
              <span className="cycle-dot">
                <svg width="11" height="11" viewBox="0 0 12 12" fill="none">
                  <path
                    d="M2.5 6.2l2.3 2.3 4.7-5"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
              <span className="cycle-text">
                <b>{step.title}</b>
                <em>{step.caption}</em>
              </span>
              <span className="cycle-tag">{step.tag}</span>
            </li>
          ))}
        </ol>

        <div className="cycle-foot">
          <p className="cycle-domains">{cycle.foot}</p>
          <p className="cycle-badge">{cycle.badge}</p>
        </div>
      </div>
    </div>
  );
}
