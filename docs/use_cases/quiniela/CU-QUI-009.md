# CU-QUI-009: Ingresar jugada de Quiniela Redoblona manualmente

## Descripción y Escenario

**ID:** CU-QUI-009
**Título:** Ingresar una jugada de Quiniela Redoblona de forma manual correctamente.
**Tags:** #automatizado #quiniela #redoblona

### Escenario (Gherkin)

**DADO** que un subagente se encuentra en la pantalla de Quiniela
**Y** selecciona la modalidad "Redoblona"
**Y** selecciona los sorteos "Vespertino" y "Nocturno"
**CUANDO** ingresa el primer número "12" al premio "1"
**Y** el segundo número "45" al premio "20"
**Y** define un importe de "$50"
**Y** presiona el botón "Ingresar"
**ENTONCES** el sistema debe validar los límites de riesgo
**Y** permitir el ingreso al carrito con un monto de "$100" (50 por sorteo).

---

## Precondiciones

- El subagente debe tener sesión activa.
- El sistema debe tener conexión con el servidor de la Banca.
- Los sorteos seleccionados deben estar abiertos para apuestas.

## Poscondiciones

- La jugada se visualiza correctamente en el carrito.
- El saldo disponible del subagente se mantiene intacto (no se debita hasta confirmar la compra).
- Los campos de entrada de número e importe se limpian.

## Reglas de Negocio

- **Límites de Premios:** El primer número debe ir al premio 1.
  El segundo número puede ir del premio 1 al 20.
- **Validación de Dígitos:** Números de exactamente 2 cifras (00-99).
- **Importe Mínimo:** Mayor o igual al mínimo de Redoblona (ej: $10).
- **Exclusión:** No se permite el mismo número en ambas posiciones.

## Casos Alternativos y Excepciones

- **Error de Conexión:** Si se pierde la conexión al validar el riesgo,
  el sistema debe informar "Reintentando..." o "Error de comunicación".
- **Límite de Riesgo Excedido:** Si el número tiene mucho volumen de apuestas,
  el sistema debe devolver un mensaje de "Cupo excedido".

## Criterios de Aceptación (QA)

1. Verificar que no se permita ingresar números de 1 o 3 cifras.
2. Validar que el botón "Ingresar" solo se habilite cuando todos los campos obligatorios estén completos.
3. Confirmar que el monto total en el carrito refleje la suma de ambos sorteos.

## Concept Linkers (Knowledge Base)

- [[quiniela_logica_oficial]]: Reglas generales del juego.
- [[logica_riesgo_banca]]: Límites de premios y topes de apuesta por número.
- [[carrito]]: Comportamiento del contenedor de jugadas.
