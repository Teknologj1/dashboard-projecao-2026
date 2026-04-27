/**
 * Utilitários para persistência do checklist
 */

const STORAGE_KEY = 'checklist_status';
const HISTORY_KEY = 'checklist_history';

export interface ChecklistStatus {
  checked: boolean;
  lastChecked?: string;
  observacaoUsuario?: string;
}

export interface ChecklistHistoryEntry {
  itemId: string;
  tarefa: string;
  checked: boolean;
  timestamp: string;
  responsavel: string;
  categoria: string;
  frequencia: 'diaria' | 'semanal' | 'mensal';
  observacaoUsuario?: string;
}

export interface DailySnapshot {
  date: string; // YYYY-MM-DD
  timestamp: string; // ISO string
  items: Array<{
    itemId: string;
    tarefa: string;
    checked: boolean;
    responsavel: string;
    categoria: string;
    frequencia: 'diaria' | 'semanal' | 'mensal';
    observacaoUsuario?: string;
  }>;
}

export interface ChecklistStorage {
  status: Record<string, ChecklistStatus>;
  history: ChecklistHistoryEntry[];
  lastUpdated: string;
}

/**
 * Salva o status atual do checklist
 */
export function saveChecklistStatus(
  status: Record<string, ChecklistStatus>,
  itemId: string,
  itemData: {
    tarefa: string;
    responsavel: string;
    categoria: string;
    frequencia: 'diaria' | 'semanal' | 'mensal';
  }
) {
  try {
    // Salva status atual
    localStorage.setItem(STORAGE_KEY, JSON.stringify(status));

    // Adiciona ao histórico
    const history = getChecklistHistory();
    const newEntry: ChecklistHistoryEntry = {
      itemId,
      tarefa: itemData.tarefa,
      checked: status[itemId]?.checked || false,
      timestamp: new Date().toISOString(),
      responsavel: itemData.responsavel,
      categoria: itemData.categoria,
      frequencia: itemData.frequencia,
    };
    
    history.push(newEntry);
    
    // Mantém apenas os últimos 1000 registros
    if (history.length > 1000) {
      history.shift();
    }
    
    localStorage.setItem(HISTORY_KEY, JSON.stringify(history));

    // Salva metadados
    const storage: ChecklistStorage = {
      status,
      history,
      lastUpdated: new Date().toISOString(),
    };
    localStorage.setItem('checklist_storage_meta', JSON.stringify(storage));

    // Dispara evento para atualizar outros componentes
    window.dispatchEvent(new Event('checklistUpdated'));
  } catch (error) {
    console.error('Erro ao salvar checklist:', error);
  }
}

/**
 * Carrega o status atual do checklist
 */
export function loadChecklistStatus(): Record<string, ChecklistStatus> {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      return JSON.parse(saved);
    }
  } catch (error) {
    console.error('Erro ao carregar checklist:', error);
  }
  return {};
}

/**
 * Carrega o histórico completo
 */
export function getChecklistHistory(): ChecklistHistoryEntry[] {
  try {
    const saved = localStorage.getItem(HISTORY_KEY);
    if (saved) {
      return JSON.parse(saved);
    }
  } catch (error) {
    console.error('Erro ao carregar histórico:', error);
  }
  return [];
}

/**
 * Exporta todos os dados do checklist
 */
export function exportChecklistData(): string {
  const status = loadChecklistStatus();
  const history = getChecklistHistory();
  const data = {
    status,
    history,
    exportedAt: new Date().toISOString(),
    version: '1.0',
  };
  return JSON.stringify(data, null, 2);
}

/**
 * Importa dados do checklist
 */
export function importChecklistData(jsonData: string): boolean {
  try {
    const data = JSON.parse(jsonData);
    if (data.status) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(data.status));
    }
    if (data.history) {
      localStorage.setItem(HISTORY_KEY, JSON.stringify(data.history));
    }
    window.dispatchEvent(new Event('checklistUpdated'));
    return true;
  } catch (error) {
    console.error('Erro ao importar dados:', error);
    return false;
  }
}

