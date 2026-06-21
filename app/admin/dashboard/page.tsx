"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase/client";
import {
  BarChart3,
  Download,
  Eye,
  FileText,
  LogOut,
  Plus,
  Settings,
} from "lucide-react";
import Link from "next/link";

export default function DashboardPage() {
  const router = useRouter();
  const supabase = createClient();
  const [user, setUser] = useState<any>(null);
  const [stats, setStats] = useState({
    templates: 0,
    downloads: 0,
    views: 0,
    newsletters: 0,
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadData() {
      try {
        // Get current user
        const {
          data: { user: currentUser },
        } = await supabase.auth.getUser();
        setUser(currentUser);

        // Get stats
        const { count: templatesCount } = await supabase
          .from("templates")
          .select("id", { count: "exact", head: true });

        const { count: downloadsCount } = await supabase
          .from("downloads")
          .select("id", { count: "exact", head: true });

        const { count: viewsCount } = await supabase
          .from("page_views")
          .select("id", { count: "exact", head: true });

        const { count: newslettersCount } = await supabase
          .from("newsletters")
          .select("id", { count: "exact", head: true });

        setStats({
          templates: templatesCount || 0,
          downloads: downloadsCount || 0,
          views: viewsCount || 0,
          newsletters: newslettersCount || 0,
        });
      } catch (error) {
        console.error("Error loading data:", error);
      } finally {
        setLoading(false);
      }
    }

    loadData();
  }, []);

  async function handleLogout() {
    await supabase.auth.signOut();
    router.push("/");
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-40">
        <div className="container px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-primary-600 to-accent-500 rounded-lg flex items-center justify-center text-white font-bold">
              M
            </div>
            <div>
              <h1 className="font-bold text-lg">Painel Admin</h1>
              <p className="text-xs text-gray-600">{user?.email}</p>
            </div>
          </div>

          <button
            onClick={handleLogout}
            className="btn btn-secondary flex items-center gap-2"
          >
            <LogOut className="w-4 h-4" />
            Sair
          </button>
        </div>
      </header>

      {/* Sidebar + Main */}
      <div className="flex">
        {/* Sidebar */}
        <aside className="w-64 bg-white border-r border-gray-200 hidden md:block">
          <nav className="p-4 space-y-2">
            <Link
              href="/admin/dashboard"
              className="flex items-center gap-3 px-4 py-2 rounded-lg bg-primary-50 text-primary-600 font-semibold"
            >
              <BarChart3 className="w-5 h-5" />
              Dashboard
            </Link>
            <Link
              href="/admin/moldes"
              className="flex items-center gap-3 px-4 py-2 rounded-lg hover:bg-gray-50 transition"
            >
              <FileText className="w-5 h-5" />
              Moldes
            </Link>
            <Link
              href="/admin/categorias"
              className="flex items-center gap-3 px-4 py-2 rounded-lg hover:bg-gray-50 transition"
            >
              <Settings className="w-5 h-5" />
              Categorias
            </Link>
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-6">
          {loading ? (
            <div className="text-center py-12">
              <p className="text-gray-600">Carregando...</p>
            </div>
          ) : (
            <>
              {/* Title */}
              <div className="mb-8">
                <h2 className="text-3xl font-bold mb-2">Bem-vindo ao Dashboard</h2>
                <p className="text-gray-600">
                  Gerencie seus moldes e visualize estatísticas
                </p>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                <div className="bg-white rounded-lg p-6 border border-gray-200">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-gray-600 text-sm font-semibold mb-1">
                        Moldes
                      </p>
                      <p className="text-3xl font-bold text-gray-900">
                        {stats.templates}
                      </p>
                    </div>
                    <FileText className="w-10 h-10 text-primary-200" />
                  </div>
                </div>

                <div className="bg-white rounded-lg p-6 border border-gray-200">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-gray-600 text-sm font-semibold mb-1">
                        Downloads
                      </p>
                      <p className="text-3xl font-bold text-gray-900">
                        {stats.downloads}
                      </p>
                    </div>
                    <Download className="w-10 h-10 text-accent-200" />
                  </div>
                </div>

                <div className="bg-white rounded-lg p-6 border border-gray-200">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-gray-600 text-sm font-semibold mb-1">
                        Visualizações
                      </p>
                      <p className="text-3xl font-bold text-gray-900">
                        {stats.views}
                      </p>
                    </div>
                    <Eye className="w-10 h-10 text-blue-200" />
                  </div>
                </div>

                <div className="bg-white rounded-lg p-6 border border-gray-200">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-gray-600 text-sm font-semibold mb-1">
                        Newsletter
                      </p>
                      <p className="text-3xl font-bold text-gray-900">
                        {stats.newsletters}
                      </p>
                    </div>
                    <Mail className="w-10 h-10 text-green-200" />
                  </div>
                </div>
              </div>

              {/* Quick Actions */}
              <div className="bg-white rounded-lg p-6 border border-gray-200">
                <h3 className="text-lg font-bold mb-4">Ações Rápidas</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <Link
                    href="/admin/moldes/novo"
                    className="btn btn-primary flex items-center justify-center gap-2"
                  >
                    <Plus className="w-5 h-5" />
                    Novo Molde
                  </Link>
                  <Link
                    href="/admin/moldes"
                    className="btn btn-secondary"
                  >
                    Gerenciar Moldes
                  </Link>
                  <Link
                    href="/admin/categorias"
                    className="btn btn-secondary"
                  >
                    Gerenciar Categorias
                  </Link>
                </div>
              </div>
            </>
          )}
        </main>
      </div>
    </div>
  );
}

// Icon import fix
function Mail({ className }: { className: string }) {
  return (
    <svg
      className={className}
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
      />
    </svg>
  );
}
