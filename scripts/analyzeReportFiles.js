const XLSX = require('xlsx');
const fs = require('fs');
const path = require('path');

/**
 * Analisa a estrutura dos arquivos de relatório
 */
function analyzeReportFiles() {
  const dataDir = path.join(__dirname, '..', 'data');
  const files = fs.readdirSync(dataDir).filter(f => f.endsWith('.xlsx') && f.includes('Relatorio_de_vendas'));
  
  console.log(`📊 Total de arquivos encontrados: ${files.length}\n`);
  
  // Agrupa por tipo
  const porEspecialidade = files.filter(f => f.includes('por_especialidade'));
  const porTratamento = files.filter(f => f.includes('por_tratamento'));
  
  console.log(`📋 Por Especialidade: ${porEspecialidade.length}`);
  console.log(`📋 Por Tratamento: ${porTratamento.length}\n`);
  
  // Analisa alguns arquivos de exemplo
  const exemplos = [
    porEspecialidade[0],
    porEspecialidade[Math.floor(porEspecialidade.length / 2)],
    porTratamento[0],
    porTratamento[Math.floor(porTratamento.length / 2)],
  ].filter(Boolean);
  
  exemplos.forEach((fileName, index) => {
    console.log(`\n${'='.repeat(60)}`);
    console.log(`📄 Exemplo ${index + 1}: ${fileName}`);
    console.log('='.repeat(60));
    
    const filePath = path.join(dataDir, fileName);
    const workbook = XLSX.readFile(filePath);
    
    console.log(`\n📋 Planilhas: ${workbook.SheetNames.join(', ')}`);
    
    workbook.SheetNames.forEach((sheetName) => {
      const worksheet = workbook.Sheets[sheetName];
      const data = XLSX.utils.sheet_to_json(worksheet, { header: 1, defval: '' });
      
      console.log(`\n📊 Planilha: "${sheetName}"`);
      console.log(`   Total de linhas: ${data.length}`);
      
      // Mostra primeiras linhas
      console.log(`\n   Primeiras 5 linhas:`);
      data.slice(0, 5).forEach((row, i) => {
        const preview = row.slice(0, 8).map(cell => 
          cell?.toString().substring(0, 15) || ''
        ).join(' | ');
        console.log(`   Linha ${i + 1}: ${preview}`);
      });
      
      // Analisa cabeçalhos
      if (data.length > 0) {
        console.log(`\n   Cabeçalhos (primeira linha):`);
        data[0].forEach((cell, col) => {
          if (cell && cell.toString().trim()) {
            console.log(`     Coluna ${col}: "${cell}"`);
          }
        });
      }
    });
  });
  
  // Extrai informações do nome do arquivo
  console.log(`\n${'='.repeat(60)}`);
  console.log('📅 Análise de Períodos');
  console.log('='.repeat(60));
  
  const periodos = new Set();
  files.forEach(fileName => {
    const match = fileName.match(/(\d{4}-\d{2}-\d{2})-(\d{4}-\d{2}-\d{2})/);
    if (match) {
      const [, inicio, fim] = match;
      const ano = inicio.split('-')[0];
      const mes = inicio.split('-')[1];
      periodos.add(`${ano}-${mes}`);
    }
  });
  
  const periodosOrdenados = Array.from(periodos).sort();
  console.log(`\n📅 Períodos encontrados: ${periodosOrdenados.length}`);
  console.log(`   Primeiro: ${periodosOrdenados[0]}`);
  console.log(`   Último: ${periodosOrdenados[periodosOrdenados.length - 1]}`);
  console.log(`\n   Todos os períodos:`);
  periodosOrdenados.forEach((p, i) => {
    if (i % 12 === 0) console.log();
    process.stdout.write(`${p} `);
  });
  console.log('\n');
}

try {
  analyzeReportFiles();
} catch (error) {
  console.error('\n❌ Erro ao analisar arquivos:', error);
  process.exit(1);
}