/**
 * Limpa todos os dados do checklist
 */
export function clearChecklistData(): void {
  localStorage.removeItem(STORAGE_KEY);
  localStorage.removeItem(HISTORY_KEY);
  localStorage.removeItem('checklist_storage_meta');
  localStorage.removeItem('checklist_daily_snapshots');
  window.dispatchEvent(new Event('checklistUpdated'));
}

/**
 * Salva snapshot diário do checklist
 */
export function saveDailySnapshot(items: Array<{
  itemId: string;
  tarefa: string;
  checked: boolean;
  responsavel: string;
  categoria: string;
  frequencia: 'diaria' | 'semanal' | 'mensal';
  observacaoUsuario?: string;
}>): void {
  try {
    const today = new Date().toISOString().split('T')[0];
    const snapshot: DailySnapshot = {
      date: today,
      timestamp: new Date().toISOString(),
      items: items,
    };

    const snapshots = getDailySnapshots();
    // Remove snapshot do mesmo dia se existir
    const filtered = snapshots.filter(s => s.date !== today);
    filtered.push(snapshot);

    localStorage.setItem('checklist_daily_snapshots', JSON.stringify(filtered));
  } catch (error) {
    console.error('Erro ao salvar snapshot diário:', error);
  }
}

/**
 * Carrega todos os snapshots diários
 */
export function getDailySnapshots(): DailySnapshot[] {
  try {
    const saved = localStorage.getItem('checklist_daily_snapshots');
    if (saved) {
      return JSON.parse(saved);
    }
  } catch (error) {
    console.error('Erro ao carregar snapshots:', error);
  }
  return [];
}

/**
 * Carrega snapshots de um mês específico
 */
export function getMonthlySnapshots(year: number, month: number): DailySnapshot[] {
  const snapshots = getDailySnapshots();
  return snapshots.filter(s => {
    const date = new Date(s.date);
    return date.getFullYear() === year && date.getMonth() === month - 1;
  });
}

/**
 * Verifica se é um novo dia e reseta o checklist se necessário
 */
export function checkAndResetDailyChecklist(): boolean {
  const lastResetDate = localStorage.getItem('checklist_last_reset_date');
  const today = new Date().toISOString().split('T')[0];

  if (lastResetDate !== today) {
    // É um novo dia - salva snapshot do dia anterior antes de resetar
    if (lastResetDate) {
      const status = loadChecklistStatus();
      const checklistData = require('@/data/checklistData').checklistData;
      const items: DailySnapshot['items'] = [];

      checklistData.forEach((section: any) => {
        section.items.forEach((item: any) => {
          const itemStatus = status[item.id];
          if (itemStatus) {
            items.push({
              itemId: item.id,
              tarefa: item.tarefa,
              checked: itemStatus.checked || false,
              responsavel: item.responsavel,
              categoria: item.categoria,
              frequencia: item.frequencia,
              observacaoUsuario: itemStatus.observacaoUsuario,
            });
          }
        });
      });

      if (items.length > 0) {
        saveDailySnapshot(items);
      }
    }

    // Reseta o checklist para o novo dia
    const resetStatus: Record<string, ChecklistStatus> = {};
    const checklistData = require('@/data/checklistData').checklistData;
    
    checklistData.forEach((section: any) => {
      section.items.forEach((item: any) => {
        resetStatus[item.id] = {
          checked: false,
          observacaoUsuario: undefined,
        };
      });
    });

    localStorage.setItem(STORAGE_KEY, JSON.stringify(resetStatus));
    localStorage.setItem('checklist_last_reset_date', today);
    window.dispatchEvent(new Event('checklistUpdated'));
    return true; // Indica que houve reset
  }

  return false; // Não houve reset
}

