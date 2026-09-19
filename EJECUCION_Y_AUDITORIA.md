# Prisma$ — Plan de Ejecución y Auditoría · v1

> Documento de trabajo de la rama **`V.1`**.
> Rol asumido: **Senior Product Designer (UX/UI) + Senior Frontend Engineer + Art Director fintech + Especialista en conversión, responsive, accesibilidad y motion design.**

---

## 0. Objetivo del documento

Convertir `SPEC.md` en un plan ejecutable y auditable. Este archivo define **cómo se construye** la landing de Prisma$ y **cómo se verifica** que cumple el spec, sin inventar funcionalidades, datos ni integraciones.

Fuente de verdad: `SPEC.md` (1440 líneas, 38 apartados). Este plan **no reemplaza** el spec; lo traduce a tareas y criterios medibles.

---

## 1. Lectura estratégica del spec (rol UX/UI)

La landing debe responder en menos de 5 segundos: **"Esto es Prisma$ y me permite controlar mi recaudo."**

### Narrativa UX (SPEC §21)

| # | Pregunta del visitante | Sección que responde |
| --- | --- | --- |
| 01 | ¿Qué es Prisma$? | Hero + Hero Slider |
| 02 | ¿Qué problema resuelve? | El Problema |
| 03 | ¿Cómo funciona? | Cómo Funciona |
| 04 | ¿Qué puedo hacer? | Solución + Monitoreo + Ingresos/Egresos |
| 05 | ¿Cómo se ve? | Dashboard/Reportes + Product Experience |
| 06 | ¿Por qué debería conocerlo? | Beneficios + Seguridad |
| 07 | ¿Qué hago ahora? | CTA principal |

### Jerarquía emocional (SPEC §33)

`impacto → claridad → producto → simplicidad → profundidad → credibilidad → confianza → conversión`

### Reglas de dirección de arte

- Navy domina; cian **solo** enfatiza (SPEC §2).
- Prismas geométricos = recurso diferencial, sin saturar (SPEC §31).
- Assets entregados se **componen** (máscaras, cards, overlays), no se pegan como banners (SPEC §29).
- Prohibido: plantilla genérica, fondos blancos planos, exceso de neón/gaming/casino, datos ficticios (SPEC §35).

---

## 2. Decisiones de arquitectura (confirmadas)

> `SPEC.md` define componentes y tokens, pero no fija framework. Se decidió un **sitio estático** por simplicidad de despliegue (GitHub Pages), performance y control total del diseño.

| Área | Decisión | Motivo |
| --- | --- | --- |
| Base | **HTML5 semántico + CSS + JavaScript (vanilla)** | Sin build, deploy directo, carga rápida. |
| Estilos | **CSS con variables (design tokens)** | Tokens del spec como `custom properties`. |
| Iconos | **SVG lineales inline** | Un solo estilo (equivalente Lucide), sin dependencias. |
| Animación | **CSS + IntersectionObserver + `requestAnimationFrame`** | Reveals, parallax, counters y slider eficientes. |
| Imágenes | `<img>` con `loading="lazy"` + `aspect-ratio` | Responsive, sin CLS; assets originales. |
| Tipografía | **Inter** vía Google Fonts (`display=swap`, preconnect) | Preferencia del spec. |

**Regla:** la estética la manda el spec; el stack es la vía más simple y robusta para cumplirla.

---

## 3. Design System (fase fundacional)

### 3.1 Tokens (SPEC §2)

- **Color:** navy 950/900/800, blue 900/800/700/600, cyan 500/400/300, aqua, white, surface, surface-2, text-dark, text-muted, yellow, semantic (success/warning/danger/info).
- **Gradientes:** principal, hero, cyan glow, dark cinematic.
- **Tipografía:** Inter/Manrope; H1 `clamp(42px,5vw,76px)`, H2 `clamp(32px,4vw,54px)`, H3 24–32, body 17–20, small 13–15.
- **Espaciado:** escala coherente 4/8/12/16/24/32/48/64/96/128.
- **Radios:** 12–20px; hero/product 20–28px (SPEC §32).
- **Container:** 1200–1280px; grid 12/8/4 (SPEC §32).

### 3.2 Componentes del Design System (SPEC §26)

`Button` · `Badge` · `Icon` · `Card` · `Section` · `Container` · `Typography`

