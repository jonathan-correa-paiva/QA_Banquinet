# 📑 Protocolo de Testing MVP (gPOS)
#MVP #Protocol #Meeting

Este documento es el entregable principal (Minimum Viable Product) diseñado para presentar en las reuniones de gerencia y sincronización con el equipo de Desarrollo. Establece el estándar de cómo QA validará las entregas del nuevo ecosistema gPOS.

---

## 1. Alcance y Filosofía de Prueba (Framework Code_Weaver)
Nuestra metodología separa responsabilidades para localizar defectos rápidamente. El protocolo de prueba de cada versión candidata evalúa tres capas independientes:

1.  **Capa de Negocio Puro (DNLQ):** Valida que el gPOS respete las reglas inflexibles del juego (ej. multiplicadores correctos, topes de apuestas, horarios de corte).
2.  **Capa de Riesgo Financiero (Banca):** Valida que el gPOS comunique y ataje correctamente las restricciones dinámicas del backend (Rechazos Ciegos y Alternativas).
3.  **Capa de Interfaz de Usuario (UI/UX):** Valida que la terminal SUNMI P3H renderice correctamente los flujos (Carritos, Totales, Modal de Alternativas).

---

## 2. Flujo de Ejecución Core (Ejemplo MVP: Quiniela)

Para que una versión (Ej: v1.0.1+x) sea declarada **Estable**, debe superar el siguiente protocolo para el módulo principal:

### Etapa 1: Autorización "Happy Path" Ampliado
Se realizan pruebas que emulan las validaciones del antiguo POS (incluyendo bloqueos intencionales).
*   [ ] **Test de Rango (Positivo):** Ingreso `1 a la cabeza $50` (Tarde y Noche). -> *Aceptado.*
*   [ ] **Test de Rango (Negativo - Bloqueo UI):** Ingreso `1 a los 30` (Premio fuera de rango). -> *Rechazado por UI.*
*   [ ] **Test Jerarquías Redoblona (Negativo):** Ingreso `21 a los 7 con 12 a los 6` (Premio 2 < Premio 1). -> *Rechazado por UI.*
*   [ ] **Test Sorpresa (Lógica de Dado):** Uso de botón Sorpresa para Quiniela y Redoblona. -> *Auto-fill en modo Solo Lectura.*

### Etapa 2: Manejo de Riesgo (Banca TCP vs Bol-API)
Se evalúa la correcta dependencia e iteración del Carrito con el servidor (`bolserver`).
*   [ ] **Test Rechazo Puro:** Envío de jugada que exceda límite global sin alternativa mitigable. -> *Modal "Rechazado" sin opciones.*
*   [ ] **Test Alternativas Múltiples:** Disparo de 2 jugadas superpuestas que retornen alternativas. -> *Modal ofrece "Toma o Deja" secuencial por cada jugada.*
*   [ ] **Test Integridad de Carrito:** Aceptación secuencial de alternativas. -> *El carrito "Esta Venta" dibuja N renglones nuevos (uno por cada variante aceptada) coincidiendo visualmente con el total "A cobrar".*

### Etapa 3: Emisión (Bolserver Legacy)
*   [ ] **Test Separación de Sorteos (Ambos):** Aceptación en GUI de Quiniela "Ambos" (Vesp y Noc). -> *La emisora recaba de Bol-API la orden e imprime **dos tickets físicos diferentes**, uno por horario.*

---

## 3. Seguimiento de Defectos (Regresión Continua)
Previo a cualquier pase a producción, se debe barrer la **Matriz de Trazabilidad (MCT)** adjunta y comprobar que los defectos viejos no revivan. (Ver: `Matriz MCT`).
