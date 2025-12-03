import { DadosConsolidados, RelatorioMensal } from '@/types/reports';
import { reportData } from '@/data/reportData';

/**
 * Utilitários para trabalhar com dados dos relatórios
 */

/**
 * Obtém relatórios por ano
 */
export function getRelatoriosPorAno(ano: number): RelatorioMensal[] {
  return reportData.relatorios.filter(r => r.ano === ano);
}

/**
 * Obtém relatório por ano e mês
 */
export function getRelatorioPorMes(ano: number, mes: number): RelatorioMensal | undefined {
  return reportData.relatorios.find(r => r.ano === ano && r.mes === mes);
}

/**
 * Obtém totais por especialidade em um período
 */
export function getTotaisPorEspecialidade(
  anoInicio?: number,
  anoFim?: number
): Record<string, number> {
  const relatorios = reportData.relatorios.filter(r => {
    if (anoInicio && r.ano < anoInicio) return false;
    if (anoFim && r.ano > anoFim) return false;
    return true;
  });

  const totais: Record<string, number> = {};
  
  relatorios.forEach(relatorio => {
    Object.entries(relatorio.totalPorEspecialidade).forEach(([esp, valor]) => {
      totais[esp] = (totais[esp] || 0) + valor;
    });
  });

  return totais;
}

/**
 * Obtém totais por tratamento em um período
 */
export function getTotaisPorTratamento(
  anoInicio?: number,
  anoFim?: number
): Record<string, number> {
  const relatorios = reportData.relatorios.filter(r => {
    if (anoInicio && r.ano < anoInicio) return false;
    if (anoFim && r.ano > anoFim) return false;
    return true;
  });

  const totais: Record<string, number> = {};
  
  relatorios.forEach(relatorio => {
    Object.entries(relatorio.totalPorTratamento).forEach(([trat, valor]) => {
      totais[trat] = (totais[trat] || 0) + valor;
    });
  });

  return totais;
}

/**
 * Obtém evolução mensal de vendas
 */
export function getEvolucaoMensal(anoInicio?: number, anoFim?: number): Array<{
  periodo: string;
  ano: number;
  mes: number;
  total: number;
}> {
  return reportData.relatorios
    .filter(r => {
      if (anoInicio && r.ano < anoInicio) return false;
      if (anoFim && r.ano > anoFim) return false;
      return true;
    })
    .map(r => ({
      periodo: `${r.mesNome}/${r.ano}`,
      ano: r.ano,
      mes: r.mes,
      total: r.totalVendas,
    }));
}

/**
 * Obtém top especialidades
 */
export function getTopEspecialidades(
  limite: number = 10,
  anoInicio?: number,
  anoFim?: number
): Array<{ especialidade: string; total: number; percentual: number }> {
  const totais = getTotaisPorEspecialidade(anoInicio, anoFim);
  const totalGeral = Object.values(totais).reduce((sum, val) => sum + val, 0);
  
  return Object.entries(totais)
    .map(([esp, total]) => ({
      especialidade: esp,
      total,
      percentual: totalGeral > 0 ? (total / totalGeral) * 100 : 0,
    }))
    .sort((a, b) => b.total - a.total)
    .slice(0, limite);
}

/**
 * Obtém top tratamentos
 */
export function getTopTratamentos(
  limite: number = 10,
  anoInicio?: number,
  anoFim?: number
): Array<{ tratamento: string; total: number; percentual: number }> {
  const totais = getTotaisPorTratamento(anoInicio, anoFim);
  const totalGeral = Object.values(totais).reduce((sum, val) => sum + val, 0);
  
  return Object.entries(totais)
    .map(([trat, total]) => ({
      tratamento: trat,
      total,
      percentual: totalGeral > 0 ? (total / totalGeral) * 100 : 0,
    }))
    .sort((a, b) => b.total - a.total)
    .slice(0, limite);
}

/**
 * Obtém estatísticas gerais
 */
export function getEstatisticasGerais() {
  return {
    totalGeral: reportData.totalGeral,
    totalPorAno: reportData.totalPorAno,
    quantidadeEspecialidades: reportData.especialidades.length,
    quantidadeTratamentos: reportData.tratamentos.length,
    quantidadeMeses: reportData.relatorios.length,
    mediaMensal: reportData.totalGeral / reportData.relatorios.length,
  };
}

