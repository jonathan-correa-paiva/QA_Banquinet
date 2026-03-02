# 📊 Matriz de Cobertura y Trazabilidad (MCT)

> Versión: v1.0.1+12 — Última actualización: 25/Feb/2026

Este documento funciona como la matriz maestra de pruebas. Está diseñada en formato de tabla para que pueda ser **copiada y pegada directamente en Excel o Google Sheets** para las reuniones con gerencia.

## 1. Casos de Uso (Checklist)

| ID | Módulo | Resumen del Escenario de Prueba | Estado |
| :--- | :--- | :--- | :--- |
| **CU-CFG-001** | Inicial | POS Nuevo lee Token QR válido y asigna JWT | ⏳ Pendiente |
| **CU-CFG-002** | Inicial | POS Nuevo lee Token QR vencido (>10m) y deniega | ⏳ Pendiente |
| **CU-QUI-001** | Quiniela | 1 cifra: 1 a la cabeza $50 (Vesp/Noct) | ⏳ Pendiente |
| **CU-QUI-002** | Quiniela | 1 cifra: 9 a los 16 $5000 (Tope alto) | ⏳ Pendiente |
| **CU-QUI-003** | Quiniela | 2 cifras: 01 a la cabeza $50 | ⏳ Pendiente |
| **CU-QUI-004** | Quiniela | 3 cifras: 001 a la cabeza $50 | ⏳ Pendiente |
| **CU-QUI-005** | Quiniela | 3 cifras: Sorpresa Vesp/Noct $400 | ⏳ Pendiente |
| **CU-QUI-006** | Quiniela | Redoblona válida: 38/10 con 45/10 $25 | ⏳ Pendiente |
| **CU-QUI-007** | Quiniela | Redoblona inválida: 21 cab con 45/4 $20 -> Rechaza | ⏳ Pendiente |
| **CU-QUI-008** | Quiniela | Redoblona inválida: 21/7 con 12/6 $50 -> Rechaza | ⏳ Pendiente |
| **CU-QUI-009** | Quiniela | Sorpresa Redoblona $100 | ⏳ Pendiente |
| **CU-QUI-010** | Quiniela | Múltiples Sorteos (Vesp + Noct) -> Doble | ⏳ Pendiente |
| **CU-QUI-EXC** | Quiniela | Monto inferior al mínimo -> Texto rojo | ⏳ Pendiente |
| **CU-QUI-MAX** | Quiniela | Monto superior al máximo -> Texto rojo | ⏳ Pendiente |
| **EC-QUI-001** | Quiniela | Corte de Horarios (Vesp. y Noct.) | ⏳ Pendiente |
| **CU-TOM-001** | Tómbola | 1 Número: 1 $50 | ⏳ Pendiente |
| **CU-TOM-002** | Tómbola | 3 Números: 1-2-99 $50 (Vesp/Noct) | ⏳ Pendiente |
| **CU-TOM-003** | Tómbola | 4 Números: 1-2-3-99 $50 | ⏳ Pendiente |
| **CU-TOM-004** | Tómbola | 5 Números: 1-2-3-4-99 $50 | ⏳ Pendiente |
| **CU-TOM-005** | Tómbola | 6 Números: Sorpresa + borrar campo #2 $100 | ⏳ Pendiente |
| **CU-TOM-006** | Tómbola | 7 Números: base $50 | ⏳ Pendiente |
| **CU-TOM-007** | Tómbola | 7 Números: $20 -> No supera mínimo -> Rojo | ⏳ Pendiente |
| **CU-TOM-008** | Tómbola | 7 Números: $1000 -> Supera máximo -> Rojo | ⏳ Pendiente |
| **CU-TOM-009** | Tómbola | Sorpresa $100 | ⏳ Pendiente |
| **BUG-TOM-001** | Tómbola | Tecleo rápido pierde dígito | ❌ Falla |
| **CU-5OR-001** | 5 de Oro | Común 5 números manual | ⏳ Pendiente |
| **CU-5OR-002** | 5 de Oro | Común 5 números Sorpresa | ⏳ Pendiente |
| **CU-5OR-003** | 5 de Oro | Revancha: 1-2-3-4-48 | ⏳ Pendiente |
| **CU-5OR-004** | 5 de Oro | Revancha: 1-2-3-4-49 (Límite) | ⏳ Pendiente |
| **CU-5OR-005** | 5 de Oro | Revancha Sorpresa | ⏳ Pendiente |
| **CU-5OR-006** | 5 de Oro | Común Múltiple Sorpresa 4 números | ⏳ Pendiente |
| **CU-5OR-007** | 5 de Oro | Común Múltiple: 6, 7, y 8 números | ⏳ Pendiente |
| **CU-5OR-008** | 5 de Oro | Revancha Múltiple: 4, 6, 7, y 8 números | ⏳ Pendiente |
| **CU-5OR-009** | 5 de Oro | Revancha Múltiple Sorpresa 8 números | ⏳ Pendiente |
| **CU-5OR-010** | 5 de Oro | Revancha 5 Nros x 3 Sorteos (Sorpresa) | ⏳ Pendiente |
| **CU-5OR-011** | 5 de Oro | Número repetido en grilla -> Rechaza | ⏳ Pendiente |
| **BUG-5OR-001** | 5 de Oro | Pantalla Gris sin resultados | ❌ Falla |
| **CU-LOT-001** | Lotería | Consultar Reservas existentes | ⏳ Pendiente |
| **CU-LOT-002** | Lotería | Reservar número (86375) | ⏳ Pendiente |
| **CU-LOT-003** | Lotería | Jugar Entero (78923) | ⏳ Pendiente |
| **CU-LOT-004** | Lotería | Jugar Fracción: Sorpresa 1 fracción | ⏳ Pendiente |
| **CU-LOT-005** | Lotería | Jugar Fracción: 423 x 3 fracciones | ⏳ Pendiente |
| **BUG-LOT-192** | Lotería | QR impreso ilegible por tamaño | ❌ Falla |
| **CU-PIN-001** | Pines Web | CI 1.469.483-9 $1 (Mínimo) | ⏳ Pendiente |
| **CU-PIN-002** | Pines Web | CI 6.844.104-4 $100 | ⏳ Pendiente |
| **CU-PIN-003** | Pines Web | CI 456.789-0 $500 (Alto) | ⏳ Pendiente |
| **CU-REC-001** | Recarga | Antel 111 111 111 $50 | ⏳ Pendiente |
| **CU-REC-002** | Recarga | Movistar 098 456 789 $100 | ⏳ Pendiente |
| **CU-REC-003** | Recarga | Claro 099 999 999 $10 | ⏳ Pendiente |
| **CU-INT-001** | General | Jugada a "Ambos" separa tickets | ⏳ Pendiente |
| **CU-INT-002** | General | Rechazo por Límite de Banca (Directo) | ⏳ Pendiente |
| **CU-INT-003** | General | Rechazo por Banca con Alternativas | ❌ Falla |
| **CU-INT-004** | General | Respuesta Din. a Config Dinámica | ⏳ Pendiente |
| **CU-CAR-001** | General | Borrar jugada individual del carrito | ⏳ Pendiente |
| **CU-CAR-002** | General | Multi-sorteo: Quiniela Vesp + Noct juntos | ⏳ Pendiente |
| **CU-CAR-003** | General | Multi-juego: Quiniela + Tómbola + 5 de Oro | ⏳ Pendiente |
| **CU-CAR-004** | General | Rechazo parcial: Alternativas solo en 1 sorteo | ⏳ Pendiente |
| **CU-CAR-005** | General | Verificar tickets no duplicados en multi-juego | ⏳ Pendiente |
| **CU-IMP-001** | Impresión | Ticket largo (8+ jugadas) completo | ⏳ Pendiente |
| **BUG-CFG-001** | SO/Tablet | Cambiar sonido bloquea UI | ❌ Falla |
| **ISSUE-228** | Visualización | Resultado de acierto (sin definición) | 🚧 Bloqueado |

