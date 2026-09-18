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