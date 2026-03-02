# CU-CAN-002: Anular ticket diferido (5 de Oro / Lotería)

## Descripción y Escenario

**ID:** CU-CAN-002
**Título:** Anular un ticket de un juego diferido (como 5 de Oro) antes del cierre del sorteo.
**Tags:** #automatizado #anulaciones #5deoro

### Escenario (Gherkin)

**DADO** que un subagente ha emitido un ticket de 5 de Oro
**Y** el sorteo aún se encuentra abierto (no ha pasado la hora límite)
**CUANDO** el subagente ingresa al menú de "Anulaciones" y selecciona el ticket
**Y** confirma la operación
**ENTONCES** el sistema debe comunicarse con el servidor central de la Banca
**Y** marcar el ticket como "ANULADO"
**Y** el saldo del subagente debe ser acreditado por el valor del ticket anulado.

---

## Precondiciones

- El ticket debe haber sido emitido en el mismo día o dentro del margen permitido por la regulación.
- El sorteo correspondiente NO debe haber comenzado ni cerrado.

## Poscondiciones

- El ticket queda invalidado para el sorteo.
- Se emite un comprobante de anulación (físico o digital).

## Reglas de Negocio

- **Tiempo Límite:** Solo se permite anular tickets de diferidos hasta N minutos antes del sorteo (regla configurable por la Banca).
- **Límite de Tiempo Post-Venta:** Algunos juegos permiten anular solo dentro de los primeros X minutos tras la venta (ej: 10 minutos).
- **Integridad:** Una vez anulado, el ticket no puede ser re-activado.

## Casos Alternativos y Excepciones

- **Sorteo Cerrado:** Si el subagente intenta anular un ticket de un sorteo ya cerrado, el sistema debe arrojar un error "Anulación fuera de plazo".
- **Ticket ya Pagado:** (Borde) Si el ticket tuviera premio y ya hubiera sido pagado, la anulación es imposible.

## Criterios de Aceptación (QA)

1. Verificar que el botón "Anular" esté deshabilitado si el tiempo límite expiró.
2. Confirmar que el saldo del subagente en el POS se actualiza tras la anulación exitosa.
3. Validar la impresión del ticket de anulación.

## Concept Linkers (Knowledge Base)

- [[5deoro_logica_oficial]]: Reglas de anulación de juegos de sorteo.
- [[infraestructura_servidores]]: Comunicación sincrónica para anulaciones.
