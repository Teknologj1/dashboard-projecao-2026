'use client';

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';
import { MonthlyData } from '@/types/data';
import { Projection2026 } from '@/types/data';

interface MonthlyTrendChartProps {
  monthlyData: MonthlyData[];
  projections?: Projection2026[];
  projectionType?: 'ideal' | 'perspectiva30';
}

export default function MonthlyTrendChart({
  monthlyData,
  projections,
  projectionType = 'ideal',
}: MonthlyTrendChartProps) {
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

  const chartData = monthlyData.map((month, index) => {
    const data: any = {
      month: month.month,
      '2023': month[2023].receita,
      '2024': month[2024].receita,
      '2025': month[2025].receita,
    };

    if (projections && projections[index]) {
      data['2026 (Projeção)'] = projections[index].receita;
    }

    return data;
  });

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 border border-gray-200 dark:border-gray-700">
      <h2 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">
        Tendência Mensal de Receita
      </h2>
      <ResponsiveContainer width="100%" height={400}>
        <LineChart data={chartData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis 
            tickFormatter={formatCurrencyCompact}
            width={90}
            tick={{ fontSize: 11 }}
          />
          <Tooltip formatter={(value: number) => formatCurrency(value)} />
          <Legend />
          <Line
            type="monotone"
            dataKey="2023"
            stroke="#3b82f6"
            strokeWidth={2}
            name="2023"
          />
          <Line
            type="monotone"
            dataKey="2024"
            stroke="#10b981"
            strokeWidth={2}
            name="2024"
          />
          <Line
            type="monotone"
            dataKey="2025"
            stroke="#f59e0b"
            strokeWidth={2}
            name="2025"
          />
          {projections && (
            <Line
              type="monotone"
              dataKey="2026 (Projeção)"
              stroke={projectionType === 'ideal' ? "#8b5cf6" : "#10b981"}
              strokeWidth={2}
              strokeDasharray="5 5"
              name={`2026 (${projectionType === 'ideal' ? 'Ideal' : 'Perspectiva 30%'})`}
            />
          )}
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

