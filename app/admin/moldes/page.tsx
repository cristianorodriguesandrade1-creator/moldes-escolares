"use client";

import { useEffect, useState } from "react";
import { createClient } from "@/lib/supabase/client";
import Link from "next/link";
import { Plus, Edit, Trash2, Download } from "lucide-react";

export default function MoldesPage() {
  const supabase = createClient();
  const [templates, setTemplates] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadTemplates();
  }, []);

  async function loadTemplates() {
    try {
      const { data, error } = await supabase
        .from("templates")
        .select("*, categories(name, icon)")
        .order("created_at", { ascending: false });

      if (!error) {
        setTemplates(data || []);
      }
    } catch (error) {
      console.error("Error loading templates:", error);
    } finally {
      setLoading(false);
    }
  }

  async function deleteTemplate(id: string) {
    if (!confirm("Tem certeza que deseja deletar este molde?")) return;

    try {
      const { error } = await supabase
        .from("templates")
        .delete()
        .eq("id", id);

      if (!error) {
        setTemplates(templates.filter((t) => t.id !== id));
      }
    } catch (error) {
      console.error("Error deleting template:", error);
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 p-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold">Moldes</h1>
            <p className="text-gray-600">Gerencie todos os moldes</p>
          </div>
          <Link href="/admin/moldes/novo" className="btn btn-primary flex items-center gap-2">
            <Plus className="w-5 h-5" />
            Novo Molde
          </Link>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        {loading ? (
          <div className="text-center py-12">
            <p className="text-gray-600">Carregando...</p>
          </div>
        ) : templates.length === 0 ? (
          <div className="bg-white rounded-lg p-12 text-center">
            <p className="text-gray-600 mb-4">Nenhum molde criado ainda</p>
            <Link href="/admin/moldes/novo" className="btn btn-primary">
              Criar Primeiro Molde
            </Link>
          </div>
        ) : (
          <div className="bg-white rounded-lg overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-200 bg-gray-50">
                    <th className="px-6 py-3 text-left text-sm font-semibold">
                      Nome
                    </th>
                    <th className="px-6 py-3 text-left text-sm font-semibold">
                      Categoria
                    </th>
                    <th className="px-6 py-3 text-left text-sm font-semibold">
                      Downloads
                    </th>
                    <th className="px-6 py-3 text-left text-sm font-semibold">
                      Visualizações
                    </th>
                    <th className="px-6 py-3 text-right text-sm font-semibold">
                      Ações
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {templates.map((template) => {
                    const cat = template.categories as any;
                    return (
                      <tr
                        key={template.id}
                        className="border-b border-gray-200 hover:bg-gray-50 transition"
                      >
                        <td className="px-6 py-4">
                          <div>
                            <p className="font-semibold">{template.name}</p>
                            <p className="text-sm text-gray-600">
                              {template.slug}
                            </p>
                          </div>
                        </td>
                        <td className="px-6 py-4">
                          <span className="inline-flex items-center gap-2">
                            {cat?.icon && <span>{cat.icon}</span>}
                            {cat?.name}
                          </span>
                        </td>
                        <td className="px-6 py-4">
                          <span className="inline-flex items-center gap-1 text-sm">
                            <Download className="w-4 h-4" />
                            {template.downloads || 0}
                          </span>
                        </td>
                        <td className="px-6 py-4 text-sm">
                          {template.views || 0}
                        </td>
                        <td className="px-6 py-4 text-right">
                          <div className="flex items-center justify-end gap-2">
                            <Link
                              href={`/admin/moldes/${template.id}/editar`}
                              className="p-2 hover:bg-gray-200 rounded transition"
                              title="Editar"
                            >
                              <Edit className="w-4 h-4" />
                            </Link>
                            <button
                              onClick={() => deleteTemplate(template.id)}
                              className="p-2 hover:bg-red-100 text-red-600 rounded transition"
                              title="Deletar"
                            >
                              <Trash2 className="w-4 h-4" />
                            </button>
                          </div>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
