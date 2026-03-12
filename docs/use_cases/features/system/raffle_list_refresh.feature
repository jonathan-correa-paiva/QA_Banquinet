# language: es
Característica: Refresco de Lista de Sorteos
  Como operador del POS
  Quiero que la lista de sorteos se mantenga actualizada automáticamente
  Para asegurar que solo vendo sorteos vigentes

  Escenario: La lista de sorteos no se refresca tras el horario de cierre
    Dado el POS mostrando la lista de sorteos
    Cuando pasa la hora de cierre de un sorteo
    Entonces la lista no se actualiza automáticamente y muestra sorteos vencidos
