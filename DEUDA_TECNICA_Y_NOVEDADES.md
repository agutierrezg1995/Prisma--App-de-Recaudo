# Novedades y deuda técnica — Prisma$ Landing Page

Fecha de corte: **2026-09-19** · Rama: `main` · Servidor local: `http://127.0.0.1:5500/` · **Producción: https://agutierrezg1995.github.io/Prisma--App-de-Recaudo/** (GO-LIVE)

> Documento de acompañamiento de `EJECUCION_Y_AUDITORIA.md`. Registra lo entregado en la sesión y las
> **desviaciones detectadas que generan deuda técnica** (cosas diferidas, pendientes de decisión o de validación
> visual humana). Nada aquí se presenta como información real del producto (SPEC §35).

---

## 1. Novedades — qué se avanzó en esta sesión

| Commit | Tipo | Contenido |
| --- | --- | --- |
| `431d5ff` | feat(perf-a11y) | Responsive images (`srcset`/`sizes` + variantes `-800w`, 14 imgs + preload con `imagesrcset` → LCP mobile ~45 KB), focus trap menú mobile, contraste CTA AA, dots 44 px, carousel showcase con flechas/teclado/`aria-current`, restore focus en Escape, hero scale §6, CLS del logo corregido, notifs staggered. |
| `7e730db` | docs(audit) | Cierre de §6.3 (accesibilidad) y §6.4 (SEO, 7/7): semántica, JSON-LD `SoftwareApplication`+`Offer`+`FAQPage(5)`, outline 1 H1 / 12 H2. |
| `bc5f6a8` | docs(audit) | Verificación §26 componentes/design system, §27 botones, §34 copys, §4 navbar, §36 sticky CTA. |
| `74db568` | docs(audit) | Matriz de aceptación §37 mapeada a evidencia (12/15 cerradas desde código). |
| `e519a27` | feat(multipage) | Páginas legales `pages/politica-de-privacidad.html` + `pages/terminos.html` con design system; footer index.html enlaza páginas reales (antes `href="#"`). |
| *sin commit* | fix(a11y-css-seo) | Tokens inexistentes en `.legal` corregidos (`--text-muted`→`--ink-muted`, `--prisma-cyan-200`→`--prisma-cyan-300`); `.skip-link` añadido a las 2 páginas legales (WCAG 2.4.1); `.section--legal` despeja la navbar fija; `robots.txt` + `sitemap.xml` creados (DUDE-09). Verificado: 8/8 rutas 200, `node --check` OK. |
| *en curso* | feat(404-seo) | `404.html` de marca (design system, `noindex`), limpieza de 10 assets WebP sin referencias, cierre DUDE-06 (patrón de CTA), integridad de refs 0 errores en 4 docs. |
| *en curso* | style(a11y) | `bg-decor` añadido a las 2 páginas legales (consistencia §1/§31 con index/404); verify 200 local. |
| *auditoría* | audit(qa) | Sin cambios: QA estático global (ids, H1, alt, nombres accesibles), contratos JS↔HTML (23 tokens) y JS↔CSS (7 estados), contraste AA 17/17 ≥4.5:1. |
| `c0229b3` | deploy | **GO-LIVE**: GitHub Pages activado por el usuario; rebuild disparado con commit vacío; producción verificada: 200, crawl 86/86 objetivos OK, canonical/title/og-image/robots/sitemap/404/legales servidos. `main`=`V.1`=`origin/main` (0/0). |
| *en curso* | audit(contracts) | Novena pasada, sin cambios: contrato iconos 19/19, variantes `-800w` y favicons 200 en prod, `<head>` 4 docs OK, robots→sitemap→3 `<loc>` en vivo. |
| *en curso* | docs(ux-retos) | Adopción de los 9 retos del titular: SPEC §39 adicional (A1..A9) + DUDE-11..19 en deuda, fases A→D; análisis con evidencia (CTAs→`#demo`, paneles 19/13 refs). |
| `b91f217` | feat(demo-form) | **Fase A v1.2**: formulario WhatsApp (`#demo` + `pages/solicitar-demo.html`), todos los CTA demo→página real, footer Contacto→página, sitemap 4ª URL, verificado 0 errores / 200×5 local. Pendiente: `WA_NUMBER` `[REEMPLAZAR]`. |
| `ff48729` | feat(content) | **Fase B v1.2**: FAQ 5→9 (JSON-LD 9/9 verificado) + `CardDetail` "por qué y para quién" en 9 cards (Problema+Beneficios). Showcase sin detalle (decisión documentada). |
| `e886b7c` | deploy | Rebuild trigger: los pushes de Fase A/B no surfacieron al CDN; con este trigger **producción queda al día**: FAQ 9/9, details 9/9, `pages/solicitar-demo.html` 200. Causa probable: GitHub Actions desactivado o deploy no disparado en el batch V.1+main; se resolverá en Fase C/DUDE-09 al revisar la config de Pages. |
| `26ee475` | feat(percepcion) | **Fase C v1.2**: slider v2 (contador 01/04, progreso eased, drift 1→1.03 no-preference), paneles con tratamiento único (§39.7 tags/bezel/ledger/window), shimmer CTA + elevación timeline (§39.4). Verificado local 8/8. |
| `d1ccbd2` | feat(contacto) | **Fase D v1.2 (estructura + WA real)**: bloque de contacto del footer (`data-contact-block`), WhatsApp fab flotante (`wa-fab` + `data-wa-fab`) y redes (`data-social`) entregados con iconos SVG lineales nuevos (message-circle, phone, mail, instagram, linkedin, facebook). **`WA_NUMBER` real activado: `573183366064`.** Correo `[REEMPLAZAR]` y `social[]` vacíos por entonces (§39.8, §35). |
| `4d9f6a2` | deploy | **REBUILD → producción al día con Fase C+D**. Previo a esto, producción quedó detenida en Fase A+B (deploy `e886b7c`); gap detectado y cerrado: push `d1ccbd2` + trigger. Verificado en vivo: slider contador/progreso, tags de panel, contacto+fab presentes; `main.js` sirve WA real. |
| `1300adc` | feat(contacto) | **Fase D — correo real activado** en `CONTACT`: `davidgrijalba8@gmail.com` (dato de `datos de contacto.md`, 2026-09-19). Empieza a renderizar el enlace mailto del footer. Redes `social[]` siguen vacías (sin handles reales). |
| `1cb9c90` | deploy | REBUILD con correo real en `CONTACT`; verificado en producción (`davidgrijalba8@gmail.com` + `573183366064` en `js/main.js` 200). `main`=`V.1`=origin (0/0). |
| `ee1b1f3` | feat(content) | **SPEC §39.6 completado**: CardDetail en **5 badges de Solución** (§9) que faltaban (el §39.6 pide Problema + Solución badges + Beneficios; la Fase B solo cubrió 9 cards). Además `aria-expanded` en `<summary>` y **Escape cierra** gestionado en JS para los **14** `data-card-detail` (9 cards + 5 chips), cumpliendo la aceptación del §39.6 (antes ningún `<details>` de card lo manejaba). CSS: `.chip__detail` con panel glass flotante (no rompe layout) + guardas de overflow ≤520 px. Verificado: `node --check` OK · CSS `{455}455` · refs 0 · H1 1 · ids 0 dup · iconos 20/20. |

