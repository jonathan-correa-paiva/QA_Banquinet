# CU-CAN-004: Anular ticket de Juego Instantáneo (Digitales / Recargas)

## Descripción y Escenario

**ID:** CU-CAN-004
**Título:** Intentar anular un producto de venta inmediata (Pin o Recarga) y recibir la restricción.
**Tags:** #automatizado #anulaciones #digitales #recargas

### Escenario (Gherkin)

**DADO** que un subagente ha realizado una recarga de celular o vendido un Pin Web
**CUANDO** el cliente se arrepiente y el subagente intenta anular la transacción desde el menú de anulaciones
**ENTONCES** el sistema debe informar que "Este tipo de producto no permite anulación después de emitido"
**Y** no debe permitir procesar la devolución del dinero a través del sistema.

---

## Precondiciones

- El ticket corresponde a una venta de "Servicios Digitales" o "Recargas".

## Poscondiciones

- La transacción permanece como exitosa en el historial de ventas.

## Reglas de Negocio

- **Inmediatez:** A diferencia de los juegos de azar, los servicios de terceros (Antel, Claro, Netflix) se procesan instantáneamente y no tienen botón de "Un-do" para el subagente.
- **Excepción:** En casos de error técnico masivo, las anulaciones solo se gestionan vía Mesa de Ayuda de la Banca, nunca desde el POS local.

## Casos Alternativos y Excepciones

- **Ticket no emitido:** Si la venta falló antes de emitir el ticket (ej: error 404), no hay nada que anular porque el saldo nunca se descontó.

## Criterios de Aceptación (QA)

1. Validar que la opción de anulación no aparezca para productos de tipo "Pines" o "Recargas".
2. Confirmar que el manual de usuario (del POS) mencione explícitamente esta restricción.

## Concept Linkers (Knowledge Base)

- [[servicios_infraestructura]]: Definición técnica de productos instantáneos.
