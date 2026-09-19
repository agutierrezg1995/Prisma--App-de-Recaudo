# Novedades y deuda técnica — Prisma$ Landing Page

Fecha de corte: **2026-09-19** · Rama: `main` · Servidor local: `http://127.0.0.1:5500/`

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

**Resultado del ciclo v1:** todo lo verificable sin pantalla está cubierto y commiteado. Solo resta la
**validación visual humana** (§12 pantalla a pantalla, §12.3 assets ⚠, §37 percepción).

---

## 2. Deuda técnica — desviaciones activas

Formato de severidad: **ALTA** (bloquea publicación/deploy) · **MEDIA** (impacta calidad/mantenimiento) · **BAJA** (pulido).

### DUDE-01 · Contenido legal en plantilla `[REEMPLAZAR]` — ALTA
- **Estado:** `pages/*.html` usan texto esqueleto con campos `[REEMPLAZAR]` y nota de no-asesoría jurídica.
- **Impacto:** no debe publicarse como política/condiciones definitivas.
- **Plan:** el titular del servicio completa y valida con asesor legal; luego se eliminan las notas.

### DUDE-02 · CTA `#demo` sin mecanismo de captura de lead — MEDIA
- **Estado:** todos los CTA anclan a la sección `#demo` (decisión registrada 2026-09-18). No hay formulario.
- **Impacto:** el único funnel de conversión no captura datos.
- **Plan:** definir canal (formulario/WhatsApp/email) como siguiente feature; requiere decisión del negocio.

### DUDE-03 · Canonical/OG con URL provisional del repo GH — ALTA (solo al desplegar)
- **Estado:** `index.html` y páginas legales usan `https://agutierrezg1995.github.io/Prisma--App-de-Recaudo/…`.
- **Impacto:** si se despliega en otro dominio, canonical/OG quedan apuntando al repo.
- **Plan:** al activar deploy (omitido por decisión 2026-09-18) reemplazar en los 3 documentos.
- **Nota:** las rutas internas son relativas (`pages/…`, `../…`) y funcionan en cualquier subpath.

### DUDE-04 · Asignación de 3 assets fuera del encaje §29 — MEDIA (pendiente visual)
- **Estado:** `security.webp` (slider 01), `finance.webp` (Ingresos/Egresos), `usecase.webp` (Showcase Clientes).
- **Impacto:** la pieza puede no leerse con el significado que le corresponde a la sección.
- **Plan:** validación visual humana (§12.3); si no encaja, reasignar o recortar variante dedicada.

### DUDE-05 · Slider/showcase con `object-fit: contain` → bandas laterales — BAJA
- **Estado:** piezas 2.12:1 (dashboard, security) y 1.09:1 (finance) muestran bandas del fondo navy.
- **Impacto:** estético intencional (no recortar arte con texto), pero puede verse "vacío" en ciertas piezas.
- **Plan:** opcional derivar variantes recortadas 16:9 sin texto crítico en bordes.

### DUDE-06 · Brand/copy: "Solicitar demo" vs "Solicitar una demo" — BAJA
- **Estado:** nav y sticky usan el corto (§4/§36 lo permiten); hero/CTA el largo (§27).
- **Impacto:** consistencia de marca ↓ mínima.
- **Plan:** decidir un solo patrón (recomendado: mantener corto en zonas compactas, largo en hero/CTA).

### DUDE-07 · Rama `V.1` desactualizada (5 commits atrás de `main`) — MEDIA (proceso)
- **Estado:** `main` adelante `5 → 0` vs `V.1`; ambas con tracking en origin.
- **Impacto:** riesgo de que alguien trabaje sobre estado obsoleto o se conflique al desplegar.
- **Plan:** decidir: (a) fast-forward `V.1` a `main` y mantener ambas, o (b) eliminar la rama redundante y quedarse con `main`.

### DUDE-08 · Duplicación manual de navbar/footer entre páginas — BAJA (mantenimiento)
- **Estado:** 3 HTML con header/footer copiados (sin build tooling ni partials).
- **Impacto:** un cambio de nav hay que replicarlo a mano en 3 sitios.
- **Plan:** solo si crece el número de páginas → introducir un SSG liviano (11ty) o plantillas server-side (PHP).
  Descartado el include por JS/fetch por a11y y no-JS (SPEC §23).

### DUDE-09 · Sin analytics ni verificación de consola de buscadores — BAJA (opcional)
- **Estado:** no hay etiqueta de analytics ni sitemap.xml/robots.txt técnico más allá de `.nojekyll`.
- **Impacto:** no se puede medir conversión ni indexación.
- **Plan:** crear `sitemap.xml` y `robots.txt`, añadir GA/Desde Analytics cuando el negocio lo pida.

### DUDE-10 · Soporte retro de CSS moderno sin polyfills — BAJA
- **Estado:** se usa `backdrop-filter`, `env(safe-area-inset-bottom)`, `aspect-ratio`, `contain`/`intrinsic`.
- **Impacto:** en navegadores antiguos degrada con gracia (fondo sin blur, sin spacer inset); no rompe layout funcional.
- **Plan:** documentado; no requiere acción salvo exigencia puntual de navegadores legados.

---

## 3. Decisiones registradas (para no reinterpretar dos veces)

1. CTA sin formulario → ancla `#demo` (2026-09-18).
2. GitHub Pages **omitido** por ahora (2026-09-18); canonical/OG provisionales apuntan al repo.
3. Slider con `object-fit: contain` (no recortar arte) (2026-09-19).
4. Contenido legal como plantilla explícita, nunca como versión final (2026-09-19).
5. Estructura multipágina sin build tooling; rutas relativas (2026-09-19).

---

## 4. Comandos útiles

- Servidor local: `python -m http.server 5500 --bind 127.0.0.1`
- Validación JS: `node --check js/main.js`
- Verificar páginas: `curl -s -o /dev/null -w "%{http_code}\n" http://127.0.0.1:5500/{index.html,pages/politica-de-privacidad.html}`
- Dif entre ramas: `git rev-list --left-right --count main...V.1`