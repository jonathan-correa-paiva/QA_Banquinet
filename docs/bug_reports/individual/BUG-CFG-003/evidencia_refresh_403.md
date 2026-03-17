# BUG-CFG-003: Refresh Token retorna HTTP 403

**Fecha:** 2026-03-17
**Versión:** v1.0.1+21
**Módulo:** Autenticación (bsecurity)
**Severidad:** Alta
**Estado:** Falla

---

## Descripción

Al intentar renovar la sesión con `POST sesiones/refresh`, el servidor bsecurity responde **HTTP 403 (Forbidden)**. El POS hace fallback automático a `POST login` (re-autenticación completa con credenciales).

## Evidencia de Logs (POS → bol-api)

### Ocurrencia 1 — 09:04:05

```json
{
  "level": "INFO",
  "message": "POST Request: sesiones/refresh",
  "time": "2026-03-17T09:04:05.042048",
  "module": "dioAdapter"
},
{
  "level": "WARNING",
  "message": "DioAdapter exception: POST https://api.testing.banquinet.org/bsecurity/sesiones/refresh - 403 - The supplied authentication is not authorized to access this resource",
  "time": "2026-03-17T09:04:05.224129",
  "module": "dioAdapter"
},
{
  "level": "INFO",
  "message": "POST Request: login",
  "time": "2026-03-17T09:04:05.239797",
  "module": "dioAdapter"
}
```

### Ocurrencia 2 — 10:36:55

```json
{
  "level": "INFO",
  "message": "POST Request: sesiones/refresh",
  "time": "2026-03-17T10:36:55.552488",
  "module": "dioAdapter"
},
{
  "level": "WARNING",
  "message": "DioAdapter exception: POST https://api.testing.banquinet.org/bsecurity/sesiones/refresh - 403 - The supplied authentication is not authorized to access this resource",
  "time": "2026-03-17T10:36:55.678930",
  "module": "dioAdapter"
},
{
  "level": "INFO",
  "message": "POST Request: login",
  "time": "2026-03-17T10:36:55.695222",
  "module": "dioAdapter"
}
```

### Ocurrencia 3 — 11:09:11

```json
{
  "level": "INFO",
  "message": "POST Request: sesiones/refresh",
  "time": "2026-03-17T11:09:11.469706",
  "module": "dioAdapter"
},
{
  "level": "WARNING",
  "message": "DioAdapter exception: POST https://api.testing.banquinet.org/bsecurity/sesiones/refresh - 403 - The supplied authentication is not authorized to access this resource",
  "time": "2026-03-17T11:09:12.695356",
  "module": "dioAdapter"
}
```

## Patrón observado

- **100% de los refresh fallan** con 403 en las 6 ocurrencias del log.
- Tras el 403, el POS hace fallback a `POST login` exitosamente.
- El usuario no percibe el fallo porque el login automático funciona, pero **la sesión no se renueva silenciosamente** como debería.

Tras el fallo del refresh (403), el POS realiza una petición `POST login` inmediata. Esto indica que el sistema tiene las credenciales en memoria (o las solicita al "bautismo" inicial) y las re-envía para obtener un nuevo par de tokens.

**Confirmación en Log (Líneas 5013-5018):**
1. `sesiones/refresh` -> 403 Forbidden.
2. `login` -> 200 OK (Nuevo access_token otorgado).

Esto valida que la **renovación silenciosa está rota**, ya que el POS "se rinde" tras el primer intento de refresh y opta por un login completo para no bloquear al usuario.

## Impacto

- **Usuario final:** No percibe el fallo (fallback a login funciona).
- **Seguridad:** Se re-envían credenciales completas en cada refresco, lo cual no es ideal.
- **Rendimiento:** Cada refresh fallido genera un round-trip extra (403 + login).

## Fuente

- Log: `bol-api.log` servidor testing (2026-03-17)
- Dialog IDs: `pos_logs` a las 09:04, 10:36, 11:09.
