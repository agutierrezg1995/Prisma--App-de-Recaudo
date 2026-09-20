# 04 · Sistema de animación y guardas

La página combina motion de entrada (scroll reveals), movimiento pausable y
**rutinas vivas constantes** (§42 G-01…G-10, §43 H-01…H-09). Todo pasa por
una puerta de guardas (SPEC §19/§23/§35).

## Puerta de guardas (toda animación)

```mermaid
flowchart TD
    A[Animación candidata] --> B{¿Movimiento: transform / opacity /<br/>fondo / box-shadow?}
    B -- no --> X[Descartada<br/>§19: sin layout/hijack/casino]
    B -- sí --> C{¿Duración ≤800 ms,<br/>o es ambiente pausable?}
    C -- no --> X
    C -- sí --> D{¿prefers-reduced-motion?}
    D -- reduce --> OFF[desactivada<br/>CSS global §reduce + JS gated]
    D -- no-preference --> E{¿Contenido real,<br/>sin datos ficticios §35?}
    E -- no --> X
    E -- sí --> ON[Activada<br/>decoración aria-hidden]
```

## Rutinas vivas constantes (§42/§43)

```mermaid
flowchart LR
    subgraph CSS["CSS-only · no-preference"]
        H3[Barrido cuadre 7s]
        H4[Respiro CTA 9s]
        H5[Satélite orbital 14s]
        H6[Pulso chips 3s]
        H7[Stats respiran 4s]
        H8[Brillo timeline 3s]
        H9[Deriva footer 18s]
        O1[Ping badge En vivo 2.2s]
    end
    subgraph JS["JS · !reduceMotion + document.hidden"]
        H1[Feed en vivo Monitoreo · setInterval 1.6s · is-live]
        S2[Sparkles · Element.animate · se auto-eliminan]
        S4[Aurora drift · rAF · pausa al mover puntero]
        S8[Scanline promo · rAF 5.2s · pausa hover]
        S10[Topbar cíclico 4.6s · hero tour 5.2s]
    end
    subgraph AMB["Ambientes CSS old-style"]
        M[Marquee 32s · pausa hover]
        SH[Showcase autoplay 5.6s · pausa hover/foco]
    end
```

## Verificación que se corre en cada pasada

```mermaid
flowchart LR
    V1[node --check js/main.js]
    V2[Balance de llaves CSS]
    V3[1 H1 · 0 ids duplicados]
    V4[alt 100% · refs 0 rotas · iconos únicos]
    V5[contratos JS &lt;-&gt; HTML / CSS]
    V1 --> V3 --> V4 --> V5
    V2 --> V3
```

### Guardas y restricciones
- Todas las rutinas JS se apagan con `prefers-reduced-motion` y con pestaña
  oculta (`document.hidden`).
- Solo `transform`/`opacity`/filtros (más `background`/`box-shadow` en §43)
  → sin reflow, GPU-friendly.
- Los SVG generados (`art-*.svg`) animan internamente solo con
  `no-preference` gracias al CSS global §reduce.
- Marcos de duración: interactivos ≤800 ms; ambientes pausables hasta 32 s.