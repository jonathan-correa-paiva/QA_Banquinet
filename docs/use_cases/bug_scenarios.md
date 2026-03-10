# 📝 Escenarios Gherkin: Bugs Activos v1.0.1+19

## [BUG-CAR-003] Carrito: App cuelga al emitir tras vaciar jugada única

**Escenario:** Bloqueo de UI al intentar emitir un carrito que quedó vacío por borrado manual
  **Dado** que el usuario tiene exactamente una jugada en el carrito
  **Y** el usuario está en la pantalla del carrito
  **Cuando** el usuario borra la única jugada del carrito
  **Entonces** el carrito debe mostrarse vacío
  **Y** el botón de acción principal DEBERÍA cambiar a "Volver" o deshabilitarse
  **Pero** el botón sigue diciendo "Emitir" (Falla)
  **Cuando** el usuario presiona el botón "Emitir"
  **Entonces** la aplicación entra en estado "Autorizando" y queda bloqueada indefinidamente

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

## [BUG-CIE-005] Cierres: Falta de auto-refresh de sorteos

**Escenario:** Intento de apuesta a sorteos caducados por falta de actualización
  **Dado** que ha expirado la `fechaCierre` del sorteo vigente
  **Cuando** el sistema llega a la hora del cierre
  **Entonces** el POS DEBERÍA actualizar automáticamente la lista de sorteos apostables (≤ 5 min)
  **Pero** el POS mantiene los sorteos anteriores (Falla)
  **Y** si el operador intenta apostar, el sistema falla por intentar jugar a sorteos de fechas pasadas
  **Y** el operador se ve obligado a ir a "Configuración -> Actualizar Sorteos" manualmente
