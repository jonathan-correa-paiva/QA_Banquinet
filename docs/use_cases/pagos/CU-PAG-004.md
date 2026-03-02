# CU-PAG-004: Pago de ticket con premio mayor (Dirigir a Banca)

## Descripción y Escenario

**ID:** CU-PAG-004
**Título:** Gestión de premios que exceden el límite de pago de la terminal.
**Tags:** #automatizado #pagos #excepciones

### Escenario (Gherkin)

**DADO** que el ticket tiene un premio de "$50.000" (Excede el límite del POS)
**CUANDO** el subagente intenta procesar el pago
**ENTONCES** el sistema debe mostrar un mensaje "Premio Mayor: El cliente debe dirigirse a la Banca Central".

---

## Reglas de Negocio

- **Límite:** El límite de pago en POS suele ser de $10.000 (ajustable).
