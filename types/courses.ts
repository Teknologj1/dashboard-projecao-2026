export type CourseTransactionType =
  | 'profissional'
  | 'pratica'
  | 'paciente_modelo'
  | 'custo';

export interface CourseTransaction {
  id: string;
  type: CourseTransactionType;
  description: string;
  participantName?: string;
  amount: number;
  date: string;
  createdAt: string;
}

export interface CourseRecord {
  id: string;
  courseName: string;
  year: number;
  month: number;
  notes?: string;
  createdAt: string;
  updatedAt: string;
  transactions: CourseTransaction[];
}

export interface CourseStorageData {
  records: CourseRecord[];
}