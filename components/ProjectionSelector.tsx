'use client';

import { ProjectionType } from '@/types/data';

interface ProjectionSelectorProps {
  selected: ProjectionType;
  onChange: (type: ProjectionType) => void;
}

export default function ProjectionSelector({ selected, onChange }: ProjectionSelectorProps) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-3 sm:p-4 mb-4 sm:mb-5 md:mb-6 border border-gray-200 dark:border-gray-700">
      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-4">
        <span className="text-xs sm:text-sm font-medium text-gray-700 dark:text-gray-300">
          Tipo de Projeção:
        </span>
        <div className="flex gap-2 w-full sm:w-auto">
          <button
            onClick={() => onChange('ideal')}
            className={`flex-1 sm:flex-none px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg text-xs sm:text-sm font-medium transition-colors ${
              selected === 'ideal'
                ? 'bg-blue-600 text-white'
                : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
            }`}
          >
            Projeção Ideal
          </button>
          <button
            onClick={() => onChange('perspectiva30')}
            className={`flex-1 sm:flex-none px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg text-xs sm:text-sm font-medium transition-colors ${
              selected === 'perspectiva30'
                ? 'bg-green-600 text-white'
                : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
            }`}
          >
            Perspectiva 30%
          </button>
        </div>
      </div>
      <div className="mt-2 sm:mt-3 text-xs text-gray-500 dark:text-gray-400">
        {selected === 'ideal' ? (
          <span>Baseada na média dos últimos 3 anos (2023-2025) e tendências históricas</span>
        ) : (
          <span>Projeção otimista com crescimento de 30% na receita e aumento controlado de 10% nas despesas</span>
        )}
      </div>
    </div>
  );
}
