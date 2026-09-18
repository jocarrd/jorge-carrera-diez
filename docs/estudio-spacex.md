# Estudio de spacex.com

Medición de diez páginas con Chromium a 1440×900, recorriendo cada página entera
para forzar la carga diferida y leyendo estilos calculados. Fecha: 18-09-2026.

Páginas: portada, Starship, Falcon 9, Falcon Heavy, Dragon, Human Spaceflight,
Rideshare, Starshield, Launches y starlink.com.

**Aviso sobre Starlink.** starlink.com no comparte lenguaje con spacex.com:
esquinas de 6 px, sombras, tipografía humanista y fondos claros. Es otro sistema
y no entra en las conclusiones. Todo lo que sigue sale de las nueve páginas de
spacex.com.

## 1. El hallazgo que ordena el resto

La superficie de página cubierta por fotografía o vídeo, medida sobre una
rejilla de 8 px:

| Página | Alto | Superficie de imagen | Ancho medio de cada pieza |
| ------ | ---- | -------------------- | ------------------------- |
| spacex.com portada | 6.621 px | 99 % | 1.440 px |
| Dragon | 7.992 px | 88 % | 1.104 px |
| Falcon 9 | 7.540 px | 87 % | 1.273 px |
| Starship | 5.725 px | 85 % | 1.296 px |
| Starshield | 7.842 px | 84 % | 1.027 px |
| **jorge-carrera-diez /proyectos** | 2.401 px | 23 % | 643 px |
| **jorge-carrera-diez /proyectos/snowy** | 14.080 px | 21 % | 490 px |
| **jorge-carrera-diez portada** | 10.106 px | 8 % | 288 px |

La página de Snowy mide 14.080 px, casi el doble que la más larga de SpaceX, y
enseña cuatro veces menos imagen. La portada enseña ocho veces menos.

De aquí sale la explicación de por qué la web se ve plana y a la vez vacía. No
es que falten sombras. Es que la imagen ocupa el 8 % y el texto tiene que
sostener 10.000 px de página él solo.

## 2. Inventario de adorno

Sobre 3.570 elementos visibles en las nueve páginas:

| Recurso | Elementos | Porcentaje |
| ------- | --------- | ---------- |
| Sombra | 0 | 0 % |
| Radio de esquina | 64 | 1,8 % |
| Borde | 62 | 1,7 % |
| Degradado | 32 | 0,9 % |

Cero sombras en toda la web. Los 64 radios son casi todos de **4 px** (56 usos,
presentes en las diez páginas); el resto son círculos del paginador. Los 62
bordes son todos de **1 px** y de dos colores: `rgba(255,255,255,.25)` y
`rgba(240,240,250,.35)`.

Los 32 degradados no decoran: son velos negros para que el texto se lea sobre la
foto. Los tres que se repiten en nueve de diez páginas son
`linear-gradient(rgba(0,0,0,.6) 0%, rgba(0,0,0,0) 95%)`,
`linear-gradient(rgba(0,0,0,.5) 0%, rgba(0,0,0,0) 100%)` y una variante lateral
`linear-gradient(to right, rgba(0,0,0,0) 60%, rgb(0,0,0) 100%)` que funde el
borde de la foto con el fondo de la página.

Comparación con la web actual: 506 elementos visibles, 10 con sombra (2 %) y 25
con degradado (5 %). Tiene **más adorno que SpaceX**, no menos.

## 3. Tarjetas

No hay ninguna. Ni una sola en las nueve páginas.

Cuando SpaceX tiene que enseñar varias piezas de un mismo producto usa tres
recursos, y ninguno es una caja con fondo:

1. **Foto a sangre con el texto encima.** La sección entera es una imagen de
   1.440×941 px (proporción 1,53) con el titular y un párrafo de 494 px en la
   columna izquierda, a 120 px del borde, y un velo negro degradado detrás.
2. **Foto a media página que se funde con el fondo.** La imagen ocupa la mitad
   izquierda con las esquinas a escuadra y se disuelve en negro por la derecha
   con un degradado lateral. El texto va en la otra mitad. Sin caja, sin marco,
   sin sombra.
