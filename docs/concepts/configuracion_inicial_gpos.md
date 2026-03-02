# 🔐 Arquitectura de Configuración Inicial (gPOS)
#Arquitectura #Seguridad #InitialConfig #Backend

Este documento describe el flujo orquestado para la puesta a punto y alta segura (Provisión de Credenciales) de las terminales gPOS de BQN, manejado principalmente por interacciones entre la App Flutter, BOL-API, BSecurity-API y Backoffice-API.

---

## 🏗️ Flujo de Vinculación (Alta desde Fábrica/Soporte)

El proceso garantiza que el hardware no tenga credenciales embebidas (hardcodeadas), utilizando Tokens efímeros transmitidos mediante lectura óptica (Código QR).

### 1. Detección de Estado "No Configurado"
Cuando el Operador enciende la aplicación BQN en un dispositivo recién flasheado, la terminal detecta la ausencia de Storage Local protegido (`flutter_secure_storage`) y entra en modo `Initial Configuration`.

### 2. Generación del Token QR (Lado Soporte IT)
* El operario de Soporte ejecuta `./generar_y_mostrar_qr.sh` (con la variable de entorno `RESET_TOKEN_KEY`), el cual a través de Python llama a:
  `[BOL-API] /config/generate-reset-token`.
* El servidor Scala genera un Token aleatorio Efímero sujeto a reglas estrictas:
  * **TTL (Time to Live):** Controlado por `reset-token-ttl` en `application.conf` (Normalmente `PT10M` = 10 minutos) para reducir ventanas de ataque.
* Se levanta un visor en la PC proyectando la Imagen QR del Token.

### 3. Handshake del POS (Lado Aplicación gPOS)
1. El operario escanea la pantalla con el hardware.
2. La terminal envía la solicitud hacia `[BOL-API] /config/reset` portando:
    * `Bearer Token` (El token del QR decodificado).
    * `modelo` (Ej: SUNMI-V3).
    * `hardwareSerialNumber` (El SN físico de la máquina).

### 4. Orquestación Backend (La Cascada de Credenciales)

Si el `[BOL-API]` detecta el token válido, lo invalida de uso de inmediato (*One-Time-Use*) y desata:
1. **Reg. en Backoffice:** Consulta a `Backoffice-API` para recibir un Serial Number interno BQN (Agnóstico al modelo de caja).
2. **Generación de Password:** `BOL-API` informa a `BSecurity-API` `/usuarios/reset-pos`. BSecurity asigna una constraseña temporal.
3. **Paso de Credenciales:** `BOL-API` arma el payload de respuesta de vuelta a la terminal: `username` (`gpos.<serial_number>`) y el `password temporal`.

### 5. Login Final y Consolidación (gPOS)
* La aplicación intercepta el modelo temporal y autentica en `BSecurity-API`.
* BSecurity responde con el JWT Final (`accessToken` y `refreshToken`).
* Automáticamente, bajo el paraguas del `Bearer`, Flutter peticiona el cambio del temporal a un Password Definitivo y lo almacena perennemente en la bóveda criptográfica del SO (Secure Storage).

---

## 🔄 Rotación de Contraseñas Gubernamental
Por normativas de compliance, ningún dispositivo posee un Password infinito:
* **Frecuencia:** Cada 3 meses.
* **Mecánica:** A nivel inicio (boot) o scheduler 24hs, el sistema verifica la fecha del último cambio.
* **Expirado:** Si excede 3 meses, se realiza llamada a rotación forzada y re-almacenamiento en bóveda.
