# ORO-R5S-001: Jugada de 5 Números Revancha sorpresa

## Descripción y Escenario

**ID:** ORO-R5S-001
**Título:** Ingresar una jugada de Cinco de Oro Revancha de 5 Números sorpresa correctamente.
**Tags:** #automatizado #5deoro #revancha #sorpresa

### Escenario (Gherkin)

**DADO** que un subagente se encuentra en la pantalla de "5 de Oro"
**Y** selecciona la modalidad de juego con "Revancha"
**CUANDO** presiona el botón "Sorpresa" para generar los 5 números
**Y** el sistema genera de forma aleatoria un conjunto de números válidos (ej: 05, 12, 28, 33, 41)
**Y** presiona el botón "Ingresar"
**ENTONCES** el sistema debe validar que los números no estén duplicados
**Y** agregar la jugada al carrito con el monto correspondiente (incluyendo el costo de la Revancha).

---

## Precondiciones

- El subagente debe tener sesión activa y saldo suficiente para la modalidad elegida.
- El pozo de Revancha debe estar habilitado para el próximo sorteo.

## Poscondiciones

- La jugada se visualiza en el carrito con el desglose de "5 de Oro + Revancha".
- Los campos de entrada se limpian para una nueva jugada.

## Reglas de Negocio

- **Generación Aleatoria (RNG):** Los números deben estar en el rango 01-48.
- **Sin Duplicados:** El sistema debe garantizar que los 5 números generados sean distintos entre sí.
- **Costo:** El sistema debe sumar automáticamente el costo base del 5 de Oro más el adicional por jugar la Revancha.
- **Límite de Tiempo:** Las jugadas sorpresa deben generarse en menos de 1 segundo para evitar latencia en la UI.

## Casos Alternativos y Excepciones

- **Sorteo Cerrado:** Si el sorteo de Revancha ya cerró pero el 5 de Oro sigue abierto, el sistema debe alertar al subagente y deshabilitar la opción de Revancha.

## Criterios de Aceptación (QA)

1. Verificar que al presionar "Sorpresa" se llenen los 5 casilleros de números.
2. Validar que el monto en el carrito sea superior al de una jugada simple sin Revancha.
3. Confirmar que la jugada en el carrito tenga el indicador de "Sorpresa".

## Concept Linkers (Knowledge Base)

- [[5deoro_logica_oficial]]: Reglas y costos de la modalidad Revancha.
- [[carrito]]: Manejo de jugadas combinadas.
