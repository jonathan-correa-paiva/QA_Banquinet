# CU-CAR-004: Intentar comprar con carrito vacío

## Descripción y Escenario

**ID:** CU-CAR-004
**Título:** Bloqueo de la acción de compra cuando no hay jugadas ingresadas.
**Tags:** #automatizado #carrito #errores #usabilidad

### Escenario (Gherkin)

**DADO** que el carrito de compras está vacío (Total = $0)
**CUANDO** el subagente intenta presionar el botón "Comprar", "Pagar" o "Emitir Ticket"
**ENTONCES** el botón debe estar visualmente deshabilitado (gris / opaco)
**Y** si se intentara forzar la acción, el sistema no debe abrir la pasarela de pago ni enviar datos a la Banca.

---

## Precondiciones

- No se han agregado jugadas o el carrito acaba de ser vaciado.

## Poscondiciones

- No se genera ninguna transacción.

## Reglas de Negocio

- **Estado de Botón:** El botón de acción final depende directamente de que el contador de ítems del carrito sea > 0.
- **Prevención:** Es una regla de diseño para evitar tickets en blanco o errores de servidor (Bad Request por carrito nulo).

## Casos Alternativos y Excepciones

- **Items Pendientes:** Si hay una jugada a medio escribir en los campos pero no se le dio al botón "Ingresar", el carrito sigue considerándose vacío.

## Criterios de Aceptación (QA)

1. Verificar visualmente que el botón cambie de color según el contenido del carrito.
2. Confirmar que los atajos de teclado para "Pagar" no funcionen si no hay ítems.

## Concept Linkers (Knowledge Base)

- [[carrito]]: Lógica de habilitación de botones de acción.
