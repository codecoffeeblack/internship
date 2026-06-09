import getSupabaseAdminClient from "@/lib/supabase/server";

interface RequestContext {params: Promise<{ userId: string }>}

export async function GET(request: Request, context: RequestContext ) {
    const userId = (await context.params).userId;
    const {data, error} = await getSupabaseAdminClient().from("user").select("*").eq("user_id", userId).single();
    if (error) {
        console.error("Error fetching user:", error.message);
        return new Response("Error fetching user", { status: 500 });
    }
  return new Response(JSON.stringify(data));
}