# ORO-CM7-003: Jugada de 7 Números Común sorpresa

## Descripción y Escenario

**ID:** ORO-CM7-003
**Título:** Ingresar una jugada múltiple de 7 números aleatorios en 5 de Oro Común.
**Tags:** #automatizado #5deoro #sorpresa #multiple

### Escenario (Gherkin)

**DADO** que el subagente selecciona "Múltiple de 7"
**CUANDO** presiona "Sorpresa" y confirma
**ENTONCES** el sistema genera 7 números únicos (01-48)
**Y** agrega la jugada al carrito con el costo de 21 apuestas simples.

---

## Reglas de Negocio

- **Cálculo:** Combinación de 7 elementos tomados de a 5 = 21 apuestas.

## Concept Linkers (Knowledge Base)

- [[5deoro_logica_oficial]]: Tablas de apuestas múltiples.
