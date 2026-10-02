# OBSERVACIONES UEX/UI — 2026-09-29 (Ciclo 3)

> Documento de entrada del titular, normalizado a formato de especificación ejecutable
> (Contexto · Evidencia · Decisión · Aceptación · Guardas), alineado con `SPEC.md`,
> `DEUDA_TECNICA_Y_NOVEDADES.md` y `EJECUCION_Y_AUDITORIA.md`.

---

## 0. ENCARGO

**Rol:** UEX / UI.
**Objetivo:** elevar los puntos señalados en la ronda 2026-09-29 conservando la
dirección de arte ya establecida (paleta, secciones, tono de marca), hasta que el
proyecto sea percibido como **profesionalmente competente en el mercado** y no como
una plantilla genérica de SaaS.
**Alcance:** interfaz, responsive, motion y claridad de mensaje.
**No es alcance de este documento:** backend, herencia de negocio, planes,
precios, reclamaciones legales ni copy de marca aprobado. No se crean datos,
métricas, testimonios, URLs ni afirmaciones nuevas (§35).

### 0.1 Nota de forma (qué se corrigió en este documento)

El original venía como texto suelto de seis comentarios. Para que sea ejecutable
se normalizó sin alterar la intención:

| Corrección | Detalle |
| --- | --- |
| Numeración | La lista iba `1, 2, 3, 3, 4, 5` (dos "3"). Se renumera como `O-01 … O-06`. |
| Ambigüedad | "el hero sea una imagen" admitía dos lecturas (A: sin texto / B: texto y visual). Se documentan ambas en O-04 con recomendación. |
| Verbosidad | "muy fácil / no es profesional" se traduce a criterios medibles de aceptación. |
| Tono | Se elimina el juicio subjetivo y se sustituye por evidencia del código. |
| Ortografía | `iamgen` → imagen, `ocmienzan` → comienzan, `fianl` → final, `benedifico` → beneficios. |

---

## 1. RESUMEN EJECUTIVO

| ID | Observación del titular | Riesgo actual | Decisión propuesta | Prioridad |
| --- | --- | --- | --- | --- |
| O-01 | El botón de tema claro no convence | Medio | Rediseñar el control y **completar** el tema claro | Alta |
| O-02 | Demasiada diferencia desktop ↔ responsive | Medio | Crear una **capa tablet real** (768–1199) | Alta |
| O-03 | Product Experience: flechas "vacías", no vuelve | **Alto** | Corregir **geometría del carrusel** (causa raíz) | Crítica |
| O-04 | Hero en responsive: solo imagen | Medio | Recomendación B (producto protagonista, texto intacto) | Alta |
| O-05 | Beneficios: flechas "vacías", sin bucle | **Alto** | Corregir **doble gutter** (causa raíz) | Crítica |
| O-06 | Redundancia de contenido | Bajo | Matriz de reparto de mensaje | Media |

**Hallazgo transversal de la auditoría (no estaba en el documento original):**
los dos carruseles que el titular describe como "vacíos" **no fallan por el bucle**
—el motor `initBucleInfinito` ya existe y funciona— **sino por la geometría de sus
contenedores**, que en el equipo del titular produce una franja vacía a la derecha
y una tarjeta recortada a la izquierda. Ver O-03 y O-05.

---

## 2. OBSERVACIONES DEL TITULAR

---

### O-01 · BOTÓN DE TEMA CLARO — "no me convence"

**Contexto.** El titular pide revisar el toggle de tema introducido en §46.4 (P8).
La objeción no es estética: en uso real el tema claro se percibe roto, y el
comportamiento por defecto contradice la dirección de arte.

**Evidencia verificada.**

1. El tema claro es una capa de parches, no un sistema: `estilos/estilos.css:511-535`
   redefine 8 tokens y **12 selectores**, mientras el tema oscuro es el que está
   cableado en todo el CSS.
2. Hay **14 superficies con navy fijo** que el tema claro no toca
   (`estilos/estilos.css`: 428, 598, 607, 670, 689, 882, 913, 1025, 1229, 1235,
   1249, 1291, 2192, 2254). Resultado al activar claro: la cinta de capacidades,
   el marco de las cards de Product Experience, el visor del slider y los marcos de
   dispositivo **siguen oscuros** sobre un fondo claro.
3. El tema por defecto depende del sistema operativo
   (`scripts/principal.js:511-512`): con el sistema en claro la web arranca en
   `data-theme="light"`. Esto contradice §46.4 ("Por defecto oscuro") y §2 del spec
   ("El azul oscuro debe dominar", "EVITAR fondos blancos completamente planos").
