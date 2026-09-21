# Novedades por Corregir — UEX Cliente

**Proyecto:** Prisma$ Landing Page
**Fecha:** 2026-09-21
**Estado:** Registro técnico de peticiones (pendiente de ejecución)

---

## Resumen ejecutivo

| # | Petición del cliente | Ámbito técnico | Impacto |
|---|----------------------|----------------|---------|
| 1 | Botones sin aspecto IA (sólidos, sin gradientes) | CSS (`css/styles.css`) | Plantilla de marca |
| 2 | Nueva sección PLANES con PNG de precios | HTML + asset | Contenido nuevo |
| 3 | Hero: "Probar ahora" → va a PLANES | HTML (hero) | CTA / conversión |
| 4 | Form DEMO: eliminar 3 campos | HTML x2 + JS | Formulario |
| 5 | Banner + cuadrar reseñas | HTML/CSS | Contenido |
| 6 | Sin emojis ni iconos "genéricos" | JS (icon set) + HTML | Plantilla de marca |
| 7 | FAB WhatsApp con icono oficial verde | CSS + HTML + JS | Enlace / conversión |
| 8 | Toggle tema oscuro/claro | CSS tokens + JS + HTML | Sistema de diseño |
| 9 | Eliminar "Control financiero" y "Dashboard" | HTML + footer/nav | Arquitectura de contenido |
| 10 | Usar TODAS las imágenes de la carpeta | HTML + assets | Contenido |
| 11 | "Product Experience": autoplay c/ 4s | JS (showcase) | Motion |
| 12 | "Product Experience": quitar scroll lateral | CSS + JS | UX |
| 13 | Eliminar sección "Cuadra tu operación…" | HTML (promo) | Contenido |
| 14 | "Quiero verlo en vivo" → WhatsApp automático | HTML + JS (WA) | CTA / conversión |
| 15 | Navbar "Solicitar demo" → "Ver Planes" → #planes | HTML (navbar) | CTA / navegación |
| 16 | Hero "Solicitar una demo" → "Comprar ahora" | HTML (hero) | CTA / conversión |
| 17 | Responsive: justificar cuerpos, centrar títulos | CSS media queries | Responsive |
| 18 | "Beneficios": slider profesional con animación | HTML + CSS + JS | Motion |

> **Notas de coherencia a confirmar** (detalle al final):
> - Conflicto **punto 3 vs punto 16** (mismo botón del hero, dos textos distintos).
> - Conflicto **punto 13 vs punto 14** (el botón "Quiero verlo en vivo" vive dentro de la sección que el punto 13 pide eliminar).

---

## Estado de iteración (2026-09-21) — ITERACIÓN 01

Aplicada el 2026-09-21. Registro detallado en `EJECUCION_Y_AUDITORIA.md §16`,
`DEUDA_TECNICA_Y_NOVEDADES.md §5` y `SPEC.md §46`.

| # | Punto | Estado |
|---|-------|--------|
| 1 | Botones sólidos sin gradientes | ✅ Aplicado |
| 2 | Sección PLANES (precios) | ✅ Aplicado (`#planes`) |
| 3 | Hero "Probar ahora" → `#planes` | ✅ Aplicado |
| 4 | Form DEMO: quitar 3 campos | ✅ Aplicado (index + solicitar-demo + JS) |
| 5 | Banner + cuadrar reseñas | ✅ Aplicado — **confirmado por UEX (2026-09-21): "imágenes alineadas correcto"**; alineación/exposición de imágenes verificada |
| 6 | Sin iconos genéricos | ✅ Aplicado |
| 7 | FAB WhatsApp verde oficial | ✅ Aplicado (`#25D366`, icono oficial) |
| 8 | Toggle tema oscuro/claro | ✅ Aplicado (persistencia + `prefers-color-scheme`) |
| 9 | Quitar financiero/reportes | ✅ Aplicado (secciones + footer/nav en 5 HTML) |
| 10 | Todas las imágenes de la carpeta | ✅ Aplicado |
| 11 | Showcase autoplay 4 s | ✅ Aplicado |
| 12 | Showcase sin scroll lateral | ✅ Aplicado (transform por página) |
| 13 | Eliminar sección promo | ✅ Aplicado |
| 14 | "Quiero verlo en vivo" → WhatsApp | ✅ Aplicado (reubicado en CTA) |
| 15 | Navbar "Ver Planes" → `#planes` | ✅ Aplicado |
| 16 | Hero "Comprar ahora" | ✅ Aplicado (CTA de compra en `#planes`) |
| 17 | Responsive (justificar/centrar) | ✅ Aplicado |
| 18 | Beneficios como slider profesional | ✅ Aplicado (carrusel con dots/autoplay) |

