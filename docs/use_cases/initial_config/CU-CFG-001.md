# CU-CFG-001: Configuración Inicial - Vinculación de Terminal por QR
**Módulo:** Inicialización (initial_config)
**Tipo:** Seguridad / Infraestructura

## 📝 Descripción
**Valor de Negocio:** Asegurar que ninguna terminal gPOS sea desplegada en la calle portando credenciales fijas o archivos de entorno sensibles. Toda autenticación de hardware debe realizarse mediante la orquestación segura del Backend y lectura óptica efímera.

---

## 🎭 Escenario 1: Alta Exitosa de Terminal Nueva

**Dado** que el Soporte Operativo generó un Token QR fresco desde su script conectado a BOL-API
**Y** un equipo POS físico se encuentra en estado de fábrica ("No configurado") mostrando la cámara
**Cuando** el operador escanea el código QR proyectado en la PC de soporte
**Y** la app envía el token junto al modelo y Número de Serie al endpoint `/config/reset`
**Entonces** el servidor valida el Token temporal como legítimo y lo consume
**Y** el backend orquesta silenciosamente la creación del usuario en Backoffice y BSecurity
**Y** el gPOS recibe credenciales temporales, efectúa su primer Login, y muta a una sub-contraseña final
**Y** la pantalla de la terminal avanza al menú principal habiendo almacenado su JWT en la bóveda segura

---

## 🎭 Escenario 2: Rechazo por Token Expirado (TTL Vulnerado)

**Dado** que el equipo de soporte generó un Token QR de reseteo dejando pasar más de los minutos estipulados en `reset-token-ttl` (Ej: 10 minutos)
**Cuando** el operador intenta escanear e inyectar dicho QR vencido mediante la cámara del gPOS
**Entonces** la llamada desde la terminal hacia BOL-API resulta en denegación de servicio (401/403)
**Y** el hardware no recibe ningún `username` ni `password temporal` de parte de BSecurity
**Y** la interfaz mantiene el estatus de "No Configurado", exigiendo al operario que genere un nuevo QR seguro

---
> ⚠️ **Nota QA:** Para probar el Escenario 2, el tester deberá solicitar al equipo IT o simular correr el script Bash `generar_y_mostrar_qr.sh` y deliberadamente esperar a que su cronómetro expire antes de poner el POS frente a la pantalla.
