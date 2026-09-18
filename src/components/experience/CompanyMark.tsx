import Image from "next/image";

type CompanyMarkProps = {
  logo?: {
    src?: string;
    alt: string;
    fallback: string;
    containerClassName?: string;
    className?: string;
  };
};

export function CompanyMark({ logo }: CompanyMarkProps) {
  if (logo?.src) {
    return (
      <div className={`flex h-8 items-center ${logo.containerClassName ?? ""}`}>
        <Image
          src={logo.src}
          alt={logo.alt}
          width={112}
          height={32}
          className={`client-logo h-auto max-h-7 w-auto max-w-28 object-contain ${logo.className ?? ""}`}
        />
      </div>
    );
  }

  return (
    <div className="flex h-8 items-center">
      <span className="text-sm font-semibold tracking-tight text-[var(--muted)]">
        {logo?.fallback}
      </span>
    </div>
  );
}
