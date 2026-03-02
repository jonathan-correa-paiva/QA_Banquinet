# ORO-R5E-003: Jugada de 5 Números Revancha con nro. de sorteo

## Descripción y Escenario

**ID:** ORO-R5E-003
**Título:** Ingresar una jugada de 5 de Oro + Revancha especificando un número de sorteo futuro.
**Tags:** #automatizado #5deoro #revancha #sorteo-futuro

### Escenario (Gherkin)

**DADO** que el subagente activa "Revancha"
**Y** selecciona un sorteo futuro específico (ej: Sorteo de Fin de Año)
**CUANDO** ingresa los 5 números y confirma
**ENTONCES** el sistema debe validar que el sorteo futuro esté habilitado
**Y** registrar la jugada en el carrito con la fecha correcta.

---

## Concept Linkers (Knowledge Base)

- [[5deoro_logica_oficial]]: Participación en sorteos especiales.
