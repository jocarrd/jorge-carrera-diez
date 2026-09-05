import type { ReactNode } from "react";

type ContainerProps = {
  children: ReactNode;
  className?: string;
};

// 1120 px de caja: por encima, las líneas de texto se pasan de la medida
// cómoda de lectura y las rejillas de tres columnas quedan huecas.
export function Container({ children, className = "" }: ContainerProps) {
  return (
    <div className={`mx-auto w-full max-w-[1120px] px-[22px] sm:px-8 ${className}`}>
      {children}
    </div>
  );
}