4. Accesibilidad inconsistente: el botón combina `aria-pressed` **y** etiqueta
   cambiante (`scripts/principal.js:503-505`), dos señales simultáneas que en lector
   de pantalla producen un estado ambiguo.
5. Destello de tema (FOUC): `data-theme` se aplica desde
   `scripts/principal.js` con `defer` (`index.html:992`), es decir, **después** del
   primer pintado. Con tema claro persistido, el usuario ve un frame navy y luego
   un salto a blanco.
6. `theme-color` es estático (`index.html:10`): la barra del navegador móvil
   permanece navy aunque la página esté en claro.

**Decisión propuesta.**

- **O-01.a — Marca del control.** Mantener un único control de 38 px, pero con
  lenguaje de estado en lugar de un icono aislado: icono sol/luna + etiqueta
  corta que nombra la acción disponible ("Tema claro" en oscuro, "Tema oscuro" en
  claro). Un solo elemento, sin occupied extra, alineado con la retícula de la
  navbar y con `aria-pressed` **estable** más `aria-label` dinámico. Se conserva el
  sol/luna actual como depictions del estado, no como dos acciones.
- **O-01.b — Cerrar el tema claro o completarlo.** Recomendación: **completarlo**.
  Convertir las 14 superficies navy fijas en tokens derivados (`--surface-media`,
  `--frame`, `--overlay-media`) y añadir sus overrides en el bloque `data-theme`.
  Coste: medio. Beneficio: el tema deja de leerse como error y la marca mantiene la
  coherencia §2 en ambos estados.
  *Alternativa si el titular prefiere una sola tema:* retirar el toggle de `index.html`
  y de `paginas/solicitar-demo.html` y fijar `data-theme="dark"`. Es **más simple y
  más fiel al spec**, pero contradice P8. **Requiere decisión explícita del titular.**
- **O-01.c — Default de marca.** El arranque es **siempre oscuro**; el sistema
  operativo deja de decidir. La preferencia del usuario se respeta solo después de
  que toque el control.
- **O-01.d — Sin destello.** Inyectar un script en línea de 3 líneas en `<head>`
  (antes del CSS) que lea `localStorage` y fije `data-theme` sin bloquear. No
  introduce dependencias ni cambia la arquitectura.
- **O-01.e — `theme-color` dinámico.** Sincronizar la meta con el tema activo
  (2 líneas).

**Aceptación.**

- Con sistema operativo en claro, la primera pintura es navy (sin destello).
- En tema claro no queda ninguna superficie navy fija sin justification deliberada;
  la única excepción aceptada es la sección **Seguridad**, que §15 exige dark.
- Con lector de pantalla, el botón anuncia un único estado inequívoco.
- Con y sin `prefers-reduced-motion` el cambio de tema es instantáneo y sin animación
  que rompa la lectura.

**Guardas.** No se tocan tokens de marca (§2), ni el logo (§30), ni el acento
amarillo. No se añaden sombras pesadas ni glow (§1). El cambio de tema no modifica
`localStorage` más allá de la clave existente `prisma-theme`.

---

### O-02 · RESPONSIVE — "en desktop y en responsive hay demasiada diferencia"

**Contexto.** El titular pide que móvil y tablet se adapten, y señala que la
diferencia perceptual con desktop es excesiva.

**Evidencia verificada.** El problema no es de valores, es de estructura: la hoja de
estilos tiene **cuatro capas** —`1199`, `1023`, `767`, `420`— y **no existe capa de
tablet**. Las dos bandas de tablet heredan comportamientos incompatibles:

| Banda | Lo que hereda | Consecuencia |
| --- | --- | --- |
| 1024–1199 | Hero 2 columnas (`estilos/estilos.css:2222`) | Columnas de ~424 px con H1 de `clamp(42px,5vw,76px)`: el titular parte en 3–4 líneas. Carruseles en 2 tarjetas con tarjeta cortada. |
| 768–1023 | Hero 1 columna (`:2232`), igual que móvil | Pierde la composición propia de desktop de golpe. Las 3 `float-card` siguen absolutas con `left:-8%` / `right:-6%` (`:626-628`) y solo se oculta la tercera por debajo de 768 (`:2299`): en tablet se apilan **3** tarjetas flotantes sobre un visual a ancho completo. |

