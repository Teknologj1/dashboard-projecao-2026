const XLSX = require('xlsx');
const fs = require('fs');
const path = require('path');

/**
 * Script para importar dados do arquivo Excel e gerar financialData.ts
 */
function importExcelData() {
  const excelPath = path.join(__dirname, '..', 'arquivo de dados.xlsx');
  
  if (!fs.existsSync(excelPath)) {
    console.error(`❌ Arquivo não encontrado: ${excelPath}`);
    process.exit(1);
  }

  console.log('📖 Lendo arquivo Excel...');
  const workbook = XLSX.readFile(excelPath);
  const sheetName = workbook.SheetNames[0];
  const worksheet = workbook.Sheets[sheetName];
  const data = XLSX.utils.sheet_to_json(worksheet, { header: 1, defval: '' });
  
  console.log(`✅ Planilha "${sheetName}" lida com sucesso!`);
  
  // Estrutura esperada:
  // Linha 0: Anos (2020, 2021, 2022, 2023, 2024, 2025)
  // Linha 1: Receita/Despesa para cada ano
  // Linha 2+: Meses com valores
  
  const years = [2020, 2021, 2022, 2023, 2024, 2025];
  const months = [
    'Janeiro', 'Fevereiro', 'março', 'abril', 'maio', 'junho',
    'julho', 'agosto', 'setembro', 'outubro', 'novembro', 'dezembro'
  ];
  
  // Mapeia colunas para anos
  // Coluna 0 = mês, Coluna 1 = 2020 receita, Coluna 2 = 2020 despesa, etc.
  const yearColumnMap = {};
  const headerRow = data[0] || [];
  
  years.forEach((year, yearIndex) => {
    // Procura a coluna do ano (colunas ímpares: 1, 3, 5, 7, 9, 11)
    const yearCol = yearIndex * 2 + 1;
    yearColumnMap[year] = {
      receita: yearCol,
      despesa: yearCol + 1
    };
  });
  
  const monthlyData = [];
  
  // Processa linhas de dados (começando da linha 2, índice 2)
  for (let rowIndex = 2; rowIndex < data.length; rowIndex++) {
    const row = data[rowIndex];
    if (!row || row.length === 0) continue;
    
    const monthName = row[0]?.toString().trim();
    if (!monthName) continue;
    
    // Verifica se é um mês válido
    const monthMatch = months.find(m => 
      m.toLowerCase() === monthName.toLowerCase() ||
      monthName.toLowerCase().includes(m.toLowerCase())
    );
    
    if (!monthMatch) continue;
    
    const monthData = {
      month: monthMatch,
      2020: { receita: 0, despesa: 0 },
      2021: { receita: 0, despesa: 0 },
      2022: { receita: 0, despesa: 0 },
      2023: { receita: 0, despesa: 0 },
      2024: { receita: 0, despesa: 0 },
      2025: { receita: 0, despesa: 0 },
      faturamentoTotal: 0,
      faturamentoMedio: 0,
      mediaDespesas: 0,
      lucroLiquidoMedio: 0,
    };
    
    // Extrai dados por ano
    years.forEach(year => {
      const cols = yearColumnMap[year];
      const receitaValue = parseFloat(row[cols.receita]?.toString().replace(/[^\d.,-]/g, '').replace(',', '.') || '0');
      const despesaValue = parseFloat(row[cols.despesa]?.toString().replace(/[^\d.,-]/g, '').replace(',', '.') || '0');
      
      monthData[year].receita = isNaN(receitaValue) ? 0 : receitaValue;
      monthData[year].despesa = isNaN(despesaValue) ? 0 : despesaValue;
    });
    
    // Calcula totais e médias
    const receitas = years.map(y => monthData[y].receita).filter(r => r > 0);
    const despesas = years.map(y => monthData[y].despesa).filter(d => d > 0);
    
    monthData.faturamentoTotal = receitas.reduce((a, b) => a + b, 0);
    monthData.faturamentoMedio = receitas.length > 0 ? monthData.faturamentoTotal / receitas.length : 0;
    monthData.mediaDespesas = despesas.length > 0 ? despesas.reduce((a, b) => a + b, 0) / despesas.length : 0;
    monthData.lucroLiquidoMedio = monthData.faturamentoMedio - monthData.mediaDespesas;
    
    monthlyData.push(monthData);
  }
  
  // Processa dados anuais
  const annualData = [];
  years.forEach(year => {
    const receita = monthlyData.reduce((sum, m) => sum + m[year].receita, 0);
    const despesa = monthlyData.reduce((sum, m) => sum + m[year].despesa, 0);
    const lucro = receita - despesa;
    
    annualData.push({
      year: year,
      receita: receita,
      despesa: despesa,
      lucro: lucro,
      faturamentoMedio: receita / 12,
      mediaDespesas: despesa / 12,
      lucroLiquidoMedio: lucro / 12,
    });
  });
  
  // Gera o arquivo TypeScript
  const outputPath = path.join(__dirname, '..', 'data', 'financialData.ts');
  const output = generateTypeScriptFile(monthlyData, annualData);
  
  fs.writeFileSync(outputPath, output, 'utf8');
  console.log(`✅ Arquivo gerado: ${outputPath}`);
  console.log(`📊 ${monthlyData.length} meses processados`);
  console.log(`📊 ${annualData.length} anos processados`);
  console.log('\n✅ Importação concluída com sucesso!');
}

