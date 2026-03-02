# ORO-CM8-004: Jugada de 8 Números Común sorpresa

## Descripción y Escenario

**ID:** ORO-CM8-004
**Título:** Ingresar una jugada múltiple de 8 números aleatorios en 5 de Oro Común.
**Tags:** #automatizado #5deoro #sorpresa #multiple

### Escenario (Gherkin)

**DADO** que el subagente selecciona "Múltiple de 8"
**CUANDO** presiona "Sorpresa"
**ENTONCES** el sistema genera 8 números únicos
**Y** agrega al carrito con el costo de 56 apuestas.

---

## Reglas de Negocio

- **Cálculo:** Combinación de 8 elementos tomados de a 5 = 56 apuestas.

## Concept Linkers (Knowledge Base)

- [[5deoro_logica_oficial]]: Tablas de apuestas múltiples.
