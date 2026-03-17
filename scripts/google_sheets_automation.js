/**
 * REPORTE DE REGRESIÓN BANQUINET - v21
 * 
 * MEJORAS v21:
 * - Fórmulas dinámicas (Live Metrics).
 * - Separación de Casos de Uso vs Bugs.
 * - Soporte para Pendientes y Automatización.
 */

function onOpen() {
  const ui = SpreadsheetApp.getUi();
  ui.createMenu('QA Banquinet')
      .addItem('Configurar Pagina de Inicio', 'setupHomeSheet')
      .addItem('Configurar Colores (Config)', 'setupConfigSheet')
      .addSeparator()
      .addItem('Formatear Matriz (Importar)', 'formatQAMatrix')
      .addToUi();
}

function setupConfigSheet() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  let config = ss.getSheetByName("CONFIG");
  if (!config) config = ss.insertSheet("CONFIG");
  config.clear();
  config.getRange("A1:B1").setValues([["ESTADO", "COLOR_HEX"]]).setBackground("#111827").setFontColor("#ffffff").setFontWeight("bold");
  config.getRange("A2:B7").setValues([
    ["Pendiente", "#94a3b8"], 
    ["Pasa", "#166534"], 
    ["Falla", "#991b1b"], 
    ["Bloqueado", "#92400e"], 
    ["Automatizado", "#7c3aed"], 
    ["Evaluar Auto", "#0ea5e9"]
  ]);
  config.setColumnWidth(1, 150); config.setColumnWidth(2, 100);
  SpreadsheetApp.getUi().alert("🎨 CONFIG de colores lista.");
}

function setupHomeSheet() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  let home = ss.getSheetByName("INICIO");
  if (!home) home = ss.insertSheet("INICIO", 0);
  home.clear();
  
  home.getRange("A1:I1").merge().setValue("ESTATUS DE REGRESIÓN - gPOS").setFontSize(16).setFontWeight("bold").setBackground("#1e293b").setFontColor("#ffffff").setHorizontalAlignment("center");
  home.getRange("B3").setValue("BASELINE:").setFontWeight("bold");
  home.getRange("C3").setValue("v1.0.1+19 (Linea Base)").setFontColor("#64748b");
  home.getRange("B4").setValue("OBJETIVO:").setFontWeight("bold");
  home.getRange("C4").setValue("Verificación Manual Pasada General").setFontColor("#1e40af");
  home.getRange("B6").setValue("VER REPORTE:").setFontWeight("bold").setFontSize(11);
  home.getRange("C6").setBackground("#fffbeb").setBorder(true, true, true, true, null, null, "#f59e0b", SpreadsheetApp.BorderStyle.SOLID);
  
  home.getRange("K1").setValue("PEGAR CSV AQUI").setFontWeight("bold").setBackground("#10b981").setFontColor("#ffffff").setHorizontalAlignment("center");
  home.getRange("K2").setValue("Pegar aquí...").setBackground("#f0fdf4").setBorder(true, true, true, true, null, null, "#10b981", SpreadsheetApp.BorderStyle.DASHED).setFontColor("#059669");
  
  home.getRange("B8:J8").merge().setValue("PROGRESO DE LA REGRESION POR VERSION").setFontWeight("bold").setBackground("#334155").setFontColor("#ffffff").setHorizontalAlignment("center");
  const headers = ["VERSION", "TESTS TOTAL", "PASA", "FALLA", "PENDIENTE", "BLOQUEADO", "AUTOMATIZADO", "BUGS", "% AVANCE"];
  home.getRange(9, 2, 1, headers.length).setValues([headers]).setFontWeight("bold").setBackground("#f1f5f9").setHorizontalAlignment("center");
  
  home.setColumnWidth(2, 120); // Versión
  home.setColumnWidth(3, 100);  // Total
  home.setColumnWidth(4, 90);  // Pasa
  home.setColumnWidth(5, 90);  // Falla
  home.setColumnWidth(6, 100);  // Pend
  home.setColumnWidth(7, 100);  // Bloq
  home.setColumnWidth(8, 110);  // Auto
  home.setColumnWidth(9, 100);  // Bugs
  home.setColumnWidth(10, 110); // % Avance
  updateVersionDropdown(true);
}

