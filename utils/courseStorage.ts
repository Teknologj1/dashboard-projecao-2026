import { CourseCatalogItem, CourseRecord, CourseStorageData } from '@/types/courses';

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

export function loadCourseStorageData(): CourseStorageData {
  if (typeof window === 'undefined') {
    return { records: [], catalog: [] };
  }

  try {
    const saved = localStorage.getItem(COURSES_STORAGE_KEY);
    if (!saved) return { records: [], catalog: [] };

    const parsed = JSON.parse(saved) as
      | CourseStorageData
      | CourseRecord[];

    // Backward compatibility with old array-only format
    if (Array.isArray(parsed)) {
      const catalogFromRecords = Array.from(
        new Set(parsed.map((record) => record.courseName.trim()).filter(Boolean))
      ).map((name) => ({
        id: crypto.randomUUID(),
        name,
        createdAt: new Date().toISOString(),
      }));

      return {
        records: parsed,
        catalog: catalogFromRecords,
      };
    }

    return {
      records: Array.isArray(parsed.records) ? parsed.records : [],
      catalog: Array.isArray(parsed.catalog) ? parsed.catalog : [],
    };
  } catch (error) {
    console.error('Erro ao carregar dados dos cursos:', error);
    return { records: [], catalog: [] };
  }
}

export function saveCourseRecords(records: CourseRecord[]): void {
  if (typeof window === 'undefined') return;

  try {
    const current = loadCourseStorageData();
    const payload: CourseStorageData = {
      records,
      catalog: current.catalog,
    };
    localStorage.setItem(COURSES_STORAGE_KEY, JSON.stringify(payload));
    dispatchCoursesUpdated();
  } catch (error) {
    console.error('Erro ao salvar dados dos cursos:', error);
  }
}

export function saveCourseCatalog(catalog: CourseCatalogItem[]): void {
  if (typeof window === 'undefined') return;

  try {
    const current = loadCourseStorageData();
    const payload: CourseStorageData = {
      records: current.records,
      catalog,
    };
    localStorage.setItem(COURSES_STORAGE_KEY, JSON.stringify(payload));
    dispatchCoursesUpdated();
  } catch (error) {
    console.error('Erro ao salvar catálogo de cursos:', error);
  }
}

export function clearCourseRecords(): void {
  if (typeof window === 'undefined') return;

  localStorage.removeItem(COURSES_STORAGE_KEY);
  dispatchCoursesUpdated();
}

export function exportCourseRecords(): string {
  const data = loadCourseStorageData();
  return JSON.stringify(
    {
      exportedAt: new Date().toISOString(),
      version: '1.1',
      records: data.records,
      catalog: data.catalog,
    },
    null,
    2
  );
}

export function importCourseRecords(rawData: string): boolean {
  if (typeof window === 'undefined') return false;

  try {
    const parsed = JSON.parse(rawData) as {
      records?: CourseRecord[];
      catalog?: CourseCatalogItem[];
    };
    if (!parsed?.records || !Array.isArray(parsed.records)) {
      return false;
    }

    const payload: CourseStorageData = {
      records: parsed.records,
      catalog: Array.isArray(parsed.catalog) ? parsed.catalog : [],
    };

    localStorage.setItem(COURSES_STORAGE_KEY, JSON.stringify(payload));
    dispatchCoursesUpdated();
    return true;
  } catch (error) {
    console.error('Erro ao importar dados dos cursos:', error);
    return false;
  }
}
