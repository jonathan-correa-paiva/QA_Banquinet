# CU-CFG-002: Configuración Inicial - Rotación Trimestral de Contraseña
**Módulo:** Inicialización (initial_config)
**Tipo:** Seguridad / Compliance

## 📝 Descripción
**Valor de Negocio:** Dar cumplimiento estricto a las políticas de seguridad de la Banca (Rotación de claves de cajas terminales) automatizando un desafío de caducidad temporal que renueve y consolide criptográficamente las contraseñas sin requerir hardware nuevo ni soporte manual extendido.

---

## 🎭 Escenario 1: Ejecución silente de rutina de Rotación a los 90 Días

**Dado** que el gPOS enciende o completa su chequeo regular de las últimas 24hs
**Y** se verifica localmente que el timestamp de la última modificación de clave excedió la barrera de 3 meses de antigüedad
**Cuando** la terminal se auto-declara en estado de "Vencimiento Interno"
**Y** acciona mecánicamente la API llamando a la ruta de renovación proveída por Support
**Entonces** el Backend BSecurity-API avala la solicitud procesando un Random Password nuevo a nivel base de datos
**Y** el entorno Flutter gPOS captura exitosamente esta llave sustituta reemplazando la entrada caduca dentro de su `flutter_secure_storage`
**Y** el usuario operario ni percibe o es interrumpido vitalmente durante sus transacciones rutinarias del día

---

## 🎭 Escenario 2: Denegación de servicio por fallo en rotación requerida

**Dado** que el gPOS detectó su propia obsolescencia de 3 meses para la clave vinculada  
**Cuando** intenta cursar automáticamente la petición a BSecurity-API dictada por la rotación
**Y** el backend de red experimenta una caída, pérdida de túnel o error (Status 500)
**Entonces** la terminal aborta la rotación y preserva congelada su clave histórica (o entra en lock preventivo si lo especifica el negocio)
**Y** las bitácoras o telemetría deben despachar una alarma ("Failed Rotation Attempt") a Infraestructura sin borrar la bóveda local.
