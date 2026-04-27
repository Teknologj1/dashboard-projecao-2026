'use client';

import { useState, useEffect } from 'react';
import { ChecklistSection, ChecklistItem } from '@/types/checklist';
import { checklistData } from '@/data/checklistData';
import { saveChecklistStatus, loadChecklistStatus, checkAndResetDailyChecklist } from '@/utils/checklistStorage';
import { startDailySnapshotScheduler } from '@/utils/dailySnapshotScheduler';

export default function Checklist() {
  const [sections, setSections] = useState<ChecklistSection[]>(checklistData);
  const [filter, setFilter] = useState<'all' | 'diaria' | 'semanal' | 'mensal'>('all');
  const [expandedObservations, setExpandedObservations] = useState<Set<string>>(new Set());

  // Verifica e reseta checklist diário se necessário
  useEffect(() => {
    const wasReset = checkAndResetDailyChecklist();
    if (wasReset) {
      // Recarrega dados após reset
      setSections(checklistData.map(section => ({
        ...section,
        items: section.items.map(item => ({
          ...item,
          checked: false,
          lastChecked: undefined,
          observacaoUsuario: undefined,
        })),
      })));
    } else {
      // Carrega status salvo do localStorage
      const savedStatus = loadChecklistStatus();
      if (Object.keys(savedStatus).length > 0) {
        setSections(prevSections => 
          prevSections.map(section => ({
            ...section,
            items: section.items.map(item => {
              const saved = savedStatus[item.id];
              if (saved) {
                return { 
                  ...item, 
                  checked: saved.checked || false, 
                  lastChecked: saved.lastChecked,
                  observacaoUsuario: saved.observacaoUsuario || undefined,
                };
              }
              return item;
            }),
          }))
        );
      }
    }

    // Inicia agendador de snapshot diário
    startDailySnapshotScheduler();

    return () => {
      // Cleanup se necessário
    };
  }, []);

  // Salva status no localStorage sempre que houver mudança
  useEffect(() => {
    // Evita salvar na primeira renderização (quando carrega dados)
    const isInitialLoad = sections.every(section => 
      section.items.every(item => item.checked === false && !item.lastChecked && !item.observacaoUsuario)
    );
    if (isInitialLoad) return;

    const status: Record<string, { checked: boolean; lastChecked?: string; observacaoUsuario?: string }> = {};
    sections.forEach(section => {
      section.items.forEach(item => {
        status[item.id] = {
          checked: item.checked || false,
          lastChecked: item.lastChecked,
          observacaoUsuario: item.observacaoUsuario,
        };
      });
    });
    
    // Salva usando a função utilitária (salva tudo de uma vez)
    if (Object.keys(status).length > 0) {
      // Salva o status completo
      try {
        localStorage.setItem('checklist_status', JSON.stringify(status));
        
        // Atualiza histórico apenas para itens que mudaram
        const history = JSON.parse(localStorage.getItem('checklist_history') || '[]');
        sections.forEach(section => {
          section.items.forEach(item => {
            if (status[item.id]?.checked && status[item.id]?.lastChecked) {
              // Verifica se já existe no histórico
              const exists = history.some((h: any) => 
                h.itemId === item.id && h.timestamp === status[item.id]?.lastChecked
              );
              if (!exists) {
                history.push({
                  itemId: item.id,
                  tarefa: item.tarefa,
                  checked: true,
                  timestamp: status[item.id].lastChecked,
                  responsavel: item.responsavel,
                  categoria: item.categoria,
                  frequencia: item.frequencia,
                  observacaoUsuario: status[item.id].observacaoUsuario,
                });
              }
            }
          });
        });
        
        // Mantém apenas os últimos 1000 registros
        if (history.length > 1000) {
          history.splice(0, history.length - 1000);
        }
        
        localStorage.setItem('checklist_history', JSON.stringify(history));
        window.dispatchEvent(new Event('checklistUpdated'));
      } catch (error) {
        console.error('Erro ao salvar checklist:', error);
      }
    }
  }, [sections]);

  const toggleItem = (itemId: string) => {
    setSections(prevSections => {
      const newSections = prevSections.map(section => ({
        ...section,
        items: section.items.map(item => {
          if (item.id === itemId) {
            const newChecked = !item.checked;
            return {
              ...item,
              checked: newChecked,
              lastChecked: newChecked ? new Date().toISOString() : undefined,
            };
          }
          return item;
        }),
      }));
      return newSections;
    });
  };

  const updateObservation = (itemId: string, observacao: string) => {
    setSections(prevSections => {
      const newSections = prevSections.map(section => ({
        ...section,
        items: section.items.map(item => {
          if (item.id === itemId) {
            return {
              ...item,
              observacaoUsuario: observacao || undefined,
            };
          }
          return item;
        }),
      }));
      return newSections;
    });
  };

  const toggleObservation = (itemId: string) => {
    setExpandedObservations(prev => {
      const newSet = new Set(prev);
      if (newSet.has(itemId)) {
        newSet.delete(itemId);
      } else {
        newSet.add(itemId);
      }
      return newSet;
    });
  };

  const resetSection = (sectionIndex: number) => {
    setSections(prevSections => {
      const newSections = [...prevSections];
      newSections[sectionIndex].items = newSections[sectionIndex].items.map(item => ({
        ...item,
        checked: false,
        lastChecked: undefined,
      }));
      return newSections;
    });
  };

  const filteredSections = filter === 'all' 
    ? sections 
    : sections.filter(s => s.frequency === filter);

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
    <div className="space-y-6">
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-4 sm:p-6 border border-gray-200 dark:border-gray-700">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-2">
              Organizador de Fluxo Administrativo e Financeiro
            </h2>
            <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400">
              {new Date().toLocaleDateString('pt-BR', { 
                weekday: 'long', 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric' 
              })}
            </p>
          </div>
          
          {/* Filtros */}
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setFilter('all')}
              className={`px-3 py-1.5 rounded-lg text-xs sm:text-sm font-medium transition-colors ${
                filter === 'all'
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
              }`}
            >
              Todas
            </button>
            <button
              onClick={() => setFilter('diaria')}
              className={`px-3 py-1.5 rounded-lg text-xs sm:text-sm font-medium transition-colors ${
                filter === 'diaria'
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
              }`}
            >
              Diária
            </button>
            <button
              onClick={() => setFilter('semanal')}
              className={`px-3 py-1.5 rounded-lg text-xs sm:text-sm font-medium transition-colors ${
                filter === 'semanal'
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
              }`}
            >
              Semanal
            </button>
            <button
              onClick={() => setFilter('mensal')}
              className={`px-3 py-1.5 rounded-lg text-xs sm:text-sm font-medium transition-colors ${
                filter === 'mensal'
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
              }`}
            >
              Mensal
            </button>
          </div>
        </div>

        {/* Seções do Checklist */}
        {filteredSections.map((section, sectionIndex) => {
          const checkedCount = section.items.filter(i => i.checked).length;
          const totalCount = section.items.length;
          
          return (
            <div
              key={sectionIndex}
              className="mb-6 p-4 sm:p-6 bg-gray-50 dark:bg-gray-900/50 rounded-lg border border-gray-200 dark:border-gray-700"
            >
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4 gap-2">
                <div className="flex-1">
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white mb-1">
                    {section.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">
                    {checkedCount} de {totalCount} tarefas concluídas ({Math.round((checkedCount / totalCount) * 100)}%)
                  </p>
                </div>
                <button
                  onClick={() => resetSection(sectionIndex)}
                  className="px-3 py-1.5 text-xs sm:text-sm bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-300 rounded-lg transition-colors"
                >
                  Resetar Seção
                </button>
              </div>

              <div className="space-y-3">
                {section.items.map((item, itemIndex) => (
                  <div
                    key={item.id}
                    className={`p-3 sm:p-4 rounded-lg border transition-all ${
                      item.checked
                        ? 'bg-green-50 dark:bg-green-900/20 border-green-200 dark:border-green-800'
                        : 'bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700'
                    }`}
                  >
                    <div className="flex items-start gap-2 sm:gap-3">
                      <input
                        type="checkbox"
                        checked={item.checked || false}
                        onChange={() => toggleItem(item.id)}
                        className="mt-1 w-5 h-5 sm:w-6 sm:h-6 text-blue-600 border-gray-300 rounded focus:ring-blue-500 cursor-pointer touch-manipulation"
                      />
                      <div className="flex-1 min-w-0">
                        <div className="flex flex-wrap items-center gap-2 mb-2">
                          <span className={`px-2 py-1 rounded text-xs font-medium ${getCategoryColor(item.categoria)}`}>
                            {item.categoria.charAt(0).toUpperCase() + item.categoria.slice(1)}
                          </span>
                          <span className="text-xs sm:text-sm text-gray-500 dark:text-gray-400">
                            {item.etapa}
                          </span>
                        </div>
                        <h4 className="text-sm sm:text-base font-semibold text-gray-900 dark:text-white mb-2 break-words">
                          {item.tarefa}
                        </h4>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm text-gray-600 dark:text-gray-400 break-words">
                          <div>
                            <strong>Responsável:</strong> <span className="break-words">{item.responsavel}</span>
                          </div>
                          <div>
                            <strong>Ferramenta:</strong> <span className="break-words">{item.ferramenta}</span>
                          </div>
                        </div>
                        {item.observacoes && (
                          <div className="mt-2 text-xs sm:text-sm text-gray-500 dark:text-gray-500 italic">
                            💡 {item.observacoes}
                          </div>
                        )}
                        {item.checked && item.lastChecked && (
                          <div className="mt-2 text-xs text-green-600 dark:text-green-400">
                            ✓ Concluído em {new Date(item.lastChecked).toLocaleString('pt-BR')}
                          </div>
                        )}
                        {/* Botão e campo de observação do usuário */}
                        <div className="mt-2">
                          <button
                            onClick={() => toggleObservation(item.id)}
                            className="text-xs sm:text-sm text-blue-600 dark:text-blue-400 hover:underline py-1 touch-manipulation"
                            type="button"
                          >
                            {expandedObservations.has(item.id) ? '✕ Ocultar observação' : '+ Incluir observação'}
                          </button>
                          {expandedObservations.has(item.id) && (
                            <div className="mt-2">
                              <textarea
                                value={item.observacaoUsuario || ''}
                                onChange={(e) => {
                                  const value = e.target.value.slice(0, 150);
                                  updateObservation(item.id, value);
                                }}
                                placeholder="Digite sua observação (máx 150 caracteres)"
                                maxLength={150}
                                rows={3}
                                className="w-full px-2 sm:px-3 py-2 text-xs sm:text-sm border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white resize-none"
                              />
                              <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                                {(item.observacaoUsuario || '').length}/150 caracteres
                              </p>
                            </div>
                          )}
                          {item.observacaoUsuario && !expandedObservations.has(item.id) && (
                            <div className="mt-1 text-xs text-gray-600 dark:text-gray-400 italic break-words">
                              📝 {item.observacaoUsuario.length > 50 
                                ? item.observacaoUsuario.substring(0, 50) + '...' 
                                : item.observacaoUsuario}
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

