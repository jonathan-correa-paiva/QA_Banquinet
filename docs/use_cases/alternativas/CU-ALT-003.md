# CU-ALT-003: Rechazar alternativa (No confirmar)

## Descripción y Escenario

**ID:** CU-ALT-003
**Título:** Rechazar una propuesta de alternativa y cancelar la operación.
**Tags:** #automatizado #alternativas #flujo-negativo

### Escenario (Gherkin)

**DADO** que un subagente ingresó una jugada que fue rechazada por falta de cupo (Riesgo)
**Y** el sistema muestra una ventana emergente sugiriendo alternativas (ej: "Premio al 20" o "Monto menor")
**CUANDO** el subagente presiona el botón "Cancelar" o "No Confirmar"
**ENTONCES** el sistema debe cerrar la ventana sin realizar ninguna acción
**Y** no debe agregar nada al carrito de compras
**Y** debe mantener los datos de la jugada original en los campos de entrada para permitir corregirlos manualmente.

---

## Precondiciones

- Se ha disparado una alerta de alternativa por lógica de riesgo.

## Poscondiciones

- El estado del carrito permanece sin cambios.
- La ventana de alternativas desaparece.

## Reglas de Negocio

- **Persistencia:** Al rechazar, el sistema no debe "olvidar" los números que el subagente escribió inicialmente; debe permitirle editarlos.
- **Auditoría:** (Si aplica) Se debe registrar internamente que se ofreció una alternativa y fue rechazada por el usuario.

## Casos Alternativos y Excepciones

- **Timeout:** Si el subagente no toma una decisión en X tiempo, la ventana podría cerrarse sola (dependiendo de la configuración del POS).

## Criterios de Aceptación (QA)

1. Verificar que al presionar "No" o "Cerrar", no se genere ningún cupón.
2. Validar que el foco regrese al campo de entrada principal.

## Concept Linkers (Knowledge Base)

- [[logica_riesgo_banca]]: Por qué se ofrecen alternativas.
- [[carrito]]: Verificación de que el contenedor no cambie.
