# language: es
Característica: Imprimir acierto antes de pagar
  Como operador del POS
  Quiero imprimir los detalles de un acierto antes de efectuar el pago
  Para validar con el cliente la información del premio

  Escenario: Escenario 1 - Acierto PENDIENTE de pago (Notificación)
    Dado un ticket con acierto validado en estado "Pendiente de Pago"
    Cuando el operador selecciona el botón de "Imprimir" en la pantalla de detalles
    Entonces el POS debe imprimir un ticket de "¡FELICITACIONES!" con el detalle del premio
    Y el ticket NO debe ser marcado como pagado aún en el sistema

  Escenario: Escenario 2 - Acierto YA PAGADO (Comprobante informativo)
    Dado un ticket con acierto validado que ya posee estado "Pagado"
    Cuando el operador consulta el ticket
    Entonces el sistema debe permitir imprimir un comprobante informativo de advertencia
    Y el impreso debe indicar el importe, la fecha/hora y el subagente que realizó el pago original
