# Día 3 · tramo 9 (5:09:00–7:15:00)

## Un agente de voz al teléfono (5:10–5:16)
- 5:10 Aparece un número de teléfono en la web y hacen una demostración en directo: Matt llama, deja su opinión hablando, y **el mensaje aparece en su canal de Slack al instante**.
- 5:11 Cómo está hecho: es una función aparte del producto, un constructor de flujos de voz con interfaz gráfica. **No escribió nada de código.** Solo conectó un webhook que recoge la llamada y la manda a Slack. Lleva los mismos filtros de moderación que el resto.
- 5:12 **Un susto que conviene contar en el curso**: se le queda medio visible una credencial en pantalla. Se dan cuenta, la borran y lo comentan sin dramatizar. La frase que sueltan: en el chat no se ponen secretos.
- 5:14 **Cuándo tiene sentido un agente de voz y cuándo no, dicho con honestidad.** Él no pondría un agente a llamar a la gente en su nombre, porque el trato humano importa y a él mismo le molesta encontrarse un robot cuando llama a algún sitio buscando ayuda.
- 5:15 Dónde sí lo ve: para **recoger** información y resolver gestiones. Al agente de voz se le pueden dar herramientas, como actualizar una dirección o un nombre. Y menciona la pieza clave, **una herramienta para escalar**: si el cliente pide algo que el agente no debe hacer, la llamada pasa a una persona.
- 5:13 La idea de fondo: con esas automatizaciones un equipo de tres personas opera casi como una empresa grande.

## Los datos de uso, en directo (5:17–5:18)
- 5:17 Activan la analítica de la web durante la emisión. Hay **1.400 personas en la página** en ese momento.
- 5:18 **El dato que cambia prioridades: hay más jugadores en móvil que en escritorio**, con un 44 % en iOS. Lo dicen tal cual, que eso es una buena entrada para decidir qué arreglar primero.
- 5:18 Y lo que lo hace útil: como el Bot de datos ya tenía el conector puesto, basta con decirle que acaban de activar la analítica y que la incorpore a sus informes de siempre.

## Skills verificadas (5:19)
- 5:19 Vuelven sobre la verificación, y aquí sale el concepto más afinado de los tres días: **enseñarle al Bot una sola vez cómo se prueba tu producto y guardarlo como skill**. A partir de ahí la reutilizas y la vas mejorando.
- 5:19 El argumento de Lauren: necesitas que el Bot ejecute el código de verdad y haga capturas, porque eso es lo que te da confianza en que ha entendido el problema.

## Cómo se construye un Bot juntando fuentes (6:41–6:42)
Una pregunta del público a un invitado de marketing saca el mejor procedimiento del tramo. Para montar su Bot de posicionamiento hizo cuatro cosas:

- Dictarle un par de minutos cómo quiere que piense sobre el tema.
- Hacer que se descargue el tono y la voz de la web que ya existe.
- **Ir al marketplace, elegir dos o tres Bots que le gustaban y apuntarle a esas direcciones para que copiara su contexto y su memoria** en su propia forma de trabajar.
- Conectarlo a un servicio de expertos por sectores, de modo que en vez de hacer investigación cualitativa a gran escala, contrasta lo que produce con especialistas de verdad.

## Estado del lanzamiento a media tarde (6:44–6:47)
- Unas **17.000 visitas** desde que activaron la analítica a mediodía.
- **4.500 partidas de práctica** y cerca de **2.000 inicios de sesión con X**.
- **El 8 % de quien juega una partida de práctica acaba registrándose.** Es el dato de embudo que llevaban buscando todo el día.
- Reparto mitad y mitad entre móvil y escritorio. El tráfico viene casi todo de X, y bromean con las ocho personas que llegaron desde Bing.

## Hablar con tus Bots (6:48–6:49)
- 6:48 Anuncian ese mismo día el modo de voz del producto y lo prueban en directo.
- 6:48 **La demostración es exactamente el uso que interesa al curso**: le pregunta en voz alta a su Bot ingeniero qué pull requests suyas están abiertas y cuáles atascadas. El Bot responde que una está lista con la integración en verde y otra es un borrador con conflictos.
- 6:49 Él le pide de palabra que fusione la primera y que ponga un agente a resolver los conflictos de la segunda. **Lo describe como llamar a un compañero por teléfono.**

## Cifras de trabajo del equipo (6:55, 7:17)
- 6:55 Hablan de **433 pull requests** en total, con 157 commits el que más.
- 7:17 Dos horas después dicen que la que acaban de abrir es la número 274. **Las dos cifras no cuadran entre sí**, así que conviene no dar ninguna por buena sin comprobarla antes de escribirla en una lección.

## Cómo se organizan, o más bien cómo no (6:54)
- 6:54 **La frase más sincera del tramo**: no gestionan el proyecto, sacan cosas a producción y ya.
- 6:54 Tenían un tablero, pero se les fue de las manos. Los Bots apuntan todo con muchísima diligencia y ha quedado una lista larguísima de notas que ya no sirve de mucho.
- 6:54 Cuando lo abren, está todo en la columna de hecho, y lo comentan riéndose.

## Otros detalles del tramo
- 6:51 Funciona por fin **compartir tus victorias**, con la coletilla de que también puedes compartir tus derrotas.
- 6:52 Para las imágenes que se ven al compartir un enlace usan una librería en Rust equivalente a la que genera imágenes a partir de componentes. Quieren una para la tabla de clasificación con los tres primeros.
- 6:53 Alguien se monta un Bot que inicia sesión y juega por él, y bromean con que habría que dejar que los Bots se enfrenten entre ellos.

## Para el curso
- El agente de voz da una lección corta y distinta: recoger información por teléfono sin escribir código, y la herramienta de escalar a una persona como pieza obligatoria.
- **Cuándo no usar voz** es tan valioso como el cómo, y viene de alguien que está vendiendo el producto, lo que le da peso.
- «Enseñarle una vez cómo se prueba tu producto y guardarlo como skill» es la formulación más clara de la verificación en todo el directo. Debería ser la frase que quede en esa lección.
- El procedimiento de construir un Bot copiando el contexto de otros del marketplace y contrastando con expertos es material directo para el módulo de compartir Bots.
- El 8 % de conversión y el reparto móvil frente a escritorio son las dos cifras de producto que mejor enseñan para qué sirve medir.
- Lo del tablero que se llenó de notas inútiles conviene contarlo: es el contrapeso a la idea de que los Bots lo organizan todo solos.
