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

## 2. Decisiones de arquitectura (propuesta a confirmar)

> `SPEC.md` define componentes y tokens, pero **no fija framework**. Se propone un stack alineado a los requisitos de performance, SEO y componentes.

| Área | Propuesta | Motivo |
| --- | --- | --- |
| Framework | **Next.js (App Router) + React + TypeScript** | SSR/SSG, SEO, componentes, preload del hero. |
| Estilos | **Tailwind CSS + CSS variables** | Design tokens del spec como variables. |
| Animación | **CSS + IntersectionObserver**, `framer-motion` si se justifica | Reveals y parallax sin sobrecargar. |
| Iconos | **Lucide** (SPEC §28) | Lineales, un solo estilo. |
| Imágenes | **`next/image`** o `<picture>` + WebP/AVIF | Responsive images, lazy, sin CLS. |

**Regla de decisión:** si el entorno del cliente ya tiene un stack definido, se adapta el plan; el spec manda sobre la estética, no sobre el framework.

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
- [ ] Contraste mínimo AA (texto normal 4.5:1, grande 3:1).
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

- [ ] WebP/AVIF + responsive images.
- [ ] `lazy loading` en imágenes fuera del hero.
- [ ] Preload solo del hero.
- [ ] Sin videos pesados.
- [ ] Blur controlado (evitar múltiples simultáneos costosos).
- [ ] Sin CLS (reservar dimensiones).
- [ ] Primera pantalla rápida (LCP objetivo).

### 6.6 Auditoría de contenido (anti-datos ficticios, SPEC §35)

- [ ] Sin testimonios, clientes, partners, certificaciones ni integraciones inventadas.
- [ ] Cifras de mockups etiquetadas como **demostrativas**.
- [ ] Sin afirmaciones de seguridad no respaldadas ("100% seguro", "impenetrable", "seguridad bancaria").
- [ ] Sin URLs ni redes sociales inventadas en el footer.

### 6.7 Auditoría UX (mini-heurística)

- [ ] Cada sección responde una sola pregunta (§1).
- [ ] CTA visible sin hacer scroll excesivo en mobile.
- [ ] Botón sticky "Solicitar demo" solo tras avanzar en la página (SPEC §36).
- [ ] Sin scroll hijacking ni sobrecarga cognitiva.
- [ ] Espacio negativo suficiente (SPEC §32).

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

## 10. Próximo paso

Confirmar el stack (§2) y ejecutar **F0** para habilitar las fases siguientes.
