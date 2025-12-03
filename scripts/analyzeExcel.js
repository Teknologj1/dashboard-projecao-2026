const XLSX = require('xlsx');
const fs = require('fs');
const path = require('path');

/**
 * Script para analisar a estrutura do arquivo Excel
 */
function analyzeExcel() {
  const excelPath = path.join(__dirname, '..', 'arquivo de dados.xlsx');
  
  if (!fs.existsSync(excelPath)) {
    console.error(`❌ Arquivo não encontrado: ${excelPath}`);
    process.exit(1);
  }

  console.log('📖 Analisando arquivo Excel...\n');
  const workbook = XLSX.readFile(excelPath);
  
  console.log(`📋 Planilhas encontradas: ${workbook.SheetNames.join(', ')}\n`);
  
  workbook.SheetNames.forEach((sheetName, index) => {
    console.log(`\n📊 Planilha ${index + 1}: "${sheetName}"`);
    const worksheet = workbook.Sheets[sheetName];
    const data = XLSX.utils.sheet_to_json(worksheet, { header: 1, defval: '' });
    
    console.log(`   Total de linhas: ${data.length}`);
    console.log(`   Primeiras 5 linhas:\n`);
    
    data.slice(0, 5).forEach((row, i) => {
      console.log(`   Linha ${i + 1}:`, row.slice(0, 10).map(cell => 
        cell?.toString().substring(0, 20) || ''
      ).join(' | '));
    });
    
    // Analisa cabeçalhos
    if (data.length > 0) {
      console.log(`\n   Cabeçalhos encontrados (primeira linha):`);
      data[0].forEach((cell, col) => {
        if (cell && cell.toString().trim()) {
          console.log(`     Coluna ${col}: "${cell}"`);
        }
      });
    }
  });
}

try {
  analyzeExcel();
} catch (error) {
  console.error('\n❌ Erro ao analisar Excel:', error);
  process.exit(1);
}

