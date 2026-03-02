# 🔢 Tómbola: Lógica Oficial
#ReglasDNLQ #Frontend

## 1. Reglas de Apuesta Simples

### CU-TOM-001: Validación de Formato de Dígitos
* **Descripción de la regla:** En el juego de Tómbola, la grilla de apuesta requiere números exactos de dos cifras.
* **Criterios de Aceptación (Reglas UI):**
  1. El sistema no debe permitir procesar jugadas que contengan números de una sola cifra sueltos.
  2. Si el cajero ingresa un dígito simple (Ej: `4`), el sistema tiene dos opciones válidas:
     * Autocompletar automáticamente con un cero a la izquierda (Ej: `04`). Esta es la práctica recomendada y emula el comportamiento de 5 de Oro.
     * Frenar la apuesta con un mensaje de error indicando formato inválido.
  3. **Nunca** debe ignorar o truncar silenciosamente la cifra ingresada al presionar Apostar de manera apresurada.
* **Trazabilidad de Defectos:**
  * Asociado a **BUG-TOM-001** (El POS se traga el último dígito ingresado si es de una sola cifra).
