// v3 - supabase
import { NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';
import { CourseRecord } from '@/types/courses';

export const dynamic = 'force-dynamic';
export const runtime = 'nodejs';

const supabase = createClient(
  process.env.SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

export async function GET() {
  try {
    const { data, error } = await supabase
      .from('course_records')
      .select('*')
      .order('created_at', { ascending: true });

    if (error) throw error;

    const records: CourseRecord[] = (data ?? []).map((row) => ({
      id: row.id,
      courseName: row.course_name,
      year: row.year,
      month: row.month,
      notes: row.notes ?? undefined,
      transactions: row.transactions ?? [],
      createdAt: row.created_at,
      updatedAt: row.updated_at,
    }));

    return NextResponse.json({ records });
  } catch (error) {
    console.error('Erro ao carregar cursos:', error);
    return NextResponse.json(
      { error: 'Não foi possível carregar os dados de cursos.' },
      { status: 500 }
    );
  }
}

export async function PUT(req: Request) {
  try {
    const { records } = (await req.json()) as { records: CourseRecord[] };

    if (!Array.isArray(records)) {
      return NextResponse.json({ error: 'Payload inválido.' }, { status: 400 });
    }

    // Busca IDs existentes
    const { data: existing } = await supabase
      .from('course_records')
      .select('id');

    const existingIds = new Set((existing ?? []).map((r) => r.id));
    const incomingIds = new Set(records.map((r) => r.id));

    // Deleta registros removidos
    const toDelete = [...existingIds].filter((id) => !incomingIds.has(id));
    if (toDelete.length > 0) {
      const { error } = await supabase
        .from('course_records')
        .delete()
        .in('id', toDelete);
      if (error) throw error;
    }

    // Upsert registros novos/atualizados
    if (records.length > 0) {
      const rows = records.map((r) => ({
        id: r.id,
        course_name: r.courseName,
        year: r.year,
        month: r.month,
        notes: r.notes ?? null,
        transactions: r.transactions,
        created_at: r.createdAt,
        updated_at: r.updatedAt,
      }));

      const { error } = await supabase
        .from('course_records')
        .upsert(rows, { onConflict: 'id' });
      if (error) throw error;
    }

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error('Erro ao salvar cursos:', error);
    return NextResponse.json(
      { error: 'Não foi possível salvar os dados de cursos.' },
      { status: 500 }
    );
  }
}
