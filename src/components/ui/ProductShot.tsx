import Image from "next/image";

type ProductShotProps = {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  priority?: boolean;
  tone?: "light" | "dark";
  className?: string;
  crop?: boolean;
  /** Captura tomada en un móvil real. Sin ella, en pantallas estrechas se
   *  encoge una pantalla de escritorio y no se lee nada de lo que enseña. */
  srcMobile?: string;
  mobileWidth?: number;
  mobileHeight?: number;
};

// El encuadre es siempre el mismo: esquina muy redondeada, un filo claro que
// simula el canto del cristal y la sombra proyectada debajo, no alrededor.
// `crop` deja la captura asomando por el borde inferior en vez de terminarla,
// que es lo que da sensación de que hay producto más allá del recorte.
export function ProductShot({
  src,
  alt,
  width = 2400,
  height = 1500,
  priority = false,
  tone = "light",
  className = "",
  crop = false,
  srcMobile,
  mobileWidth = 430,
  mobileHeight = 932,
}: ProductShotProps) {
  const ring =
    tone === "dark"
      ? "ring-1 ring-white/[0.12] shadow-[0_40px_90px_-20px_rgba(0,0,0,0.85)]"
      : "ring-1 ring-black/[0.06] shadow-[0_40px_80px_-24px_rgba(0,0,0,0.28)]";

  const frame = `overflow-hidden rounded-[22px] sm:rounded-[28px] ${ring} ${className}`;

  if (srcMobile) {
    return (
      <>
        <div className={`${frame} sm:hidden ${crop ? "max-h-[460px]" : ""}`}>
          <Image
            src={srcMobile}
            alt={alt}
            width={mobileWidth}
            height={mobileHeight}
            priority={priority}
            className={`w-full ${crop ? "object-cover object-top" : "h-auto"}`}
            sizes="100vw"
          />
        </div>
        <div className={`hidden ${frame} sm:block ${crop ? "sm:max-h-[560px]" : ""}`}>
          <Image
            src={src}
            alt={alt}
            width={width}
            height={height}
            className={`w-full ${crop ? "object-cover object-top" : "h-auto"}`}
            sizes="1120px"
          />
        </div>
      </>
    );
  }

  return (
    <div className={`${frame} ${crop ? "max-h-[420px] sm:max-h-[560px]" : ""}`}>
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        priority={priority}
        className={`w-full ${crop ? "object-cover object-top" : "h-auto"}`}
        sizes="(max-width: 768px) 100vw, 1120px"
      />
    </div>
  );
}
