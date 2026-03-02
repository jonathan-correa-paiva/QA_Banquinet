# CU-QUI-001: Quiniela - Apuesta a 3 Cifras
**Módulo:** Quiniela 

## 📝 Descripción
**Valor de Negocio:** Garantizar que los apostadores puedan registrar sus jugadas clásicas de 3 cifras para múltiples sorteos simultáneos de forma ágil, calculando el importe final de apuesta dinámicamente, asegurando la facturación masiva.
**Ver conceptos:** [[concepts/quiniela_logica_oficial|Reglas Oficiales]] | [[concepts/logica_riesgo_banca|Reglas de Validación (Topes)]]

---


## 🎭 Escenario: Ingreso exitoso de apuesta de 3 cifras a múltiples sorteos

**Dado** que el vendedor ha iniciado sesión hábil en la terminal operativa
**Y** la pantalla de Quiniela se encuentra a la vista
**Y** el operario pre-seleccionó los sorteos "Vespertino" y "Nocturno"
**Cuando** el usuario ingresa un número de exactamente 3 cifras numéricas
**Y** el usuario define una ubicación de tabla de premio jerárquica
**Y** el usuario establece el dinero en juego
**Y** el usuario acciona el comando principal de "Ingresar"
**Entonces** el sistema actualiza el registro interno anexando la jugada
**Y** el monto total de la venta actual refleja el importe original x 2 (Sorteos seleccionados)
**Y** los campos de número, rubro y apuesta recuperan su estado en blanco inmediatamente
