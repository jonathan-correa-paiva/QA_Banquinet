# SRT-ACT-002: Actualización de Software requerida

## Descripción y Escenario

**ID:** SRT-ACT-002
**Título:** Bloqueo del POS ante una actualización crítica obligatoria.
**Tags:** #automatizado #config #mantenimiento

### Escenario (Gherkin)

**DADO** que existe una nueva versión del POS v1.2.0
**CUANDO** el subagente inicia sesión
**ENTONCES** el sistema debe impedir la venta y mostrar un progreso de descarga e instalación.

---

## Concept Linkers (Knowledge Base)

- [[infraestructura_servidores]]: Despliegue de actualizaciones.