**Resultado del ciclo v1:** todo lo verificable sin pantalla está cubierto, commiteado y **desplegado en producción** (Fase C+D al día, 2026-09-19). WhatsApp y correo reales activos. Restan: **validación visual humana** (§12, §12.3, §37), handles de redes sociales (DUDE-18) y decisiones de negocio DUDE-01 (legales) y DUDE-09 (analytics).

---

## 2. Deuda técnica — desviaciones activas

Formato de severidad: **ALTA** (bloquea publicación/deploy) · **MEDIA** (impacta calidad/mantenimiento) · **BAJA** (pulido).

### DUDE-01 · Contenido legal en plantilla `[REEMPLAZAR]` — ALTA
- **Estado:** `pages/*.html` usan texto esqueleto con campos `[REEMPLAZAR]` y nota de no-asesoría jurídica.
- **Impacto:** no debe publicarse como política/condiciones definitivas.
- **Plan:** el titular del servicio completa y valida con asesor legal; luego se eliminan las notas.

### DUDE-02 · CTA `#demo` sin mecanismo de captura de lead — CERRADA (2026-09-19)
- **Estado:** resuelta con la Fase A (v1.2): existe formulario de demo (SPEC §39.1) y los CTA primarios llevan a la página real `pages/solicitar-demo.html` (§39.9). `WA_NUMBER` real activado (`573183366064`) → el funnel captura intención vía WhatsApp.
- **Impacto:** el funnel de conversión captura intención (composición WhatsApp) con número real del titular.
- **Plan:** QA manual de la ruta WhatsApp en móvil por el titular.

