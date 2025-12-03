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
import { Projection2026 } from '@/types/data';

interface ProjectionComparisonProps {
  ideal: Projection2026[];
  perspectiva30: Projection2026[];
}

export default function ProjectionComparison({
  ideal,
  perspectiva30,
}: ProjectionComparisonProps) {
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

  const chartData = ideal.map((idealProj, index) => {
    const perspProj = perspectiva30[index];
    return {
      month: idealProj.month,
      'Ideal - Receita': idealProj.receita,
      'Perspectiva 30% - Receita': perspProj.receita,
      'Ideal - Lucro': idealProj.lucro,
      'Perspectiva 30% - Lucro': perspProj.lucro,
    };
  });

  const totalIdeal = ideal.reduce((sum, p) => sum + p.receita, 0);
  const totalPerspectiva = perspectiva30.reduce((sum, p) => sum + p.receita, 0);
  const lucroIdeal = ideal.reduce((sum, p) => sum + p.lucro, 0);
  const lucroPerspectiva = perspectiva30.reduce((sum, p) => sum + p.lucro, 0);
  const diferencaReceita = totalPerspectiva - totalIdeal;
  const diferencaLucro = lucroPerspectiva - lucroIdeal;

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 border border-gray-200 dark:border-gray-700">
      <h2 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">
        Comparação de Projeções 2026
      </h2>
      
      {/* Resumo */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg border border-blue-200 dark:border-blue-800">
          <h3 className="font-semibold text-blue-900 dark:text-blue-300 mb-2">
            Projeção Ideal
          </h3>
          <p className="text-sm text-blue-700 dark:text-blue-400">
            <strong>Receita Total:</strong> {formatCurrency(totalIdeal)}
          </p>
          <p className="text-sm text-blue-700 dark:text-blue-400">
            <strong>Lucro Total:</strong> {formatCurrency(lucroIdeal)}
          </p>
          <p className="text-sm text-blue-700 dark:text-blue-400">
            <strong>Margem:</strong> {totalIdeal > 0 ? ((lucroIdeal / totalIdeal) * 100).toFixed(1) : '0'}%
          </p>
        </div>
        <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg border border-green-200 dark:border-green-800">
          <h3 className="font-semibold text-green-900 dark:text-green-300 mb-2">
            Perspectiva 30%
          </h3>
          <p className="text-sm text-green-700 dark:text-green-400">
            <strong>Receita Total:</strong> {formatCurrency(totalPerspectiva)}
          </p>
          <p className="text-sm text-green-700 dark:text-green-400">
            <strong>Lucro Total:</strong> {formatCurrency(lucroPerspectiva)}
          </p>
          <p className="text-sm text-green-700 dark:text-green-400">
            <strong>Margem:</strong> {totalPerspectiva > 0 ? ((lucroPerspectiva / totalPerspectiva) * 100).toFixed(1) : '0'}%
          </p>
        </div>
      </div>

      {/* Diferença */}
      <div className="bg-gray-50 dark:bg-gray-700/50 p-4 rounded-lg mb-6">
        <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
          Diferença (Perspectiva 30% vs Ideal)
        </h3>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <p className="text-sm text-gray-600 dark:text-gray-400">Receita Adicional</p>
            <p className="text-lg font-bold text-green-600 dark:text-green-400">
              {formatCurrency(diferencaReceita)} (+{((diferencaReceita / totalIdeal) * 100).toFixed(1)}%)
            </p>
          </div>
          <div>
            <p className="text-sm text-gray-600 dark:text-gray-400">Lucro Adicional</p>
            <p className="text-lg font-bold text-green-600 dark:text-green-400">
              {formatCurrency(diferencaLucro)} (+{lucroIdeal > 0 ? ((diferencaLucro / lucroIdeal) * 100).toFixed(1) : '0'}%)
            </p>
          </div>
        </div>
      </div>

      {/* Gráfico de Comparação */}
      <div className="mb-6">
        <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">
          Comparação Mensal - Receita
        </h3>
        <ResponsiveContainer width="100%" height={400}>
          <BarChart data={chartData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis 
              tickFormatter={formatCurrencyCompact}
              width={90}
              tick={{ fontSize: 11 }}
            />
            <Tooltip formatter={(value: number) => formatCurrency(value)} />
            <Legend />
            <Bar
              dataKey="Ideal - Receita"
              fill="#3b82f6"
              name="Ideal - Receita"
              radius={[8, 8, 0, 0]}
            />
            <Bar
              dataKey="Perspectiva 30% - Receita"
              fill="#10b981"
              name="Perspectiva 30% - Receita"
              radius={[8, 8, 0, 0]}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Gráfico de Lucro */}
      <div>
        <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">
          Comparação Mensal - Lucro
        </h3>
        <ResponsiveContainer width="100%" height={400}>
          <BarChart data={chartData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis 
              tickFormatter={formatCurrencyCompact}
              width={90}
              tick={{ fontSize: 11 }}
            />
            <Tooltip formatter={(value: number) => formatCurrency(value)} />
            <Legend />
            <Bar
              dataKey="Ideal - Lucro"
              fill="#3b82f6"
              name="Ideal - Lucro"
              radius={[8, 8, 0, 0]}
            />
            <Bar
              dataKey="Perspectiva 30% - Lucro"
              fill="#10b981"
              name="Perspectiva 30% - Lucro"
              radius={[8, 8, 0, 0]}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
