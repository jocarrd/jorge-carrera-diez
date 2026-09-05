import type { Metric } from "@/types/content";

type MetricCardProps = {
  metric: Metric;
};

// Nueve cajas iguales en fila no son nueve datos: son una rejilla de bordes que
// compite con las cifras. En una ficha técnica el dato manda y la estructura la
// da un filete, no un contorno cerrado. El número va en la tipografía de
// titulares, como en el dato grande de la portada, y la etiqueta en mono, que
// es donde vive el registro técnico en esta web.
export function MetricCard({ metric }: MetricCardProps) {
  return (
    <div className="metric-cell">
      <p className="metric-value">{metric.value}</p>
      <p className="metric-label">{metric.label}</p>
      {metric.detail ? <p className="metric-detail">{metric.detail}</p> : null}
    </div>
  );
}
