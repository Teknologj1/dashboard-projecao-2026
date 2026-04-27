'use client';

import { useState, useEffect, useMemo } from 'react';
import { ChecklistSection, ChecklistItem } from '@/types/checklist';
import { checklistData } from '@/data/checklistData';
import { loadChecklistStatus, getChecklistHistory } from '@/utils/checklistStorage';
import ChecklistDataManager from './ChecklistDataManager';

const STORAGE_KEY = 'checklist_status';
const HISTORY_KEY = 'checklist_history';

interface ActivityRecord {
  id: string;
  tarefa: string;
  etapa: string;
  categoria: string;
  frequencia: 'diaria' | 'semanal' | 'mensal';
  dataConclusao: string;
  responsavel: string;
  ferramenta?: string;
  observacoes?: string;
  observacaoUsuario?: string;
}

export default function DailyActivityReport() {
  const [activities, setActivities] = useState<ActivityRecord[]>([]);
  const [filterDate, setFilterDate] = useState<string>('');
  const [filterFrequency, setFilterFrequency] = useState<'all' | 'diaria' | 'semanal' | 'mensal'>('all');

  const loadActivities = () => {
    try {
      // Carrega do histórico completo (mais confiável)
      const history = getChecklistHistory();
      const savedStatus = loadChecklistStatus();
      
      // Cria um mapa de itens do checklist para acesso rápido
      const itemsMap = new Map<string, ChecklistItem>();
      checklistData.forEach(section => {
        section.items.forEach(item => {
          itemsMap.set(item.id, item);
        });
      });

      // Processa histórico e status atual
      const allActivities: ActivityRecord[] = [];
      const processedIds = new Set<string>();

      // Primeiro, adiciona do histórico (todas as marcações)
      history.forEach(entry => {
        if (entry.checked && !processedIds.has(`${entry.itemId}-${entry.timestamp}`)) {
          const item = itemsMap.get(entry.itemId);
          if (item) {
            allActivities.push({
              id: entry.itemId,
              tarefa: entry.tarefa,
              etapa: item.etapa,
              categoria: entry.categoria,
              frequencia: entry.frequencia,
              dataConclusao: entry.timestamp,
              responsavel: entry.responsavel,
              ferramenta: item.ferramenta,
              observacoes: item.observacoes,
              observacaoUsuario: entry.observacaoUsuario,
            });
            processedIds.add(`${entry.itemId}-${entry.timestamp}`);
          }
        }
      });

      // Depois, adiciona do status atual (para garantir que não perdeu nada)
      checklistData.forEach(section => {
        section.items.forEach(item => {
          const status = savedStatus[item.id];
          if (status?.checked && status.lastChecked) {
            const key = `${item.id}-${status.lastChecked}`;
            if (!processedIds.has(key)) {
              allActivities.push({
                id: item.id,
                tarefa: item.tarefa,
                etapa: item.etapa,
                categoria: item.categoria,
                frequencia: item.frequencia,
                dataConclusao: status.lastChecked,
                responsavel: item.responsavel,
                ferramenta: item.ferramenta,
                observacoes: item.observacoes,
                observacaoUsuario: status.observacaoUsuario,
              });
            }
          }
        });
      });

      setActivities(allActivities);
    } catch (error) {
      console.error('Erro ao carregar atividades:', error);
    }
  };

  useEffect(() => {
    // Carrega atividades do localStorage
    loadActivities();

    // Listener para atualizar quando o localStorage mudar
    const handleStorageChange = (e: StorageEvent) => {
      if (e.key === STORAGE_KEY || e.key === HISTORY_KEY) {
        loadActivities();
      }
    };

    // Listener customizado para mudanças no mesmo tab
    const handleCustomStorageChange = () => {
      loadActivities();
    };

    window.addEventListener('storage', handleStorageChange);
    window.addEventListener('checklistUpdated', handleCustomStorageChange);

    // Polling para verificar mudanças (fallback)
    const interval = setInterval(loadActivities, 1000);

    return () => {
      window.removeEventListener('storage', handleStorageChange);
      window.removeEventListener('checklistUpdated', handleCustomStorageChange);
      clearInterval(interval);
    };
  }, []);

  // Filtra atividades
  const filteredActivities = useMemo(() => {
    let filtered = [...activities];

    // Filtro por data (apenas se uma data foi selecionada)
    if (filterDate) {
      const filterDateObj = new Date(filterDate + 'T00:00:00');
      filtered = filtered.filter(activity => {
        const activityDate = new Date(activity.dataConclusao);
        return (
          activityDate.getFullYear() === filterDateObj.getFullYear() &&
          activityDate.getMonth() === filterDateObj.getMonth() &&
          activityDate.getDate() === filterDateObj.getDate()
        );
      });
    }

    // Filtro por frequência
    if (filterFrequency !== 'all') {
      filtered = filtered.filter(activity => activity.frequencia === filterFrequency);
    }

    // Ordena por data de conclusão (mais recente primeiro)
    return filtered.sort((a, b) => 
      new Date(b.dataConclusao).getTime() - new Date(a.dataConclusao).getTime()
    );
  }, [activities, filterDate, filterFrequency]);

  // Estatísticas
  const stats = useMemo(() => {
    const today = new Date().toISOString().split('T')[0];
    const todayActivities = activities.filter(a => 
      a.dataConclusao.startsWith(today)
    );

    return {
      total: activities.length,
      hoje: todayActivities.length,
      porFrequencia: {
        diaria: activities.filter(a => a.frequencia === 'diaria').length,
        semanal: activities.filter(a => a.frequencia === 'semanal').length,
        mensal: activities.filter(a => a.frequencia === 'mensal').length,
      },
    };
  }, [activities]);

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

  const getFrequencyLabel = (freq: string) => {
    const labels: Record<string, string> = {
      diaria: 'Diária',
      semanal: 'Semanal',
      mensal: 'Mensal',
    };
    return labels[freq] || freq;
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-3 sm:p-4 md:p-6 border border-gray-200 dark:border-gray-700">
      <div className="mb-4 sm:mb-6">
        <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-2">
          Relatório de Acompanhamento Diário
        </h2>
        <p className="text-sm text-gray-600 dark:text-gray-400">
          Histórico completo de todas as marcações individuais de atividades concluídas
        </p>
      </div>

      {/* Estatísticas */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 mb-4 sm:mb-6">
        <div className="bg-blue-50 dark:bg-blue-900/20 p-3 sm:p-4 rounded-lg border border-blue-200 dark:border-blue-800">
          <p className="text-xs sm:text-sm text-blue-600 dark:text-blue-400 mb-1">Total</p>
          <p className="text-lg sm:text-2xl font-bold text-blue-900 dark:text-blue-200">
            {stats.total}
          </p>
        </div>
        <div className="bg-green-50 dark:bg-green-900/20 p-3 sm:p-4 rounded-lg border border-green-200 dark:border-green-800">
          <p className="text-xs sm:text-sm text-green-600 dark:text-green-400 mb-1">Hoje</p>
          <p className="text-lg sm:text-2xl font-bold text-green-900 dark:text-green-200">
            {stats.hoje}
          </p>
        </div>
        <div className="bg-purple-50 dark:bg-purple-900/20 p-3 sm:p-4 rounded-lg border border-purple-200 dark:border-purple-800">
          <p className="text-xs sm:text-sm text-purple-600 dark:text-purple-400 mb-1">Semanal</p>
          <p className="text-lg sm:text-2xl font-bold text-purple-900 dark:text-purple-200">
            {stats.porFrequencia.semanal}
          </p>
        </div>
        <div className="bg-orange-50 dark:bg-orange-900/20 p-3 sm:p-4 rounded-lg border border-orange-200 dark:border-orange-800">
          <p className="text-xs sm:text-sm text-orange-600 dark:text-orange-400 mb-1">Mensal</p>
          <p className="text-lg sm:text-2xl font-bold text-orange-900 dark:text-orange-200">
            {stats.porFrequencia.mensal}
          </p>
        </div>
      </div>

      {/* Filtros */}
      <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-4 sm:mb-6">
        <div className="flex-1">
          <label className="block text-xs sm:text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            Filtrar por Data
          </label>
          <div className="flex gap-2">
            <input
              type="date"
              value={filterDate}
              onChange={(e) => setFilterDate(e.target.value)}
              className="flex-1 px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white text-sm"
            />
            {filterDate && (
              <button
                onClick={() => setFilterDate('')}
                className="px-3 py-2 bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-300 rounded-lg transition-colors text-sm"
                title="Limpar filtro de data"
              >
                ✕
              </button>
            )}
          </div>
          <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
            {filterDate ? `Mostrando atividades de ${new Date(filterDate).toLocaleDateString('pt-BR')}` : 'Mostrando todas as atividades'}
          </p>
        </div>
        <div className="flex-1">
          <label className="block text-xs sm:text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            Filtrar por Frequência
          </label>
          <select
            value={filterFrequency}
            onChange={(e) => setFilterFrequency(e.target.value as any)}
            className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white text-sm"
          >
            <option value="all">Todas</option>
            <option value="diaria">Diária</option>
            <option value="semanal">Semanal</option>
            <option value="mensal">Mensal</option>
          </select>
        </div>
      </div>

      {/* Lista de Atividades */}
      <div className="space-y-3">
        {filteredActivities.length === 0 ? (
          <div className="text-center py-8 text-gray-500 dark:text-gray-400">
            <p className="text-sm">Nenhuma atividade encontrada para o filtro selecionado.</p>
          </div>
        ) : (
          filteredActivities.map((activity) => (
            <div
              key={`${activity.id}-${activity.dataConclusao}`}
              className="p-3 sm:p-4 rounded-lg border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900/50"
            >
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2">
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-2 mb-2">
                    <span className={`px-2 py-1 rounded text-xs font-medium ${getCategoryColor(activity.categoria)}`}>
                      {activity.categoria.charAt(0).toUpperCase() + activity.categoria.slice(1)}
                    </span>
                    <span className="text-xs text-gray-500 dark:text-gray-400">
                      {getFrequencyLabel(activity.frequencia)}
                    </span>
                    <span className="text-xs text-gray-500 dark:text-gray-400">
                      {activity.etapa}
                    </span>
                  </div>
                  <h4 className="text-sm sm:text-base font-semibold text-gray-900 dark:text-white mb-2">
                    {activity.tarefa}
                  </h4>
                  <div className="space-y-1 text-xs sm:text-sm text-gray-600 dark:text-gray-400">
                    <p>
                      <strong>Responsável:</strong> {activity.responsavel}
                    </p>
                    {activity.ferramenta && (
                      <p>
                        <strong>Ferramenta:</strong> {activity.ferramenta}
                      </p>
                    )}
                    {activity.observacoes && (
                      <p className="italic text-gray-500 dark:text-gray-500 mt-1">
                        💡 {activity.observacoes}
                      </p>
                    )}
                    {activity.observacaoUsuario && (
                      <div className="mt-2 p-2 bg-blue-50 dark:bg-blue-900/20 rounded border border-blue-200 dark:border-blue-800">
                        <p className="text-xs font-medium text-blue-700 dark:text-blue-300 mb-1">
                          📝 Observação do Usuário:
                        </p>
                        <p className="text-xs text-blue-900 dark:text-blue-200 break-words whitespace-pre-wrap">
                          {activity.observacaoUsuario}
                        </p>
                      </div>
                    )}
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400">
                    Concluído em:
                  </p>
                  <p className="text-xs sm:text-sm font-medium text-green-600 dark:text-green-400">
                    {new Date(activity.dataConclusao).toLocaleString('pt-BR', {
                      day: '2-digit',
                      month: '2-digit',
                      year: 'numeric',
                      hour: '2-digit',
                      minute: '2-digit',
                    })}
                  </p>
                </div>
              </div>
            </div>
          ))
        )}
      </div>

      {/* Resumo */}
      {filteredActivities.length > 0 && (
        <div className="mt-4 sm:mt-6 pt-4 border-t border-gray-200 dark:border-gray-700">
          <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 text-center">
            Total de atividades exibidas: <strong>{filteredActivities.length}</strong>
          </p>
        </div>
      )}

      {/* Gerenciamento de Dados */}
      <div className="mt-6 sm:mt-8 pt-6 border-t border-gray-200 dark:border-gray-700">
        <ChecklistDataManager />
      </div>
    </div>
  );
}

