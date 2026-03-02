# CU-PAG-003: Pago de ticket ganador menor a $10.000

## Descripción y Escenario

**ID:** CU-PAG-003
**Título:** Realizar el pago de un ticket con premio menor en el POS.
**Tags:** #automatizado #pagos

### Escenario (Gherkin)

**DADO** que un cliente presenta un ticket ganador por "$500"
**CUANDO** el subagente lee el código del ticket y presiona "Pagar"
**ENTONCES** el sistema valida el premio con la Banca
**Y** descuenta el monto del saldo de la terminal (Caja) para entregarlo al cliente.

---

## Concept Linkers (Knowledge Base)

- [[servicios_infraestructura]]: Auditoría de pagos.
