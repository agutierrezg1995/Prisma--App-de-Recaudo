ROL DEL SISTEMA

Actúa simultáneamente como:

1. Senior Product Designer especializado en UX/UI.
2. Senior Frontend Engineer.
3. Art Director para productos fintech B2B/B2C.
4. Especialista en conversión de landing pages.
5. Especialista en responsive design, accesibilidad y motion design.

OBJETIVO

Diseñar y desarrollar una landing page premium para:

PRISMA$
CONTROL DE RECAUDO

La web debe comunicar:

- Control.
- Visibilidad.
- Tecnología.
- Seguridad.
- Recaudo.
- Información en tiempo real.
- Simplicidad operativa.
- Toma de decisiones.
- Profesionalismo.

El resultado NO debe parecer una plantilla genérica de SaaS.

Debe sentirse como una plataforma fintech propia, moderna, tecnológica y sólida.

IMPORTANTE:

Utilizar el logo oficial de Prisma$ proporcionado como asset de marca.
No redibujar, reinterpretar ni modificar el logo.

Utilizar las piezas gráficas proporcionadas como material visual de la web.
No generar personajes adicionales innecesarios.
No repetir el mismo personaje en todas las secciones.

==================================================
1. IDENTIDAD VISUAL
==================================================

La identidad visual debe conservar:

- Azul navy profundo.
- Azul eléctrico.
- Cian.
- Azul luminoso.
- Blanco.
- Pequeños acentos amarillo/dorado provenientes del logo.
- Gradientes luminosos.
- Prismas geométricos.
- Glassmorphism moderado.
- Líneas de conexión.
- Hologramas/UI flotantes.
- Brillos controlados.

La estética general:

"Fintech premium + tecnología + control financiero + dashboard moderno".

EVITAR:

- Estética demasiado corporativa tradicional.
- Fondos blancos completamente planos.
- Exceso de sombras.
- Exceso de neón.
- Interfaces demasiado gaming.
- Animaciones infantiles.
- Gradientes arcoíris.
- Stock photography genérica.
- Cards excesivamente redondeadas.
- Saturación visual constante.

==================================================
2. PALETA DE COLORES
==================================================

Usar la siguiente paleta como Design Tokens.

PRIMARY

--prisma-navy-950: #00123C
--prisma-navy-900: #00183C
--prisma-navy-800: #00265C
--prisma-blue-900: #00398F
--prisma-blue-800: #0050F0
--prisma-blue-700: #0068FF
--prisma-blue-600: #0088FF

CYAN / ACCENT

--prisma-cyan-500: #00BFFF
--prisma-cyan-400: #00D8FF
--prisma-cyan-300: #38D8F8
--prisma-aqua: #00E5FF

LIGHT

--prisma-white: #FFFFFF
--prisma-surface: #F4F9FF
--prisma-surface-2: #EAF5FF
--prisma-text-dark: #08213F
--prisma-text-muted: #5E7188

BRAND ACCENT

--prisma-yellow: #FFC21A

SEMANTIC

--success: #17C784
--warning: #FFB020
--danger: #FF4D67
--info: #00A8FF

GRADIENTS

Principal:

linear-gradient(
  135deg,
  #00123C 0%,
  #00398F 45%,
  #0068FF 100%
)

Hero:

linear-gradient(
  115deg,
  #00123C 0%,
  #00265C 45%,
  #0050F0 100%
)

Cyan glow:

linear-gradient(
  135deg,
  #00BFFF,
  #00E5FF
)

Dark cinematic:

linear-gradient(
  180deg,
  #00123C 0%,
  #000B26 100%
)

IMPORTANTE:

El azul oscuro debe dominar.
El cian debe utilizarse para enfatizar información, CTAs,
gráficos, indicadores y elementos interactivos.

No utilizar cian como color de fondo predominante.

==================================================
3. TIPOGRAFÍA
==================================================

Utilizar una tipografía sans-serif moderna.

Preferencia:

Inter
o
Manrope
o una alternativa equivalente.

Jerarquía:

H1:
clamp(42px, 5vw, 76px)

H2:
clamp(32px, 4vw, 54px)

H3:
24–32px

Body:
17–20px

Small:
13–15px

El H1 debe tener máximo 2–3 líneas.

Utilizar font-weight fuerte para titulares.

Combinar:

WHITE
+
PRISMA CYAN

para destacar palabras clave.

Ejemplo:

"Tu recaudo"
"EN TIEMPO REAL"

La segunda parte puede utilizar gradiente cyan.

==================================================
4. NAVBAR
==================================================

Navbar sticky.

Estado inicial:

background:
transparent / dark glass.

Al hacer scroll:

background:
rgba(0,18,60,.88)

backdrop-filter:
blur(18px)

border-bottom:
1px solid rgba(255,255,255,.10)

Estructura:

[LOGO PRISMA$]

Inicio
Solución
Beneficios
Cómo funciona
Seguridad
Preguntas

                     [Solicitar demo]

El botón principal debe ser visualmente destacado.

Desktop:

logo izquierda
navegación centro
CTA derecha

Mobile:

logo
hamburger menu
CTA compacto

La navbar debe permanecer visible durante navegación.

Agregar scroll-spy para indicar visualmente la sección activa.

==================================================
5. HERO
==================================================

El Hero debe ser la parte más espectacular de la landing.

No diseñarlo como un banner tradicional.

Debe sentirse como un "product experience".

LAYOUT DESKTOP:

Izquierda:

badge:

CONTROL DE RECAUDO

H1:

"Controla tu recaudo.
Toma decisiones en tiempo real."

Texto:

"Centraliza tus cobros, movimientos,
clientes y reportes en una sola plataforma."

CTA PRIMARY:

"Solicitar una demo"

CTA SECONDARY:

"Conocer la plataforma"

Derecha:

Composición visual con:

- Smartphone.
- Dashboard.
- Notificaciones.
- Cards financieras flotantes.
- Gráficos.
- Prismas geométricos.
- líneas luminosas.

Utilizar una de las imágenes entregadas como visual principal.

NO colocar demasiada información encima del visual.

==================================================
6. HERO ANIMATIONS
==================================================

Al cargar:

Logo:
fade + translateY.

Headline:
stagger animation.

Subheadline:
delay 100ms.

CTA:
delay 150ms.

Producto:
fade + scale .96 -> 1.

Elementos UI:

float animation muy leve.

Los prismas deben moverse lentamente mediante parallax.

Las partículas/background lines deben tener movimiento mínimo.

IMPORTANTE:

Nada debe sentirse como una presentación PowerPoint.

Las animaciones deben sentirse sofisticadas.

Usar:

ease-out
cubic-bezier
spring suave.

Duración aproximada:

300–800ms.

==================================================
7. HERO SLIDER
==================================================

Después del hero principal incorporar un slider premium.

4 slides.

SLIDE 01

Título:

"Tu aliado en la seguridad de tu recaudo"

Mensaje:

"Controla cada movimiento y obtén una visión más clara de tu operación."

Visual:

pieza Prisma$ de seguridad.

SLIDE 02

Título:

"Tu recaudo en tiempo real"

Mensaje:

"Consulta movimientos, pagos y estados desde cualquier lugar."

Visual:

pieza de monitoreo.

SLIDE 03

Título:

"Datos que generan decisiones"

Mensaje:

"Transforma tus movimientos en información útil para tu operación."

Visual:

dashboard / analytics.

SLIDE 04

Título:

"Toda tu operación en un solo lugar"

Mensaje:

"Registra, consulta y controla tus movimientos de forma sencilla."

Visual:

Ingresos y Egresos / Cuadre general.

CONTROLES:

