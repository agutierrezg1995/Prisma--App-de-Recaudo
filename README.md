# Prisma$ — Control de Recaudo

Landing page de **Prisma$ Control de Recaudo**: registrar, monitorear y analizar
la operación de recaudo desde un solo lugar.

**Producción:** https://agutierrezg1995.github.io/Prisma--App-de-Recaudo/

## Estructura

El sitio es estático: HTML, CSS y JavaScript sin build ni dependencias.

| Carpeta | Contenido |
| --- | --- |
| `index.html` | Página principal. |
| `paginas/` | Formulario de demo, términos y política de privacidad. |
| `estilos/` | `estilos.css`, hoja de estilos única. |
| `scripts/` | `principal.js`, único archivo de JavaScript. |
| `recursos/imagenes/` | Imágenes optimizadas que usa el sitio. |
| `herramientas/` | Scripts de apoyo (optimización de imágenes). |
| `documentacion/` | Especificación, diagramas, auditoría y operación. |
| `material-de-trabajo/` | Material original del cliente. No lo usa el sitio. |

## Documentación

- [`documentacion/README.md`](documentacion/README.md) — índice y resumen del
  proyecto.
- [`documentacion/SPEC.md`](documentacion/SPEC.md) — especificación funcional y
  técnica.
- [`documentacion/diagramas/`](documentacion/diagramas/) — arquitectura,
  narrativa, flujo de conversión y sistema de animación.
- [`documentacion/EJECUCION_Y_AUDITORIA.md`](documentacion/EJECUCION_Y_AUDITORIA.md)
  — qué se ha ejecutado y con qué evidencia.
- [`documentacion/DEUDA_TECNICA_Y_NOVEDADES.md`](documentacion/DEUDA_TECNICA_Y_NOVEDADES.md)
  — deuda técnica conocida.
- [`documentacion/QA_FORMULARIO_DEMO.md`](documentacion/QA_FORMULARIO_DEMO.md) —
  pruebas del formulario.

## Desarrollo

Sirve la carpeta raíz por HTTP; no abras `index.html` con `file://` porque
`robots.txt`, el sitemap y las rutas relativas esperan un servidor.

```bash
python -m http.server 8000
```

No hay paso de compilación. Al cambiar `estilos/estilos.css` o
`scripts/principal.js` basta recargar.

## Publicación

GitHub Pages sirve la raíz del repositorio. `sitemap.xml` y `robots.txt` ya
apuntan al dominio de producción, así que cambiar la carpeta publicada obliga a
actualizar las rutas de `index.html`, `paginas/`, `sitemap.xml` y los canonical
de cada página.
