import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";

type ButtonLinkProps = ComponentProps<typeof Link> & {
  children: ReactNode;
  variant?: "primary" | "secondary" | "quiet";
  /** En las secciones oscuras el teal de marca se hunde contra el negro: ahí
   *  la acción principal va en blanco, como hace el propio sistema. */
  tone?: "light" | "dark";
};

// `quiet` no es un botón sino un enlace con chevron: es la forma por defecto de
// llevar a otra página cuando no compite con la acción principal.
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
        className={`inline-flex min-h-11 items-center text-[17px] transition-colors hover:underline ${
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
      ? dark
        ? "bg-white text-[var(--ink-dark)] hover:bg-[var(--panel)]"
        : "bg-[var(--accent)] text-white hover:brightness-110"
      : dark
        ? "border border-white/25 text-white hover:bg-white/10"
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
