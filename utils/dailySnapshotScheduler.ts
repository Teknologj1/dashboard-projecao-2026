/**
 * Agendador de snapshot diário às 23:59
 */

let snapshotInterval: NodeJS.Timeout | null = null;

export function startDailySnapshotScheduler() {
  // Limpa intervalo anterior se existir
  if (snapshotInterval) {
    clearInterval(snapshotInterval);
  }

  // Verifica a cada minuto se é 23:59
  snapshotInterval = setInterval(() => {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();

    // Se for 23:59, salva snapshot
    if (hours === 23 && minutes === 59) {
      saveDailySnapshotNow();
    }
  }, 60000); // Verifica a cada minuto

  // Também verifica imediatamente ao iniciar
  const now = new Date();
  if (now.getHours() === 23 && now.getMinutes() >= 59) {
    saveDailySnapshotNow();
  }
}

function saveDailySnapshotNow() {
  try {
    const { loadChecklistStatus } = require('@/utils/checklistStorage');
    const { checklistData } = require('@/data/checklistData');
    const { saveDailySnapshot } = require('@/utils/checklistStorage');

    const status = loadChecklistStatus();
    const items: Array<{
      itemId: string;
      tarefa: string;
      checked: boolean;
      responsavel: string;
      categoria: string;
      frequencia: 'diaria' | 'semanal' | 'mensal';
      observacaoUsuario?: string;
    }> = [];

    checklistData.forEach((section: any) => {
      section.items.forEach((item: any) => {
        const itemStatus = status[item.id];
        items.push({
          itemId: item.id,
          tarefa: item.tarefa,
          checked: itemStatus?.checked || false,
          responsavel: item.responsavel,
          categoria: item.categoria,
          frequencia: item.frequencia,
          observacaoUsuario: itemStatus?.observacaoUsuario,
        });
      });
    });

    saveDailySnapshot(items);
    console.log('Snapshot diário salvo às 23:59');
  } catch (error) {
    console.error('Erro ao salvar snapshot diário:', error);
  }
}

export function stopDailySnapshotScheduler() {
  if (snapshotInterval) {
    clearInterval(snapshotInterval);
    snapshotInterval = null;
  }
}

