# Nota Técnica: Falla 502 Lotería (Gateway Error)

**Clave:** `ERR-LOT-502`
**Fecha:** 27/02/2026

## Observación

Se detectó un comportamiento errático al consultar sorteos de Lotería cuando el backend no tiene la información disponible o el sorteo no existe.

## Logs de Referencia

```json
Start: 2026-02-27T19:48:04.865
Request:{
  "nroSorteo" : 47137,
  "codigoModalidad" : "LTF",
  "cantFracciones" : 1,
  "numeroBillete" : 670
}
Response:{
  "statusCode" : 502,
  "message" : "No existe sorteo par",
  "messageCode" : "101"
}
Duration:665 ms
```

## Síntomas en la App

- La app entra en un loop de reintentos infinitos (se ven múltiples peticiones idénticas en el log con pocos segundos de diferencia).
- El usuario ve un spinner persistente.
- Finalmente, la aplicación lanza un mensaje de **"Error en puerta de enlace"**.

## Recomendación

1. **Backend:** Revisar por qué el error de "sorteo inexistente" se mapea a un HTTP 502 (Bad Gateway) en lugar de un 404 o un error de negocio controlado.
2. **App:** Implementar un manejo específico para el code `101` que detenga los reintentos y muestre un mensaje amigable al usuario (ej: "El sorteo seleccionado no está disponible").
