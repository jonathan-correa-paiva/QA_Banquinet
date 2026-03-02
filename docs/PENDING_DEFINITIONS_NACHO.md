# 🚨 Reporte de Vacíos de Conocimiento (Para Nacho / Dev Team)

Este reporte identifica las reglas de negocio, casos borde ("Edge Cases") y definiciones que **faltan** en la base de conocimientos actual. 
El objetivo de documentar esto es darle **seguridad** a los desarrolladores, eliminar suposiciones (reducir "alucinaciones" de la IA y del equipo humano) y tener un piso factual ("single source of truth").

## 1. Vacíos en la Lógica de Negocio a Definir

### 🛑 Gestión de Errores y Validaciones (Faltante Core)
Actualmente los Casos de Uso asumen el "Happy Path" (Camino Feliz). Necesitamos definir de forma explícita:
- **Límites de Apuesta:** ¿Cuál es el monto máximo en Quiniela antes de rechazo por Tope? ¿Qué mensaje de error exacto devuelve BOL-API?
- **Desconexión (Offline):** ¿Qué hace el gPOS si se cae la red justo al presionar "Apostar" / "Ingresar"? ¿Hay reintentos automáticos? ¿Se guarda como pendiente?

### 🎲 Vacíos por Juego y Flujo
- **Anulaciones (Ej. `CU-CAN-001`):** Dice "ticket anulado correctamente", pero falta definir: ¿Cuánto tiempo tiene el subagente para anular un ticket? ¿Varía por juego (Quiniela vs 5 de Oro)? ¿Qué pasa si el sorteo ya cerró?
- **Alternativas (Ej. `CU-ALT-001`):** Dice "Muestra motivo de rechazo", pero falta documentar: ¿Cuáles son los motivos exactos que manda Scala? Faltan definir las reglas de rechazo por riesgo de la Banca cuando el número está "topado".
- **Tómbola:** Faltan definir límites de apuesta máxima por jugada (cantidad de números jugados en una boleta múltiple).
- **5 de Oro:** Faltan las reglas de validación en UI para evitar números duplicados en apuestas "Sorpresa" (¿quién lo valida, el frontend Flutter o el backend Scala?).

## 2. Acciones Inmediatas (Documentación Viva)

Hemos auditado programáticamente los 81 Casos de Uso del repositorio. **Resultado:** 78 de 81 casos (96%) están "huérfanos" (no vinculados a los conceptos de negocio). Esto es el principal causante de que tanto los desarrolladores como la IA asuman comportamientos ("alucinen") en lugar de seguir la regla estricta.

**Plan Anti-Alucinaciones:**
1. **Auditoría de Enlaces:** Ya comenzamos a vincular casos clave (ej. `CU-QUI-001` y `CU-TOM-001` apuntando a `[[concepts/...]]`). La meta es llegar a 0% de casos huérfanos.
2. **Definir Responsabilidad:** Aclarar si la validación ocurre en Frontend (Flutter/Dart) o Backend (Bol-API), para que los Devs no hagan doble trabajo ni dejen huecos de seguridad.
3. **Mapear Errores:** Documentar el diccionario de códigos de error exactos de la API para cada módulo (Quiniela, Tómbola, 5 de Oro, Pagos, Mi Negocio).

---
[[00_KNOWLEDGE_BASE_MOC|Volver al MOC]] | [[DEV_LOG|Ver log de decisiones]]