- arrows.
- dots.
- swipe mobile.
- autoplay.
- pause on hover.
- pause on focus.
- keyboard navigation.

Autoplay:

6 segundos.

No autoplay si:

prefers-reduced-motion.

==================================================
8. SECTION — EL PROBLEMA
==================================================

Crear una sección que explique el problema antes de vender la solución.

Headline:

"Cuando el recaudo crece,
también crece la complejidad."

Tres problemas:

01
Información dispersa.

02
Poca visibilidad sobre los movimientos.

03
Demasiado tiempo dedicado al seguimiento manual.

Visual:

cards minimalistas.

Cada card con icono lineal.

Hover:

icono -> cyan
card -> translateY(-6px)

No utilizar estadísticas inventadas.

==================================================
9. SECTION — SOLUCIÓN
==================================================

Headline:

"Prisma$ pone el control
en tus manos."

Texto:

"Una plataforma diseñada para ayudarte a registrar,
monitorear y analizar tu operación de recaudo."

Layout:

texto izquierda.

Dashboard / smartphone derecha.

Utilizar la pieza gráfica existente.

Agregar badges visuales:

Tiempo real
Reportes
Clientes
Movimientos
Alertas

==================================================
10. SECTION — CÓMO FUNCIONA
==================================================

Crear una sección visual de proceso.

Título:

"Registrar tus cobros es muy fácil."

Cinco pasos:

01
Visita a tus clientes.

02
Registra sus abonos.

03
Genera recibos de pago.

04
Visualiza el movimiento.

05
Genera reportes.

Diseño:

timeline horizontal en desktop.

timeline vertical en mobile.

Cada etapa debe tener:

número
icono
título
descripción breve

Agregar línea de conexión animada.

Mientras el usuario hace scroll,
la línea debe progresivamente iluminarse.

==================================================
11. SECTION — MONITOREO EN TIEMPO REAL
==================================================

Esta debe ser una sección protagonista.

Título:

"Monitorea cada movimiento
en tiempo real."

Subtexto:

"Consulta movimientos, estados y actualizaciones
sin perder de vista tu operación."

Visual principal:

smartphone/dashboard.

Alrededor:

Pago recibido
Nuevo recaudo
Cliente pendiente
Movimiento registrado
Alerta

Las cards pueden aparecer progresivamente.

Agregar mini gráfico de crecimiento.

Interacción:

hover sobre cada dato.

==================================================
12. SECTION — INGRESOS Y EGRESOS
==================================================

Utilizar la pieza visual de:

"Ingresos y Egresos"
+
"Cuadre general"

Headline:

"Una visión más clara
de tus movimientos."

Features:

Registro de ingresos.
Registro de egresos.
Cuadre.
Saldo.
Movimientos.

La interfaz debe ocupar buena parte del viewport.

Añadir una pequeña etiqueta:

"CONTROL FINANCIERO"

==================================================
13. SECTION — DASHBOARD / REPORTES
==================================================

Headline:

"Convierte tus datos en información útil."

Presentar dashboard.

Mostrar:

Total recaudado
Transacciones
Saldo
Evolución
Canales
Reportes

NO inventar cifras reales de empresa.

Las cifras que aparezcan en mockups deben presentarse como datos demostrativos.

Agregar tabs:

Resumen
Movimientos
Clientes
Reportes

Los tabs deben ser interactivos visualmente.

==================================================
14. SECTION — BENEFICIOS
==================================================

Grid 3 x 2 desktop.

Cards:

Monitoreo en tiempo real
Registro de cobros
Reportes
Control de movimientos
Información centralizada
Acceso desde cualquier dispositivo

Cada card:

icono
título
descripción
micro-interacción

No usar sombras pesadas.

Preferir:

border
glass effect
subtle gradient
hover glow.

==================================================
15. SECTION — SEGURIDAD
==================================================

Crear una sección dark.

Background:

#00123C

Visual:

escudo futurista / prisma / interfaz.

Título:

"Control y confianza
en cada movimiento."

Copys pequeños:

Información protegida.
Visualización clara.
Seguimiento de movimientos.

Evitar afirmaciones técnicas que no hayan sido confirmadas.

No afirmar:

"100% seguro"
"impenetrable"
"seguridad bancaria"

si no existe información que lo respalde.

==================================================
16. SECTION — PRODUCT EXPERIENCE
==================================================

Crear una sección tipo showcase.

Título:

"Todo lo que necesitas,
desde una sola plataforma."

Mostrar:

smartphone
desktop dashboard
reportes
clientes
movimientos

Layout:

horizontal scrolling carousel.

Desktop:

3 elementos visibles.

Tablet:

2.

Mobile:

1.

Cards parcialmente visibles para indicar que existe más contenido.

==================================================
17. CTA PRINCIPAL
==================================================

Crear una sección grande de conversión.

Background:

gradient navy → blue.

Prismas flotantes.

Headline:

"Lleva tu recaudo
al siguiente nivel."

Texto:

"Conoce Prisma$ y descubre una forma
más clara de controlar tu operación."

CTA:

"Solicitar una demo"

Secondary:

"Conocer más"

El CTA debe tener glow muy sutil.

==================================================
18. FOOTER
==================================================

Footer navy oscuro.

Logo Prisma$.

Columnas:

Producto
Soluciones
Recursos
Empresa

Links:

Inicio
Funciones
Cómo funciona
Seguridad
Contacto
Preguntas frecuentes

Bottom:

Copyright
Política de privacidad
Términos
Contacto

Agregar redes sociales solamente si existen perfiles oficiales.

NO inventar URLs.

==================================================
19. SISTEMA DE ANIMACIONES
==================================================

Usar motion design de forma estratégica.

SCROLL REVEALS:

fade
translateY
scale

Parallax:

prismas
background
glows

Cards:

translateY(-5px)

CTA:

subtle glow

Charts:

animate stroke.

Counters:

solamente si los números son demostrativos y queda claro.

Slider:

crossfade + directional movement.

BACKGROUND:

partículas extremadamente sutiles.

Evitar:

scroll hijacking.
animations demasiado rápidas.
rotaciones excesivas.
rebotes.
efectos tipo casino.

==================================================
20. RESPONSIVE
==================================================

BREAKPOINTS:

Mobile:
320–767

Tablet:
768–1199

Desktop:
1200+

Large Desktop:
1440+

MOBILE FIRST.

En mobile:

Navbar → hamburger.

Hero:

1 columna.

Texto primero.
Visual después.

No mostrar más de 3 cards simultáneamente.

Slider:

swipe.

Timeline:

vertical.

Dashboard:

horizontal scroll local.

CTAs:

full width.

Tipografía mediante clamp().

==================================================
21. UX
==================================================

La navegación debe responder a una lógica narrativa:

01
Qué es Prisma$

02
Qué problema resuelve

03
Cómo funciona

04
Qué puedo hacer

05
Cómo se ve

06
Por qué debería conocerlo

07
CTA

El visitante no debe sentirse obligado a leer toda la página.

Cada sección debe responder una pregunta.

==================================================
22. MICROINTERACCIONES
==================================================

Botones:

hover → cyan gradient.

active → scale(.98).

focus → visible outline.

Cards:

border color transition.

Icons:

subtle cyan glow.

Navbar:

scroll state.

Slider:

progress indicator.

Links:

animated underline.

Inputs:

floating label o estado visual claro.

==================================================
23. ACCESSIBILITY
==================================================

Objetivo:

WCAG 2.2 AA.

Obligatorio:

alt text.

keyboard navigation.

focus visible.

semantic HTML.

aria labels cuando corresponda.

contraste adecuado.

No depender únicamente del color.

Soportar:

