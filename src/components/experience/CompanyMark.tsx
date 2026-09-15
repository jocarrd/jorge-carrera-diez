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
  // Los logotipos ya vienen en blanco sobre transparente, así que no necesitan
  // caja: encerrarlos en un rectángulo gris los convertía en un botón y, con
  // los originales de color, dejaba el texto del logo casi invisible.
  if (logo?.src) {
    return (
      <div className={`flex h-8 items-center ${logo.containerClassName ?? ""}`}>
        <Image
          src={logo.src}
          alt={logo.alt}
          width={112}
          height={32}
          className={`h-auto max-h-7 w-auto max-w-28 object-contain opacity-80 ${logo.className ?? ""}`}
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
