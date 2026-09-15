import Image from "next/image";
import { site } from "@/content";

// Las tres superficies del hero: el índice de EQx en grande, el radar de Snowy
// asomando por detrás y el móvil delante. Es lo que separa este portfolio de
// una página de texto: se ve el producto antes de leer nada.
//
// En móvil no caben tres capas de 900 px de ancho, así que se queda el móvil
// —que es la captura pensada para ese tamaño— y la ventana grande recortada
// detrás, sin perspectiva.
//
// La animación de entrada va en este mismo nodo y no en un envoltorio: un
// `transform` crea contexto de posicionamiento, y con el envoltorio la escena
// se colocaba respecto a él en vez de respecto al contenedor del hero, que es
// lo que la mandaba al pie de la sección.
export function HeroStage() {
  return (
    <div className="hero-stage rise rise-3" aria-hidden>
      <div className="hero-win hero-win--back">
        <div className="hero-bar">
          <span />
          <span />
          <span />
          <p>{site.snowyDomain}/radar</p>
        </div>
        <Image src="/images/snowy-radar-map.webp" alt="" width={1600} height={1000} sizes="760px" />
      </div>

      <div className="hero-win hero-win--front">
        <div className="hero-bar">
          <span />
          <span />
          <span />
          <p>elitequality.org</p>
        </div>
        <Image
          src="/images/eqx-index.webp"
          alt=""
          width={1600}
          height={1000}
          priority
          sizes="(max-width: 1023px) 92vw, 820px"
        />
      </div>

      <div className="hero-device">
        <Image src="/images/snowy-home-movil.webp" alt="" width={780} height={1865} sizes="220px" />
      </div>
    </div>
  );
}
