# language: es
Característica: Mostrar resultado de acierto
  Como operador del POS
  Quiero ver el desglose detallado de los aciertos de un ticket
  Para informar correctamente al cliente sobre sus jugadas ganadoras

  Escenario: Visualización detallada de aciertos desde el menú contextual
    Dado un ticket con múltiples aciertos validado en pantalla
    Cuando el operador presiona el botón "+"
    Y selecciona la opción "Mostrar aciertos"
    Entonces el sistema debe desplegar una lista detallada con cada jugada ganadora y su importe correspondiente
