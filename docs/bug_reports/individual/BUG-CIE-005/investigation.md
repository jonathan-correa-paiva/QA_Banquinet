# 🔍 Investigación Técnica: BUG-CIE-005 (Refresco de Cierres)

## 📌 Resumen del Issue

La terminal gPOS no actualiza los sorteos automáticamente al llegar la
`fechaCierre`. Requiere que el operador force una actualización manual.
El comportamiento es correcto en ambiente de *debug* pero falla en *release*.

## 📑 Análisis de Logs Proporcionados

Los logs adjuntos confirman la desincronización y el fallo:

### 1. Intento de Apuesta con Sorteo Vencido

- **Referencia a Evidencia:** [log_transaccion_vencida.txt](file:///home/jonathan.correa/Projects/QA_Banquinet/docs/bug_reports/individual/BUG-CIE-005/evidencia/log_transaccion_vencida.txt)
- **Evidencia:** La terminal intentó apostar al sorteo `30302` (de ayer) a las
  11:41hs del día siguiente. El servidor la rechazó, pero la terminal **nunca
  actualizó su lista de sorteos** para mostrar los vigentes.

### 2. Actualización de Cierre (Ambiente Debug/Desarrollo)

- **Referencia a Evidencia:** [log_cierre_actualizado.txt](file:///home/jonathan.correa/Projects/QA_Banquinet/docs/bug_reports/individual/BUG-CIE-005/evidencia/log_cierre_actualizado.txt)
- **Interpretación:** A las 14:01hs el sistema ya conocía el cierre de las
  20:00hs. Aquí es donde se debería haber calculado el **Offset**.

### 3. Consulta de Status (GetStatusHandler)

- **Referencia a Evidencia:** [log_get_status.txt](file:///home/jonathan.correa/Projects/QA_Banquinet/docs/bug_reports/individual/BUG-CIE-005/evidencia/log_get_status.txt)
- **Interpretación:** A las 20:03:04 (3 min después del cierre), el sistema
  sigue pidiendo status pero no ha refrescado los juegos. El offset para la
  serie `7004` debería haber disparado el refresco a las 20:02:00.

---

## ⚙️ Lógica Detectada (`gPos`)

El sistema utiliza un sistema de **Offset distribuido** para evitar ataques de
denegación de servicio (DDoS) al servidor cuando miles de terminales intentan
actualizarse al mismo tiempo exacto.

- **Archivo:** [cierres_controller.dart](file:///home/jonathan.correa/Projects/gPos/lib/domain/controllers/cierres/cierres_controller.dart)
- **Cálculo:** `(nroSerie % 10) * 30 segundos`
- **Ejemplo (Nro Serie 7004):** `4 * 30 = 120 segundos` (2 min tras el cierre).

### Flujo de Ejecución

1. Al obtener un cierre, se llama a `_registerCambioCierre(fechaCierre)`.
2. Se calcula el `offset` (ej. 20:00:00 + 2 min = 20:02:00).
3. Se agenda la tarea en `TimerUtils.scheduleTask(offset, callback)`.
4. El callback emite `CierresEvents.cambioCierre` al stream.
5. El `CierreBloc` dispara `setCierre(cambioAutomatico: false)`.

## ⚠️ Causas Probables del Fallo en Release

### 1. Suspensión de Procesos (Android Doze Mode)

En versiones de **Release**, Android es agresivo con el ahorro de batería.
- Si la app está en "Pausa" o el sistema entra en "Doze Mode", los `Timer` de
  Dart **se suspenden o se retrasan indefinidamente**.
- En **Debug**, el dispositivo tiene políticas de energía más relajadas.

### 2. Error en `TimerUtils.scheduleTask` (Punto de Quiebre)

En `timer_utils.dart`, existe una validación crítica:

```dart
if (duration.isNegative) {
  throw Exception('Scheduled time is in the past');
}
```

**Riesgo:** Si el servidor devuelve un cierre que ya pasó o si el proceso de
sincronización toma más tiempo que el offset, la app lanza una excepción que
**mata el flujo de actualización**.

### 3. Falta de Persistencia del Timer

El `Timer` vive solo en RAM. Si la app se reinicia o el SO mata el proceso
mientras espera (común en esperas de horas), el "despertador" desaparece.

---

## 🛠️ Recomendaciones para Desarrollo

1. **AlarmManager/WorkManager:** Usar alarmas a nivel de SO para el refresco.
2. **Eliminar el `throw` en `TimerUtils`:** Si el tiempo ya pasó, ejecutar la
   tarea **inmediatamente**.
3. **Mecanismo de Polling:** Chequeo secundario (ej. cada 15 min) de seguridad.

---

**Archivo de apoyo para QA:** Verificar si los logs muestran el error
`Exception: Scheduled time is in the past`.

