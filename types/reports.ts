/**
 * Tipos para dados dos relatórios de vendas
 */

export interface VendaPorEspecialidade {
  especialidade: string;
  dataVenda: string;
  paciente: string;
  tratamento: string;
  valor: number;
}

export interface VendaPorTratamento {
  tratamento: string;
  dataVenda: string;
  paciente: string;
  plano: string;
  valor: number;
}

export interface RelatorioMensal {
  ano: number;
  mes: number;
  mesNome: string;
  vendasPorEspecialidade: VendaPorEspecialidade[];
  vendasPorTratamento: VendaPorTratamento[];
  totalVendas: number;
  totalPorEspecialidade: Record<string, number>;
  totalPorTratamento: Record<string, number>;
  tratamentosPorEspecialidade: Record<string, Record<string, number>>; // especialidade -> tratamento -> valor
}

export interface DadosConsolidados {
  relatorios: RelatorioMensal[];
  especialidades: string[];
  tratamentos: string[];
  totalGeral: number;
  totalPorAno: Record<number, number>;
  totalPorEspecialidadeGeral: Record<string, number>;
  totalPorTratamentoGeral: Record<string, number>;
}

