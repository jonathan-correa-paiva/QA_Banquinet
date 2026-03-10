# 🛠️ Metodología de Autodocumentación de QA

Este documento define el estándar acordado (Reunión 10-Mar-2026) para la gestión de pruebas y documentación en Banquinet.

## 1. Estructura de Datos (Matriz de QA)
La matriz reside en `docs/bug_reports/matriz_vX.Y.Z+W.csv` y utiliza la siguiente estructura de columnas:

*   **Tipo Autom.:** 
    *   `Automático`: Cubierto por scripts (Appium/Maestro).
    *   `Manual`: Requiere testeo humano.
    *   `Evaluar`: Pendiente de análisis para automatización.
*   **Estado Test:**
    *   `OK (v20)`: Verificado con éxito en la versión actual.
    *   `Pasado (Anterior)`: Test exitoso en versiones previas que se arrastra.
    *   `Automático Verificado`: Test automático que ha sido validado manualmente (Estado "Verde" real).
    *   `Falla`: Error reproducido y documentado.
    *   `Pendiente`: No testeado en esta versión.
    *   `Bloqueado`: Imposible de testear (por data, bug bloqueante o falta de definición).

> [!IMPORTANT]
> Los tests automatizados deben ser **verificados manualmente** ocasionalmente. Un test "Verde" en CI no suple la validación de UX sin una marca de verificación.

## 2. Documentación de Bugs (Protocolo de Evidencia)
Todo reporte de falla debe ser incontestable.

*   **Evidencia Requerida:** Logs de terminal (Dio/Flutter), IDs de transacciones, capturas de pantalla o video. Sin evidencia no hay reporte.
*   **Lenguaje Gherkin:** Se utiliza estrictamente para describir la reproducción:
    *   **Dado** (Precondiciones)
    *   **Cuando** (Acción del usuario)
    *   **Entonces** (Resultado esperado vs Real)
*   **Hipótesis vs Hechos:** Las sospechas (ej. "podría ser la saturación de la cola Dio") se separan de los hechos probados. Usar lenguaje condicional ("podría ser") para sugerencias a desarrollo.

## 3. Terminología Unificada
Para evitar confusiones entre Soporte, QA y Desarrollo:
*   **Lista de Sorteos:** Uso correcto para referirse a lo que el operador ve en el POS. Evitar el término "Cierre" para la interfaz.
*   **Application Hang:** Uso correcto para bloqueos de UI (pantalla trancada).
*   **Baseline:** La versión `v1.0.1+19` se establece como la línea base para todas las comparativas de regresión.

## 4. Ciclo de Versión
1.  **Re-testing:** Prioridad 1 sobre los bugs reportados en la versión anterior.
2.  **Pasada General:** Ejecución de casos de uso pendientes o críticos.
3.  **Snapshot:** Generación de un CSV estático antes de reuniones de sincronización.
