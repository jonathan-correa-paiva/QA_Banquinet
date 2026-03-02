# ORO-RM8-004: Jugada de 8 Números Revancha sorpresa

## Descripción y Escenario

**ID:** ORO-RM8-004
**Título:** Ingresar una jugada múltiple de 8 números con Revancha de forma aleatoria.
**Tags:** #automatizado #5deoro #revancha #sorpresa #multiple

### Escenario (Gherkin)

**DADO** que el subagente activa la opción "Revancha"
**CUANDO** elige "Múltiple de 8" y presiona "Sorpresa"
**ENTONCES** el sistema genera 8 números aleatorios
**Y** agrega la jugada al carrito con el costo de 56 combinaciones tanto para el Oro como para la Revancha.

---

## Reglas de Negocio

- **Costo Elevado:** Se debe validar que el saldo soporte el costo de 56 apuestas dobles.

## Concept Linkers (Knowledge Base)

- [[5deoro_logica_oficial]]: Reglas de Revancha Múltiple.
