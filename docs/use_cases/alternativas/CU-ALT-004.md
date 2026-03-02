# CU-ALT-004: Cerrar ventana de alternativas (X / Escap)

## Descripción y Escenario

**ID:** CU-ALT-004
**Título:** Cerrar la ventana de opciones alternativas mediante la "X" o la tecla Escape.
**Tags:** #automatizado #alternativas #usabilidad

### Escenario (Gherkin)

**DADO** que se encuentra abierta la ventana de sugerencia de alternativas
**CUANDO** el subagente presiona el ícono de cierre "X" en la esquina superior o la tecla "Esc" en el teclado físico
**ENTONCES** la ventana debe cerrarse inmediatamente
**Y** el sistema debe interpretar esta acción como un rechazo implícito de la alternativa
**Y** devolver el control a la pantalla de ingreso principal sin agregar ninguna jugada al carrito.

---

## Precondiciones

- Ventana de diálogo de alternativas activa.

## Poscondiciones

- El carrito se mantiene vacío (o con las jugadas previas).

## Reglas de Negocio

- **Comportamiento Estándar:** La acción de cerrar (X) debe ser equivalente funcionalmente al botón "Cancelar".
- **Foco:** El cursor debe volver automáticamente al campo de "Número" de la jugada que inició el proceso.

## Casos Alternativos y Excepciones

- **Bloqueo de Interfaz:** Mientras la ventana está abierta, el resto de la interfaz del POS debe estar bloqueada (modalidad modal) para evitar clicks accidentales de fondo.

## Criterios de Aceptación (QA)

1. Probar el cierre mediante click en "X".
2. Probar el cierre mediante teclado (tecla Escape).
3. Confirmar que no hay "fugas" de jugadas fantasma hacia el carrito.

## Concept Linkers (Knowledge Base)

- [[logica_interna_gpos]]: Manejo de ventanas modales y foco.
