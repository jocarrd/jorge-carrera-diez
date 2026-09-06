import { DM_Mono, Instrument_Sans } from "next/font/google";

// Instrument Sans es la cara de la casa y va primero en la pila, no de
// respaldo. Con `-apple-system` delante, en macOS e iOS la web se renderizaba
// con San Francisco: la letra de Apple, que es la mayor parte de la identidad
// de una pagina.
//
// La pareja es deliberada: una grotesca con caracter para la prosa y una
// monoespaciada como voz secundaria para todo lo que es metadato —etiquetas,
// fechas, unidades, dominios—. DM Mono llega hasta el peso 500, que es el
// maximo que usa esta web en mono.
export const sans = Instrument_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  variable: "--font-sans-instrument",
});

export const mono = DM_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
  variable: "--font-mono-dm",
});

export const fontClass = `${sans.variable} ${mono.variable}`;
