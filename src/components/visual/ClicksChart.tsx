import type { CSSProperties } from "react";
import { PlayOnView } from "@/components/ui";
import type { ChartCopy } from "@/types/content";

const WIDTH = 720;
const HEIGHT = 200;
const TOP = 16;

type ClicksChartProps = {
  data: readonly (readonly [string, number])[];
  copy: ChartCopy;
  className?: string;
};

export function ClicksChart({ data, copy, className = "" }: ClicksChartProps) {
  const max = Math.max(...data.map(([, clicks]) => clicks));
  const plot = HEIGHT - TOP;
  const step = WIDTH / (data.length - 1);
  const points = data.map(([, clicks], index) => [
    index * step,
    TOP + plot - (clicks / max) * plot,
  ]);
  const line = points
    .map(
      ([x, y], index) =>
        `${index === 0 ? "M" : "L"}${x.toFixed(1)} ${y.toFixed(1)}`,
    )
    .join(" ");
  const area = `${line} L${WIDTH} ${HEIGHT} L0 ${HEIGHT} Z`;
  const peakIndex = data.findIndex(([, clicks]) => clicks === max);
  const [peakX, peakY] = points[peakIndex];
  const peakStyle = {
    left: `${(peakX / WIDTH) * 100}%`,
    top: `${(peakY / HEIGHT) * 100}%`,
  } as CSSProperties;

  return (
    <figure className={`clicks-chart ${className}`}>
      <figcaption className="clicks-chart-title">{copy.title}</figcaption>
      <PlayOnView className="clicks-chart-canvas">
        <svg
          viewBox={`0 0 ${WIDTH} ${HEIGHT}`}
          preserveAspectRatio="none"
          role="img"
          aria-label={copy.ariaLabel}
          className="clicks-chart-svg"
        >
          <path d={area} className="clicks-chart-area" />
          <path
            d={line}
            pathLength={1}
            vectorEffect="non-scaling-stroke"
            className="clicks-chart-line"
          />
        </svg>
        <span aria-hidden className="clicks-chart-peak" style={peakStyle}>
          <span className="clicks-chart-label">{copy.peakLabel}</span>
          <span className="clicks-chart-dot" />
        </span>
      </PlayOnView>
      <div aria-hidden className="clicks-chart-ticks">
        <span>{copy.startLabel}</span>
        <span>{copy.endLabel}</span>
      </div>
      <p className="clicks-chart-caption">{copy.caption}</p>
    </figure>
  );
}
