# CU-TOM-005: Ingresar jugada de Tómbola de 7 números sorpresa

## Descripción y Escenario

**ID:** CU-TOM-005
**Título:** Generar una jugada de Tómbola de 7 números aleatoriamente.
**Tags:** #automatizado #tombola #sorpresa

### Escenario (Gherkin)

**DADO** que un subagente elige jugada de 7 números
**CUANDO** presiona "Sorpresa"
**ENTONCES** el sistema genera 7 números únicos (00-99) y actualiza el carrito.

---

## Concept Linkers (Knowledge Base)

- [[tombola_logica_oficial]]: Reglas de Tómbola.
