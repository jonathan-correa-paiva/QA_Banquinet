# CU-OFF-002: Ingresar jugada en modo Offline (Sin conexión)

## Descripción y Escenario

**ID:** CU-OFF-002
**Título:** Comportamiento del POS cuando se pierde la conexión a internet.
**Tags:** #automatizado #offline #infraestructura

### Escenario (Gherkin)

**DADO** que el POS no tiene conexión con la Banca
**CUANDO** el subagente intenta ingresar cualquier jugada
**ENTONCES** el sistema debe mostrar un indicador de "Offline"
**Y** permitir guardar las jugadas de forma local pero con un aviso de que no han sido validadas por riesgo.

---

## Reglas de Negocio

- **Sincronización:** Una vez recuperada la red, el POS debe enviar automáticamente las jugadas pendientes.

## Concept Linkers (Knowledge Base)

- [[infraestructura_servidores]]: Protocolo de reintento.