prefers-reduced-motion.

==================================================
24. PERFORMANCE
==================================================

Optimizar:

WebP / AVIF cuando sea compatible.

lazy loading.

responsive images.

preload solamente del hero.

evitar videos pesados.

no utilizar demasiados efectos blur simultáneamente.

No generar CLS.

La primera pantalla debe aparecer rápidamente.

==================================================
25. SEO
==================================================

TITLE:

Prisma$ | Control de Recaudo

META DESCRIPTION:

"Prisma$ Control de Recaudo: registra, monitorea y consulta
tu operación de recaudo desde una sola plataforma."

Implementar:

Open Graph
Twitter Cards
canonical
favicon
semantic headings
schema apropiado

H1 único.

Jerarquía correcta:

H1
H2
H3

==================================================
26. COMPONENTES
==================================================

Crear componentes reutilizables:

Navbar
Hero
HeroSlider
SectionHeader
FeatureCard
ProcessStep
DashboardPreview
PhoneMockup
StatsCard
NotificationCard
BenefitsGrid
SecuritySection
ProductShowcase
CTASection
Footer

Crear Design System:

Button
Badge
Icon
Card
Section
Container
Typography

==================================================
27. BOTONES
==================================================

PRIMARY:

"Solicitar una demo"

SECONDARY:

"Conocer la plataforma"

TERTIARY:

"Ver cómo funciona"

Los botones deben ser consistentes en toda la experiencia.

Primary:

background:
cyan/blue gradient.

Text:
navy.

Secondary:

transparent.

border:
cyan.

==================================================
28. ICONOGRAFÍA
==================================================

Usar iconos lineales.

Preferencia:

Lucide
o sistema equivalente.

Iconos relevantes:

Shield
Bell
Clock
Chart
Users
Receipt
Wallet
Smartphone
BarChart
FileText
ArrowUpRight
CheckCircle

No mezclar estilos de iconos.

==================================================
29. IMÁGENES Y ASSETS
==================================================

Priorizar las piezas gráficas ya generadas.

Carpeta de assets:
"Imagenes para landing/"

INVENTARIO REAL DE ASSETS Y DESTINO

Logo de marca
- LOGO.png
  → Navbar (§4), Footer (§18), Open Graph (§25).
  → Asset de marca oficial. No redibujar, recolorear ni deformar (§30).

Iconografía de aplicación
- ICONO VENTANA.png
  → Favicon y app icon (§25).

Hero
- PRISMAS PUBLICIDAD 1.png
  → Composición visual del Hero (§5) como visual principal
    y/o recurso de prismas.
  → También puede reaparecer en el CTA principal (§17).

Hero Slider (§7)
- PROMOCION SLIDER.png
  → Visual de apoyo del slider (carrusel premium).
- TIEMPO REAL.png
  → Slide 02 "Tu recaudo en tiempo real".
  → Reutilizable en la sección Monitoreo en tiempo real (§11).
- TODA LA OPERACION EN UN SOLO LUGAR.png
  → Slide 04 "Toda tu operación en un solo lugar".
  → Reutilizable en la sección Product Experience (§16).

Narrativa de problema / solución (§8, §9)
- CASO DE USO.jpg
  → Apoyo visual de la sección El Problema / Solución.
- CASO DE USO  2.jpg
  → Apoyo visual de la sección Solución.

Cómo funciona (§10)
- REGISTRO COBROS ES MUY FACIL.png
  → Visual de la sección "Registrar tus cobros es muy fácil".

Datos, dashboard y control financiero (§12, §13)
- dashboard.JPG
  → DashboardPreview en las secciones Solución (§9),
    Monitoreo en tiempo real (§11) y Dashboard/Reportes (§13).
  → Cifras mostradas = datos demostrativos (§13, §35).

Conversión y producto (§16, §17)
- Compra Ahora.png
  → CTA principal (§17) y/o Hero, según encaje de composición.
- PLAYSTORE.png
  → CTA / descarga de la app en la experiencia mobile (§36).

Assets sin sección equivalente en este spec
- PRECIOS.png
  → No existe una sección de precios en el spec actual.
  → Reservar para una sección futura de planes/precios.
  → NO crear una sección de precios sin autorización.

REGLAS DE USO

Las imágenes deben integrarse en el diseño,
NO simplemente pegarse como banners rectangulares.

Utilizar máscaras, cards, recortes, overlays y composición
para que pertenezcan al sistema visual.

No repetir exactamente la misma pieza en todas las secciones.

NOTA DE IMPLEMENTACIÓN

El mapeo anterior se basa en el nombre de archivo de cada asset.
Debe validarse visualmente contra el contenido real de cada imagen
antes de cerrar cada sección.

OPTIMIZACIÓN Y SERVICIO

La web sirve derivados WebP desde la carpeta "assets/" (generados por
"scripts/optimize_images.py"): mismo contenido, peso reducido
(~30–160 KB por pieza) y nombres limpios. Los originales permanecen
en "Imagenes para landing/" como fuente de marca.

Los contenedores respetan el aspect-ratio nativo de cada imagen
(no recortar piezas con texto); en slider y showcase se usa
object-fit: contain.

==================================================
30. REGLA IMPORTANTE DE BRANDING
==================================================

El logo Prisma$ debe conservar:

- proporciones.
- colores.
- tipografía.
- composición.

No recolorear.
No deformar.
No agregar efectos que alteren su identidad.

Puede utilizarse sobre:

navy
blue
white/light backgrounds

cuando exista suficiente contraste.

==================================================
31. DIRECCIÓN ARTÍSTICA
==================================================

La página debe transmitir:

"Una plataforma fintech moderna que pone el control
del recaudo literalmente en las manos del usuario."

La experiencia visual debe combinar:

FINTECH
+
DATA
+
MOBILE
+
CONTROL
+
SEGURIDAD
+
TECNOLOGÍA

El recurso visual diferencial de Prisma$ serán los prismas geométricos.

Utilizarlos como:

- elementos flotantes.
- separadores visuales.
- decoración de hero.
- background elements.
- transiciones.
- elementos 3D.

No saturar cada sección.

==================================================
32. REGLAS DE COMPOSICIÓN
==================================================

Usar mucho espacio negativo.

Container máximo:

1200–1280px.

Grid basado en:

12 columnas desktop.

8 tablet.

4 mobile.

Border radius:

12–20px.

Hero/product cards:

20–28px.

Evitar interfaces con border-radius excesivo.

==================================================
33. EXPERIENCIA VISUAL
==================================================

La página debe sentirse progresiva.

Inicio:
impacto visual.

Problema:
claridad.

Solución:
producto.

Cómo funciona:
simplicidad.

Features:
profundidad.

Dashboard:
credibilidad visual.

Seguridad:
confianza.

CTA:
conversión.

==================================================
34. COPYS
==================================================

Tono:

Profesional.
Claro.
Directo.
Moderno.
Comercial pero no agresivo.

Evitar lenguaje demasiado técnico.

Evitar párrafos largos.

Ejemplos de headlines:

"Controla tu recaudo."
"Tu recaudo en tiempo real."
"Todo bajo control."
"Información para decidir mejor."
"Toda tu operación en un solo lugar."
"Registra. Monitorea. Decide."
"Control que cabe en tu bolsillo."

==================================================
35. NO HACER
==================================================

NO:

- Utilizar templates genéricos.
- Copiar estilos de bancos tradicionales.
- Utilizar fondos blancos como diseño principal.
- Usar demasiadas cards.
- Repetir el mismo personaje.
- Repetir exactamente la misma composición.
- Crear datos falsos presentados como reales.
- Crear testimonios ficticios.
- Inventar clientes.
- Inventar partners.
- Inventar certificaciones.
- Inventar integraciones.
- Inventar métricas empresariales.
- Usar animaciones excesivas.
- Usar stock photography evidente.
- Convertir toda la página en un slider.
- Saturar con glow.

