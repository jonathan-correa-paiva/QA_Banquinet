# CU-QUI-010: Ingresar jugada de Quiniela Redoblona "Sorpresa"

## Descripción y Escenario

**ID:** CU-QUI-010
**Título:** Ingresar una jugada de Quiniela Redoblona con números aleatorios (Sorpresa).
**Tags:** #automatizado #quiniela #redoblona #sorpresa

### Escenario (Gherkin)

**DADO** que un subagente se encuentra en la pantalla de Quiniela modalidad "Redoblona"
**Y** selecciona el sorteo "Nocturno"
**CUANDO** presiona el botón "Sorpresa" para la primera posición
**Y** presiona el botón "Sorpresa" para la segunda posición
**Y** el sistema genera automáticamente los números "77" y "02"
**Y** el subagente ingresa un importe de "$20" y presiona "Ingresar"
**ENTONCES** el sistema debe aceptar la jugada y mostrar un ícono de "Sorpresa" o "S" en el carrito para identificar que fue generada aleatoriamente.

---

## Precondiciones

- El subagente debe estar en la vista de Redoblona.
- El generador de números aleatorios (RNG) debe estar operativo.

## Poscondiciones

- La jugada se agrega al carrito con la marca de "Sorpresa".
- Los números generados son visibles antes de presionar "Ingresar" si la UI lo permite, o se revelan tras el ingreso.

## Reglas de Negocio

- **RNG:** Los números generados deben estar en el rango 00-99.
- **No duplicados:** El sistema no debe generar el mismo número para ambas posiciones de la redoblona sorpresa.
- **Transparencia:** El subagente puede cambiar los números generados volviendo a presionar "Sorpresa" antes de ingresar la jugada.

## Casos Alternativos y Excepciones

- **Falla de RNG:** Si el generador falla, el sistema debe permitir el ingreso manual o mostrar un error genérico.

## Criterios de Aceptación (QA)

1. Verificar que al presionar "Sorpresa" se llenen automáticamente los campos de número.
2. Confirmar que no se generen números de 1 sola cifra (deben ser 00, 01, etc.).
3. Verificar que la jugada en el carrito tenga el indicador correspondiente de jugada aleatoria.

## Concept Linkers (Knowledge Base)

- [[quiniela_logica_oficial]]: Funcionamiento de la jugada sorpresa.
- [[carrito]]: Visualización de jugadas aleatorias.
