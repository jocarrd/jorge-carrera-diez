import type { ReactNode } from "react";

type LaptopFrameProps = {
  children: ReactNode;
  /** Dominio para la barra del navegador, sin protocolo. */
  label?: string;
  className?: string;
};

// El equivalente de escritorio del marco de móvil. Una interfaz de escritorio
// dentro de un portátil se lee como producto; en una caja redondeada se lee
// como captura, y sus propios controles parecen botones muertos de esta web.
//
// La barra del navegador no es decoración: una captura del viewport es más
// ancha que la pantalla del portátil (1,690 frente a 1,540) justo porque en la
// máquina real ese alto se lo comen el navegador y el sistema. Con la barra a
// 5,6 % del ancho, el hueco queda en 1,6904 y la captura entra sin recortar.
//
// Sin muesca: en un MacBook es un recorte de la pantalla con la barra de menús
// de macOS alrededor. Aquí dentro hay una web, así que dibujarla dejaría una
// mancha negra colgando sobre el contenido.
export function LaptopFrame({ children, label, className = "" }: LaptopFrameProps) {
  return (
    <div className={`laptop ${className}`}>
      <div className="laptop-lid">
        <div className="laptop-screen">
          <div className="laptop-bar">
            <span aria-hidden className="laptop-dots">
              <span />
              <span />
              <span />
            </span>
            {label ? (
              <span className="laptop-url" aria-hidden>
                {label}
              </span>
            ) : null}
          </div>
          <div className="laptop-viewport">{children}</div>
        </div>
      </div>
      <div className="laptop-base">
        <span aria-hidden className="laptop-groove" />
      </div>
    </div>
  );
}
