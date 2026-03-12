# language: es
Característica: Gestión del Carrito
  Como operador del POS
  Quiero que el carrito se comporte de forma predecible al vaciarlo
  Para evitar bloqueos de la aplicación

  Escenario: Eliminar último ítem por menú contextual tranca la app
    Dado un carrito con un solo ítem
    Cuando el ítem se elimina desde el menú contextual
    Entonces el botón "Emitir" no se deshabilita y tranca la app al presionarlo

  Escenario: [BUG-310] App falla al eliminar última jugada del carrito
    Dado un carrito con varias jugadas
    Cuando el usuario elimina la última jugada remanente
    Entonces la aplicación debe limpiar el estado del carrito correctamente sin quedar en un estado inconsistente o colgarse
