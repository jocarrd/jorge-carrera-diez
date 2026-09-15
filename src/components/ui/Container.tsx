import type { ReactNode } from "react";

type ContainerProps = {
  children: ReactNode;
  className?: string;
};

// 1120 px de caja: por encima, las líneas de texto se pasan de la medida
// cómoda de lectura y las rejillas de tres columnas quedan huecas.
//
// La clase `contenedor` dibuja los dos rieles verticales a partir de 1200 px.
// Como las secciones van pegadas, los bordes de cada caja forman una línea
// continua de arriba abajo: la retícula deja de ser un acuerdo invisible y se
// ve, que es lo contrario de una página de catálogo.
export function Container({ children, className = "" }: ContainerProps) {
  return (
    <div className={`contenedor mx-auto w-full max-w-[1120px] px-[22px] sm:px-8 ${className}`}>
      {children}
    </div>
  );
}
