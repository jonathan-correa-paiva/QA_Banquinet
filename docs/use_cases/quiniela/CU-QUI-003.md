# CU-QUI-003: Quiniela - Apuesta a 1 Cifra
**Módulo:** Quiniela 
**Tipo:** Funcional (Core)
**Prioridad:** Alta

## 📝 Descripción
Validar que el gPOS permita el ingreso de apuestas de Quiniela al último dígito (a la terminación).

---

## ⚙️ Precondiciones
* Pantalla de Quiniela activa y sorteos válidos seleccionados.

---

## 🚶 Pasos de Ejecución (Flujo Principal)
1. Ingresar en el campo "Número" una cifra única (Ej: `1` o `9`).
2. Ingresar en "Premio" una ubicación válida entre 1 y 20 (Ej: `1` a la cabeza, `20` a los premios, `30` para forzar truncamiento a `3`).
3. Ingresar en "Apuesta" un monto base (Ej: `$50`).
4. Presionar "Ingresar".

---

## ✅ Comportamiento Esperado (Criterios de Aceptación)
* **Validación en UI:** El número se mantiene como un dígito solo.
* **Carrito:** La fila de la compra ingresa listando la jugada (Ej: "1 a los 20") e impacta correctamente la suma total x Sorteos.
* **Negocio:** Se asume un multiplicador de 7x en caso de ganar.

---

## ❌ Flujos Alternativos / Mocks
* **Apuesta fuera de rango:** Apuesta menor al mínimo ($50) o mayor al máximo establecido ($5000), genera un `UIException` resaltando el campo en rojo y previniendo el ingreso.
