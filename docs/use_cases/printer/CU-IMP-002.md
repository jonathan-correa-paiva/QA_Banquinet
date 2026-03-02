# CU-IMP-002: Error de Impresora (Sin papel)

## Descripción y Escenario

**ID:** CU-IMP-002
**Título:** Gestionar el error de hardware cuando no se puede emitir el ticket físico.
**Tags:** #automatizado #printer #errores

### Escenario (Gherkin)

**DADO** que el POS se quedó sin papel térmico
**CUANDO** se intenta confirmar una venta
**ENTONCES** el sistema debe emitir una alerta sonora y visual "Error de Impresora: Sin papel"
**Y** permitir reintentar la impresión una vez cargado el rollo sin duplicar la venta en la Banca.

---

## Concept Linkers (Knowledge Base)

- [[servicios_infraestructura]]: Drivers de periféricos.
