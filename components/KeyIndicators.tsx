'use client';

import { useMemo } from 'react';
import { reportData } from '@/data/reportData';
import { expenseData } from '@/data/expenseData';
import StatCard from './StatCard';

export default function KeyIndicators() {
  const indicators = useMemo(() => {
    // Dados de 2025
    const relatorios2025 = reportData.relatorios.filter(r => r.ano === 2025);
    const despesas2025 = expenseData.relatorios.filter(r => r.ano === 2025);

    // Receita total 2025
    const receitaTotal2025 = relatorios2025.reduce((sum, r) => sum + r.totalVendas, 0);
    const receitaMensalMedia = receitaTotal2025 / relatorios2025.length;

    // Despesa total 2025
    const despesaTotal2025 = despesas2025.reduce((sum, r) => sum + r.totalDespesas, 0);
    const despesaMensalMedia = despesaTotal2025 / despesas2025.length;

    // Lucro líquido
    const lucroLiquido2025 = receitaTotal2025 - despesaTotal2025;
    const lucroMensalMedia = lucroLiquido2025 / relatorios2025.length;

    // Percentual de custos sobre receita
    const percentualCustos = receitaTotal2025 > 0 ? (despesaTotal2025 / receitaTotal2025) * 100 : 0;

    // Margem de lucro
    const margemLucro = receitaTotal2025 > 0 ? (lucroLiquido2025 / receitaTotal2025) * 100 : 0;

    // Comparação com 2024
    const relatorios2024 = reportData.relatorios.filter(r => r.ano === 2024);
    const despesas2024 = expenseData.relatorios.filter(r => r.ano === 2024);
    const receitaTotal2024 = relatorios2024.reduce((sum, r) => sum + r.totalVendas, 0);
    const variacaoReceita = receitaTotal2024 > 0 
      ? ((receitaTotal2025 - receitaTotal2024) / receitaTotal2024) * 100 
      : 0;

    return {
      receitaTotal: receitaTotal2025,
      receitaMensalMedia,
      despesaTotal: despesaTotal2025,
      despesaMensalMedia,
      lucroLiquido: lucroLiquido2025,
      lucroMensalMedia,
      percentualCustos,
      margemLucro,
      variacaoReceita,
    };
  }, []);

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
      minimumFractionDigits: 0,
    }).format(value);
  };

  const formatCurrencyCompact = (value: number) => {
    if (value >= 1000000) {
      return `R$ ${(value / 1000000).toFixed(1).replace('.', ',')}M`;
    } else if (value >= 1000) {
      return `R$ ${(value / 1000).toFixed(0)}k`;
    }
    return formatCurrency(value);
  };

  // Metas
  const metaCrescimento = 10; // ≥10%
  const metaPercentualCustos = 40; // ≤ 40%
  const metaMargemLucro = 25; // ≥ 25%

  return (
    <div className="space-y-4 sm:space-y-6">
      <div>
        <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-2">
          Indicadores-Chave 2025
        </h2>
        <p className="text-sm text-gray-600 dark:text-gray-400">
          KPIs baseados em dados reais das planilhas
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
        <StatCard
          title="Receita Mensal Total"
          value={formatCurrencyCompact(indicators.receitaMensalMedia)}
          subtitle={`Total anual: ${formatCurrencyCompact(indicators.receitaTotal)}`}
          trend={{
            value: indicators.variacaoReceita,
            isPositive: indicators.variacaoReceita >= metaCrescimento,
          }}
        />
        <StatCard
          title="Percentual de Custos"
          value={`${indicators.percentualCustos.toFixed(1)}%`}
          subtitle={`Meta: ≤ ${metaPercentualCustos}%`}
          trend={{
            value: metaPercentualCustos - indicators.percentualCustos,
            isPositive: indicators.percentualCustos <= metaPercentualCustos,
          }}
        />
        <StatCard
          title="Lucro Líquido"
          value={formatCurrencyCompact(indicators.lucroMensalMedia)}
          subtitle={`Total anual: ${formatCurrencyCompact(indicators.lucroLiquido)}`}
          trend={{
            value: indicators.margemLucro,
            isPositive: indicators.margemLucro >= metaMargemLucro,
          }}
        />
        <StatCard
          title="Margem de Lucro"
          value={`${indicators.margemLucro.toFixed(1)}%`}
          subtitle={`Meta: ≥ ${metaMargemLucro}%`}
          trend={{
            value: indicators.margemLucro - metaMargemLucro,
            isPositive: indicators.margemLucro >= metaMargemLucro,
          }}
        />
      </div>

      {/* Resumo de Metas */}
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-4 sm:p-6 border border-gray-200 dark:border-gray-700">
        <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3">
          Status das Metas
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className={`p-3 rounded-lg border ${
            indicators.variacaoReceita >= metaCrescimento
              ? 'bg-green-50 dark:bg-green-900/20 border-green-200 dark:border-green-800'
              : 'bg-yellow-50 dark:bg-yellow-900/20 border-yellow-200 dark:border-yellow-800'
          }`}>
            <p className="text-xs sm:text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Crescimento Receita
            </p>
            <p className={`text-lg font-bold ${
              indicators.variacaoReceita >= metaCrescimento
                ? 'text-green-700 dark:text-green-300'
                : 'text-yellow-700 dark:text-yellow-300'
            }`}>
              {indicators.variacaoReceita >= 0 ? '+' : ''}{indicators.variacaoReceita.toFixed(1)}%
            </p>
            <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">
              Meta: ≥ {metaCrescimento}%
            </p>
          </div>
          <div className={`p-3 rounded-lg border ${
            indicators.percentualCustos <= metaPercentualCustos
              ? 'bg-green-50 dark:bg-green-900/20 border-green-200 dark:border-green-800'
              : 'bg-red-50 dark:bg-red-900/20 border-red-200 dark:border-red-800'
          }`}>
            <p className="text-xs sm:text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Custos sobre Receita
            </p>
            <p className={`text-lg font-bold ${
              indicators.percentualCustos <= metaPercentualCustos
                ? 'text-green-700 dark:text-green-300'
                : 'text-red-700 dark:text-red-300'
            }`}>
              {indicators.percentualCustos.toFixed(1)}%
            </p>
            <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">
              Meta: ≤ {metaPercentualCustos}%
            </p>
          </div>
          <div className={`p-3 rounded-lg border ${
            indicators.margemLucro >= metaMargemLucro
              ? 'bg-green-50 dark:bg-green-900/20 border-green-200 dark:border-green-800'
              : 'bg-yellow-50 dark:bg-yellow-900/20 border-yellow-200 dark:border-yellow-800'
          }`}>
            <p className="text-xs sm:text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Margem de Lucro
            </p>
            <p className={`text-lg font-bold ${
              indicators.margemLucro >= metaMargemLucro
                ? 'text-green-700 dark:text-green-300'
                : 'text-yellow-700 dark:text-yellow-300'
            }`}>
              {indicators.margemLucro.toFixed(1)}%
            </p>
            <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">
              Meta: ≥ {metaMargemLucro}%
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

