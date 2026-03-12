# language: es
Característica: Alertas por importe máximo
  Como operador del POS
  Quiero recibir una alerta cuando una apuesta supere el importe máximo permitido
  Para evitar errores de ingreso y cumplir con las reglas de negocio

  Escenario: Alerta de importe máximo excedido
    Dado que el usuario ingresa un monto superior al límite configurado para un juego
    Cuando intenta agregar la jugada al carrito
    Entonces el sistema muestra una alerta de advertencia y no permite agregar la jugada hasta corregir el monto
