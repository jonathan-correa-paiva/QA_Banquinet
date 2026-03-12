# BUG-5OR-002: Calendario deshabilitado (State Leak)

**Estado:** ⛔ Abierto
**Prioridad:** Media
**Versión Detectada:** v1.0.1+17

## Descripción

El selector de fecha (calendario) en la pantalla de Resultados deja de funcionar después de visitar un sorteo de 5 de Oro que no posee resultados. Este estado de "deshabilitado" persiste incluso al cambiar a otros juegos (Quiniela/Tómbola).

## Pasos para Reproducir

1. Ir a **Resultados**.
2. Seleccionar **5 de Oro** en una fecha que sepa que no hay resultados (ej. hoy temprano o día sin sorteo).
3. Tocar el selector de fecha (el botón central de la fecha). **No abre nada.**
4. Cambiar a **Quiniela** o **Tómbola**.
5. Intentar abrir el calendario. **Sigue sin abrir**, a pesar de que estos juegos sí tengan resultados.

## Workaround detectado

Si se navega a un sorteo de Quiniela que **sí tenga resultados**, el calendario vuelve a funcionar mágicamente para Quiniela, pero al volver a 5 de Oro (sin resultados) se rompe de nuevo.

## Análisis Técnico

Parece ser un **State Leak** en Flutter. El widget de `Resultados` probablemente pone el botón de fecha en `enabled: false` cuando el listado de resultados viene vacío, pero no resetea ese flag correctamente al cambiar de módulo o de juego si la navegación es interna.
