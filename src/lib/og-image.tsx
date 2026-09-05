import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";
import { getCopy, site } from "@/content";
import type { Locale } from "@/i18n/config";

export const ogSize = {
  width: 1200,
  height: 630,
};

export const ogContentType = "image/png";

const raiz = (...partes: string[]) => join(process.cwd(), ...partes);

/* La tarjeta social es lo primero que se ve del sitio, muchas veces lo unico,
   asi que se pinta con la misma paleta y la misma tipografia que la web: fondo
   claro, acento teal y Onest. Antes heredaba el tema oscuro que ya no existe.

   Dos limites de satori que condicionan el codigo: no decodifica WebP —la foto
   iba en .webp y por eso salia un hueco vacio— y no lee las fuentes del sistema,
   hay que pasarle el fichero. De ahi el JPEG y los TTF versionados. */
export async function renderOpenGraphImage(locale: Locale) {
  const copy = getCopy(locale).meta;

  const [regular, semibold, bold, retrato] = await Promise.all([
    readFile(raiz("src/assets/fonts/Onest-Regular.ttf")),
    readFile(raiz("src/assets/fonts/Onest-SemiBold.ttf")),
    readFile(raiz("src/assets/fonts/Onest-Bold.ttf")),
    readFile(raiz("src/assets/jorge-og.jpg")),
  ]);
  const foto = `data:image/jpeg;base64,${retrato.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          position: "relative",
          overflow: "hidden",
          background: "#ffffff",
          color: "#1d1d1f",
          fontFamily: "Onest",
        }}
      >
        {/* La banda gris de la derecha repite la superficie de seccion del
            sitio y le da a la foto un fondo propio sin recortarla. */}
        <div
          style={{
            position: "absolute",
            right: 0,
            top: 0,
            width: 452,
            height: "100%",
            background: "#f5f5f7",
          }}
        />

        <div
          style={{
            position: "relative",
            display: "flex",
            width: "100%",
            height: "100%",
            alignItems: "stretch",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              width: 748,
              padding: "62px 56px 58px 68px",
            }}
          >
            <div style={{ display: "flex", flexDirection: "column" }}>
              <div
                style={{
                  display: "flex",
                  fontSize: 20,
                  fontWeight: 600,
                  letterSpacing: 2.4,
                  textTransform: "uppercase",
                  color: "#0f766e",
                }}
              >
                {copy.ogEyebrow}
              </div>
              <div
                style={{
                  marginTop: 26,
                  fontSize: 82,
                  lineHeight: 1.02,
                  fontWeight: 700,
                  letterSpacing: -3.2,
                  color: "#1d1d1f",
                }}
              >
                {site.name}
              </div>
              <div
                style={{
                  marginTop: 24,
                  maxWidth: 600,
                  fontSize: 27,
                  lineHeight: 1.42,
                  color: "#6e6e73",
                }}
              >
                {copy.ogTagline}
              </div>
            </div>

            <div style={{ display: "flex", flexDirection: "column" }}>
              <div style={{ display: "flex", gap: 46 }}>
                {copy.ogStats.map(([label, value]) => (
                  <div key={label} style={{ display: "flex", flexDirection: "column", width: 196 }}>
                    <div
                      style={{
                        display: "flex",
                        fontSize: 15,
                        fontWeight: 600,
                        letterSpacing: 1.4,
                        textTransform: "uppercase",
                        color: "#86868b",
                      }}
                    >
                      {label}
                    </div>
                    <div style={{ display: "flex", marginTop: 9, fontSize: 20, color: "#1d1d1f" }}>
                      {value}
                    </div>
                  </div>
                ))}
              </div>
              <div
                style={{
                  display: "flex",
                  marginTop: 34,
                  paddingTop: 24,
                  borderTop: "1px solid #e8e8ed",
                  fontSize: 22,
                  fontWeight: 600,
                  color: "#1d1d1f",
                }}
              >
                {site.domain}
              </div>
            </div>
          </div>

          <div style={{ display: "flex", width: 452, alignItems: "flex-end", justifyContent: "center" }}>
            {/* eslint-disable-next-line @next/next/no-img-element -- ImageResponse
                renderiza fuera del DOM de React: next/image no aplica aqui. */}
            <img
              src={foto}
              alt=""
              width={452}
              height={630}
              style={{ width: 452, height: 630, objectFit: "cover", objectPosition: "50% 22%" }}
            />
          </div>
        </div>
      </div>
    ),
    {
      ...ogSize,
      fonts: [
        { name: "Onest", data: regular, weight: 400, style: "normal" },
        { name: "Onest", data: semibold, weight: 600, style: "normal" },
        { name: "Onest", data: bold, weight: 700, style: "normal" },
      ],
    },
  );
}
