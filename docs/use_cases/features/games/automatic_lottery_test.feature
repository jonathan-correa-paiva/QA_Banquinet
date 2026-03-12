# language: es
Característica: Test Lotería Automático
  Como desarrollador/QA
  Quiero ejecutar pruebas automáticas sobre el flujo de Lotería
  Para asegurar la estabilidad del módulo en cada versión

  Escenario: Ejecución de flujo de venta automática de Lotería
    Dado el POS en estado inicial
    Cuando se ejecuta el script de prueba de Lotería automática
    Entonces el sistema debe completar la búsqueda de un número, agregarlo al carrito y simular la emisión sin errores de UI ni de comunicación
