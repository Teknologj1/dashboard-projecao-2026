import { NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';

export const dynamic = 'force-dynamic';
export const runtime = 'nodejs';

export async function GET() {
  const url = process.env.SUPABASE_URL;
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY;

  if (!url || !key) {
    return NextResponse.json({ error: 'Variáveis de ambiente ausentes' }, { status: 500 });
  }

  try {
    const supabase = createClient(url, key);
    // consulta mínima para manter o banco ativo
    const { error } = await supabase
      .from('course_records')
      .select('id')
      .limit(1);

    if (error) throw error;

    return NextResponse.json({ ok: true, timestamp: new Date().toISOString() });
  } catch (error) {
    const msg = error instanceof Error ? error.message : String(error);
    console.error('Keepalive falhou:', msg);
    return NextResponse.json({ error: msg }, { status: 500 });
  }
}
