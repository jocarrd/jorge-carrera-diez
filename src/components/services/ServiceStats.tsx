import { CountUp, Reveal } from "@/components/ui";
import { getCopy } from "@/content";
import type { Locale } from "@/i18n/config";

export function ServiceStats({ locale }: { locale: Locale }) {
  const metrics = getCopy(locale).pages.services.metrics;

  return (
    <div className="stat-strip">
      {metrics.map((metric, index) => (
        <Reveal key={metric.label} delay={index * 90}>
          <div className="stat-cell">
            <p className="stat-value">
              <CountUp to={metric.value} />
              {metric.suffix ? (
                <span className="stat-suffix">{metric.suffix}</span>
              ) : null}
            </p>
            <p className="stat-label">{metric.label}</p>
            <p className="stat-detail">{metric.detail}</p>
          </div>
        </Reveal>
      ))}
    </div>
  );
}