==================================================
36. EXPERIENCIA MOBILE
==================================================

Mobile debe sentirse como una aplicación fintech.

Navbar compacto.

Hero:

headline grande pero legible.

CTA inmediatamente visible.

Visual del producto.

Beneficios en cards.

Slider swipe.

Proceso vertical.

Dashboard horizontal.

CTA final.

Botón sticky opcional:

"Solicitar demo"

pero solo después de que el usuario avance
suficientemente en la página.

==================================================
37. CRITERIOS DE ACEPTACIÓN
==================================================

La implementación final debe cumplir:

✓ Identidad Prisma$ reconocible inmediatamente.
✓ Logo correctamente utilizado.
✓ Paleta consistente.
✓ Hero visualmente dominante.
✓ Slider funcional.
✓ Responsive completo.
✓ Animaciones suaves.
✓ Navigation sticky.
✓ CTAs claros.
✓ Accesibilidad.
✓ SEO básico.
✓ Performance.
✓ No contenido ficticio presentado como real.
✓ No repetición innecesaria de personajes.
✓ Todas las secciones deben sentirse parte del mismo producto.

La primera impresión debe comunicar en menos de 5 segundos:

"Esto es Prisma$ y me permite controlar mi recaudo."

==================================================
38. RESULTADO ESPERADO
==================================================

El resultado debe parecer una plataforma fintech real
de alto nivel, no una simple landing promocional.

Debe combinar:

Apple-level simplicity
+
Fintech visual language
+
SaaS conversion architecture
+
Prisma$ branding

con un diseño:

premium
tecnológico
dinámico
claro
responsive
orientado a conversión.

Implementar la experiencia completa,
no solamente una página visual estática.

==================================================
39. ADICIONAL 2026-09-19 — RETOS DE CALIDAD UX
    (recomendaciones del titular del servicio)
==================================================

Orientación: 9 recomendaciones nacidas de la primera revisión del titular
sobre la v1 publicada. Se suman al alcance y SIEMPRE respetan las reglas ya
fijadas: dirección de arte (§1–§2), assets compuestos no pegados (§29), cero
datos ficticios presentados como reales (§35), motion discreto y accesible
(§19), CTA consistentes (§27) y mecánica demo sin inventar contactos (§36).

39.1 FORMULARIO DE SOLICITUD DE DEMO (sustituye la ancla vacía)
- Contexto: hoy todos los CTA "Solicitar demo" anclan a `#demo`, sección sin
  mecanismo de captura (decisión 2026-09-18).
- Evidencia: 4 de 7 CTAs apuntan a `#demo`; el clic no da respuesta de
  conversión → percepción de "botón muerto" (ver 39.3).
