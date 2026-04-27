/**
 * Tipos para dados dos relatórios de despesas
 */

export interface Despesa {
  categoria: string;
  descricao: string;
  valor: number;
}

export interface RelatorioDespesasMensal {
  ano: number;
  mes: number;
  mesNome: string;
  despesas: Despesa[];
  totalDespesas: number;
  totalPorCategoria: Record<string, number>;
}

export interface DadosDespesasConsolidados {
  relatorios: RelatorioDespesasMensal[];
  categorias: string[];
  totalGeral: number;
  totalPorAno: Record<number, number>;
  totalPorCategoriaGeral: Record<string, number>;
}

