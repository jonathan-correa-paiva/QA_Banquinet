# language: es
Característica: Validación 5 de Oro
  Como operador del POS
  Quiero que el botón de acción refleje el estado real de mi jugada
  Para evitar confusión y emisiones erróneas

  Escenario: Botón de acción queda en "Emitir" durante error de validación
    Dado una jugada válida en el carrito y una nueva incompleta de 5 de Oro
    Cuando el usuario completa la jugada inválida
    Entonces el botón de acción sigue erróneamente en "Emitir" en lugar de "Ingresar"

  Escenario: [BUG-311] Jugada de 5 de Oro desaparece al intentar emitir
    Dado una jugada de 5 de Oro agregada al carrito
    Cuando el usuario presiona "Emitir"
    Entonces si ocurre un error de comunicación, la jugada no debe desaparecer del carrito y debe permitir el reintento
