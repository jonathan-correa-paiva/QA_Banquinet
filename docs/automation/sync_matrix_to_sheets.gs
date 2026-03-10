/**
 * Script para importar automáticamente la matriz de QA (CSV) a Google Sheets.
 * Versión: 2.0 (Dual-Status Sync)
 */

function importQAMatrix() {
  // CONFIGURACIÓN
  // 1. URL del CSV (ej: Raw link de GitHub o archivo en Drive)
  const csvUrl = "PONER_URL_DE_TU_CSV_AQUIS"; 
  const sheetName = "Matriz v1.0.1+20"; // Nombre de la pestaña destino
  
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  let sheet = ss.getSheetByName(sheetName);
  
  if (!sheet) {
    sheet = ss.insertSheet(sheetName);
  }

  // OBTENER DATOS
  try {
    const response = UrlFetchApp.fetch(csvUrl);
    const csvData = Utilities.parseCsv(response.getContentText());
    
    // LIMPIAR Y PEGAR
    sheet.clear();
    sheet.getRange(1, 1, csvData.length, csvData[0].length).setValues(csvData);
    
    // FORMATO BÁSICO
    formatSheet(sheet, csvData.length);
    
    SpreadsheetApp.getUi().alert('✅ Importación completa para ' + sheetName);
  } catch (e) {
    Logger.log(e.toString());
    SpreadsheetApp.getUi().alert('❌ Error al importar: ' + e.toString());
  }
}

function formatSheet(sheet, lastRow) {
  const headerRange = sheet.getRange("A2:I2");
  headerRange.setBackground("#333333").setFontColor("#FFFFFF").setFontWeight("bold");
  
  // Ajustar ancho de columnas
  sheet.setColumnWidth(1, 100); // ID
  sheet.setColumnWidth(2, 120); // Módulo
  sheet.setColumnWidth(3, 400); // Descripción
  sheet.setColumnWidth(5, 100); // Tipo Autom.
  sheet.setColumnWidth(6, 120); // Estado Test
  
  // Colores condicionales para la columna F (Estado Test)
  const range = sheet.getRange(3, 6, lastRow - 2);
  const rules = SpreadsheetApp.newConditionalFormatRule()
    .whenTextEqualTo("OK (v20)")
    .setBackground("#D9EAD3")
    .setFontColor("#274E13")
    .setRanges([range])
    .build();
    
  const rulesFalla = SpreadsheetApp.newConditionalFormatRule()
    .whenTextEqualTo("Falla")
    .setBackground("#F4CCCC")
    .setFontColor("#990000")
    .setRanges([range])
    .build();

  const rulesAutoVer = SpreadsheetApp.newConditionalFormatRule()
    .whenTextEqualTo("Automático Verificado")
    .setBackground("#CFE2F3")
    .setFontColor("#0B5394")
    .setRanges([range])
    .build();

  sheet.setConditionalFormatRules([rules, rulesFalla, rulesAutoVer]);
  sheet.setFrozenRows(2);
}

/**
 * Agrega un menú personalizado a la hoja al abrir.
 */
function onOpen() {
  const ui = SpreadsheetApp.getUi();
  ui.createMenu('🛠️ QA Banquinet')
      .addItem('Sincronizar Matriz (v20)', 'importQAMatrix')
      .addToUi();
}
