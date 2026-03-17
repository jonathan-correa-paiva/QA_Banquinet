# ⚠️ ERR-502: Bad Gateway en sorteos/resultado (17/03)

**Fecha:** 2026-03-17
**Versión:** v1.0.1+21
**Módulo:** Sorteos (openresty / spa)
**Severidad:** Media (transitorio)

---

## Descripción

A las 10:36:55 del 17/03, el endpoint de resultados de sorteos de Quiniela respondió con **502 Bad Gateway** desde el proxy openresty. Coincide temporalmente con el refresh token fallido (403).

## Evidencia

```json
{
  "level": "WARNING",
  "message": "DioAdapter exception: GET https://api.testing.banquinet.org/spa/sorteos/resultado?hasta=2026-03-17T10:36:55.487232&limit=1&codigoProducto=QUI - 502 - <html><head><title>502 Bad Gateway</title></head><body><center><h1>502 Bad Gateway</h1></center><hr><center>openresty</center></body></html>",
  "time": "2026-03-17T10:36:55",
  "module": "dioAdapter"
}
```

## Contexto

- Se produjeron **4 errores 502** en el mismo segundo (2 requests duplicados, 2 reintentos).
- Ocurrió durante el periodo de inestabilidad de bsecurity (que venía con timeouts desde las 00:00).
- **Transitorio**: después de las 11:22 los servicios volvieron a responder OK.

## Fuente

- Log: `bol-api.log` servidor testing (2026-03-17).
- Líneas: 6215, 6220, 6355, 6360.