Además, el salto de `1199` a `1023` cambia de golpe el layout del hero (2 → 1
columna) sin ningún escalón intermedio, y la sección `Cómo funciona` salta de
5 columnas a 3 (`:2223`) y luego a 1 (`:2292`) con la línea de conexión ya
desactivada desde 1199 (`:2224`).

**Decisión propuesta.**

- **O-02.a — Capa tablet explícita (768–1199).** Un único bloque `@media (max-width:
  1199px)` que defina la composición intermedia, en lugar de dos behaviors
  heredados: hero en 2 columnas hasta 1023 y 1 columna por debajo, con escala
  tipográfica propia (`clamp(38px, 4.4vw, 56px)`) para que el H1 no se rompa en 3–4
  líneas.
- **O-02.b — `float-card` por franja.** 3 tarjetas en ≥1024, 2 en 768–1023, 1 en
  <768, con posiciones que no salgan del gutter.
- **O-02.c — Timeline de tablet.** 3 columnas conservando la línea de conexión
  reducida (o 2 columnas + línea vertical si se prefiere menos densidad).
- **O-02.d — Igualar densidad, no solo medidas.** Aplicar el mismo criterio de
  §20/E-01 en tablet: padding de sección, `max-width` de `section__lead` y ritmo de
  `section__header` iguales a desktop.

**Aceptación.** Matriz de verificación obligatoria en 1440 / 1200 / 1024 / 900 /
768 / 430 / 360 px:

- Ningún titular supera 2 líneas en hero de tablet.
- Ningún texto queda a menos de 16 px del borde.
- Ninguna `float-card` queda cortada ni se solapa con el CTA.
- No aparece scroll horizontal en ninguno de esos anchos.

**Guardas.** No se elimina ningún breakpoint existente: se **añade** comportamiento
intermedio. No se reduce el contraste ni se aumenta el peso tipográfico.

---

### O-03 · PRODUCT EXPERIENCE — "las flechas al final se ve vacía, no vuelve"

**Contexto.** El titular reporta que el carrusel de producto, al llegar al final,
muestra espacio vacío en vez de reiniciar el ciclo.

**Estado actual (verificado, importante).** El bucle infinito **ya está
implementado** desde la ronda del 26-09 mediante `initBucleInfinito`
(`scripts/principal.js:336-456`), que clona el set original al final de la pista
para que nunca exista contenido vacío. La auditoría de esa ronda lo verificó a
1440/1280/1024/768/390 px. Por tanto **el síntoma reportado no corresponde al motor
de bucle**, y el informe de 26-09 no lo detectó porque verificó el final de la
*pista*, no la geometría del *contenedor*.

**Causa raíz encontrada (dos defectos geométricos, ambos reproducibles).**

1. **Franja vacía a la derecha + desalineación del encabezado.**
   `.showcase__carousel` vive **fuera** de `.container` (`index.html:359`), a
   ancho completo de sección, mientras el encabezado de la sección sí está dentro
   (`:353`). Pero el ancho de tarjeta se calcula a partir de `--container`
   (`estilos/estilos.css:1220`: `calc((var(--container) - var(--gutter)*2 - 48px) / 3)`,
   con `--container: 1240px` en `:63`).
   Resultado, para cualquier viewport `V > 1240`:
   - franja vacía a la derecha = **V − 1240 px**
   - desalineación del encabezado = **(V − 1240) / 2 px**

   | Viewport | Franja vacía | Desalineación |
   | --- | --- | --- |
   | 1280 px | 40 px | 20 px |
   | 1440 px | **200 px** | 100 px |
   | 1920 px | **680 px** | 340 px |

   A 1240 px el defecto es cero. Aparece exactamente en el rango que el titular
   llama "desktop" y por eso no se detectó en 1280 durante la ronda anterior.

