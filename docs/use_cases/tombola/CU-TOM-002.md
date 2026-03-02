# CU-TOM-002: Tómbola - Validación de Límites Legales de Apuesta
**Módulo:** Tómbola

## 📝 Descripción
**Valor de Negocio:** Garantizar el cumplimiento del reglamento oficial contable de la Tómbola, impidiendo proactivamente que el gPOS consolide tickets con apuestas económicamente inviables por defecto (menores al mínimo) o que superen los umbrales máximos de riesgo tolerado.

---

## 🎭 Escenario: Intento de apuesta por debajo del importe mínimo exigido

**Dado** que el usuario seleccionó interactuando visualmente o por dictado una secuencia legal de 7 números
**Cuando** el usuario establece el slider o tipeo de importe manual en "$20"
**Y** el usuario solicita forzar el alta confirmando la orden de "Apostar"
**Entonces** el procesamiento detiene la carga impidiendo su volcado al servidor
**Y** el formulario notifica y resalta flagrantemente que el ingreso es inferior al coto normativo regulado

---

## 🎭 Escenario: Inyección exitosa dentro de los límites

**Dado** que la boleta se encuentra completada totalizando 4 números admitidos
**Cuando** el usuario le asigna un volumen de puja económica de "$50"
**Y** la acción principal confirmando el ingreso es emitida
**Entonces** la interfaz acepta silenciosamente y la inyecta al bloque agrupador de gastos
**Y** un hard-reset interno limpia la matriz de ingreso para encadenar las colas de juego
