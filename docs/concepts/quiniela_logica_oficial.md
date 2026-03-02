# 📘 Base de Conocimientos: Lógica Oficial de La Quiniela
**Fuente:** [Reglamento Oficial La Banca]
**Objetivo:** Definir los Casos de Uso (CU) base del negocio para su posterior contrastación con la lógica de la aplicación gPOS.

## 1. Modalidades Simples (1, 2 y 3 cifras)

### CU-QUI-001: Apuesta a 3 cifras
* **Descripción de la regla:** El jugador elige un número entre "000" y "999" y un rango de premios entre el 1 y el 20. El multiplicador de ganancia es de 500 veces lo apostado por premio.
* **Criterios de Aceptación (Reglas Duras):**
  1. El sistema SOLO debe permitir el ingreso de exactamente 3 dígitos numéricos.
  2. El rango de premio seleccionado DEBE estar entre 1 y 20 inclusive.
  3. El monto de la apuesta debe ser válido y mayor a $0.
  4. (Dato de pago potencial): Apuesta / Rango * 500.

### CU-QUI-002: Apuesta a 2 cifras
* **Descripción de la regla:** El jugador elige un número entre "00" y "99" y un rango de premios entre el 1 y el 20. El multiplicador de ganancia es de 70 veces lo apostado por premio.
* **Criterios de Aceptación (Reglas Duras):**
  1. El sistema SOLO debe permitir el ingreso de exactamente 2 dígitos numéricos.
  2. El rango de premio seleccionado DEBE estar entre 1 y 20 inclusive.

### CU-QUI-003: Apuesta a 1 cifra
* **Descripción de la regla:** El jugador elige un número entre "0" y "9" y un rango de premios entre el 1 y el 20. El multiplicador de ganancia es de 7 veces lo apostado por premio.
* **Edge Case Oficial (Multiplicador por repetición):** Si el número de 1 cifra sale repetido dentro de los premios seleccionados, el monto del acierto se multiplica por la cantidad de veces que salió.
* **Criterios de Aceptación (Reglas Duras):**
  1. El sistema SOLO debe permitir el ingreso de exactamente 1 dígito numérico.
  2. El rango de premio seleccionado DEBE estar entre 1 y 20 inclusive.

---

## 2. Modalidad Compleja (Redoblona)

### CU-QUI-004: Apuesta válida de Redoblona
* **Descripción de la regla:** Apuesta combinada a dos números de dos cifras cada uno (entre 00 y 99), con dos premios distintos asociados.
* **Criterios de Aceptación (Reglas Duras):**
  1. **Número 1:** Debe tener exactamente 2 cifras. Su premio asociado puede estar entre 1 y 20.
  2. **Número 2:** Debe tener exactamente 2 cifras. Su premio asociado puede estar entre 5 y 20.
  3. **Validación Crítica:** El premio elegido para el Segundo Número NUNCA puede ser inferior al premio elegido para el Primer Número.

### EC-QUI-001: Redoblona con Premio Inválido (Edge Case de Negocio)
* **Descripción:** Intento de registrar una Redoblona rompiendo la regla de jerarquía de premios.
* **Pasos de la lógica:**
  1. Ingresar Número 1 (ej: "15") con Premio "10".
  2. Ingresar Número 2 (ej: "25") con Premio "5".
* **Comportamiento Esperado:** El sistema DEBE bloquear la jugada antes de enviarla al carrito o a la API, arrojando un error de validación de negocio.

---

## 3. Canales y Límites Operativos (Restricciones del gPOS)

### CU-QUI-005: Horarios de Recepción (Vespertino y Nocturno)
* **Descripción de la regla:** El sistema físico (Red Física / Agencias) tiene un horario de corte estricto.
* **Criterios de Aceptación (Reglas Duras):**
  1. **Sorteo Vespertino:** El POS debe rechazar cualquier apuesta ingresada a partir de las 14:00:01 hs.
  2. **Sorteo Nocturno:** El POS debe rechazar cualquier apuesta ingresada a partir de las 20:00:01 hs.

---

## 4. Batería de Pruebas: Developer Path vs QA

El equipo de desarrollo utiliza los siguientes casos base para validar la inserción en el Carrito (sin llegar a la emisión). Como QA, cruzamos estos casos con las reglas "duras" para confirmar si el sistema los rechaza o acepta correctamente.

### 4.1 Pruebas de 1 Cifra
*   **Dev-Test 1:** `1 a la cabeza $50 (Vespertino/Nocturno)`. (Válido - Happy Path).
*   **Dev-Test 2:** `1 a los 20 $50`. (Válido - Límite superior del rango de premio).
*   **Dev-Test 3:** `1 a los 30 $50`. (🚨 **Candidato a Rechazo:** El rango oficial de premios de Quiniela es 1 al 20. El sistema debería validar y bloquear el "a los 30" antes de ir al carrito).
*   **Dev-Test 4:** `9 a los 16 $5000`. (Válido - Prueba de montos altos).

### 4.2 Pruebas de 2 Cifras
*   **Dev-Test 5:** `01 a la cabeza $50`. (Válido).
*   **Dev-Test 6:** `01 a los 20 $50`. (Válido).
*   **Dev-Test 7:** `01 a los 30 $50`. (🚨 **Candidato a Rechazo:** Fuera de rango de premio).

### 4.3 Pruebas de Redoblona
*   **Dev-Test 8:** `01 al 1 con el 02 a los 10 $50 (Multiturno)`. (Válido. Multiturno implica Ambos sorteos).
*   **Dev-Test 9:** `38 a los 10 con el 45 a los 10 $25`. (Válido. Premio 2 es >= que Premio 1, y ambos están en el rango permitido).
*   **Dev-Test 10:** `21 a la cabeza con el 45 a los 4 $20`. (✅ **Happy Path [Validación Negativa]:** El Segundo Premio SIEMPRE debe ser entre el 5 y el 20. El sistema gPOS debe procesar la regla y bloquearlo arrojando el error correspondiente, emulando al POS anterior).
*   **Dev-Test 11:** `21 a los 7 con 12 a los 6 $50`. (✅ **Happy Path [Validación Negativa]:** El Premio 2 nunca puede ser menor al Premio 1. El gPOS debe atajar este error de negocio intencional).
*   **Dev-Test 12:** `Sorpresa redoblona $100`. (⚠️ **Nuevo Concepto Detectado:** La modalidad "Sorpresa").

### 4.4 Pruebas de 3 Cifras
*   **Dev-Test 13:** `001 a la cabeza $50`. (Válido).
*   **Dev-Test 14:** `999 a los 20 $50`. (Válido - Checkeo de límites `999`).
*   **Dev-Test 15:** `858 a los 40 $50`. (🚨 **Candidato a Rechazo:** Fuera de rango de premio, a los 40 no existe).
*   **Dev-Test 16:** `Sorpresa vespertino/nocturno $400`. (⚠️ **Nuevo Concepto:** Apuesta Sorpresa de 3 cifras generada por el POS).