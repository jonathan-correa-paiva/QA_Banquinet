# 🪲 Reporte de Regresión - v1.0.1+21

**Fecha de Revisión:** 17/03/2026
**QA:** Jonathan Correa
**Grado de Certeza:** En Progreso (Validación Parcial)

---

## 🛠️ Estado de Verificación v1.0.1+21

> [!IMPORTANT]
> Los fixes de PIN (BUG-CFG-002/003/004), Lotería dropdown (BUG-LOT-001) y Concurrencia (REVISAR-QUI-001) **NO están incluidos en esta build**. Se reportaron a Nacho hoy. Se verificarán en v22+.

### [BUG-CIE-005] Cierres: Refresco automático tras inactividad (Corte) #bug #cierres #automatico #rc
- **Estado:** ⛔ Falla. El Doze Mode sigue matando el proceso. Sin fix en +21.

### [CU-CFG-003] 🆕 Auth: Refresh Token retorna 403 #bug #auth #refresh
- **Estado:** ⛔ Falla.
- **Evidencia:** `POST sesiones/refresh` → HTTP 403 (Forbidden) desde bsecurity.
- **Log:** `DioAdapter exception: POST .../bsecurity/sesiones/refresh - 403 - The supplied authentication is not authorized to access this resource`
- **Impacto:** La sesión no se renueva automáticamente. Requiere revisión del backend.

---

## ✅ Bugs Resueltos (Verificado anteriormente en v20)

- [[BUG-CAR-003] Carrito: App cuelga al emitir tras vaciar jugada única](file:///home/jonathan.correa/Projects/QA_Banquinet/docs/use_cases/features/cart/cart_management.feature) #bug #carrito #resuelto
- [[BUG-5OR-003] 5 de Oro: Estado incorrecto del botón (Duplicado)](file:///home/jonathan.correa/Projects/QA_Banquinet/docs/use_cases/features/games/5_oro_validation.feature) #bug #5deoro #resuelto

---

## 🔍 Pendientes de Testeo (v21)

- **CU-CAN-003**: Se dejó un ticket para probar anulación post-sorteo.
- **CU-CAN-004**: Probar anulación de Recargas/Pines (productos digitales).
- **CU-PAG-004**: Premio Mayor → dirigir a Banca.
- **SUP-INV-002**: Bloqueado, sin acceso a datos de Supermatch.
- **CU-CIE-003/004**: Bloqueado, requiere probar en horario real (Sunmi PH3 no permite cambiar hora).
- **Quiniela (2CA/2CB/3CA/3CB)**: Definir si los límites mínimos están implementados.
- **Lotería Dropdown**: Investigar lógica de stock (enteros de 100 fracciones).

---

---

## 📈 PROGRESO DE LA REGRESIÓN POR VERSIÓN

| VERSIÓN | TESTS TOTAL | ✅ PASA | ⛔ FALLA | ⏳ PEND | 🚧 BLOQ | N/A | % AVANCE |
| :--- | :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| **v1.0.1+21** | 109 | 91 | 4 | 10 | 3 | 1 | 83.49% |
| **v1.0.1+20** | 109 | 91 | 1 | 17 | 0 | 0 | 83.49% |
| **v1.0.1+19** | 109 | 32 | 1 | 76 | 0 | 0 | 29.36% |
| **v1.0.1+17** | 210 | 3 | 5 | 202 | 0 | 0 | 1.43% |
| **v1.0.1+12** | 61 | 37 | 6 | 18 | 0 | 0 | 60.66% |

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
| Config. Inicial | 3 | 0 | 3 | 1 | 1 | 1 |
| Cierres | 5 | 0 | 5 | 2 | 1 | 2 |
| Impresión | 2 | 0 | 2 | 2 | 0 | 0 |
| Sin Conectividad | 2 | 0 | 2 | 1 | 0 | 0 |
| Reglas de Negocio | 2 | 0 | 2 | 1 | 0 | 1 |
| UX Y Navegación | 1 | 0 | 1 | 1 | 0 | 0 |
| **Bugs (Específicos)** | 12 | 0 | 12 | 8 | 4 | 0 |
| **TOTAL (Baseline)** | **109** | **66** | **43** | **91** | **4** | **10** |

---
[[bug_reports/minuta_qa_v1.0.1+21|Ver Minuta v21]]
