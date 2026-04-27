import { CourseCatalogItem, CourseRecord, CourseStorageData } from '@/types/courses';
const COURSES_API_PATH = '/api/courses';

export function loadCourseRecords(): CourseRecord[] {
  // Mantido para compatibilidade; o fluxo principal agora usa backend.
  return [];
}

export async function loadCourseStorageData(): Promise<CourseStorageData> {
  const response = await fetch(COURSES_API_PATH, {
    method: 'GET',
    cache: 'no-store',
  });

  if (!response.ok) {
    throw new Error('Falha ao carregar dados de cursos');
  }

  const parsed = (await response.json()) as CourseStorageData;
  return {
    records: Array.isArray(parsed.records) ? parsed.records : [],
    catalog: Array.isArray(parsed.catalog) ? parsed.catalog : [],
  };
}

async function saveCourseStorageData(data: CourseStorageData): Promise<void> {
  const response = await fetch(COURSES_API_PATH, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    throw new Error('Falha ao salvar dados de cursos');
  }
}

export async function saveCourseRecords(records: CourseRecord[]): Promise<void> {
  const current = await loadCourseStorageData();
  await saveCourseStorageData({
    records,
    catalog: current.catalog,
  });
}

export async function saveCourseCatalog(catalog: CourseCatalogItem[]): Promise<void> {
  const current = await loadCourseStorageData();
  await saveCourseStorageData({
    records: current.records,
    catalog,
  });
}

export async function clearCourseRecords(): Promise<void> {
  await saveCourseStorageData({
    records: [],
    catalog: [],
  });
}

export async function exportCourseRecords(): Promise<string> {
  const data = await loadCourseStorageData();
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

export async function importCourseRecords(rawData: string): Promise<boolean> {
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

    await saveCourseStorageData(payload);
    return true;
  } catch (error) {
    console.error('Erro ao importar dados dos cursos:', error);
    return false;
  }
}
