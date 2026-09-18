# Prisma$ — Control de Recaudo

Landing page premium para **Prisma$ Control de Recaudo**, una plataforma fintech diseñada para **registrar, monitorear y analizar** la operación de recaudo desde un solo lugar.

> "Controla tu recaudo. Toma decisiones en tiempo real."

---

## Descripción

Este proyecto implementa la experiencia web completa descrita en `SPEC.md`: una landing orientada a conversión que comunica **control, visibilidad, tecnología, seguridad y simplicidad operativa**.

El objetivo no es una plantilla genérica de SaaS, sino una plataforma fintech propia, moderna y sólida.

---

## Identidad visual

- Azul navy profundo como base dominante.
- Azul eléctrico, cian y azul luminoso para énfasis, CTAs e indicadores.
- Acentos amarillo/dorado provenientes del logo.
- Gradientes luminosos, prismas geométricos, glassmorphism moderado y líneas de conexión.

El **logo oficial de Prisma$** se utiliza como asset de marca sin redibujar, recolorear ni deformar.

### Paleta principal

| Token | Valor |
| --- | --- |
| `--prisma-navy-950` | `#00123C` |
| `--prisma-navy-900` | `#00183C` |
| `--prisma-navy-800` | `#00265C` |
| `--prisma-blue-900` | `#00398F` |
| `--prisma-blue-800` | `#0050F0` |
| `--prisma-blue-700` | `#0068FF` |
| `--prisma-blue-600` | `#0088FF` |
| `--prisma-cyan-500` | `#00BFFF` |
| `--prisma-cyan-400` | `#00D8FF` |
| `--prisma-cyan-300` | `#38D8F8` |
| `--prisma-aqua` | `#00E5FF` |
| `--prisma-white` | `#FFFFFF` |
| `--prisma-surface` | `#F4F9FF` |
| `--prisma-surface-2` | `#EAF5FF` |
| `--prisma-text-dark` | `#08213F` |
| `--prisma-text-muted` | `#5E7188` |
| `--prisma-yellow` | `#FFC21A` |

### Tipografía

Sans-serif moderna (**Inter** o **Manrope**, o equivalente), con jerarquía fluida mediante `clamp()`:

- H1: `clamp(42px, 5vw, 76px)`
- H2: `clamp(32px, 4vw, 54px)`
- H3: `24–32px`
- Body: `17–20px`
- Small: `13–15px`

---

## Secciones de la experiencia

1. **Navbar** — sticky, con scroll-spy y estado glass al hacer scroll.
2. **Hero** — propuesta de valor, CTAs y composición de producto.
3. **Hero Slider** — 4 slides con autoplay, arrows, dots, swipe y navegación por teclado.
4. **El problema** — información dispersa, poca visibilidad y seguimiento manual.
5. **Solución** — Prisma$ pone el control en tus manos.
6. **Cómo funciona** — proceso de 5 pasos con línea de conexión animada.
7. **Monitoreo en tiempo real** — notificaciones, movimientos y mini gráficos.
8. **Ingresos y egresos** — control financiero y cuadre general.
9. **Dashboard / Reportes** — datos demostrativos y tabs interactivos.
10. **Beneficios** — grid 3x2 con micro-interacciones.
11. **Seguridad** — sección dark enfocada en confianza.
12. **Product Experience** — carousel de producto con scroll horizontal.
13. **CTA principal** — conversión con prismas flotantes.
14. **Footer** — navegación, legales y contacto.

---

## Principios de diseño

- **Mobile first**, responsive completo en breakpoints 320–767 / 768–1199 / 1200+ / 1440+.
- Container máximo de 1200–1280px y grid de 12 / 8 / 4 columnas.
- Border radius moderado (12–20px; hero y cards de producto 20–28px).
- Motion design estratégico con duraciones de 300–800ms, sin scroll hijacking.
- Accesibilidad **WCAG 2.2 AA**: HTML semántico, focus visible, `alt` text, `aria` labels y soporte de `prefers-reduced-motion`.
- Performance: lazy loading, imágenes responsive, preload del hero y sin CLS.

---

## Contenido y datos

- No se utilizan testimonios ficticios, clientes, partners, certificaciones ni métricas empresariales inventadas.
- Las cifras mostradas en mockups son **datos demostrativos**.
- No se declaran afirmaciones técnicas de seguridad no confirmadas (por ejemplo "100% seguro" o "seguridad bancaria").
- No se inventan URLs ni perfiles de redes sociales.

---

## Estructura del repositorio

```
Prisma-Landing Page/
├── README.md
├── SPEC.md
└── Imagenes para landing/     # Assets gráficos y de marca
```

---

## Cómo contribuir

1. Crea una rama descriptiva para tu cambio.
2. Mantén la paleta, tipografía y sistema de componentes definidos en `SPEC.md`.
3. Asegura accesibilidad, responsive y performance antes de abrir un PR.
4. Verifica que el contenido no incluya datos ficticios presentados como reales.

---

## Estado del proyecto

Definición de diseño y especificación completas (`SPEC.md`). Implementación de la experiencia visual en curso.

---

## Licencia

Todos los derechos reservados — Prisma$.
