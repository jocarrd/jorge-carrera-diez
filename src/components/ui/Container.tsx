import type { ReactNode } from "react";

type ContainerProps = {
  children: ReactNode;
  className?: string;
};

export function Container({ children, className = "" }: ContainerProps) {
  return (
    <div
      className={`contenedor mx-auto w-full max-w-[1120px] px-[22px] sm:px-8 ${className}`}
    >
      {children}
    </div>
  );
}
