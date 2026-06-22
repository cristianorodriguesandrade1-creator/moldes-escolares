export const dynamic = 'force-dynamic';
import { createClient } from "@/lib/supabase/server";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
    try {
          const { email } = await request.json();

      if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
              return NextResponse.json(
                { error: "Email inválido" },
                { status: 400 }
                      );
      }

      const supabase = await createClient();

      // Verificar se já existe
      const { data: existing } = await supabase
            .from("newsletters")
            .select("id, email")
            .eq("email", email)
            .single();

      if (existing) {
              return NextResponse.json(
                { message: "Email já inscrito" },
                { status: 200 }
                      );
      }

      // Inserir novo
      const { error } = await supabase
            .from("newsletters")
            .insert({ email, active: true });

      if (error) {
              return NextResponse.json(
                { error: error.message },
                { status: 400 }
                      );
      }

      return NextResponse.json(
        { message: "Inscrito com sucesso!" },
        { status: 201 }
            );
    } catch (error) {
          return NextResponse.json(
            { error: "Erro ao processar solicitação" },
            { status: 500 }
                );
    }
}
