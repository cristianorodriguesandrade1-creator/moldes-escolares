import { createServerClient } from "@supabase/ssr";
import { cookies } from "next/headers";

export async function createClient() {
    let cookieStore: any = null;
    try {
          cookieStore = await cookies();
    } catch {
          // cookies() called outside request scope (e.g. during SSG build)
      // Return a client with empty cookie store
    }

  return createServerClient(
        process.env.NEXT_PUBLIC_SUPABASE_URL!,
        process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
            cookies: {
                      getAll() {
                                  return cookieStore ? cookieStore.getAll() : [];
                      },
                      setAll(cookiesToSet: any[]) {
                                  try {
                                                cookiesToSet.forEach(({ name, value, options }) =>
                                                                cookieStore.set(name, value, options)
                                                                                 );
                                  } catch {
                                                // The `setAll` method was called from a Server Component.
                                    // This can be ignored if you have middleware refreshing
                                    // user sessions.
                                  }
                      },
            },
    }
      );
}
