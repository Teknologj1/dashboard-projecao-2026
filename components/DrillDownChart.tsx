'use client';

import { useState, useMemo, useEffect } from 'react';
import {
  ComposedChart,
  BarChart,
  Bar,
  Line,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';
import { DrillDownState, DrillDownLevel, ChartDataPoint } from '@/types/drillDown';
import { reportData } from '@/data/reportData';
import BreadcrumbNav from './BreadcrumbNav';
import FilterLegend from './FilterLegend';
import { useDrillDown } from '@/hooks/useDrillDown';

interface DrillDownChartProps {
  initialLevel?: DrillDownLevel;
}

const meses = [
  'Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho',
  'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'
];

const COLORS = [
  '#3b82f6', '#10b981', '#f59e0b', '#ef4444', '#8b5cf6',
  '#06b6d4', '#ec4899', '#84cc16', '#f97316', '#6366f1'
];

export default function DrillDownChart({ initialLevel = 'ano' }: DrillDownChartProps) {
  const drillDown = useDrillDown();
  const drillState = drillDown.state;
  
  const [chartType, setChartType] = useState<'bar' | 'pie'>('bar');
  const [selectedFilters, setSelectedFilters] = useState<Set<string>>(new Set());

  useEffect(() => {
    if (drillState.level === 'ano' && drillState.breadcrumbs.length === 0) {
      drillDown.reset();
    }
  }, []);

  // Calcula dados baseado no nível atual
  const chartData = useMemo(() => {
    const data: ChartDataPoint[] = [];

    switch (drillState.level) {
      case 'ano':
        // Mostra todos os anos
        const anos = [...new Set(reportData.relatorios.map(r => r.ano))].sort();
        data.push(...anos.map(ano => {
          const relatoriosAno = reportData.relatorios.filter(r => r.ano === ano);
          const total = relatoriosAno.reduce((sum, r) => sum + r.totalVendas, 0);
          return {
            name: ano.toString(),
            value: total,
          };
        }));
        break;

      case 'mes':
        if (drillState.selectedYear) {
          const relatoriosAno = reportData.relatorios
            .filter(r => r.ano === drillState.selectedYear)
            .sort((a, b) => a.mes - b.mes); // Ordena por mês em ordem crescente
          data.push(...relatoriosAno.map(rel => ({
            name: rel.mesNome,
            value: rel.totalVendas,
          })));
        }
        break;

      case 'especialidade':
        if (drillState.selectedYear && drillState.selectedMonth) {
          const relatorio = reportData.relatorios.find(
            r => r.ano === drillState.selectedYear && r.mes === drillState.selectedMonth
          );
          if (relatorio) {
            data.push(...Object.entries(relatorio.totalPorEspecialidade).map(([esp, valor]) => ({
              name: esp,
              value: valor,
            })));
          }
        } else if (drillState.selectedYear) {
          // Agrega todas as especialidades do ano
          const relatoriosAno = reportData.relatorios.filter(r => r.ano === drillState.selectedYear);
          const totais: Record<string, number> = {};
          relatoriosAno.forEach(rel => {
            Object.entries(rel.totalPorEspecialidade).forEach(([esp, valor]) => {
              totais[esp] = (totais[esp] || 0) + valor;
            });
          });
          data.push(...Object.entries(totais).map(([esp, valor]) => ({
            name: esp,
            value: valor,
          })));
        }
        break;

      case 'tratamento':
        if (drillState.selectedYear && drillState.selectedMonth && drillState.selectedEspecialidade) {
          // Filtra tratamentos da especialidade selecionada usando o mapeamento
          const relatorio = reportData.relatorios.find(
            r => r.ano === drillState.selectedYear && r.mes === drillState.selectedMonth
          );
          if (relatorio && relatorio.tratamentosPorEspecialidade) {
            // Obtém tratamentos relacionados à especialidade selecionada
            const tratamentosEspecialidade = relatorio.tratamentosPorEspecialidade[drillState.selectedEspecialidade] || {};
            data.push(...Object.entries(tratamentosEspecialidade).map(([trat, valor]) => ({
              name: trat,
              value: valor,
            })));
          }
        } else if (drillState.selectedYear && drillState.selectedMonth) {
          // Mostra todos os tratamentos do mês (agregados de todas as especialidades)
          const relatorio = reportData.relatorios.find(
            r => r.ano === drillState.selectedYear && r.mes === drillState.selectedMonth
          );
          if (relatorio && relatorio.tratamentosPorEspecialidade) {
            // Agrega todos os tratamentos de todas as especialidades
            const tratamentosAgregados: Record<string, number> = {};
            Object.values(relatorio.tratamentosPorEspecialidade).forEach(tratamentos => {
              Object.entries(tratamentos).forEach(([trat, valor]) => {
                tratamentosAgregados[trat] = (tratamentosAgregados[trat] || 0) + valor;
              });
            });
            data.push(...Object.entries(tratamentosAgregados).map(([trat, valor]) => ({
              name: trat,
              value: valor,
            })));
          }
        }
        break;
    }

    // Calcula percentuais
    const total = data.reduce((sum, item) => sum + item.value, 0);
    const dataWithPercent = data.map(item => ({
      ...item,
      percentual: total > 0 ? (item.value / total) * 100 : 0,
    }));
    
    // Mantém ordem crescente para anos e meses, ordena por valor para outros níveis
    if (drillState.level === 'ano' || drillState.level === 'mes') {
      return dataWithPercent; // Já está ordenado corretamente
    }
    
    // Para especialidades e tratamentos, ordena por valor (decrescente)
    return dataWithPercent.sort((a, b) => b.value - a.value);
  }, [drillState]);

  // Aplica filtros
  const filteredData = useMemo(() => {
    if (selectedFilters.size === 0) return chartData;
    return chartData.filter(item => selectedFilters.has(item.name));
  }, [chartData, selectedFilters]);

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

  const handleClick = (data: ChartDataPoint) => {
    switch (drillState.level) {
      case 'ano':
        drillDown.navigateTo('mes', { year: parseInt(data.name) });
        break;

      case 'mes':
        const mesIndex = meses.findIndex(m => m === data.name);
        drillDown.navigateTo('especialidade', { 
          year: drillState.selectedYear, 
          month: mesIndex + 1 
        });
        break;

      case 'especialidade':
        drillDown.navigateTo('tratamento', { 
          year: drillState.selectedYear,
          month: drillState.selectedMonth,
          especialidade: data.name 
        });
        break;

      case 'tratamento':
        // Nível final, não faz drill-down
        break;
    }
  };

  const handleLegendClick = (dataKey: string | undefined) => {
    if (!dataKey) return;
    setSelectedFilters(prev => {
      const newFilters = new Set(prev);
      if (newFilters.has(dataKey)) {
        newFilters.delete(dataKey);
      } else {
        newFilters.add(dataKey);
      }
      return newFilters;
    });
  };

  const totalValue = filteredData.reduce((sum, item) => sum + item.value, 0);

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-3 sm:p-4 md:p-6 border border-gray-200 dark:border-gray-700">
      {/* Header */}
      <div className="mb-3 sm:mb-4 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 sm:gap-0">
        <div className="flex-1">
          <h2 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white">
            Análise de Vendas - Drill-Down
          </h2>
          <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 mt-1">
            Nível: {drillState.level.charAt(0).toUpperCase() + drillState.level.slice(1)}
            {totalValue > 0 && ` • Total: ${formatCurrency(totalValue)}`}
          </p>
        </div>
        <div className="flex gap-2">
          <button
            onClick={() => setChartType('bar')}
            className={`px-2 sm:px-3 py-1 text-xs sm:text-sm rounded ${chartType === 'bar' ? 'bg-blue-600 text-white' : 'bg-gray-200 dark:bg-gray-700'}`}
          >
            Barras
          </button>
          <button
            onClick={() => setChartType('pie')}
            className={`px-2 sm:px-3 py-1 text-xs sm:text-sm rounded ${chartType === 'pie' ? 'bg-blue-600 text-white' : 'bg-gray-200 dark:bg-gray-700'}`}
          >
            Pizza
          </button>
        </div>
      </div>

      {/* Breadcrumb Navigation */}
      <BreadcrumbNav breadcrumbs={drillState.breadcrumbs} />

      {/* Chart */}
      <div className="mt-3 sm:mt-4 md:mt-6">
        <ResponsiveContainer width="100%" height={300} className="sm:h-[350px] md:h-[400px] lg:h-[450px]">
          {chartType === 'bar' ? (
            <ComposedChart data={filteredData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis 
                dataKey="name" 
                angle={drillState.level === 'ano' || drillState.level === 'mes' ? 0 : -45}
                textAnchor={drillState.level === 'ano' || drillState.level === 'mes' ? 'middle' : 'end'}
                height={drillState.level === 'ano' || drillState.level === 'mes' ? 30 : 100}
                tick={{ fontSize: 10 }}
                className="sm:text-[11px] md:text-[12px]"
              />
              <YAxis 
                tickFormatter={formatCurrencyCompact}
                width={70}
                className="sm:w-[80px] md:w-[90px]"
                tick={{ fontSize: 10 }}
              />
              <Tooltip 
                formatter={(value: number) => formatCurrency(value)}
                labelFormatter={(label) => ` ${label}`}
              />
              <Legend 
                onClick={(e) => handleLegendClick(e.dataKey as string)}
                wrapperStyle={{ cursor: 'pointer' }}
              />
              <Bar 
                dataKey="value" 
                fill="#3b82f6"
                name="Vendas"
                radius={[8, 8, 0, 0]}
                onClick={(data) => handleClick(data)}
                style={{ cursor: drillState.level !== 'tratamento' ? 'pointer' : 'default' }}
              />
              {(drillState.level === 'ano' || drillState.level === 'mes') && (
                <Line
                  type="monotone"
                  dataKey="value"
                  stroke="#10b981"
                  strokeWidth={3}
                  dot={{ r: 5, fill: '#10b981' }}
                  activeDot={{ r: 7 }}
                  name="Tendência"
                />
              )}
            </ComposedChart>
          ) : (
            <PieChart>
              <Pie
                data={filteredData}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(1)}%`}
                outerRadius={140}
                fill="#8884d8"
                dataKey="value"
                onClick={(data) => handleClick(data)}
                style={{ cursor: drillState.level !== 'tratamento' ? 'pointer' : 'default' }}
              >
                {filteredData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip formatter={(value: number) => formatCurrency(value)} />
              <Legend 
                onClick={(e) => handleLegendClick(e.dataKey as string)}
                wrapperStyle={{ cursor: 'pointer' }}
              />
            </PieChart>
          )}
        </ResponsiveContainer>
      </div>

      {/* Filter Legend */}
      <FilterLegend 
        data={chartData}
        selectedFilters={selectedFilters}
        onFilterToggle={handleLegendClick}
      />
    </div>
  );
}
