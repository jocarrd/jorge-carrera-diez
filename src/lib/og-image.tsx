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

export async function renderOpenGraphImage(locale: Locale) {
  const copy = getCopy(locale).meta;

  const [regular, semibold, bold, retrato] = await Promise.all([
    readFile(raiz("src/assets/fonts/Geist-Regular.woff")),
    readFile(raiz("src/assets/fonts/Geist-SemiBold.woff")),
    readFile(raiz("src/assets/fonts/Geist-Bold.woff")),
    readFile(raiz("src/assets/jorge-og.jpg")),
  ]);
  const foto = `data:image/jpeg;base64,${retrato.toString("base64")}`;

  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        position: "relative",
        overflow: "hidden",
        background: "#0a0a0a",
        color: "#f2f2f2",
        fontFamily: "Geist",
      }}
    >
      <div
        style={{
          position: "absolute",
          right: 0,
          top: 0,
          width: 452,
          height: "100%",
          background: "#101010",
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
                color: "#fb923c",
              }}
            >
              {copy.ogEyebrow}
            </div>
            <div
              style={{
                marginTop: 26,
                fontSize: 82,
                lineHeight: 1.02,
                fontWeight: 600,
                letterSpacing: -3.4,
                color: "#f2f2f2",
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
                color: "#a0a0a0",
              }}
            >
              {copy.ogTagline}
            </div>
          </div>

          <div style={{ display: "flex", flexDirection: "column" }}>
            <div style={{ display: "flex", gap: 46 }}>
              {copy.ogStats.map(([label, value]) => (
                <div
                  key={label}
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    width: 196,
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      fontSize: 15,
                      fontWeight: 600,
                      letterSpacing: 1.4,
                      textTransform: "uppercase",
                      color: "#6e6e6e",
                    }}
                  >
                    {label}
                  </div>
                  <div
                    style={{
                      display: "flex",
                      marginTop: 9,
                      fontSize: 20,
                      color: "#f2f2f2",
                    }}
                  >
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
                borderTop: "1px solid #222222",
                fontSize: 22,
                fontWeight: 600,
                color: "#f2f2f2",
              }}
            >
              {site.domain}
            </div>
          </div>
        </div>

        <div
          style={{
            position: "relative",
            display: "flex",
            width: 452,
            alignItems: "flex-end",
            justifyContent: "center",
          }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={foto}
            alt=""
            width={452}
            height={630}
            style={{
              width: 452,
              height: 630,
              objectFit: "cover",
              objectPosition: "50% 22%",
            }}
          />
          <div
            style={{
              position: "absolute",
              left: 0,
              top: 0,
              width: 150,
              height: 630,
              background:
                "linear-gradient(to right, #0a0a0a, rgba(10,10,10,0))",
            }}
          />
        </div>
      </div>
    </div>,
    {
      ...ogSize,
      fonts: [
        { name: "Geist", data: regular, weight: 400, style: "normal" },
        { name: "Geist", data: semibold, weight: 600, style: "normal" },
        { name: "Geist", data: bold, weight: 700, style: "normal" },
      ],
    },
  );
}
