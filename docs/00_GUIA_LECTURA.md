# 🗺️ Guía de Lectura Rápida — QA Banquinet

> Para cuando vas a 1000km/h y necesitás saber dónde está cada cosa.

---

## 🚀 TL;DR: ¿Qué archivo abro según lo que necesito?

| Situación | Archivo a abrir |
| :--- | :--- |
| **Pablo me pide "la planilla"** | `methodology/matriz_maestra_todoterreno.csv` → Abrir en Excel |
| **Tengo que reportar un bug rápido** | `methodology/bug_template.md` → Garabatear y tirarle a la IA |
| **¿Cuáles son las reglas reales de X juego?** | `concepts/quiniela_logica_oficial.md` (o `tombola_`, `5deoro_`, `loteria_`) |
| **¿Cuánto es el mínimo/máximo de apuesta?** | `concepts/logica_riesgo_banca.md` |
| **¿Cómo funciona el carrito por dentro?** | `concepts/logica_interna_gpos.md` |
| **¿Qué bugs hay abiertos?** | `bug_reports/regression_v1.0.1+12.md` |
| **¿Cómo se configura un POS nuevo?** | `concepts/configuracion_inicial_gpos.md` |
| **Necesito el detalle Gherkin de un caso** | `use_cases/<modulo>/CU-XXX-NNN.md` |
| **¿Dónde está todo linkeado?** | `00_KNOWLEDGE_BASE_MOC.md` (el MOC) |

---

## 📁 Estructura de Carpetas (Mapa Mental)

```
docs/
├── 00_KNOWLEDGE_BASE_MOC.md      ← EL ÍNDICE DE TODO
├── 00_GUIA_LECTURA.md            ← ESTÁS ACÁ
│
├── concepts/                     ← LAS REGLAS DEL JUEGO
│   ├── quiniela_logica_oficial.md
│   ├── tombola_logica_oficial.md
│   ├── 5deoro_logica_oficial.md
│   ├── loteria_logica_oficial.md
│   ├── logica_riesgo_banca.md       ← Topes y Alternativas
│   ├── logica_interna_gpos.md       ← Cómo funciona el Carrito
│   ├── configuracion_inicial_gpos.md ← QR + JWT
│   ├── arquitectura_gpos_legacy.md
│   ├── infraestructura_servidores.md
│   ├── servicios_infraestructura.md
│   └── identificadores_automatizacion.md
│
├── methodology/                  ← CÓMO TESTEAR Y REPORTAR
│   ├── matriz_cobertura_trazabilidad.md  ← Tabla visual (Markdown)
│   ├── matriz_maestra_todoterreno.csv    ← LA SÁBANA PARA EXCEL
│   ├── bug_template.md                   ← Reporte rápido de bugs
│   ├── formato_reporte_bugs.md           ← Plantilla formal
│   ├── mandamientos_qa.md
│   ├── Protocolo_MVP.md
│   ├── QA_Status_Report.md
│   ├── suite_automatizacion_e2e.md
│   ├── DEV_LOG.md
│   └── reuniones_martes_viernes.md
│
├── bug_reports/                  ← BUGS CONFIRMADOS
│   └── regression_v1.0.1+12.md
│
└── use_cases/                    ← CASOS DE USO (Gherkin)
    ├── quiniela/     CU-QUI-001..005
    ├── cinco_de_oro/ CU-5OR-001..004
    ├── tombola/      CU-TOM-001..002
    ├── general/      CU-INT-003, CU-INT-004
    └── initial_config/ CU-CFG-001, CU-CFG-002
```

---

## 🔄 Flujo de Trabajo Diario

```
1. Agarrar tablet
2. Abrir matriz_maestra_todoterreno.csv en Excel
3. Ir fila por fila haciendo lo que dice "Acción"
4. ¿Anduvo? → Escribir "OK" en Firma QA
5. ¿Explotó? → Abrir bug_template.md, garabatear rápido
6. Pasarle el garabato a la IA → Formaliza y actualiza matrices
7. Repetir hasta terminar o hasta que Pablo interrumpa
```

---

## 📊 Números Actuales (v1.0.1+12)

* **Casos de Uso en Matriz:** 75+
* **Bugs Confirmados:** 5 (⛔ Falla)
* **Issues Bloqueados:** 1 (🚧)
* **Módulos Cubiertos:** Quiniela, Tómbola, 5 de Oro, Lotería, Pines Web, Recargas, Carrito, Config Inicial, Impresión
* **Módulos Pendientes de Documentar (Semana 2-3):** Supermatch, eFactura, Cierres (Legacy)

---
*Última actualización: 25/Feb/2026*
