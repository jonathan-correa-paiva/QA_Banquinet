# CU-TOM-007: Ingresar jugada de Tómbola de 10 números sorpresa

## Descripción y Escenario

**ID:** CU-TOM-007
**Título:** Generar una jugada de Tómbola de 10 números aleatoriamente.
**Tags:** #automatizado #tombola #sorpresa

### Escenario (Gherkin)

**DADO** que un subagente selecciona la opción de 10 números (Máximo permitido)
**CUANDO** presiona el botón "Sorpresa" e ingresa la apuesta
**ENTONCES** el sistema genera 10 números únicos y los agrega al carrito.

---

## Reglas de Negocio

- **Máximo:** 10 números es el tope de la Tómbola.
- **RNG:** Todos los números deben ser diferentes.

## Concept Linkers (Knowledge Base)

- [[tombola_logica_oficial]]: Límites y premios de 10 números.
