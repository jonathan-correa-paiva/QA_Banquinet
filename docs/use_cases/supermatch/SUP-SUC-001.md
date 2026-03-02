# SUP-SUC-001: Ingresar una prearmada existente y agregarla al carrito

## Descripción y Escenario

**ID:** SUP-SUC-001
**Título:** Ingresar una apuesta prearmada de Supermatch mediante código y agregarla al carrito.
**Tags:** #automatizado #supermatch #prearmada

### Escenario (Gherkin)

**DADO** que un subagente se encuentra en la pantalla de "Supermatch"
**Y** tiene el código de una apuesta prearmada válida (ej: "A1B2C3")
**CUANDO** ingresa el código en el campo de búsqueda y presiona "Consultar"
**ENTONCES** el sistema debe recuperar las líneas y opciones de apuesta asociadas
**Y** mostrar el detalle de la jugada con el monto apostado y el premio potencial
**CUANDO** el subagente presiona "Agregar al Carrito"
**ENTONCES** la jugada se almacena correctamente en el contenedor global de ventas.

---

## Precondiciones

- El código de la prearmada debe pertenecer a eventos que aún no han comenzado o que permiten apuestas en vivo.
- El sistema debe estar sincronizado con el motor de apuestas de Supermatch.

## Poscondiciones

- La apuesta prearmada se visualiza en el carrito con el ícono de Supermatch.
- El monto total del carrito se incrementa según el valor de la prearmada.

## Reglas de Negocio

- **Vigencia del Código:** Los códigos de prearmadas tienen una validez temporal limitada. Si el código expiró, se debe mostrar error.
- **Cambio de Cuotas:** Si entre el momento de armado y el ingreso al carrito las cuotas variaron, el sistema debe notificar al subagente.
- **Eventos Cancelados:** No se permite agregar prearmadas que contengan eventos ya finalizados o cancelados.

## Casos Alternativos y Excepciones

- **Código No Encontrado:** Mostrar mensaje "Código inválido o inexistente".
- **Falla de Comunicación:** Si el servicio de consulta de prearmadas no responde, mostrar "Servicio temporalmente no disponible".

## Criterios de Aceptación (QA)

1. Verificar que se listen correctamente todos los eventos incluidos en la prearmada.
2. Confirmar que el premio potencial se calcule correctamente en base a las cuotas vigentes.
3. Validar que no se pueda agregar al carrito si algún evento dentro de la prearmada ya no está disponible.

## Concept Linkers (Knowledge Base)

- [[servicios_infraestructura]]: Integración con el motor de apuestas de Supermatch.
- [[carrito]]: Manejo de apuestas deportivas.
