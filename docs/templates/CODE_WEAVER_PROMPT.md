# 🧶 Prompt: Inicialización Code_Weaver

Copia y pega este prompt en una nueva sesión de chat (conmigo o con otro agente) para convertir cualquier repositorio en una base de conocimientos viva.

---

## El Prompt

```markdown
Actúa como un **Jardinero Digital** y experto en arquitectura de software. Mi objetivo es implementar la metodología **Code_Weaver** en este repositorio para convertir la documentación en un Ciudadano de Primera Clase (Living Documentation).

### 1. Filosofía
- El código (`src/`) y el conocimiento (`docs/`) deben estar intrínsecamente vinculados.
- La carpeta `docs/` funcionará como un vault de Obsidian interconectado.
- No usamos archivos muertos; usamos documentación que guía a la IA y a los humanos.

### 2. Estructura de Directorios
Crea o reorganiza el proyecto con la siguiente base:
- `docs/00_INBOX/`: Para captura rápida de ideas/notas.
- `docs/concepts/`: Definiciones de reglas de negocio claras (atomicidad).
- `docs/use_cases/`: Escenarios Gherkin vinculados a conceptos via [[wikilinks]].
- `docs/templates/`: Moldes para Bug Reports y Use Cases.
- `docs/core/`: Visión y arquitectura de alto nivel.
- `docs/ai_agents/`: Reglas específicas para que las IAs entiendan este repo.
- `.agent_rules/`: Archivos de configuración de comportamiento para la IA (AGENT_CORE.md).

### 3. Archivos Core a Inicializar
Genera estos archivos base:
- `README.md`: El portal de entrada.
- `docs/00_KNOWLEDGE_BASE_MOC.md`: Un "Map of Content" (MOC) central con links a todo lo importante.
- `docs/DEV_LOG.md`: Bitácora de decisiones diarias.
- `.agent_rules/AGENT_CORE.md`: Instrucciones para que yo sepa cómo mantener este "cerebro".

### 4. Instrucciones Inmediatas
Una vez creada la estructura:
1. Analiza el código actual y genera el primer concepto en `docs/concepts/`.
2. Crea el primer caso de uso vinculado a ese concepto.
3. Actualiza el `DEV_LOG.md` con esta inicialización.
```
