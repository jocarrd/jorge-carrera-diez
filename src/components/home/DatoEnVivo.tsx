import { getCopy } from "@/content";
import type { Locale } from "@/i18n/config";
import { leerEstadoRed } from "@/lib/snowy-live";
import { EscalaTemperatura } from "./EscalaTemperatura";

// El resto de la portada cuenta lo que he construido. Esto lo enseña
// funcionando: arriba, en la misma banda, van noventa días de histórico; aquí
// debajo, lo que la red está midiendo en este momento.
//
// Es un componente de servidor a propósito: la clave del engine no puede llegar
// al navegador, la petición se hace una vez cada diez minutos para todo el
// mundo y no hay salto de contenido al hidratar.
export async function DatoEnVivo({ locale }: { locale: Locale }) {
  const copy = getCopy(locale).enVivo;
  const red = await leerEstadoRed();

  // Sin lectura no hay bloque. Una sección que dice "no se ha podido cargar" es
  // peor que no estar: cuenta justo lo contrario de lo que viene a decir.
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
        <a href="https://snowy.es/mapa" target="_blank" rel="noreferrer">
          {copy.enlace}
        </a>
      </p>
    </div>
  );
}
