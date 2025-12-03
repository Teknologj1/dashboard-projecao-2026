/**
 * Tipos para sistema de drill-down e navegação hierárquica
 */

export type DrillDownLevel = 'ano' | 'mes' | 'especialidade' | 'tratamento';

export interface DrillDownState {
  level: DrillDownLevel;
  selectedYear?: number;
  selectedMonth?: number;
  selectedEspecialidade?: string;
  selectedTratamento?: string;
  breadcrumbs: BreadcrumbItem[];
}

export interface BreadcrumbItem {
  label: string;
  level: DrillDownLevel;
  value?: number | string;
  onClick: () => void;
}

export interface ChartDataPoint {
  name: string;
  value: number;
  percentual?: number;
  color?: string;
  children?: ChartDataPoint[];
}

export interface FilterOption {
  label: string;
  value: string | number;
  selected: boolean;
  count?: number;
  total?: number;
}

export interface ComparisonMode {
  type: 'none' | 'year' | 'month' | 'specialty' | 'treatment';
  compareWith?: number | string;
}
