/**
 * Tipos para o checklist de rotinas
 */

export interface ChecklistItem {
  id: string;
  etapa: string;
  tarefa: string;
  responsavel: string;
  ferramenta: string;
  observacoes: string;
  frequencia: 'diaria' | 'semanal' | 'mensal';
  categoria: 'financeiro' | 'contratos' | 'administrativo' | 'compras' | 'marketing' | 'equipe' | 'fiscal' | 'estrategico' | 'rh';
  checked: boolean;
  lastChecked?: string; // Data da última marcação
  observacaoUsuario?: string; // Observação do usuário (máx 150 caracteres)
}

export interface ChecklistSection {
  title: string;
  frequency: 'diaria' | 'semanal' | 'mensal';
  items: ChecklistItem[];
}

