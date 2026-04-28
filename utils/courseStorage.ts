import { CourseRecord, CourseStorageData } from '@/types/courses';

const API = '/api/courses';

// Carrega todos os registros
export async function loadCourseStorageData(): Promise<CourseStorageData> {
  const response = await fetch(API, { method: 'GET', cache: 'no-store' });
  if (!response.ok) throw new Error('Falha ao carregar dados de cursos');
  const parsed = (await response.json()) as CourseStorageData;
  return { records: Array.isArray(parsed.records) ? parsed.records : [] };
}

// Salva ou atualiza um único curso (POST)
export async function saveCourseRecord(record: CourseRecord): Promise<void> {
  const response = await fetch(API, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(record),
  });
  if (!response.ok) throw new Error('Falha ao salvar curso');
}

// Exclui um único curso pelo id (DELETE)
export async function deleteCourseRecord(id: string): Promise<void> {
  const response = await fetch(API, {
    method: 'DELETE',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ id }),
  });
  if (!response.ok) throw new Error('Falha ao excluir curso');
}

// Exporta todos os registros como JSON
export async function exportCourseRecords(): Promise<string> {
  const data = await loadCourseStorageData();
  return JSON.stringify(
    { exportedAt: new Date().toISOString(), version: '4.0', records: data.records },
    null, 2
  );
}

// Importa registros de um JSON exportado
export async function importCourseRecords(rawData: string): Promise<boolean> {
  try {
    const parsed = JSON.parse(rawData) as { records?: CourseRecord[] };
    if (!parsed?.records || !Array.isArray(parsed.records)) return false;

    await Promise.all(parsed.records.map((r) => saveCourseRecord(r)));
    return true;
  } catch (error) {
    console.error('Erro ao importar dados dos cursos:', error);
    return false;
  }
}
