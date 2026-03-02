# ORO-C5N-001: Jugada de 5 Números Común Sorpresa

**Módulo:** 5 de Oro
**Fecha:** 2026-02-27
**Estado:** Refinado

---

## 📝 Descripción y Escenario

**Ingreso de una jugada aleatoria (sorpresa) de 5 números para el juego de 5 de Oro en su modalidad Común.**

**Dado** que un subagente quiere ingresar una jugada de 5 de Oro Común sorpresa de 5 números
**Cuando** solicita la jugada al sistema
**Entonces** el sistema genera 5 números aleatorios únicos, agrega la jugada al carrito y el total de la venta se actualiza.

## 🔒 Precondiciones y Postcondiciones

- **Precondiciones:** La terminal está logueada, con saldo y hay un sorteo de 5 de Oro vigente (abierto).
- **Postcondiciones:** La jugada se visualiza en el carrito (o se envía directo) con un monto fijo correspondiente al valor de la apuesta de 5 de Oro Común.

## 📋 Reglas de Negocio (Business Rules)

- **Límites:** El costo de la jugada es indivisible y está definido por el valor oficial del juego. Solo se eligen exactamente 5 números.
- **Validaciones:**
  - Los 5 números generados aleatoriamente deben ser únicos (sin repeticiones) dentro del rango del 1 al 48.
  - La validación de unicidad ocurre en el Generador Aleatorio.
- **Exclusiones o Restricciones:** No admite modalidad Revancha (es solo Común).

## ⚠️ Casos Alternativos y Manejo de Errores (Edge Cases)

- **Errores de API (BOL-API):** El sorteo ya cerró (error devuelto por API: "Sorteo cerrado").
- **Desconexión / Offline:** Si no hay conexión al generar, se muestra error de red.

## ✅ Criterios de Aceptación (QA)

1. **Paso a paso de prueba 1:** Solicitar una jugada de 5 números "Sorpresa" modalidad Común. Verificar que se generan 5 números distintos y visibles en pantalla (1 al 48).
2. **Paso a paso de prueba 2:** Constatar que el monto agregado al total coincide con el precio oficial de 5 de Oro Común.
3. **Paso a paso de prueba 3:** Realizar la venta y verificar que el ticket se imprime correctamente con la etiqueta "Sorpresa".

## 🔗 Conceptos de Negocio Vinculados (Knowledge Linkers)

- `[[5 de Oro]]`
- `[[Jugadas Sorpresa]]`

---
Tags: #usecase #qa #gherkin #refactor #5deoro
[[00_KNOWLEDGE_BASE_MOC|Volver al MOC]]
