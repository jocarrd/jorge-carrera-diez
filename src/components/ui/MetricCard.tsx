import type { Metric } from "@/types/content";

type MetricCardProps = {
  metric: Metric;
};

export function MetricCard({ metric }: MetricCardProps) {
  return (
    <div className="metric-cell">
      <p className="metric-value">{metric.value}</p>
      <p className="metric-label">{metric.label}</p>
      {metric.detail ? <p className="metric-detail">{metric.detail}</p> : null}
    </div>
  );
}
