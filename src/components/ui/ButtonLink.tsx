import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";

type ButtonLinkProps = ComponentProps<typeof Link> & {
  children: ReactNode;
  variant?: "primary" | "secondary" | "quiet";

  tone?: "light" | "dark";
};

export function ButtonLink({
  href,
  children,
  variant = "primary",
  tone = "light",
  className = "",
  ...props
}: ButtonLinkProps) {
  const dark = tone === "dark";

  if (variant === "quiet") {
    return (
      <Link
        href={href}
        className={`inline-flex min-h-11 items-center text-[15px] transition-colors hover:underline ${
          dark ? "text-[var(--accent-dark)]" : "text-[var(--accent-text)]"
        } ${className}`}
        {...props}
      >
        {children}
        <span aria-hidden className="ml-1 text-[15px]">
          &rsaquo;
        </span>
      </Link>
    );
  }

  const variantClassName =
    variant === "primary"
      ? "boton-solido"
      : dark
        ? "boton-contorno boton-contorno--dark"
        : "boton-contorno";

  return (
    <Link
      href={href}
      className={`boton ${variantClassName} ${className}`}
      {...props}
    >
      <span>{children}</span>
      <svg viewBox="0 0 16 10" aria-hidden className="boton-flecha">
        <path
          d="M10.5 1 15 5l-4.5 4M15 5H1"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.4"
          strokeLinecap="square"
        />
      </svg>
    </Link>
  );
}
