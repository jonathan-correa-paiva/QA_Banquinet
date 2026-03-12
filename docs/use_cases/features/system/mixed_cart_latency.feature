# language: es
Característica: Manejo de Latencia en Carrito Mixto
  Como operador del POS
  Quiero que la UI responda incluso ante demoras extremas del servidor
  Para mantener el control sobre el estado de la aplicación

  Escenario: Congelamiento de UI por timeout de autorización
    Dado un carrito mixto (QUI+TOM) con alta latencia de servidor
    Cuando la demora del servidor supera los 100 segundos
    Entonces la UI se congela en lugar de mostrar un timeout o estado de carga
