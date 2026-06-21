import { MetadataRoute } from "next";
import { createClient as createSupabaseClient } from "@supabase/supabase-js";

export const dynamic = 'force-dynamic';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const supabase = createSupabaseClient(
          process.env.NEXT_PUBLIC_SUPABASE_URL || '',
          process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || ''
        );

  const baseUrl = "https://moldescolares.com";

  // Rotas estáticas
  const staticRoutes = [
    { url: baseUrl, lastModified: new Date(), changeFrequency: "weekly" as const, priority: 1 },
    { url: `${baseUrl}/sobre`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.8 },
    { url: `${baseUrl}/contato`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.8 },
      ];

  // Categorias dinâmicas
  const { data: categories } = await supabase
      .from("categories")
      .select("slug, updated_at");

  const categoryRoutes =
        categories?.map((cat) => ({
                url: `${baseUrl}/categoria/${cat.slug}`,
                lastModified: new Date(cat.updated_at),
                changeFrequency: "weekly" as const,
                priority: 0.9,
        })) || [];

  // Templates dinâmicos
  const { data: templates } = await supabase
      .from("templates")
      .select("slug, updated_at")
      .limit(5000);

  const templateRoutes =
        templates?.map((template) => ({
                url: `${baseUrl}/molde/${template.slug}`,
                lastModified: new Date(template.updated_at),
                changeFrequency: "monthly" as const,
                priority: 0.7,
        })) || [];

  return [...staticRoutes, ...categoryRoutes, ...templateRoutes];
}
