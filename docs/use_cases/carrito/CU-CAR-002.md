# CU-CAR-002: Eliminar una jugada específica del carrito

## Descripción y Escenario

**ID:** CU-CAR-002
**Título:** Quitar una jugada individual del carrito de compras antes de confirmar la venta.
**Tags:** #automatizado #carrito #usabilidad

### Escenario (Gherkin)

**DADO** que el carrito de compras contiene múltiples jugadas (ej: 1 Quiniela y 1 5 de Oro)
**CUANDO** el subagente presiona el ícono de "Eliminar" (Papelera) junto a la jugada de Quiniela
**ENTONCES** esa jugada específica debe desaparecer del listado
**Y** el monto total del carrito debe recalcularse restando el valor de la jugada eliminada
**Y** el resto de las jugadas (5 de Oro) deben permanecer intactas.

---

## Precondiciones

- El carrito debe tener al menos una jugada ingresada.

## Poscondiciones

- El total de la compra se actualiza en tiempo real.
- La jugada eliminada no se incluye en el ticket final si se procede a la venta.

## Reglas de Negocio

- **Recálculo:** Siempre que se elimine un ítem, el total visible para el cliente debe actualizarse instantáneamente.
- **Sin Confirmación:** Por usabilidad, la eliminación de un ítem individual suele no pedir confirmación (es un "deshacer" rápido), a diferencia de vaciar todo el carrito.

## Casos Alternativos y Excepciones

- **Carrito Vacío:** Si era la única jugada, el carrito debe mostrar el estado "Vacío" y deshabilitar el botón de "Comprar / Emitir".

## Criterios de Aceptación (QA)

1. Verificar que el total se reste correctamente.
2. Confirmar que no se eliminen jugadas por error al redimensionar la pantalla o hacer scroll.

## Concept Linkers (Knowledge Base)

- [[carrito]]: Lógica de agregación y deducción de montos.