### DUDE-03 · Canonical/OG con URL provisional del repo GH — CERRADA (2026-09-19)
- **Estado:** ~~provisional~~ → **confirmada como URL final de despliegue**: `https://agutierrezg1995.github.io/Prisma--App-de-Recaudo/…` (repo `agutierrezg1995/Prisma--App-de-Recaudo`, default branch `main`, misma URL en canonical/OG/sitemap). Sin cambios de código al publicar.
- **Impacto:** nulo en el target actual.
- **Plan:** solo si más adelante se usa un dominio personalizado, reemplazar la URL base en los 3 documentos (index + 2 legales) y el sitemap.
- **Nota:** verificación del deploy el 2026-09-19 → responde **404** hasta que el usuario activó Pages; desde la **octava pasada** el sitio está **GO-LIVE**: `https://agutierrezg1995.github.io/Prisma--App-de-Recaudo/` 200 + crawl 86/86.

### DUDE-04 · Asignación de 3 assets fuera del encaje §29 — MEDIA (pendiente visual)
- **Estado:** `security.webp` (slider 01), `finance.webp` (Ingresos/Egresos), `usecase.webp` (Showcase Clientes).
- **Impacto:** la pieza puede no leerse con el significado que le corresponde a la sección.
- **Plan:** validación visual humana (§12.3); si no encaja, reasignar o recortar variante dedicada.

### DUDE-05 · Slider/showcase con `object-fit: contain` → bandas laterales — BAJA
- **Estado:** piezas 2.12:1 (dashboard, security) y 1.09:1 (finance) muestran bandas del fondo navy.
- **Impacto:** estético intencional (no recortar arte con texto), pero puede verse "vacío" en ciertas piezas.
- **Plan:** opcional derivar variantes recortadas 16:9 sin texto crítico en bordes.

### DUDE-06 · Brand/copy: "Solicitar demo" vs "Solicitar una demo" — CERRADA (2026-09-19)
- **Estado:** resuelta. Se adopta el patrón recomendado: **corto** "Solicitar demo" en zonas compactas (nav desktop, sticky mobile ≤767, menú mobile) y **largo** "Solicitar una demo" en hero/CTA principales (§4/§27/§36).
- **Impacto:** consistencia de marca resuelta sin duplicar patrones de CTA.
- **Plan:** aplicar el mismo criterio en cualquier CTA futuro (forms, WhatsApp, etc.).

### DUDE-07 · Rama `V.1` desactualizada — CERRADA (2026-09-19)
- **Estado:** ~~`main` adelante vs `V.1`~~ → **resuelto**: `V.1` fast-forward a `main` (`1f3f23a`), ambas ramas idénticas (`0 → 0`). Sin divergencia.
- **Impacto:** sin riesgo de trabajo obsoleto; ambas ramas apuntan al mismo commit.
- **Plan:** mantener `V.1` como etiqueta de hito; si deja de usarse, eliminarla en el deploy.

### DUDE-08 · Duplicación manual de navbar/footer entre páginas — BAJA (mantenimiento)
- **Estado:** 3 HTML con header/footer copiados (sin build tooling ni partials).
- **Impacto:** un cambio de nav hay que replicarlo a mano en 3 sitios.
- **Plan:** solo si crece el número de páginas → introducir un SSG liviano (11ty) o plantillas server-side (PHP).
  Descartado el include por JS/fetch por a11y y no-JS (SPEC §23).

### DUDE-09 · Analytics y verificación de consola de buscadores — BAJA (opcional)
- **Estado:** `sitemap.xml` (**4 URLs**: index + 2 legales + `solicitar-demo`, dominio confirmado DUDE-03) y `robots.txt` **creados** (2026-09-19, cierre del plan SEO). Falta solo la etiqueta de analytics/Desde-consola cuando el negocio lo pida.
- **Impacto:** no se puede medir conversión ni ver indexación hasta añadir analytics.
- **Plan:** añadir GA/Desde Analytics cuando el negocio lo pida; confirmar dominio final en sitemap (DUDE-03).

