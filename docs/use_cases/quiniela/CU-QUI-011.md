# CU-QUI-011: Ingresar jugada de Quiniela de 3 cifras "Sorpresa"

## Descripción y Escenario

**ID:** CU-QUI-011
**Título:** Ingresar una jugada de Quiniela de 3 cifras con número aleatorio (Sorpresa).
**Tags:** #automatizado #quiniela #3cifras #sorpresa

### Escenario (Gherkin)

**DADO** que un subagente se encuentra en la pantalla de Quiniela modalidad "3 Cifras"
**CUANDO** presiona el botón "Sorpresa"
**Y** el sistema genera el número "582"
**Y** el subagente elige el sorteo "Vespertino" con una apuesta de "$100"
**Y** presiona el botón "Ingresar"
**ENTONCES** el sistema debe permitir el ingreso al carrito reflejando el número generado y el monto apostado.

---

## Precondiciones

- El subagente debe estar en la vista de Quiniela de 3 Cifras.
- Hay sorteos habilitados para el día actual.

## Poscondiciones

- La jugada se agrega al carrito.
- El campo de número se limpia tras el ingreso.

## Reglas de Negocio

- **RNG:** El número generado debe tener exactamente 3 cifras (000-999).
- **Validación de Sorteo:** Debe haber al menos un sorteo seleccionado para habilitar el ingreso.
- **Monto Máximo:** Se debe validar que la apuesta no supere el tope de riesgo para 3 cifras en el sorteo seleccionado.

## Casos Alternativos y Excepciones

- **Número Bloqueado:** Si el número aleatorio generado está bloqueado (por exceso de apuestas), el sistema debe informar al subagente y permitirle generar uno nuevo o ingresar otro manualmente.

## Criterios de Aceptación (QA)

1. Verificar que el número generado tenga ceros a la izquierda si es menor a 100 (ej: 042).
2. Validar que al cambiar de pestaña (ej: pasar de 3 cifras a 1 cifra), el número generado se pierda si no fue ingresado.

## Concept Linkers (Knowledge Base)

- [[quiniela_logica_oficial]]: Especificaciones de 3 cifras.
- [[logica_riesgo_banca]]: Bloqueos y topes de riesgo.
