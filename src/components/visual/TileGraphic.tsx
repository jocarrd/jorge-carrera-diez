type TileGraphicProps = {
  kind: string;
};

export function TileGraphic({ kind }: TileGraphicProps) {
  return (
    <span className="tile-graphic" aria-hidden>
      <svg viewBox="0 0 120 72" fill="none">
        {kind === "skills" ? (
          <>
            <rect
              x="8"
              y="16"
              width="76"
              height="6"
              rx="3"
              className="tg-soft"
            />
            <rect
              x="8"
              y="33"
              width="96"
              height="6"
              rx="3"
              className="tg-soft"
            />
            <rect
              x="8"
              y="50"
              width="44"
              height="6"
              rx="3"
              className="tg-solid"
            />
            <rect
              x="57"
              y="47"
              width="5"
              height="12"
              rx="2.5"
              className="tg-solid"
            />
          </>
        ) : null}

        {kind === "parallel" ? (
          <>
            <rect
              x="7"
              y="22"
              width="42"
              height="28"
              rx="9"
              className="tg-stroke"
            />
            <rect
              x="71"
              y="22"
              width="42"
              height="28"
              rx="9"
              className="tg-stroke"
            />
            <path d="M49 36h9" className="tg-stroke" />
            <path d="M62 36h9" className="tg-stroke" />
            <circle cx="60" cy="36" r="4.5" className="tg-fill" />
          </>
        ) : null}

        {kind === "signal" ? (
          <>
            <rect
              x="10"
              y="40"
              width="14"
              height="22"
              rx="4"
              className="tg-solid"
            />
            <rect
              x="32"
              y="26"
              width="14"
              height="36"
              rx="4"
              className="tg-solid"
            />
            <rect
              x="54"
              y="48"
              width="14"
              height="14"
              rx="4"
              className="tg-soft"
            />
            <rect
              x="76"
              y="18"
              width="14"
              height="44"
              rx="4"
              className="tg-solid"
            />
            <rect
              x="98"
              y="52"
              width="14"
              height="10"
              rx="4"
              className="tg-soft"
            />
          </>
        ) : null}

        {kind === "gate" ? (
          <>
            <rect
              x="8"
              y="30"
              width="104"
              height="12"
              rx="6"
              className="tg-soft"
            />
            <rect
              x="8"
              y="30"
              width="62"
              height="12"
              rx="6"
              className="tg-solid"
            />
            <path d="M86 18v36" className="tg-stroke" strokeDasharray="4 5" />
            <path d="M78 12h16" className="tg-stroke" />
          </>
        ) : null}
      </svg>
    </span>
  );
}
