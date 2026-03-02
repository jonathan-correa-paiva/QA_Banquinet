# CU-INT-004: General - Respuesta Dinámica a Parámetros de Configuración (Riesgo)
**Módulo:** General / Arquitectura
**Tipo:** Funcional (Transversal)

## 📝 Descripción
**Valor de Negocio:** Asegurar que la terminal gPOS no contenga límites comerciales embutidos en duro (Hardcoded) en el código fuente de Flutter, garantizando que el Negocio (La Banca) pueda alterar los topes de apuestas, aranceles y coeficientes de riesgo desde el servidor de configuración sin obligar a liberar una nueva versión de la aplicación.

---

## 🎭 Escenario: Testeo de Límites Mutables Alterados desde el Backend

**Dado** que el entorno de Pruebas (Bolserver/Backend) fue alterado para enviar una nueva directriz de `apuestaMin` de $50 para la Quiniela (Original: $20)
**Y** la terminal gPOS realizó un inicio de sesión "limpio" tras el cambio en el servidor
**Y** el usuario selecciona una apuesta tradicional de Quiniela
**Cuando** el empleado intenta forzar un alta con el importe original mínimo de "$20"
**Y** emite la orden de ingresar la boleta al carrito
**Entonces** la plataforma actual asume pasivamente la configuración del servidor sin depender de lógicas guardadas de fábrica
**Y** el sistema deniega el avance mostrando un error o validación adaptada exigiendo el nuevo piso mínimo de "$50"

---
> ⚠️ **Nota QA:** Este caso debe replicarse cada vez que se estrene un nuevo producto en la app. El test se ejecuta pidiendo al DevOps de turno que altere el JSON de `productos_config` en el entorno staging, validando que el gPOS lea e interprete el cambio inmediatamente tras reloguear.
