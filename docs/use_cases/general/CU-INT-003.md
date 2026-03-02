# CU-INT-003: General - Carrito con Alternativas Múltiples de Banca
**Módulo:** General / Carrito
**Tipo:** UI/UX

## 📝 Descripción
**Valor de Negocio:** Permitir a los vendedores revisar detalladamente cada alternativa individual ofrecida por la Banca (Bol-API) cuando una jugada a múltiples sorteos es rechazada por límites de riesgo, garantizando una total transparencia económica y legal cruzada antes de cobrarle al cliente.

---

## 🎭 Escenario: Aceptación de alternativas para sorteos múltiples

**Dado** que el usuario ingresó al carrito una jugada combinada para los sorteos "Vespertino" y "Nocturno"
**Y** el backend de Riesgo rechaza la jugada original en su emisión por sobrepasar la bolsa
**Y** el sistema resuelve proponer una alternativa financiera para el Vespertino y otra para el Nocturno
**Cuando** el usuario acepta de forma secuencial la alternativa ofrecida para el sorteo Vespertino
**Y** el usuario acepta nuevamente la alternativa remanente respecto del sorteo Nocturno
**Entonces** el Carrito de Compras lista la retoma de cada alternativa en renglones independientes
**Y** el monto individual explícito de cada desintegración se muestra sin omisiones
**Y** el campo numérico del Total General refleja la suma perfecta de la conjunción de ambas alternativas

---
> 🪲 **Trazabilidad de Defectos:** En la v1.0.1+12, existe un seguimiento clave documentado bajo **[BUG-CAR-001]**. El defecto de software trunca la UI agrupando ambas resoluciones en una sola línea opaca, a pesar de que sorpresivamente la matemática total es correcta. El área de Desarrollo (Minuta 24/02) hipotetiza como causa originante un solapamiento en la gestión de "autorizaciones en el mismo milisegundo".