### DUDE-10 · Soporte retro de CSS moderno sin polyfills — BAJA
- **Estado:** se usa `backdrop-filter`, `env(safe-area-inset-bottom)`, `aspect-ratio`, `contain`/`intrinsic`.
- **Impacto:** en navegadores antiguos degrada con gracia (fondo sin blur, sin spacer inset); no rompe layout funcional.
- **Plan:** documentado; no requiere acción salvo exigencia puntual de navegadores legados.

### Bloque C · Retos de calidad UX (SPEC §39 adicional, 2026-09-19)
> Los 9 retos del titular se documentan en `SPEC.md` §39.1–§39.9 con criterios de aceptación y guardas §19/§23/§27/§35. Cada uno baja a deuda con su plan:

### DUDE-11 · Formulario de solicitud de demo — CERRADA (2026-09-19, WA real activado)
- **Estado:** implementado en `#demo` (index) y `pages/solicitar-demo.html` (SPEC §39.1/§39.9): campos nombre/negocio/sector/mensaje, validación nativa + `:user-invalid`, `role=status`, y envío que compone mensaje de WhatsApp (wa.me) en el dispositivo. **`WA_NUMBER` real configurado: `573183366064`** (commit `d1ccbd2`) → el envío abre WhatsApp del negocio, ya no el aviso provisional.
- **Impacto:** conversión funcional de extremo a extremo; sin backend.
- **Plan:** QA manual de la ruta WhatsApp en móvil por el titular (aprobación §12).

### DUDE-12 · Hero Slider v2 (profesionalización) — CERRADA (2026-09-19)
- **Aplicado:** crossfade direccional (translateX+opacidad), contador visible `01/04` (`data-slider-count`, `padStart`), progreso con easing `cubic-bezier(.22,1,.36,1)`, temporizador reinicia en cada navegación (resetProgress), drift del arte 1→1.03 en 8s solo con `no-preference`; sin autoplay bajo reduced-motion (play() early-return). Copys §7 intactos.

### DUDE-13 · CTA end-to-end (respuesta visible) — CERRADA (2026-09-19)
- **Plan:** todos los "Solicitar demo" (nav desktop/mobile, hero, sección CTA, sticky, 404, legales) apuntan a `pages/solicitar-demo.html`; secundarios a anclas con sección que responde; cero `href="#"`. Sin formulario no había cierre → resuelto con DUDE-11/19.

### DUDE-14 · Motion "profesional que enganche" — CERRADA (2026-09-19)
- **Aplicado:** stagger de reveals y contadores con easing (verificados: `1-Math.pow(1-p,3)` = easeOutCubic) + shimmer 1 pasada en CTA primario (`::before` 0.7 s, `no-preference`) + elevación hover en cards, timeline y showcase; todo transform/opacity/GPU, ≤800 ms. Guardas §19 respetadas (sin casino/hijack).

### DUDE-15 · FAQ ampliada — CERRADA (2026-09-19)
- **Plan:** 5→9 preguntas (para quién, reportes, experiencia contable, acceso); JSON-LD sincronizado 9/9 (verificado); respuestas ≤60 palabras, tono §34, sin precios ni promesas inventadas.

### DUDE-16 · CardDetail "por qué / para quién" — CERRADA (2026-09-19)
- **Plan:** `<details>` accesible en Problema + **Solución badges** + Beneficios con `focus-visible`; textos del spec. **Completado 2026-09-19 (`ee1b1f3`)**: la Fase B solo cubrió 9 cards (Problema 3 + Beneficios 6); la revisión detectó que el SPEC §39.6 también exige **Solución badges** → se añadió a los 5 chips (§9) con panel glass flotante. Total **14 `data-card-detail`** con `aria-expanded` en `<summary>` y cierre con Escape gestionado en JS (aceptación §39.6). Decisión: Showcase sin CardDetail (carousel ya descriptivo; se evitaría hinchar).

