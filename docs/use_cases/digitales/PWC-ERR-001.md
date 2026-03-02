# PWC-ERR-001: Error en venta de Pin Web (Stock Agotado)

## Descripción y Escenario

**ID:** PWC-ERR-001
**Título:** Gestionar el error cuando no hay stock del Pin solicitado.
**Tags:** #automatizado #pines #errores

### Escenario (Gherkin)

**DADO** que un subagente selecciona un Pin de "$500"
**CUANDO** el HUB responde que no hay pines disponibles
**ENTONCES** el sistema debe mostrar un mensaje "Sin Stock disponible para este monto"
**Y** no debe permitir el ingreso al carrito.

---

## Concept Linkers (Knowledge Base)

- [[servicios_infraestructura]]: Gestión de stock de terceros.