function updateVersionDropdown(silent) {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const home = ss.getSheetByName("INICIO");
  if (!home) return;
  const versions = ss.getSheets().map(s => s.getName())
    .filter(name => /v1.0.1\+[0-9]+/.test(name))
    .sort((a, b) => {
      const numA = parseInt(a.split('+')[1]);
      const numB = parseInt(b.split('+')[1]);
      return numB - numA; // Descendente (más reciente arriba)
    });
  
  if (versions.length > 0) {
    home.getRange("C6").setDataValidation(SpreadsheetApp.newDataValidation().requireValueInList(versions).build());
    let current = home.getRange("C6").getValue();
    const summaryData = versions.map(v => {
      const s = ss.getSheetByName(v);
      const isNewFormat = s.getRange("H2").getValue().toString().includes("BUGS");
      
      if (isNewFormat) {
        // Formato Nuevo (Dinámico con BUGS incluído)
        // Solapa de versión: A:TOTAL, B:PASA, C:FALLA, D:PEND, E:BLOQ, F:AUTO, G:%AVANCE, H:BUGS TOTAL
        // Tabla INICIO:     [VERSIÓN, TOTAL, PASA, FALLA, PEND, BLOQ, AUTO, BUGS, % AVANCE]
        return [
          v, 
          "='" + v + "'!A3", 
          "='" + v + "'!B3", 
          "='" + v + "'!C3", 
          "='" + v + "'!D3", 
          "='" + v + "'!E3", 
          "='" + v + "'!F3", 
          "='" + v + "'!H3", 
          "='" + v + "'!G3"
        ];
      } else {
        // Formato Legacy Viejo sin BUGS en la tabla
        // A:TOTAL, B:PASA, C:FALLA, D:%AVANCE, E:BLOQ, F:AUTO
        // Tabla INICIO:     [VERSIÓN, TOTAL, PASA, FALLA, PEND, BLOQ, AUTO, BUGS, % AVANCE]
        return [
          v, 
          "='" + v + "'!A3", 
          "='" + v + "'!B3", 
          "='" + v + "'!C3", 
          "-", 
          "='" + v + "'!E3", 
          "='" + v + "'!F3", 
          "-", 
          "='" + v + "'!D3"
        ];
      }
    });
    
    home.getRange(10, 2, 100, 9).clearContent();
    const targetRange = home.getRange(10, 2, summaryData.length, 9);
    targetRange.setValues(summaryData); // Google Sheets will treat strings starting with '=' as formulas
    targetRange.setHorizontalAlignment("center").setFontSize(10);
    home.getRange(10, 10, summaryData.length, 1).setNumberFormat("0.0%").setFontWeight("bold");
    home.getRange(10, 8, summaryData.length, 1).setNumberFormat("0.0%").setFontColor("#7c3aed"); // Auto
    home.getRange(10, 9, summaryData.length, 1).setFontColor("#991b1b").setFontWeight("bold"); // Bugs
  }
}

