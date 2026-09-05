import { IBM_Plex_Mono, Onest } from "next/font/google";

// La cara que se persigue es San Francisco, que no se puede servir: viene con
// el sistema en macOS e iOS y ahí la resuelve `-apple-system` en globals.css.
// Onest entra sólo donde esa pila no existe —Linux, Windows, Android— porque
// comparte proporciones y altura de x, así que la maqueta no se mueve.
export const sans = Onest({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  variable: "--font-sans-onest",
});

export const mono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
  variable: "--font-mono-plex",
});

export const fontClass = `${sans.variable} ${mono.variable}`;
