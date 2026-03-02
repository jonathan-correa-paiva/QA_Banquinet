# REC-INV-001: Intento de recarga con número inválido

## Descripción y Escenario

**ID:** REC-INV-001
**Título:** Bloqueo de recarga ante número de celular mal formado.
**Tags:** #automatizado #recargas #errores

### Escenario (Gherkin)

**DADO** que el subagente ingresa un número de 7 dígitos
**CUANDO** intenta procesar la recarga
**ENTONCES** el campo de entrada debe marcarse en rojo
**Y** el botón de "Ingresar" debe permanecer deshabilitado.

---

## Concept Linkers (Knowledge Base)

- [[servicios_infraestructura]]: Formatos de celular.
