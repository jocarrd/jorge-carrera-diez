# jorge-carrera-diez.es

Sitio web personal construido con Next.js para publicar el perfil profesional, experiencia, proyectos y datos de contacto de Jorge Carrera Diez.

El proyecto esta organizado como una web estatica/SSR orientada a SEO, rendimiento y mantenimiento sencillo. El contenido principal esta separado de los componentes para facilitar cambios de copy, experiencia, proyectos y metadata sin tocar la estructura visual.

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

- `/`: pagina principal con hero, rol actual, IA generativa, Snowy, proyectos, experiencia y stack.
- `/proyectos`: resumen de proyectos principales.
- `/proyectos/snowy`: caso tecnico de Snowy con producto, traccion, arquitectura, modulos, SEO, datos, IA y prensa.
- `/proyectos/lariojameteo`: contexto de LaRiojaMeteo como proyecto meteorologico regional.
- `/experiencia`: experiencia profesional con foco en VidaCaixa, Openbank, Inditex, Hiberus y etapas previas.
- `/cv`: version web del CV.
- `/contacto`: contacto profesional.

## Contenido editable

La mayor parte del contenido vive en archivos tipados dentro de `src/content`:

- `profile.ts`: posicionamiento, titular, resumen y datos del sitio.
- `experience.ts`: experiencia profesional y logos asociados.
- `projects.ts`: Snowy, LaRiojaMeteo, metricas, menciones en prensa y capacidades.
- `skills.ts`: stack, areas tecnicas y foco profesional.

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
- Open Graph generado desde `src/app/opengraph-image.tsx`.
- `sitemap.xml` y `robots.txt` generados por App Router.
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
