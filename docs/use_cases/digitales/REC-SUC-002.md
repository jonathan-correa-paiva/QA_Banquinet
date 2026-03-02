# REC-SUC-002: Recarga de Celular Exitosa

## Descripción y Escenario

**ID:** REC-SUC-002
**Título:** Realizar una recarga de saldo celular correctamente.
**Tags:** #automatizado #recargas #digitales

### Escenario (Gherkin)

**DADO** que un subagente selecciona "Recargas" y elige un operador (ej: "Antel")
**CUANDO** ingresa el número de celular del cliente (09XXXXXXX)
**Y** selecciona el monto de la recarga
**Y** presiona "Ingresar"
**ENTONCES** el sistema valida con el HUB de servicios
**Y** agrega la recarga al carrito para su cobro final.

---

## Reglas de Negocio

- **Formato:** Validar que el número tenga 9 dígitos y comience con 09.
- **Monto:** Validar que esté dentro de los rangos permitidos por el operador.

## Concept Linkers (Knowledge Base)

- [[servicios_infraestructura]]: Integración con el motor de recargas.
