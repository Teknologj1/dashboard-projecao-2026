const XLSX = require('xlsx');
const fs = require('fs');
const path = require('path');

/**
 * Processa todos os arquivos de despesas e gera dados consolidados
 */
function processExpenseFiles() {
  const dataDir = path.join(__dirname, '..', 'data', 'Despesas');
  if (!fs.existsSync(dataDir)) {
    console.error(`❌ Pasta não encontrada: ${dataDir}`);
    process.exit(1);
  }
  const files = fs.readdirSync(dataDir).filter(f => f.endsWith('.xlsx') && f.includes('Exportacao_financeira'));
  
  console.log(`📊 Processando ${files.length} arquivos de despesas...\n`);
  
  const relatorios = [];
  const meses = [
    'Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho',
    'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'
  ];
  
  // Processa cada arquivo
  files.forEach((fileName, index) => {
    try {
      // Extrai informações do nome do arquivo
      const match = fileName.match(/(\d{4})-(\d{2})-(\d{2})-(\d{4})-(\d{2})-(\d{2})/);
      if (!match) {
        console.warn(`⚠️  Não foi possível extrair data de: ${fileName}`);
        return;
      }
      
      const [, anoInicio, mesInicio] = match;
      const ano = parseInt(anoInicio);
      const mes = parseInt(mesInicio);
      const mesNome = meses[mes - 1];
      
      // Lê o arquivo
      const filePath = path.join(dataDir, fileName);
      const workbook = XLSX.readFile(filePath);
      const sheetName = workbook.SheetNames[0];
      const worksheet = workbook.Sheets[sheetName];
      const data = XLSX.utils.sheet_to_json(worksheet, { header: 1, defval: '' });
      
      if (data.length < 2) {
        console.warn(`⚠️  Arquivo vazio ou inválido: ${fileName}`);
        return;
      }
      
      // Processa dados - estrutura esperada: [Categoria, Descrição, Data, Valor, ...]
      const despesas = [];
      const categorias = new Set();
      
      for (let i = 1; i < data.length; i++) {
        const row = data[i];
        if (!row || row.length < 4) continue;
        
        // Estrutura do arquivo:
        // Col 0: Tipo
        // Col 1: Categoria
        // Col 2: Descrição
        // Col 7: Valor
        // Col 14: Valor Líquido (usar este)
        
        const tipo = row[0]?.toString().trim() || '';
        const categoria = row[1]?.toString().trim() || '';
        const descricao = row[2]?.toString().trim() || '';
        
        // Filtra apenas despesas (ignora receitas se houver)
        if (tipo && !tipo.toLowerCase().includes('despesa')) continue;
        
        // Usa Valor Líquido (coluna 14) se disponível, senão usa Valor (coluna 7)
        let valorCell = row[14] !== undefined && row[14] !== '' ? row[14] : row[7];
        
        if (valorCell === undefined || valorCell === '') continue;
        
        // Converte para número
        let valor = 0;
        if (typeof valorCell === 'number') {
          valor = Math.abs(valorCell);
        } else {
          const valorStr = valorCell.toString().replace(/[^\d.,-]/g, '').replace(',', '.');
          valor = parseFloat(valorStr);
        }
        
        if (isNaN(valor) || valor <= 0) continue;
        
        const categoriaFinal = categoria || 'Outras';
        categorias.add(categoriaFinal);
        
        despesas.push({
          categoria: categoriaFinal,
          descricao: descricao || 'Sem descrição',
          valor: valor,
        });
      }
      
      // Busca ou cria relatório mensal
      let relatorio = relatorios.find(r => r.ano === ano && r.mes === mes);
      
      if (!relatorio) {
        relatorio = {
          ano: ano,
          mes: mes,
          mesNome: mesNome,
          despesas: [],
          totalDespesas: 0,
          totalPorCategoria: {},
        };
        relatorios.push(relatorio);
      }
      
      // Adiciona despesas ao relatório
      relatorio.despesas.push(...despesas);
      
      if ((index + 1) % 10 === 0) {
        console.log(`   Processados ${index + 1}/${files.length} arquivos...`);
      }
    } catch (error) {
      console.error(`❌ Erro ao processar ${fileName}:`, error.message);
    }
  });
  
  // Ordena relatórios por ano e mês
  relatorios.sort((a, b) => {
    if (a.ano !== b.ano) return a.ano - b.ano;
    return a.mes - b.mes;
  });
  
  // Calcula totais e consolidações
  const categoriasGeral = new Set();
  let totalGeral = 0;
  const totalPorAno = {};
  const totalPorCategoriaGeral = {};
  
  relatorios.forEach(relatorio => {
    // Calcula totais por categoria
    relatorio.despesas.forEach(despesa => {
      const cat = despesa.categoria;
      categoriasGeral.add(cat);
      relatorio.totalPorCategoria[cat] = (relatorio.totalPorCategoria[cat] || 0) + despesa.valor;
      totalPorCategoriaGeral[cat] = (totalPorCategoriaGeral[cat] || 0) + despesa.valor;
    });
    
    // Calcula total do mês
    relatorio.totalDespesas = relatorio.despesas.reduce((sum, d) => sum + d.valor, 0);
    
    // Total por ano
    totalPorAno[relatorio.ano] = (totalPorAno[relatorio.ano] || 0) + relatorio.totalDespesas;
    totalGeral += relatorio.totalDespesas;
  });
  
  // Cria estrutura consolidada
  const dadosConsolidados = {
    relatorios: relatorios,
    categorias: Array.from(categoriasGeral).sort(),
    totalGeral: totalGeral,
    totalPorAno: totalPorAno,
    totalPorCategoriaGeral: totalPorCategoriaGeral,
  };
  
  // Gera arquivo TypeScript
  const outputPath = path.join(__dirname, '..', 'data', 'expenseData.ts');
  const output = generateTypeScriptFile(dadosConsolidados);
  
  fs.writeFileSync(outputPath, output, 'utf8');
  
  console.log(`\n✅ Processamento concluído!`);
  console.log(`📊 Total de relatórios: ${relatorios.length}`);
  console.log(`📊 Total geral: R$ ${totalGeral.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}`);
  console.log(`📊 Categorias únicas: ${categoriasGeral.size}`);
  console.log(`\n✅ Arquivo gerado: ${outputPath}`);
}