function formatQAMatrix() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  let home = ss.getSheetByName("INICIO");
  let sheet = ss.getActiveSheet();
  let fromHome = false;

  if (sheet.getName() === "INICIO") {
    const importRange = sheet.getRange("K2"); 
    const firstVal = importRange.getValue().toString();
    if (firstVal && firstVal !== "Pegar aquí...") {
      const temp = ss.insertSheet("TMP_IMPORT");
      sheet.getRange("K2:T2000").copyTo(temp.getRange(1, 1));
      sheet = temp; fromHome = true;
    } else { SpreadsheetApp.getUi().alert("❌ No hay datos en K2."); return; }
  }
  
  const lastRowRaw = sheet.getLastRow();
  // Check first few rows for commas to decide if we need to split (in case they pasted already parsed data).
  let needsSplit = false;
  const checkRange = sheet.getRange(1, 1, Math.min(10, lastRowRaw), 1).getValues();
  for (let r = 0; r < checkRange.length; r++) {
    if (checkRange[r][0].toString().includes(',')) {
      needsSplit = true;
      break;
    }
  }
  
  if (needsSplit) {
    sheet.getRange(1, 1, lastRowRaw, 1).splitTextToColumns(SpreadsheetApp.TextToColumnsDelimiter.COMMA);
  }

  const vRegex = /v1.0.1\+[0-9]+/;
  let vCellVal = sheet.getRange(1,1).getValue().toString();
  let vMatch = vCellVal.match(vRegex);
  let vName = vMatch ? vMatch[0] : "v_Manual";

  // Si el nombre detectado es muy genérico, intentamos buscar en otras celdas superiores
  if (vName === "v_Manual") {
    let checkTitle = sheet.getRange(1, 1, 1, 5).getValues()[0].join(" ");
    let vMatch2 = checkTitle.match(vRegex);
    if (vMatch2) vName = vMatch2[0];
  }

  let target = ss.getSheetByName(vName);
  if (!target) target = ss.insertSheet(vName); else target.clear();
  sheet.getDataRange().copyTo(target.getRange(1, 1));
  
  if (fromHome) {
    ss.deleteSheet(sheet);
    home.getRange("K2").setValue("Pegar aquí..."); // Limpieza automática
  }
  
  const sh = target;
  sh.insertRowsBefore(1, 4);
  const lastRow = sh.getLastRow();
  const lastCol = 7;
  
  sh.getRange(1, 1, lastRow, lastCol).setFontFamily('Inter').setFontSize(10).setVerticalAlignment('middle').setWrap(true);
  sh.getRange("A1:G1").merge().setValue("DETALLE DE QA - " + vName).setFontSize(12).setFontWeight("bold").setBackground("#1e293b").setFontColor("#ffffff").setHorizontalAlignment("center");
  sh.setColumnWidth(1, 90); sh.setColumnWidth(2, 90); sh.setColumnWidth(3, 240); sh.setColumnWidth(4, 240); sh.setColumnWidth(5, 100); sh.setColumnWidth(6, 120); sh.setColumnWidth(7, 300);

  const dataForBoundary = sh.getRange(1, 1, lastRow, 1).getValues();
  let boundaryRow = lastRow + 1; // Por defecto todo es baseline
  for (let i = 0; i < dataForBoundary.length; i++) {
    const rawVal = dataForBoundary[i][0] ? dataForBoundary[i][0].toString().toUpperCase().trim() : "";
    // Búsqueda súper permisiva para el encabezado de Bugs
    if (rawVal.indexOf("BUGS") !== -1 || rawVal.indexOf("FEATURES A TRATAR") !== -1 || rawVal === "BUGS Y FEATURES A TRATAR") {
      boundaryRow = i + 1; // +1 porque index empieza en 0 y filas en 1
      break;
    }
  }

  setupDashboard(sh, lastRow, boundaryRow);

  const headerRow = 6;
  sh.getRange(headerRow, 1, 1, lastCol).setBackground('#334155').setFontColor('#ffffff').setFontWeight('bold').setHorizontalAlignment('center');
  
  const estadoRule = SpreadsheetApp.newDataValidation().requireValueInList(["Pendiente", "Pasa", "Falla", "Bloqueado"]).build();
  const tipoRule = SpreadsheetApp.newDataValidation().requireValueInList(["Manual", "Automático"]).build();
  const dataRange = sh.getRange(headerRow + 1, 1, lastRow - headerRow, lastCol);
  const data = dataRange.getValues();

  for (let i = 0; i < data.length; i++) {
    const r = headerRow + 1 + i;
    const id = data[i][0].toString();
    const modulo = data[i][1].toString();
    
    // Si es un titulo de agrupacion
    if (id && !modulo) {
      sh.getRange(r, 1, 1, lastCol).merge().setBackground('#64748b').setFontColor('#ffffff').setFontWeight('bold');
    } else if (id && modulo) {
      sh.getRange(r, 5).setDataValidation(tipoRule);
      sh.getRange(r, 6).setDataValidation(estadoRule);
      
      const estado = data[i][5].toString();
      const estadoCell = sh.getRange(r, 6);
      if (estado.includes("Pasa")) {
        estadoCell.setBackground("#dcfce7").setFontColor("#14532d");
      } else if (estado.includes("Falla")) {
        estadoCell.setBackground("#fee2e2").setFontColor("#7f1d1d");
      } else if (estado.includes("Bloqueado")) {
        estadoCell.setBackground("#fef3c7").setFontColor("#78350f");
      } else {
        estadoCell.setBackground("#f1f5f9").setFontColor("#475569");
      }
      if (i % 2 === 0) sh.getRange(r, 1, 1, lastCol).setBackground("#fdfdfd");
      
      // Resaltado de ítems para la reunión (Columna J / Foco_Meet)
      const focoMeet = sh.getRange(r, 9).getValue().toString().toUpperCase();
      if (focoMeet === "X" || focoMeet === "MEET") {
        sh.getRange(r, 1, 1, lastCol).setBackground("#fef9c3"); // Amarillo suave para la meet
      }
    }
  }

  sh.getRange(headerRow + 1, 1, lastRow - headerRow, lastCol).setBorder(true, true, true, true, true, true, "#e2e8f0", SpreadsheetApp.BorderStyle.SOLID);
  updateVersionDropdown(true);
  sh.activate();
  SpreadsheetApp.getUi().alert('Reporte generado correctamente.');
}