### DUDE-17 · Redundancia visual de paneles — CERRADA (2026-09-19)
- **Estado:** `dashboard.webp` (19 refs) y `monitor.webp` (13 refs) se repiten; el titular ve "2 paneles de monitoreo".
- **Aplicado:** tratamiento único por sección — Slider (contenido redondeado + drift), Solución `device--dashboard` (barra de ventana + pips + tag "Panel de control"), Monitoreo `device--monitor` (bezel/muesca de app + tag "Tiempo real"), Financiero `device--hero` (líneas ledger + fade + tag "Cuadre general"), Showcase (fade inferior en cards). Confirma `finance.webp` como "cuadre" en §12 (DUDE-04).
- **Vínculo:** entronca con DUDE-04 y DUDE-05.

### DUDE-18 · Footer contactos + WhatsApp fab + redes — MEDIA (parcial: WA + correo activos; sociales pendientes)
- **Estado:** estructura e iconos **entregada 2026-09-19** (pasada 14): bloque de contacto en footer (`data-contact-block`), fab WhatsApp (`wa-fab`/`data-wa-fab`), enlace de correo (`data-wa-email` → `footer__email`) y lista de redes (`data-social`) presentes en las 5 páginas; iconos SVG lineales en `ICONS`. **Datos reales activados el 2026-09-19:** `WA_NUMBER = 573183366064` (`d1ccbd2`) y `email = davidgrijalba8@gmail.com` (`1300adc`) → el bloque y el fab ya se renderizan en producción (JS remueve `hidden`). Verificado en vivo.
- **Plan:** el negocio completa `CONTACT.social` (`[{icon,label,url}]`) con handles reales de IG/FB/LinkedIn cuando existan — no están en `datos de contacto.md` (2026-09-19). Los números de soporte 3166540824 y 3041034037 quedan documentados como soporte adicional, sin uso en página (decisión: solo WhatsApp principal en el contacto público). Nunca una URL inventada (§35).

### DUDE-19 · Página/solicitar-demo real — CERRADA (2026-09-19)
- **Plan:** `pages/solicitar-demo.html` creada con form (DUDE-11), marca, nav, footer, canonical/OG/Twitter, breadcrumb, skip-link, `<noscript>` honorable y sitemap con 4ª URL (priority 0.9). CTA primarios apuntan a ella. Sin paginación por diseño (one-page + páginas de soporte).

---

## 3. Decisiones registradas (para no reinterpretar dos veces)

1. CTA sin formulario → ancla `#demo` (2026-09-18).
2. GitHub Pages **omitido** por ahora (2026-09-18); canonical/OG provisionales apuntan al repo → **GO-LIVE 2026-09-19** (octava pasada).
3. Slider con `object-fit: contain` (no recortar arte) (2026-09-19).
4. Contenido legal como plantilla explícita, nunca como versión final (2026-09-19).
5. Estructura multipágina sin build tooling; rutas relativas (2026-09-19).
6. Los 9 retos de calidad del titular se adoptan como **SPEC §39 adicional** y se ejecutan por fases A→D (2026-09-19).
7. Formulario de demo **estático** (composición WhatsApp, sin backend) hasta que exista endpoint real (2026-09-19).
8. WhatsApp fab y redes: solo con datos reales `[REEMPLAZAR]`; nunca una URL inventada (§35) (2026-09-19).
9. **Datos de contacto reales aplicados** (2026-09-19): WhatsApp principal `573183366064` y correo `davidgrijalba8@gmail.com` (fuente `datos de contacto.md`). Redes sociales siguen vacías hasta recibir handles reales. Números de soporte (3166540824, 3041034037) registrados como adicionales, no publicados.

---

## 4. Comandos útiles

- Servidor local: `python -m http.server 5500 --bind 127.0.0.1`
- Validación JS: `node --check js/main.js`
- Verificar páginas: `curl -s -o /dev/null -w "%{http_code}\n" http://127.0.0.1:5500/{index.html,pages/politica-de-privacidad.html}`
- Dif entre ramas: `git rev-list --left-right --count main...V.1`
- Datos de contacto (DUDE-18): editar `CONTACT` en `js/main.js` (`wa`, `email`, `social[]`). Estado 2026-09-19: `wa` y `email` reales activos; `social[]` pendiente de handles reales.