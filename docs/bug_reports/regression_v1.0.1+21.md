# 🪲 Reporte de Regresión - v1.0.1+21

**Fecha de Revisión:** 17/03/2026
**QA:** Jonathan Correa
**Grado de Certeza:** Pendiente de Validación (Carga de v21)

---

## 🛠️ En Verificación para v1.0.1+21 (Fixes de Nacho)

Estos puntos han sido reportados como corregidos por Nacho y requieren validación exhaustiva en esta versión:

### [BUG-CIE-005] Cierres: Refresco automático tras periodo de inactividad (Corte) #bug #cierres #automatico #rc
- **Estado anterior:** ⛔ Falla.
- **Objetivo v21:** Confirmar si el auto-refresh funciona tras inactividad y si la optimización de batería no "mata" el proceso.

### [BUG-CFG-002/003/004] Gestión de PIN: Seguridad y Sincronización #bug #config #seguridad
- **Estado anterior:** ⛔ Falla.
- **Objetivo v21:** Validar enmascaramiento en Alertas por Importe y sincronización con Preferencias.

### [BUG-LOT-001] Lotería: Dropdown de fracciones y modo "Entero" #bug #loteria #dropdown #stock
- **Estado anterior:** ⛔ Falla.
- **Objetivo v21:** Verificar dropdown de fracciones y opción "Entero".

### [REVISAR-QUI-001] Carrito Mixto: Optimización de Concurrencia (Latencia)
- **Estado anterior:** 🔍 Investigación (Application Hang).
- **Objetivo v21:** Validar si mejora la latencia en las apuestas y evita el bloqueo de UI.

---

## ✅ Bugs Resueltos (Verificado anteriormente en v20)

- [[BUG-CAR-003] Carrito: App cuelga al emitir tras vaciar jugada única](file:///home/jonathan.correa/Projects/QA_Banquinet/docs/use_cases/features/cart/cart_management.feature) #bug #carrito #resuelto
- [[BUG-5OR-003] 5 de Oro: Estado incorrecto del botón (Duplicado)](file:///home/jonathan.correa/Projects/QA_Banquinet/docs/use_cases/features/games/5_oro_validation.feature) #bug #5deoro #resuelto

---

## 🔍 Objetivos de Testeo Adicionales (v21)

- **Optimización de Batería**: Verificar si el proceso de "Corte" se mantiene vivo en segundo plano.
- **Botón Acción**: Validar que el botón vuelva a "Ingresar" tras corregir jugadas inválidas.

---

---

## 📈 PROGRESO DE LA REGRESIÓN POR VERSIÓN

| VERSIÓN | TESTS TOTAL | ✅ PASA | ⛔ FALLA | ⏳ PEND | 🚧 BLOQ | % AVANCE |
| :--- | :---: | :---: | :---: | :---: | :---: | :---: |
| **v1.0.1+21** | 109 | 87 | 2 | 20 | 0 | 79.82% |
| **v1.0.1+20** | 109 | 91 | 1 | 17 | 0 | 83.49% |
| **v1.0.1+19** | 109 | 32 | 1 | 76 | 0 | 29.36% |
| **v1.0.1+17** | 210 | 3 | 5 | 202 | 0 | 1.43% |
| **v1.0.1+12** | 61 | 37 | 6 | 18 | 0 | 60.66% |

---

## 📊 Resumen de Cobertura v1.0.1+21 (Detalle por Módulo)

| Módulo | Total | Automatizados | Manuales | OK (v21) | Falla | Pend. |
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
| **Bugs (Específicos)** | 12 | 0 | 12 | 8 | 4 | 0 |
| **TOTAL (Baseline)** | **109** | **66** | **43** | **87** | **2** | **20** |

---
[[bug_reports/minuta_qa_v1.0.1+21|Ver Minuta v21]]
