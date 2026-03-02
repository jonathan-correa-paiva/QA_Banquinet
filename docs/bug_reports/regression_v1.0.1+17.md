# 🪲 Reporte de Regresión - v1.0.1+17

**Fecha de Revisión:** 27/02/2026
**QA:** Jonathan Correa
**Grado de Certeza:** Confirmado Visualmente (debug build)

---

## ✅ Bugs Resueltos en esta Versión

### [BUG-CFG-001] Preferencias: Bloqueo al cambiar sonido → **CERRADO** ✅

- **Resolución:** PR #303 (`feat: explicitly configure debug signing in build.gradle.kts`)
- **Estado:** La sección de preferencias ya carga correctamente al modificar el estado del sonido.

### [BUG-5OR-001] 5 de Oro: Pantalla gris al consultar sorteos sin resultados → **CERRADO** ✅

- **Resolución:** Confirmado resuelto en v1.0.1+17. La pantalla ahora muestra mensaje vacío correcto.
- **Estado:** El bug de 5 de oro de la pantalla gris ya estaba resuelto.

### [BUG-TOM-001] Tómbola: Pérdida del último dígito al teclear rápido → **CERRADO** ✅

- **Resolución:** Verificado y corregido en v1.0.1+17. Ya no se pierden dígitos al ingresar jugadas rápidamente.
- **Estado:** El bug de tómbola del último dígito está correcto.

---

## ⛔ Bugs Activos Confirmados

- **Estado:** Arrastrado desde v1.0.1+12. Pendiente de fix en próxima versión.

---

## 🔍 Observaciones y Comportamientos bajo Investigación

