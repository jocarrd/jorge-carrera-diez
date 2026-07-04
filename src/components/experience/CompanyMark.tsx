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
      <div
        className={`flex h-12 w-32 items-center justify-center overflow-hidden rounded-xl border border-white/10 bg-white p-3 ${logo.containerClassName ?? ""}`}
      >
        <Image
          src={logo.src}
          alt={logo.alt}
          width={112}
          height={32}
          className={`h-auto max-h-8 w-auto max-w-28 object-contain ${logo.className ?? ""}`}
        />
      </div>
    );
  }

  return (
    <div className="flex h-12 min-w-32 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] px-4">
      <span className="text-sm font-semibold tracking-tight text-white">
        {logo?.fallback}
      </span>
    </div>
  );
}
