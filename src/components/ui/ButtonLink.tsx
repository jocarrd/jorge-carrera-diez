import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";

type ButtonLinkProps = ComponentProps<typeof Link> & {
  children: ReactNode;
  variant?: "primary" | "secondary" | "quiet";
  /** Con toda la web en oscuro el primario ya es blanco en cualquier sección.
   *  `tone` sólo cambia el secundario, que sobre el negro puro necesita un
   *  borde más claro que sobre el fondo general. */
  tone?: "light" | "dark";
};

// `quiet` es un enlace con chevron: la forma por defecto de llevar a otra
// página cuando no compite con la acción principal.
//
// La píldora de 48 px de alto y 17 px de texto era de Apple, y con ella puesta
// daba igual lo demás que se cambiara: el botón es lo que más se mira de una
// página. Ahora es un rectángulo de radio 8, 44 px de alto y texto de 15.
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

  // La acción principal va en blanco sólido: es lo que más contrasta contra el
  // fondo, y en naranja se confundía con el titular y con las etiquetas, que ya
  // llevan el acento.
  const variantClassName =
    variant === "primary"
      ? "bg-[var(--foreground)] text-[var(--background)] hover:brightness-90"
      : dark
        ? "border border-white/20 text-white hover:bg-white/10"
        : "border border-[var(--line-strong)] text-[var(--foreground)] hover:bg-[var(--panel-strong)]";

  return (
    <Link
      href={href}
      className={`inline-flex min-h-11 items-center justify-center rounded-[var(--radius-inner)] px-5 text-[15px] font-medium transition duration-[var(--dur-rapida)] ${variantClassName} ${className}`}
      {...props}
    >
      {children}
    </Link>
  );
}
