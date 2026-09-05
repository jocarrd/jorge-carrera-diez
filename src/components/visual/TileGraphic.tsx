type TileGraphicProps = {
  kind: string;
};

// Un icono generico dice "aqui hay algo de interfaz"; un diagrama dice que la
// respuesta llega escribiendose, que las herramientas son contratos, que de
// varios documentos se elige uno, y que el control es un limite con un margen.
// Son cuatro dibujos de trazo, sin relleno, para que compartan peso con el
// resto de la pagina.
export function TileGraphic({ kind }: TileGraphicProps) {
  return (
    <span className="tile-graphic" aria-hidden>
      <svg viewBox="0 0 120 72" fill="none">
        {kind === "input" ? (
          <>
            {/* Respuesta escribiendose: lineas que salen y el cursor al final. */}
            <rect x="8" y="16" width="76" height="6" rx="3" className="tg-soft" />
            <rect x="8" y="33" width="96" height="6" rx="3" className="tg-soft" />
            <rect x="8" y="50" width="44" height="6" rx="3" className="tg-solid" />
            <rect x="57" y="47" width="5" height="12" rx="2.5" className="tg-solid" />
          </>
        ) : null}

        {kind === "tools" ? (
          <>
            {/* Dos piezas que encajan: eso es un contrato, no una llamada. */}
            <rect x="7" y="22" width="42" height="28" rx="9" className="tg-stroke" />
            <rect x="71" y="22" width="42" height="28" rx="9" className="tg-stroke" />
            <path d="M49 36h9" className="tg-stroke" />
            <path d="M62 36h9" className="tg-stroke" />
            <circle cx="60" cy="36" r="4.5" className="tg-fill" />
          </>
        ) : null}

        {kind === "context" ? (
          <>
            {/* Varios documentos, uno recuperado: eso es RAG. */}
            <rect x="10" y="12" width="46" height="14" rx="6" className="tg-soft" />
            <rect x="10" y="31" width="46" height="14" rx="6" className="tg-solid" />
            <rect x="10" y="50" width="46" height="14" rx="6" className="tg-soft" />
            <path d="M60 38h34" className="tg-stroke" />
            <path d="M88 32l6 6-6 6" className="tg-stroke" />
            <circle cx="104" cy="38" r="6" className="tg-fill" />
          </>
        ) : null}

        {kind === "guard" ? (
          <>
            {/* Un limite con margen: la barra llega hasta el tope y se para. */}
            <rect x="8" y="30" width="104" height="12" rx="6" className="tg-soft" />
            <rect x="8" y="30" width="62" height="12" rx="6" className="tg-solid" />
            <path d="M86 18v36" className="tg-stroke" strokeDasharray="4 5" />
            <path d="M78 12h16" className="tg-stroke" />
          </>
        ) : null}
      </svg>
    </span>
  );
}
