import { getCopy, site } from "@/content";
import type { Locale } from "@/i18n/config";
import { leerEstadoRed } from "@/lib/snowy-live";
import { EscalaTemperatura } from "./EscalaTemperatura";

export async function DatoEnVivo({ locale }: { locale: Locale }) {
  const copy = getCopy(locale).enVivo;
  const red = await leerEstadoRed();

  if (!red) return null;

  const idioma = locale === "es" ? "es-ES" : "en-GB";
  const numero = new Intl.NumberFormat(idioma, { useGrouping: "always" });
  const hora = new Intl.DateTimeFormat(idioma, {
    hour: "2-digit",
    minute: "2-digit",
    timeZone: "Europe/Madrid",
  }).format(new Date(red.leidoEn));

  return (
    <div className="vivo">
      <div className="vivo-cabecera">
        <p className="t-eyebrow">
          <span aria-hidden className="vivo-pulso" />
          {copy.eyebrow}
        </p>
        <p className="vivo-sello">
          {copy.leidoLabel} <time dateTime={red.leidoEn}>{hora}</time>
        </p>
      </div>

      <p className="vivo-titular">
        <strong>{numero.format(red.reportando)}</strong> {copy.reportando}{" "}
        <strong>{red.redes}</strong> {copy.redesLabel}.
      </p>

      <EscalaTemperatura
        minima={red.minima}
        maxima={red.maxima}
        reparto={red.reparto}
        etiquetaMinima={copy.minimaLabel}
        etiquetaMaxima={copy.maximaLabel}
        idioma={idioma}
      />

      <p className="vivo-texto">
        {copy.texto}{" "}
        <a href={site.snowyMapa} target="_blank" rel="noreferrer">
          {copy.enlace}
        </a>
      </p>
    </div>
  );
}