3. **Columnas separadas por un filete de 1 px.** Tres columnas con un icono de
   línea, un título y un párrafo corto, divididas por una línea vertical
   `rgba(255,255,255,.25)`. Sin fondo propio.

Para series largas usan un carrusel horizontal de paneles de ancho completo, con
un paginador de puntos centrado, en lugar de una cuadrícula de tarjetas.

## 4. Tipografía

Una familia, D-DIN, con su corte negrita para titulares. 710 usos frente a 91
del corte bold. Roboto Mono aparece solo en las páginas de lanzamientos, para
cifras.

| Uso | Tamaño | Peso | Interlineado | Tracking | Caja |
| --- | ------ | ---- | ------------ | -------- | ---- |
| Titular de portada | 100 px | bold | 95 px (0,95) | −1 px (−0,01 em) | mayúsculas |
| Titular de sección | 48 px | bold | 48 px (1,0) | +0,96 px (+0,02 em) | mayúsculas |
| Subtitular | 32 px | regular | 38 px | +0,64 px (+0,02 em) | mayúsculas |
| Titular menor | 24 px | bold | 24 px | +0,48 px (+0,02 em) | mayúsculas |
| Rótulo sobre titular | 20 px | regular | 32 px | +0,4 px (+0,02 em) | mayúsculas |
| Etiqueta de dato | 13 px | 700 | 12,2 px | +1,17 px (+0,09 em) | mayúsculas |
| Cuerpo | 16 px | regular | 26 px (1,63) | normal | normal |

Dos reglas salen solas de la tabla:

- **Todo lo que va en mayúsculas lleva tracking positivo de +0,02 em**, y la
  etiqueta pequeña sube a +0,09 em. La única excepción con tracking negativo es
  el titular de 100 px.
- **Los titulares van a interlineado 1,0 o menos**; el cuerpo, a 1,63. El salto
  entre los dos ritmos es lo que compacta el titular en un bloque.

El estilo de texto más repetido de toda la web es la etiqueta de 13 px en
mayúsculas con +0,09 em: 252 usos en nueve páginas. Aparece en el menú y en las
tablas de datos, **no encima de los titulares de sección**. En seis de las siete
secciones con titular no hay nada por encima.

## 5. Color

Dos colores y sus transparencias.

| Papel | Valor | Usos |
| ----- | ----- | ---- |
| Fondo | `#000000` | 108, en las diez páginas |
| Texto | `#F0F0FA` | 511 |
| Texto secundario | `#F0F0FA` al 90 % | 270 |
| Texto terciario | `#F0F0FA` al 80 % | 77 |
| Velo sobre foto | `rgba(0,0,0,.5)` | 25 |
| Superficie sutil | `rgba(240,240,250,.1)` | 9 |
| Borde | `rgba(240,240,250,.35)` y `rgba(255,255,255,.25)` | 58 |

El blanco puro aparece 26 veces, casi siempre en iconos de terceros. El texto es
`#F0F0FA`, un blanco con una pizca de azul.

No hay color de acento. Ninguno. El color entra por la fotografía.

## 6. Retícula y ritmo

- Margen lateral: **120 px** a 1440 de ancho (8,3 %), lo que deja una caja de
  contenido de 1.200 px. En móvil baja a 20 px.
- Ancho de párrafo: **494 px** es el valor dominante, presente en siete de diez
  páginas. Son unos 65 caracteres. El titular de sección mide 468 px, así que
  titular y párrafo comparten columna.
- Altura de sección: **941 px**, repetida en nueve páginas. Sale del ancho de la
  página dividido entre 1,53, la proporción de la fotografía, no del alto de la
  ventana. Cada sección mide exactamente una foto.
- Separación entre titular de sección y su párrafo: entre 15 y 50 px.

La consecuencia de fijar la altura por la proporción de la imagen es que el
ritmo vertical no se calcula con paddings. Una sección es una foto, y el texto
se coloca encima.

## 7. Componentes

**Botón.** Alto 50 px, padding lateral 20 px, radio 4 px, borde de 1 px
`rgba(240,240,250,.35)`, fondo `rgba(0,0,0,.5)`, texto de 16 px en `#F0F0FA`
con una flecha a la derecha. Es el único componente con borde de toda la web.