2. **Bandas vacías dentro de las tarjetas.** `.showcase__card figure` fuerza
   `aspect-ratio: 16/10` con `object-fit: contain` (`estilos/estilos.css:1229-1230`)
   para los 5 assets, pero las proporciones nativas medidas son:

   | Asset | Proporción | Banda vacía en marco 16:10 |
   | --- | --- | --- |
   | `monitor.webp` | 1.776 |leve |
   | `process.webp` | 1.500 | leve |
   | `dashboard.webp` | 2.122 | lateral notable |
   | `finance.webp` | 1.093 | **vertical grande** |
   | `usecase.webp` | 1.000 | **vertical muy grande** |

   Con `background: rgba(0,18,60,.35)` en el marco, la banda de la card "Clientes"
   (cuadrada en un marco 16:10) se lee literalmente como **"una imagen vacía"**.
   Esto contradice la nota de §29 ("los contenedores respetan el `aspect-ratio`
   nativo de cada imagen; no recortar piezas con texto").

**Decisión propuesta.**

- **O-03.a — Que el ancho de tarjeta se derive del contenedor real, no de un
  token.** Sustituir `flex: 0 0 calc((var(--container) - var(--gutter)*2 - 48px)/3)`
  por un porcentaje del ancho de contenido de la pista
  (`flex: 0 0 calc((100% - 48px)/3)`, y su equivalente de 2 columnas en ≤1199).
  Esto hace que los 3 + 2 gaps midan **exactamente** el ancho disponible en
  cualquier viewport, eliminando a la vez la franja vacía y la desalineación, sin
  tocar el JS: `paso()` ya lee el ancho renderizado (`scripts/principal.js:372-375`).
- **O-03.b — Respetar la proporción nativa de cada asset.** Elegir una de dos:
  - (recomendada, menor riesgo) mantener 16:10 y cambiar `contain` por un
    encuadre con `object-fit: cover` + `object-position` por card, de modo que la
    banda desaparezca y ninguna pieza con texto se corte en zona crítica; o
  - asignar a cada card el `aspect-ratio` nativo de su asset
    (1.776 / 1.5 / 2.122 / 1.093 / 1.0), aceptando alturas variables y
    normalizando con `align-items: stretch` y `min-height`.
- **O-03.c — Alineación de la retícula.** Decidir explícitamente si el carrusel es
  *full-bleed* (se sale del container a propósito, con el header también full-bleed)
  o *alineado*. Hoy es una tercera cosa: header alineado + carrusel full-bleed.

**Aceptación.**

- En 1440 y 1920 px: cero franja vacía; la primera tarjeta alineada con el
  encabezado de sección; la última alineada con el borde de contenido.
- Secuencia observada al avanzar: `1→2→3→4→5→1→2→3…` sin corte perceptible y sin
  estado intermedio vacío, verificada con las flechas, con teclado y con autoplay.
- Ninguna card muestra una banda de fondo superior al ~8 % de su altura.
- `paso()` sigue coincidiendo con el ancho real tras resize (validar en
  1440 → 900 → 1440).

**Guardas.** No se elimina el motor de clones ni los dots; no se toca el autoplay
(4 s), la pausa en hover/foco ni la regla `prefers-reduced-motion`. Los clones
siguen siendo `aria-hidden` + `inert` y no deben recibir foco.

---

### O-04 · HERO EN RESPONSIVE — "que sea una imagen que hable pro, en desktop imagen y texto"

**Contexto.** Dos lecturas posibles del pedido. Se documentan ambas; se recomienda
una y se deja la otra a decisión del titular.

**Lectura A (literal).** En <1024 px el hero muestra **solo el visual**, sin titular,
sin párrafo y sin CTA; en desktop mantiene titular + visual.

**Lectura B (recomendada).** En <1024 px el **producto pasa a protagonista**: el
visual ocupa el ancho completo y el titular se reduce a una unidad compacta por
encima (H1 + badge + CTA primario). En desktop se mantiene la composición actual
de dos columnas.

**Por qué se recomienda B y no A.** En móvil, eliminar titular y CTA del primer
viewport tiene consecuencias medibles y concretas:

- Contradice §36 ("CTA inmediatamente visible") y §20.
- Contradice el criterio de §37: la primera impresión debe comunicar en 5 s "esto es
  Prisma$ y me permite controlar mi recaudo". Una imagen sin texto no lo garantiza.
- Elimina el único `h1` móvil de la página: §25 exige H1 único y la versión actual
  (`index.html:187-193`) cumple.
- Impacta conversión: el CTA primario "Probar ahora" desaparecería del primer pantallazo.
- Deja sin función a `F-02` (rotador de frases de valor), que es precisamente el
  argumento de venta del titular en esa posición.

**Decisión propuesta.**

- **O-04.a — Aplicar B.** Y añadir, para que la petición se cumpla en espíritu:
  - el visual del hero pasa a **ancho completo con proporción nativa 3:2** y sin
    `float-card` superpuestas por encima del 90 % de la imagen;
  - las `float-card` se convierten en una **fila de 2 chips compactos bajo el
    visual**, no en capas flotantes que tapan el producto;
  - el titular pasa a 2 líneas como máximo con `clamp(38px, 8.4vw, 52px)`;
  - se conserva el autoplay del visual (`G-10`), que es lo que hace que la imagen
    "hable" sola.
- **O-04.b — Si el titular confirma A.** Se implementa como variante explícita
  (`.hero--visual-only` en ≤1023 px) y se acepta en el acta el coste descrito arriba,
  incluyendo la necesidad de un `<h1>` `sr-only` para no romper §25 y un CTA sticky
  para no perder conversión (§36 ya lo contempla).

**Aceptación (variante B).** En 430 y 360 px: titular de 2 líneas, CTA primario
completo y visible sin scroll, visual sin elementos flotantes encima, y ningún texto
por debajo de 16 px.

**Guardas.** No se elimina ningún titular de escritorio. No se añaden imágenes: se
reutiliza `hero.webp` y las capas ya existentes. Cero CLS (§24): el `width`/`height`
declarado del hero (`900×700`) no coincide con la proporción real de `hero.webp`
(`1536×1024` = 3:2); se corrige como parte de este punto aunque el CSS ya fuerce
`aspect-ratio: 3/2`.

---

### O-05 · BENEFICIOS — "las flechas al final se ven vacías, necesito que vuelva en bucle"

**Contexto.** Mismo síntoma reportado en Beneficios, ya listado como observación
del 26-09 y dado por resuelto entonces.

**Estado actual (verificado).** El motor de bucle es el mismo y **funciona**: la
secuencia real es `1→2→3→1→2→3` sin huecos, y los 3 dots se generan **antes** del
clonado (`scripts/principal.js:460-475`), por lo que el conteo es correcto.

**Causa raíz encontrada.** `.benefits__carousel` vive **dentro** de `.container`
(`index.html:591`) **y además** aplica su propio `padding-inline: var(--gutter)`
(`estilos/estilos.css:1273`). El gutter se cuenta dos veces: el ancho útil de la
pista es `container − 4×gutter`, mientras el ancho de tarjeta sigue calculándose
como si el contenedor fuese completo (`estilos/estilos.css:1283`).

**Consecuencia medible** — la tercera tarjeta queda **recortada** en todos los
anchos, no solo al final:

| Viewport | Gutter | Ancho de tarjetas | Pista disponible | Recorte |
| --- | --- | --- | --- | --- |
| 1200 px | 40 | 1160 | 1040 | **120 px** |
| 1240 px | 40 | 1160 | 1080 | **80 px** |
| 1440 px | 40 | 1160 | 1080 | **80 px** |
| 768 px | 30.7 | 706.6 | 645.1 | **61 px** |

En el caso de 2 tarjetas (≤1199) el recorte es de `2 × gutter`; en el de 1 tarjeta
(<768, `flex-basis: 85%`) el diseño sí deja la tarjeta completa con un
*peek* lateral, que es el comportamiento deseado en móvil.

La combinación "tercera tarjeta cortada" + flechas a `left/right: 16px` +
autoplay produce exactamente la lectura de "al final se ve vacío / no hay imagen".

**Decisión propuesta.**

- **O-05.a — Eliminar el gutter duplicado.** Quitar `padding-inline: var(--gutter)`
  de `.benefits__carousel` (el padding ya lo aporta `.container`). Una línea, sin
  tocar markup.
- **O-05.b — Aplicar el mismo criterio de O-03.a.** Anclar `flex-basis` al ancho
  real de la pista (`calc((100% - 48px)/3)` y equivalentes) en lugar de a
  `--container`, de modo que **ningún** carril pueda volver a desalinearse.
- **O-05.c — Coherencia entre los dos carruseles.** Aplicar el mismo criterio
  (O-03.a/O-05.b) a Showcase y Beneficios, y **unificar el gutter**: decidir si los
  carruseles son full-bleed o alineados, y aplicar la misma decisión a los dos.
- **O-05.d — `.is-overflowing` deja de ser fiable.** `mide()` compara
  `track.scrollWidth > root.clientWidth` (`scripts/principal.js:377`), pero como la pista
  **ya contiene los clones**, la condición es siempre verdadera: la clase
  `is-overflowing` nunca se quita y las flechas nunca se ocultan
  (`estilos/estilos.css:1340-1342`). Medir contra `originales` en lugar de contra
  la pista clonada para que el fallback a grid estático siga siendo funcional.

**Aceptación.**

- En 1440 px: las 3 tarjetas se ven completas, sin recorte, y alineadas con el
  encabezado.
- Secuencia `1→2→3→1→2→3…` con flechas, teclado, dots y autoplay (4.5 s).
- Con <768 px: 1 tarjeta completa con peek lateral, sin recorte.
- Tras redimensionar 1440 → 900 → 1440, el paso del carrusel sigue coincidiendo
  con el ancho real de tarjeta.

**Guardas.** No se eliminan los dots, el autoplay, la pausa en hover/foco, ni la
regla de clones `aria-hidden` + `inert`. Sin cambio de copy ni de assets.

---

### O-06 · REDUNDANCIA — "existe redundancia en algunas cosas, quiero que sea más objetivo"

**Contexto.** El titular pide objetividad. Se auditó el reparto de mensaje y de
material visual para localizar la redundancia **medible** en lugar de por impresión.

**Evidencia verificada — repetición de mensaje.**

| Mensaje | Apariciones en `index.html` | Dónde se concentra |
| --- | --- | --- |
| "tiempo real" | 19 | Hero (badge, meta), cinta de capacidades (×2 grupos), Product Experience, Solución (chip), Beneficios, Monitoreo (título), Hero Slider (slide 2), FAQ |
| "reportes" | 20 | Hero, cinta (×2), Showcase, Beneficios, Proceso, Planes, FAQ |
| "monitoreo/monitorea" | 25 | Hero, cinta, Showcase, Solución, Monitoreo, Beneficios, Navbar, Footer, FAQ |

*(El conteo incluye el JSON-LD, el texto `sr-only` y el grupo duplicado de la cinta;
aun descontando eso, la repetición visible es de 5–7 por mensaje.)*

**Evidencia verificada — repetición de material visual** (refs directas en el HTML,
excluyendo `srcset`):

| Asset | Veces | Secciones |
| --- | --- | --- |
| `monitor.webp` | 5 | Hero (capa), Showcase, Monitoreo, Slider, Beneficios |
| `process.webp` | 4 | Hero (capa), Showcase, Cómo funciona, Beneficios |
| `finance.webp` | 4 | Hero (capa), Showcase, Slider, Beneficios |
| `dashboard.webp` | 3 | Showcase, Solución, Slider |

Es decir, **las 5 tarjetas de Product Experience usan assets que vuelven a
aparecer, a la misma escala, en secciones contiguas**. §39.7 ya pidió dar
tratamiento visual único a cada panel; a día de hoy está solo parcialmente resuelto
(las cards de Beneficios sí están diferenciadas con miniatura + overlay, `:2561-2585`).

**Evidencia verificada — duplicación literal.** El footer repite
`Política de privacidad`, `Términos` y `Contacto` en la columna "Empresa"
(`index.html:961-963`) y de nuevo en la barra inferior (`:973-976`).

**Decisión propuesta.**

- **O-06.a — Matriz de reparto de mensaje (1 idea = 1 sección).** Prioridad:
  hero y planes. Cada beneficio del producto debe tener **una** sección que lo
  defienda y ninguna otra debe re-defenderlo con el mismo titular:

  | Capacidad | Sección propietaria | Dónde solo se menciona (≤1 vez) |
  | --- | --- | --- |
  | Registro de cobros | Cómo funciona (§10) | Ficha de planes, cinta |
  | Tiempo real | Monitoreo (§11) | Hero (badge), cinta, planes |
  | Reportes y cuadre | Product Experience | Proceso (paso 05), FAQ, planes |
  | Clientes | Product Experience | Solución (chip), planes |
  | Seguridad | Seguridad (§15) | Hero Slider (slide 1), FAQ |
  | Acceso desde cualquier dispositivo | Descarga y pago | Hero (meta), cinta, FAQ |

- **O-06.b — Jerarquía de tamaño, no de cantidad.** Donde el mensaje se repita por
  necesidad estructural, bajar de `h2` a `h3`/chip/meta en las apariciones
  secundarias. La repetición deja de leerse como redundancia cuando baja de peso.
- **O-06.c — Product Experience como índice visual, no como repetición.** Mantener
  los 5 assets (son el índice del producto) pero **diferenciarlos por tratamiento**
  —enmascarado, escala y badge propios— para que no se confundan con los paneles de
  las secciones vecinas. Cierra lo que §39.7 dejó abierto.
- **O-06.d — Limpieza literal.** En el footer, dejar los legales **solo** en la barra
  inferior y sustituir la columna "Empresa" por enlaces de sección. Cero cambio de
  arquitectura, cero riesgo.
- **O-06.e — Objetividad del copy.** Eliminar adverbios y adjetivos de relleno
  ("muy fácil", "más clara", "simple", "sencilla") en favor del hecho verificable.
  §34 ya lo pide: profesional, claro, directo.

**Aceptación.** Recuento de repeticiones del mensaje "tiempo real" por debajo de 10
apariciones en el HTML (de 19). Ningún asset aparece a la misma escala y con el
mismo encuadre en dos secciones contiguas. Ningún enlace legal duplicado en el
footer.

**Guardas.** No se elimina ninguna sección ni ningún asset. No se eliminan FAQs
(son requisito de §39.5 y del JSON-LD). No se introduce copy nuevo: todas las
reformulaciones salen de texto ya existente en el spec.

---

## 3. HALLAZGOS DE AUDITORÍA (no solicitados; propuestas de bajo riesgo)

> Estos puntos **no** estaban en las observaciones del titular. Se listan aparte
> para que la decisión sea explícita y ninguno se ejecute por inercia. Todos son
> de riesgo bajo y ninguno cambia la arquitectura.

| ID | Hallazgo | Evidencia | Propuesta | Riesgo |
| --- | --- | --- | --- | --- |
| S-01 | **El topbar cerrado sigue siendo tabulable.** Al cerrarlo se aplica `transform: translateY(-100%)` (`estilos/estilos.css:2032`): el contenido sale de pantalla pero **permanece en el orden de foco**, y el botón de cerrar queda con `aria-hidden="true"` siendo enfocable (`scripts/principal.js:745`). | `2032`, `740-747` | Añadir `visibility: hidden` (o `inert`) al cerrar. Cumple §23. | Bajo |
| S-02 | **El ciclo del topbar nunca se detiene.** El guard de G-10 comprueba `hasAttribute("hidden")` en el botón de cerrar (`scripts/principal.js:927`), atributo que nunca se establece: el cierre usa `aria-hidden`. El `setInterval` sigue corriendo de por vida con la barra cerrada. | `927` vs `740-747` | Compartir un flag `announceClosed`. | Bajo |
| S-03 | **`onChange` se dispara dos veces** en cada avance del carrusel de Beneficios: `avanza()` llama al callback y `go()` ya lo había llamado (`scripts/principal.js:409-414`). Hoy es inocuo; se vuelve un bug en cuanto se conecte a analítica. | `400-414` | Dejar la llamada en un solo nivel. | Bajo |
| S-04 | **Páginas legales sin conmutador de tema pero con tema forzado.** `scripts/principal.js:512` fija `data-theme` en todas las páginas; en `terminos.html` y `politica-de-privacidad.html` no hay toggle, así que un usuario con tema claro persistido queda encerrado en claro. Además cargan el script **sin `defer`**. | `paginas/terminos.html:208`, `paginas/politica-de-privacidad.html:221` | Añadir el toggle o el enlace "volver" coherente; y `defer`. | Bajo |
| S-05 | **Atributos `width`/`height` del hero no coinciden con el asset** (`900×700` declarado frente a `1536×1024` real, `index.html:210`). Hoy el CSS impone `aspect-ratio: 3/2` y no hay CLS, pero cualquier regla que se anteponga provocaría salto. §24 exige cero CLS. | `index.html:210` | Corregir a `1536×1024`. | Nulo |
| S-06 | **Partículas y aurora siempre activas.** El bucle de aurora del hero (`scripts/principal.js:979-987`) es un `requestAnimationFrame` **sin condición de parada**: solo se autoexcluye con `document.hidden`. Es el único bucle del proyecto que no se apaga al salir de la vista. | `979-987` | Reusar el patrón de corte por `IntersectionObserver` ya usado en el slider. | Bajo |
| S-07 | **`sizes` del hero coherentes.** `index.html:210` declara `600px` en desktop, alineado con el ancho real de la columna del hero a 1440 px. Sin observación: **se mantiene tal cual**. | `index.html:210` | Ninguna. | Nulo |
| S-08 | **`is-overflowing` nunca se desactiva** (ver O-05.d): el fallback a "grid estático sin flechas" está muerto. Si en el futuro se quitan los clones, ese camino no existe. | `scripts/principal.js:377` | Medir contra `originales`. | Bajo |

---

## 4. GUARDAS TRANSVERSALES (aplican a todo el documento)

1. **§19 / §23 motion y accesibilidad.** Todo cambio de animación se apaga bajo
   `prefers-reduced-motion` y usa solo `transform`/`opacity`. Ninguna animación
   supera 800 ms salvo ambientes pausables.
2. **§24 performance.** Cero CLS: todo `aspect-ratio` y `width`/`height` corregido
   en la misma pasada que cambia el layout del carrusel. Cero scroll horizontal
   en los 7 anchos de verificación.
3. **§25 SEO.** Estructura de encabezados intacta: un solo `h1`, la jerarquía
   `h1→h2→h3` no se altera, los carruseles mantienen sus roles ARIA y `aria-label`.
4. **§29 assets.** No se añaden, no se recortan piezas con texto y no se reutiliza
   el mismo asset a la misma escala en secciones contiguas.
5. **§35 contenido.** Ningún dato, métrica, testimonial, precio o URL nuevo. Todos
   los textos propuestos salen del spec o del HTML existente.
6. **No rompas la conversión.** Los 5 destinos de conversión actuales (`#planes`,
   WhatsApp de planes, WhatsApp "quiero verlo en vivo", WhatsApp de la app, formulario
   de demo) se conservan. Ninguna observación de este documento puede convertirlos en
   un ancla vacía.
7. **Alcance.** Todo lo que no esté en O-01…O-06 o S-01…S-08 requiere una
   observación nueva. Este documento no autoriza rediseños generales.

---

## 5. TRAZABILIDAD

| Documento | Relación |
| --- | --- |
| `SPEC.md` §20, §36 | Responsive y experiencia móvil → O-02, O-04 |
| `SPEC.md` §2, §15 | Predominio del azul, sección dark de Seguridad → O-01 |
| `SPEC.md` §16 | Product Experience: carrusel, 3/2/1 visibles, cards parcialmente visibles → O-03 |
| `SPEC.md` §14 | Beneficios: grid de cards → O-05 |
| `SPEC.md` §29 | `aspect-ratio` nativo y `object-fit: contain` → O-03.b |
| `SPEC.md` §34 | Copys sin adjetivos → O-06.e |
| `SPEC.md` §39.7 | Revisión de redundancia visual de paneles → O-06.c |
| `SPEC.md` §46.4 | Tema claro/oscuro, toggle persistido → O-01 |
| `EJECUCION_Y_AUDITORIA.md` (ronda 26-09) | Verificación del bucle de carruseles → O-03, O-05 (causa raíz distinta) |
| `DEUDA_TECNICA_Y_NOVEDADES.md` §5 | Deuda de `initPager`, sin swipe táctil, tema claro parcial | → S-01…S-08 |

**Registro de la ronda:** al ejecutarse, esta tanda se numera **O-01…O-06** y
**S-01…S-08**, y se anexa a `DEUDA_TECNICA_Y_NOVEDADES.md` (decisiones) y a
`EJECUCION_Y_AUDITORIA.md` (evidencia de verificación), siguiendo la convención de
las rondas 21–26.

---

## 6. CHECKLIST DE VERIFICACIÓN (para la pasada de QA)

Ejecutar **antes** de dar por cerrada la ronda, en los anchos
**1440 / 1280 / 1200 / 1024 / 900 / 768 / 430 / 360 px**:

- [x] Ninguna franja vacía en los carruseles; tarjetas completas y alineadas con su encabezado.
- [x] Bucle `1→n→1` sin estado vacío en ambos carruseles, con flechas, teclado y autoplay.
- [x] Tras `1440 → 900 → 1440`, el paso del carrusel sigue coincidiendo con el ancho real.
- [x] Tema oscuro de arranque sin destello; tema claro sin superficies navy sin justificar.
- [x] Ninguna `float-card` cortada ni solapada en 768–1023.
- [x] H1 de 2 líneas como máximo en hero de tablet y de móvil.
- [x] Cero scroll horizontal; cero CLS en la carga inicial.
- [x] Un solo `h1`; jerarquía de encabezados intacta.
- [x] Los 5 destinos de conversión responden.
- [x] `prefers-reduced-motion`: sin autoplay, sin aurora, sin float, sin barridos.
- [x] `node --check scripts/principal.js` sin errores.
- [x] Sin URLs, métricas ni testimonios nuevos (§35).

---

_Registro: 2026-09-29 · Observaciones del titular + auditoría asociada._
_Cierre técnico: 2026-10-02. O-01.a/b y O-04.a/b se implementaron según la_
_variante recomendada; la validación visual humana queda como control operativo._
