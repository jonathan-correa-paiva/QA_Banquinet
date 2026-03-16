# language: es
Característica: [BUG-LOT-001] Errores en Selección de Fracciones y Autorización de Entero
  Como operador del POS
  Quiero que la selección de fracciones de Lotería sea coherente con el stock real
  Para asegurar que la venta autorizada coincide con lo consultado

  Escenario: Fallo de autorización al seleccionar la modalidad "Entero"
    Dado que el operador se encuentra en el módulo de Lotería
    Y selecciona un número que tiene las 10 fracciones disponibles
    Cuando elige la opción "Entero" en el dropdown de fracciones
    Y presiona "Ingresar" para autorizar la venta
    Entonces el sistema debe autorizar la venta correctamente
    Y no debe mostrar un error de fallo de autorización (v1.0.1+20)

  Escenario: Dropdown muestra fracciones inexistentes tras venta parcial
    Dado que el número de Lotería tiene 10/10 fracciones disponibles
    Cuando se realiza una venta de 9 fracciones (9/10)
    Y el operador vuelve a consultar el mismo número para vender el resto
    Entonces el indicador de stock debe mostrar correctamente "Disponible: 1/10"
    Y el dropdown de fracciones NO debe mostrar la opción "Entero"
    Pero el dropdown solo debe permitir seleccionar la opción "1"
    Y NO deben aparecer las opciones de "2" a "9" ya que esas fracciones ya fueron vendidas
