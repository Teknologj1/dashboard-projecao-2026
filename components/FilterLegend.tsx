'use client';

import { ChartDataPoint } from '@/types/drillDown';

interface FilterLegendProps {
  data: ChartDataPoint[];
  selectedFilters: Set<string>;
  onFilterToggle: (name: string) => void;
}

export default function FilterLegend({ data, selectedFilters, onFilterToggle }: FilterLegendProps) {
  if (data.length === 0) return null;

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
      minimumFractionDigits: 0,
    }).format(value);
  };

  return (
    <div className="mt-6 border-t pt-4">
      <h3 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3">
        Filtros (Clique para ativar/desativar)
      </h3>
      <div className="flex flex-wrap gap-2">
        {data.map((item, index) => {
          const isSelected = selectedFilters.size === 0 || selectedFilters.has(item.name);
          return (
            <button
              key={index}
              onClick={() => onFilterToggle(item.name)}
              className={`px-3 py-1 rounded-lg text-sm transition-colors ${
                isSelected
                  ? 'bg-blue-600 text-white hover:bg-blue-700'
                  : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'
              }`}
            >
              {item.name} ({formatCurrency(item.value)})
            </button>
          );
        })}
      </div>
      {selectedFilters.size > 0 && (
        <button
          onClick={() => onFilterToggle('')}
          className="mt-3 text-sm text-blue-600 dark:text-blue-400 hover:underline"
        >
          Limpar filtros
        </button>
      )}
    </div>
  );
}

