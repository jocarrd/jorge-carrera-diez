import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";

type ButtonLinkProps = ComponentProps<typeof Link> & {
  children: ReactNode;
  variant?: "primary" | "secondary";
};

export function ButtonLink({
  href,
  children,
  variant = "primary",
  ...props
}: ButtonLinkProps) {
  const variantClassName =
    variant === "primary"
      ? "border-white bg-white text-black hover:bg-cyan-100"
      : "border-white/15 bg-white/[0.03] text-white hover:border-cyan-300/60 hover:bg-cyan-300/10";

  return (
    <Link
      href={href}
      className={`inline-flex min-h-11 items-center justify-center rounded-full border px-5 text-sm font-medium transition ${variantClassName}`}
      {...props}
    >
      {children}
    </Link>
  );
}
