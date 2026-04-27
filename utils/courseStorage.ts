import { CourseRecord, CourseStorageData } from '@/types/courses';

const COURSES_API_PATH = '/api/courses';

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
  await saveCourseStorageData({ records });
}

export async function clearCourseRecords(): Promise<void> {
  await saveCourseStorageData({ records: [] });
}

export async function exportCourseRecords(): Promise<string> {
  const data = await loadCourseStorageData();
  return JSON.stringify(
    {
      exportedAt: new Date().toISOString(),
      version: '2.0',
      records: data.records,
    },
    null,
    2
  );
}

export async function importCourseRecords(rawData: string): Promise<boolean> {
  try {
    const parsed = JSON.parse(rawData) as { records?: CourseRecord[] };
    if (!parsed?.records || !Array.isArray(parsed.records)) {
      return false;
    }
    await saveCourseStorageData({ records: parsed.records });
    return true;
  } catch (error) {
    console.error('Erro ao importar dados dos cursos:', error);
    return false;
  }
}