function generateTypeScriptFile(monthlyData, annualData) {
  const formatNumber = (num) => {
    if (typeof num !== 'number' || isNaN(num)) return '0';
    return num.toFixed(2);
  };
  
  let output = `import { MonthlyData, AnnualData } from '@/types/data';\n\n`;
  output += `export const monthlyData: MonthlyData[] = [\n`;
  
  monthlyData.forEach((month, index) => {
    output += `  {\n`;
    output += `    month: '${month.month}',\n`;
    output += `    2020: { receita: ${formatNumber(month[2020].receita)}, despesa: ${formatNumber(month[2020].despesa)} },\n`;
    output += `    2021: { receita: ${formatNumber(month[2021].receita)}, despesa: ${formatNumber(month[2021].despesa)} },\n`;
    output += `    2022: { receita: ${formatNumber(month[2022].receita)}, despesa: ${formatNumber(month[2022].despesa)} },\n`;
    output += `    2023: { receita: ${formatNumber(month[2023].receita)}, despesa: ${formatNumber(month[2023].despesa)} },\n`;
    output += `    2024: { receita: ${formatNumber(month[2024].receita)}, despesa: ${formatNumber(month[2024].despesa)} },\n`;
    output += `    2025: { receita: ${formatNumber(month[2025].receita)}, despesa: ${formatNumber(month[2025].despesa)} },\n`;
    output += `    faturamentoTotal: ${formatNumber(month.faturamentoTotal)},\n`;
    output += `    faturamentoMedio: ${formatNumber(month.faturamentoMedio)},\n`;
    output += `    mediaDespesas: ${formatNumber(month.mediaDespesas)},\n`;
    output += `    lucroLiquidoMedio: ${formatNumber(month.lucroLiquidoMedio)},\n`;
    output += `  }${index < monthlyData.length - 1 ? ',' : ''}\n`;
  });
  
  output += `];\n\n`;
  output += `export const annualData: AnnualData[] = [\n`;
  
  annualData.forEach((year, index) => {
    output += `  {\n`;
    output += `    year: ${year.year},\n`;
    output += `    receita: ${formatNumber(year.receita)},\n`;
    output += `    despesa: ${formatNumber(year.despesa)},\n`;
    output += `    lucro: ${formatNumber(year.lucro)},\n`;
    output += `    faturamentoMedio: ${formatNumber(year.faturamentoMedio)},\n`;
    output += `    mediaDespesas: ${formatNumber(year.mediaDespesas)},\n`;
    output += `    lucroLiquidoMedio: ${formatNumber(year.lucroLiquidoMedio)},\n`;
    output += `  }${index < annualData.length - 1 ? ',' : ''}\n`;
  });
  
  output += `];\n`;
  
  return output;
}

// Executa o script
try {
  importExcelData();
} catch (error) {
  console.error('\n❌ Erro ao importar dados:', error);
  process.exit(1);
}
