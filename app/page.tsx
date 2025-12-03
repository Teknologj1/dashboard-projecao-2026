'use client';

import { useState } from 'react';
import { annualData } from '@/data/financialData';
import {
  calculateProjections2026Ideal,
  calculateProjections2026Perspectiva30,
  calculateAllProjections2026,
  getAnnualProjection2026,
} from '@/utils/projections';
import { ProjectionType } from '@/types/data';
import StatCard from '@/components/StatCard';
import AnnualChart from '@/components/AnnualChart';
import MonthlyTrendChart from '@/components/MonthlyTrendChart';
import ProjectionTable from '@/components/ProjectionTable';
import ProfitMarginChart from '@/components/ProfitMarginChart';
import ProjectionSelector from '@/components/ProjectionSelector';
import ProjectionComparison from '@/components/ProjectionComparison';
import { monthlyData } from '@/data/financialData';
import DrillDownChart from '@/components/DrillDownChart';
import ComparisonChart from '@/components/ComparisonChart';
import { useDrillDown } from '@/hooks/useDrillDown';

export default function Dashboard() {
  const [projectionType, setProjectionType] = useState<ProjectionType>('ideal');
  const drillDown = useDrillDown();
  
  const allProjections = calculateAllProjections2026();
  const projections2026 = projectionType === 'ideal' 
    ? allProjections.ideal 
    : allProjections.perspectiva30;
  const annualProjection2026 = getAnnualProjection2026(projectionType);
  const annualProjection2026Perspectiva = getAnnualProjection2026('perspectiva30');

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
      minimumFractionDigits: 0,
    }).format(value);
  };

  // Calcula médias e totais históricos
  const totalReceitaHistorica = annualData.reduce((sum, year) => sum + year.receita, 0);
  const totalDespesaHistorica = annualData.reduce((sum, year) => sum + year.despesa, 0);
  const totalLucroHistorico = annualData.reduce((sum, year) => sum + year.lucro, 0);
  const mediaReceitaAnual = totalReceitaHistorica / annualData.length;
  const mediaLucroAnual = totalLucroHistorico / annualData.length;

  // Compara projeção 2026 com média histórica
  const variacaoReceita = ((annualProjection2026.receita - mediaReceitaAnual) / mediaReceitaAnual) * 100;
  const variacaoLucro = ((annualProjection2026.lucro - mediaLucroAnual) / mediaLucroAnual) * 100;

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 p-4 md:p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <header className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-2">
            Dashboard de Projeção 2026
          </h1>
          <p className="text-gray-600 dark:text-gray-400">
            Análise de dados financeiros e projeções baseadas em histórico (2020-2025)
          </p>
        </header>

        {/* Projection Selector */}
        <ProjectionSelector
          selected={projectionType}
          onChange={setProjectionType}
        />

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <StatCard
            title="Receita Total 2026 (Projeção)"
            value={formatCurrency(annualProjection2026.receita)}
            subtitle={`Média mensal: ${formatCurrency(annualProjection2026.receita / 12)}`}
            trend={{
              value: variacaoReceita,
              isPositive: variacaoReceita >= 0,
            }}
          />
          <StatCard
            title="Despesa Total 2026 (Projeção)"
            value={formatCurrency(annualProjection2026.despesa)}
            subtitle={`Média mensal: ${formatCurrency(annualProjection2026.despesa / 12)}`}
          />
          <StatCard
            title="Lucro Líquido 2026 (Projeção)"
            value={formatCurrency(annualProjection2026.lucro)}
            subtitle={`Média mensal: ${formatCurrency(annualProjection2026.lucro / 12)}`}
            trend={{
              value: variacaoLucro,
              isPositive: variacaoLucro >= 0,
            }}
          />
          <StatCard
            title="Margem de Lucro 2026"
            value={
              annualProjection2026.receita > 0
                ? `${((annualProjection2026.lucro / annualProjection2026.receita) * 100).toFixed(1)}%`
                : '0%'
            }
            subtitle="Baseado em projeções"
          />
        </div>

        {/* Charts Row 1 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          <AnnualChart 
            data={annualData} 
            projection2026={annualProjection2026}
            projection2026Perspectiva={annualProjection2026Perspectiva}
          />
          <ProfitMarginChart data={annualData} projection2026={annualProjection2026} />
        </div>

        {/* Monthly Trend */}
        <div className="mb-8">
          <MonthlyTrendChart
            monthlyData={monthlyData}
            projections={projections2026}
            projectionType={projectionType}
          />
        </div>

        {/* Projection Comparison */}
        <div className="mb-8">
          <ProjectionComparison
            ideal={allProjections.ideal}
            perspectiva30={allProjections.perspectiva30}
          />
        </div>

        {/* Projection Table */}
        <div className="mb-8">
          <ProjectionTable projections={projections2026} />
        </div>

        {/* Drill-Down Analysis Section */}
        <div className="mb-8">
          <div className="mb-6">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
              Análise Drill-Down de Vendas
            </h2>
            <p className="text-gray-600 dark:text-gray-400">
              Explore os dados de vendas navegando pela hierarquia: Ano → Mês → Especialidade → Tratamento
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-500 mt-2">
              💡 Clique nas barras/segmentos dos gráficos para fazer drill-down. Use o breadcrumb para navegar de volta.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
            <div className="lg:col-span-2">
              <DrillDownChart initialLevel="ano" />
            </div>
            <div>
              <ComparisonChart state={drillDown.state} />
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="text-center text-sm text-gray-500 dark:text-gray-400 mt-8 pb-8">
          <p>
            <strong>Projeção Ideal:</strong> Baseada na média dos últimos 3 anos (2023-2025) e tendências históricas.
          </p>
          <p className="mt-1">
            <strong>Perspectiva 30%:</strong> Projeção otimista com crescimento de 30% na receita e aumento controlado de 10% nas despesas.
          </p>
          <p className="mt-2">
            Última atualização: {new Date().toLocaleDateString('pt-BR')}
          </p>
        </footer>
      </div>
    </div>
  );
}