**Resolución de conflictos (decisión de esta iteración):**
- Hero (P3 predominante sobre P16): botón primario **"Probar ahora" → `#planes`**.
  "Comprar ahora" (P16) es el CTA de compra de la sección `#planes` (→ WhatsApp).
- Promo (P13 predominante): sección eliminada; "Quiero verlo en vivo" (P14) se
  reubicó como botón verde WhatsApp en la sección CTA `#demo`.

---

## Detalle técnico por punto

### 1. Botones sin aspecto IA — sólidos, sin gradientes

- **Archivo:** `css/styles.css`
- **Referencias:** tokens `--grad-*` (líneas 39–43) y estilos `.btn` (líneas 320–379).
  - `.btn--primary` usa `background: var(--grad-cyan)` (línea 342) → sustituir por color **sólido** (criptorreferencia de marca, p. ej. `#00D8FF`/`#00E5FF` sólido o navy sólido).
  - `.btn--primary::before` añade un *sheen* con gradiente (líneas 346–354) y reacciona en hover (`prismBtnSheen`, línea ~1952) → **eliminar** (es el efecto que da "apariencia IA").
  - Revisar `.btn--secondary` (líneas 360–369), `.btn--ghost` (371–376) y botón flotante `.wa-fab` (líneas 1393, 1400) que también usan `--grad-cyan`.
- **Criterio de aceptación:** fondos planos/sólidos, sin degradado ni barrido de luz sobre el CTA.

### 2. Nueva sección PLANES (con imagen de precios)

- **Archivo:** `index.html` — insertar nueva `<section id="planes">` (ubicación sugerida: justo después del HERO SLIDER o antes del CTA final).
- **Asset:** `Imagenes para landing/PRECIOS.png` (son los precios de los planes).
- Pendiente de decisión: optimizar/convertir a `.webp` en `assets/` o referenciar el PNG directo (1.5 MB, conviene optimizar).
- Assets complementarios disponibles en la misma carpeta: `Compra Ahora.png`, `PLAYSTORE.png`.
- **Impacto:** los CTAs de los puntos 3, 15 y 16 anclarán a `#planes`.

### 3. Hero: botón "Probar ahora" → sección Planes

- **Archivo:** `index.html`, línea 194, en `.hero__actions`:
  - Actual: `<a class="btn btn--primary btn--lg" href="pages/solicitar-demo.html" data-magnetic>Solicitar una demo</a>`
  - Propuesto: texto **"Probar ahora"** y `href="#planes"`.
- **⚠ Conflicto con punto 16.**

### 4. Formulario DEMO: eliminar 3 campos

- **Archivo A:** `index.html` (formulario del CTA, líneas 866–898)
  - Eliminar campo **"Tipo de operación"** (`#demo-sector`, líneas 878–887).
- **Archivo B:** `pages/solicitar-demo.html` (página completa, líneas 94–162)
  - Eliminar **"Tipo de operación"** (`#demo-sector`, líneas 118–128),
  - **"Puntos de recaudo o vendedores"** (`#demo-canales`, líneas 129–139),
  - **"Volumen mensual aproximado"** (`#demo-volumen`, líneas 140–150).
- **Archivo C:** `js/main.js`, builder del mensaje WhatsApp (líneas 478–488): eliminar las líneas `"Tipo de operación: …", "Puntos de recaudo/vendedores: …", "Volumen mensual: …"`.
- Revisar clases `.form__field--full` y grid del form para que los campos restantes sigan con buena alineación.

### 5. Banner y cuadratura de reseñas