### 3.3 Componentes de página (SPEC §26)

`Navbar` · `Hero` · `HeroSlider` · `SectionHeader` · `FeatureCard` · `ProcessStep` · `DashboardPreview` · `PhoneMockup` · `StatsCard` · `NotificationCard` · `BenefitsGrid` · `SecuritySection` · `ProductShowcase` · `CTASection` · `Footer`

---

## 4. Plan de ejecución por fases

### F0 — Setup y fundaciones
- [ ] Inicializar proyecto y estructura de carpetas.
- [ ] Configurar tokens como CSS variables + Tailwind.
- [ ] Tipografía, reset, contenedor y grid.
- [ ] Primitivas: Button, Badge, Container, Section, Typography, Icon.
- [ ] Pipeline de imágenes (WebP/AVIF, responsive).

### F1 — Navegación y Hero (impacto)
- [ ] Navbar sticky: transparente → `rgba(0,18,60,.88)` + `blur(18px)` + borde al hacer scroll (SPEC §4).
- [ ] Scroll-spy con sección activa.
- [ ] Mobile: logo + hamburger + CTA compacto.
- [ ] Hero: badge, H1, subheadline, CTA primario/secundario, composición de producto (SPEC §5).
- [ ] Animaciones de entrada: logo fade+translateY, headline stagger, subheadline +100ms, CTA +150ms, producto scale .96→1 (SPEC §6).

### F2 — Hero Slider
- [ ] 4 slides con los copys exactos del SPEC §7.
- [ ] Arrows, dots, swipe, autoplay 6s, pausa hover/focus, teclado.
- [ ] Sin autoplay si `prefers-reduced-motion` (SPEC §7).

### F3 — Narrativa de problema y solución
- [ ] **El Problema**: H2 + 3 cards (dispersión, visibilidad, tiempo manual), hover icono→cian y card `translateY(-6px)` (SPEC §8).
- [ ] **Solución**: texto izq. / dashboard der., badges: Tiempo real, Reportes, Clientes, Movimientos, Alertas (SPEC §9).

### F4 — Proceso y monitoreo
- [ ] **Cómo funciona**: timeline horizontal desktop / vertical mobile, 5 pasos, línea que se ilumina con el scroll (SPEC §10).
- [ ] **Monitoreo en tiempo real**: smartphone/dashboard + cards (Pago recibido, Nuevo recaudo, Cliente pendiente, Movimiento registrado, Alerta) + mini gráfico (SPEC §11).

### F5 — Datos y credibilidad
- [ ] **Ingresos y Egresos** + **Cuadre general**: etiqueta "CONTROL FINANCIERO" (SPEC §12).
- [ ] **Dashboard/Reportes**: tabs Resumen/Movimientos/Clientes/Reportes; cifras **demostrativas** (SPEC §13).
- [ ] **Beneficios**: grid 3x2, glass + borde + hover glow, sin sombras pesadas (SPEC §14).
- [ ] **Seguridad**: sección dark `#00123C`, sin afirmaciones no confirmadas (SPEC §15).

### F6 — Showcase, CTA y Footer
- [ ] **Product Experience**: carousel horizontal, 3 visibles desktop / 2 tablet / 1 mobile, cards parcialmente visibles (SPEC §16).
- [ ] **CTA principal**: gradiente navy→blue, prismas flotantes, glow sutil (SPEC §17).
- [ ] **Footer**: columnas y links del SPEC §18; sin URLs inventadas (SPEC §18).

### F7 — Cierre
- [ ] Motion global: scroll reveals, parallax de prismas/glows, charts animate stroke (SPEC §19).
- [ ] Microinteracciones (SPEC §22).
- [ ] Responsive completo 320 / 768 / 1200 / 1440 (SPEC §20).
- [ ] Accesibilidad WCAG 2.2 AA (SPEC §23).
- [ ] Performance y SEO (SPEC §24, §25).
- [ ] Auditoría final (sección 6 de este documento).

---

## 5. Sistema de animaciones (guía de implementación)

| Tipo | Regla |
| --- | --- |
| Duración | 300–800ms |
| Easing | `ease-out` / `cubic-bezier` / spring suave |
| Reveals | fade + translateY + scale |
| Parallax | prismas, background, glows |
| Cards hover | `translateY(-5px)` |
| CTA | glow sutil |
| Charts | animate stroke |
| Slider | crossfade + movimiento direccional |
| Fondo | partículas extremadamente sutiles |

