# jorge-carrera-diez.com

Sitio web personal construido con Next.js para publicar el perfil profesional, experiencia, proyectos y datos de contacto de Jorge Carrera Diez.

El proyecto esta organizado como una web estatica/SSR orientada a SEO, rendimiento y mantenimiento sencillo. El contenido principal esta separado de los componentes para facilitar cambios de copy, experiencia, proyectos y metadata sin tocar la estructura visual.

El sitio es bilingue: espanol en la raiz e ingles bajo `/en`, con el mismo arbol de rutas y slugs traducidos.

## Stack

- Next.js 16 con App Router
- React 19
- TypeScript
- Tailwind CSS v4
- Three.js para el fondo/escena visual
- Metadata dinamica de Next.js para SEO, Open Graph, sitemap y robots

## Estructura

```txt
src/
  app/
    (es)/                 Arbol espanol: rutas en la raiz
    (en)/en/              Arbol ingles: mismas paginas bajo /en
  components/
    cv/                   Boton de impresion del CV
    home/                 Secciones de la landing
    layout/               Header, footer y selector de idioma
    projects/             Componentes de proyectos
    ui/                   Primitivas reutilizables
  content/
    copy/es.ts            Todo el copy en espanol
    copy/en.ts            Todo el copy en ingles
    site.ts               Datos que no cambian con el idioma
  i18n/                   Locales y mapa de rutas por idioma
  lib/                    Utilidades de SEO y Open Graph
  types/                  Tipos compartidos
  views/                  Vistas de pagina compartidas entre idiomas

public/
  images/                 Capturas, fotografia y assets visuales
  logos/                  Logos de empresas y proyectos
```

## Paginas

- `/`: pagina principal con hero, rol actual, IA generativa, Snowy, proyectos, experiencia y stack.
- `/proyectos`: resumen de proyectos principales.
- `/proyectos/snowy`: caso tecnico de Snowy con producto, traccion, arquitectura, modulos, SEO, datos, IA y prensa.
- `/proyectos/lariojameteo`: contexto de LaRiojaMeteo como proyecto meteorologico regional.
- `/experiencia`: experiencia profesional con foco en EQx, VidaCaixa, Openbank, Inditex, Hiberus y etapas previas.
- `/cv`: version web del CV, con descarga en PDF via dialogo de impresion.
- `/contacto`: contacto profesional.

Cada una tiene su equivalente en ingles: `/en`, `/en/projects`, `/en/projects/snowy`,
`/en/projects/lariojameteo`, `/en/experience`, `/en/cv` y `/en/contact`. El mapa vive en
`src/i18n/routes.ts`.

## Contenido editable

Todo el texto vive en archivos tipados dentro de `src/content`:

- `copy/es.ts` y `copy/en.ts`: perfil, experiencia, proyectos, skills y copy de cada pagina.
- `site.ts`: nombre, dominio, correo y perfiles, que no cambian con el idioma.

Ambos archivos de copy cumplen el tipo `Copy` (`src/types/content.ts`), asi que **anadir
un texto en espanol obliga a anadirlo en ingles**: si falta, el build no compila. Esa es la
garantia de que los dos idiomas no se desincronizan.

Esta separacion evita mezclar copy con componentes y permite actualizar el contenido sin modificar las piezas de UI.

## Scripts

```bash
npm run dev
npm run lint
npm run build
npm run start
```

Desarrollo local:

```bash
npm run dev
```

Abrir `http://localhost:3000`.

## SEO

El sitio incluye configuracion SEO basica para funcionar como pagina personal indexable:

- Metadata por pagina mediante `createMetadata`.
- Open Graph por idioma desde `src/lib/og-image.tsx`.
- `hreflang` reciproco entre las dos versiones y `x-default` apuntando al espanol.
- `sitemap.xml` con las dos variantes de cada pagina y `robots.txt`, generados por App Router.
- Contenido SSR/static renderizado por Next.js.
- Copy estructurado por paginas y contenido tipado.

## Criterio de diseño

El look & feel mezcla una base limpia tipo producto con un lenguaje visual espacial/futurista:

- Fondo oscuro, rejilla sutil y orbitas.
- Jerarquia clara entre hero, producto, experiencia y pruebas.
- Componentes sobrios, bordes finos y estados hover discretos.
- Animaciones suaves solo cuando ayudan a comunicar sistema o arquitectura.
- Mobile cuidado con navegacion directa a secciones clave.

## Despliegue

El proyecto es una aplicacion Next.js estandar. Puede desplegarse en Vercel o en infraestructura propia compatible con Node.js.

Antes de desplegar:

```bash
npm run lint
npm run build
```
