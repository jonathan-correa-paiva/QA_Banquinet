# PWC-OK1-002: Venta de Pin Web correctamente

## Descripción y Escenario

**ID:** PWC-OK1-002
**Título:** Realizar la venta de un Pin Web (Service Digital) correctamente.
**Tags:** #automatizado #pines #digitales

### Escenario (Gherkin)

**DADO** que un subagente se encuentra en el módulo de "Servicios Digitales"
**Y** selecciona un proveedor específico (ej: "Spotify" o "Netflix")
**CUANDO** selecciona el monto del producto a vender
**Y** el subagente ingresa el número de teléfono del cliente (si aplica)
**Y** presiona el botón "Vender / Ingresar"
**ENTONCES** el sistema debe validar la disponibilidad del stock con el proveedor
**Y** permitir el ingreso de la transacción al carrito de ventas.

---

## Precondiciones

- El subagente debe tener saldo suficiente en su cuenta de servicios.
- El proveedor seleccionado debe estar con estatus "Online".

## Poscondiciones

- El producto se agrega al carrito indicando el proveedor y el monto.
- Se genera una reserva temporal del pin para evitar doble venta.

## Reglas de Negocio

- **Validación de Teléfono:** Si el pin requiere envío por SMS, el número debe ser un formato válido de Uruguay (9 dígitos, comenzando con 09).
- **Límites de Monto:** Cada proveedor tiene montos fijos predefinidos; el sistema no debe permitir ingresar montos arbitrarios.
- **Anulaciones:** Los Pines Web generalmente NO permiten anulación una vez que el ticket es emitido. Esta advertencia debe estar visible.

## Casos Alternativos y Excepciones

- **Proveedor Offline:** Mostrar mensaje "Proveedor no disponible en este momento".
- **Sin Stock:** Informar que el monto solicitado no tiene stock disponible.

## Criterios de Aceptación (QA)

1. Verificar que el selector de montos muestre solo los valores permitidos por el proveedor.
2. Validar que el campo de teléfono solo acepte caracteres numéricos.
3. Confirmar que en el carrito se detalle claramente el servicio digital adquirido.

## Concept Linkers (Knowledge Base)

- [[servicios_infraestructura]]: Conexión con proveedores de pines (HUB).
- [[carrito]]: Gestión de ítems no-lotería.