- Decisión: `#demo` pasa a ser una sección con formulario real ("Solicitar una
  demo"). En GitHub Pages (estático) el envío compone un mensaje de WhatsApp
  (wa.me con texto pre-llenado) y abre el canal del titular. El número es dato
  del negocio `[REEMPLAZAR]`; NO se inventa.
- Aceptación: al enviar se abre WhatsApp con mensaje estructurado (nombre,
  empresa, tipo de negocio, dudas); campos con estado visual claro (§23); sin
  backend. Si el negocio entrega endpoint real, se sustituye el envío.

39.2 HERO SLIDER MÁS PROFESIONAL
- Contexto: el titular percibe margen de mejora en el slider.
- Decisión: slider v2 = crossfade direccional + escala sutil del arte
  (1 → 1.03), contador visible (01/04), progreso con rebote suave, pausa en
  hover/focus/touch (ya existe), hit-areas ≥44 px (ya), foco visible, y
  reinicio de temporizador tras interacción manual. Copys exactos del §7.
- Aceptación: sin jank en mobile; `prefers-reduced-motion` → sin autoplay ni
  escala (§23); prueba §12 desktop/mobile.
- Guarda: prohibido slide-morphing, parallax excesivo o "efecto PowerPoint" (§19).

39.3 BOTONES FUNCIONALES DE EXTREMO A EXTREMO
- Contexto: se perciben botones no funcionales porque su destino no cierra la
  promesa de la etiqueta (el primario → `#demo` vacío).
- Decisión: auditoría CTA por CTA (§27): cada botón debe resolver su promesa en
  el destino. Primario → formulario (39.1). Secundarios → anclas con sección
  que responde (ya correctas: "Conocer la plataforma" → #solucion,
  "Ver cómo funciona" → #como-funciona). Cero `<a href="#">`.
- Aceptación: el recorrido de los 7 botones da respuesta visible y coherente;
  estados hover/focus/active consistentes. Se elimina la falsa sensación de
  no-funcionalidad.

39.4 MOTION PROFESIONAL QUE ENGANCHE (con guardas §19)
- Contexto: se pide más impacto emocional en la interacción.
- Decisión: pasada de pulido de motion: coreografía de entrada por sección,
  stagger de reveals, contadores con easing, shimmer sutil en CTA primario,
  parallax SUTIL de prismas/glows (ya), trazado de charts (ya) y elevación en
  hover de cards/beneficios.
- Aceptación: todo ≤800 ms, solo transform/opacity (GPU), y
  `prefers-reduced-motion` → versión estática (ya).
- Guarda: prohibido scroll-hijack, rotaciones, rebotes, destellos repetidos o
  efectos casino (§19). "Envolver" nunca = ruido.

39.5 AMPLIACIÓN DE PREGUNTAS FRECUENTES
- Contexto: la FAQ actual tiene 5 preguntas (las del JSON-LD §25).
- Decisión: ampliar a ~8–10 preguntas derivadas ÚNICAMENTE de la información
  existente en el spec/copys (qué es, cómo registrar, quién lo usa, en qué
  dispositivo, reportes, seguridad del acceso, cómo pedir la demo). Sin inventar
  afirmaciones; SIN precios (no hay sección de precios).
- Aceptación: n preguntas nuevas; JSON-LD `FAQPage` sincronizado al mismo número;
  cada respuesta ≤60 palabras, tono §34.

39.6 VENTANA DE DETALLE POR CARD ("por qué resuelve y para quién")
- Contexto: las cards muestran título + breve descripción; se quiere profundizar
  sin salir de la página.
- Decisión: componente `CardDetail` accesible: en Prisma, "Por qué y para quién"
  abre un panel/`<details>` con 2 bloques (problema que resuelve · público
  objetivo). Aplica a Problema (§8), Solución badges y Beneficios (§14).
  Textos derivados del spec (sin datos ficticios).
- Aceptación: apertura/cierre con click + teclado, Escape cierra, foco
  gestionado, no bloquea scroll, glass del sistema (§26), `aria-expanded`.

39.7 REVISIÓN DE REDUNDANCIA VISUAL DE PANELES
- Contexto: se perciben "2 paneles de monitoreo". Evidencia: `dashboard.webp` y
  `monitor.webp` se repiten (19 y 13 refs) entre slider, solución, monitoreo,
  dashboard y showcase.
- Decisión: mapa de composición por sección para dar tratamiento visual único a
  cada panel: máscaras/recortes distintos (§29), overlays de badges, escalas y
  cards superpuestas; en §12 confirmar que `finance.webp` lee como cuadre (DUDE-04).
- Aceptación: en el recorrido desktop/mobile no se ven dos bloques "iguales";
  validación visual §12.
- Guarda: no reutilizar el MISMO panel a la misma escala en secciones contiguas
  sin diferenciación visual.

39.8 FOOTER CON CONTACTOS + WHATSAPP + REDES SOCIALES
- Contexto: el footer solo enlaza páginas internas (§18). No hay contactos ni
  redes porque §35 prohíbe URLs inventadas.
- Decisión: footer v2 con bloque de contacto y botón flotante de WhatsApp (fab)
  con número `[REEMPLAZAR]` y handles (IG/Facebook/LinkedIn) también
  `[REEMPLAZAR]`. Se entrega HOY la estructura e iconos (set SVG §26); los datos
  reales los aporta el negocio antes de publicar (misma política que DUDE-01).
  WhatsApp fab con `aria-label` y mensaje breve prefabricado.
- Aceptación: cero URLs inventadas; fab no tapa contenido en scroll; visible en
  mobile; foco visible.

39.9 NAVEGACIÓN REAL / DESTINOS (reemplaza cualquier "paginación" de MVP)
- Contexto: la landing no tiene paginación; sus destinos internos ya son páginas
  reales (legales + 404). El CTA primario debe tener destino real, no solo ancla.
- Decisión: crear `pages/solicitar-demo.html` (página dedicada con el formulario
  39.1, marca, nav y footer) y apuntar los CTA primarios a esa página (§27). Los
  links de nav se mantienen como anclas (UX one-page); se documenta que NO hay
  paginación por diseño (landing + páginas de soporte).
- Aceptación: CTA primario lleva a URL real con form; skip-link, orden de foco,
  canonical y breadcrumb propios; validación §12.

Orden de ejecución propuesto (ver EJECUCION §15): Fase A conversión (39.1→39.3→39.9),
Fase B contenido (39.5→39.6), Fase C percepción (39.7→39.2→39.4), Fase D contacto
(39.8, requiere datos reales del negocio).

---

## 40. Experticia UX/UI del titular — densidad vertical, banners y motion (2026-09-19)

Retos de calidad adicionales solicitados por el titular tras la Fase D. Se ejecutan
como **E-01…E-12** y se registran en `DEUDA`/`EJECUCION` (pasada 21).

### E-01 DENSIDAD VERTICAL (gaps entre secciones)
- Contexto: el usuario percibe "huecos notables" entre el navbar y el hero, y
  entre secciones (se sentían vacíos y distanciados).
- Decisión (referencia del sistema de diseño): compactar la escala vertical sin
  sacrificar respiración:
  · Secciones: `padding-block` de `clamp(72px,10vw,140px)` → `clamp(48px,6.5vw,88px)`.
  · Sección consecutiva: top reducido adicional `clamp(28px,4vw,52px)` (regla
    `.section + .section`) para no duplicar el doble padding entre bloques.
  · Encabezado de sección: `margin-bottom` de `clamp(40px,6vw,72px)` → `clamp(24px,3.5vw,40px)`.
  · Hero: `padding-top` fijado a `calc(var(--announce-offset,0) + 84px)` (antes
    `clamp(130px,16vw,190px)`), alineando el arranque del contenido justo bajo el
    navbar, sin franja navy vacía perceptible.
- Aceptación: en desktop y mobile el recorrido se siente continuo; los "huecos"
  no superan ≈90 px entre bloques; validación visual §12.
- Guarda: no llegar a saturación (§32 espacio negativo se mantiene >24 px).

### E-02 ANNOUNCEMENT BAR / BANNER SUPERIOR ("Novedad Prisma$")
- Contexto: el titular pide más banners publicitarios.
- Decisión: barra fija superior (`data-topbar`) con copys reales (§35), CTA a la
  página de demo y botón de cierre persistente (`localStorage` no usado; clase
  `announce-closed` en `<html>` que colapsa `--announce-offset` a 0 y desliza la
  barra). Navbar y menú móvil dependen de `--announce-offset` (44px / 54px).
- Aceptación: no tapa el navbar (lo desplaza), cierre accesible (aria-label),
  no se muestra en páginas sin `.announce` (legales/404).

### E-03 SCROLL PROGRESS
- Barra de progreso de 3px fija bajo el navbar (`data-scroll-progress`), gradiente
  cyan, `transform: scaleX` gobernada por `--progress` (aria-hidden). Aceptación:
  sincronizada con el scroll, sin reflow (transform).

### E-04 NAV INDICATOR (píldora activa en navbar)
- Píldora glass que se desliza (transform+width) sobre el enlace activo del
  scroll-spy. Solo ≥1024px. Aceptación: coincide con `is-active`; 0 impacto
  accesible (aria-hidden); no rota en foco.

### E-05 MARQUEE / CINTA DE CAPACIDADES
- Banda publicitaria entre "Cómo funciona" y "Monitoreo": características
  reales del producto separadas por glifos de prisma, loop infinito CSS
  (`translateX(-50%)`, 2 grupos, segundo aria-hidden), pausa en hover/focus,
  desactivada bajo reduced-motion (flex-wrap estático).
- Guarda §19: no es casino — velocidad lenta (32 s), pausa por interacción.

### E-06 PROMO BANNER (campaña central)
- Módulo `promo` antes del CTA principal: marco con borde cónico giratorio
  (regla `@property --angle`, degrada sin ella), flag "Novedad" con punto
  pulsante, título + CTA magnéticos + micro-puntos con iconos. Contenido 100%
  del spec (§35, sin métricas inventadas).

### E-07 TOAST DE CONFIRMACIÓN (form demo)
- Notificación flotante (`role=status`, aria-live) al enviar el formulario:
  "Solicitud lista. Revisa WhatsApp…". Se auto-oculta a los 6 s. Complementa
  `data-demo-status` (que queda como sr-text).

### E-08 BACK TO TOP CON PROGRESO
- Botón circular flotante que aparece tras 1400 px, desplaza suave al inicio,
  `aria-label="Volver arriba"`. No compite con wa-fab ni sticky-cta (offsets
  por breakpoint).

### E-09 MOTION MAGNÉTICO EN CTA
- `data-magnetic`: los CTAs principales atraen sutilmente el puntero
  (translate 0.16/0.28, máximo ~8px). Solo `(hover:hover) and (pointer:fine)`
  y `no-preference`. Aceptación: sin jitter, transición de retorno 0.25s.

### E-10 TILT 3D EN SHOWCASE
- `data-tilt` en las 5 cards del carousel de producto: perspectiva 820px,
  rotación ±5° según cursor, translateY(-4px) en hover; reset en pointerleave.
  Solo fine pointer alineado con reduced-motion.

### E-11 FAQ SMOOTH
- Apertura/cierre animada del acordeón (`max-height` 0→340px + opacidad),
  0.4–0.5s con `--ease`. Aceptación: sin salto de layout, teclado intacto.

### E-12 GUARDAS TRANSVERSALES
- Todas las animaciones nuevas respetan `prefers-reduced-motion: reduce`
  (desactivadas o instantáneas), `transform`/`opacity`/`--angle` (me Jank),
  ≤800 ms salvo ambientes (marquee 32s / spin 7s / pulse 2.2s, pausables).
- Sin URLs, métricas ni testimonios inventados (§35). Nuevo markup sin añadir
  iconos nuevos (los 5 puntos reutilizan set existente).

---

## 41. Experticia UX/UI del titular — capa de venta y percepción premium (F-01…F-10)

Continuación del §40. Nueva tanda orientada a **vender la landing**: percepción
de sofisticación, refuerzo del mensaje de valor y micro-interacciones que
“resuelven” la navegación. Se ejecutan como **F-01…F-10** y se registran en
`DEUDA` (DUDE-21) y `EJECUCION` (pasada 22).

### F-01 HERO SPOTLIGHT (luz que sigue el puntero)
- Contexto: el hero es la vitrina; un acento de luz en vivo eleva la percepción.
- Decisión: radial-gradient en `::before` del hero gobernado por CSS vars
  `--mx/--my` que actualiza el puntero (fine pointer, no-preference). Solo en
  hover real; `pointerleave` reancla al 70%/16%.
- Aceptación: sin jitter (no reflow), sin captura de eventos (pointer-events:none),
  debajo del contenido (z-index 0/1), iconos no afectados.

### F-02 HERO WORD-ROTATE (frases de valor rotando)
- Decisión: la 2ª línea del H1 rota 3 mensajes de valor reales del spec
  (`.rotate__item`, grid 1/1, swap `is-on` cada 4 s con fade+slide+blur).
  `aria-hidden` en el rotador + `.sr-only` con el texto completo estático
  (sin ruido de SR); pausado con tab oculta y desactivado en reduced-motion
  (queda la primera frase). H1 único intacto (§SEO).
- **Refinamiento (pasada 23):** el apilado grid de frases producía doble-texto /
  cortes de línea al transicionar (filtro blur + gradiente heredado). Se
  sustituyó por **swap de frase única** (`[data-rotate]`, fade de opacidad
  0.35s, `textContent` rotado cada 4.2s): un solo text node → 0 ghosting,
  altura estable por `min-height`, texto siempre legible.
- Aceptación: texto siempre legible durante el swap; sin salto de layout
  (reserva `min-height:1.25em`).

### F-03 CHECK-LIST CON DIBUJO DE ÍCONO (evidence de valor)
- Decisión: listas `.check-list` (promo points + nueva `cta__checks` en el CTA)
  se revelan con stagger (`data-delay` 0/90/180) y el ícono se “dibuja”
  (stroke-dashoffset → 0). Contenido 100% del spec: cuadre, movimientos e
  ingresos, reportes.
- Aceptación: animación una sola vez; bajo reduced-motion el stagger CSS queda
  visible sin dibujo (opacity inmediata §reduce).

### F-04 PRELOADER DE MARCA
- Decisión: overlay fijo (z 300) con logo + anillo cónico girando ~0.8 s;
  se oculta en `load`+300 ms (tope 1400 ms) y se elimina del DOM (no bloquea
  interacción posterior). `display:none` bajo reduced-motion.
- Aceptación: <1.5 s máximo, no afecta LCP (opacity/visibility, sin repaint
  costoso), no interfiere skip-link tras el hide.

### F-05 PRISMA-PARTÍCULAS ASCENDENTES EN CTA
- Decisión: dos puntos-luz (cyan/ámbar) suben en loop 9–11 s sobre el decor del
  CTA (`::before/::after`), ambiente §19 sutil.
- Aceptación: `pointer-events:none`, opacity 0 base (invisible en reduce), sin
  reflow (transform/opacity).

### F-06 HERO DEVICE CON RESPUESTA AL SCROLL
- Decisión: al bajar 0→700px el `hero__media` se eleva (−26px) y escala 1→1.05
  (rAF+`--hero-y/--hero-s`), efecto “cine” de acercamiento tipo showcase premium.
- Aceptación: solo scroll pasivo, solo transform (no reflow), tope claro, off
  bajo reduce; no compite con el reveal del hero (aplica al child `__media`).

### F-07 HEADING SHIMMER (una pasada al revelar cada sección)
- Decisión: al entrar en viewport, cada `h2` de sección recibe un barrido de
  luz cyan (traslación `-140%→+320%`, 0.95s) — coherencia con §23.
- Aceptación: una sola pasada por sección, `overflow:hidden` en el título evita
  desbordes, off bajo reduce.

### F-08 FLECHA DESLIZABLE EN CTAs
- Decisión: `::after →` en `.btn` que se desliza 5px en hover. Consistencia de
  “acción” en toda la interfaz (primary/secondary/sticky/wa/footer).
- Aceptación: sin cambio estructural (pseudo), no rompe `two-lines` de botones
  móviles (width 100%), off bajo reduce.

### F-09 SCROLL CUE EN HERO
- Decisión: indicador de “hay más abajo”: cursor-mouse flotante al pie del hero
  (`hero__cue`), animación de gota 1.8s, se esconde al hacer scroll (class
  `is-hidden`) y en pantallas <560px.
- Aceptación: `aria-hidden`, no compite con CTAs (bottom:22px), of en reduce.

### F-10 PRISMA EN ÓRBITA (promo) + GLOW BORDER EN CARDS
- Decisión: (a) un prisma extra gira/orbita 16s en el baner promo (branding de
  identidad §1-5); (b) las cards (beneficios/problema) reciben un borde
  degradado que aparece sutil en hover (máscara border-box, scale 0.985→1)
  reforzando el estado activo ya existente (translateY+borde cyan).
- Aceptación: hover claro e intencional, sin cambio de layout, off bajo reduce.

### GUARDAS TRANSVERSALES (§41)
- Todas las animaciones son `transform`/`opacity`/`filter` o `stroke-dashoffset`;
  ninguna > 1 s (salvo ambientes pausables 9–16 s como F-05/F-10). `prefers-
  reduced-motion: reduce` las desactiva o deja el estado final. Sin datos,
  métricas ni testimonios ficticios (§35). Decoraciones siempre `aria-hidden`.

### F-11 CARDS DE BENEFICIOS CON MINIATURA (más intuitivo, pasada 23)
- Contexto: el titular pide que las cards de Beneficios sean más intuitivas
  ("inserta imágenes").
- Decisión: cada `card--benefit` gana una miniatura superior 16:9
  (`.card__thumb`, `object-fit: cover`, margen −31px para sangrar al borde de
  la card) con un asset real de la sección correspondiente, overlay oscuro
  inferior y zoom sutil 1.05 en hover. Mapeo §29:
  Monitoreo→`monitor`, Registro de cobros→`process`, Reportes→`dashboard`,
  Control de movimientos→`finance`, Centralizada→`usecase`,
  Multi-dispositivo→`hero`.
- Aceptación: 6 imágenes con alt descriptivo (§a11y), `loading="lazy"` +
  `srcset/-800w` (§perf), cero datos ficticios (§35). El reaprovechamiento de
  assets paneles es **tratamiento único** (miniatura pequeña, enmascarada,
  con overlay) coherente con §39.7. Validación visual §12.

---

## 42. EXPERIENCIA AUTÓNOMA — movimiento vivo constante (G-01…G-10)

El titular pidió *"funciones JavaScript que hagan animaciones que se muevan
constantemente solas"*, imágenes generadas (SVG de marca) para cards y más
compactación. Tanda G-01…G-10 documentada en `DEUDA` (DUDE-23/24) y
`EJECUCION` (pasada 24). Todas las rutinas JS se apagan con
`prefers-reduced-motion` y con tab oculta; solo usan `transform`/`opacity`.

### G-01 AUTO-PLAY DEL SHOWCASE
- Decisión: el carrusel de producto avanza solo cada 5.6 s (un paso) y vuelve
  al inicio al llegar al final. Pausa en hover y en foco (`focusin/focusout`),
  pausa con tab oculta, off en reduced-motion.
- Aceptación: no interfiere flechas/teclado existentes; `aria-disabled` intacto.

### G-02 SPARKLES (partículas ascendentes, JS)
- Decisión: función `spawnSpark()` crea puntos-luz (cyan/ámbar 25%) en hero y
  promo cada ~850 ms; suben con `Element.animate` (3.5–6 s), se auto-eliminan
  en `animationend`. `z-index` bajo los CTAs, `pointer-events:none`.
- Aceptación: sin fake-data (solo luz decorativa), sin bloqueo de interacción,
  off en reduce y tab oculta.

### G-03 SISTEMA DE ARTE SVG (generado)
- Decisión: se generaron 6 ilustraciones vectoriales de marca
  (`assets/art-*.svg`, 800×450, paleta Prisma$): monitoreo (ECG+medidor),
  registro (checklist), reportes (barras+métrica), movimientos (flechas
  ingreso/egreso), centralizada (hub radial), dispositivos (celular+tablet+
  monitor). Usadas en las 6 cards de Beneficios (reemplazan webp) y en el
  tour del hero (G-10). Vectores: nítidos en cualquier DPI, ~2–2.7 KB cada uno
  (vs ~15–45 KB de webp) → página más liviana y compacta.
- Aceptación: 0 librerías externas (SVG autóctono, sin imágenes de la web);
  `alt` descriptivo en ARTE; animaciones internas suaves (solo con
  no-preference gracias al CSS global §reduce).

### G-04 AURORA DRIFT (vaivén del foco del hero)
- Decisión: bucle rAF que deriva lenta y continuamente el foco de luz del hero
  (`--mx/--my` = 42±26% / 14±8%) cuando el puntero no está activo; al mover el
  puntero, se apaga el vaivén 9 s (prioridad del usuario). Off bajo reduce.
- Aceptación: sin jitter, sin cambio de layout.

### G-05 PULSO DEL CONTADOR DEL SLIDER
- El número activo del contador (01/04) late suavemente (scale 1.12) 2.4 s
  como afirmación de "vivo". CSS-only, off bajo reduce.

### G-06 PUNTOS DE ACTIVIDAD DEL HERO
- Los 3 puntos cyan de `hero__meta` pulsan en cascada (delays 0/0.35/0.7s)
  simulando actividad del sistema. CSS-only, off bajo reduce.

### G-07 RIPPLE RINGS EN WhatsApp FAB
- Dos anillos graduales se expanden del fab cada 2.8 s (desfasados 1.4 s);
  `pointer-events:none`, CSS-only, off bajo reduce (base `display:none`).

### G-08 SCANLINE EN EL PROMO
- Barrido de luz vertical (JS rAF: `translateY` ciclico 5.2 s, altura 120 px)
  sobre el baner promo, en `--prefers-reduced-motion` off. Pausa over.
- Aceptación: `aria-hidden`, sin captura de eventos, sin reflow.

### G-09 PASE DE COMPACIDAD #2
- Densidad: `.card` padding 30→26 px (vía `--card-pad`, miniatura se recálcula)
  · icono `margin-bottom` 20→16 · `benefits__grid` gap ≤24 px. Con las
  miniaturas vectoriales la sección se lee **más compacta y nítida**.
- Aceptación: respirar >24 px (§32), texto legible, ±grid intacto.

### G-10 TOPBAR CÍCLICO + TOUR AUTOPLAY DEL HERO
- (a) `data-topbar-msg` rota 3 mensajes reales cada 4.6 s (fade 0.35 s);
- (b) el media del hero hace **auto-tour**: crossfade 5.2 s entre el screenshot
  real (`hero.webp`) y 3 piezas de arte SVG (monitoreo/reportes/movimientos),
  con `hero__img` como base — el art es `loading="lazy"`.
- Aceptación: LS actual sin reflow (opacity/absolutos), LCP conservada (base
  en HTML), off bajo reduce y tab oculta.

### GUARDAS (§42)
- JS gated por `!reduceMotion` y `document.hidden`; animaciones · 1 s salvo
  ambientes (ripple 2.8 s, scan 5.2 s, tour 5.2 s, marquee 32 s) todas
  pausables; solo `transform`/`opacity`; cero datos ficticios (§35); el arte
  SVG es interno (no web externa).

---

## 43. EXPERIENCIA VIVA — animaciones constantes y piezas originales (H-01…H-09, O-01)

El titular pidió que la landing tenga *"animaciones constantes en algunas
secciones"*, *"nuevas cosas originales"* y un directorio `diagramas/` con los
diagramas clave para entender cómo funciona. Tanda H-01…H-09 (movimiento
permanente y pausable, CSS/JS) + pieza original O-01 (badge "En vivo").
Documentada en `DEUDA` (novedades + DUDE-25) y `EJECUCION` (pasada 25).
Todas las rutinas respetan `prefers-reduced-motion` y tab oculta; solo se
anima `transform`/`opacity`/`background`/`box-shadow`.

### H-01 FEED EN VIVO (Monitoreo)
- Decisión: JS rota una clase `is-live` cada 1.6 s por cada una de las 5
  notificaciones (cascada cíclica de 8 s): la activa realza borde, fondo y
  resplandor cyan. Da la sensación de flujo de actividad permanente.
- Aceptación: sin reflow (solo transición de bordes/sombra), off en reduce y
  tab oculta, contenido 100 % real (las notificaciones ya existían).

### H-02 PUNTO VIAJERO (mini-gráfico)
- Decisión: un punto-luz recorre la línea del mini-gráfico (8 s, `offset-path`
  con la misma geometría `M0,64…L240,22`). Hidden en reposo y fuera de
  `@supports (offset-path)` para no romper navegadores antiguos.
- Aceptación: decorativo, `aria-hidden` (la gráfica ya es decorativa), off en
  reduce.

### H-03 BARRIDO DE CUADRE (financial)
- Decisión: luz cyan que barre sutilmente (7 s, ease-in-out, delay 1.2 s) sobre
  el screenshot de ingresos/egresos (`device__sweep`), reforzando el panel
  "Cuadre general" como pantalla viva.
- Aceptación: `pointer-events:none`, clip por `overflow:hidden` del device,
  off en reduce.

### H-04 RESPIRO DEL CTA
- Decisión: barrido ambiental muy tenue (9 s) sobre el CTA principal
  (`cta__sweep`, skew -12°), añadiendo profundidad sin competir con el
  contenido. Off en reduce (y global §reduce la congela).
- Aceptación: no captura eventos, no reflow, sin distraer del botón.

### H-05 SATÉLITE ORBITAL (Seguridad)
- Decisión: sobre el escudo, un anillo adicional rota a 14 s con un punto-luz
  satélite (`shield__orbit` + `shield__sat`), evocando cobertura continua.
- Aceptación: `aria-hidden`, off en reduce (lista explícita §reduce), sin
  cambio de layout.

### H-06 PULSO EN CASCADA (chips de Solución)
- Decisión: los 5 chips de capacidades emiten un pulso de resplandor suave en
  cascada (3 s, delays 0.6 s). CSS-only sobre `::before`, `pointer-events:none`.
- Aceptación: no tapa el texto ni el detail (`inset:6px`), off en reduce.

### H-07 STATS QUE RESPIRAN (Dashboard)
- Decisión: los 4 valores del resumen respiran en escalera (magnitud 1→1.04,
  4 s, delays 0.5 s). Da vida a las cifras demostrativas sin cambiar su texto.
- Aceptación: transform-origin izquierda (sin desplazamiento), off en reduce,
  el contador JS de entrada permanece.

### H-08 BRILLO DE LA LÍNEA DEL TIMELINE
- Decisión: la línea de progreso del proceso mantiene un resplandor pulsante
  (3 s) además de la transición de ancho por scroll. Refuerza "paso vivo".
- Aceptación: solo `box-shadow` (no afecta el ancho), off en reduce.

### H-09 DERIVA DEL GRADIENTE DEL FOOTER
- Decisión: un gradiente horizontal muy tenue deriva 18 s (0%→100%→0%) sobre
  el footer (::before, `background-size:250%`), cerrando la página con vida
  constante y pausable.
- Aceptación: tenue (≤12 % alpha), `pointer-events:none`, off en reduce.

### O-01 BADGE "EN VIVO" (pieza original)
- Decisión: los eyebrows de Monitoreo y Dashboard/Reportes pasan a
  `eyebrow--live` con un punto verde que late (2.2 s) y el sufijo "· En vivo".
  Es una pieza original de lenguaje: distingue secciones con datos vivos.
- Aceptación: copy real (no inventada), `display:inline-flex` conserva el
  espaciado del eyebrow, off en reduce (dot estático).

### GUARDAS (§43)
- JS gated por `!reduceMotion` y `document.hidden` (H-01); animaciones
  pausables y de baja intensidad (350 ms–18 s); solo
  `transform`/`opacity`/`background`/`box-shadow`; cero datos ficticios nuevos
  (§35); las piezas decorativas son `aria-hidden`.

---

## 44. DIAGRAMAS (`diagramas/`)
- Decisión: directorio `diagramas/` con los diagramas más importantes para
  entender cómo funciona el proyecto, en **Mermaid** (se renderizan solos en
  GitHub): arquitectura de archivos, narrativa/navegación por secciones,
  flujo de conversión a la demo, sistema de animación (guardas §19/§23/§35) y
  sistema de diseño/tokens.
- Aceptación: markdown renderizable (sin imágenes externas), acorde a los
  docs existentes (SPEC/DEUDA/EJECUCION) y a los números de § y pasadas.

---

## 45. FORMULARIO DE DEMO — datos importantes y validaciones generales (I-01…I-06)

El titular reportó que *"al solicitar una demo faltan datos importantes y
validaciones generales"*. Se amplía la captura de lead (contacto + contexto
operativo) y se refuerzan las validaciones en español con feedback claro.
Registrada en `DEUDA` (pasada 26 + DUDE-26) y `EJECUCION` (pasada 26). Los
datos que pide el formulario son del prospecto (no son datos ficticios §35) y
ya están contemplados en la política de privacidad ("nombre, correo
electrónico, teléfono").

### I-01 DATOS DE CONTACTO OBLIGATORIOS
- Decisión: además de Nombre, son obligatorios **Correo electrónico**
  (`type=email`, `autocomplete=email`) y **Teléfono de contacto (WhatsApp)**
  (`type=tel`, `inputmode=tel`, `autocomplete=tel`, patrón
  `^\+?[0-9()\s-]{7,20}$`). Se añade **Ciudad** (opcional,
  `autocomplete=address-level2`). Sin datos de contacto no hay seguimiento.
- Aceptación: el mensaje de WhatsApp incluye correo y teléfono; el requisito
  no bloquea el envío con solo nombre.

### I-02 CONTEXTO OPERATIVO (calificación del lead)
- Decisión: dos selectores opcionales que califican la operación:
  **Puntos de recaudo/vendedores** (1–5 / 6–20 / 21–100 / más de 100 /
  prefiere no decirlo) y **Volumen mensual aproximado** (rangos en $ con
  "Prefiero no decirlo"). El primer option de los selects vacíos pasa a ser
  placeholder (antes el sector asumía "Tienda o comercio" por defecto).
- Aceptación: rangos orientativos, nunca promesas del producto (§35); el
  encargado comercial prioriza por volumen y canales.

### I-03 VALIDACIONES GENERALES EN ESPAÑOL
- Decisión: mensajes personalizados vía `setCustomValidity` en el evento
  `invalid` (obligatorio, email inválido, teléfono inválido, demasiado corto),
  limpiados en `input`. `form.checkValidity()` + `form.reportValidity()`
  siguen siendo la puerta; `:user-invalid` se extiende al `select`.
- Aceptación: mensajes claros en español independientes del idioma del
  navegador; el borde rojo aparece después de interactuar (WCAG-friendly).

### I-04 FEEDBACK DE ENVÍO
- Decisión: si la validación falla, el `status` muestra "Revisa los campos
  marcados y vuelve a enviar." en rojo
  (`.form__status--error`, `role=status`). Si es válido, "Abriendo WhatsApp
  con tu solicitud…" e inmediatamente `showToast`.
- Aceptación: el estado es `aria-live` (`role=status`), no se pierde al
  recargar; sin errores silenciosos.

### I-05 ANTI DOBLE ENVÍO
- Decisión: al abrir WhatsApp, el botón de envío se deshabilita 2 s
  (`.btn:disabled` con `pointer-events:none`) para evitar spam de ventanas.
- Aceptación: re-habilita solo; no requiere recarga; no afecta otros botones.

### I-06 BIG TRIPLE — composición del mensaje WhatsApp
- Decisión: el mensaje a `wa.me/573183366064` incluye ahora: Nombre, Correo,
  Teléfono, Negocio, Ciudad, Tipo de operación, Puntos de recaudo/vendedores,
  Volumen mensual, y Necesidad (solo los que aportó el prospecto).
- Aceptación: el vendedor recibe contexto suficiente en un solo vistazo.

### GUARDAS (§45)
- Solo captura de datos del prospecto (nada ficticio §35); validación nativa
  + `reportValidity` (sin JS experimental); `autocomplete`/`inputmode` para
  móviles; el envío sigue siendo composición WhatsApp sin backend (decisión 7);
  la política de privacidad ya cubre nombre/correo/teléfono.

---

## 46. Revisión UEX Cliente — 18 puntos (2026-09-21)

> Iteración **01** de `Novedades por Corregir UEX Cliente.md`. Archivos:
> `index.html`, `pages/*.html`, `404.html`, `css/styles.css`, `js/main.js`.

### §46.1 Estructura de secciones (cambios de comportamiento/ubicación)
- Eliminadas: `#financiero` (Control financiero), `#reportes` (Dashboard/reportes)
  y la sección `.promo`.
- Nueva: `#planes` (tras FAQ, antes del footer) con el plan/precios
  (`precios.webp` → "Comprar ahora" vía WhatsApp), noticia de app
  (`playstore.webp`) y CTA de compra (`compra.webp`).
- `#beneficios` ahora es un carrusel (`benefits__track` con flechas + dots +
  autoplay 5 s). `#experiencia` (Product Experience) pasa a carrusel por páginas
  sin scroll lateral (autoplay 4 s).

### §46.2 Decisiones de diseño documentadas
- Botones primarios: **sólidos cian**, sin gradiente ni brillo/sheen (P1).
- CTAs del sitio (P3/P15/P16/P13/P14): hero "Probar ahora" → `#planes`;
  navbar/topbar/sticky "Ver planes" → `#planes`; CTA `#demo` "Quiero verlo en
  vivo" → WhatsApp con mensaje fijo; `#planes` "Comprar ahora" → WhatsApp.
- WhatsApp oficial **verde `#25D366`** en fab, footer y CTA en vivo (P7).
- Iconos genéricos eliminados u ocultos por CSS (P6); decorativos del hero
  reemplazados por las fotos reales de la carpeta (P10).

### §46.3 Formulario demo (P4)
- Eliminados: "Tipo de operación", "Puntos de recaudo/vendedores" y "Volumen
  mensual" (index y `pages/solicitar-demo.html`). El mensaje WhatsApp ya no los
  incluye → se actualiza la composición I-06 del §45.

### §46.4 Tema claro/oscuro (P8)
- Nuevo estado `data-theme="light"` con persistencia (`localStorage`) y respeto a
  `prefers-color-scheme`. Por defecto oscuro. Toggle en navbar (index + demo).

### §46.5 Pendiente (P5)
- No existe bloque de reseñas en el código actual; "cuadrar reseñas" queda a la
  espera de definición/contenido por parte de UEX.

---