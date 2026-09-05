import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";

type ButtonLinkProps = ComponentProps<typeof Link> & {
  children: ReactNode;
  variant?: "primary" | "secondary" | "quiet";
};

// `quiet` no es un botón sino un enlace con chevron: es la forma por defecto de
// llevar a otra página cuando no compite con la acción principal.
export function ButtonLink({
  href,
  children,
  variant = "primary",
  className = "",
  ...props
}: ButtonLinkProps) {
  if (variant === "quiet") {
    return (
      <Link
        href={href}
        className={`inline-flex min-h-11 items-center text-[17px] text-[var(--accent-text)] transition-colors hover:underline ${className}`}
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
      ? "bg-[var(--accent)] text-white hover:brightness-110"
      : "border border-[var(--line-strong)] text-[var(--foreground)] hover:bg-[var(--panel)]";

  return (
    <Link
      href={href}
      className={`inline-flex min-h-12 items-center justify-center rounded-full px-7 text-[17px] font-medium transition duration-200 ${variantClassName} ${className}`}
      {...props}
    >
      {children}
    </Link>
  );
}