- **Pendiente de clarificación:** no existe actualmente una sección de **reseñas/testimonios** en el código (solo topbar anuncio `index.html:117–132` y promo banner `821–842`).
- Dominio relevado del cliente para definir el bloque de "reseñas" (¿imágenes de caso de uso? ¿testimonios reales de WhatsApp?) y dónde debe "cuadrarse".

### 6. Sin emojis ni iconos "tradicionales" (aspecto IA)

- **Archivo:** `js/main.js`, objeto `ICONS` (líneas 10–36): todos los iconos actuales son SVG *lineal* inyectados vía `[data-icon]` (monedero, campana, candado, etc.) — se perciben "genéricos IA".
- **Archivo:** `index.html` — glifos tipográficos que se descartan:
  - `&#10022;` (diamante) del marquee (líneas 473, 475, …),
  - `&rarr;` de la topbar (línea 125) y `&times;` del botón cerrar (línea 129),
  - iconos de flechas del showcase/slider (CSS `::before`).
- **Dirección:** sustituir iconografía por imagen real de producto (capturas de la app), símbolos de marca propios o tipografía limpia. Mantener SR / `aria-hidden` en lo decorativo.

### 7. FAB WhatsApp con icono oficial verde

- **Archivo:** `index.html` líneas 1016–1018 (`a.wa-fab` con `data-icon="message-circle"`); espejo en `pages/solicitar-demo.html:231–233` y footer (`data-wa-fab`).
- **Archivo:** `css/styles.css`, `.wa-fab` (líneas 1381–1407): fondo `--grad-cyan` → fondo **verde WhatsApp oficial `#25D366`**.
- **JS:** sustituir el icono genérico por el **SVG oficial de WhatsApp** (guardado inline o en `ICONS` con nombre `whatsapp`).
- Mantener el `href` que ya genera `js/main.js` (líneas 544–551) usando `WA_NUMBER` (línea 449).

### 8. Toggle tema oscuro ↔ claro

- **Archivo:** `css/styles.css`, tokens `:root` (líneas 6–70) son el tema oscuro actual.
- Tarea: crear bloque `:root[data-theme="light"]` (o `html.theme-light`) redefiniendo `--bg`, `--bg-deep`, `--ink`, `--ink-soft`, `--ink-muted`, `--line`, `--line-strong`, `--glass`, `--glass-2`, y re-asignar superficies/degrades del tema claro.
- **HTML:** botón de cambio en el navbar (junto a `.navbar__actions`, línea 168–173) y dentro del menú móvil.
- **JS:** `localStorage` para persistir, respeto de `prefers-color-scheme` como valor inicial, y `aria-label`/`aria-pressed` accesibles.
- **Riesgo:** revisar textos con variable `--ink` sobre fondos con gradientes fijos (hero, promo, cta, security) que no cambian.

### 9. Eliminar secciones "Control financiero" y "Dashboard / Reportes"

- **html:** sección `#financiero` (líneas 557–581, tag "Control financiero") y sección `#reportes` (líneas 583–651, eyebrow "Dashboard y reportes · En vivo" + tabs/stats).
- **HTML (dependencias):**
  - Footer col "Soluciones" apunta a `#financiero` y `#reportes` (líneas 982–984) → re-ligar.
  - Navbar no apunta a ellas, pero `promo`/otros CTAs sí: `href="#reportes"` (línea 833) — revisar dentro del punto 13.
