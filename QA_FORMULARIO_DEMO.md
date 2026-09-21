# QA — Formulario de solicitud de demo (SPEC §45)

Checklist de pruebas para `pages/solicitar-demo.html` (y CTA `#demo` del index).
Corresponde a la validación humana §12 / §12.3 y a la **pasada 26** (DUDE-26).
Usa la URL local (`http://127.0.0.1:5500/pages/solicitar-demo.html`) o
producción
(`https://agutierrezg1995.github.io/Prisma--App-de-Recaudo/pages/solicitar-demo.html`).

Marca cada caso con `[x]` cuando pase. Apunta hallazgos en la sección final.

---

## 1. Campos presentes (¿falta algo? I-01/I-02)

| Campo | Obligatorio | Tipo | OK |
| --- | --- | --- | --- |
| Nombre | Sí | text, `autocomplete=name`, 2–80 car. | [ ] |
| Correo electrónico | Sí | email, 2–120 car. | [ ] |
| Teléfono (WhatsApp) | Sí | tel, patrón, 7–20 car. | [ ] |
| Ciudad | No | text | [ ] |
| Negocio o empresa | No | text | [ ] |
| Tipo de operación | No | select (placeholder inicial) | [ ] |
| Puntos de recaudo/vendedores | No | select (rango + no decirlo) | [ ] |
| Volumen mensual | No | select (rango + no decirlo) | [ ] |
| Tu necesidad | No | textarea, máx. 500 | [ ] |

## 2. Validaciones (I-03) — probar en desktop y móvil

- [ ] Enviar vacío → burbuja "Este campo es obligatorio." en Nombre, Correo y Teléfono.
- [ ] Correo `abc` → "Escribe un correo electrónico válido…".
- [ ] Correo válido `nombre@empresa.com` → pasa sin burbuja.
- [ ] Teléfono `12` → mensaje de teléfono inválido (patrón).
- [ ] Teléfonos válidos: `3001234567`, `+57 300 123 4567`, `(57) 300-123-45-67`.
- [ ] Nombre de 1 letra → "Este campo necesita más caracteres.".
- [ ] El borde rojo `:user-invalid` aparece SOLO después de interactuar.
- [ ] Al corregir un campo, el error desaparece (sin mensajes fantasmas).
- [ ] El status bajo el botón muestra "Revisa los campos marcados y vuelve a enviar." en rojo al fallar.

## 3. Envío → WhatsApp (I-06/I-04/I-05)

- [ ] Form válido → se abre WhatsApp (nueva pestaña) con mensaje de 9 líneas:
      Nombre · Correo · Teléfono · Negocio · Ciudad · Operación · Canales · Volumen · Necesidad.
- [ ] Los opcionales vacíos NO aparecen en el mensaje (no líneas "Ciudad: -" si no se escribieron).
- [ ] El mensaje incluye la necesidad si se escribe.
- [ ] Status cambia a "Abriendo WhatsApp con tu solicitud…" y se muestra el toast "Solicitud lista."
- [ ] Doble clic rápido en Enviar → solo se abre UNA vez (anti doble envío, botón deshabilitado 2 s).
- [ ] El número destino corresponde al WhatsApp real del negocio (`573183366064`).

## 4. Móvil (I-03, §27/§12)

- [ ] En el teléfono se abre teclado numérico en el campo Teléfono (`inputmode=tel`).
- [ ] Campo Correo abre teclado con `@`.
- [ ] Controles táctiles ≥ 44 px y el formulario no se tapa con el teclado.
- [ ] `autocomplete=email/tel/name/organization` sugiere datos guardados.
- [ ] El scroll llega al botón Enviar sin quedar bajo la barra del navegador.
- [ ] WhatsApp se abre correctamente en el teléfono (no en un popup bloqueado).

## 5. Accesibilidad (WCAG 2.2 AA)

- [ ] Cada campo tiene `<label for>`.
- [ ] El status es audible (`role=status`, `aria-live=polite`).
- [ ] Navegación completa por teclado (Tab en orden lógico, focus visible).
- [ ] Enviar con Enter funciona.
- [ ] Sin JS: aparece el `<noscript>` con el enlace a FAQ.
- [ ] Contrastes AA en burbujas/mensajes de error.

## 6. Integridad

- [ ] 1 H1 en la página · 0 ids duplicados · 0 referencias rotas.
- [ ] CTA del index (`#demo`) y navbar apuntan a esta página.
- [ ] `node --check js/main.js` OK · CSS balanceado.

---

## Hallazgos

- **Bloqueante:** 
- **Pendiente visual (§12):** 
- **Propuestas:** 

---

Comandos útiles:
- Local: `python -m http.server 5500 --bind 127.0.0.1` → `http://127.0.0.1:5500/pages/solicitar-demo.html`
- Validación JS: `node --check js/main.js`
- Estado HTTP: `curl -s -o /dev/null -w "%{http_code}\n" http://127.0.0.1:5500/pages/solicitar-demo.html`