**Prohibido:** scroll hijacking, animaciones rápidas, rotaciones excesivas, rebotes, efectos tipo casino (SPEC §19). Todo motion debe respetar `prefers-reduced-motion`.

---

## 6. Plan de auditoría

### 6.1 Matriz de aceptación (SPEC §37)

| # | Criterio | Método de verificación | Estado |
| --- | --- | --- | --- |
| 1 | Identidad Prisma$ reconocible | Revisión visual contra assets y paleta | ☐ |
| 2 | Logo correctamente utilizado | Comparar con `LOGO.png` (sin deformar/recolorear) | ☐ |
| 3 | Paleta consistente | Inspección de tokens vs SPEC §2 | ☐ |
| 4 | Hero visualmente dominante | Test de 5 segundos | ☐ |
| 5 | Slider funcional | Arrows, dots, swipe, teclado, autoplay, pausa | ☐ |
| 6 | Responsive completo | 320 / 767 / 768 / 1199 / 1200 / 1440 | ☐ |
| 7 | Animaciones suaves | Sin jank; respeta reduced-motion | ☐ |
| 8 | Navegación sticky | Scroll-spy correcto | ☐ |
| 9 | CTAs claros | Primario/secundario consistentes (SPEC §27) | ☐ |
| 10 | Accesibilidad | Checklist 6.3 | ☐ |
| 11 | SEO básico | Checklist 6.4 | ☐ |
| 12 | Performance | Checklist 6.5 | ☐ |
| 13 | Sin contenido ficticio real | Revisión de copys y mockups | ☐ |
| 14 | No repetición de personajes | Revisión visual | ☐ |
| 15 | Coherencia de producto | Todas las secciones del mismo sistema | ☐ |

### 6.2 Auditoría por sección

Para cada sección verificar: **copy exacto del spec · asset correcto · layout desktop/mobile · estados hover/focus · tokens de color/espaciado · comportamiento con reduced-motion · jerarquía Hn.**

- [ ] Navbar
- [ ] Hero
- [ ] Hero Slider
- [ ] El Problema
- [ ] Solución
- [ ] Cómo Funciona
- [ ] Monitoreo en tiempo real
- [ ] Ingresos y Egresos
- [ ] Dashboard / Reportes
- [ ] Beneficios
- [ ] Seguridad
- [ ] Product Experience
- [ ] CTA principal
- [ ] Footer

### 6.3 Checklist de accesibilidad (WCAG 2.2 AA)

- [ ] HTML semántico y jerarquía de headings correcta (H1 único).
- [ ] Navegación completa por teclado; orden de foco lógico.
- [ ] `:focus-visible` claro en todos los interactivos.
- [ ] `alt` text en todas las imágenes (decorativas con `alt=""`).
- [ ] `aria-label`/`aria-*` en slider, menú, tabs y controles.
- [x] Contraste mínimo AA (texto normal 4.5:1, grande 3:1).
- [ ] No depender solo del color para comunicar estado.
- [ ] `prefers-reduced-motion` soportado.
- [ ] Tamaño de objetivos táctiles suficiente (≥44px recomendado).

### 6.4 Checklist SEO (SPEC §25)

- [ ] `<title>`: `Prisma$ | Control de Recaudo`.
- [ ] Meta description exacta del spec.
- [ ] Open Graph + Twitter Cards.
- [ ] `canonical`.
- [ ] Favicon (usar `ICONO VENTANA.png`).
- [ ] Schema apropiado (p. ej. Organization/Product) sin datos inventados.
- [ ] Un solo H1 y jerarquía H1→H2→H3.

### 6.5 Checklist performance (SPEC §24)

- [x] WebP/AVIF + responsive images (`srcset`/`sizes` con variantes `-800w`).
- [x] `lazy loading` en imágenes fuera del hero.
- [x] Preload solo del hero (con `imagesrcset` para que mobile descargue la variante 800w).
- [ ] Sin videos pesados (no hay videos en la página → N/A).
- [x] Blur controlado (evitar múltiples simultáneos costosos).
- [x] Sin CLS (reservar dimensiones).
- [x] Primera pantalla rápida (LCP objetivo: hero ~45 KB en mobile vía variante 800w).

