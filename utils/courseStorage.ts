import { CourseRecord } from '@/types/courses';

const COURSES_STORAGE_KEY = 'dashboard_courses_records_v1';

function dispatchCoursesUpdated() {
  if (typeof window !== 'undefined') {
    window.dispatchEvent(new Event('coursesUpdated'));
  }
}

export function loadCourseRecords(): CourseRecord[] {
  if (typeof window === 'undefined') return [];

  try {
    const saved = localStorage.getItem(COURSES_STORAGE_KEY);
    if (!saved) return [];

    const parsed = JSON.parse(saved) as CourseRecord[];
    if (!Array.isArray(parsed)) return [];
    return parsed;
  } catch (error) {
    console.error('Erro ao carregar dados dos cursos:', error);
    return [];
  }
}

export function saveCourseRecords(records: CourseRecord[]): void {
  if (typeof window === 'undefined') return;

  try {
    localStorage.setItem(COURSES_STORAGE_KEY, JSON.stringify(records));
    dispatchCoursesUpdated();
  } catch (error) {
    console.error('Erro ao salvar dados dos cursos:', error);
  }
}

export function clearCourseRecords(): void {
  if (typeof window === 'undefined') return;

  localStorage.removeItem(COURSES_STORAGE_KEY);
  dispatchCoursesUpdated();
}

export function exportCourseRecords(): string {
  const records = loadCourseRecords();
  return JSON.stringify(
    {
      exportedAt: new Date().toISOString(),
      version: '1.0',
      records,
    },
    null,
    2
  );
}

export function importCourseRecords(rawData: string): boolean {
  if (typeof window === 'undefined') return false;

  try {
    const parsed = JSON.parse(rawData) as { records?: CourseRecord[] };
    if (!parsed?.records || !Array.isArray(parsed.records)) {
      return false;
    }

    localStorage.setItem(COURSES_STORAGE_KEY, JSON.stringify(parsed.records));
    dispatchCoursesUpdated();
    return true;
  } catch (error) {
    console.error('Erro ao importar dados dos cursos:', error);
    return false;
  }
}
