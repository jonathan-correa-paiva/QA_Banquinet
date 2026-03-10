# 🪲 Reporte de Regresión - v1.0.1+20 (GDOCS)

**Nota:** Este documento está optimizado para copiar y pegar en Google Docs.

## ✅ Bugs Resueltos en Versiones Anteriores (Historial)

*(Ver reportes anteriores para detalle)*

---

## ⛔ Bugs Activos Confirmados (Re-testing Requerido)

## [BUG-CAR-003] Carrito: App se cuelga al emitir tras vaciar jugada única
- **Descripción:** Al borrar la única jugada del carrito (vía menú contextual), la app se queda en "Autorizando" y se cuelga.
- **Estado:** Activo.

## [BUG-5OR-003] 5 de Oro: Botón de acción cambia de Ingresar a Emitir prematuramente
- **Descripción:** Al editar una jugada y dejarla inválida, el botón cambia a "Emitir" erróneamente.
- **Estado:** Activo.

---

## 🔍 Comportamientos bajo Investigación

## [REVISAR-QUI-001] Carrito Mixto: Bloqueo de UI (Application Hang) ante latencia extrema
- **Investigación:** Analizando saturación de Dio por upload de logs en carritos QUI+TOM.

## [BUG-CIE-005] Lista de Sorteos: Falta de auto-refresh de sorteos
- **Descripción:** El POS no refresca la lista de sorteos automáticamente al alcanzar la fecha de cierre.

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
