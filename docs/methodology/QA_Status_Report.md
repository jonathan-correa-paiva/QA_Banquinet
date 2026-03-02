# 📊 Status Check - QA Banquinet

Este documento resume el estado técnico actual del repositorio, detallando los Casos de Uso (CU) y Bugs (Defectos) actualmente mapeados en nuestra base de conocimientos. Sirve como punto de sincronización para la siguiente sesión de desarrollo.

## 📋 Casos de Uso (CU) Definidos
Actualmente, los siguientes Casos de Uso de la Quiniela Oficial están formalmente documentados (`quiniela_logica_oficial.md`):

*   **CU-QUI-001:** Apuesta a 3 cifras. (Multiplicador 500x, rango de premio 1-20)
*   **CU-QUI-002:** Apuesta a 2 cifras. (Multiplicador 70x, rango de premio 1-20)
*   **CU-QUI-003:** Apuesta a 1 cifra. (Multiplicador 7x, rango de premio 1-20, incluye multiplicador por repetición)
*   **CU-QUI-004:** Apuesta válida de Redoblona. (Jerarquía de premios estricta)
*   **CU-QUI-005:** Horarios de Recepción. (Corte Vespertino 14:00:01 y Nocturno 20:00:01)
*   **EC-QUI-001:** Redoblona con Premio Inválido (Edge Case de validación de negocio)


## 🪲 Bugs Mapeados (Regresión v1.0.1+12)
Los siguientes defectos están formalizados con formato estándar (`regression_v1.0.1+12.md`):

*   **[BUG-CAR-001]** Carrito: Visualización de alternativas múltiples. (Falla el desglose individual de apuestas).
*   **[BUG-TOM-001]** Tómbola: Pérdida del último dígito. (Ignora el último número ingresado sin Enter).
*   **[BUG-CFG-001]** Preferencias: Bloqueo "Pantalla Gris". (Crash de interfaz al operar "Alerta por importe").
*   **[BUG-LOT-192]** Lotería: QR ilegible por escala. (Problemas de decodificación física).
*   **[BUG-CIE-005]** Cierres: Fallo en actualización automática de sorteos. (Requiere actualización manual del operador).


---
*Reporte generado automáticamente bajo framework Code_Weaver.*
