import type { ReactNode } from "react";

type BrowserFrameProps = {
  children: ReactNode;
  label?: string;
  tone?: "light" | "dark";
  className?: string;
};

// El equivalente de escritorio del marco de móvil: la captura deja de flotar
// como imagen y pasa a ser una ventana. La barra lleva el dominio real, que
// hace de prueba —se puede teclear y comprobar— y ahorra la coletilla de "está
// en producción" debajo.
export function BrowserFrame({
  children,
  label,
  tone = "light",
  className = "",
}: BrowserFrameProps) {
  return (
    <div className={`browser-frame browser-${tone} ${className}`}>
      <div className="browser-bar">
        <span aria-hidden className="browser-dots">
          <span />
          <span />
          <span />
        </span>
        {label ? (
          <span className="browser-url" aria-hidden>
            {label}
          </span>
        ) : null}
      </div>
      <div className="browser-viewport">{children}</div>
    </div>
  );
}
