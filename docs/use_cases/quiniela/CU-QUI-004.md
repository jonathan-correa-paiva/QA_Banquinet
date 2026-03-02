# CU-QUI-004: Quiniela - Apuesta de Redoblona (Válida e Inválida)
**Módulo:** Quiniela 
**Tipo:** Funcional / Validación Negocio
**Prioridad:** Alta

## 📝 Descripción
Comprobar el ingreso de "Redoblonas", el juego complejo de la Quiniela que requiere combinar dos números diferentes bajo lógicas jerárquicas estrictas de premiación.

---

## ⚙️ Precondiciones
* Pantalla de Quiniela Abierta.

---

## 🚶 Pasos de Ejecución (Flujo Válido)
1. Seleccionar los sorteos deseados.
2. Llenar la Fila 1 (Primer número): Número `01` al premio `10`.
3. Llenar la Fila 2 (Segundo número): Número `45` al premio `10` (o menor jerarquía como premio 20).
4. Establecer apuesta (Ej: `$50`) y presionar "Ingresar".

---

## ✅ Comportamiento Esperado (Válido)
* La jugada se acepta y agrupa como "Redoblona" dentro del carrito, multiplicando su valor base por la cantidad de sorteos seleccionados.

---

## ❌ Pasos de Ejecución (Flujo Inválido Jerárquico - Edge Cases)
* **Escenario A (Jerarquía rota 1):** Fila 1 `21` al premio `1` combinada con Fila 2 `45` al premio `4`.
* **Escenario B (Jerarquía rota 2):** Fila 1 `21` al premio `7` combinada con Fila 2 `12` al premio `6`.

## ✅ Comportamiento Esperado (Inválido)
* El gPOS no debe permitir el ingreso al carrito.
* La UI debe manifestar un Error (UIException) directamente bajo el campo del segundo número indicando explícitamente que la Redoblona no es válida de acuerdo al reglamento.