### 6.6 Auditoría de contenido (anti-datos ficticios, SPEC §35)

- [x] Sin testimonios, clientes, partners, certificaciones ni integraciones inventadas.
- [x] Cifras de mockups etiquetadas como **demostrativas** (stats, movimientos, mini-gráfico, lead del dashboard).
- [x] Sin afirmaciones de seguridad no respaldadas ("100% seguro", "impenetrable", "seguridad bancaria").
- [x] Sin URLs ni redes sociales inventadas en el footer (solo anclas internas; canonical = repo GH).

### 6.7 Auditoría UX (mini-heurística)

- [x] Cada sección responde una sola pregunta (§1) — narrativa documentada en §1.
- [x] CTA visible sin hacer scroll excesivo en mobile (primario en el hero + sticky tras avanzar).
- [x] Botón sticky "Solicitar demo" solo tras avanzar en la página (SPEC §36).
- [x] Sin scroll hijacking ni sobrecarga cognitiva (sin manipulación de scroll, motion < 800ms).
- [x] Espacio negativo suficiente (SPEC §32).
- [ ] Inputs con estado visual claro: no hay formulario → N/A (decisión CTA `#demo`).

---

## 7. Riesgos y mitigaciones

| Riesgo | Impacto | Mitigación |
| --- | --- | --- |
| Assets raster pesados (17 MB en total) | LCP lento | Convertir a WebP/AVIF y servir responsive. |
| Exceso de glow/blur | Performance y estética | Limitar capas de blur; glow solo en acentos. |
| Slider + animaciones simultáneas | Jank en mobile | Autoplay pausable; animar con transform/opacity. |
| Copys inventados por IA | Incumple §35 | Usar únicamente los copys del SPEC. |
| Falta de framework definido | Retrabajo | Confirmar stack antes de cerrar F0. |

---

## 8. Definición de "terminado" (DoD)

Una sección se considera terminada cuando:

1. Usa los copys y assets exactos del `SPEC.md`.
2. Cumple layout y comportamiento en los 4 breakpoints.
3. Pasa los checklists de accesibilidad, SEO y performance aplicables.
4. Respeta `prefers-reduced-motion`.
5. Pasa la auditoría de contenido (sin datos ficticios).
6. Está aprobada visualmente contra la dirección de arte (§1).

---

## 9. Flujo de trabajo y versionado

- Rama de trabajo: **`V.1`**.
- Base estable: **`0.0`** (tag en `main`).
- Siguiente hito al cerrar la implementación: propuesta de tag **`1.0`**.
- Commits sugeridos: `feat:`, `fix:`, `style:`, `a11y:`, `perf:`, `docs:`.

---

## 10. Auditoría v1 — resultado

Fecha: 2026-09-18 · Rama: `V.1`
Alcance: implementación completa de la landing (HTML/CSS/JS estático).

### Implementado y verificado contra SPEC

