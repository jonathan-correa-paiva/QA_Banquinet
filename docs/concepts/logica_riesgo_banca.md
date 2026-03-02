# 🏦 Lógica de Riesgo de la Banca (Config Server)
#Riesgo #Banca #Backend

Este documento recopila las reglas internas de tope de operaciones y umbrales de viabilidad dictadas por la directiva de Riesgo para cada juego en las terminales gPOS.

**Origen de los datos:** Endpoint `productos_config` / JSON Config del servidor (Vigente a Febrero 2026).

---

## 1. Topes Generales de Apuesta Mínima y Máxima

Las operaciones del carrito están custodiadas por estos topes perimetrales:

| Producto | Cód. Interno | Apuesta Mínima | Apuesta Máxima |
| :--- | :---: | :---: | :---: |
| **Quiniela** | `QUI` | $20 | $1.000 |
| **Tómbola** | `TOM` | $30 | $900 |
| **Lotería** | `LOT` | $5.020 | $20.000 |
| **Supermatch** | `SUP` | *No Definido* | $2.345 |

*(Cualquier boleta que vulnere esta tabla será rechazada tempranamente y ni siquiera viajará como cuota a la bolsa de riesgo del Bolserver).*

---

## 2. 5 de Oro (ORO): Arrendamientos e Histórico
A diferencia del resto, el 5 de Oro es un juego de tramo histórico donde el precio del cartón y sus combinaciones fluctúa según resoluciones de la directiva por fecha.

La terminal siempre debe cotizar con la banda más reciente (Actualmente: **A partir del 2022-10-14T22:15:00**).

### 2.1 Tabla de Arrendamiento Vigente (Base)
*   **Valor Apuesta Común:** $40
*   **Valor Apuesta Común + Revancha:** $60 *(Revancha = $20)*

### 2.2 Costo Combinatorio por "Múltiples"
Si un usuario solicita una jugada "Múltiple" (sobrepasando los 5 números hasta 8), el carrito debe multiplicar el arrendamiento base por la cantidad de submúltiplos matemáticos:

| Números Jugados | Cantidad de Sub-jugadas (Factor Multip.) | Tarifa Resultante (Común) | Tarifa Resultante (Común + Revancha) |
| :---: | :---: | :--- | :--- |
| **4** (Sorpresa 4N) | 44 jugadas | $1.760 (44 x $40) | $2.640 (44 x $60) |
| **5** (Standard) | 1 jugada | $40 (1 x $40) | $60 (1 x $60) |
| **6** (Múltiple) | 6 jugadas | $240 (6 x $40) | $360 (6 x $60) |
| **7** (Múltiple) | 21 jugadas | $840 (21 x $40) | $1.260 (21 x $60) |
| **8** (Máximo) | 56 jugadas | $2.240 (56 x $40) | $3.360 (56 x $60) |

---
> ⚠️ **Nota QA:** Es fundamental testear validaciones en la frontera (*Boundary Testing*) de cara a este cuadro. Ejemplo: Tirar una apuesta a Quiniela de exactamente `$19`, `$20` y `$21`. Tirar una de `$999`, `$1000` y `$1001`.
