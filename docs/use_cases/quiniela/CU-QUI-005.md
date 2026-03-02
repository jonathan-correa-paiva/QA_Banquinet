# CU-QUI-005: Quiniela - Corte de Horarios (Vespertino y Nocturno)
**Módulo:** Quiniela 
**Tipo:** Límite / Riesgo de Banca
**Prioridad:** Alta

## 📝 Descripción
Verificar que el gPOS respeta los horarios oficiales de corte dispuestos por la DNLQ y la Banca para los sorteos Vespertino (aprox 14:00) y Nocturno (aprox 21:00).

---

## ⚙️ Precondiciones
* Configurar la hora local del dispositivo cerca del horario de cierre del sorteo.

---

## 🚶 Pasos de Ejecución (Flujo de Cierre)
1. Abrir la pantalla de Quiniela.
2. Observar la disponibilidad de los botones de Sorteo (Ej: "Vespertino" y "Nocturno").
3. Esperar a que el reloj cruce la hora de corte estipulada para el sorteo Vespertino.

---

## ✅ Comportamiento Esperado (Criterios de Aceptación)
* **Visualización:** El botón del sorteo correspondiente debe deshabilitarse o desaparecer de las opciones seleccionables de manera inmediata tras el corte.
* **Emisión Posterior:** Si una apuesta se encontraba en el carrito e incluye el sorteo que acaba de cerrar, al intentar Emitir/Apostar, el servidor de la Banca (Bol-API) debe devolver un "Rechazo de Banca" claro indicando que "El sorteo Vespertino se encuentra cerrado".
