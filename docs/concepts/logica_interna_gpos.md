# 🧠 Base de Conocimientos: Lógica Interna gPOS
#Logic #Backend #gPOS

Este documento registra las reglas y comportamientos específicos definidos por la arquitectura interna del sistema (Bol-API y Bolserver Legacy), que complementan o adaptan el "Deber Ser" oficial a la realidad técnica de las terminales.

## 1. Gestión de Cupones y Sorteos Múltiples

### Concepto Core: Dependencia 1 a 1 (Sorteo - Cupón)
Aunque el usuario seleccione múltiples sorteos en la interfaz (Botón `| Ves. | Noc. | Ambos |`), a nivel de backend y emisión final el sistema **siempre genera un ticket/cupón individual por sorteo**.

*   **Arquitectura:** La terminal Android (Flutter) se comunica con `Bol-API`, quien a su vez traduce las peticiones al formato de paquetes TCP esperado por el sistema Legacy (`bolserver`).
*   **Regla de Emisión:** Si una jugada cruza juegos o abarca múltiples horarios (ej. Quiniela a "Ambos", o 5 de Oro con sorteos futuros), se particiona en múltiples cupones impresos.

## 2. Dependencias del Ecosistema
*El manejo de alternativas y rechazos por topes de banca se ha abstraído al documento de Gestión de Riesgo, ya que es una validación de backend y no un flujo originado en la UI.*
-> Ver: [[logica_riesgo_banca]]

---
*Nota QA: Comportamientos offline (pérdida de conectividad) y anulaciones se omiten temporalmente en fases tempranas para priorizar validación de UI e interacciones felices de negocio.*
