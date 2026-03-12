# BUG-5OR-003: Cambio de Estado Botón Ingresar/Emitir tras Validación Fallida

**Estado:** ⛔ Abierto
**Módulo:** 5 de Oro / Interfaz de Apuesta
**Prioridad:** Alta (Riesgo de pérdida de venta)
**Versión Detectada:** v1.0.1+17

## Descripción

En la pantalla de apuesta de 5 de Oro, si el usuario intenta ingresar una jugada incompleta (ej: 4 números en lugar de 5), el sistema muestra correctamente el error en el campo faltante. Sin embargo, al corregir el error completando el campo, el botón de acción principal cambia erróneamente su estado de "Ingresar" a "Emitir" (o se mantiene en "Emitir" si ya había jugadas previas en el carrito), saltándose el paso lógico de agregar esa última jugada corregida a la lista.

Si el usuario presiona "Emitir" pensando que está confirmando la jugada actual, el sistema imprime el ticket solo con las jugadas que ya estaban en el carrito, descartando la última jugada que acababa de completar en pantalla sin previo aviso.

## Pasos para Reproducir

1. Ingresar al módulo de **5 de Oro**.
2. Cargar una o varias jugadas válidas al carrito (el botón dice "Ingresar" y luego cambia a "Emitir" cuando hay foco afuera).
3. Iniciar una nueva jugada pero dejarla incompleta (ej: ingresar 4 números).
4. Intentar confirmar (el campo faltante se marca en rojo).
5. Completar el número faltante manualmente.
6. Observar el botón de acción principal (abajo a la derecha).

## Comportamiento Actual (Falla)

1. **Caso Carrito con Ítems:** El botón muestra la acción **"Emitir"** (con el ícono de impresora) en lugar de **"Ingresar"** (con el check verde), a pesar de que hay una jugada válida en pantalla pendiente de ser agregada al carrito.
2. **Caso Carrito Vacío:** Si es la primera jugada y el input es inválido (ej: faltan números), el botón de acción **desaparece completamente**, dejando al usuario sin una forma clara de confirmar o ver qué acción sigue tras corregir.

## Comportamiento Esperado

Al detectar que hay una jugada válida completa en los campos de entrada que aún no está en el carrito, el botón principal debe mostrar siempre **"Ingresar"**. Solo debe cambiar a **"Emitir"** cuando los campos de entrada estén vacíos y haya ítems en el carrito.

## Impacto

El cajero puede creer que cobró todas las jugadas, pero el ticket sale impreso sin la última apuesta, generando diferencias de caja o reclamos del cliente que creyó haber jugado ese último número.
