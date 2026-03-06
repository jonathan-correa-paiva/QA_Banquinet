# 🪲 Reporte de Regresión - v1.0.1+19

**Fecha de Revisión:** 06/03/2026
**QA:** Jonathan Correa
**Grado de Certeza:** Confirmado Visualmente (Release build con AOT)

---

## ✅ Bugs Resueltos en esta Versión

### [CU-NAV-001] UX: Tiempo de respuesta entre pantallas < 1s → **CERRADO** ✅

- **Resolución:** Confirmado en v1.0.1+19 (release mode con AOT). Navegación fluida sin lags perceptibles.
- **Estado:** La app recuperó la fluidez vista en la v12. El problema de fluidez (10fps reportados en v17) se confirmó que era un artefacto del modo debug.

### [BUG-CFG-001] Preferencias: Bloqueo al cambiar sonido → **CERRADO** ✅

- **Resolución:** PR #303 (`feat: explicitly configure debug signing in build.gradle.kts`)
- **Estado:** Resuelto en v1.0.1+17.

### [BUG-5OR-001] 5 de Oro: Pantalla gris al consultar sorteos sin resultados → **CERRADO** ✅

- **Resolución:** Confirmado resuelto en v1.0.1+17. La pantalla ahora muestra mensaje vacío correcto.

### [BUG-TOM-001] Tómbola: Pérdida del último dígito al teclear rápido → **CERRADO** ✅

- **Resolución:** Verificado y corregido en v1.0.1+17.

### [BUG-CFG-002] Títulos de la app: Banner "Debug" en producción (gPos #308) → **CERRADO** ✅

- **Resolución:** Verificado en v1.0.1+19. El banner superior derecho ahora dice correctamente "Release v1.0.1+19" con fondo rojo.
- **Estado:** Corregido (Issue: gPos #308).

### [BUG-CAR-002] Carrito: Error de visualización con múltiples alternativas aceptadas (gPos #293) → **CERRADO** ✅

- **Resolución:** Verificado en v1.0.1+19. Se probaron jugadas recahzadas de 3 juegos distintos y las alternativas se listan y acumulan correctamente en el carrito, incluso soportando flujos de falta de papel durante la emisión de la alternativa.
- **Estado:** Corregido (Issue: gPos #293. Resuelve BUG-CAR-001).

### [BUG-LOT-192] Lotería: QR ilegible por tamaño reducido (gPos #192) → **CERRADO** ✅

- **Resolución:** Verificado en v1.0.1+19. El código QR ahora se imprime con un tamaño mayor y es legible para los escáneres.
- **Observación QA:** "Le cuesta un poco leerlo todavía. Sería conveniente agrandarlo un poco más y agregar un espacio/aire en medio del texto anterior para despejar el código." (Jonathan Correa).
- **Estado:** Corregido (Issue: gPos #192).

### [BUG-5OR-002] Resultados: El filtro de fecha queda deshabilitado tras visitar 5 de Oro sin resultados → **CERRADO** ✅

- **Resolución:** Verificado en v1.0.1+19. El selector de fecha (calendario) responde correctamente incluso en sorteos sin datos, y no se bloquea la navegación posterior en QUI/TOM.
- **Estado:** Corregido.

---

## ⛔ Bugs Activos Confirmados

### [BUG-CAR-003] Carrito: Al vaciar el carrito borrando la única jugada, el botón "Emitir" queda habilitado y la app se cuelga

- **Descripción:** Cuando el carrito tiene una sola jugada y el usuario la elimina, el carrito queda vacío pero el botón de acción principal queda como "Emitir". Al presionarlo, la aplicación entra en estado "Autorizando" y queda colgada indefinidamente.
- **Riesgo:** Bloqueo silencioso de la UI (Application hang). El subagente no ve un error claro y el terminal queda inoperable hasta reiniciarlo.
- **Estado:** Descubierto activo en v1.0.1+19. Pendiente de fix.

*(Sin novedades adicionales: verificar bugs arrastrados listados en la parte inferior)*

---

## 🔍 Observaciones y Comportamientos bajo Investigación

### [BUG-QUI-001] Carrito mixto: App cuelga en "Autorizando" ante demora >100s del servidor
>
> [Ver reporte detallado](file:///home/jonathan.correa/Projects/QA_Banquinet/docs/bug_reports/individual/BUG-QUI-001.md)

- **Descripción:** Al enviar un carrito con QUI + TOM, el servidor tardó 101 segundos en responder (con `jugadasRechazadas` + alternativa). La app quedó bloqueada en el estado "Autorizando" y nunca mostró el diálogo de alternativas.
- **Estado de Investigación:** No se puede confirmar como bug de lógica de apuesta aún. Se sospecha una interacción entre el upload de logs y la cola de Dio.
- **Hipótesis:** El cliente HTTP (Dio) comparte cola entre el servicio de envío de logs y el de autorizaciones. El upload de logs bloqueó la cola ~100s.
- **Acción:** Consultar con desarrollo la prioridad del servicio de logs vs transacciones.

### [BUG-CIE-005] Cierres: No se actualiza automáticamente al expirar `fechaCierre`

- **Descripción:** El POS no auto-refresca los sorteos apostables al vencer el cierre, e intenta apostar a sorteos de fechas pasadas (ej. sorteo de anoche).
- **Comportamiento Actual:** Operador realiza jugadas que tratan de autorizarse al cierre de la noche anterior. Operador debe ir manualmente a "Configuración -> Actualizar Sorteos".
- **Comportamiento Esperado:** Actualización automática dentro de ventana aceptable (≤5min) al agotarse el cierre vigente.
- **Estado:** Arrastrado desde v1.0.1+12. Reproducido en v1.0.1+19. Pendiente de fix.

### [BUG-5OR-003] 5 de Oro: El botón cambia de "Ingresar" a "Emitir" prematuramente ante error de validación
>
> [Ver reporte detallado](file:///home/jonathan.correa/Projects/QA_Banquinet/docs/bug_reports/individual/BUG-5OR-003.md)

- **Descripción:** Al editar una jugada (ej. eliminar un número de un sorpresa), el validador indica correctamente el error. Sin embargo, el botón de acción cambia de "Ingresar" a "Emitir" aunque la jugada actual sea inválida.
- **Riesgo:** Si el usuario toca "Emitir", se procesa el carrito sin la jugada que estaba intentando corregir, perdiendo la entrada sin previo aviso.
- **Estado:** **Confirmado activo en v1.0.1+19.** Los botones Ingresar/Emitir desaparecen al fallar la validación. Pendiente de fix.

---

## 📊 Resumen de Cobertura v1.0.1+19

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
| UX Y Navegación | 1 | 1 | 0 |
| **TOTAL** | **94** | **67** | **27** |
