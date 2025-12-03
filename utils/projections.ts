import { MonthlyData, Projection2026, ProjectionType, ProjectionComparison } from '@/types/data';
import { monthlyData } from '@/data/financialData';

/**
 * Calcula projeção IDEAL para 2026 baseado em:
 * 1. Média dos últimos 3 anos (2023-2025) para cada mês
 * 2. Tendência de crescimento/declínio
 * 3. Sazonalidade histórica
 */
export function calculateProjections2026Ideal(): Projection2026[] {
  const projections: Projection2026[] = [];

  monthlyData.forEach((monthData) => {
    // Calcula média dos últimos 3 anos (2023-2025)
    const receitas = [
      monthData[2023].receita,
      monthData[2024].receita,
      monthData[2025].receita,
    ].filter(r => r > 0); // Remove zeros (dezembro 2025)

    const despesas = [
      monthData[2023].despesa,
      monthData[2024].despesa,
      monthData[2025].despesa,
    ].filter(d => d > 0);

    // Média simples dos últimos 3 anos (ou usa faturamento médio histórico se não houver dados suficientes)
    const receitaMedia = receitas.length > 0
      ? receitas.reduce((a, b) => a + b, 0) / receitas.length
      : monthData.faturamentoMedio;
    const despesaMedia = despesas.length > 0
      ? despesas.reduce((a, b) => a + b, 0) / despesas.length
      : monthData.mediaDespesas;

    // Calcula tendência (crescimento médio dos últimos 2 anos)
    const receita2024 = monthData[2024].receita;
    const receita2025 = monthData[2025].receita || receita2024;
    const tendenciaReceita = receita2025 > 0 && receita2024 > 0 
      ? (receita2025 - receita2024) / receita2024 
      : 0;

    const despesa2024 = monthData[2024].despesa;
    const despesa2025 = monthData[2025].despesa || despesa2024;
    const tendenciaDespesa = despesa2025 > 0 && despesa2024 > 0
      ? (despesa2025 - despesa2024) / despesa2024
      : 0;

    // Aplica tendência suavizada (50% da tendência + 50% da média)
    const receitaProjetada = receitaMedia * (1 + tendenciaReceita * 0.5);
    const despesaProjetada = despesaMedia * (1 + tendenciaDespesa * 0.5);

    projections.push({
      month: monthData.month,
      receita: Math.round(receitaProjetada * 100) / 100,
      despesa: Math.round(despesaProjetada * 100) / 100,
      lucro: Math.round((receitaProjetada - despesaProjetada) * 100) / 100,
    });
  });

  return projections;
}

/**
 * Calcula projeção PERSPECTIVA 30% para 2026
 * Aplica crescimento de 30% na receita em relação à projeção ideal
 * Mantém despesas proporcionais (aumento controlado de 10%)
 */
export function calculateProjections2026Perspectiva30(): Projection2026[] {
  const idealProjections = calculateProjections2026Ideal();
  
  return idealProjections.map(projection => {
    // Receita com crescimento de 30%
    const receitaPerspectiva = projection.receita * 1.30;
    // Despesa com aumento controlado de 10% (para suportar o crescimento)
    const despesaPerspectiva = projection.despesa * 1.10;
    
    return {
      month: projection.month,
      receita: Math.round(receitaPerspectiva * 100) / 100,
      despesa: Math.round(despesaPerspectiva * 100) / 100,
      lucro: Math.round((receitaPerspectiva - despesaPerspectiva) * 100) / 100,
    };
  });
}

/**
 * Calcula ambas as projeções (Ideal e Perspectiva 30%)
 */
export function calculateAllProjections2026(): ProjectionComparison {
  return {
    ideal: calculateProjections2026Ideal(),
    perspectiva30: calculateProjections2026Perspectiva30(),
  };
}

/**
 * Função de compatibilidade - retorna projeção ideal
 * @deprecated Use calculateProjections2026Ideal() ou calculateAllProjections2026()
 */
export function calculateProjections2026(): Projection2026[] {
  return calculateProjections2026Ideal();
}

/**
 * Calcula totais anuais projetados para 2026
 */
export function getAnnualProjection2026(type: ProjectionType = 'ideal'): {
  receita: number;
  despesa: number;
  lucro: number;
} {
  const projections = type === 'ideal' 
    ? calculateProjections2026Ideal()
    : calculateProjections2026Perspectiva30();
    
  const receita = projections.reduce((sum, p) => sum + p.receita, 0);
  const despesa = projections.reduce((sum, p) => sum + p.despesa, 0);
  const lucro = receita - despesa;

  return {
    receita: Math.round(receita * 100) / 100,
    despesa: Math.round(despesa * 100) / 100,
    lucro: Math.round(lucro * 100) / 100,
  };
}

