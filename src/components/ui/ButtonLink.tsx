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
      : "border-white/15 lvl-2 text-white hover:border-cyan-300/60 hover:bg-cyan-300/10";

  return (
    <Link
      href={href}
      className={`inline-flex min-h-12 items-center justify-center rounded-full border px-6 text-sm font-medium tracking-tight transition duration-200 hover:-translate-y-0.5 motion-reduce:hover:translate-y-0 sm:min-h-13 sm:px-7 sm:text-base ${variantClassName}`}
      {...props}
    >
      {children}
    </Link>
  );
}
