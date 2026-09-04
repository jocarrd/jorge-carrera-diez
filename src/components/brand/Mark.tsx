/**
 * La marca. Un cuadrado redondeado como las tarjetas del sitio, las iniciales en
 * la voz monoespaciada que ya usan las fechas y los datos, y un nodo conectado
 * que remite al campo de arquitectura del fondo. El círculo con iniciales y
 * brillo anterior no decía nada que no dijera cualquier otra marca personal.
 */
export function Mark({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 40 40" className={className} aria-hidden focusable="false">
      <rect x="1" y="1" width="38" height="38" rx="11" fill="#061420" />
      <rect
        x="1"
        y="1"
        width="38"
        height="38"
        rx="11"
        fill="none"
        stroke="#67e8f9"
        strokeOpacity="0.28"
      />
      <text
        x="20"
        y="25.5"
        textAnchor="middle"
        fill="#f8fafc"
        fontSize="15"
        fontWeight="500"
        letterSpacing="0.5"
        style={{ fontFamily: "var(--font-mono-plex), ui-monospace, monospace" }}
      >
        jc
      </text>
      <circle cx="31.5" cy="9.5" r="2.4" fill="#67e8f9" />
    </svg>
  );
}
