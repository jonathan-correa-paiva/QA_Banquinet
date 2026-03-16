n toggled on, Antigravity will use your AI credits to fulfill model requests once you're out of model quota. Antigravity will always use your model quota first before using AI credits.# 🪲 Reporte de Regresión - v1.0.1+20

**Fecha de Revisión:** 10/03/2026
**QA:** Jonathan Correa
**Grado de Certeza:** Pendiente de Ejecución

---

## ✅ Bugs Resueltos en v1.0.1+20 (Verificado)

- [[BUG-CAR-003] Carrito: App cuelga al emitir tras vaciar jugada única](file:///home/jonathan.correa/Projects/QA_Banquinet/docs/use_cases/features/cart/cart_management.feature) #bug #carrito #resuelto
- [[BUG-5OR-003] 5 de Oro: Estado incorrecto del botón (Duplicado)](file:///home/jonathan.correa/Projects/QA_Banquinet/docs/use_cases/features/games/5_oro_validation.feature) #bug #5deoro #resuelto

---

## ⛔ Bugs Activos Confirmados (Re-testing Requerido)

### [BUG-LOT-001] Lotería: Dropdown desactualizado y fallo Entero #bug #loteria #dropdown #stock

- **Descripción:** El dropdown muestra opciones de fracciones que ya no existen tras venta parcial. El modo "Entero" falla en autorización.
- **Estado:** ⛔ Falla. (Ver [lottery_dropdown_error.feature](file:///home/jonathan.correa/Projects/QA_Banquinet/docs/use_cases/features/games/lottery_dropdown_error.feature))

### [BUG-CIE-005] Cierres: Falta de auto-refresh de sorteos #bug #cierres #automatico #rc

- **Descripción:** El POS no refresca sorteos automáticamente al vencer el cierre. Arrastrado de v12.
- **Estado:** ⛔ Falla (Investigación pendiente de logs).

### [BUG-CFG-002/003/004] Configuración de PIN: Seguridad y Sincronización #bug #config #seguridad

- **Descripción:** PIN visible en alertas, desincronización entre pantallas y falta de botón confirmar.
- **Estado:** ⛔ Falla.

---

## 🔍 Observaciones y Comportamientos bajo Investigación

### [REVISAR-QUI-001] Carrito Mixto: Bloqueo de UI (Application Hang) ante latencia extrema

- **Descripción:** Ante esperas >100s en carritos mixtos (QUI+TOM), la pantalla se "tranca" y queda inoperable.
- **Falla Confirmada:** El hang es una falla de manejo de hilos/cola de red.
- **Investigación:** Analizar saturación de Dio por upload de logs.

### [BUG-CIE-005] Cierres: Falta de auto-refresh de sorteos #bug #cierres #automatico #rc

- **Descripción:** El POS no refresca sorteos automáticamente al vencer el cierre.
- **Estado:** ⛔ Falla (Investigación pendiente de logs).

---

## 📊 Resumen de Cobertura v1.0.1+20

| Módulo | Total | Automatizados | Manuales | OK (v20) | Falla | Pend. |
| :--- | :---: | :---: | :---: | :---: | :---: | :---: |
| Quiniela | 22 | 11 | 11 | 11 | 0 | 11 |
| Tómbola | 11 | 11 | 0 | 11 | 0 | 0 |
| 5 de Oro | 13 | 11 | 2 | 13 | 0 | 0 |
| Lotería | 7 | 6 | 1 | 4 | 2 | 1 |
| Supermatch | 2 | 1 | 1 | 1 | 0 | 1 |
| Digitales | 6 | 6 | 0 | 6 | 0 | 0 |
| Mi Negocio | 12 | 12 | 0 | 12 | 0 | 0 |
| Configuración | 2 | 2 | 0 | 2 | 0 | 0 |
| Anulaciones | 4 | 0 | 4 | 1 | 0 | 3 |
| Pagos | 8 | 1 | 7 | 7 | 0 | 1 |
| Alternativas | 4 | 1 | 3 | 4 | 0 | 0 |
| Carrito | 4 | 3 | 1 | 4 | 0 | 0 |
| Config. Inicial | 3 | 0 | 3 | 1 | 0 | 2 |
| Cierres | 5 | 0 | 5 | 1 | 1 | 3 |
| Impresión | 2 | 0 | 2 | 2 | 0 | 0 |
| Sin Conectividad | 2 | 0 | 2 | 0 | 0 | 2 |
| Reglas de Negocio | 2 | 0 | 2 | 0 | 0 | 2 |
| UX Y Navegación | 1 | 0 | 1 | 1 | 0 | 0 |
| **Bugs (Específicos)** | 10 | 0 | 10 | 7 | 3 | 0 |
| **TOTAL** | **114** | **65** | **49** | **86** | **6** | **22** |
