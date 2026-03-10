# 📊 Status Check - QA Banquinet (v1.0.1+20)

Este documento resume el estado técnico actualizado según el nuevo **Protocolo de QA (10-Mar-2026)**.

## 📑 Metodología Actualizada
Hemos adoptado un sistema de autodocumentación estructurado para unificar el lenguaje entre Soporte y Desarrollo:
*   **Referencia:** [QA_Workflow.md](../methodology/QA_Workflow.md)
*   **Lenguaje:** Gherkin (Dado/Cuando/Entonces).
*   **Matriz:** Doble estado (Tipo de Automatización + Resultado de Test).

## 🪲 Bugs Activos v1.0.1+20 (Baseline v19)
*   **[BUG-CAR-003]** Carrito Hang: Botón "Emitir" habilitado tras vaciar vía menú contextual.
*   **[BUG-CIE-005]** Lista de Sorteos: Falta de auto-refresco al alcanzar la fecha de cierre.
*   **[REVISAR-QUI-001]** UI Hang: Bloqueo en carritos mixtos por latencia/logs.
*   **[BUG-5OR-003]** 5 de Oro: Botón "Emitir" prematuro ante errores de validación.

## 📈 Matriz de Seguimiento
La ejecución de la versión 20 se registra en: [matriz_1.0.1+20.csv](../bug_reports/matriz_1.0.1+20.csv)

---
*Reporte actualizado automáticamente. Última revisión: 10/03/2026.*
