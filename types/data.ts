export interface MonthlyData {
  month: string;
  2020: {
    receita: number;
    despesa: number;
  };
  2021: {
    receita: number;
    despesa: number;
  };
  2022: {
    receita: number;
    despesa: number;
  };
  2023: {
    receita: number;
    despesa: number;
  };
  2024: {
    receita: number;
    despesa: number;
  };
  2025: {
    receita: number;
    despesa: number;
  };
  faturamentoTotal: number;
  faturamentoMedio: number;
  mediaDespesas: number;
  lucroLiquidoMedio: number;
}

export interface AnnualData {
  year: number;
  receita: number;
  despesa: number;
  lucro: number;
  faturamentoMedio: number;
  mediaDespesas: number;
  lucroLiquidoMedio: number;
}

export interface Projection2026 {
  month: string;
  receita: number;
  despesa: number;
  lucro: number;
}

export type ProjectionType = 'ideal' | 'perspectiva30';

export interface ProjectionComparison {
  ideal: Projection2026[];
  perspectiva30: Projection2026[];
}

