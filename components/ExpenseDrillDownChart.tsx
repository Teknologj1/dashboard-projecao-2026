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
import { DrillDownLevel, ChartDataPoint, BreadcrumbItem } from '@/types/drillDown';
import { expenseData } from '@/data/expenseData';
import BreadcrumbNav from './BreadcrumbNav';
import FilterLegend from './FilterLegend';

interface ExpenseDrillDownChartProps {
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

export default function ExpenseDrillDownChart({ initialLevel = 'ano' }: ExpenseDrillDownChartProps) {
  const [level, setLevel] = useState<DrillDownLevel>(initialLevel);
  const [selectedYear, setSelectedYear] = useState<number | undefined>();
  const [selectedMonth, setSelectedMonth] = useState<number | undefined>();
  const [breadcrumbs, setBreadcrumbs] = useState<BreadcrumbItem[]>([]);
  const [chartType, setChartType] = useState<'bar' | 'pie'>('bar');
  const [selectedFilters, setSelectedFilters] = useState<Set<string>>(new Set());

  // Calcula dados baseado no nível atual
  const chartData = useMemo(() => {
    const data: ChartDataPoint[] = [];

    switch (level) {
      case 'ano':
        // Mostra todos os anos
        const anos = [...new Set(expenseData.relatorios.map(r => r.ano))].sort((a, b) => a - b);
        data.push(...anos.map(ano => {
          const relatoriosAno = expenseData.relatorios.filter(r => r.ano === ano);
          const total = relatoriosAno.reduce((sum, r) => sum + r.totalDespesas, 0);
          return {
            name: ano.toString(),
            value: total,
          };
        }));
        break;

      case 'mes':
        if (selectedYear) {
          const relatoriosAno = expenseData.relatorios
            .filter(r => r.ano === selectedYear)
            .sort((a, b) => a.mes - b.mes);
          data.push(...relatoriosAno.map(rel => ({
            name: rel.mesNome,
            value: rel.totalDespesas,
          })));
        }
        break;

      case 'especialidade': // Reutilizando para categoria de despesas
        if (selectedYear && selectedMonth) {
          const relatorio = expenseData.relatorios.find(
            r => r.ano === selectedYear && r.mes === selectedMonth
          );
          if (relatorio) {
            data.push(...Object.entries(relatorio.totalPorCategoria).map(([cat, valor]) => ({
              name: cat,
              value: valor,
            })));
          }
        } else if (selectedYear) {
          // Agrega todas as categorias do ano
          const relatoriosAno = expenseData.relatorios.filter(r => r.ano === selectedYear);
          const totais: Record<string, number> = {};
          relatoriosAno.forEach(rel => {
            Object.entries(rel.totalPorCategoria).forEach(([cat, valor]) => {
              totais[cat] = (totais[cat] || 0) + valor;
            });
          });
          data.push(...Object.entries(totais).map(([cat, valor]) => ({
            name: cat,
            value: valor,
          })));
        }
        break;
    }

    // Ordena por valor (descendente) para categorias, mas mantém ordem cronológica para anos/meses
    if (level === 'ano' || level === 'mes') {
      return data;
    } else {
      return data.sort((a, b) => b.value - a.value);
    }
  }, [level, selectedYear, selectedMonth]);

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

  const navigateTo = (newLevel: DrillDownLevel, params?: { year?: number; month?: number }) => {
    const newBreadcrumbs: BreadcrumbItem[] = [...breadcrumbs];
    
    if (level === 'ano' && params?.year) {
      newBreadcrumbs.push({
        label: `Ano ${params.year}`,
        level: 'ano',
        value: params.year,
        onClick: () => {
          setLevel('ano');
          setSelectedYear(undefined);
          setSelectedMonth(undefined);
          setBreadcrumbs([]);
        },
      });
      setSelectedYear(params.year);
    } else if (level === 'mes' && params?.month) {
      newBreadcrumbs.push({
        label: meses[params.month - 1],
        level: 'mes',
        value: params.month,
        onClick: () => {
          setLevel('mes');
          setSelectedMonth(undefined);
          setBreadcrumbs(breadcrumbs.slice(0, -1));
        },
      });
      setSelectedMonth(params.month);
    }
    
    setLevel(newLevel);
    setBreadcrumbs(newBreadcrumbs);
  };

  const handleClick = (data: ChartDataPoint) => {
    switch (level) {
      case 'ano':
        navigateTo('mes', { year: parseInt(data.name) });
        break;

      case 'mes':
        const mesIndex = meses.findIndex(m => m === data.name);
        navigateTo('especialidade', { 
          year: selectedYear, 
          month: mesIndex + 1 
        });
        break;

      case 'especialidade':
        // Nível final para despesas
        break;
    }
  };

  const handleLegendClick = (data: any) => {
    const dataKey = data?.dataKey as string | undefined;
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

  // Filtra dados baseado nos filtros selecionados
  const filteredData = useMemo(() => {
    if (selectedFilters.size === 0) return chartData;
    return chartData.filter(item => selectedFilters.has(item.name));
  }, [chartData, selectedFilters]);

  const totalValue = filteredData.reduce((sum, item) => sum + item.value, 0);

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-3 sm:p-4 md:p-6 border border-gray-200 dark:border-gray-700">
      {/* Header */}
      <div className="mb-3 sm:mb-4 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 sm:gap-0">
        <div className="flex-1">
          <h2 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white">
            Análise de Despesas - Drill-Down
          </h2>
          <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 mt-1">
            Nível: {level.charAt(0).toUpperCase() + level.slice(1)}
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
      <BreadcrumbNav breadcrumbs={breadcrumbs} />

      {/* Chart */}
      <div className="mt-3 sm:mt-4 md:mt-6">
        <ResponsiveContainer width="100%" height={300} className="sm:h-[350px] md:h-[400px] lg:h-[450px]">
          {chartType === 'bar' ? (
            <ComposedChart data={filteredData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis 
                dataKey="name" 
                angle={level === 'ano' || level === 'mes' ? 0 : -45}
                textAnchor={level === 'ano' || level === 'mes' ? 'middle' : 'end'}
                height={level === 'ano' || level === 'mes' ? 30 : 100}
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
                labelFormatter={(label) => label}
              />
              <Legend onClick={handleLegendClick} />
              <Bar
                dataKey="value"
                fill="#ef4444"
                name="Despesas"
                radius={[8, 8, 0, 0]}
                onClick={(data: ChartDataPoint) => handleClick(data)}
                style={{ cursor: 'pointer' }}
              />
              {(level === 'ano' || level === 'mes') && (
                <Line
                  type="monotone"
                  dataKey="value"
                  stroke="#10b981"
                  strokeWidth={2}
                  dot={{ r: 4 }}
                  name="Tendência"
                  connectNulls
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
                label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"
                onClick={(data: ChartDataPoint) => handleClick(data)}
                style={{ cursor: 'pointer' }}
              >
                {filteredData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip formatter={(value: number) => formatCurrency(value)} />
              <Legend onClick={handleLegendClick} />
            </PieChart>
          )}
        </ResponsiveContainer>
      </div>

      {/* Filter Legend */}
      <FilterLegend
        data={chartData}
        selectedFilters={selectedFilters}
        onFilterToggle={(name) => {
          setSelectedFilters(prev => {
            const newFilters = new Set(prev);
            if (newFilters.has(name)) {
              newFilters.delete(name);
            } else {
              newFilters.add(name);
            }
            return newFilters;
          });
        }}
      />
    </div>
  );
}

