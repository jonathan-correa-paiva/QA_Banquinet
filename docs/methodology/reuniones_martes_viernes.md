# Reuniones: Martes y Viernes (Sincronización Equipo)

## 📅 Minuta 24 Feb 2026 - Testing POS
**Participantes:** J. Pablo Zebraitis, Jonathan Correa Paiva
**Versión testeada:** `1.0.1+12`

### Temas Tratados y Definiciones
1.  **Bug Carrito (BUG-CAR-001):** Múltiples alternativas aceptadas (Vesp y Noc) se agrupan visualmente en un solo renglón aunque el total es correcto. **Hipótesis del equipo:** Relacionado al issue de "múltiples autorizaciones en el mismo segundo", a corregir junto con eso.
2.  **5 de Oro - Sorteos Vacíos (BUG-5OR-001):** Falta mensaje de "Sin Resultados". Aparece recuadro gris y bloquea cambio de fecha. **Definición:** Evitar traer sorteos sin resultados o mostrar leyenda afirmativa.
3.  **Tómbola - Pérdida de dígito final (BUG-TOM-001):** Si se pulsa apostar muy rápido, se ignora el último dígito suelto. **Definición:** Validar que los números siempre tengan 2 cifras (completar con '0' a la izquierda, ej. 04) de forma similar a como ya funciona en 5 de Oro.
4.  **Pantalla Gris por Sonido (BUG-CFG-001):** Modificar Preferencias tranca la "Alerta por importe".
5.  **Lotería - QR ilegible (Issue #192):** Sale muy pequeño en el ticket físico.
6.  **Pendientes con Dev:** Hablar con Ignacio Cabrera sobre Issue #228 (Mostrar resultado de acierto). QA (Jonathan) advierte falta de claridad sobre cómo o dónde probar este feature.
