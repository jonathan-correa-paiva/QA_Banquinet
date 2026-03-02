# 🪲 Reporte de Regresión - v1.0.1+12
**Fecha de Revisión:** 24/02/2026
**Grado de Certeza:** Confirmado Visualmente (High)

## [BUG-CAR-001] Carrito: Visualización de alternativas múltiples
* **Descripción**: Al aceptar dos alternativas de sorteos diferentes (Vespertino y Nocturno) tras un rechazo, el carrito falla en el desglose.
* **Comportamiento Actual**: Muestra un solo renglón aunque el monto total es correcto ($400 en lugar de $200 individualizados).
* **Comportamiento Esperado**: Listar individualmente cada alternativa aceptada.
* **Nota DEV (24/02):** Posible origen en fallos de múltiples autorizaciones en el mismo segundo sobre el primer sorteo.

## [BUG-5OR-001] 5 de Oro: Sorteos vacíos sin mensaje
* **Descripción**: Al seleccionar resultados de 5 de Oro que aún no cargaron.
* **Comportamiento Actual**: Aparece cuadro gris y bloquea cambio de fecha.
* **Comportamiento Esperado**: Mostrar leyenda "Sin Resultados" o inhabilitar consulta previa a resultados.

## [BUG-TOM-001] Tómbola: Pérdida del último dígito
* **Descripción**: Al ingresar un número de 1 dígito al final y apostar sin presionar Enter, el sistema ignora el valor.
* **Pasos**: 1. Ingresar 01, 02, 03. 2. Ingresar 4. 3. Presionar "Apostar" rápido.
* **Comportamiento Actual**: Registra solo 01, 02, 03; el "4" desaparece.
* **Comportamiento Esperado**: Autocompletar con cero a la izquierda (04) replicando comportamiento seguro del 5 de Oro.

## [BUG-CFG-001] Preferencias: Bloqueo "Pantalla Gris"
* **Descripción**: Al modificar el estado del sonido, la sección "Alerta por importe" se vuelve inoperativa.
* **Comportamiento Actual**: Renderizado fallido (Pantalla gris total) que requiere reinicio de app.
* **Comportamiento Esperado**: Carga normal de la ventana de alertas independientemente del sonido.

## [BUG-LOT-192] Lotería: QR ilegible por escala
* **Descripción**: El código QR se genera en dimensiones insuficientes para lectura óptica (Issue #192).
* **Comportamiento Actual**: gPOS y celulares no pueden decodificar el QR.
* **Comportamiento Esperado**: Escalamiento adecuado para legibilidad estándar.

## [BUG-CIE-005] Cierres: El cambio de cierre no se actualiza automáticamente
* **Descripción**: El sistema no actualiza los sorteos apostables automáticamente al expirar `fechaCierre`. 
* **Comportamiento Actual**: Pasado el horario de cierre (espera superior a 1 hora), el POS seguía mostrando sorteos vencidos y rechazando apuestas por servidor. El operador debe ir manualmente a "Actualizar Sorteos" para ver los nuevos.
* **Comportamiento Esperado**: Actualización automática de sorteos apostables dentro de una ventana de tolerancia aceptable (ej. hasta 5 minutos, según ventana calculada por terminal) para no saturar el servidor, sin requerir intervención manual operatoria. La espera actual excede ampliamente cualquier lógica de refresco diferido.

## 📋 Casos de Uso a Definir / Revisar
A partir de los resultados de la v1.0.1+12, se identifican las siguientes necesidades de definición o revisión de comportamiento:

*   **[CU-OFF-001/002] Offline:** Pendiente de definir el flujo y mensajes esperados ante falta de conectividad.
*   **[CU-PAG-005] Pagos:** Revisar mensajes de error para tickets vencidos.
*   **[CU-CAN-004] Anulaciones:** Verificar mensajes de error al intentar anular sorteos ya cerrados (¿"No permitido" o mensaje específico?).
*   **[CU-RN-001] Reglas:** Revisar el comportamiento del control de horario estricto en el POS.

---
**Pendiente de QA:** Consultar con Ignacio Cabrera (Dev) por Issue #228 "Mostrar resultado de acierto" (Alcance y forma de prueba inciertos).