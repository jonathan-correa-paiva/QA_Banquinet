# CU-CAN-003: Intentar anular ticket de juego diferido fuera de plazo

## Descripción y Escenario

**ID:** CU-CAN-003
**Título:** Gestionar el error al intentar anular un ticket cuando el sorteo ya está cerrado o en hora de restricción.
**Tags:** #automatizado #anulaciones #errores #flujo-negativo

### Escenario (Gherkin)

**DADO** que un subagente intenta anular un ticket de un sorteo de Quiniela que ya ha cerrado
**CUANDO** ingresa los datos del ticket para anularlo
**ENTONCES** el sistema debe consultar al servidor y recibir un error de validación
**Y** debe mostrar un mensaje claro al usuario indicando: "No está permitida la anulación para este sorteo/ticket (Fuera de plazo)".

---

## Precondiciones

- El ticket ingresado pertenece a un sorteo cuya hora de cierre ya pasó.

## Poscondiciones

- El ticket mantiene su estado original ("Vendido").
- El saldo del subagente no sufre modificaciones.

## Reglas de Negocio

- **Sincronización:** El POS debe consultar el estado del sorteo en tiempo real para evitar anulaciones offline indebidas.
- **Feedback:** El mensaje de error debe ser informativo para el cliente final (el apostador).

## Casos Alternativos y Excepciones

- **Error de Red:** Si no hay conexión para validar la anulación, el sistema debe impedir la operación por seguridad (Fail-Safe).

## Criterios de Aceptación (QA)

1. Forzar una hora de cierre de sorteo y validar que el POS bloquee la anulación.
2. Verificar que el ticket de anulación NO se imprima en este escenario.

## Concept Linkers (Knowledge Base)

- [[quiniela_logica_oficial]]: Tiempos de cierre y restricciones.
- [[logica_riesgo_banca]]: Seguridad en transacciones fuera de hora.
