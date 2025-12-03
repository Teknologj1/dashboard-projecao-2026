const XLSX = require('xlsx');
const fs = require('fs');
const path = require('path');

/**
 * Processa todos os arquivos de relatório e gera dados consolidados
 */
function processReportFiles() {
  const dataDir = path.join(__dirname, '..', 'data');
  const files = fs.readdirSync(dataDir).filter(f => f.endsWith('.xlsx') && f.includes('Relatorio_de_vendas'));
  
  console.log(`📊 Processando ${files.length} arquivos...\n`);
  
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
      
      // Determina tipo de relatório
      const isEspecialidade = fileName.includes('por_especialidade');
      const tipo = isEspecialidade ? 'especialidade' : 'tratamento';
      
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
      
      // Processa dados
      const vendas = [];
      for (let i = 1; i < data.length; i++) {
        const row = data[i];
        if (!row || row.length < 5) continue;
        
        const valorStr = row[4]?.toString().replace(/[^\d.,-]/g, '').replace(',', '.') || '0';
        const valor = parseFloat(valorStr);
        
        if (isNaN(valor) || valor <= 0) continue;
        
        if (isEspecialidade) {
          vendas.push({
            especialidade: row[0]?.toString().trim() || '',
            dataVenda: row[1]?.toString().trim() || '',
            paciente: row[2]?.toString().trim() || '',
            tratamento: row[3]?.toString().trim() || '',
            valor: valor,
          });
        } else {
          vendas.push({
            tratamento: row[0]?.toString().trim() || '',
            dataVenda: row[1]?.toString().trim() || '',
            paciente: row[2]?.toString().trim() || '',
            plano: row[3]?.toString().trim() || '',
            valor: valor,
          });
        }
      }
      
      // Busca ou cria relatório mensal
      let relatorio = relatorios.find(r => r.ano === ano && r.mes === mes);
      
      if (!relatorio) {
        relatorio = {
          ano: ano,
          mes: mes,
          mesNome: mesNome,
          vendasPorEspecialidade: [],
          vendasPorTratamento: [],
          totalVendas: 0,
          totalPorEspecialidade: {},
          totalPorTratamento: {},
          tratamentosPorEspecialidade: {},
        };
        relatorios.push(relatorio);
      }
      
      // Adiciona vendas ao relatório
      if (isEspecialidade) {
        relatorio.vendasPorEspecialidade.push(...vendas);
      } else {
        relatorio.vendasPorTratamento.push(...vendas);
      }
      
      if ((index + 1) % 20 === 0) {
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
  const especialidades = new Set();
  const tratamentos = new Set();
  let totalGeral = 0;
  const totalPorAno = {};
  const totalPorEspecialidadeGeral = {};
  const totalPorTratamentoGeral = {};
  
  relatorios.forEach(relatorio => {
    // Inicializa mapeamento de tratamentos por especialidade
    if (!relatorio.tratamentosPorEspecialidade) {
      relatorio.tratamentosPorEspecialidade = {};
    }
    
    // Calcula totais por especialidade e cria mapeamento especialidade -> tratamentos
    relatorio.vendasPorEspecialidade.forEach(venda => {
      const esp = venda.especialidade;
      const trat = venda.tratamento;
      if (esp) {
        especialidades.add(esp);
        relatorio.totalPorEspecialidade[esp] = (relatorio.totalPorEspecialidade[esp] || 0) + venda.valor;
        totalPorEspecialidadeGeral[esp] = (totalPorEspecialidadeGeral[esp] || 0) + venda.valor;
        
        // Cria mapeamento especialidade -> tratamento
        if (!relatorio.tratamentosPorEspecialidade[esp]) {
          relatorio.tratamentosPorEspecialidade[esp] = {};
        }
        if (trat) {
          relatorio.tratamentosPorEspecialidade[esp][trat] = 
            (relatorio.tratamentosPorEspecialidade[esp][trat] || 0) + venda.valor;
        }
      }
    });
    
    // Calcula totais por tratamento (apenas para referência, não deve ser somado ao total)
    relatorio.vendasPorTratamento.forEach(venda => {
      const trat = venda.tratamento;
      if (trat) {
        tratamentos.add(trat);
        // Não soma ao totalPorTratamento pois já está incluído nas especialidades
        // Mantém apenas para referência
        if (!relatorio.totalPorTratamento[trat]) {
          relatorio.totalPorTratamento[trat] = 0;
        }
        relatorio.totalPorTratamento[trat] += venda.valor;
        totalPorTratamentoGeral[trat] = (totalPorTratamentoGeral[trat] || 0) + venda.valor;
      }
    });
    
    // Calcula total do mês (apenas das especialidades, pois tratamentos já estão incluídos)
    const totalMes = 
      Object.values(relatorio.totalPorEspecialidade).reduce((sum, val) => sum + val, 0);
    relatorio.totalVendas = totalMes;
    
    // Total por ano
    totalPorAno[relatorio.ano] = (totalPorAno[relatorio.ano] || 0) + totalMes;
    totalGeral += totalMes;
  });
  
  // Cria estrutura consolidada
  const dadosConsolidados = {
    relatorios: relatorios,
    especialidades: Array.from(especialidades).sort(),
    tratamentos: Array.from(tratamentos).sort(),
    totalGeral: totalGeral,
    totalPorAno: totalPorAno,
    totalPorEspecialidadeGeral: totalPorEspecialidadeGeral,
    totalPorTratamentoGeral: totalPorTratamentoGeral,
  };
  
  // Gera arquivo TypeScript
  const outputPath = path.join(__dirname, '..', 'data', 'reportData.ts');
  const output = generateTypeScriptFile(dadosConsolidados);
  
  fs.writeFileSync(outputPath, output, 'utf8');
  
  console.log(`\n✅ Processamento concluído!`);
  console.log(`📊 Total de relatórios: ${relatorios.length}`);
  console.log(`📊 Total geral: R$ ${totalGeral.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}`);
  console.log(`📊 Especialidades únicas: ${especialidades.size}`);
  console.log(`📊 Tratamentos únicos: ${tratamentos.size}`);
  console.log(`\n✅ Arquivo gerado: ${outputPath}`);
}

function generateTypeScriptFile(dados) {
  const formatNumber = (num) => {
    if (typeof num !== 'number' || isNaN(num)) return '0';
    return num.toFixed(2);
  };
  
  let output = `import { DadosConsolidados } from '@/types/reports';\n\n`;
  output += `export const reportData: DadosConsolidados = {\n`;
  
  // Relatórios
  output += `  relatorios: [\n`;
  dados.relatorios.forEach((rel, index) => {
    output += `    {\n`;
    output += `      ano: ${rel.ano},\n`;
    output += `      mes: ${rel.mes},\n`;
    output += `      mesNome: '${rel.mesNome}',\n`;
    output += `      totalVendas: ${formatNumber(rel.totalVendas)},\n`;
    output += `      totalPorEspecialidade: ${JSON.stringify(rel.totalPorEspecialidade, null, 8).replace(/\n/g, '\n      ')},\n`;
    output += `      totalPorTratamento: ${JSON.stringify(rel.totalPorTratamento, null, 8).replace(/\n/g, '\n      ')},\n`;
    output += `      tratamentosPorEspecialidade: ${JSON.stringify(rel.tratamentosPorEspecialidade || {}, null, 8).replace(/\n/g, '\n      ')},\n`;
    output += `      vendasPorEspecialidade: [], // Dados detalhados não incluídos para reduzir tamanho\n`;
    output += `      vendasPorTratamento: [], // Dados detalhados não incluídos para reduzir tamanho\n`;
    output += `    }${index < dados.relatorios.length - 1 ? ',' : ''}\n`;
  });
  output += `  ],\n\n`;
  
  // Especialidades
  output += `  especialidades: ${JSON.stringify(dados.especialidades)},\n\n`;
  
  // Tratamentos
  output += `  tratamentos: ${JSON.stringify(dados.tratamentos)},\n\n`;
  
  // Total geral
  output += `  totalGeral: ${formatNumber(dados.totalGeral)},\n\n`;
  
  // Total por ano
  output += `  totalPorAno: ${JSON.stringify(dados.totalPorAno)},\n\n`;
  
  // Total por especialidade
  output += `  totalPorEspecialidadeGeral: ${JSON.stringify(dados.totalPorEspecialidadeGeral, null, 2).replace(/\n/g, '\n  ')},\n\n`;
  
  // Total por tratamento
  output += `  totalPorTratamentoGeral: ${JSON.stringify(dados.totalPorTratamentoGeral, null, 2).replace(/\n/g, '\n  ')},\n`;
  
  output += `};\n`;
  
  return output;
}

// Executa o script
try {
  processReportFiles();
} catch (error) {
  console.error('\n❌ Erro ao processar arquivos:', error);
  process.exit(1);
}

