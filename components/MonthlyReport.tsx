'use client';

import { useState, useEffect, useMemo } from 'react';
import { getMonthlySnapshots, DailySnapshot } from '@/utils/checklistStorage';

export default function MonthlyReport() {
  const [selectedYear, setSelectedYear] = useState<number>(new Date().getFullYear());
  const [selectedMonth, setSelectedMonth] = useState<number>(new Date().getMonth() + 1);
  const [snapshots, setSnapshots] = useState<DailySnapshot[]>([]);

  useEffect(() => {
    loadSnapshots();
  }, [selectedYear, selectedMonth]);

  const loadSnapshots = () => {
    const monthly = getMonthlySnapshots(selectedYear, selectedMonth);
    setSnapshots(monthly.sort((a, b) => a.date.localeCompare(b.date)));
  };

  const meses = [
    'Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho',
    'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'
  ];

  // Estatísticas do mês
  const stats = useMemo(() => {
    let totalChecked = 0;
    let totalItems = 0;
    const byCategory: Record<string, number> = {};
    const byFrequency: Record<string, number> = {};

    snapshots.forEach(snapshot => {
      snapshot.items.forEach(item => {
        totalItems++;
        if (item.checked) {
          totalChecked++;
          byCategory[item.categoria] = (byCategory[item.categoria] || 0) + 1;
          byFrequency[item.frequencia] = (byFrequency[item.frequencia] || 0) + 1;
        }
      });
    });

    return {
      totalChecked,
      totalItems,
      byCategory,
      byFrequency,
      completionRate: totalItems > 0 ? (totalChecked / totalItems) * 100 : 0,
    };
  }, [snapshots]);

  const getCategoryColor = (category: string) => {
    const colors: Record<string, string> = {
      financeiro: 'bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-200',
      contratos: 'bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-200',
      administrativo: 'bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-200',
      compras: 'bg-yellow-100 dark:bg-yellow-900/30 text-yellow-800 dark:text-yellow-200',
      marketing: 'bg-pink-100 dark:bg-pink-900/30 text-pink-800 dark:text-pink-200',
      equipe: 'bg-indigo-100 dark:bg-indigo-900/30 text-indigo-800 dark:text-indigo-200',
      fiscal: 'bg-red-100 dark:bg-red-900/30 text-red-800 dark:text-red-200',
      estrategico: 'bg-cyan-100 dark:bg-cyan-900/30 text-cyan-800 dark:text-cyan-200',
      rh: 'bg-orange-100 dark:bg-orange-900/30 text-orange-800 dark:text-orange-200',
    };
    return colors[category] || 'bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200';
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-3 sm:p-4 md:p-6 border border-gray-200 dark:border-gray-700">
      <div className="mb-4 sm:mb-6">
        <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-2">
          Relatório Mensal de Atividades
        </h2>
        <p className="text-sm text-gray-600 dark:text-gray-400">
          Estado do checklist ao final de cada dia (snapshots diários às 23:59)
        </p>
      </div>

      {/* Filtros de Mês/Ano */}
      <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-4 sm:mb-6">
        <div className="flex-1">
          <label className="block text-xs sm:text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            Ano
          </label>
          <select
            value={selectedYear}
            onChange={(e) => setSelectedYear(parseInt(e.target.value))}
            className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white text-sm"
          >
            {Array.from({ length: 5 }, (_, i) => new Date().getFullYear() - 2 + i).map(year => (
              <option key={year} value={year}>{year}</option>
            ))}
          </select>
        </div>
        <div className="flex-1">
          <label className="block text-xs sm:text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            Mês
          </label>
          <select
            value={selectedMonth}
            onChange={(e) => setSelectedMonth(parseInt(e.target.value))}
            className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white text-sm"
          >
            {meses.map((mes, index) => (
              <option key={index + 1} value={index + 1}>{mes}</option>
            ))}
          </select>
        </div>
      </div>

      {/* Estatísticas */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 mb-4 sm:mb-6">
        <div className="bg-blue-50 dark:bg-blue-900/20 p-3 sm:p-4 rounded-lg border border-blue-200 dark:border-blue-800">
          <p className="text-xs sm:text-sm text-blue-600 dark:text-blue-400 mb-1">Dias com Registro</p>
          <p className="text-lg sm:text-2xl font-bold text-blue-900 dark:text-blue-200">
            {snapshots.length}
          </p>
        </div>
        <div className="bg-green-50 dark:bg-green-900/20 p-3 sm:p-4 rounded-lg border border-green-200 dark:border-green-800">
          <p className="text-xs sm:text-sm text-green-600 dark:text-green-400 mb-1">Tarefas Concluídas</p>
          <p className="text-lg sm:text-2xl font-bold text-green-900 dark:text-green-200">
            {stats.totalChecked}
          </p>
        </div>
        <div className="bg-purple-50 dark:bg-purple-900/20 p-3 sm:p-4 rounded-lg border border-purple-200 dark:border-purple-800">
          <p className="text-xs sm:text-sm text-purple-600 dark:text-purple-400 mb-1">Taxa de Conclusão</p>
          <p className="text-lg sm:text-2xl font-bold text-purple-900 dark:text-purple-200">
            {stats.completionRate.toFixed(1)}%
          </p>
        </div>
        <div className="bg-orange-50 dark:bg-orange-900/20 p-3 sm:p-4 rounded-lg border border-orange-200 dark:border-orange-800">
          <p className="text-xs sm:text-sm text-orange-600 dark:text-orange-400 mb-1">Total de Itens</p>
          <p className="text-lg sm:text-2xl font-bold text-orange-900 dark:text-orange-200">
            {stats.totalItems}
          </p>
        </div>
      </div>

      {/* Lista de Dias */}
      <div className="space-y-4">
        {snapshots.length === 0 ? (
          <div className="text-center py-8 text-gray-500 dark:text-gray-400">
            <p className="text-sm">Nenhum registro encontrado para {meses[selectedMonth - 1]} de {selectedYear}.</p>
          </div>
        ) : (
          snapshots.map((snapshot) => {
            const checkedItems = snapshot.items.filter(item => item.checked);
            const date = new Date(snapshot.date);
            
            return (
              <div
                key={snapshot.date}
                className="p-4 sm:p-6 rounded-lg border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900/50"
              >
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4 gap-2">
                  <div>
                    <h3 className="text-base sm:text-lg md:text-xl font-bold text-gray-900 dark:text-white break-words">
                      {date.toLocaleDateString('pt-BR', { 
                        weekday: 'long', 
                        day: 'numeric', 
                        month: 'long', 
                        year: 'numeric' 
                      })}
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 mt-1">
                      {checkedItems.length} de {snapshot.items.length} tarefas concluídas
                    </p>
                  </div>
                </div>

                {checkedItems.length > 0 ? (
                  <div className="space-y-2">
                    {checkedItems.map((item) => (
                      <div
                        key={item.itemId}
                        className="p-3 rounded-lg border border-green-200 dark:border-green-800 bg-green-50 dark:bg-green-900/20"
                      >
                        <div className="flex flex-wrap items-center gap-2 mb-2">
                          <span className={`px-2 py-1 rounded text-xs font-medium ${getCategoryColor(item.categoria)}`}>
                            {item.categoria.charAt(0).toUpperCase() + item.categoria.slice(1)}
                          </span>
                          <span className="text-xs text-gray-500 dark:text-gray-400">
                            {item.frequencia === 'diaria' ? 'Diária' : item.frequencia === 'semanal' ? 'Semanal' : 'Mensal'}
                          </span>
                        </div>
                        <h4 className="text-sm sm:text-base font-semibold text-gray-900 dark:text-white mb-1 break-words">
                          {item.tarefa}
                        </h4>
                        <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 mb-1">
                          <strong>Responsável:</strong> {item.responsavel}
                        </p>
                        {item.observacaoUsuario && (
                          <div className="mt-2 p-2 bg-white dark:bg-gray-800 rounded border border-gray-200 dark:border-gray-700">
                            <p className="text-xs font-medium text-gray-700 dark:text-gray-300 mb-1">
                              📝 Observação:
                            </p>
                            <p className="text-xs text-gray-600 dark:text-gray-400 break-words whitespace-pre-wrap">
                              {item.observacaoUsuario}
                            </p>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className="text-sm text-gray-500 dark:text-gray-400 italic">
                    Nenhuma tarefa foi concluída neste dia.
                  </p>
                )}
              </div>
            );
          })
        )}
      </div>
    </div>
  );
}