- [x] Identidad Prisma$, paleta y tipografía (SPEC §1–3).
- [x] Navbar sticky + glass al scroll + scroll-spy + menú mobile (SPEC §4).
- [x] Hero con copys, CTAs y composición visual (SPEC §5) + animaciones de entrada (SPEC §6).
- [x] Hero Slider 4 slides con autoplay 6s, arrows, dots, swipe, teclado, pausa hover/focus, sin autoplay con reduced-motion (SPEC §7).
- [x] Secciones Problema, Solución, Cómo funciona (timeline progresivo), Monitoreo, Ingresos/Egresos, Dashboard con tabs (SPEC §8–13).
- [x] Beneficios (3x2), Seguridad dark, Product Experience, CTA, Footer (SPEC §14–18).
- [x] Reveals, parallax de glows, charts con `stroke` animado, counters demostrativos (SPEC §19).
- [x] Responsive 320 / 768 / 1200 / 1440, mobile first (SPEC §20).
- [x] Accesibilidad: skip-link, semántica, focus visible, `alt`, `aria`, `prefers-reduced-motion` (SPEC §23).
- [x] SEO: title, meta, OG, Twitter, canonical, favicon, schema, H1 único (SPEC §25).
- [x] Assets reales integrados; 19/19 referencias resueltas.
- [x] Preload del hero (WebP) para mejorar LCP (SPEC §24).
- [x] Schema `FAQPage` (SPEC §25): preguntas reales de la sección FAQ.
- [x] CTA compacto "Solicitar demo" dentro del menú mobile (SPEC §4, §36).
- [x] Subrayado animado en links del footer (SPEC §22).
- [x] Showcase (§16): flechas prev/next (ocultas en mobile), scroll por teclado ←/→ y `aria-roledescription="carrusel"` + `aria-current` en los dots del slider (§22, §23).
- [x] Menú mobile devuelve el foco al toggle al cerrar con `Escape` (SPEC §23).
- [x] Sticky CTA respeta `safe-area-inset-bottom` en dispositivos con notch (SPEC §36).
- [x] Notificaciones de Monitoreo aparecen progresivamente (stagger) al entrar en viewport (SPEC §11, §19).
- [x] Objetivo táctil de los dots del slider ≥44px vía padding con `background-clip: content-box` (SPEC §23).
- [x] Contraste AA auditado por cálculo (2026-09-19): `ink-soft` 12.9:1, `ink-muted` 7.5:1, cian 10.6:1, `text-muted` 4.7:1. Se corrigió el CTA: `cta__text` al 88% (5.1:1 sobre la zona azul) y `.cta .eyebrow--light` a blanco translúcido 92% (el cian daba 3.63:1 sobre el degradado azul) (SPEC §23).
- [x] Responsive images (SPEC §24): `scripts/optimize_images.py` genera variantes `-800.webp`; 14 `<img>` de contenido usan `srcset`/`sizes` y el preload del hero usa `imagesrcset` (mobile descarga ~45 KB en lugar de 105 KB).
- [x] CLS del logo corregido (SPEC §24, §30): los atributos `width/height` del logo (512×512 cuadrado renderizado a 42px/40px por CSS) ahora coinciden con el render real; antes reservaban 160×44 y 150×42.
- [x] Hero §6: el producto ahora entra con `fade + translateY(26px) + scale(0.96 → 1)`, exactamente como pide el SPEC (antes solo translateY).
- [x] Menú mobile §23: focus trap nativo (Tab/Shift+Tab ciclan dentro del menú abierto sin salir al fondo).

### Hallazgos corregidos en esta auditoría

- [x] Faltaba `H2` en el slider (salto H1→H3): se añadió título `sr-only`.
- [x] El slider dependía de JS para mostrarse: se protegió el ocultamiento tras `.js`.
- [x] Íconos de "El problema" ahora inician neutros y pasan a cian en hover (SPEC §8).
- [x] Animación de entrada del logo en navbar (SPEC §6).
- [x] Ruta del asset `CASO DE USO  2.jpg` (doble espacio) corregida.

### Pendientes / decisiones abiertas

- [x] **WebP/AVIF** (SPEC §24): implementado. Se añadió `scripts/optimize_images.py` (Pillow) que genera derivados WebP en `assets/` con nombres limpios, mejorando el peso de ~1.7 MB a ~30–160 KB por pieza. Se generaron además `logo.webp/png`, favicons (`icon-64/180/192/512.png`) y una imagen social `og-image.png` (1200×630).
- [x] **Encuadre de imágenes**: los contenedores ahora respetan el `aspect-ratio` nativo de cada asset (sin recortes); marcos de slider y showcase usan `object-fit: contain` para piezas vehiculares.
- [ ] **Validación visual del contenido de los assets**: el mapeo se hizo por nombre de archivo; falta confirmar visualmente que cada imagen encaja en su sección.
- [x] **CTA "Solicitar demo"**: decisión (2026-09-18): mantener ancla a `#demo` por el momento (sin form/URLs inventadas). Abierto a futuro: form/WhatsApp cuando exista dato real de contacto.
- [ ] **Dominio/canonical**: canonical y OG apuntan a la URL de GitHub Pages; ajustar al dominio final.
- [ ] **Deploy**: habilitar GitHub Pages (rama `main`) para publicación.

## 11. Próximo paso

Merge `V.1` → `main`, habilitar GitHub Pages y continuar iteración sobre contenido/performance.

## 12. Checklist de validación visual (v1)

Revisar en **http://127.0.0.1:5500/** (desktop ≥1200 y mobile ≤767). Marcar cada sección.

