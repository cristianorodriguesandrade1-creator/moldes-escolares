export const dynamic = 'force-dynamic';
import { createClient } from "@/lib/supabase/server";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const limit = parseInt(searchParams.get("limit") || "20");
    const offset = parseInt(searchParams.get("offset") || "0");
    const categoryId = searchParams.get("category_id");
    const featured = searchParams.get("featured");

    const supabase = await createClient();

    let query = supabase
      .from("templates")
      .select("*, categories(name, slug, icon)", { count: "exact" });

    if (categoryId) {
      query = query.eq("category_id", categoryId);
    }

    if (featured === "true") {
      query = query.eq("featured", true);
    }

    query = query.order("created_at", { ascending: false });

    const { data, error, count } = await query.range(offset, offset + limit - 1);

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 400 });
    }

    return NextResponse.json(
      { data, total: count },
      {
        headers: {
          "Cache-Control":
            "public, s-maxage=3600, stale-while-revalidate=86400",
        },
      }
    );
  } catch (error) {
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
