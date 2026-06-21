export const dynamic = 'force-dynamic';
import { createClient } from "@/lib/supabase/server";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Download, Star } from "lucide-react";
import type { Metadata } from "next";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const supabase = await createClient();

  const { data: category } = await supabase
    .from("categories")
    .select("*")
    .eq("slug", slug)
    .single();

  if (!category) {
    return { title: "Categoria não encontrada" };
  }

  return {
    title: `${category.name} | Moldes Escolares`,
    description: `${category.description || `Moldes para ${category.name}`}. Baixe gratuitamente!`,
    openGraph: {
      title: `${category.name} | Moldes Escolares`,
      description: `${category.description || `Moldes para ${category.name}`}`,
      type: "website",
    },
  };
}

export default async function CategoryPage({ params }: Props) {
  const { slug } = await params;
  const supabase = await createClient();

  // Buscar categoria
  const { data: category, error: categoryError } = await supabase
    .from("categories")
    .select("*")
    .eq("slug", slug)
    .single();

  if (categoryError || !category) {
    notFound();
  }

  // Buscar templates da categoria
  const { data: templates } = await supabase
    .from("templates")
    .select("*")
    .eq("category_id", category.id)
    .order("downloads", { ascending: false });

  const templateList = templates || [];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-gradient-to-r from-primary-600 to-accent-500 text-white py-12">
        <div className="container">
          <div className="mb-4">
            <Link href="/" className="text-white/80 hover:text-white">
              Início
            </Link>
            <span className="mx-2">/</span>
            <span className="text-white font-semibold">{category.name}</span>
          </div>

          <div className="flex items-center gap-4">
            {category.icon && <div className="text-5xl">{category.icon}</div>}
            <div>
              <h1 className="text-4xl font-bold mb-2">{category.name}</h1>
              {category.description && (
                <p className="text-white/90">{category.description}</p>
              )}
              <p className="text-sm text-white/80 mt-2">
                {templateList.length} molde{templateList.length !== 1 ? "s" : ""}{" "}
                disponível{templateList.length !== 1 ? "is" : ""}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Moldes Grid */}
      <div className="container py-12">
        {templateList.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-600 text-lg">
              Nenhum molde nesta categoria ainda.
            </p>
            <Link href="/" className="btn btn-primary mt-4">
              Voltar à Homepage
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {templateList.map((template) => (
              <Link
                key={template.id}
                href={`/molde/${template.slug}`}
                className="group card overflow-hidden hover:shadow-lg"
              >
                {/* Image Placeholder */}
                <div className="aspect-square bg-gradient-to-br from-primary-100 to-accent-100 flex items-center justify-center text-6xl group-hover:scale-105 transition-transform duration-300">
                  {category.icon}
                </div>

                <div className="p-4">
                  <h3 className="font-bold text-gray-900 mb-1 group-hover:text-primary-600 transition line-clamp-2">
                    {template.name}
                  </h3>

                  {template.seo_description && (
                    <p className="text-sm text-gray-600 mb-3 line-clamp-2">
                      {template.seo_description}
                    </p>
                  )}

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1 text-sm text-gray-600">
                      <Download className="w-4 h-4" />
                      {template.downloads || 0}
                    </div>
                    <button className="p-2 hover:bg-gray-100 rounded-lg transition">
                      <Star className="w-4 h-4 text-accent-500" />
                    </button>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
