# 💰 5 de Oro: Lógica Oficial
#ReglasDNLQ #Frontend

## 1. Consulta de Resultados

### CU-5OR-001: Visualización de Sorteos Vacíos
* **Descripción de la regla:** Cuando el usuario consulta la grilla de resultados de 5 de Oro, es posible que el sorteo del día aún no esté procesado o cargado en el sistema DNLQ.
* **Criterios de Aceptación (Reglas UI):**
  1. Si la fecha seleccionada no tiene datos, la interfaz no debe quedar trancada ni mostrar grillas vacías.
  2. El sistema debe presentar claramente la leyenda **"SIN RESULTADOS"** (o similar) y permitir seguir navegando hacia atrás o adelante en el calendario.
* **Trazabilidad de Defectos:**
  * Asociado a **BUG-5OR-001** (El sistema dibuja un cuadro gris y bloquea el selector de fechas).
