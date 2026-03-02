# GPos - Feature Map v1.0
**Fecha:** 25 feb 2026

## OBJETIVO
Crear un mapa de funcionalidades actualizado que sirva como fuente de verdad para QA y capacitación.

## Antecedentes
Tras la culminación de la primera fase de desarrollo de la app GPos, surge la necesidad de consolidar la documentación técnica necesaria para las etapas de aseguramiento de calidad (QA), elaboración de manuales y capacitación del personal.

Debido a que el proceso evolutivo del código incluyó implementaciones y ajustes directos que no se encuentran reflejados en los diseños originales de Figma, se requiere la elaboración de un Mapa de Funcionalidades (Feature Map) y un Diagrama de Flujo de Navegación (User Flow Diagram) actualizados. Estos activos se constituirán como la "fuente de la verdad" del sistema, permitiendo al equipo de Soporte Operativo diseñar casos de prueba exhaustivos y materiales de formación precisos, garantizando la cobertura total de todas las ramas y flujos operativos de la aplicación.

---

## 🗺️ Mapa de Funcionalidades (Feature Map)
La aplicación GPOS se organiza en cuatro pilares fundamentales accesibles desde la barra de navegación principal:

### 1. Venta de Productos (Inicio)

#### Juegos
- **Quiniela:** Apuestas directas (1, 2 y 3 cifras) y Redoblona. Soporta generación aleatoria ("Sorpresa") para cada modalidad.
- **Tómbola:** Selección de entre 3 y 7 números. Soporta jugadas aleatorias para 7 números y la reutilización de los números ingresados en una jugada previa de 5 de oro.
- **5 de Oro:** Jugadas estándar y Revancha. Permite duplicar números desde Tómbola. Soporta la generación aleatoria para cada modalidad seleccionada.
- **Supermatch:** Selección de ticket, pago, emisión. Soporta escanear el qr de la pre-armada tanto en la pantalla de Supermatch o en la de escanear códigos.
- **Lotería:** Búsqueda por terminación, número exacto o reserva de billetes enteros/fracciones. Soporta la búsqueda aleatoria por terminación.

#### Servicios digitales
- **Pines Web:** Venta de pines mediante ingreso de C.I. e importe.
- **Recargas Telefónicas:** Carga de saldo para Antel, Movistar y Claro. Incluye búsqueda de última recarga por número de teléfono indicando su estado de procesamiento.

#### Utilidades de Venta
- **Carrito de Ventas:** Gestión multienlace de apuestas y pagos de aciertos antes de la emisión. Así como la “cuenta” del cliente actual (acumulado).
- **Historial:** Consulta de últimas ventas con filtros por fecha, producto y estado de los cupones.
- **Escáner:** Lectura de tickets físicos (QR y códigos de barras) para Pre-Armada de Supermatch, consulta de aciertos, repetición de jugadas, duplicado de WiFi. Accedida a través del ítem “Leer código” de la pantalla principal.

---

### 2. Resultados y Sorteos
- **Consulta de Resultados:** Visualización de pizarras por el sorteo seleccionado para Quiniela, Tómbola, 5 de Oro y Lotería.
- **Impresión de Pizarras:** Función para imprimir los resultados del sorteo seleccionado en la terminal.

---

### 3. Gestión del Negocio (Mi Negocio)
- **Resumen de Ventas:** Reporte diario detallado por producto, incluyendo totales de apuestas, comisiones y neto. Cupones anulados, recargas telefónicas y apuestas.
- **Anulaciones:** Listado de tickets anulados clasificados por estado (Pendientes, Entregados, Cobrados).
- **Aciertos Pagos:** Gestión de premios ya procesados clasificados por estado (Pendientes y Entregados).
- **Cuenta Corriente:** Movimientos, saldo y estado financiero del subagente.
- **Aciertos recientes:** Listado histórico de cupones del subagente que han tenido jugadas con acierto, con la posibilidad de visualizar cada uno de ellos en detalle.

---

### 4. Configuración y Soporte
- **Datos de Usuario:** Información del vendedor, agencia y banca.
- **Preferencias:** Control de sonidos, PIN de seguridad y alertas por importes máximos por producto.
- **Sobre el Dispositivo:** Información relevante del equipo, como número de serie, modelo, versión del SO, etc.
- **Verificación Operativa:** Test de hardware (impresora, escáner) y conexión con servidores (BSecurity, BOL, SPA, SGA).
- **Sorteos actuales:** Listado de sorteos que tiene cargados el equipo, y una funcionalidad para actualizarlos de ser necesario.
- **Conexión:** Información de la conexión a la red, listado de WiFis disponibles con la posibilidad de conectarse a la deseada.
- **Ayuda:** Redirección al centro de ayuda en Slite renderizado dentro de la propia aplicación.
