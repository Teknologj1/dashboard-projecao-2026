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
  date: string; // ISO date
  createdAt: string; // ISO datetime
}

export interface CourseRecord {
  id: string;
  courseName: string;
  year: number;
  month: number;
  notes?: string;
  createdAt: string; // ISO datetime
  updatedAt: string; // ISO datetime
  transactions: CourseTransaction[];
}
