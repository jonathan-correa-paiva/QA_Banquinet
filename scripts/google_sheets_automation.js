/**
 * 🚀 REPORTE PREMIUM BANQUINET - v16.1 (FINAL POLISH)
 * 
 * MEJORAS v16.1:
 * - Fórmulas con ';' (Soporte Localización Uruguay/España).
 * - Colores vibrantes y profesionales para estados.
 * - Limpieza automática de celda K2 después de importar.
 * - Corrección de error de sintaxis en el dashboard.
 */

function onOpen() {
  const ui = SpreadsheetApp.getUi();
  ui.createMenu('🚀 QA Banquinet')
      .addItem('🏠 Configurar Inicio (Pablo Style)', 'setupHomeSheet')
      .addItem('🎨 Configurar Colores (Config)', 'setupConfigSheet')
      .addSeparator()
      .addItem('📊 Formatear Matriz (Importar)', 'formatQAMatrix')
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
    ["✅ Pasa", "#166534"], 
    ["⛔ Falla", "#991b1b"], 
    ["🚧 Bloqueado", "#92400e"], 
    ["🤖 Automatizado", "#7c3aed"], 
    ["🔍 Evaluar Auto", "#0ea5e9"]
  ]);
  config.setColumnWidth(1, 150); config.setColumnWidth(2, 100);
  SpreadsheetApp.getUi().alert("🎨 CONFIG de colores lista.");
}

function setupHomeSheet() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  let home = ss.getSheetByName("INICIO");
  if (!home) home = ss.insertSheet("INICIO", 0);
  home.clear();
  
  home.getRange("A1:I1").merge().setValue("🚀 gPOS - ESTATUS DE REGRESIÓN").setFontSize(16).setFontWeight("bold").setBackground("#1e293b").setFontColor("#ffffff").setHorizontalAlignment("center");
  home.getRange("B3").setValue("📊 BASELINE:").setFontWeight("bold");
  home.getRange("C3").setValue("v1.0.1+19 (Línea Base)").setFontColor("#64748b");
  home.getRange("B4").setValue("🎯 OBJETIVO:").setFontWeight("bold");
  home.getRange("C4").setValue("Verificación Manual Pasada General").setFontColor("#1e40af");
  home.getRange("B6").setValue("🔎 VER REPORTE:").setFontWeight("bold").setFontSize(11);
  home.getRange("C6").setBackground("#fffbeb").setBorder(true, true, true, true, null, null, "#f59e0b", SpreadsheetApp.BorderStyle.SOLID);
  
  home.getRange("K1").setValue("📥 PEGAR CSV AQUÍ").setFontWeight("bold").setBackground("#10b981").setFontColor("#ffffff").setHorizontalAlignment("center");
  home.getRange("K2").setValue("Pegar aquí...").setBackground("#f0fdf4").setBorder(true, true, true, true, null, null, "#10b981", SpreadsheetApp.BorderStyle.DASHED).setFontColor("#059669");
  
  home.getRange("B8:G8").merge().setValue("📈 PROGRESO DE LA REGRESIÓN POR VERSIÓN").setFontWeight("bold").setBackground("#334155").setFontColor("#ffffff").setHorizontalAlignment("center");
  const headers = ["VERSIÓN", "TESTS TOTAL", "✅ PASA", "⛔ FALLA", "🚧 BLOQ", "% AVANCE"];
  home.getRange(9, 2, 1, headers.length).setValues([headers]).setFontWeight("bold").setBackground("#f1f5f9").setHorizontalAlignment("center");
  
  home.setColumnWidth(2, 120); home.setColumnWidth(3, 100); home.setColumnWidth(4, 100); home.setColumnWidth(5, 100); home.setColumnWidth(6, 100); home.setColumnWidth(7, 120);
  updateVersionDropdown(true);
}

