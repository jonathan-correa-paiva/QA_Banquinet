# 🛒 Concepto: El Carrito de Compras (Multi-Juego)

#Concept #BusinessRules #UX

El Carrito es el componente central de la interfaz de gPOS que permite la acumulación de múltiples jugadas antes de su confirmación y envío final a la API.

## 📌 Reglas de Negocio
- **Persistencia Temporal:** El carrito mantiene las jugadas vivas mientras la sesión del usuario esté activa.
- **Validación al Vuelo:** Cada vez que se agrega una jugada, se valida contra las reglas del juego específico (Quiniela, Tómbola, etc.).
- **Capacidad:** No hay un límite técnico estricto de ítems, pero el UX está optimizado para hasta 20 jugadas.
- **Emisión:** Al presionar "Pagar/Confirmar", el carrito se vacía y se generan los cupones correspondientes (ver [[logica_interna_gpos|Gestión de Cupones]]).

## 🔗 Relaciones
- [[use_cases/00_USE_CASES_INDEX|Índice de Casos de Uso del Carrito]]
- [[concepts/logica_riesgo_banca|Validación de Topes de Banca]]

---
[[00_KNOWLEDGE_BASE_MOC|Volver al MOC]]
