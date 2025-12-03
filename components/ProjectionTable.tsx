'use client';

import { Projection2026 } from '@/types/data';

interface ProjectionTableProps {
  projections: Projection2026[];
}

export default function ProjectionTable({ projections }: ProjectionTableProps) {
  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
      minimumFractionDigits: 2,
    }).format(value);
  };

  const totalReceita = projections.reduce((sum, p) => sum + p.receita, 0);
  const totalDespesa = projections.reduce((sum, p) => sum + p.despesa, 0);
  const totalLucro = projections.reduce((sum, p) => sum + p.lucro, 0);

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 border border-gray-200 dark:border-gray-700">
      <h2 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">
        Projeção Detalhada 2026
      </h2>
      <div className="overflow-x-auto">
        <table className="w-full text-sm text-left">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-300">
            <tr>
              <th className="px-4 py-3">Mês</th>
              <th className="px-4 py-3 text-right">Receita</th>
              <th className="px-4 py-3 text-right">Despesa</th>
              <th className="px-4 py-3 text-right">Lucro Líquido</th>
              <th className="px-4 py-3 text-right">Margem (%)</th>
            </tr>
          </thead>
          <tbody>
            {projections.map((projection, index) => {
              const margem =
                projection.receita > 0
                  ? (projection.lucro / projection.receita) * 100
                  : 0;
              return (
                <tr
                  key={index}
                  className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700"
                >
                  <td className="px-4 py-3 font-medium text-gray-900 dark:text-white">
                    {projection.month}
                  </td>
                  <td className="px-4 py-3 text-right text-gray-900 dark:text-white">
                    {formatCurrency(projection.receita)}
                  </td>
                  <td className="px-4 py-3 text-right text-gray-900 dark:text-white">
                    {formatCurrency(projection.despesa)}
                  </td>
                  <td
                    className={`px-4 py-3 text-right font-semibold ${
                      projection.lucro >= 0
                        ? 'text-green-600 dark:text-green-400'
                        : 'text-red-600 dark:text-red-400'
                    }`}
                  >
                    {formatCurrency(projection.lucro)}
                  </td>
                  <td
                    className={`px-4 py-3 text-right ${
                      margem >= 0
                        ? 'text-green-600 dark:text-green-400'
                        : 'text-red-600 dark:text-red-400'
                    }`}
                  >
                    {margem.toFixed(1)}%
                  </td>
                </tr>
              );
            })}
            <tr className="bg-gray-100 dark:bg-gray-700 font-bold">
              <td className="px-4 py-3 text-gray-900 dark:text-white">TOTAL</td>
              <td className="px-4 py-3 text-right text-gray-900 dark:text-white">
                {formatCurrency(totalReceita)}
              </td>
              <td className="px-4 py-3 text-right text-gray-900 dark:text-white">
                {formatCurrency(totalDespesa)}
              </td>
              <td
                className={`px-4 py-3 text-right ${
                  totalLucro >= 0
                    ? 'text-green-600 dark:text-green-400'
                    : 'text-red-600 dark:text-red-400'
                }`}
              >
                {formatCurrency(totalLucro)}
              </td>
              <td
                className={`px-4 py-3 text-right ${
                  totalReceita > 0 && (totalLucro / totalReceita) * 100 >= 0
                    ? 'text-green-600 dark:text-green-400'
                    : 'text-red-600 dark:text-red-400'
                }`}
              >
                {totalReceita > 0
                  ? ((totalLucro / totalReceita) * 100).toFixed(1)
                  : '0.0'}
                %
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

