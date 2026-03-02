# Reporte de Actualizacion: Casos de Uso Escuetos

Tras una revision de los 81 casos de uso, se identifico un grupo importante de casos escuetos (de 5 a 8 lineas de longitud) que carecen de informacion vital para desarrollo y QA.

## Ejemplos de Casos Escuetos

- CU-ALT-002 a 004 (Alternativas)
- CU-CAN-002 a 004 (Anulaciones)
- CU-CAR-002 a 004 (Carrito)
- ORO-C5N-001, PWC-ERR-001, y la mayoria de los casos basicos de 5 de Oro y Servicios Digitales.

## Que falta exactamente en estos casos?

Estos casos actualmente solo contienen un titulo, el modulo y un bloque muy breve de "Comportamiento Esperado" o una frase simple en formato Gherkin (DADO/CUANDO/ENTONCES). Para dejar de ser escuetos y ser utiles, les falta lo siguiente:

### 1. Precondiciones y Postcondiciones

- Precondiciones: En que estado debe estar el sistema o el carrito antes de la accion?
- Postcondiciones: Que cambia en el sistema luego?

### 2. Reglas de Negocio Especificas

Faltan las reglas exactas:

- Limites: Montos maximos/minimos, cantidad maxima de numeros a apostar.
- Validaciones Exactas: Como se valida un documento o numero de telefono? Que sistema lo valida?
- Exclusiones: Se pueden combinar ciertas apuestas? Hay numeros bloqueados por riesgo?

### 3. Casos Alternativos y Excepciones

- Desconexiones: Que ocurre si se pierde la conexion a BOL-API a mitad de una jugada?
- Respuestas de Error: No se documentan los codigos de error exactos esperados de la API.

### 4. Criterios de Aceptacion Claros

- Pasos puntuales para QA.

### 5. Concept Linkers

- Estos casos no estan enlazados a los conceptos core del negocio.

Recomendacion: Crear una plantilla estandar de Caso de Uso y refactorizar progresivamente estos casos cortos para que cumplan con un minimo de calidad.

## 📈 Historial de Progreso

- [x] **Refactorización de Casos Críticos (27/Feb):** Se crearon `ORO-C5N-001` y `CU-ALT-002`.
- [x] **Incorporación de Quiniela (27/Feb):** Se crearon `CU-QUI-009` hasta `CU-QUI-012` cubriendo Redoblona y 3 Cifras (Manual, Sorpresa y Límite de Premio).
