# CU-CAR-003: Vaciar el carrito completamente

## Descripción y Escenario

**ID:** CU-CAR-003
**Título:** Eliminar todas las jugadas del carrito en una sola acción.
**Tags:** #automatizado #carrito #limpieza

### Escenario (Gherkin)

**DADO** que el carrito de compras tiene varias jugadas acumuladas
**CUANDO** el subagente presiona el botón "Vaciar Carrito" o "Limpiar Todo"
**Y** confirma la acción en el cuadro emergente de seguridad
**ENTONCES** todas las jugadas deben ser eliminadas simultáneamente
**Y** el monto total del carrito debe volver a "$0"
**Y** el sistema debe volver al estado inicial listo para nuevas entradas.

---

## Precondiciones

- El carrito contiene una o más jugadas.

## Poscondiciones

- Carrito en estado limpio.
- Foco devuelto a la entrada del primer juego disponible.

## Reglas de Negocio

- **Confirmación Obligatoria:** Dado que esta acción es destructiva y puede hacer perder mucho tiempo al subagente, el sistema DEBE pedir una confirmación (ej: "¿Está seguro que desea vaciar el carrito?").
- **Audit Log:** (Opcional) Guardar registro de carritos vaciados si el volumen es inusualmente alto.

## Casos Alternativos y Excepciones

- **Cancelar Limpieza:** Si el subagente presiona "No" en la confirmación, el carrito debe permanecer igual que antes.

## Criterios de Aceptación (QA)

1. Validar que aparezca el diálogo de confirmación.
2. Verificar que tras vaciar, el botón de "Vender" quede bloqueado.

## Concept Linkers (Knowledge Base)

- [[carrito]]: Estados del contenedor.
