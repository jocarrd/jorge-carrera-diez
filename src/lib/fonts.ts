import { IBM_Plex_Mono, IBM_Plex_Sans } from "next/font/google";

// Plex es una familia de ingeniería: la sans y la mono comparten esqueleto, así
// que los acentos monoespaciados que ya usaba el sitio —fechas, eyebrows, datos—
// dejan de parecer un cuerpo extraño y pasan a leerse como la misma voz.
export const sans = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  variable: "--font-sans-plex",
});

export const mono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
  variable: "--font-mono-plex",
});

export const fontClass = `${sans.variable} ${mono.variable}`;
