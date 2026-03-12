# 🛠️ Metodología de Autodocumentación de QA

Este documento define el estándar acordado (Reunión 10-Mar-2026) para la gestión de pruebas y documentación en Banquinet.

## 1. Estructura de Datos (Matriz de QA)
La matriz reside en `docs/bug_reports/matriz_vX.Y.Z+W.csv` y utiliza la siguiente estructura de columnas:

*   **Tipo Autom.:** 
    *   `Automático`: Cubierto por scripts (Appium/Maestro).
    *   `Manual`: Requiere testeo humano.
    *   `Evaluar`: Pendiente de análisis para automatización.
*- [x] Gherkin & BDD Standardization
    - [x] Incorporate Gherkin Guide into `methodology/QA_Workflow.md`
    - [x] Migrate `bug_scenarios.md` to Spanish (Simplified)
    - [x] Migrate bug scenarios to Spanish `.feature` files
    - [ ] Plan creation of `.feature` files for key modules
*   **Estado Test:**
    *   `OK (v20)`: Verificado con éxito en la versión actual.
    *   `Pasado (Anterior)`: Test exitoso en versiones previas que se arrastra.
    *   `Automático Verificado`: Test automático que ha sido validado manualmente (Estado "Verde" real).
    *   `Falla`: Error reproducido y documentado.
    *   `Pendiente`: No testeado en esta versión.
    *   `Bloqueado`: Imposible de testear (por data, bug bloqueante o falta de definición).

> [!IMPORTANT]
> Los tests automatizados deben ser **verificados manualmente** ocasionalmente. Un test "Verde" en CI no suple la validación de UX sin una marca de verificación.

## 2. Estándar Gherkin (.feature)
Siguiendo la preferencia del equipo, utilizamos el **español** para todas las historias y criterios de aceptación para facilitar la lectura inmediata.

### Estructura base (# language: es):
*   **Característica (Feature):** Descripción de alto nivel.
*   **Antecedentes (Background):** Precondiciones comunes.
*   **Escenario (Scenario):** Casos de prueba específicos.
*   **Pasos (Dado, Cuando, Entonces, Y):** Pasos lógicos.

### Reglas de Oro (v20):
1.  **Enfoque en el Comportamiento (BDD):** No describir clics técnicos, sino intenciones de usuario.
2.  **Un Escenario, una Intención:** Evitar escenarios sobrecargados de validaciones.
3.  **Independencia:** Cada escenario debe ser autoejecutable.
4.  **"Less is More" (Regla de Pablo):** Minimizar el uso de `And`. Tratar de condensar precondiciones y acciones para que el escenario sea legible de un vistazo. Evitar el uso de `But` si el `Then` puede ser suficientemente descriptivo.

## 3. Documentación de Bugs (Protocolo de Evidencia)
Todo reporte de falla debe ser incontestable.

*   **Evidencia Requerida:** Logs de terminal (Dio/Flutter), IDs de transacciones, capturas de pantalla o video. Sin evidencia no hay reporte.
*   **Lenguaje Gherkin:** Se utiliza estrictamente para describir la reproducción:
    *   **Dado** (Precondiciones)
    *   **Cuando** (Acción del usuario)
    *   **Entonces** (Resultado esperado vs Real)
*   **Hipótesis vs Hechos:** Las sospechas (ej. "podría ser la saturación de la cola Dio") se separan de los hechos probados. Usar lenguaje condicional ("podría ser") para sugerencias a desarrollo.

## 4. Estructura de Reportes Individuales (Evidencia)
Para garantizar la trazabilidad y organización de los datos factuales, cada bug debe residir en su propia subcarpeta dentro de `docs/bug_reports/individual/`:

*   **Carpeta del Bug:** `[ID-BUG]-[Breve-Descripcion]/` (ej. `BUG-CAR-310-Falla-Eliminar-Ultima/`)
    *   `reporte.md`: El archivo con el escenario Gherkin y detalles técnicos.
    *   `logs/`: Capturas de consola, logs de Dio, trazas de Flutter.
    *   `evidencia/`: Capturas de pantalla (PNG/JPG) y grabaciones de tela (MP4).

## 5. Terminología Unificada
Para evitar confusiones entre Soporte, QA y Desarrollo:
*   **Lista de Sorteos:** Uso correcto para referirse a lo que el operador ve en el POS. Evitar el término "Cierre" para la interfaz.
*   **Application Hang:** Uso correcto para bloqueos de UI (pantalla trancada).
*   **Baseline:** La versión `v1.0.1+19` se establece como la línea base para todas las comparativas de regresión.

## 6. Ciclo de Versión
1.  **Re-testing:** Prioridad 1 sobre los bugs reportados en la versión anterior.
2.  **Pasada General:** Ejecución de casos de uso pendientes o críticos.
3.  **Snapshot:** Generación de un CSV estático antes de reuniones de sincronización.
