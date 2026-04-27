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
    <div className="mt-3 sm:mt-4 md:mt-6 border-t pt-2 sm:pt-3 md:pt-4">
      <h3 className="text-xs sm:text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2 sm:mb-3">
        Filtros (Clique para ativar/desativar)
      </h3>
      <div className="flex flex-wrap gap-1.5 sm:gap-2">
        {data.map((item, index) => {
          const isSelected = selectedFilters.size === 0 || selectedFilters.has(item.name);
          return (
            <button
              key={index}
              onClick={() => onFilterToggle(item.name)}
              className={`px-2 sm:px-3 py-1 rounded-lg text-xs sm:text-sm transition-colors ${
                isSelected
                  ? 'bg-blue-600 text-white hover:bg-blue-700'
                  : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'
              }`}
            >
              <span className="truncate max-w-[100px] sm:max-w-none inline-block">{item.name}</span> <span className="hidden sm:inline">({formatCurrency(item.value)})</span>
            </button>
          );
        })}
      </div>
      {selectedFilters.size > 0 && (
        <button
          onClick={() => onFilterToggle('')}
          className="mt-2 sm:mt-3 text-xs sm:text-sm text-blue-600 dark:text-blue-400 hover:underline"
        >
          Limpar filtros
        </button>
      )}
    </div>
  );
}

