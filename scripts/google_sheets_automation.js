/**
 * 🚀 REPORTE PREMIUM BANQUINET - v14.1 (ZERO-CONFIG TITLES)
 * 
 * MEJORAS v14.1:
 * - Detección Automática de Títulos: Cualquier fila con texto en A y vacía en B es un título.
 * - Soporte de "Flags" (Emojis): Detecta banderas o emojis al inicio como señal de título.
 * - Sin Dependencia de CONFIG para Títulos: Todo se lee directamente del CSV.
 * - Dashboard Dinámico: Actualización total al abrir o editar.
 */

function onOpen() {
  const ui = SpreadsheetApp.getUi();
  ui.createMenu('🚀 QA Banquinet')
      .addItem('🏠 Configurar Inicio (Home)', 'setupHomeSheet')
      .addItem('🎨 Configurar Colores (Config)', 'setupConfigSheet')
      .addSeparator()
      .addItem('📊 Formatear Matriz (Importar)', 'formatQAMatrix')
      .addToUi();
  
  updateVersionDropdown(true);
}

/**
 * Navegación y actualización automática.
 */
function onEdit(e) {
  const range = e.range;
  const sheet = range.getSheet();
  const sheetName = sheet.getName();
  
  if (sheetName === "INICIO" && range.getRow() === 5 && range.getColumn() === 3) {
    const vName = range.getValue();
    if (vName) {
      const ss = SpreadsheetApp.getActiveSpreadsheet();
      const target = ss.getSheetByName(vName);
      if (target) target.activate();
    }
  }
  
  const vRegex = /v[0-9.]+\+[0-9]+/;
  if (vRegex.test(sheetName)) {
    if (range.getColumn() === 5 || range.getColumn() === 9) {
      updateVersionDropdown(true);
    }
  }
}

function setupConfigSheet() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  let config = ss.getSheetByName("CONFIG");
  if (!config) config = ss.insertSheet("CONFIG");
  config.clear();
  config.getRange("A1:B1").setValues([["ESTADO", "COLOR_HEX"]]).setBackground("#111827").setFontColor("#ffffff").setFontWeight("bold");
  config.getRange("A2:B6").setValues([["Pendiente", "#94a3b8"], ["✅ Pasa", "#166534"], ["⛔ Falla", "#991b1b"], ["🚧 Bloqueado", "#92400e"], ["🤖 Automatizado", "#7c3aed"]]);
  config.setColumnWidth(1, 150); config.setColumnWidth(2, 100);
  SpreadsheetApp.getUi().alert("🎨 CONFIG de colores lista.");
}

function setupHomeSheet() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  let home = ss.getSheetByName("INICIO");
  if (!home) home = ss.insertSheet("INICIO", 0);
  home.clear();
  home.getRange("A1:I1").merge().setValue("🚀 BANQUINET - PANEL DE CONTROL QA").setFontSize(14).setFontWeight("bold").setBackground("#111827").setFontColor("#ffffff").setHorizontalAlignment("center");
  home.getRange("B3").setValue("PROYECTO:").setFontWeight("bold");
  home.getRange("C3").setValue("gPOS 1.0").setFontWeight("bold").setFontColor("#1e40af");
  home.getRange("B5").setValue("IR A VERSIÓN:").setFontWeight("bold");
  home.getRange("C5").setBackground("#fef3c7").setBorder(true, true, true, true, null, null, "#d1d5db", SpreadsheetApp.BorderStyle.SOLID);
  home.getRange("K1").setValue("📥 PEGAR CSV AQUÍ").setFontWeight("bold").setBackground("#10b981").setFontColor("#ffffff").setHorizontalAlignment("center");
  home.getRange("K2").setValue("Pegar aquí...").setBackground("#ecfdf5").setBorder(true, true, true, true, null, null, "#10b981", SpreadsheetApp.BorderStyle.DASHED).setFontColor("#6b7280");
  home.getRange("B7:H7").merge().setValue("📊 RESUMEN EJECUTIVO POR VERSIÓN").setFontWeight("bold").setBackground("#374151").setFontColor("#ffffff").setHorizontalAlignment("center");
  const headers = ["VERSIÓN", "TESTS", "✅ PASA", "⛔ FALLA", "🚧 BLOQ", "✍️ FIRMAS", "% AVANCE"];
  home.getRange(8, 2, 1, headers.length).setValues([headers]).setFontWeight("bold").setBackground("#e5e7eb").setHorizontalAlignment("center");
  const widths = [140, 70, 70, 70, 70, 80, 80]; widths.forEach((w, i) => home.setColumnWidth(i + 2, w));
  if (home.getMaxColumns() > 11) home.deleteColumns(12, home.getMaxColumns() - 11);
  updateVersionDropdown(true);
}