- **JS:** el bloque de contadores se ancla a `.analytics__panel` (líneas 394–427) y las tabs (296–327) — se eliminan junto con el markup.
- **Coherencia:** verificar que "monitoreo en tiempo real" (#monitoreo), "cuadre" (heart de la operación) y "beneficios" no repitan mensajes de estas dos secciones.

### 10. Todas las imágenes de la carpeta presentes en el landing

| Asset (Imagenes para landing/) | Ubicación propuesta | Estado actual |
|--------------------------------|---------------------|---------------|
| `PRECIOS.png` | Nueva sección `#planes` (punto 2) | No usada |
| `Compra Ahora.png` | Refuerzo CTA "Comprar ahora" (puntos 3/16) | No usada |
| `PLAYSTORE.png` | Badge tienda / sección planes | No usada |
| `TIEMPO REAL.png` | Sección `#monitoreo` (líneas 503–555) | No usada |
| `REGISTRO COBROS ES MUY FACIL.png` | Sección `#como-funciona` (419–466) | No usada |
| `TODA LA OPERACION EN UN SOLO LUGAR.png` | Sección solución / "toda tu operación" | No usada |
| `CASO DE USO.jpg` / `CASO DE USO 2.jpg` | Showcase "Product Experience" o beneficio "clientes" | No usadas |
| `PROMOCION SLIDER.png` | Slider hero o promo (puntos 11–13) | No usada |
| `PRISMAS PUBLICIDAD 1.png` | Banner/promo (punto 5/13) | No usada |
| `dashboard.JPG` | Reemplaza/añade a dashboard (punto 9 y showcase) | No usada |
| `ICONO VENTANA.png` | Icono/app de marca (navbar/CTA) | No usada |
| `LOGO.png` | Logo (complementa `assets/logo.webp`) | No usada |

> Todas requieren **optimización** (`.webp`, tamaños, `width/height`, `loading="lazy"`) antes de integrarse en `assets/`.

### 11 + 12. "Product Experience": autoplay c/ 4s y flechas sin scroll lateral

- **Archivo:** `index.html` sección `.showcase` (líneas 784–819); `js/main.js` bloque "PRODUCT SHOWCASE" (líneas 329–391).
- **Cambios JS:**
  - Reducir intervalo autoplay de `5600` ms → `4000` ms (línea 388).
  - Actualmente hace scroll incremental (`sStep`) → cambiar a **transición de tarjetas** (índice + clase activa, sin scroll).
  - Mantener pausa en hover/focus y `document.hidden`.
- **Cambios CSS:** `.showcase__track` (líneas 1123–1132): quitar `overflow-x: auto`, `scroll-snap-type`, `scrollbar-width` y `::-webkit-scrollbar`.
- **Flechas:** mantienen `data-showcase-prev/next` (marcado ya presente, líneas 794/817); en móvil actualmente se ocultan (línea 1920) → **mostrar** siempre o rediseñar para que no dependa del swipe.
- **Responsive:** breakpoints de showcase en líneas 1869 (`flex-basis`), 1919 (`flex-basis: 85%`) y 1920 (`display:none` de flechas) → reajustar a vista única + flechas.

### 13. Eliminar sección promo "Cuadra tu operación con un solo vistazo"

- **Archivo:** `index.html`, sección `.promo` (líneas 821–842).
- Contiene el botón **"Quiero verlo en vivo"** (línea 832) → ver punto 14.
- `js/main.js` depende de la sección en: scanline (855–871, `.promo__inner`), sparkles (810, `.promo__inner`) y `spark--gold`. Hay que **desacoplar/eliminar** esas dependencias sin romper `data-scanline`.

### 14. "Quiero verlo en vivo" → WhatsApp con mensaje automático

- **Archivo:** `index.html`, línea 832.
- Destino: `https://wa.me/573183366064?text=Buenas%20tardes%20me%20gustaria%20saber%20como%20funciona`
- Número actual del negocio: `WA_NUMBER = "573183366064"` (`js/main.js:449`).
- **⚠ Depende del punto 13:** si la sección promo se elimina, decidir si este CTA se reubica (p. ej. en hero, CTA final o sticky) o se descarta.

### 15. Navbar: "Solicitar demo" → "Ver Planes" → `#planes`

- **Archivo:** `index.html`
  - Mobile menu: línea 164 (`li.navbar__mobile-cta a.btn.btn--primary`).
  - Desktop: línea 169 (`a.btn--primary.btn--sm.navbar__cta`).
- Ambos: texto **"Ver Planes"** y `href="#planes"`.
- Espejo en `pages/solicitar-demo.html` (líneas 66 y 71) que apuntan a `#solicitar` → re-ligar a `../index.html#planes`.

### 16. Hero: "Solicitar una demo" → "Comprar ahora"

- **Archivo:** `index.html`, línea 194 (mismo enlace del punto 3).
- **⚠ Conflicto con punto 3** (mismo botón, textos distintos). Ver nota al final.

### 17. Responsive

- **Justificar letra del cuerpo de secciones:** `text-align: justify` en `.section__lead`, `.card__text`, `.promo__text`, `.cta__text`, `.slide__text`, `.faq` body, etc. (cuidar no aplicar a títulos ni alinear sin control de `hyphens`).
- **Centrar títulos:** `text-align: center` + `margin-inline: auto` en `.section__title`, `.section__header`, `.card__title` (según secciones) — crochets: `#solucion`, `#como-funciona`, `#beneficios`, `#experiencia`, `#preguntas`, CTA.
- **Eliminar slide manual en dispositivos:** revisar `overflow-x` / scroll horizontal en `.showcase__track`, `.slider`, `.marquee` (todo scroll-snap) y reemplazar por navegación por flechas + autoplay (punto 12), verificando breakpoints 767px (línea 1916), 768px (1860), 1200px + 1440px.

### 18. "Beneficios": slider profesional con animación

- **Archivo:** `index.html`, sección `#beneficios` (líneas 653–760) — `.benefits__grid` con 6 `.card--benefit` (3 filas x 2 col en desktop, línea 1882).
- **Propuesta:** convertir el grid en **carrusel de tarjetas** con:
  - Autoplay con ritmo (reutilizar patrón del slider/hero y showcase),
  - Flechas prev/next + dots,
  - Transición suave entre tarjetas (no scroll lateral),
  - Imágenes reales de `Imagenes para landing/` en el `card__thumb`,
  - Pausa en hover/focus, respeto `prefers-reduced-motion` (guardas ya presentes en `js/main.js:7`).
- **CSS:** nuevo `.benefits__carousel` manteniendo `.card--benefit`; breakpoints (1882/1918) se reajustan al carrusel.

---

## Guardas transversales obligatorias (no romper)

- `prefers-reduced-motion: reduce` (guardas en `js/main.js:7,137,202,248,…`): el autoplay y animaciones siempre deben apagarse.
- Accesibilidad: `aria-*`, `aria-hidden` en decorativos, focus-visible, contraste claro para el nuevo tema claro.
- Performance: toda imagen nueva optimizada a `.webp` con `width/height` y `loading="lazy"`.

---

## Decisiones pendientes (a confirmar con UEX)

1. **Hero (punto 3 vs 16):** ¿el CTA principal del hero es **"Probar ahora"** (→ `#planes`) o **"Comprar ahora"**? ¿Ambos (CTA primario y secundario)?
2. **Promo (punto 13 vs 14):** si se elimina la sección "Cuadra tu operación…", ¿dónde va el botón **"Quiero verlo en vivo"** (WhatsApp)? ¿Se reubica o se elimina?
3. **Punto 5 (reseñas):** ✅ **RESUELTO 2026-09-21** — UEX confirmó que significa **alinear correctamente las imágenes**; se verificó la composición (`object-fit`/`object-position`/aspect-ratio uniformes) en hero, benefits, showcase, planes y tiendas. No existen "reseñas de clientes" que integrar.

---

## PROMPT PERMANENTE (instrucción transversal)

Siempre que termines una iteración de alguna actividad que realices sobre este proyecto (cualquiera de los 18 puntos u otra tarea), dejalo reportado con trazabilidad en estos tres archivos, manejando siempre fechas y registro de cambios:

1. **`EJECUCION_Y_AUDITORIA.md`** — registrar la ejecución realizada: qué se hizo, en qué sección/archivo se intervino, evidencia y estado.
2. **`DEUDA_TECNICA_Y_NOVEDADES.md`** — registrar la deuda técnica generada y/o las novedades introducidas en la iteración.
3. **`SPEC.md`** — actualizar la especificación si el cambio modifica comportamiento, contenido, estructura de secciones o decisiones de diseño documentadas.

Cada iteración debe quedar identificada con **fecha (YYYY-MM-DD), número de iteración/pasada, archivos tocados y trazabilidad del punto atendido.**