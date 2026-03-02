# 📝 Minuta de Reporte QA - v1.0.1+12
**Fecha:** 2026-02-26  
**Proyecto:** gPOS 1.0  
**Responsable:** Jonathan Correa

---

## 📊 Resumen Ejecutivo
| Métrica | Valor |
| :--- | :--- |
| **Total de Tests** | 61 |
| **✅ Pasan** | 37 |
| **⛔ Falla** | 6 |
| **🚧 Bloqueado** | 3 |
| **% de Avance** | 70.5% |

---

## 🚨 Hallazgos Críticos
### [BUG-CIE-005] Falla en Cierre Automático
*   **Impacto:** Crítico (Operativo).
*   **Descripción:** El sistema no refresca los sorteos disponibles automáticamente al expirar el tiempo de cierre. Requiere actualización manual.
*   **Evidencia:** Verificado tras 1 hora de espera sin actualización.

### Otros Bugs Reportados (6 en total):
*   `BUG-TOM-001`: Pérdida de dígito '4' en tecleo rápido.
*   `BUG-5OR-001`: Pantalla gris en consulta sin resultados.
*   `BUG-LOT-192`: QR ilegible en Lotería.
*   `BUG-CAR-001`: Falta de desglose de sorteos en alternativas del carrito.
*   `BUG-CFG-001`: Bloqueo de UI al cambiar sonido.

---

## 📋 Pendientes de Definición (Bloqueantes para v13)
Se requiere una definición funcional/negocio para los siguientes puntos:
1.  **Escenario Offline:** Flujo de mensajes y comportamiento esperado sin internet.
2.  **Mensajería de Error:** Estandarización de avisos para "Ticket Vencido" y "Sorteo Cerrado" (Pagos/Anulaciones).
3.  **Control de Horario:** Refinar la tolerancia y validación del reloj local vs servidor.

---

## 🏁 Conclusión y Próximos Pasos
Se da por cerrado el ciclo de pruebas de la **v1.0.1+12** con un avance del **70.5%**. 

**Acciones Inmediatas:**
*   Iniciar pruebas en **v1.0.1+13** priorizando la verificación de los bugs críticos reportados.
*   Investigación técnica de la causa raíz de la falta de reactividad en el cierre de sorteos.
