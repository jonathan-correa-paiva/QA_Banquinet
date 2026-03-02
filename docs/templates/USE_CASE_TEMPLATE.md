# 🗂️ USE CASE TEMPLATE

---
**ID:** CU-XXX-XXX
**Título:** (Máximo 10 palabras)
**Módulo:** [Quiniela / 5 de Oro / etc.]
**Fecha:** {{date}}
**Estado:** [Borrador / Refinado / Listo para QA]

---

## 📝 Descripción y Escenario

**Breve descripción del objetivo del caso de uso.**

**Dado** [Contexto inicial/Precondición general]
**Cuando** [Acción/Evento principal]
**Entonces** [Resultado esperado primario]

## 🔒 Precondiciones y Postcondiciones

- **Precondiciones:** (Estado requerido del sistema, hardware o usuario antes de iniciar. Ej: Terminal logueada, saldo disponible > 0).
- **Postcondiciones:** (Estado del sistema tras completarse. Ej: Ticket impreso, saldo local debitado, base de datos actualizada).

## 📋 Reglas de Negocio (Business Rules)

*Aquí deben ir todas las reglas estrictas de validación y límites.*

- **Límites:** (Ej. Monto máximo $5,000, máximo 10 números).
- **Validaciones:** (Ej. Dónde se valida: ¿Front o Back? Formato de entrada requerido).
- **Exclusiones o Restricciones:** (Ej. No se pueden agrupar apuestas si...).

## ⚠️ Casos Alternativos y Manejo de Errores (Edge Cases)

*Qué pasa cuando el "Camino Feliz" falla.*

- **Errores de API (BOL-API):** (Códigos de error esperados y mensaje a mostrar en pantalla).
- **Desconexión / Offline:** (Comportamiento esperado si se corta internet en este paso).
- **Otros Excepciones:** (Ej. Bloqueos de banca, tiempo de espera expirado).

## ✅ Criterios de Aceptación (QA)

1. **Paso a paso de prueba 1:** Verificar que...
2. **Paso a paso de prueba 2:** Constatar...

## 🔗 Conceptos de Negocio Vinculados (Knowledge Linkers)

- (Ej: `[[concepto_limite_banca]]`, `[[concepto_offline]]`)

---
Tags: #usecase #qa #gherkin #refactor
[[00_KNOWLEDGE_BASE_MOC|Volver al MOC]]
