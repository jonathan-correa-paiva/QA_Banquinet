# CU-ALT-002: Jugada Rechazada CON Alternativa

**Módulo:** Alternativas
**Fecha:** 2026-02-27
**Estado:** Refinado

---

## 📝 Descripción y Escenario

**El sistema propone alternativas parciales cuando una jugada supera el riesgo o tope de la banca, permitiéndole al usuario aceptar una fracción de la apuesta original.**

**Dado** que un subagente intenta ingresar una jugada de Quiniela o Tómbola
**Cuando** el monto o número ingresado supera el tope de riesgo de la Banca
**Entonces** el sistema rechaza la jugada original pero propone alternativas de montos o números parciales para que el subagente elija.

## 🔒 Precondiciones y Postcondiciones

- **Precondiciones:** El subagente está logueado, tiene conexión, e intenta ingresar una apuesta válida pero riesgosa (supera topes).
- **Postcondiciones:** Si el subagente acepta la alternativa, se genera la apuesta con el nuevo monto/número y se actualiza el saldo y carrito.

## 📋 Reglas de Negocio (Business Rules)

- **Límites:** Las alternativas propuestas nunca pueden superar el riesgo máximo calculado por la Banca para ese sorteo.
- **Validaciones:** La validación de tope ocurre en el backend (BOL-API). El front no conoce los topes exactos de antemano.
- **Exclusiones o Restricciones:** Las alternativas tienen un tiempo de expiración (timeout). Si el subagente tarda demasiado, deben re-calcularse.

## ⚠️ Casos Alternativos y Manejo de Errores (Edge Cases)

- **Errores de API (BOL-API):** Si BOL-API no puede generar una alternativa, se debe devolver un rechazo SIN alternativa (`CU-ALT-003`).
- **Desconexión / Offline:** Si se corta internet mientras se muestran las alternativas, al volver la conexión, la alternativa debe ser descartada y la apuesta permitiendo intentar de nuevo.
- **Otros Excepciones:** Tiempo de espera expirado en la pantalla de alternativas.

## ✅ Criterios de Aceptación (QA)

1. **Paso a paso de prueba 1:** Ingresar un número con una apuesta excesiva (ej: $10,000 al número 00). Verificar que el sistema muestra el modal de alternativas.
2. **Paso a paso de prueba 2:** Seleccionar una alternativa, constatar que el carrito se actualiza con el nuevo monto.
3. **Paso a paso de prueba 3:** Verificar el comportamiento de cancelar/rechazar la alternativa ofrecida (no se agrega nada al carrito).

## 🔗 Conceptos de Negocio Vinculados (Knowledge Linkers)

- `[[Topes de Riesgo]]`
- `[[Alternativas de Banca]]`

---
Tags: #usecase #qa #gherkin #refactor #alternativas
[[00_KNOWLEDGE_BASE_MOC|Volver al MOC]]
