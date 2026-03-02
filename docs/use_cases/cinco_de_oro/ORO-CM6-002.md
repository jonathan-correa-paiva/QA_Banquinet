# ORO-CM6-002: Jugada de 6 Números Común sorpresa

## Descripción y Escenario

**ID:** ORO-CM6-002
**Título:** Ingresar una jugada de 6 números (Múltiple) de forma aleatoria.
**Tags:** #automatizado #5deoro #sorpresa #multiple

### Escenario (Gherkin)

**DADO** que un subagente elige la modalidad "Común" en 5 de Oro
**CUANDO** selecciona la opción "Múltiple de 6" y presiona "Sorpresa"
**ENTONCES** el sistema debe generar 6 números aleatorios distintos entre 01 y 48
**Y** permitir el ingreso al carrito como una jugada múltiple.

---

## Reglas de Negocio

- **Combinaciones:** Genera 6 apuestas simples.
- **Validación:** Se debe cobrar el equivalente a 6 apuestas comerciales.

## Concept Linkers (Knowledge Base)

- [[5deoro_logica_oficial]]: Tablas de apuestas múltiples.
