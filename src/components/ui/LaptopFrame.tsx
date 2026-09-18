import type { ReactNode } from "react";

type LaptopFrameProps = {
  children: ReactNode;

  label?: string;
  className?: string;
};

export function LaptopFrame({
  children,
  label,
  className = "",
}: LaptopFrameProps) {
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
