'use client';

import { useState, useCallback } from 'react';
import { DrillDownState, DrillDownLevel, BreadcrumbItem } from '@/types/drillDown';

const meses = [
  'Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho',
  'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'
];

export function useDrillDown() {
  const [state, setState] = useState<DrillDownState>({
    level: 'ano',
    breadcrumbs: [],
  });

  const navigateTo = useCallback((level: DrillDownLevel, data?: {
    year?: number;
    month?: number;
    especialidade?: string;
    tratamento?: string;
  }) => {
    setState(prev => {
      const newState: DrillDownState = { 
        level,
        breadcrumbs: [...prev.breadcrumbs],
      };
      
      // Mantém contexto dos níveis superiores
      if (prev.selectedYear) newState.selectedYear = prev.selectedYear;
      if (prev.selectedMonth) newState.selectedMonth = prev.selectedMonth;
      if (prev.selectedEspecialidade) newState.selectedEspecialidade = prev.selectedEspecialidade;
      
      // Define novo nível e atualiza breadcrumbs
      switch (level) {
        case 'mes':
          if (data?.year) {
            newState.selectedYear = data.year;
            newState.breadcrumbs.push({
              label: `Ano ${data.year}`,
              level: 'ano',
              value: data.year,
              onClick: () => setState({ level: 'ano', breadcrumbs: [] }),
            });
          }
          break;
        case 'especialidade':
          if (data?.year) newState.selectedYear = data.year;
          if (data?.month) {
            newState.selectedMonth = data.month;
            newState.breadcrumbs.push({
              label: `${meses[data.month - 1]} ${data.year}`,
              level: 'mes',
              value: data.month,
              onClick: () => setState({
                level: 'mes',
                selectedYear: data.year,
                breadcrumbs: prev.breadcrumbs,
              }),
            });
          }
          break;
        case 'tratamento':
          if (data?.year) newState.selectedYear = data.year;
          if (data?.month) newState.selectedMonth = data.month;
          if (data?.especialidade) {
            newState.selectedEspecialidade = data.especialidade;
            newState.breadcrumbs.push({
              label: data.especialidade,
              level: 'especialidade',
              value: data.especialidade,
              onClick: () => setState({
                level: 'especialidade',
                selectedYear: data.year,
                selectedMonth: data.month,
                breadcrumbs: prev.breadcrumbs,
              }),
            });
          }
          break;
      }
      
      return newState;
    });
  }, []);

  const goBack = useCallback(() => {
    setState(prev => {
      switch (prev.level) {
        case 'mes':
          return { level: 'ano', breadcrumbs: [] };
        case 'especialidade':
          return {
            level: 'mes',
            selectedYear: prev.selectedYear,
            breadcrumbs: prev.breadcrumbs.slice(0, -1),
          };
        case 'tratamento':
          return {
            level: 'especialidade',
            selectedYear: prev.selectedYear,
            selectedMonth: prev.selectedMonth,
            breadcrumbs: prev.breadcrumbs.slice(0, -1),
          };
        default:
          return prev;
      }
    });
  }, []);

  const reset = useCallback(() => {
    setState({ level: 'ano', breadcrumbs: [] });
  }, []);

  return {
    state,
    navigateTo,
    goBack,
    reset,
  };
}
