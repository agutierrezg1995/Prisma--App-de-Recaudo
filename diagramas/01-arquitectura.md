# 01 · Arquitectura de archivos

Diagrama de la estructura y las dependencias entre los archivos del sitio.

```mermaid
flowchart TD
    subgraph root["Raíz del repositorio"]
        I[index.html]
        FOUR[404.html]
        ROB[robots.txt]
        SM[sitemap.xml]
    end

    subgraph css["css/"]
        S[styles.css<br/>design system + animaciones]
    end

    subgraph js["js/"]
        J[main.js<br/>ICONS + interacciones + rutinas vivas]
    end

    subgraph assets["assets/"]
        W["imágenes *.webp + -800w"]
        ART["arte generado art-*.svg"]
    end

    subgraph pages["pages/"]
        LD["politica-de-privacidad.html"]
        TT["terminos.html"]
        DEMO["solicitar-demo.html"]
    end

    subgraph docs["Documentación"]
        SPEC[SPEC.md]
        DND[DEUDA_TECNICA_Y_NOVEDADES.md]
        EXE[EJECUCION_Y_AUDITORIA.md]
        DIAG[diagramas/*.md]
    end

    I --> S
    I --> J
    I --> W
    I --> ART
    J --> W
    J --> ART

    LD --> S
    LD --> J
    TT --> S
    TT --> J
    DEMO --> S
    DEMO --> J

    FOUR --> S
    FOUR --> J

    ROB -.-> SM
    SM -.-> I
    SM -.-> LD
    SM -.-> TT
    SM -.-> DEMO

    SPEC -.-> DIAG
    DND -.-> EXE
```

## Flujo de un visitante

```mermaid
sequenceDiagram
    participant V as Navegador
    participant GH as GitHub Pages
    V->>GH: GET /
    GH-->>V: index.html (HTML semántico, sin JS crítico)
    V->>GH: GET css/styles.css + js/main.js
    V->>GH: GET assets/*.webp (lazy, srcset -800w)
    Note over V,GH: JS enciende reveal, contadores,<br/>autoplay y rutinas vivas (§42/§43)
    V->>GH: GET pages/*.html (rutas relativas)
```

### Notas
- Multipágina sin build tooling: los `<header>`/`<footer>` se replican a mano
  (DUDE-08). Rutas relativas (decisión 5).
- Íconos: set SVG lineal inline en `main.js` (`ICONS`) renderizado vía
  `data-icon`.
- Despliegue: rama `main` → GitHub Pages
  (`https://agutierrezg1995.github.io/Prisma--App-de-Recaudo/`, GO-LIVE).