// v6 - diagnóstico de variáveis de ambiente
import { NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';
import { CourseRecord } from '@/types/courses';

export const dynamic = 'force-dynamic';
export const runtime = 'nodejs';

function getSupabase() {
  const url = process.env.SUPABASE_URL;
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (!url || !key) {
    throw new Error(`Variáveis de ambiente ausentes: SUPABASE_URL=${url ? 'ok' : 'FALTANDO'}, SUPABASE_SERVICE_ROLE_KEY=${key ? 'ok' : 'FALTANDO'}`);
  }
  return createClient(url, key);
}

// GET — carrega todos os registros
export async function GET() {
  try {
    const supabase = getSupabase();
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
    const msg = error instanceof Error ? error.message : String(error);
    console.error('Erro ao carregar cursos:', msg);
    return NextResponse.json(
      { error: `Não foi possível carregar os dados de cursos. Detalhe: ${msg}` },
      { status: 500 }
    );
  }
}

// POST — insere ou atualiza um único registro
export async function POST(req: Request) {
  try {
    const supabase = getSupabase();
    const record = (await req.json()) as CourseRecord;

    const { error } = await supabase
      .from('course_records')
      .upsert({
        id: record.id,
        course_name: record.courseName,
        year: record.year,
        month: record.month,
        notes: record.notes ?? null,
        transactions: record.transactions,
        created_at: record.createdAt,
        updated_at: record.updatedAt,
      }, { onConflict: 'id' });

    if (error) throw error;
    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error('Erro ao salvar curso:', error);
    return NextResponse.json(
      { error: 'Não foi possível salvar o curso.' },
      { status: 500 }
    );
  }
}

// DELETE — remove um único registro pelo id
export async function DELETE(req: Request) {
  try {
    const supabase = getSupabase();
    const { id } = (await req.json()) as { id: string };

    if (!id) {
      return NextResponse.json({ error: 'ID não fornecido.' }, { status: 400 });
    }

    const { error } = await supabase
      .from('course_records')
      .delete()
      .eq('id', id);

    if (error) throw error;
    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error('Erro ao excluir curso:', error);
    return NextResponse.json(
      { error: 'Não foi possível excluir o curso.' },
      { status: 500 }
    );
  }
}
