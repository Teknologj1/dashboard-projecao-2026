'use client';

import { DrillDownState } from '@/types/drillDown';

interface DrillDownBreadcrumbProps {
  state: DrillDownState;
  onNavigate: (level: string) => void;
}

const meses = [
  'Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho',
  'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'
];

export default function DrillDownBreadcrumb({ state, onNavigate }: DrillDownBreadcrumbProps) {
  const items = [];

  // Ano
  if (state.selectedYear) {
    items.push({
      label: `Ano ${state.selectedYear}`,
      level: 'ano',
      clickable: state.level !== 'ano',
    });
  } else {
    items.push({
      label: 'Anos',
      level: 'ano',
      clickable: false,
    });
  }

  // Mês
  if (state.selectedMonth) {
    items.push({
      label: meses[state.selectedMonth - 1],
      level: 'mes',
      clickable: state.level !== 'mes' && state.level !== 'ano',
    });
  } else if (state.level === 'mes' || state.level === 'especialidade' || state.level === 'tratamento') {
    items.push({
      label: 'Meses',
      level: 'mes',
      clickable: false,
    });
  }

  // Especialidade
  if (state.selectedEspecialidade) {
    items.push({
      label: state.selectedEspecialidade,
      level: 'especialidade',
      clickable: state.level !== 'especialidade' && state.level !== 'tratamento',
    });
  } else if (state.level === 'especialidade' || state.level === 'tratamento') {
    items.push({
      label: 'Especialidades',
      level: 'especialidade',
      clickable: false,
    });
  }

  // Tratamento
  if (state.selectedTratamento) {
    items.push({
      label: state.selectedTratamento,
      level: 'tratamento',
      clickable: false,
    });
  }

  return (
    <nav className="mb-4 flex items-center space-x-2 text-sm">
      {items.map((item, index) => (
        <div key={index} className="flex items-center space-x-2">
          {index > 0 && <span className="text-gray-400">/</span>}
          <button
            onClick={() => item.clickable && onNavigate(item.level)}
            className={`${
              item.clickable
                ? 'text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 cursor-pointer'
                : 'text-gray-600 dark:text-gray-400 cursor-default'
            } font-medium`}
            disabled={!item.clickable}
          >
            {item.label}
          </button>
        </div>
      ))}
    </nav>
  );
}

