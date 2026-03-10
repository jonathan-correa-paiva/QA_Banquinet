# 🪲 Reporte de Regresión - v1.0.1+19

**Fecha de Revisión:** 06/03/2026
**QA:** Jonathan Correa
**Grado de Certeza:** Confirmado Visualmente (Release build con AOT)

---

## ✅ BUGS RESUELTOS EN ESTA VERSIÓN

## [CU-NAV-001] UX: Tiempo de respuesta entre pantallas < 1s
- **Resolución:** CERRADO ✅
- **Estado:** Confirmado en v1.0.1+19 (release mode con AOT). Navegación fluida sin lags perceptibles. El problema de fluidez reportado en la v17 era un artefacto del modo debug.

## [BUG-CFG-001] Preferencias: Bloqueo al cambiar sonido
- **Resolución:** CERRADO ✅ (PR #303)
- **Estado:** Resuelto en v1.0.1+17.

## [BUG-5OR-001] 5 de Oro: Pantalla gris al consultar sorteos sin resultados
- **Resolución:** CERRADO ✅
- **Estado:** Confirmado resuelto en v1.0.1+17. La pantalla muestra mensaje vacío correcto.

## [BUG-TOM-001] Tómbola: Pérdida del último dígito al teclear rápido
- **Resolución:** CERRADO ✅
- **Estado:** Verificado y corregido en v1.0.1+17.

## [BUG-CFG-002] Títulos de la app: Banner "Debug" en producción (gPos #308)
- **Resolución:** CERRADO ✅
- **Estado:** Verificado en v1.0.1+19. El banner superior derecho ahora dice correctamente "Release v1.0.1+19" con fondo rojo.

## [BUG-CAR-002] Carrito: Error de visualización con múltiples alternativas (gPos #293)
- **Resolución:** CERRADO ✅
- **Estado:** Las alternativas se listan y acumulan correctamente en el carrito, soportando flujos de falta de papel.

## [BUG-LOT-192] Lotería: QR ilegible por tamaño reducido (gPos #192)
- **Resolución:** CERRADO ✅
- **Estado:** El código QR ahora se imprime con mayor tamaño.
- **Observación QA:** "Le cuesta un poco leerlo todavía. Sería conveniente agrandarlo un poco más y despejar el texto anterior."

## [BUG-5OR-002] Resultados: Filtro de fecha deshabilitado tras sorteo sin datos
- **Resolución:** CERRADO ✅
- **Estado:** El selector de fecha responde correctamente y no se bloquea la navegación posterior.

---

## ⛔ BUGS ACTIVOS CONFIRMADOS

## [BUG-CAR-003] Carrito: App se cuelga al emitir tras vaciar jugada única
- **Descripción:** Al borrar la única jugada del carrito, éste queda vacío pero el botón sigue diciendo "Emitir". Al presionarlo, la app se queda en "Autorizando" y se cuelga.
- **Riesgo:** Bloqueo de UI (Application hang).
- **Estado:** Activo en v1.0.1+19.

## [BUG-5OR-003] 5 de Oro: Botón cambia a "Emitir" prematuramente ante error de validación
- **Prioridad:** LOW ⚠️
- **Descripción:** Al editar una jugada y dejarla inválida, el botón cambia a "Emitir" en lugar de "Ingresar".
- **Riesgo:** Pérdida de apuesta (se procesa el carrito sin la jugada que se estaba corrigiendo).
- **Estado:** Activo en v1.0.1+19.

---

## 🔍 OBSERVACIONES BAJO INVESTIGACIÓN

## [REVISAR-QUI-001] Carrito Mixto: Bloqueo de UI (Application Hang) ante latencia extrema
- **Descripción:** Ante esperas >100s en carritos mixtos (QUI+TOM), la pantalla se "tranca" y queda inoperable.
- **Falla Confirmada:** El hang es una falla de diseño/manejo de hilos. Independientemente de la red, la UI debe mantenerse reactiva.
- **Estado:** Bajo investigación técnica (Posible saturación de cola de red por logs).

## [BUG-CIE-005] Cierres: Falta de auto-refresh de sorteos
- **Descripción:** El POS no refresca sorteos automáticamente al vencer el cierre, intentando jugar a sorteos pasados.
- **Comportamiento Esperado:** Actualización automática (≤5min).
- **Estado:** Arrastrado desde v12. Reproducido en v19.

---

## 📊 RESUMEN DE COBERTURA v1.0.1+19

Total de Casos: 109
Automatizados: 90
Pendientes: 19

| Módulo | Total | Automatizados | Pendientes |
| :--- | :--- | :--- | :--- |
| Quiniela | 22 | 18 | 4 |
| Tómbola | 11 | 11 | 0 |
| 5 de Oro | 13 | 13 | 0 |
| Lotería | 6 | 6 | 0 |
| Supermatch | 2 | 1 | 1 |
| Digitales (Pines) | 6 | 6 | 0 |
| Mi Negocio | 12 | 12 | 0 |
| Configuración | 2 | 2 | 0 |
| Anulaciones | 4 | 1 | 3 |
| Pagos | 8 | 7 | 1 |
| Alternativas | 4 | 4 | 0 |
| Carrito | 4 | 4 | 0 |
| Config. Inicial | 3 | 1 | 2 |
| Cierres | 5 | 1 | 4 |
| Impresión | 2 | 2 | 0 |
| Sin Conectividad | 2 | 0 | 2 |
| Reglas de Negocio | 2 | 0 | 2 |
| UX Y Navegación | 1 | 1 | 0 |
| **TOTAL** | **109** | **90** | **19** |
