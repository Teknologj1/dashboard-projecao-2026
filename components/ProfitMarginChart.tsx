'use client';

import {
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

interface ProfitMarginChartProps {
  data: AnnualData[];
  projection2026?: {
    receita: number;
    despesa: number;
    lucro: number;
  };
}

export default function ProfitMarginChart({
  data,
  projection2026,
}: ProfitMarginChartProps) {
  const formatPercent = (value: number) => {
    return `${value.toFixed(1)}%`;
  };

  const chartData = data.map((year) => ({
    year: year.year,
    margem: year.receita > 0 ? (year.lucro / year.receita) * 100 : 0,
  }));

  if (projection2026) {
    chartData.push({
      year: 2026,
      margem:
        projection2026.receita > 0
          ? (projection2026.lucro / projection2026.receita) * 100
          : 0,
    });
  }

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 border border-gray-200 dark:border-gray-700">
      <h2 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">
        Margem de Lucro Anual (%)
      </h2>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={chartData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="year" />
          <YAxis tickFormatter={formatPercent} />
          <Tooltip formatter={(value: number) => formatPercent(value)} />
          <Legend />
          <Bar
            dataKey="margem"
            fill="#3b82f6"
            name="Margem de Lucro (%)"
            radius={[8, 8, 0, 0]}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

