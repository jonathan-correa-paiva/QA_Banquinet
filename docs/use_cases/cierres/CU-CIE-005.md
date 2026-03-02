# CU-CIE-005: El cambio de cierre se actualiza automáticamente (sin reiniciar POS)
**Módulo:** Cierres 
**Estado:** ⛔ Falla (v1.0.1+12)

## 📝 Descripción
**Valor de Negocio:** Optimizar la experiencia del usuario eliminando la necesidad de refrescos manuales o reinicios para ver la disponibilidad real de sorteos.

---

## ✅ Comportamiento Esperado (Criterio de Aceptación)
* Al expirar `fechaCierre` el sistema actualiza los sorteos apostables en forma automática sin intervención del operador.

---

## 🚫 Fallo Detectado (v1.0.1+12)
* El sistema no refresca automáticamente. Pasada más de una hora del cierre, la terminal sigue mostrando sorteos vencidos.
* **NOTA**: Se verifica al dejar el gPOS encendido más de una hora luego del cierre vespertino.
* Requiere actualización manual por parte del operador.
