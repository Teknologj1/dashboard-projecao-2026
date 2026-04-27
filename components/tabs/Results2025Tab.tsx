'use client';

import { useState } from 'react';
import DrillDownChart from '@/components/DrillDownChart';
import ComparisonChart from '@/components/ComparisonChart';
import ExpenseDrillDownChart from '@/components/ExpenseDrillDownChart';
import RevenueExpenseComparison from '@/components/RevenueExpenseComparison';
import KeyIndicators from '@/components/KeyIndicators';
import { useDrillDown } from '@/hooks/useDrillDown';

export default function Results2025Tab() {
  const drillDown = useDrillDown();
  
  return (
    <div className="space-y-6">
      <div className="mb-6">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-2">
          Resultados de 2025
        </h2>
        <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400">
          Análise detalhada de vendas e despesas do ano de 2025
        </p>
      </div>

      {/* Key Indicators */}
      <KeyIndicators />

      {/* Drill-Down de Vendas */}
      <div className="mb-8">
        <div className="mb-4">
          <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-2">
            Análise Drill-Down de Vendas
          </h3>
          <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">
            Explore os dados de vendas navegando pela hierarquia: Ano → Mês → Especialidade → Tratamento
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6">
          <div className="lg:col-span-2">
            <DrillDownChart initialLevel="ano" />
          </div>
          <div>
            <ComparisonChart state={drillDown.state} />
          </div>
        </div>
      </div>

      {/* Drill-Down de Despesas */}
      <div className="mb-8">
        <div className="mb-4">
          <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-2">
            Análise Drill-Down de Despesas
          </h3>
          <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">
            Explore os dados de despesas navegando pela hierarquia: Ano → Mês → Categoria
          </p>
        </div>
        <ExpenseDrillDownChart initialLevel="ano" />
      </div>

      {/* Comparação Receitas vs Despesas */}
      <div className="mb-8">
        <RevenueExpenseComparison />
      </div>
    </div>
  );
}