function updateVersionDropdown(silent) {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const home = ss.getSheetByName("INICIO");
  if (!home) return;
  const vRegex = /v[0-9.]+\+[0-9]+/;
  const versions = ss.getSheets().map(s => s.getName()).filter(name => vRegex.test(name));
  if (versions.length > 0) {
    home.getRange("C5").setDataValidation(SpreadsheetApp.newDataValidation().requireValueInList(versions).build());
    let current = home.getRange("C5").getValue();
    if (!current || !versions.includes(current)) { current = versions[versions.length - 1]; home.getRange("C5").setValue(current); }
    const summaryData = versions.map(v => {
      const s = ss.getSheetByName(v);
      return [v, s.getRange("A3").getValue(), s.getRange("B3").getValue(), s.getRange("C3").getValue(), s.getRange("D3").getValue(), s.getRange("F3").getValue(), s.getRange("G3").getValue()];
    });
    home.getRange(9, 2, 200, 7).clearContent().setBorder(false, false, false, false, false, false);
    home.getRange(9, 2, summaryData.length, 7).setValues(summaryData).setHorizontalAlignment("center").setBorder(true, true, true, true, null, null, "#d1d5db", SpreadsheetApp.BorderStyle.SOLID);
    home.getRange(9, 8, summaryData.length, 1).setNumberFormat("0.0%");
  }
}