## 2. Seguimiento de Bugs (Defectos Encontrados v1.0.1+12)

| ID | Resumen del Defecto | Estado |
| :--- | :--- | :--- |
| **BUG-CAR-001** | Carrito oculta desglose de múltiples alternativas aceptadas | ❌ Falla |
| **BUG-TOM-001** | Tómbola pierde el último dígito ingresado si es de 1 cifra | ❌ Falla |
| **BUG-5OR-001** | Cuadro gris inoperante al abrir 5 de Oro sin resultados | ❌ Falla |
| **BUG-CFG-001** | Se bloquea (pantalla gris) Alertas al cambiar Sonido | ❌ Falla |
| **BUG-LOT-192** | Código QR de Lotería impreso ilegible por tamaño reducido | ❌ Falla |
| **ISSUE-228** | Mostrar resultado de acierto (falta definición para testear) | 🚧 Bloqueado |

---

**Leyenda de Estados:**

* ✅ **Aprobado (Pass):** Funciona según lo esperado en la versión actual.
* ❌ **Falla (Fail):** Defecto reproducido y confirmado en la versión actual.
* ⏳ **Pendiente (Untested):** No se ha probado en la versión actual.
* 🚧 **Bloqueado (Blocked):** No se puede probar porque otro bug lo impide.
