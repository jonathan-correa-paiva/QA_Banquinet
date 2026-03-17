# 🪲 BUG-CIE-005: Evidencia — bsecurity caído toda la noche (17/03)

**Fecha:** 2026-03-17
**Versión:** v1.0.1+21
**Relación:** Impacta directamente en la prueba de refresco automático de sorteos (Doze Mode)

---

## Hallazgo

El `CheckConnectionTask` del bol-api falló con **timeout de 30 segundos** de forma continua desde las **00:00** hasta las **11:22** del 17/03/2026. Esto significa que **bsecurity estuvo caído más de 11 horas**.

## Evidencia

### Primer timeout (00:02)

```
2026-03-17 00:02:18.146 INFO CheckConnectionTask - Starting task
2026-03-17 00:02:48.147 WARN CheckConnectionTask - Task failed:
  Future timed out after [30 seconds]
  at com.bqn.bsecurity.client.CheckConnectionTask
```

### Recuperación (11:22)

```
2026-03-17 11:22:18.136 INFO CheckConnectionTask - Starting task
2026-03-17 11:22:18.164 INFO CheckConnectionTask - Task succeed: {
  "name": "bsecurity-api",
  "version": "1.3.0-SNAPSHOT",
  "builtAt": "2026-03-03T08:13:34",
  "startedAt": "2026-03-05T12:30:02",
  "currentTime": "2026-03-17T11:22:18",
  "environment": "testing",
  "status": "OK"
}
```

## Relación con Pruebas de Cierre (BUG-CIE-005)

La caída prolongada de bsecurity durante la madrugada del 17/03 actuó como un **bloqueador externo** para la validación del refresco automático de sorteos (Doze Mode). El POS no pudo actualizar sorteos porque el servicio de autenticación/backend no respondía, independientemente del estado del proceso en Android.

Se requiere repetir la prueba de inactividad nocturna con bsecurity estable para confirmar si el Doze Mode persiste como problema.

## Observación adicional: 502 Bad Gateway

A las 10:36 se detectaron **4 errores 502** en el endpoint `sorteos/resultado` (openresty), coincidiendo con el periodo de inestabilidad:

```
GET /spa/sorteos/resultado?codigoProducto=QUI → 502 Bad Gateway (openresty)
```

## Fuente

- Log: `bol-api.log` servidor testing (2026-03-17, 8760 líneas).
- Timeouts: Líneas 1-4900 aprox. (todas son timeouts repetidos).
- Recuperación: Líneas 8710-8719.
