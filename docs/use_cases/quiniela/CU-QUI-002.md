# CU-QUI-002: Quiniela - Apuesta a 2 Cifras
**Módulo:** Quiniela 
**Tipo:** Funcional (Core)
**Prioridad:** Alta

## 📝 Descripción
Validar que el gPOS permita el ingreso regular de apuestas de Quiniela con exactamente 2 cifras.

---

## ⚙️ Precondiciones
* Terminal operativa y en línea.
* Pantalla de Quiniela activa y seleccionado al menor 1 sorteo.

---

## 🚶 Pasos de Ejecución (Flujo Principal)
1. Ingresar en el campo "Número" una cifra doble (Ej: `01` o `99`).
2. Ingresar en "Premio" una ubicación válida entre 1 y 20.
3. Ingresar en "Apuesta" un monto base (Ej: `$50`).
4. Presionar "Ingresar".

---

## ✅ Comportamiento Esperado (Criterios de Aceptación)
* **Validación en UI:** El número se formatea y mantiene en dos cifras (`01`).
* **Carrito:** La fila de la compra ingresa listando "Quiniela 2 cifras" e impacta correctamente la suma total en función al número de turnos. Los campos se resetean.
* **Negocio:** Posee un multiplicador potencial de 70x al ganador.

---

## ❌ Escenarios de Fallo / Bordes
* Igual a CU-QUI-001 (Validaciones intrínsecas del TextField para Premio superior a 20 o montos fuera de rango $0 o $5000+).
