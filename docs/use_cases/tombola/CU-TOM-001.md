# CU-TOM-001: Tómbola - Autocompletado numérico en apuestas rápidas
**Módulo:** Tómbola
**Tipo:** Funcional

## 📝 Descripción
**Valor de Negocio:** Prevenir errores de digitación de los vendedores al completar jugadas de Tómbola rápidamente, asegurando que los números de un solo dígito se formateen correctamente en lugar de ser descartados, agilizando las ventas en horarios pico.
**Ver concepto:** [[concepts/tombola_logica_oficial|Lógica Oficial Tómbola]]

---


## 🎭 Escenario: Ingreso ágil de jugada finalizando con un dígito

**Dado** que el usuario se encuentra en la pantalla de Tómbola
**Y** la grilla de números de la boleta tiene valores previos de dos dígitos ingresados (ej. "01", "02")
**Cuando** el usuario teclea un número de un solo dígito al final de la secuencia (ej. "4")
**Y** el usuario presiona la acción de "Apostar" de manera directa
**Entonces** el sistema procesa la boleta incluyendo la totalidad de números elegidos
**Y** el sistema autocompleta el último dígito agregando un cero a la izquierda de forma automática (ej. "04")

---
> 🪲 **Trazabilidad de Defectos:** Este escenario actualmente falla. Se encuentra documentado bajo el ticket **[BUG-TOM-001]** (Release v1.0.1+12), donde el sistema ignora y elimina el último valor de un único dígito, generando inconsistencia entre lo que el cliente pido y el ticket impreso.