| Sección | Desktop | Mobile | Notas / problemas detectados |
| --- | --- | --- | --- |
| Navbar (sticky, scroll-spy, menú) | ☐ | ☐ | |
| Hero (visual, tarjetas flotantes) | ☐ | ☐ | |
| Slider (4 slides, autoplay, flechas) | ☐ | ☐ | |
| Problema (3 cards, hover) | ☐ | ☐ | |
| Solución (dashboard + badges) | ☐ | ☐ | |
| Cómo funciona (timeline) | ☐ | ☐ | |
| Monitoreo (notifs + gráfico) | ☐ | ☐ | |
| Ingresos y egresos (imagen 1.09) | ☐ | ☐ | |
| Dashboard / tabs / contadores | ☐ | ☐ | |
| Beneficios (grid 3x2) | ☐ | ☐ | |
| Seguridad (escudo) | ☐ | ☐ | |
| Product experience (carousel) | ☐ | ☐ | |
| CTA (#demo) | ☐ | ☐ | |
| FAQ (details) | ☐ | ☐ | |
| Footer | ☐ | ☐ | |

### 12.1 Guía rápida por sección (qué revisar contra el SPEC)

- **Navbar** (§4): logo Prisma$ íntegro (sin recorte/deformación), sticky, fondo transparente → `rgba(0,18,60,.88)` + blur al scroll, scroll-spy marca sección activa, CTA "Solicitar demo" destacado, hamburguesa abre/cierra con Escape, links con subrayado animado, focus visible.
- **Hero** (§5–6): badge "CONTROL DE RECAUDO", H1 exacto en ≤3 líneas, subheadline y CTAs exactos (#demo / #solucion), composición con `hero.webp` sin pegarse como banner, 3 tarjetas flotantes (Pago recibido / + Tiempo real / Alerta), entrada animada suave, parallax de prismas/glows **sutil** (nada estilo PowerPoint).
- **Slider** (§7): 4 slides con copys exactos, autoplay 6 s con barra de progreso, pausa en hover, pausa en focus, arrows, dots, teclado ←/→, swipe en mobile, sin autoplay con reduced-motion, **slide 01 = pieza que se lea como seguridad** (usar §12.3).
- **Problema** (§8): H2 "Cuando el recaudo crece, también crece la complejidad.", 3 cards numeradas (01/02/03) con iconos lineales, hover → icono cian y card `translateY(-6px)`, sin estadísticas inventadas.
- **Solución** (§9): H2 "Prisma$ pone el control en tus manos.", texto izq / dashboard der., 5 badges (Tiempo real, Reportes, Clientes, Movimientos, Alertas).
- **Cómo funciona** (§10): H2 "Registrar tus cobros es muy fácil.", timeline horizontal desktop / vertical mobile, 5 pasos en orden exacto, línea que se ilumina al hacer scroll.
- **Monitoreo** (§11): H2 "Monitorea cada movimiento en tiempo real.", notificaciones (Pago recibido, Nuevo recaudo, Cliente pendiente, Movimiento registrado, Alerta) **apareciendo una a una** al entrar en viewport, mini gráfico de crecimiento, hover en cada notificación.
- **Ingresos y egresos** (§12): etiqueta "CONTROL FINANCIERO", H2 "Una visión más clara de tus movimientos.", interfaz con buen tamaño de viewport.
- **Dashboard / Reportes** (§13): H2 "Convierte tus datos en información útil.", tabs Resumen/Movimientos/Clientes/Reportes funcionando (click + teclado), todas las cifras **etiquetadas como demostrativas**, contadores y gráfico animado.
- **Beneficios** (§14): H2 "Todo bajo control.", grid 3×2 (6 cards), glass + borde + hover glow, sin sombras pesadas.
- **Seguridad** (§15): sección dark `#00123C`, escudo, copys "Información protegida / Visualización clara / Seguimiento de movimientos", sin afirmaciones no respaldadas.
- **Product experience** (§16): H2 "Todo lo que necesitas, desde una sola plataforma.", carousel con 5 cards (Monitoreo/Dashboard/Movimientos/Clientes/Reportes), 3 visibles desktop / 2 tablet / 1 mobile, siguiente card parcialmente visible, flechas prev/next (ocultas en mobile) y scroll con teclado ←/→.
- **CTA** (§17): gradiente navy→blue, prismas flotantes, H2 "Lleva tu recaudo al siguiente nivel.", glow sutil, 2 CTAs (#demo / #solucion).
- **FAQ**: 5 `details/summary` abriendo/cerrando bien.
- **Footer** (§18): logo, 4 columnas, bottom con copyright (año dinámico) + Politica/Términos/Contacto, sin URLs inventadas.
- **Sticky CTA mobile** (§36): aparece solo tras scroll > 700 y vista ≤ 767 px, no molesta.

### 12.2 Controles interactivos a probar (una sola pasada)

- Teclado completa: Tab recorre navbar → hero → slider → tabs → FAQ → footer con focus visible.
- Slider: flechas, dots, ←/→ , autoplay se pausa al hacer hover/focus.
- Tabs: click + flechas Home/End; `aria-selected` sincronizado.
- Escapa del menú mobile con `Escape` y vuelve el foco al toggle.
- `prefers-reduced-motion: reduce` → reveals visibles de inmediato, sin autoplay ni contadores animados.

### 12.3 Mapeo real de assets vs SPEC §29 (auditado 2026-09-19)

| Asset servido | Original | Usado en | Encaje §29 | Estado |
| --- | --- | --- | --- | --- |
| `hero.webp` | PRISMAS PUBLICIDAD 1 | Hero, CTA (§5, §17) | ✓ Hero | ✓ |
| `dashboard.webp` | dashboard.JPG | Slider 03, Solución, Showcase (§7, §9, §13, §16) | ✓ | ✓ |
| `process.webp` | REGISTRO COBROS ES MUY FACIL | Cómo funciona + Showcase "Reportes" (§10) | ✓ §10; §16 sin asignación (razonable) | ✓ |
| `monitor.webp` | TIEMPO REAL | Slider 02, Monitoreo, Showcase (§7, §11, §16) | ✓ | ✓ |
| `finance.webp` | TODA LA OPERACION EN UN SOLO LUGAR | Slider 04, Ingresos/Egresos, Showcase (§7, §12, §16) | ✓ §7/§16; §12 **verificar** que lea como "Ingresos y Egresos / Cuadre general" | ⚠ |
| `security.webp` | CASO DE USO.jpg | Slider 01 (§7) | ⚠ §29 lo destina a Problema/Solución, no al slider | ⚠ |
| `usecase.webp` | CASO DE USO 2.jpg | Showcase "Clientes" (§16) | ⚠ §29 lo destina a Solución, no al showcase | ⚠ |
| `logo.webp` / `logo.png` | LOGO.png | Navbar, Footer, OG | ✓ | ✓ |
| `icon-64/180/192/512.png` | ICONO VENTANA.png | Favicon / app icon | ✓ | ✓ |
| `promo.webp` | PROMOCION SLIDER | — | Apoyo de slider §7 (opcional) | Reservado |
| `compra.webp` | Compra Ahora.png | — | CTA/Hero §17 (opcional) | Reservado |
| `playstore.webp` | PLAYSTORE.png | — | CTA app §36 (opcional) | Reservado |
| `precios.webp` | PRECIOS.png | — | Sin sección de precios en spec (permitido NO usarlo) | Reservado |

**⚠ Pendiente de confirmación visual** (cambiar asset de sección solo tras ver la pieza):
1. `security.webp` (CASO DE USO.jpg) en el **slide 01**: ¿se lee como "pieza de seguridad"? Si no, reemplazar por `hero.webp` o una variante de escudo/seguridad.
2. `finance.webp` en **Ingresos y Egresos** (§12): ¿muestra realmente "Ingresos/Egresos + Cuadre general"? Si muestra otra operación, evaluar swap con `dashboard.webp`.
3. `usecase.webp` (CASO DE USO 2.jpg) en **Showcase "Clientes"**: ¿se lee como panel de clientes/seguimiento? Si encaja mejor en Solución (§9), reubicar.

Comportamiento esperado conocido:
- Slider y showcase usan `object-fit: contain`: piezas muy anchas (2.12) o casi cuadradas (1.09) pueden mostrar bandas laterales del fondo navy; es intencional para NO recortar arte con texto.
- Todas las cifras del dashboard son **demostrativas** y etiquetadas.
- No hay formulario: todos los CTA anclan a `#demo` (decisión 2026-09-18).

