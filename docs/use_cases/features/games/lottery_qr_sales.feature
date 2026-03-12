# language: es
Característica: Impresión de QR en ventas de Lotería
  Como operador del sistema
  Quiero que los tickets de Lotería incluyan un código QR legible
  Para que los clientes puedan acceder a la información del ticket desde dispositivos externos

  Escenario: Verificación de legibilidad de QR con dispositivos externos
    Dado un ticket de Lotería emitido por el POS v1.0.1+20
    Cuando un cliente escanea el código QR utilizando un dispositivo móvil
    Entonces el dispositivo debe reconocer el código y redirigir a la URL o mostrar la información correspondiente de forma correcta
