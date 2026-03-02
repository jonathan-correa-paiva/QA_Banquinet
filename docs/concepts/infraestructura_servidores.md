# 🖥️ Infraestructura y Microservicios
#Admin #Backend #Network

## 1. Desacoplamiento de Aciertos
* **Aislamiento:** El módulo de Aciertos (Consulta y Pago de Premios) opera en un servidor físico/instancia independiente del motor de apuestas.
* **Impacto en QA:** - Una caída del servidor de apuestas NO implica caída del módulo de aciertos.
    - Se deben testear timeouts independientes para cada servicio.
* **Interfaz POS:** La separación en el Menú Principal refleja este aislamiento de backend.