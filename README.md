# jorge-carrera-diez.es

Web personal de Jorge Carrera Diez.

El objetivo del proyecto es presentar el perfil profesional de Jorge como ingeniero de software con foco en producto, arquitectura, sistemas web, SEO tecnico e IA generativa aplicada. La pagina no funciona como portfolio generico: Snowy, LaRiojaMeteo y la experiencia enterprise sirven como pruebas concretas de criterio tecnico, capacidad de ejecucion y vision de producto.

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
  app/                    Rutas, metadata y paginas principales
  components/
    home/                 Secciones de la landing
    layout/               Header y footer
    projects/             Componentes de proyectos
    ui/                   Primitivas reutilizables
  constants/              Navegacion y constantes compartidas
  content/                Perfil, experiencia, proyectos y skills
  lib/                    Utilidades de SEO
  types/                  Tipos compartidos

public/
  images/                 Capturas, fotografia y assets visuales
  logos/                  Logos de empresas y proyectos
```

## Paginas

- `/`: landing principal con hero, rol actual, IA generativa, Snowy, proyectos, experiencia y stack.
- `/proyectos`: resumen de proyectos principales.
- `/proyectos/snowy`: caso tecnico de Snowy con producto, traccion, arquitectura, modulos, SEO, datos, IA y prensa.
- `/proyectos/lariojameteo`: contexto de LaRiojaMeteo como proyecto meteorologico regional.
- `/experiencia`: experiencia profesional con foco en VidaCaixa, Openbank, Inditex, Hiberus y etapas previas.
- `/cv`: version web del CV sin descarga publica.
- `/contacto`: contacto profesional.

## Contenido editable

La mayor parte del contenido vive en archivos tipados dentro de `src/content`:

- `profile.ts`: posicionamiento, titular, resumen y datos del sitio.
- `experience.ts`: experiencia profesional y logos asociados.
- `projects.ts`: Snowy, LaRiojaMeteo, metricas, menciones en prensa y capacidades.
- `skills.ts`: stack, areas tecnicas y foco profesional.

Esta separacion evita mezclar copy con componentes y hace mas sencillo ajustar el mensaje sin tocar estructura visual.

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

El sitio esta pensado para funcionar como carta de presentacion indexable:

- Metadata por pagina mediante `createMetadata`.
- Open Graph generado desde `src/app/opengraph-image.tsx`.
- `sitemap.xml` y `robots.txt` generados por App Router.
- Contenido SSR/static renderizado por Next.js.
- Copy orientado a recruiters y equipos tecnicos, evitando tono de landing agresiva.

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
