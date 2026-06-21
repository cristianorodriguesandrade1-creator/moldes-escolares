export const dynamic = 'force-dynamic';
import { createClient } from "@/lib/supabase/server";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Download, Share2, Clock, Eye } from "lucide-react";
import type { Metadata } from "next";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const supabase = await createClient();

  const { data: template } = await supabase
    .from("templates")
    .select("*, categories(name, slug)")
    .eq("slug", slug)
    .single();

  if (!template) {
    return { title: "Molde não encontrado" };
  }

  const categoryData = template.categories as any;

  return {
    title: template.seo_title || `${template.name} | Moldes Escolares`,
    description:
      template.seo_description ||
      `Baixe gratuitamente o molde ${template.name}. Perfeito para atividades escolares.`,
    keywords: template.seo_keywords || `${template.name}, moldes, educação`,
    openGraph: {
      title: template.seo_title || `${template.name} | Moldes Escolares`,
      description:
        template.seo_description ||
        `Baixe gratuitamente o molde ${template.name}.`,
      type: "website",
      url: `https://moldescolares.com/molde/${slug}`,
      images: [
        {
          url: template.image_url || "https://moldescolares.com/og-image.jpg",
          width: 1200,
          height: 630,
          alt: template.name,
        },
      ],
    },
  };
}

export async function generateStaticParams() {
  const supabase = await createClient();

  try {
    const { data: templates } = await supabase
      .from("templates")
      .select("slug")
      .limit(5000);

    return (templates || []).map((t) => ({
      slug: t.slug,
    }));
  } catch (error) {
    console.error("Error generating static params:", error);
    return [];
  }
}