function generateTypeScriptFile(dados) {
  const formatNumber = (num) => {
    if (typeof num !== 'number' || isNaN(num)) return '0';
    return num.toFixed(2);
  };
  
  let output = `import { DadosDespesasConsolidados } from '@/types/expenses';\n\n`;
  output += `export const expenseData: DadosDespesasConsolidados = {\n`;
  
  // Relatórios
  output += `  relatorios: [\n`;
  dados.relatorios.forEach((rel, index) => {
    output += `    {\n`;
    output += `      ano: ${rel.ano},\n`;
    output += `      mes: ${rel.mes},\n`;
    output += `      mesNome: '${rel.mesNome}',\n`;
    output += `      totalDespesas: ${formatNumber(rel.totalDespesas)},\n`;
    output += `      totalPorCategoria: ${JSON.stringify(rel.totalPorCategoria, null, 8).replace(/\n/g, '\n      ')},\n`;
    output += `      despesas: [], // Dados detalhados não incluídos para reduzir tamanho\n`;
    output += `    }${index < dados.relatorios.length - 1 ? ',' : ''}\n`;
  });
  output += `  ],\n\n`;
  
  // Categorias
  output += `  categorias: ${JSON.stringify(dados.categorias)},\n\n`;
  
  // Total geral
  output += `  totalGeral: ${formatNumber(dados.totalGeral)},\n\n`;
  
  // Total por ano
  output += `  totalPorAno: ${JSON.stringify(dados.totalPorAno)},\n\n`;
  
  // Total por categoria
  output += `  totalPorCategoriaGeral: ${JSON.stringify(dados.totalPorCategoriaGeral, null, 2).replace(/\n/g, '\n  ')},\n`;
  
  output += `};\n`;
  
  return output;
}

// Executa o script
try {
  processExpenseFiles();
} catch (error) {
  console.error('\n❌ Erro ao processar arquivos:', error);
  process.exit(1);
}