**Tabla de datos.** Etiqueta a la izquierda en 13 px mayúsculas con +0,09 em,
valor a la derecha alineado, y un filete de 1 px entre filas. Sin fondo, sin
bordes laterales, sin cabecera. Ocupa la mitad izquierda de la pantalla con la
foto del producto al lado.

**Carrusel.** Flechas grandes en los bordes de la pantalla, puntos centrados
debajo, paneles de ancho completo. Sin recorte ni asomo del panel siguiente.

**Campo de formulario.** Caja gris plana, esquinas a escuadra, rótulo pequeño en
mayúsculas encima del valor. El botón de enviar es un cuadrado con borde y una
flecha.

## 8. Movimiento

Solo opacidad. `opacity 0.5s ease` con 22 usos y `opacity 0.3s ease` con 9. Para
color y fondo usan `0.5s cubic-bezier(0.19, 1, 0.22, 1)`, una curva exponencial
que frena al final.

No hay una sola aparición con desplazamiento ni con escala. Nada sube quince
píxeles al entrar en pantalla.

## 9. Lo que no conviene copiar

La página está sobre negro y el texto es claro, así que el velo degradado basta
para leer. En la sección «Full and rapid reusability» de Starship el titular
blanco cae sobre un cielo de amanecer claro y el párrafo queda por debajo del
umbral de contraste. Funciona como cartel y falla como texto.

Con fondo claro por defecto, el texto sobre foto solo se sostiene si la foto
lleva un velo fuerte o si el texto vive fuera de la imagen. La segunda opción es
la que hay que usar aquí.

Tampoco se traslada la tipografía en mayúsculas para titulares largos en
castellano: los titulares de SpaceX son de una o dos palabras, y los de esta web
son frases.

## 10. Reglas para el sistema de esta web

Lo que se lleva, con su número detrás:

1. **Subir la superficie de imagen del 8 % al 40 % como mínimo.** Es el cambio
   con más efecto y el único que ataca la causa de que la web se vea plana.
2. **Las capturas grandes y a sangre por un lado.** Ancho medio de pieza actual
   288 px en la portada; el objetivo es pasar de 900 px, con un borde que se
   funda con el fondo en lugar de una caja con esquinas.
3. **Quitar las sombras de las superficies.** SpaceX tiene cero en 3.570
   elementos y la web tiene un 2 %. La separación la hace el filete de 1 px.
4. **Un solo radio pequeño.** Ahora mismo hay `8 / 12 / 16 / 999 px`. SpaceX
   usa 4 px en el 87 % de los casos.
5. **Filete de 1 px como único separador**, tanto entre columnas como entre
   filas de datos.
6. **Tracking +0,02 em en todo lo que vaya en mayúsculas** y +0,09 em en las
   etiquetas de dato de 13 px.
7. **Interlineado 1,0 en titulares y 1,6 en cuerpo.** El contraste entre los dos
   es lo que da peso al titular sin subir el tamaño.
8. **Párrafo a 65 caracteres**, en la misma columna que su titular.
9. **Nada encima del titular de sección.** Ya está hecho, y coincide con lo
   medido: seis de siete secciones de SpaceX no llevan rótulo.
10. **El movimiento, solo opacidad**, de 0,3 a 0,5 s. Fuera los desplazamientos
    de entrada.
11. **Tabla de datos en lugar de tarjeta de métrica** para cifras: etiqueta a la
    izquierda, valor a la derecha, filete entre filas.
12. **Reservar el color de fondo tintado para la presentación de los tres
    productos.** Dentro de la página de un producto, el color lo pone la captura.

## 11. Aplicación a las tarjetas de Snowy

Las cinco tarjetas de `SurfaceTiles` son hoy cajas oscuras con degradado
tintado, radio de 16 px, halo de color y la captura recortada asomando por
abajo. Contra las reglas de arriba fallan en la 3, la 4 y la 12, y la captura
mide 490 px de ancho medio cuando debería pasar de 900.

La traducción directa del patrón de SpaceX a este caso es alternar bloques a
ancho casi completo, con la captura grande fundida contra el fondo por un lado y
el texto en una columna de 494 px al otro, separados del bloque siguiente por un
filete de 1 px en lugar de por un cambio de color.
