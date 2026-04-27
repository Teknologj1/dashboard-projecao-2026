'use client';

import { useMemo } from 'react';
import {
  ComposedChart,
  Bar,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';
import { reportData } from '@/data/reportData';
import { expenseData } from '@/data/expenseData';

export default function RevenueExpenseComparison() {
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

  // Combina dados de vendas e despesas por mês de 2025
  const comparisonData = useMemo(() => {
    const data: Array<{
      name: string;
      receita: number;
      despesa: number;
      lucro: number;
      mes: number;
    }> = [];

    // Pega apenas dados de 2025
    const vendas2025 = reportData.relatorios.filter(r => r.ano === 2025).sort((a, b) => a.mes - b.mes);
    const despesas2025 = expenseData.relatorios.filter(r => r.ano === 2025).sort((a, b) => a.mes - b.mes);

    vendas2025.forEach(venda => {
      const despesa = despesas2025.find(d => d.mes === venda.mes);
      data.push({
        name: venda.mesNome,
        receita: venda.totalVendas,
        despesa: despesa?.totalDespesas || 0,
        lucro: venda.totalVendas - (despesa?.totalDespesas || 0),
        mes: venda.mes,
      });
    });

    return data.sort((a, b) => a.mes - b.mes);
  }, []);

  const totalReceita = comparisonData.reduce((sum, d) => sum + d.receita, 0);
  const totalDespesa = comparisonData.reduce((sum, d) => sum + d.despesa, 0);
  const totalLucro = totalReceita - totalDespesa;
  const margemLucro = totalReceita > 0 ? (totalLucro / totalReceita) * 100 : 0;

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-3 sm:p-4 md:p-6 border border-gray-200 dark:border-gray-700">
      <h2 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3 md:mb-4 text-gray-900 dark:text-white">
        Comparação Receitas vs Despesas - 2025
      </h2>

      {/* Resumo */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 mb-4 sm:mb-5 md:mb-6">
        <div className="bg-green-50 dark:bg-green-900/20 p-3 sm:p-4 rounded-lg border border-green-200 dark:border-green-800">
          <h3 className="text-xs sm:text-sm font-semibold text-green-900 dark:text-green-300 mb-1 sm:mb-2">
            Receita Total
          </h3>
          <p className="text-base sm:text-lg font-bold text-green-600 dark:text-green-400">
            {formatCurrency(totalReceita)}
          </p>
        </div>
        <div className="bg-red-50 dark:bg-red-900/20 p-3 sm:p-4 rounded-lg border border-red-200 dark:border-red-800">
          <h3 className="text-xs sm:text-sm font-semibold text-red-900 dark:text-red-300 mb-1 sm:mb-2">
            Despesa Total
          </h3>
          <p className="text-base sm:text-lg font-bold text-red-600 dark:text-red-400">
            {formatCurrency(totalDespesa)}
          </p>
        </div>
        <div className={`p-3 sm:p-4 rounded-lg border ${
          totalLucro >= 0
            ? 'bg-blue-50 dark:bg-blue-900/20 border-blue-200 dark:border-blue-800'
            : 'bg-orange-50 dark:bg-orange-900/20 border-orange-200 dark:border-orange-800'
        }`}>
          <h3 className={`text-xs sm:text-sm font-semibold mb-1 sm:mb-2 ${
            totalLucro >= 0
              ? 'text-blue-900 dark:text-blue-300'
              : 'text-orange-900 dark:text-orange-300'
          }`}>
            Lucro Líquido
          </h3>
          <p className={`text-base sm:text-lg font-bold ${
            totalLucro >= 0
              ? 'text-blue-600 dark:text-blue-400'
              : 'text-orange-600 dark:text-orange-400'
          }`}>
            {formatCurrency(totalLucro)}
          </p>
          <p className={`text-xs mt-1 ${
            totalLucro >= 0
              ? 'text-blue-600 dark:text-blue-400'
              : 'text-orange-600 dark:text-orange-400'
          }`}>
            Margem: {margemLucro.toFixed(1)}%
          </p>
        </div>
      </div>

      {/* Gráfico */}
      <ResponsiveContainer width="100%" height={300} className="sm:h-[350px] md:h-[400px]">
        <ComposedChart data={comparisonData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis 
            dataKey="name" 
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
          <Legend />
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
          <Line
            type="monotone"
            dataKey="lucro"
            stroke="#3b82f6"
            strokeWidth={3}
            dot={{ r: 4 }}
            name="Lucro Líquido"
            connectNulls
          />
        </ComposedChart>
      </ResponsiveContainer>
    </div>
  );
}

