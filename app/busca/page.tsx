"use client";

import { useSearchParams } from "next/navigation";
import React, { useEffect, useState , Suspense} from "react";
import { createClient } from "@/lib/supabase/client";
import Link from "next/link";
import { Download, Search } from "lucide-react";

function BuscaContent() {
  const searchParams = useSearchParams();
  const query = searchParams.get("q") || "";
  const supabase = createClient();

  const [results, setResults] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState(query);

  useEffect(() => {
    async function search() {
      if (!query.trim()) {
        setResults([]);
        setLoading(false);
        return;
      }

      try {
        const { data, error } = await supabase
          .from("templates")
          .select("*, categories(name, slug, icon)")
          .or(
            `name.ilike.%${query}%,description.ilike.%${query}%,seo_description.ilike.%${query}%`
          )
          .order("downloads", { ascending: false })
          .limit(20);

        if (!error) {
          setResults(data || []);

          // Salvar busca
          await supabase.from("searches").insert([
            {
              query,
              results_count: data?.length || 0,
            },
          ]);
        }
      } catch (error) {
        console.error("Error searching:", error);
      } finally {
        setLoading(false);
      }
    }

    search();
  }, [query]);

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-gradient-to-r from-primary-600 to-accent-500 text-white py-12">
        <div className="container">
          <h1 className="text-4xl font-bold mb-6">Buscar Moldes</h1>

          {/* Search Form */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              window.location.href = `/busca?q=${encodeURIComponent(
                searchQuery
              )}`;
            }}
            className="flex gap-2"
          >
            <div className="flex-1 relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Digite o nome do molde..."
                className="w-full pl-12 pr-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder:text-white/60 focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent"
              />
            </div>
            <button
              type="submit"
              className="btn bg-white text-primary-600 hover:bg-gray-50 font-bold"
            >
              Buscar
            </button>
          </form>
        </div>
      </div>

      {/* Results */}
      <div className="container py-12">
        {query && (
          <p className="text-gray-600 mb-6">
            Resultados para: <strong>"{query}"</strong>
          </p>
        )}

        {loading ? (
          <div className="text-center py-12">
            <p className="text-gray-600">Buscando...</p>
          </div>
        ) : results.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-600 mb-4">
              {query
                ? "Nenhum molde encontrado"
                : "Digite algo para buscar"}
            </p>
            {query && (
              <Link href="/" className="btn btn-primary">
                Voltar ao Início
              </Link>
            )}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {results.map((template) => {
              const cat = template.categories as any;
              return (
                <Link
                  key={template.id}
                  href={`/molde/${template.slug}`}
                  className="group card overflow-hidden hover:shadow-lg"
                >
                  <div className="aspect-square bg-gradient-to-br from-primary-100 to-accent-100 flex items-center justify-center text-6xl group-hover:scale-105 transition-transform duration-300">
                    {cat?.icon || "📄"}
                  </div>
                  <div className="p-4">
                    <h3 className="font-bold text-gray-900 mb-1 group-hover:text-primary-600 transition line-clamp-2">
                      {template.name}
                    </h3>
                    <p className="text-sm text-gray-600 mb-3">{cat?.name}</p>
                    <div className="flex items-center gap-1 text-sm text-gray-600">
                      <Download className="w-4 h-4" />
                      {template.downloads || 0}
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}

export default function BuscaPage() {
    return React.createElement(Suspense, { fallback: null }, React.createElement(BuscaContent, null));
}
