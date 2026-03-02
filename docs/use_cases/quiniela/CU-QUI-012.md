# CU-QUI-012: Ingresar jugada de Quiniela de 3 cifras con premio al límite (20)

## Descripción y Escenario

**ID:** CU-QUI-012
**Título:** Ingresar una jugada de Quiniela de 3 cifras con premio al límite permitido (20).
**Tags:** #automatizado #quiniela #3cifras #limite

### Escenario (Gherkin)

**DADO** que un subagente se encuentra en la pantalla de Quiniela modalidad "3 Cifras"
**CUANDO** ingresa el número "123"
**Y** selecciona el premio "20" (límite máximo)
**Y** selecciona el sorteo "Nocturno" con una apuesta de "$40"
**Y** presiona el botón "Ingresar"
**ENTONCES** el sistema debe aceptar la jugada como válida y permitir su ingreso al carrito de compras.

---

## Precondiciones

- El subagente tiene sesión válida.
- La modalidad de Quiniela 3 cifras está activa.

## Poscondiciones

- La jugada se visualiza correctamente en el carrito de compras.
- El sistema no arroja errores de validación por el rango del premio.

## Reglas de Negocio

- **Rango de Premios:** En Quiniela, los premios permitidos van del 1 al 20.
- **Importe:** El importe se multiplica por la cantidad de premios solicitada si la lógica de la Banca así lo requiere para el cálculo de pago (aunque en la entrada sea el monto neto por sorteo).
- **Validación de UI:** El selector de premios no debe permitir valores fuera del rango 1-20.

## Casos Alternativos y Excepciones

- **Premio Fuera de Rango:** Si el subagente intenta ingresar manualmente un premio 21 (vía API o manipulación de UI), el sistema de backend debe rechazar la jugada.

## Criterios de Aceptación (QA)

1. Verificar que el selector de premios incluya el valor 20.
2. Confirmar que la jugada en el carrito detalle "Premio al: 20".
3. Validar que el monto total sea el esperado según la configuración del sorteo.

## Concept Linkers (Knowledge Base)

- [[quiniela_logica_oficial]]: Detalle de premios y rangos.
- [[logica_riesgo_banca]]: Topes de premios permitidos.
