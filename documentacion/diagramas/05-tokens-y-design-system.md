# 05 · Sistema de diseño y tokens

Paleta, tipografía y patrones visuales (SPEC §1/§26/§31). Definidos como
variables CSS en `css/styles.css`.

## Paleta principal (tokens CSS)

```mermaid
flowchart LR
    NAVY["--prisma-navy-950 #00123C<br/>base dominante"]
    BLUE["--prisma-blue-700 #0068FF<br/>énfasis"]
    CYAN["--prisma-cyan-400 #00D8FF<br/>CTAs e indicadores"]
    AQUA["--prisma-aqua #00E5FF<br/>líneas/gradientes"]
    YEL["--prisma-yellow #FFC21A<br/>acentos del logo"]
    WHT["--prisma-white #FFFFFF<br/>texto principal"]
    SURF["--prisma-surface #F4F9FF<br/>fondos claros (light)"]
    NAVY --> CYAN --> AQUA
    BLUE --> CYAN
    YEL -.-> NAVY
    WHT -.-> NAVY
    SURF -.-> NAVY
```

## Patrones componentes (cómo se construye la UI)

```mermaid
flowchart TD
    subgraph Base["Base"]
        T[Tokens de color/espacio/radio]
        TY[Tipografía clamp<br/>H1 42-76 · H2 32-54 · body 17-20]
    end
    subgraph Comp["Componentes"]
        BTN[Botones:<br/>primary grad-cyan / secondary / ghost]
        CARD[Glass cards · radius 12-20 · grid 24?]
        NAV[Navbar sticky + scroll-spy]
        DEV[Devices: dashboard / monitor / hero + tags]
        MOT[Motion: reveals, stagger, counters]
    end
    subgraph Decor["Decoración viva"]
        P[Prismas geométricos + partículas]
        ART[Arte SVG generado art-*.svg]
    end
    Base --> Comp
    Comp --> Decor
```

## Vocabulario de marca (grant)

- **Logo oficial**: siempre como asset, sin redibujar/recolorear/deformar.
- **Lenguaje**: "Centraliza · Monitorea · Decide" (badge hero).
- **Badges de estado**: `eyebrow--live` "· En vivo" (O-01) en secciones con
  datos vivos.
- **Identidad**: glassmorphism moderado, gradientes luminosos, líneas de
  conexión; navy + cian + acentos dorados.

### Notas de componentes clave
- `device--dashboard`: barra de ventana + pips (patrón "panel de control").
- `device--monitor`: bezel/muesca de app móvil (patrón "app tiempo real").
- `device--hero`: líneas ledger + fade (patrón "cuadre general").
- Cada device lleva un `device__tag` con su rol (tratamiento único, DUDE-17).