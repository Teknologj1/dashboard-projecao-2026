'use client';

import {
  LineChart,
  Line,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';
import { AnnualData } from '@/types/data';

interface AnnualChartProps {
  data: AnnualData[];
  projection2026?: {
    receita: number;
    despesa: number;
    lucro: number;
  };
  projection2026Perspectiva?: {
    receita: number;
    despesa: number;
    lucro: number;
  };
}

export default function AnnualChart({ 
  data, 
  projection2026, 
  projection2026Perspectiva 
}: AnnualChartProps) {
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

  // Ordena dados históricos por ano
  const sortedData = [...data].sort((a, b) => a.year - b.year);
  
  const chartData = [...sortedData];
  if (projection2026) {
    chartData.push({
      year: 2026,
      receita: projection2026.receita,
      despesa: projection2026.despesa,
      lucro: projection2026.lucro,
      faturamentoMedio: projection2026.receita / 12,
      mediaDespesas: projection2026.despesa / 12,
      lucroLiquidoMedio: projection2026.lucro / 12,
    });
  }
  
  // Adiciona dados da perspectiva 30% se disponível (como 2026.5 para manter ordem)
  if (projection2026Perspectiva) {
    chartData.push({
      year: 2026.5, // Usa 2026.5 para manter ordem mas diferenciar visualmente
      receita: projection2026Perspectiva.receita,
      despesa: projection2026Perspectiva.despesa,
      lucro: projection2026Perspectiva.lucro,
      faturamentoMedio: projection2026Perspectiva.receita / 12,
      mediaDespesas: projection2026Perspectiva.despesa / 12,
      lucroLiquidoMedio: projection2026Perspectiva.lucro / 12,
    });
  }
  
  // Ordena todos os dados por ano
  chartData.sort((a, b) => a.year - b.year);

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 border border-gray-200 dark:border-gray-700">
      <h2 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">
        Evolução Anual (2020-2026)
        {projection2026Perspectiva && ' - Comparação de Projeções'}
      </h2>
      <ResponsiveContainer width="100%" height={400}>
        <BarChart data={chartData} margin={{ left: 10, right: 10, top: 10, bottom: 10 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis 
            dataKey="year" 
            type="number"
            scale="linear"
            domain={[2019.5, 2027]}
            tickFormatter={(value) => {
              if (value === 2026.5) return '2026 (30%)';
              if (value === Math.floor(value)) {
                return value.toString();
              }
              return '';
            }}
            ticks={[2020, 2021, 2022, 2023, 2024, 2025, 2026, 2026.5]}
            allowDecimals={true}
          />
          <YAxis 
            tickFormatter={formatCurrencyCompact}
            domain={[0, 'auto']}
            allowDecimals={false}
            width={90}
            tick={{ fontSize: 11 }}
          />
          <Tooltip 
            formatter={(value: number) => formatCurrency(value)}
            labelFormatter={(label) => {
              if (label === 2026.5) return '2026 - Perspectiva 30%';
              return `Ano ${Math.floor(label)}`;
            }}
          />
          <Legend 
            formatter={(value, entry) => {
              if (entry.dataKey === 'receita') return 'Receita';
              if (entry.dataKey === 'despesa') return 'Despesa';
              if (entry.dataKey === 'lucro') return 'Lucro Líquido';
              return value;
            }}
          />
          <Bar
            dataKey="receita"
            fill="#10b981"
            name="Receita"
            radius={[8, 8, 0, 0]}
          />
          <Bar
            dataKey="despesa"
            fill="#ef4444"
            name="Despesa"
            radius={[8, 8, 0, 0]}
          />
          <Bar
            dataKey="lucro"
            fill="#3b82f6"
            name="Lucro Líquido"
            radius={[8, 8, 0, 0]}
          />
        </BarChart>
      </ResponsiveContainer>
      {projection2026Perspectiva && (
        <div className="mt-3 p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-800">
          <div className="flex items-start gap-2">
            <span className="text-blue-600 dark:text-blue-400 font-bold">ℹ️</span>
            <div className="text-sm text-gray-700 dark:text-gray-300">
              <strong className="text-blue-900 dark:text-blue-200">Legenda:</strong>
              <ul className="mt-1 ml-4 list-disc space-y-1">
                <li><strong>2026:</strong> Projeção Ideal (baseada na média dos últimos 3 anos)</li>
                <li><strong>2026 (30%):</strong> Projeção Otimista - Perspectiva 30% (crescimento de 30% na receita)</li>
              </ul>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