### [BUG-QUI-001] Carrito mixto: App cuelga en "Autorizando" ante demora >100s del servidor
>
> [Ver reporte detallado](file:///home/jonathan.correa/Projects/QA_Banquinet/docs/bug_reports/individual/BUG-QUI-001.md)

- **Descripción:** Al enviar un carrito con QUI + TOM, el servidor tardó 101 segundos en responder (con `jugadasRechazadas` + alternativa). La app quedó bloqueada en el estado "Autorizando" y nunca mostró el diálogo de alternativas.
- **Estado de Investigación:** No se puede confirmar como bug de lógica de apuesta aún. Se sospecha una interacción entre el upload de logs y la cola de Dio.
- **Reproducido:** 27/02/2026 18:34:08 — authorizationId: `7e25da93`.
- **Hipótesis:** El cliente HTTP (Dio) comparte cola entre el servicio de envío de logs y el de autorizaciones. El upload de 69 logs bloqueó la cola ~100s.
- **Acción:** Consultar con desarrollo la prioridad del servicio de logs vs transacciones.

### [BUG-CIE-005] Cierres: No se actualiza automáticamente al expirar `fechaCierre`

- **Descripción:** El POS no auto-refresca los sorteos apostables al vencer el cierre.
- **Comportamiento Actual:** Operador debe ir manualmente a "Actualizar Sorteos".
- **Comportamiento Esperado:** Actualización automática dentro de ventana aceptable (≤5min).
- **Estado:** Arrastrado desde v1.0.1+12. Pendiente de fix en próxima versión.

### [BUG-5OR-002] Resultados: El filtro de fecha queda deshabilitado tras visitar 5 de Oro sin resultados
>
> [Ver reporte detallado](file:///home/jonathan.correa/Projects/QA_Banquinet/docs/bug_reports/individual/BUG-5OR-002.md)

- **Descripción:** Al navegar a Resultados de 5 de Oro en un sorteo sin datos, el selector de fecha (calendario) no responde al tocar. El estado corrompido persiste al volver a QUI/TOM mientras no se recargue con datos.
- **Pasos para reproducir:**
  1. Ir a Resultados → 5 de Oro (sorteo sin resultados). Tocar la fecha → no abre el calendario.
  2. Ir a Resultados → Quiniela o Tómbola → tocar la fecha → **tampoco abre**.
  3. Ir a un sorteo de QUI/TOM que **sí tenga resultados**, abrir el calendario (funciona), volver a 5 de Oro sin resultados → el calendario funciona en QUI/TOM pero sigue sin funcionar en 5 de Oro.
- **Comportamiento Esperado:** El selector de fecha debe estar siempre activo para navegar entre fechas, independientemente de si hay resultados o no.
- **Causa probable:** El widget de calendario queda en estado `disabled` cuando el backend retorna resultados vacíos, y ese estado se filtra (state leak) al contexto compartido entre módulos.
- **Reproducido:** 27/02/2026 v1.0.1+17.

### [BUG-5OR-003] 5 de Oro: El botón cambia de "Ingresar" a "Emitir" prematuramente ante error de validación
>
> [Ver reporte detallado](file:///home/jonathan.correa/Projects/QA_Banquinet/docs/bug_reports/individual/BUG-5OR-003.md)

- **Descripción:** Al editar una jugada (ej. eliminar un número de un sorpresa), el validador indica correctamente el error. Sin embargo, el botón de acción cambia de "Ingresar" a "Emitir" aunque la jugada actual sea inválida.
- **Pasos para reproducir:**
  1. Ir a 5 de Oro → Seleccionar Sorpresa.
  2. Borrar un número del input. El validador muestra el mensaje de error.
  3. El botón cambia de "Ingresar" a "Emitir".
  4. Al corregir el input, el botón **sigue diciendo "Emitir"** (no vuelve a "Ingresar") a menos que se use `Enter`.
- **Riesgo:** Si el usuario toca "Emitir", se procesa el carrito sin la jugada que estaba intentando corregir, perdiendo la entrada sin previo aviso.
- **Causa probable:** El widget del botón central de acción cambia de estado basándose únicamente en si el `TextEditingController` tiene foco o si el carrito no está vacío, ignorando que el input actual tiene un error de validación activo.
- **Reproducido:** 27/02/2026 v1.0.1+17.

### [BUG-CAR-001] Carrito: Banca oculta desglose por sorteo en alternativas parciales

- **Estado:** Arrastrado desde v1.0.1+12. Sin cambios en v1.0.1+17.

### [BUG-LOT-192] Lotería: QR ilegible por tamaño reducido

- **Estado:** 🔒 **Bloqueado** — Esperando siguiente sorteo de Lotería para validar (No disponible el 27/02).
- **Nota:** No se pudo confirmar si el QR ilegible es un problema de la app o del servidor. **Pendiente de validar el próximo día de sorteo.**

### 🔍 Nota Técnica: Error 502 en Consulta de Lotería ("No existe sorteo par")
>
> [Ver reporte detallado y logs](file:///home/jonathan.correa/Projects/QA_Banquinet/docs/bug_reports/individual/ERR-LOT-502.md)

Se observó que al intentar consultar/vender Lotería, el sistema entra en un loop de reintentos y termina mostrando "Error en puerta de enlace" (Gateway Error) en la app.

- **Logs del Servidor:**

  ```json
  Response:{
    "statusCode" : 502,
    "message" : "No existe sorteo par",
    "messageCode" : "101"
  }
  ```

- **Comportamiento:** La app no maneja graciosamente el error 502/101 del backend, lo que resulta en una mala experiencia de usuario (loading infinito hasta el timeout).

---

## 💬 Observación de Performance (Comentario)

Se nota que en esta versión `v1.0.1+17` la respuesta visual de la UI se percibe más lenta (~10fps), seguramente por ser un **debug build** (sin optimizaciones AOT). Se comenta para tenerlo en cuenta en la reunión del martes, ya que en las versiones release (como la `v1.0.1+12`) la fluidez es mucho mejor y probablemente este comportamiento sea solo por el modo debug.

---

## 📊 Resumen de Cobertura v1.0.1+17

| Módulo | Total | Automatizados | Pendientes |
| :--- | :---: | :---: | :---: |
| Quiniela | 22 | 11 | 11 |
| Tómbola | 11 | 11 | 0 |
| 5 de Oro | 13 | 11 | 2 |
| Supermatch | 2 | 1 | 1 |
| Digitales (Pines/Recargas) | 6 | 2 | 4 |
| Mi Negocio | 12 | 12 | 0 |
| Configuración | 2 | 2 | 0 |
| Anulaciones | 4 | 3 | 1 |
| Pagos | 5 | 2 | 3 |
| Alternativas | 4 | 2 | 2 |
| Carrito | 4 | 4 | 0 |
| Config. Inicial | 3 | 0 | 3 |
| Cierres | 5 | 0 | 5 |
| **TOTAL** | **92** | **66** | **26** |

---

## 📋 Casos Pendientes de Definición

- **[CU-OFF-001/002] Offline:** Flujo y mensajes ante falta de conectividad (A definir con dev).
- **[CU-PAG-005] Pagos:** Mensajes para tickets vencidos (>30 días).
- **[CU-CIE-005] Cierres:** Comportamiento del auto-refresh (fix pendiente).
- **[CU-NAV-001] UX:** Validar performance en release mode antes de aprobar.
- **[REC-INV-001/003]** Recargas con número/monto inválido: Pendientes de prueba manual.