function formatQAMatrix() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  let sheet = ss.getActiveSheet();
  let fromHome = false;

  if (sheet.getName() === "INICIO") {
    const importRange = sheet.getRange("K2:K1000"); 
    const firstVal = importRange.getCell(1,1).getValue().toString();
    if (firstVal && firstVal !== "Pegar aquí...") {
      const temp = ss.insertSheet("TMP_IMPORT");
      sheet.getRange("K2:S1000").copyTo(temp.getRange(1, 1));
      sheet = temp; fromHome = true;
    } else { SpreadsheetApp.getUi().alert("❌ No hay datos en K2."); return; }
  }
  
  if (sheet.getRange(1, 1).getValue().toString().includes(',')) {
    sheet.getRange(1, 1, sheet.getLastRow(), 1).splitTextToColumns(',');
  }

  const vRegex = /v[0-9.]+\+[0-9]+/;
  let vName = "";
  let metaTitles = [];
  const scanCells = sheet.getRange(1, 1, 10, 5).getValues();
  for (let r = 0; r < scanCells.length; r++) {
    for (let c = 0; c < scanCells[r].length; c++) {
      const val = scanCells[r][c].toString();
      const m = val.match(vRegex); if (m) vName = m[0];
      if (val.toUpperCase().startsWith("TITULOS:")) {
        metaTitles = val.replace(/TITULOS:/i, "").split(",").map(t => t.trim().toUpperCase());
        sheet.deleteRow(r + 1); r--; break;
      }
    }
  }

  let hIdx = -1;
  const headerScan = sheet.getRange(1, 1, 15, 5).getValues();
  for (let i = 0; i < headerScan.length; i++) { if (headerScan[i].join(" ").toLowerCase().includes("id")) { hIdx = i + 1; break; } }
  
  if (hIdx === -1) { if (fromHome) ss.deleteSheet(sheet); SpreadsheetApp.getUi().alert("❌ Cabecera (ID, Módulo...) no hallada."); return; }
  if (!vName) vName = "v_" + new Date().getTime();

  let target = ss.getSheetByName(vName);
  if (!target) target = ss.insertSheet(vName); else target.clear();
  sheet.getDataRange().copyTo(target.getRange(1, 1));
  if (fromHome) {
    ss.deleteSheet(sheet);
    const h = ss.getSheetByName("INICIO"); h.getRange("K2:S1000").clearContent(); h.getRange("K2").setValue("Pegar aquí...");
  }
  
  const sh = target;
  sh.insertRowsBefore(1, 4); hIdx += 4;
  const lastRow = sh.getLastRow();
  
  sh.getRange(1, 1, lastRow, 9).breakApart().clearFormat().setDataValidation(null).setFontFamily('Inter').setFontSize(10).setVerticalAlignment('middle').setWrap(true);
  sh.getRange("A1:I1").merge().setValue("📊 REPORTE DE QA - " + vName).setFontSize(12).setFontWeight("bold").setBackground("#111827").setFontColor("#ffffff").setHorizontalAlignment("center");
  
  const st = hIdx + 1;
  const setMet = (c, lab, form, col) => {
    sh.getRange(c).setValue(lab).setFontWeight("bold").setBackground("#f3f4f6").setHorizontalAlignment("center").setFontSize(9);
    sh.getRange(c.replace("2", "3")).setFormula(form).setFontSize(12).setFontWeight("bold").setFontColor(col).setHorizontalAlignment("center").setBorder(true,true,true,true,null,null,"#d1d5db",SpreadsheetApp.BorderStyle.SOLID);
  };
  setMet("A2", "TESTS", `=COUNTA(E${st}:E)`, "#111827");
  setMet("B2", "✅ PASA", `=COUNTIF(E${st}:E; "*Pasa*")`, "#166534");
  setMet("C2", "⛔ FALLA", `=COUNTIF(E${st}:E; "*Falla*")`, "#991b1b");
  setMet("D2", "🤖 AUTO", `=COUNTIF(E${st}:E; "*Autom*")`, "#7c3aed");
  setMet("E2", "🚧 BLOQ", `=COUNTIF(E${st}:E; "*Bloqueado*")`, "#92400e");
  setMet("F2", "✍️ FIRMAS", `=COUNTIF(I${st}:I; TRUE)`, "#0369a1");
  setMet("G2", "% AVANCE", `=IF(A3>0; (B3+C3+D3)/A3; 0)`, "#1e40af");
  sh.getRange("G3").setNumberFormat("0.0%");
  
  const config = ss.getSheetByName("CONFIG");
  const cVals = config ? config.getRange("A2:B6").getValues() : [["Pendiente", "#94a3b8"], ["✅ Pasa", "#166534"], ["⛔ Falla", "#991b1b"], ["🚧 Bloqueado", "#92400e"], ["🤖 Automatizado", "#7c3aed"]];
  const chipList = cVals.map(v => v[0]);
  const validation = SpreadsheetApp.newDataValidation().requireValueInList(chipList).build();
  
  sh.getRange(hIdx, 1, 1, 9).setBackground('#111827').setFontColor('#ffffff').setFontWeight('bold').setHorizontalAlignment('center');
  sh.getRange(hIdx, 6, 1, 3).merge().setValue("COMENTARIOS");
  
  const allData = sh.getRange(hIdx + 1, 1, lastRow - hIdx, 5).getValues();
  for (let i = 0; i < allData.length; i++) {
    const row = hIdx + 1 + i;
    const colA = allData[i][0].toString().trim();
    const colB = allData[i][1].toString().trim();
    
    // DETECCIÓN INTELIGENTE DE TÍTULO
    // 1. Está en la metalista
    // 2. ColA tiene texto y ColB está VACÍA (Estructura natural de tus secciones)
    // 3. Empieza con un emoji o flag
    const isEmoji = /^\u00a9|\u00ae|[\u2000-\u3300]|\ud83c[\ud000-\udfff]|\ud83d[\ud000-\udfff]|\ud83e[\ud000-\udfff]/.test(colA);
    const isMeta = metaTitles.includes(colA.toUpperCase());
    const isStructural = colA && !colB;

    if (isMeta || isStructural || isEmoji) {
      sh.getRange(row, 1, 1, 9).merge().setBackground('#4b5563').setFontColor('#ffffff').setFontWeight('bold');
    } else if (colA) {
      sh.getRange(row, 1).setFontWeight('bold').setHorizontalAlignment('center');
      sh.getRange(row, 9).setDataValidation(SpreadsheetApp.newDataValidation().requireCheckbox().build()).setHorizontalAlignment('center');
      sh.getRange(row, 6, 1, 3).merge();
      const stCell = sh.getRange(row, 5); stCell.setDataValidation(validation);
      const v = allData[i][4].toString().toLowerCase();
      if (v.includes("pasa")) stCell.setValue(chipList[1]);
      else if (v.includes("falla")) stCell.setValue(chipList[2]);
      else if (v.includes("bloq")) stCell.setValue(chipList[3]);
      else if (v.includes("auto")) stCell.setValue(chipList[4]);
      else stCell.setValue(chipList[0]);
    }
  }
  
  const sRange = sh.getRange(hIdx + 1, 5, lastRow - hIdx, 1);
  sh.setConditionalFormatRules(cVals.map(v => SpreadsheetApp.newConditionalFormatRule().whenTextEqualTo(v[0]).setBackground(v[1]).setFontColor("#ffffff").setRanges([sRange]).build()));
  const wds = [100, 90, 350, 250, 150, 80, 80, 80, 100]; wds.forEach((w, i) => sh.setColumnWidth(i + 1, w));
  if (sh.getMaxColumns() > 9) sh.deleteColumns(10, sh.getMaxColumns() - 9);
  if (sh.getMaxRows() > lastRow) sh.deleteRows(lastRow + 1, sh.getMaxRows() - lastRow);

  updateVersionDropdown(true);
  sh.activate();
  SpreadsheetApp.getUi().alert('✅ Matriz v14.1 Lista (Detección Auto de Secciones).');
}
