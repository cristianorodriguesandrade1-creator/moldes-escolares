import Link from "next/link";
import { Download, Star } from "lucide-react";
import { createClient } from "@/lib/supabase/server";

export default async function FeaturedTemplates() {
  const supabase = await createClient();

  // Buscar moldes em destaque (featured) ou mais baixados
  const { data: templates } = await supabase
    .from("templates")
    .select("*, categories(name, slug, icon)")
    .eq("featured", true)
    .order("downloads", { ascending: false })
    .limit(4);

  const templateList = templates || [];

  if (templateList.length === 0) {
    return null;
  }

  return (
    <section className="py-16 bg-gray-50">
      <div className="container">
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-2">Moldes em Destaque</h2>
          <p className="text-gray-600">
            Confira os moldes mais populares da comunidade
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {templateList.map((template) => {
            const categoryData = template.categories as any;
            return (
              <Link
                key={template.id}
                href={`/molde/${template.slug}`}
                className="group card overflow-hidden hover:shadow-lg"
              >
                <div className="aspect-square bg-gradient-to-br from-primary-100 to-accent-100 flex items-center justify-center text-6xl group-hover:scale-105 transition-transform duration-300">
                  {categoryData?.icon || "📄"}
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-gray-900 mb-1 group-hover:text-primary-600 transition line-clamp-2">
                    {template.name}
                  </h3>
                  <p className="text-sm text-gray-600 mb-3">
                    {categoryData?.name}
                  </p>
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
            );
          })}
        </div>

        <div className="mt-8 text-center">
          <Link href="/moldes" className="btn btn-primary">
            Ver Todos os Moldes
          </Link>
        </div>
      </div>
    </section>
  );
}