export default async function TemplateDetailPage({ params }: Props) {
  const { slug } = await params;
  const supabase = await createClient();

  // Buscar template
  const { data: template, error } = await supabase
    .from("templates")
    .select("*, categories(name, slug, icon)")
    .eq("slug", slug)
    .single();

  if (error || !template) {
    notFound();
  }

  const categoryData = template.categories as any;

  // Buscar moldes relacionados
  const { data: relatedTemplates } = await supabase
    .from("templates")
    .select("*")
    .eq("category_id", template.category_id)
    .neq("id", template.id)
    .limit(4);

  const relatedList = relatedTemplates || [];

  // Schema.org JSON-LD
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Início",
        item: "https://moldescolares.com",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: categoryData?.name,
        item: `https://moldescolares.com/categoria/${categoryData?.slug}`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: template.name,
        item: `https://moldescolares.com/molde/${slug}`,
      },
    ],
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Breadcrumbs */}
      <div className="container py-4 text-sm">
        <div className="flex items-center gap-2 text-gray-600">
          <Link href="/" className="hover:text-primary-600">
            Início
          </Link>
          <span>/</span>
          <Link
            href={`/categoria/${categoryData?.slug}`}
            className="hover:text-primary-600"
          >
            {categoryData?.name}
          </Link>
          <span>/</span>
          <span className="text-gray-900 font-semibold">{template.name}</span>
        </div>
      </div>

      {/* Header */}
      <div className="bg-gradient-to-r from-primary-600 to-accent-500 text-white py-8">
        <div className="container">
          <div className="flex items-start gap-6">
            <div className="text-6xl">{categoryData?.icon || "📄"}</div>
            <div className="flex-1">
              <h1 className="text-4xl font-bold mb-2">{template.name}</h1>
              <p className="text-white/90 mb-4">
                {categoryData?.name}
              </p>
              <div className="flex items-center gap-6 text-sm">
                <div className="flex items-center gap-2">
                  <Download className="w-4 h-4" />
                  <span>{template.downloads || 0} downloads</span>
                </div>
                <div className="flex items-center gap-2">
                  <Eye className="w-4 h-4" />
                  <span>{template.views || 0} visualizações</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  <span>PDF Gratuito</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Conteúdo Principal */}
      <div className="container py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Coluna Principal */}
          <div className="lg:col-span-2">
            {/* Imagem Preview */}
            {template.thumbnail_url && (
              <div className="bg-gray-100 rounded-lg p-6 mb-8 text-center">
                <img
                  src={template.thumbnail_url}
                  alt={template.name}
                  className="max-w-full h-auto"
                />
              </div>
            )}

            {/* Descrição */}
            {template.description && (
              <div className="mb-8">
                <h2 className="text-2xl font-bold mb-4">Sobre este molde</h2>
                <p className="text-gray-700 leading-relaxed">
                  {template.description}
                </p>
              </div>
            )}

            {/* Como Usar */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold mb-4">Como Usar</h2>
              <ol className="space-y-3 text-gray-700">
                <li className="flex gap-4">
                  <span className="font-bold text-primary-600 flex-shrink-0">
                    1.
                  </span>
                  <span>Clique no botão "Baixar PDF" abaixo</span>
                </li>
                <li className="flex gap-4">
                  <span className="font-bold text-primary-600 flex-shrink-0">
                    2.
                  </span>
                  <span>O arquivo será baixado no seu computador</span>
                </li>
                <li className="flex gap-4">
                  <span className="font-bold text-primary-600 flex-shrink-0">
                    3.
                  </span>
                  <span>Abra com seu leitor PDF favorito</span>
                </li>
                <li className="flex gap-4">
                  <span className="font-bold text-primary-600 flex-shrink-0">
                    4.
                  </span>
                  <span>Imprima o molde em papel A4</span>
                </li>
                <li className="flex gap-4">
                  <span className="font-bold text-primary-600 flex-shrink-0">
                    5.
                  </span>
                  <span>
                    Recorte, decore e use em suas atividades!
                  </span>
                </li>
              </ol>
            </div>

            {/* Moldes Relacionados */}
            {relatedList.length > 0 && (
              <div>
                <h2 className="text-2xl font-bold mb-4">
                  Moldes Relacionados
                </h2>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {relatedList.map((related) => (
                    <Link
                      key={related.id}
                      href={`/molde/${related.slug}`}
                      className="group card p-4 overflow-hidden hover:shadow-lg"
                    >
                      <div className="aspect-square bg-gradient-to-br from-primary-100 to-accent-100 flex items-center justify-center text-4xl mb-2 group-hover:scale-105 transition-transform">
                        {categoryData?.icon || "📄"}
                      </div>
                      <h3 className="font-bold text-sm line-clamp-2 group-hover:text-primary-600">
                        {related.name}
                      </h3>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            {/* Card de Download */}
            <div className="card p-6 sticky top-20 mb-8">
              <h3 className="font-bold text-lg mb-4">Baixar Molde</h3>
              <button className="btn btn-primary w-full mb-4 flex items-center justify-center gap-2">
                <Download className="w-5 h-5" />
                Baixar PDF Grátis
              </button>
              <p className="text-sm text-gray-600 text-center mb-4">
                Arquivo em alta resolução<br />
                Pronto para imprimir
              </p>
              <button className="btn btn-outline w-full flex items-center justify-center gap-2">
                <Share2 className="w-4 h-4" />
                Compartilhar
              </button>
            </div>

            {/* Informações */}
            <div className="card p-6">
              <h4 className="font-bold mb-4">Informações</h4>
              <dl className="space-y-3 text-sm">
                <div>
                  <dt className="text-gray-600">Categoria</dt>
                  <dd className="font-semibold">
                    <Link
                      href={`/categoria/${categoryData?.slug}`}
                      className="text-primary-600 hover:underline"
                    >
                      {categoryData?.name}
                    </Link>
                  </dd>
                </div>
                <div>
                  <dt className="text-gray-600">Formato</dt>
                  <dd className="font-semibold">PDF</dd>
                </div>
                <div>
                  <dt className="text-gray-600">Tamanho</dt>
                  <dd className="font-semibold">~2-5 MB</dd>
                </div>
                <div>
                  <dt className="text-gray-600">Downloads</dt>
                  <dd className="font-semibold">{template.downloads || 0}</dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </div>

      {/* Schema.org JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
    </div>
  );
}
