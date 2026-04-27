const XLSX = require('xlsx');
const fs = require('fs');
const path = require('path');

/**
 * Analisa a estrutura dos arquivos de despesas
 */
function analyzeExpenseFiles() {
  const dataDir = path.join(__dirname, '..', 'data', 'Despesas');
  if (!fs.existsSync(dataDir)) {
    console.error(`❌ Pasta não encontrada: ${dataDir}`);
    process.exit(1);
  }
  const files = fs.readdirSync(dataDir).filter(f => f.endsWith('.xlsx') && f.includes('Exportacao_financeira'));
  
  console.log(`📊 Analisando ${files.length} arquivos de despesas...\n`);
  
  // Analisa apenas o primeiro arquivo como exemplo
  if (files.length > 0) {
    const fileName = files[0];
    const filePath = path.join(dataDir, fileName);
    
    console.log(`📄 Analisando: ${fileName}\n`);
    
    const workbook = XLSX.readFile(filePath);
    const sheetName = workbook.SheetNames[0];
    const worksheet = workbook.Sheets[sheetName];
    const data = XLSX.utils.sheet_to_json(worksheet, { header: 1, defval: '' });
    
    console.log(`📊 Total de linhas: ${data.length}\n`);
    console.log(`📊 Primeiras 10 linhas:\n`);
    
    for (let i = 0; i < Math.min(10, data.length); i++) {
      const row = data[i];
      console.log(`Linha ${i + 1}:`, JSON.stringify(row, null, 2));
    }
    
    console.log(`\n📊 Estrutura das colunas (primeira linha como header):\n`);
    if (data.length > 0) {
      const header = data[0];
      header.forEach((col, index) => {
        console.log(`  Coluna ${index}: "${col}"`);
      });
    }
  }
}

try {
  analyzeExpenseFiles();
} catch (error) {
  console.error('\n❌ Erro ao analisar arquivos:', error);
  process.exit(1);
}

