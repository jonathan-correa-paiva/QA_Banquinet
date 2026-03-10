# 📝 Escenarios Gherkin: Bugs Activos v1.0.1+19

## [BUG-CAR-003] Carrito: App cuelga al emitir tras vaciar jugada única (vía Menú Contextual)

**Escenario:** El botón de emisión no se inhabilita al vaciar el carrito mediante el menú de opciones
  **Dado** que el usuario tiene exactamente una jugada en el carrito
  **Y** el usuario abre el menú de opciones (tres puntos) de la jugada
  **Y** el usuario selecciona la opción para borrar la jugada
  **Cuando** la jugada es eliminada y el carrito queda vacío
  **Entonces** la aplicación DEBERÍA inhabilitar el botón "Emitir" o cambiarlo a "Volver"
  **Pero** la aplicación no inhabilita el botón "Emitir" (Falla)
  **Cuando** el usuario presiona el botón "Emitir" con el carrito vacío
  **Entonces** la aplicación entra en un estado "Autorizando" y queda bloqueada infinitamente (Hang)

---

## [BUG-5OR-003] 5 de Oro: Estado incorrecto del botón ante error de validación

**Escenario:** Transición prematura a "Emitir" con jugada inválida en pantalla
  **Dado** que el carrito ya contiene al menos una jugada válida
  **Y** el usuario intenta ingresar una nueva jugada de "5 de Oro"
  **Cuando** el usuario ingresa una jugada incompleta (ej: 4 números de 5)
  **Y** el sistema marca el error de validación en rojo
  **Entonces** el botón de acción principal DEBERÍA decir "Ingresar" (deshabilitado o a la espera de corrección)
  **Pero** el botón muestra la acción "Emitir" (Falla)
  **Cuando** el usuario completa el número faltante
  **Entonces** el botón SIGUE diciendo "Emitir" en lugar de "Ingresar"
  **Y** si el usuario presiona "Emitir", se procesa el ticket sin incluir la jugada que acaba de completar

---

## [REVISAR-QUI-001] Carrito Mixto: Latencia en autorizaciones (A revisar)

**Escenario:** Confirmar manejo de latencia extrema en carritos mixtos
  **Dado** que el usuario tiene un carrito con múltiples juegos (ej: QUI + TOM)
  **Y** se sospecha de interferencia por upload concurrente de logs
  **Cuando** el usuario presiona "Emitir"
  **Y** ocurre una demora excepcional del servidor (>100s)
  **Entonces** la aplicación DEBERÍA mostrar un indicador de carga cancelable o manejar el timeout
  **Pero** la pantalla se "tranca" (Application Hang) y queda bloqueada indefinidamente (Falla)
  **Y** el diálogo de alternativas no se renderiza aunque llegue la respuesta final
  **Nota:** Se requiere revisión de logs de red (Dio) para confirmar por qué la UI no recupera el hilo principal.

---

## [BUG-CIE-005] Lista de Sorteos: Falta de auto-refresco de sorteos

**Escenario:** La lista de sorteos no se actualiza automáticamente al alcanzarse la fecha de cierre
  **Dado** que el POS está encendido y mostrando la lista de sorteos
  **Y** se alcanza la `fechaCierre` de uno o más sorteos vigentes
  **Cuando** el tiempo transcurre pasada la fecha de cierre
  **Entonces** el sistema DEBERÍA refrescar automáticamente la lista de sorteos disponibles
  **Pero** el POS mantiene los sorteos caducados en la lista (Falla)
  **Y** si el usuario intenta realizar una apuesta a uno de esos sorteos caducados
  **Entonces** el sistema rechaza la apuesta por fecha inválida (Comportamiento observado)
  **Nota:** El foco del bug es la falta de actualización de la UI, no la apuesta en sí.
