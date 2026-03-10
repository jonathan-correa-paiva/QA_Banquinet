# 🪲 Reporte de Regresión - v1.0.1+20

**Fecha de Revisión:** 10/03/2026
**QA:** Jonathan Correa
**Grado de Certeza:** Pendiente de Ejecución

---

## ✅ Bugs Resueltos en Versiones Anteriores (Historial)

*(Ver reportes de v1.0.1+19 y anteriores para detalle de cierres)*

---

## ⛔ Bugs Activos Confirmados (Re-testing Requerido)

### [BUG-CAR-003] Carrito: App se cuelga al emitir tras vaciar jugada única
- **Descripción:** Al borrar la única jugada del carrito, éste queda vacío pero el botón sigue diciendo "Emitir". Al presionarlo, la app se queda en "Autorizando" y se cuelga.
- **Estado en v19:** Activo. Re-testear en v20.

### [BUG-5OR-003] 5 de Oro: Botón cambia a "Emitir" prematuramente ante error de validación
- **Prioridad:** LOW ⚠️
- **Descripción:** Al editar una jugada y dejarla inválida, el botón cambia a "Emitir" en lugar de "Ingresar".
- **Estado en v19:** Activo. Re-testear en v20.

---

## 🔍 Observaciones y Comportamientos bajo Investigación

### [REVISAR-QUI-001] Carrito Mixto: Bloqueo de UI (Application Hang) ante latencia extrema
- **Descripción:** Ante esperas >100s en carritos mixtos (QUI+TOM), la pantalla se "tranca" y queda inoperable.
- **Falla Confirmada:** El hang es una falla de manejo de hilos/cola de red.
- **Investigación:** Analizar saturación de Dio por upload de logs.

### [BUG-CIE-005] Cierres: Falta de auto-refresh de sorteos
- **Descripción:** El POS no refresca sorteos automáticamente al vencer el cierre.
- **Estado:** Arrastrado desde v12. Re-testear en v20.

---

## 📊 Resumen de Cobertura v1.0.1+20

| Módulo | Total | Automatizados | Manuales | OK (v20) | Falla | Pend. |
| :--- | :---: | :---: | :---: | :---: | :---: | :---: |
| Quiniela | 22 | 11 | 11 | 0 | 0 | 22 |
| Tómbola | 11 | 11 | 0 | 0 | 0 | 11 |
| 5 de Oro | 13 | 11 | 2 | 0 | 0 | 13 |
| Lotería | 6 | 6 | 0 | 0 | 0 | 6 |
| Supermatch | 2 | 1 | 1 | 0 | 0 | 2 |
| Digitales (Pines/Recargas) | 6 | 6 | 0 | 0 | 0 | 6 |
| Mi Negocio | 12 | 12 | 0 | 0 | 0 | 12 |
| Configuración | 2 | 2 | 0 | 0 | 0 | 2 |
| Anulaciones | 4 | 1 | 3 | 0 | 0 | 4 |
| Pagos | 8 | 1 | 7 | 0 | 0 | 8 |
| Alternativas | 4 | 1 | 3 | 0 | 0 | 4 |
| Carrito | 4 | 3 | 1 | 0 | 0 | 4 |
| Config. Inicial | 3 | 0 | 3 | 0 | 0 | 3 |
| Cierres | 5 | 0 | 5 | 0 | 0 | 5 |
| Impresión | 2 | 0 | 2 | 0 | 0 | 2 |
| Sin Conectividad | 2 | 0 | 2 | 0 | 0 | 2 |
| Reglas de Negocio | 2 | 0 | 2 | 0 | 0 | 2 |
| UX Y Navegación | 1 | 0 | 1 | 0 | 0 | 1 |
| **TOTAL** | **109** | **67** | **42** | **0** | **0** | **109** |
