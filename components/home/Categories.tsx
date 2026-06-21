import Link from "next/link";
import { createClient } from "@/lib/supabase/server";

export default async function Categories() {
  const supabase = await createClient();

  // Buscar categorias com contagem de templates
  const { data: categories } = await supabase
    .from("categories")
    .select("*")
    .order("name");

  const categoryList = categories || [];

  // Buscar contagem de templates por categoria
  const categoriesWithCount = await Promise.all(
    categoryList.map(async (cat) => {
      const { count } = await supabase
        .from("templates")
        .select("id", { count: "exact", head: true })
        .eq("category_id", cat.id);

      return { ...cat, count: count || 0 };
    })
  );

  return (
    <section className="py-16 bg-white">
      <div className="container">
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-2">Categorias</h2>
          <p className="text-gray-600">
            Encontre moldes para todas as ocasiões e atividades escolares
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {categoriesWithCount.map((category) => (
            <Link
              key={category.slug}
              href={`/categoria/${category.slug}`}
              className="card p-4 text-center hover:border-primary-300 group"
            >
              <div className="text-4xl mb-3 group-hover:scale-110 transition-transform duration-300">
                {category.icon || "📄"}
              </div>
              <h3 className="font-bold text-gray-900 text-sm mb-1 group-hover:text-primary-600 line-clamp-2">
                {category.name}
              </h3>
              <p className="text-xs text-gray-500">
                {category.count} molde{category.count !== 1 ? "s" : ""}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
