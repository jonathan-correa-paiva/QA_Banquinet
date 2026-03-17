# 📝 Minuta de Seguimiento QA - v1.0.1+21 (Sesión Tarde)

**Fecha:** 17/03/2026 (Post-16hs)
**Proyecto:** gPOS 1.0
**Participantes:** J.Pablo Zebraitis, Jonathan Correa Paiva

---

## 🎯 Objetivo de la Sesión
Revisar los bloqueos detectados en la mañana (Lotería, PIN, Cierres) y validar los nuevos escenarios Gherkin.

## 📑 Agenda
1. **Lotería**: Falla en opción "Entero" y aparición de fracciones fantasma.
2. **Seguridad/UX**: Visibilidad de PIN y desincronización entre pantallas.
3. **Cierres**: BUG-CIE-005 (no actualiza sorteos automáticamente).
4. **Logs**: Propuesta técnica para envío de logs en builds de testing.

---

## 🔍 Detalle Técnico (Casos Críticos)

### 🧩 Lotería
  @bug @loteria
**Escenario: Falla opción "Entero" en billete sin ventas previas**
- **Dado** que consulto un número de Lotería con las 10 fracciones disponibles
- **Cuando** selecciono la opción "Entero"
- **Entonces** el sistema falla al intentar autorizar, impidiendo agregar al carrito.

  @bug @loteria @ui
**Escenario: Fracciones fantasma tras venta parcial**
- **Dado** que se ha vendido 1 de 10 fracciones
- **Cuando** abro el selector manual de fracciones (dropdown)
- **Entonces** el sistema muestra opciones (2 al 9) que ya no existen.

### 🔐 Seguridad (PIN)
- Inconsistencia de asteriscos `***` en pantalla de Alerta por importe.
- Desincronización del PIN entre Preferencias y Alerta.

---

## 🛠️ Notas de la Reunión (A completar post-16hs)
*(Espacio para las notas que enviará Jonathan)*

---

## 🏁 Próximos Pasos
- [ ] Ajustar lógica de Lotería según feedback de Pablo.
- [ ] Confirmar fix de Doze Mode para Cierres.
