# Prisma$ — Control de Recaudo

Landing page premium para **Prisma$ Control de Recaudo**, una plataforma fintech diseñada para **registrar, monitorear y analizar** la operación de recaudo desde un solo lugar.

> "Controla tu recaudo. Toma decisiones en tiempo real."

---

## Ver en vivo

**[Prisma$ — Control de Recaudo (producción)](https://agutierrezg1995.github.io/Prisma--App-de-Recaudo/)**

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

El orden narrativo responde: **qué es → cómo se paga → qué problema resuelve → qué hace → beneficios → planes → contacto**.

1. **Hero** — propuesta de valor, CTAs y composición de producto.
2. **Descarga y pago** — app en Google Play / App Store y métodos de pago aceptados.
3. **El problema** — información dispersa, poca visibilidad y seguimiento manual.
4. **Product Experience** — carrusel en bucle infinito con las vistas de la plataforma.
5. **Solución** — Prisma$ pone el control en tus manos.
6. **Cómo funciona** — proceso de 5 pasos con línea de conexión animada.
7. **Monitoreo en tiempo real** — notificaciones, movimientos y mini gráficos.
8. **Cinta de capacidades (marquee)** — cinta de scrolling continuo.
9. **Beneficios** — carrusel en bucle infinito con 6 cards ilustradas.
10. **Seguridad** — sección dark enfocada en confianza.
11. **Hero Slider** — 4 slides con autoplay, arrows, dots, swipe y navegación por teclado.
12. **Planes** — 4 cards por número de rutas activas, con precio mensual y CTA a WhatsApp.
13. **Preguntas frecuentes** — 9 preguntas con respuesta breve.
14. **CTA / Contacto** — formulario de demo que arma el mensaje de WhatsApp.
15. **Footer** — navegación, legales y contacto.

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

Nombres de carpetas y archivos en **español**. Cada carpeta tiene una responsabilidad única.

```
Prisma-Landing Page/
├── index.html                    # Landing page (documento principal)
├── 404.html                      # Página 404 de marca
├── robots.txt                    # Directivas para buscadores
├── sitemap.xml                   # Mapa del sitio
├── .nojekyll                     # GitHub Pages: no procesar con Jekyll
│
├── estilos/
│   └── estilos.css               # Design system, componentes y animaciones
│
├── scripts/
│   └── principal.js              # Toda la interacción (carruseles, tema, formulario)
│
├── recursos/
│   └── imagenes/                 # Imágenes responsive (WebP) + íconos y logo
│
├── paginas/                      # Páginas secundarias
│   ├── solicitar-demo.html
│   ├── politica-de-privacidad.html
│   └── terminos.html
│
├── documentacion/                # Especificación, auditoría y diagramas
│   ├── README.md                 # Este documento
│   ├── SPEC.md                   # Especificación (fuente de verdad)
│   ├── DEUDA_TECNICA_Y_NOVEDADES.md
│   ├── EJECUCION_Y_AUDITORIA.md
│   ├── Novedades por Corregir UEX Cliente.md
│   ├── Observaciones del 26 de septiembre.md
│   ├── QA_FORMULARIO_DEMO.md
│   ├── datos de contacto.md
│   └── diagramas/                # Diagramas Mermaid clave
│
├── herramientas/
│   └── optimize_images.py        # Genera las variantes responsive de las imágenes
│
└── material-de-trabajo/          # Archivos originales del cliente (no se publican)
```

Los diagramas clave del proyecto viven en [`diagramas/`](diagramas/README.md) (se renderizan solos en GitHub).

> **Nota:** `material-de-trabajo/` y `herramientas/` no son necesarios para publicar el sitio.
> GitHub Pages publica la raíz del repositorio, así que ambas carpetas quedan accesibles
> en la URL pública aunque no se usen desde la landing.

### Datos de contacto del negocio

El número de WhatsApp y el correo **no están escritos en el HTML**: viven en
`scripts/principal.js` (constante `WA_NUMBER` y objeto `CONTACT`). Los enlaces con
`data-wa-cta="…"` o `data-wa-fab` se construyen por JS, de modo que cambiar el número
en un solo lugar actualiza toda la página.

---

## Cómo contribuir

1. Crea una rama descriptiva para tu cambio.
2. Mantén la paleta, tipografía y sistema de componentes definidos en `SPEC.md`.
3. Asegura accesibilidad, responsive y performance antes de abrir un PR.
4. Verifica que el contenido no incluya datos ficticios presentados como reales.

---

## Estado del proyecto

Definición de diseño y especificación completas (`SPEC.md`). Implementación **en producción (GO-LIVE)** con 25 pasadas de auditoría documentadas: experiencias autónomas (§42), animaciones constantes y piezas originales (§43) y diagramas del sistema (§44) entregados 2026-09-19. Se mantiene un registro de novedades y deuda técnica en `DEUDA_TECNICA_Y_NOVEDADES.md`.

---

## Licencia

Todos los derechos reservados — Prisma$.
