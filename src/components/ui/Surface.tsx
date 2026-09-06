import type { ReactNode } from "react";

type SurfaceProps = {
  children: ReactNode;
  className?: string;
};

export function Surface({ children, className = "" }: SurfaceProps) {
  return (
    <div
      className={`lvl-2 rounded-[var(--radius-card)] border p-6 ${className}`}
    >
      {children}
    </div>
  );
}
