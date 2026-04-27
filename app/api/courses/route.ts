import { NextResponse } from 'next/server';
import { kv } from '@vercel/kv';
import { CourseStorageData } from '@/types/courses';

const COURSE_STORAGE_KEY = 'dashboard:courses:storage:v1';

const EMPTY_DATA: CourseStorageData = {
  records: [],
  catalog: [],
};

function normalizeData(raw: unknown): CourseStorageData {
  if (!raw || typeof raw !== 'object') {
    return EMPTY_DATA;
  }

  const data = raw as Partial<CourseStorageData>;
  return {
    records: Array.isArray(data.records) ? data.records : [],
    catalog: Array.isArray(data.catalog) ? data.catalog : [],
  };
}

export async function GET() {
  try {
    const raw = await kv.get(COURSE_STORAGE_KEY);
    return NextResponse.json(normalizeData(raw));
  } catch (error) {
    console.error('Erro ao carregar cursos no KV:', error);
    return NextResponse.json(
      { error: 'Nao foi possivel carregar os dados de cursos.' },
      { status: 500 }
    );
  }
}

export async function PUT(req: Request) {
  try {
    const body = (await req.json()) as Partial<CourseStorageData>;
    const payload = normalizeData(body);

    await kv.set(COURSE_STORAGE_KEY, payload);
    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error('Erro ao salvar cursos no KV:', error);
    return NextResponse.json(
      { error: 'Nao foi possivel salvar os dados de cursos.' },
      { status: 500 }
    );
  }
}
