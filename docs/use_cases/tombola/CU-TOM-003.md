# CU-TOM-003: Ingresar jugada de Tómbola de 5 números sorpresa

## Descripción y Escenario

**ID:** CU-TOM-003
**Título:** Generar una jugada de Tómbola de 5 números aleatoriamente.
**Tags:** #automatizado #tombola #sorpresa

### Escenario (Gherkin)

**DADO** que un subagente está en la pantalla de Tómbola
**CUANDO** presiona el botón "Sorpresa" para una jugada de 5 números
**ENTONCES** el sistema genera 5 números (00-99)
**Y** permite ingresar la jugada eligiendo el importe.

---

## Concept Linkers (Knowledge Base)

- [[tombola_logica_oficial]]: Reglas de apuestas de 5 números.
