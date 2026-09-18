import type { ReactNode } from "react";

type BrowserFrameProps = {
  children: ReactNode;
  label?: string;
  tone?: "light" | "dark";
  className?: string;
};

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