function setupDashboard(sh, lastRow, boundaryRow) {
  const labels = [["TESTS TOTAL", "PASA", "FALLA", "PENDIENTE", "BLOQUEADO", "AUTOMATIZADO", "% AVANCE", "BUGS TOTAL"]];
  sh.getRange("A2:H2").setValues(labels).setFontWeight("bold").setBackground("#1e293b").setFontColor("#ffffff").setHorizontalAlignment("center").setFontSize(9);
  
  // === CÁLCULO PROGRAMÁTICO (sin fórmulas, sin problemas de locale) ===
  // Leemos los datos de la hoja directamente y contamos en JS
  const allIds    = sh.getRange(7, 1, lastRow - 6, 1).getValues(); // Columna A (IDs)
  const allTipos  = sh.getRange(7, 5, lastRow - 6, 1).getValues(); // Columna E (Tipo Autom.)
  const allEstado = sh.getRange(7, 6, lastRow - 6, 1).getValues(); // Columna F (Estado Test)
  
  var totalTests = 0, pasa = 0, falla = 0, pendiente = 0, bloqueado = 0, automatizado = 0, bugs = 0;
  
  for (var i = 0; i < allIds.length; i++) {
    var id = allIds[i][0] ? allIds[i][0].toString().trim() : "";
    var estado = allEstado[i][0] ? allEstado[i][0].toString() : "";
    var tipo = allTipos[i][0] ? allTipos[i][0].toString() : "";
    
    // Ignorar filas vacías y encabezados de sección (no tienen guión)
    if (id === "" || id.indexOf("-") === -1) continue;
    
    // Separar bugs/reqs del conteo de tests
    if (id.indexOf("BUG-") !== -1 || id.indexOf("REQ-") !== -1) {
      bugs++;
    } else {
      totalTests++;
    }
    
    // Contar por estado (aplica a todos: tests y bugs)
    if (estado.indexOf("Pasa") !== -1)           pasa++;
    else if (estado.indexOf("Falla") !== -1)      falla++;
    else if (estado.indexOf("Pendiente") !== -1)  pendiente++;
    else if (estado.indexOf("Bloqueado") !== -1)  bloqueado++;
    
    // Contar automatizados
    if (tipo.indexOf("Automático") !== -1 || tipo.indexOf("Automatico") !== -1) automatizado++;
  }
  
  var avance = totalTests > 0 ? pasa / totalTests : 0;
  
  // Escribir valores directos - CERO fórmulas, CERO problemas de locale
  sh.getRange("A3").setValue(totalTests);
  sh.getRange("B3").setValue(pasa);
  sh.getRange("C3").setValue(falla);
  sh.getRange("D3").setValue(pendiente);
  sh.getRange("E3").setValue(bloqueado);
  sh.getRange("F3").setValue(automatizado);
  sh.getRange("G3").setValue(avance).setNumberFormat("0.0%");
  sh.getRange("H3").setValue(bugs);

  const valRange = sh.getRange("A3:H3");
  valRange.setFontSize(14).setFontWeight("bold").setHorizontalAlignment("center").setBackground("#ffffff");
  valRange.setBorder(true, true, true, true, true, true, "#1e293b", SpreadsheetApp.BorderStyle.SOLID);

  sh.getRange("B3").setFontColor("#16a34a");
  sh.getRange("C3").setFontColor("#dc2626");
  sh.getRange("D3").setFontColor("#64748b");
  sh.getRange("F3").setFontColor("#7c3aed");
  sh.getRange("G3").setFontColor("#2563eb");
  sh.getRange("H3").setFontColor("#991b1b");

  // Format the bugs section header if present
  if (boundaryRow > 0) {
    sh.getRange(boundaryRow, 1, 1, sh.getLastColumn()).setBackground("#991b1b").setFontColor("#ffffff").setFontWeight("bold");
  }
}
