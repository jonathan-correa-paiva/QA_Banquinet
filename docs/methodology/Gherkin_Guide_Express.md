# 🥒 Guía Rápida de Gherkin (Sin Estrés)

¡No te preocupes! Gherkin es solo una forma de contar una historia para que todos (QA, Devs y el cliente) entiendan lo mismo. Solo piensa en **Precondición**, **Acción** y **Resultado**.

## 💡 La Fórmula Mágica

*   **Dado** (Precondición): ¿Dónde estoy? (ej. "En la pantalla de carrito").
*   **Cuando** (Acción): ¿Qué hago? (ej. "Toco el botón eliminar").
*   **Entonces** (Resultado): ¿Qué pasó? (ej. "El producto desaparece").

---

## 🚀 Ejemplos de los Bugs Actuales

### [BUG-310] Error al vaciar el carrito
**Escenario:** El sistema falla al eliminar el último elemento
*   **Dado** que tengo una sola jugada en el carrito.
*   **Cuando** presiono el botón "Eliminar" en esa jugada.
*   **Entonces** el carrito debería quedar vacío y mostrar el mensaje "No hay jugadas".
*   **Pero** la aplicación se cierra inesperadamente (Crash).

### [BUG-311] Desaparición de jugada 5 de Oro
**Escenario:** La jugada desaparece tras un error de emisión
*   **Dado** que tengo una jugada de "5 de Oro" en el carrito.
*   **Cuando** intento emitir el ticket y ocurre un error de red.
*   **Entonces** la jugada debería permanecer en el carrito para reintentar.
*   **Pero** el carrito aparece vacío tras el error.

### [BUG-CIE-005] Falla de refresco automático
**Escenario:** La terminal no actualiza sorteos tras el cierre
*   **Dado** que la terminal está encendida tras el cierre de las 20:00hs.
*   **Cuando** pasa el tiempo de refresco automático (offset serie).
*   **Entonces** la lista de sorteos debería cambiar automáticamente al día siguiente.
*   **Pero** la terminal mantiene la lista vieja (sorteos vencidos).

---

## 🎯 Tips "Less is More" (Regla de Pablo)
1.  **No seas técnico:** Evita "Hago clic en el widget `DeleteIconButton`". Mejor usa "Elimino la jugada".
2.  **Usa un lenguaje natural:** Escríbelo como si se lo estuvieras contando a alguien por teléfono.
3.  **El "Pero":** Es genial para destacar lo que está fallando frente a lo que debería pasar.
