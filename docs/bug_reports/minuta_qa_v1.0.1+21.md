# 📝 Minuta de Reporte QA - v1.0.1+21
**Fecha:** 2026-03-17
**Proyecto:** gPOS 1.0
**Responsable:** Jonathan Correa

---

## 📑 Resumen de la Versión

| Versión | Fecha | Responsable | Estado General |
| :--- | :--- | :--- | :--- |
| **v1.0.1+21** | 17/03/2026 | Jonathan Correa | ⏳ Pendiente Instalación |

## 📊 Objetivos de Testeo (v21)

Esta versión se centra en validar las correcciones de Nacho sobre:
1. **Optimización de Batería**: Verificar si el proceso de "Corte" se mantiene vivo en segundo plano.
2. **Concurrencia de Paquetes**: Validar si mejora la latencia en las apuestas.
3. **Refresco de Sorteos**: Confirmar si el auto-refresh funciona tras inactividad.

---

## 📋 Checklist de Validación (Regresión Crítica)

- [ ] **[BUG-CIE-005]** Refresco automático tras periodo de inactividad (Corte).
- [ ] **Gestión de PIN**: Enmascaramiento en Alerta por Importe y Sincronización con Preferencias.
- [ ] **Botón Accion**: Validar que el botón vuelva a "Ingresar" tras corregir jugadas inválidas.
- [ ] **Lotería**: Verificar dropdown de fracciones y opción "Entero".

---

## 🧪 Trazabilidad de Evidencias (v21)

*Referencia: [[docs/core/ARCHITECTURE_TRACEABILITY|Manual de Trazabilidad]]*

| Escenario | Resultado | Dialog ID / Timestamp | Obs |
| :--- | :--- | :--- | :--- |
| Prueba de Latencia | | | |
| Auto-refresh 14hs | | | |

---
[[bug_reports/meetings/minuta_2026_03_17|Volver a la Agenda de la Reunión]]
