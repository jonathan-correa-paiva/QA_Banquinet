# language: es

Característica: Refresco automático de sorteos (BUG-CIE-005)

  Escenario: La terminal no actualiza los sorteos automáticamente tras el cierre
    Dado que la terminal está encendida con la versión RC v1.0.1+20
    Y el sistema ha procesado el cierre de las 20:00:00hs
    Cuando llega la hora programada de refresco (20:02:00hs para la serie 7004)
    Entonces la lista de sorteos debería actualizarse automáticamente con los juegos del día siguiente
    Pero la terminal sigue mostrando los sorteos vencidos de la noche anterior
    Y al intentar realizar una apuesta
    Entonces el servidor rechaza la transacción por sorteo vencido
