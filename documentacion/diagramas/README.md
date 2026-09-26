# Diagramas — Prisma$ Landing Page

Índice de los diagramas clave para entender cómo funciona el proyecto
(corresponden a `SPEC.md` §44). Están en **Mermaid** y se renderizan solos en
GitHub (o en `mermaid-live-editor` / VS Code + extensión Mermaid).

| Diagrama | Qué responde |
| --- | --- |
| [`01-arquitectura.md`](01-arquitectura.md) | ¿Qué archivos hay y cómo se enlazan? ¿De dónde salen las páginas? |
| [`02-secciones-y-narrativa.md`](02-secciones-y-narrativa.md) | ¿Cómo está organizada la landing y qué mensaje narra cada sección? |
| [`03-flujo-de-conversion.md`](03-flujo-de-conversion.md) | ¿Cómo llega un visitante a la demo/WhatsApp? ¿Dónde están los CTA? |
| [`04-sistema-de-animacion.md`](04-sistema-de-animacion.md) | ¿Qué se mueve, cómo y bajo qué guardas (reduced-motion, §19/§23/§35)? |
| [`05-tokens-y-design-system.md`](05-tokens-y-design-system.md) | ¿Qué paleta/tokens y patrones visuales componen el sistema? |

## Convenciones que asumen los diagramas

- **SPEC §35**: nada aquí es información real del producto; las cifras son
  demostrativas.
- **Guardas de motion**: todas las animaciones respetan
  `prefers-reduced-motion` y solo mueven `transform`/`opacity`/filtros
  (SPEC §19/§23/§35).
- **Números de pasada**: `DEUDA_TECNICA_Y_NOVEDADES.md` y
  `EJECUCION_Y_AUDITORIA.md` llevan el registro por pasada (hasta la 25).