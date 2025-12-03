'use client';

import { useMemo } from 'react';
import {
  ComposedChart,
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
import { DrillDownState } from '@/types/drillDown';
import { reportData } from '@/data/reportData';

interface ComparisonChartProps {
  state: DrillDownState;
}

export default function ComparisonChart({ state }: ComparisonChartProps) {
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

  // Compara com período anterior
  const comparisonData = useMemo(() => {
    const data: Array<{ name: string; atual: number; anterior?: number; diferenca?: number }> = [];

    switch (state.level) {
      case 'ano':
        // Compara anos consecutivos
        const anos = [...new Set(reportData.relatorios.map(r => r.ano))].sort();
        anos.forEach((ano, index) => {
          const relatoriosAno = reportData.relatorios.filter(r => r.ano === ano);
          const total = relatoriosAno.reduce((sum, r) => sum + r.totalVendas, 0);
          
          const anterior = index > 0 ? anos[index - 1] : undefined;
          const totalAnterior = anterior
            ? reportData.relatorios
                .filter(r => r.ano === anterior)
                .reduce((sum, r) => sum + r.totalVendas, 0)
            : undefined;

          data.push({
            name: ano.toString(),
            atual: total,
            anterior: totalAnterior,
            diferenca: totalAnterior ? total - totalAnterior : undefined,
          });
        });
        break;

      case 'mes':
        if (state.selectedYear) {
          const relatoriosAno = reportData.relatorios
            .filter(r => r.ano === state.selectedYear)
            .sort((a, b) => a.mes - b.mes); // Ordena por mês
          const anoAnterior = state.selectedYear - 1;
          const relatoriosAnoAnterior = reportData.relatorios
            .filter(r => r.ano === anoAnterior)
            .sort((a, b) => a.mes - b.mes);

          relatoriosAno.forEach(rel => {
            const relAnterior = relatoriosAnoAnterior.find(r => r.mes === rel.mes);
            data.push({
              name: rel.mesNome,
              atual: rel.totalVendas,
              anterior: relAnterior?.totalVendas,
              diferenca: relAnterior ? rel.totalVendas - relAnterior.totalVendas : undefined,
            });
          });
        }
        break;

      case 'especialidade':
        if (state.selectedYear && state.selectedMonth) {
          const relatorio = reportData.relatorios.find(
            r => r.ano === state.selectedYear && r.mes === state.selectedMonth
          );
          const relatorioAnterior = reportData.relatorios.find(
            r => {
              if (state.selectedMonth === 1) {
                return r.ano === (state.selectedYear! - 1) && r.mes === 12;
              }
              return r.ano === state.selectedYear && r.mes === (state.selectedMonth! - 1);
            }
          );

          if (relatorio) {
            Object.entries(relatorio.totalPorEspecialidade).forEach(([esp, valor]) => {
              const valorAnterior = relatorioAnterior?.totalPorEspecialidade[esp] || 0;
              data.push({
                name: esp,
                atual: valor,
                anterior: valorAnterior > 0 ? valorAnterior : undefined,
                diferenca: valorAnterior > 0 ? valor - valorAnterior : undefined,
              });
            });
          }
        } else if (state.selectedYear) {
          // Agrega especialidades do ano
          const relatoriosAno = reportData.relatorios.filter(r => r.ano === state.selectedYear);
          const anoAnterior = state.selectedYear - 1;
          const relatoriosAnoAnterior = reportData.relatorios.filter(r => r.ano === anoAnterior);

          const totais: Record<string, number> = {};
          const totaisAnterior: Record<string, number> = {};

          relatoriosAno.forEach(rel => {
            Object.entries(rel.totalPorEspecialidade).forEach(([esp, valor]) => {
              totais[esp] = (totais[esp] || 0) + valor;
            });
          });

          relatoriosAnoAnterior.forEach(rel => {
            Object.entries(rel.totalPorEspecialidade).forEach(([esp, valor]) => {
              totaisAnterior[esp] = (totaisAnterior[esp] || 0) + valor;
            });
          });

          Object.entries(totais).forEach(([esp, valor]) => {
            const valorAnterior = totaisAnterior[esp] || 0;
            data.push({
              name: esp,
              atual: valor,
              anterior: valorAnterior > 0 ? valorAnterior : undefined,
              diferenca: valorAnterior > 0 ? valor - valorAnterior : undefined,
            });
          });
        }
        break;
    }

    // Mantém ordem cronológica para anos e meses, ordena por valor para outros
    if (state.level === 'ano') {
      // Já está ordenado cronologicamente
      return data;
    } else if (state.level === 'mes') {
      // Ordena por mês (já deve estar ordenado, mas garante)
      const mesesOrder = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho',
        'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];
      return data.sort((a, b) => {
        const indexA = mesesOrder.indexOf(a.name);
        const indexB = mesesOrder.indexOf(b.name);
        return indexA - indexB;
      });
    } else {
      // Para especialidades e tratamentos, ordena por valor
      return data.sort((a, b) => b.atual - a.atual);
    }
  }, [state]);

  if (comparisonData.length === 0) {
    return (
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 border border-gray-200 dark:border-gray-700">
        <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">
          Comparação Temporal
        </h3>
        <p className="text-gray-500 dark:text-gray-400">
          Selecione um nível no gráfico principal para ver a comparação
        </p>
      </div>
    );
  }

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 border border-gray-200 dark:border-gray-700">
      <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">
        Comparação Temporal
      </h3>
      <ResponsiveContainer width="100%" height={350}>
        <ComposedChart data={comparisonData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis 
            dataKey="name" 
            angle={-45}
            textAnchor="end"
            height={100}
            tick={{ fontSize: 12 }}
          />
          <YAxis 
            tickFormatter={formatCurrencyCompact}
            width={90}
            tick={{ fontSize: 11 }}
          />
          <Tooltip 
            formatter={(value: number) => formatCurrency(value)}
            labelFormatter={(label) => ` ${label}`}
          />
          <Legend />
          <Bar
            dataKey="atual"
            fill="#3b82f6"
            name="Período Atual"
            radius={[8, 8, 0, 0]}
          />
          {comparisonData.some(d => d.anterior !== undefined) && (
            <Bar
              dataKey="anterior"
              fill="#94a3b8"
              name="Período Anterior"
              radius={[8, 8, 0, 0]}
            />
          )}
          <Line
            type="monotone"
            dataKey="atual"
            stroke="#10b981"
            strokeWidth={3}
            dot={{ r: 4 }}
            name="Tendência Atual"
            connectNulls
          />
          {comparisonData.some(d => d.anterior !== undefined) && (
            <Line
              type="monotone"
              dataKey="anterior"
              stroke="#64748b"
              strokeWidth={2}
              strokeDasharray="5 5"
              dot={{ r: 3 }}
              name="Tendência Anterior"
              connectNulls
            />
          )}
        </ComposedChart>
      </ResponsiveContainer>
      
      {/* Estatísticas de diferença */}
      {comparisonData.some(d => d.diferenca !== undefined) && (
        <div className="mt-4 p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
          <h4 className="text-sm font-semibold mb-2 text-gray-700 dark:text-gray-300">
            Resumo de Diferenças
          </h4>
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div>
              <span className="text-gray-600 dark:text-gray-400">Crescimento: </span>
              <span className="font-semibold text-green-600 dark:text-green-400">
                {comparisonData
                  .filter(d => d.diferenca && d.diferenca > 0)
                  .length} itens
              </span>
            </div>
            <div>
              <span className="text-gray-600 dark:text-gray-400">Declínio: </span>
              <span className="font-semibold text-red-600 dark:text-red-400">
                {comparisonData
                  .filter(d => d.diferenca && d.diferenca < 0)
                  .length} itens
              </span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
