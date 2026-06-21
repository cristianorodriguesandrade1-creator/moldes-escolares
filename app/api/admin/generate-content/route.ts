import { createClient } from "@/lib/supabase/server";
import { generateCompleteContent } from "@/lib/contentGenerator";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const supabase = await createClient();

    // Verificar autenticação
    const {
      data: { user },
    } = await supabase.auth.getUser();

    if (!user) {
      return NextResponse.json({ error: "Não autorizado" }, { status: 401 });
    }

    const { templateId, templateName, categoryName, categorySlug } =
      await request.json();

    if (!templateId || !templateName || !categoryName) {
      return NextResponse.json(
        { error: "Parâmetros obrigatórios faltando" },
        { status: 400 }
      );
    }

    // Gerar conteúdo
    const content = generateCompleteContent({
      templateName,
      categoryName,
      categorySlug,
    });

    // Atualizar template
    const { error: updateError } = await supabase
      .from("templates")
      .update({
        seo_title: content.seoTitle,
        seo_description: content.seoDescription,
        seo_keywords: content.seoKeywords,
        description: content.description,
      })
      .eq("id", templateId);

    if (updateError) {
      return NextResponse.json(
        { error: updateError.message },
        { status: 400 }
      );
    }

    return NextResponse.json({
      success: true,
      content,
      message: "Conteúdo gerado com sucesso",
    });
  } catch (error: any) {
    return NextResponse.json(
      { error: error.message || "Erro ao gerar conteúdo" },
      { status: 500 }
    );
  }
}

export async function GET() {
  return NextResponse.json({
    message: "Use POST para gerar conteúdo",
    example: {
      templateId: "uuid",
      templateName: "Molde Boi Bumba",
      categoryName: "Festa Junina",
      categorySlug: "festa-junina",
    },
  });
}
