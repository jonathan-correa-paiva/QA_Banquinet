# 🤖 Suite de Automatización E2E (Mocks CI/CD)
#Automatizacion #Dev_Testing #Cobertura

Este documento detalla los 64 Casos de Uso testeados de forma automática en el código base del frontend (Flutter/Dart). 
**Contexto de QA:** Estos tests utilizan **mocks** para simular las respuestas del servidor. Sirven como una capa base de regresión (E2E simulado), asegurando que las reglas de validación de UI no se rompan versión a versión. 

*La responsabilidad del equipo de QA manual es complementar estos tests verificando la integración real (backend vivo) y los "edges cases" no declarados aquí.*

---

## 1. 🎲 Quiniela (`quiniela_test.dart`)
*Objetivo del Módulo:* Validar el ingreso de jugadas al carrito respetando límites de premio, límites de apuesta y reglas de truncamiento visual.

### Una Cifra
*   ✅ **Ingreso Válido:** [1 a los 1] x $50 (Ambos Sorteos) -> Carrito: $100.
*   ✅ **Límite Máximo Premio:** [1 a los 20] x $20 -> Aceptado.
*   ✅ **Truncamiento de Premio (Edge UI):** Ingresar "30" en premio trunca a "3".
*   ✅ **Apuesta Mínima:** Apuesta de $0 denegada (Error UI).
*   ✅ **Apuesta Máxima:** Apuesta de $5000 denegada (Error UI).

### Dos Cifras
*   ✅ **Ingreso Válido:** [01 a los 1] x $50 (Ambos Sorteos) -> Carrito: $100.
*   ✅ **Límite Máximo Premio:** [01 a los 20] x $50 -> Aceptado.
*   ✅ **Truncamiento de Premio (Edge UI):** Ingresar "30" trunca a "3" -> [01 a los 3].
*   ✅ **Apuestas Fuera de Rango:** $0 y $5000 denegadas correctamente.

### Redoblona
*   ✅ **Ingreso Válido Standard:** [01 a los 1] con [02 a los 10] x $50 (Ambos).
*   ✅ **Redoblona Válida (Límite):** [31 a los 10] con [45 a los 10] x $50.
*   ✅ **Redoblona Inválida (Jerarquía 1):** [21 a los 1] con [45 a los 4] -> Error UI.
*   ✅ **Redoblona Inválida (Jerarquía 2):** [21 a los 7] con [12 a los 6] -> Error UI.
*   ✅ **Sorpresa Redoblona:** Botón Sorpresa x $400 -> Jugada generada y aceptada.

### Tres Cifras
*   ✅ **Ingreso Válido:** [001 a los 1] x $50 (Ambos Sorteos).
*   ✅ **Sorpresa Tres Cifras:** Botón Sorpresa x $50 (Ambos Sorteos).
*   ✅ **Límite Máximo Premio:** [999 a los 20] x $20 -> Aceptado.
*   ✅ **Truncamiento de Premio:** Ingresar "40" trunca a "4".
*   ✅ **Apuestas Fuera de Rango:** $0 y $5000 denegadas correctamente.

---

## 2. 🔢 Tómbola (`tombola_test.dart`)
*Objetivo del Módulo:* Validar combinaciones de números (desde 1 hasta 7) y validaciones de rango numérico.

*   ✅ **1 y 2 Números:** Intento de [01] o [01, 02] x $50 -> Error UI. Jugada inválida.
*   ✅ **3 Números:** [01, 02, 99] x $50 (Ambos) -> Aceptada ($100).
*   ✅ **4 Números:** [01, 02, 03, 99] x $50 (Vesp) -> Aceptada ($50).
*   ✅ **5 Números:** [01, 02, 03, 04, 99] x $50 (Noct) -> Aceptada ($50).
*   ✅ **6 Números (Manual y Sorpresa):** [01..05, 99] aceptada. Opción sorpresa aceptada borrando 1 campo.
*   ✅ **7 Números (Límites de Apuesta):** Ingreso estándar ($50) aceptado. Apuesta Mínima ($20) rechazada. Apuesta Máxima ($1000) rechazada.
*   ✅ **7 Números Sorpresa:** Aceptada por $100.

---

## 3. 💰 5 de Oro (`cinco_de_oro_test.dart`)
*Objetivo del Módulo:* Asegurar las variantes "Común", "Revancha" y "Múltiples".

*   ✅ **Común 5 Números:** [Sorpresa] agrega correctamente.
*   ✅ **Revancha 5 Números:** [Sorpresa], [01..04, 48] y [01..04, 49] agregadas con Revancha exitosamente.
*   ✅ **Común Múltiples (Sin Revancha):** [Sorpresa 4N], manuales de 6N, 7N y 8N validadas.
*   ✅ **Revancha Múltiples:** Igual a Común Múltiples + Revancha validada (4N..8N).
*   ✅ **Futuros (3 Sorteos):** [Sorpresa + Revancha] proyectada a 3 sorteos futuros agregada con éxito.

---

## 4. 📌 Servicios y Otros (`pines_web`, `recargas`, `supermatch`)

### Pines Web
*   ✅ **C.I Inválida:** 1.469.483-9 x $100 -> Error de C.I.
*   ✅ **C.I Válidas:** 6.844.104-4 y 456.789-0 x $100 -> Aceptadas al carrito.

### Recargas Telefónicas
*   ✅ **Antel:** 111 111 111 x $100 -> Número inválido (Bloqueo).
*   ✅ **Movistar:** 098 456 789 x $100 -> Aceptada.
*   ✅ **Claro (Mínimo):** 099 999 999 x $10 -> Monto inválido (Bloqueo).

### Supermatch y Sorteos
*   ✅ **Supermatch:** Prearmada válida se desglosa visualmente y lista al carrito. Prearmada inexistente tira cartel de error.
*   ✅ **Sorteos Actuales:** Carga de grilla inicial exitosa. Botón actualizar refresca el listado.

---

## 5. 📈 Reportes UI (`resumen`, `cuenta_corriente`, `aciertos`)
*   ✅ **Resumen Venta:** Carga por defecto la fecha de hoy. El cambio de fecha refresca visuales. Funcionalidad de Tabs (Apuestas, Recargas vacías, Anulados) confirmada.
*   ✅ **Cuenta Corriente:** Muestra Saldo Actual y tabla de movimientos exitosamente.
*   ✅ **Aciertos:** Grilla carga OK. El Tap en un acierto reciente despliega el ticket con el acierto marcado visualmente. Tabuladores de Pendientes vs Entregados cargan bien.

---
> 💡 **NOTA PARA EL EQUIPO QA:** Como estos 64 tests están automatizados a nivel componente/UI usando Mocks; **nuestra prioridad manual** debe centrarse en los flujos complejos como caídas de red, timeouts con Bolserver, rechazos directos por límites de banca y partición de emisión de tickets físicos (hardware).
