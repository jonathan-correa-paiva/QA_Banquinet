# ORO-CM4-001: Jugada de 4 Números Común sorpresa

## Descripción y Escenario

**ID:** ORO-CM4-001
**Título:** Ingresar una jugada de Cinco de Oro Común de 4 Números con números aleatorios (Sorpresa).
**Tags:** #automatizado #5deoro #sorpresa

### Escenario (Gherkin)

**DADO** que un subagente se encuentra en la pantalla de "5 de Oro"
**Y** elige la modalidad "Común"
**CUANDO** presiona el botón "Sorpresa" eligiendo solo 4 números
**ENTONCES** el sistema debe generar 4 números aleatorios (01-48)
**Y** el subagente debe completar el 5to número manualmente para poder ingresar la jugada
**Y** el sistema debe agregar la jugada al carrito tras la confirmación.

---

## Precondiciones

- El sorteo de 5 de Oro debe estar abierto.

## Poscondiciones

- La jugada se agrega al carrito con la marca de "Sorpresa (Parcial)".

## Reglas de Negocio

- **Combinaciones:** Las jugadas de 4 números son "Múltiples" que generan 44 apuestas distintas (combinando los 4 fijos con todos los demás números restantes).
- **Validación:** No se puede ingresar la jugada si no se han definido al menos los 4 números base.

## Criterios de Aceptación (QA)

1. Verificar que se generen exactamente 4 números.
2. Confirmar que el costo calculado en el carrito sea el equivalente a 44 apuestas.

## Concept Linkers (Knowledge Base)

- [[5deoro_logica_oficial]]: Reglas de apuestas múltiples y combinaciones.
