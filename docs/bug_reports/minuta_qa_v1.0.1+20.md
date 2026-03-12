# 📝 Minuta de Reporte QA - v1.0.1+20

**Fecha:** 2026-03-11
**Proyecto:** gPOS 1.0
**Responsable:** Jonathan Correa

---

## 📑 Resumen de la Versión

| Versión | Fecha | Responsable | Estado General |
| :--- | :--- | :--- | :--- |
| v1.0.1+20 | 11/03/2026 | Antigravity / Jonathan | 🟡 En Pruebas |

## 📊 Resumen Ejecutivo

| Métrica | Valor |
| :--- | :--- |
| **Total de Tests** | 137 |
| **✅ Pasan (v20)** | 94 |
| **⛔ Fallan** | 2 |
| **⏳ Pendientes** | 41 |
|- **% de Avance:** ~68.2% (Proyectado completar regresión mañana).

> [!NOTE]
> Este reporte se enfoca en la verificación de los bugs críticos reportados
> que bloqueaban la operativa.

---

## ✅ Pruebas Superadas (v1.0.1+20)

### [BUG-310] App falla al eliminar última jugada del carrito

*   **Impacto:** Crítico (Estabilidad).
*   **Estado:** ✅ **OK (v20)** - El issue ha sido cerrado y verificado.

### [BUG-311] Jugada de 5 de Oro desaparece al emitir

*   **Impacto:** Crítico (Integridad de Datos).
*   **Estado:** ✅ **OK (v20)** - Verificado. La jugada permanece en el carrito
    ante errores.


### [BUG-PAG-199 / REQ-228] Gestión de Aciertos: Impresión y Visualización Detallada

* **Impacto:** Alto (UX / Funcional).
* **Estado:** ✅ **OK (v1.0.1+20)** - Se confirma funcionalidad de impresión previa y desglose de jugadas.

#### Evidencia de Gestión de Aciertos
````carousel
![Pantalla de Consulta](individual/BUG-PAG-199/evidencia/pantalla_consulta.png)
<!-- slide -->
![Opciones Contextuales (Imprimir y Mostrar)](individual/BUG-PAG-199/evidencia/opciones_contextuales.png)
````

---


## 📋 Temas a Tratar en Reunión (Diseño y Lógica)

1.  **Botón de Envío de Logs (Versiones de Testing):**
    *   Propuesta de incluir un botón manual para el envío de logs a demanda ante la detección de un posible bug.
    *   Objetivo: Facilitar la investigación de errores sin necesidad de visualización directa de logs o envíos automáticos (exclusivo para ambiente de testing, no prod).

### 2. Inconsistencia en Botón Contextual "+" (UI/UX)
* **Observación:** La implementación actual utiliza un botón genérico "+" para funciones críticas (Imprimir/Ver detalles). Resulta poco intuitivo y confunde al usuario. Se sugiere revisar la iconografía y el uso de botones contextuales para alinearlos al diseño premium.

### 3. Flujo de Anulación/Repetición (Tómbola/Otros)
* **Observación:** Al leer un ticket ya emitido, el sistema permite "Anular" o "Repetir". Si se anula correctamente, al volver a leer ese ticket anulado, ya no aparecen botones para "Repetir", lo cual genera una inconsistencia ya que desde el **Historial** esa misma jugada sí permite la repetición.
* **Acción:** Definir si la opción de repetir debería estar disponible siempre en la consulta de tickets anulados o si se mantiene solo en el Historial por seguridad.

### 3. Alcance de Alerta por Importe (Individual vs Acumulado) - **Caveat**
* **Observación:** El **REQ-102** funciona correctamente para montos individuales (ej. Play de $3920 sobre un umbral de $1000). Sin embargo, existe un **Caveat** técnico: la alerta no se dispara al alcanzar el monto total acumulado en el carrito mediante múltiples jugadas pequeñas.
* **Pregunta:** ¿La alerta debe evolucionar de un chequeo por **Jugada** a un control por **Juego/Carrito** (agrupado)?

### 4. Gestión de PIN (Consistencia y UX)
* **Observación 1 (Privacidad):** En la pantalla de **Alerta por importe**, al tildar "Requerir PIN", los inputs no enmascaran el texto (se ve el PIN en texto plano). En cambio, en el modal global de "Establecer PIN" sí funciona el enmascaramiento con `***`.
* **Observación 2 (Persistencia/Sync):** Existe una desincronización crítica. Si se cambia o elimina el PIN desde **Preferencias**, la pantalla de **Alerta por importe** sigue solicitando el PIN viejo o mantiene uno propio. No hay una "Single Source of Truth" para el PIN.
* **Observación 3 (Navegación):** Al intentar cambiar un PIN ya seteado, la UI solo muestra el input y un botón "Cancelar". Falta el botón "Confirmar/Siguiente", obligando al usuario a adivinar que debe presionar "Enter" en el teclado para avanzar al modal de "Establecer PIN".

### [REQ-192] Legibilidad de QR en tickets de Lotería - **Cerrado por Decisión**
* **Impacto:** Medio (Operativo).
* **Estado:** ✅ **OK (v1.0.1+20)**
* **Decisión:** Se confirma que los códigos QR en tickets de Lotería están diseñados exclusivamente para ser leídos por dispositivos móviles (celulares). No se requiere ni se testeará la legibilidad mediante el escáner del gPOS. El issue se cierra con la legibilidad actual verificada por dispositivos externos.

---

## 🛠️ Próximos Pasos (Pendientes v1.0.1+20)

Se requiere continuar con la validación de:
1.  **[REQ-288]** Ejecución de tests automáticos de Lotería.
2.*   **BUG-CIE-005 (Cierres):** La lista de sorteos no se actualiza automáticamente al expirar `fechaCierre`.
    *   **Estado:** ⛔ **Falla (v1.0.1+20)**
    *   **Nota:** El error se reproduce sistemáticamente en el build **Release Candidate (RC)**. Sin embargo, en entorno de **debug local** el comportamiento es correcto. Se requiere investigar diferencias de compilación o manejo de timers en release.
3.  **BUG-LOT-001 (Lotería):** 
    *   **Estado:** ⛔ **Falla (v1.0.1+20)** 
    *   **Descripción:** La opción "Entero" falla al autorizar. Tras vender 9/10, el indicador superior es correcto (1/10), pero el dropdown muestra algo raro: desaparece "Entero" pero siguen apareciendo opciones numéricas de 2 a 9 que ya no existen. Pendiente revisar logs para entender este comportamiento.
4.  **RESERVAS (Lotería):**
    *   **Estado:** ⛔ **Bloqueado**
    *   **Nota:** Los escenarios de reserva no están funcionando en ambiente de testing. Pendiente de definición de datos de prueba o revisión de ambiente.

## 🏁 Conclusión

Se han estabilizado los fallos más críticos de gestión de carrito y persistencia de jugadas. El sistema se encuentra en condiciones de continuar con la pasada general de regresión.