function updateVersionDropdown(silent) {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const home = ss.getSheetByName("INICIO");
  if (!home) return;
  const versions = ss.getSheets().map(s => s.getName()).filter(name => /v1.0.1\+[0-9]+/.test(name));
  
  if (versions.length > 0) {
    home.getRange("C6").setDataValidation(SpreadsheetApp.newDataValidation().requireValueInList(versions).build());
    let current = home.getRange("C6").getValue();
    if (!current || !versions.includes(current)) { current = versions[versions.length - 1]; home.getRange("C6").setValue(current); }
    
    const summaryData = versions.map(v => {
      const s = ss.getSheetByName(v);
      const metrics = s.getRange("A3:F3").getValues()[0];
      return [v, metrics[0], metrics[1], metrics[2], metrics[4], metrics[5]];
    });
    
    home.getRange(10, 2, 100, 6).clearContent();
    home.getRange(10, 2, summaryData.length, 6).setValues(summaryData).setHorizontalAlignment("center").setFontSize(10);
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
  if (sheet.getRange(1, 1).getValue().toString().includes(',')) {
    sheet.getRange(1, 1, lastRowRaw, 1).splitTextToColumns(',');
  }

  const vRegex = /v1.0.1\+[0-9]+/;
  let vName = sheet.getRange(1,1).getValue().toString().match(vRegex) ? sheet.getRange(1,1).getValue().toString().match(vRegex)[0] : "v_Manual";

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
  sh.getRange("A1:G1").merge().setValue("📊 DETALLE DE QA - " + vName).setFontSize(12).setFontWeight("bold").setBackground("#1e293b").setFontColor("#ffffff").setHorizontalAlignment("center");
  sh.setColumnWidth(1, 90); sh.setColumnWidth(2, 90); sh.setColumnWidth(3, 240); sh.setColumnWidth(4, 240); sh.setColumnWidth(5, 100); sh.setColumnWidth(6, 120); sh.setColumnWidth(7, 300);

  setupDashboard(sh, lastRow);

  const headerRow = 6;
  sh.getRange(headerRow, 1, 1, lastCol).setBackground('#334155').setFontColor('#ffffff').setFontWeight('bold').setHorizontalAlignment('center');
  
  const estadoRule = SpreadsheetApp.newDataValidation().requireValueInList(["Pendiente", "✅ Pasa", "⛔ Falla", "🚧 Bloqueado"]).build();
  const tipoRule = SpreadsheetApp.newDataValidation().requireValueInList(["Manual", "Automático"]).build();
  const dataRange = sh.getRange(headerRow + 1, 1, lastRow - headerRow, lastCol);
  const data = dataRange.getValues();

  for (let i = 0; i < data.length; i++) {
    const r = headerRow + 1 + i;
    const id = data[i][0].toString();
    const modulo = data[i][1].toString();
    
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
    }
  }

  sh.getRange(headerRow + 1, 1, lastRow - headerRow, lastCol).setBorder(true, true, true, true, true, true, "#e2e8f0", SpreadsheetApp.BorderStyle.SOLID);
  updateVersionDropdown(true);
  sh.activate();
  SpreadsheetApp.getUi().alert('✅ Reporte Premium Generado con Éxito.');
}

function setupDashboard(sh, lastRow) {
  const labels = [["TESTS", "✅ PASA", "⛔ FALLA", "🤖 AUTO", "🚧 BLOQ", "% AVANCE"]];
  sh.getRange("A2:F2").setValues(labels).setFontWeight("bold").setBackground("#1e293b").setFontColor("#ffffff").setHorizontalAlignment("center").setFontSize(9);
  
  const estadoRange = "F7:F" + lastRow;
  const tipoRange = "E7:E" + lastRow;
  
  sh.getRange("A3").setFormula('=COUNTA(A7:A' + lastRow + ')'); 
  sh.getRange("B3").setFormula('=COUNTIF(' + estadoRange + '; "*Pasa*")');
  sh.getRange("C3").setFormula('=COUNTIF(' + estadoRange + '; "*Falla*")');
  sh.getRange("D3").setFormula('=COUNTIF(' + tipoRange + '; "*Auto*")');
  sh.getRange("E3").setFormula('=COUNTIF(' + estadoRange + '; "*Bloq*")');
  sh.getRange("F3").setFormula('=IF(A3>0; B3/A3; 0)').setNumberFormat("0.0%");

  const valRange = sh.getRange("A3:F3");
  valRange.setFontSize(14).setFontWeight("bold").setHorizontalAlignment("center").setBackground("#ffffff");
  valRange.setBorder(true, true, true, true, true, true, "#1e293b", SpreadsheetApp.BorderStyle.SOLID);
  
  sh.getRange("B3").setFontColor("#16a34a");
  sh.getRange("C3").setFontColor("#dc2626");
  sh.getRange("D3").setFontColor("#7c3aed");
  sh.getRange("F3").setFontColor("#2563eb");
}
