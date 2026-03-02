# OBSERVACIÓN-QUI-001: Latencia Carrito mixto (Autorizando >100s)

**Estado:** 🔍 Bajo Investigación / Posible Bug
**Prioridad:** Media-Alta (Bloqueo de UI condicional)
**Versión Detectada:** v1.0.1+17 (Debug)

## Descripción

Al enviar un carrito que contiene jugadas de Quiniela y Tómbola simultáneamente, la aplicación queda bloqueada en el estado "Autorizando" durante más de 100 segundos si el servidor demora en responder.

## Evidencia Técnica

- **Timestamp:** 27/02/2026 18:34:08
- **authorizationId:** `7e25da93`
- **Respuesta Servidor:** Tardó 101s. Retornó `jugadasRechazadas` con alternativa.
  - *Ejemplo:* `3C nro:8 premio:14 $999 → alternativa $447`.

## Análisis Causa Raíz (Hipótesis)

El cliente HTTP (Dio) parece compartir una cola única para:

1. **Upload de Logs:** Se detectó un envío masivo de 69 logs justo antes del envío de la apuesta.
2. **Autorizaciones:** La apuesta quedó en "espera" tras la cola de logs.

Al demorar tanto la respuesta, la app no parece manejar el timeout correctamente o queda en un estado de espera infinito del cual no sale ni cuando llega la respuesta con alternativas.

## Pasos para Reproducir

1. Generar actividad sustancial de logs (navegar por varias pantallas).
2. Armar carrito mixto (QUI + TOM).
3. Tocar "Emitir".
4. Observar el bloqueo en "Autorizando".

## Comportamiento Esperado

- La app debe tener un timeout de red (ej. 30s).
- Si llega una respuesta con alternativas (aunque tarde), el diálogo de alternativas debe renderizarse siempre.
- El envío de logs no debería bloquear las peticiones transaccionales críticas.
