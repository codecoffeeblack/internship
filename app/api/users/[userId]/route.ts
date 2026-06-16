import getSupabaseAdminClient from "@/lib/supabase/server";

interface RequestContext {params: Promise<{ userId: string }>}

export async function GET(request: Request, context: RequestContext ) {
    const userId = (await context.params).userId;
    console.log("Fetching user with ID:", userId);
    const {data, error} = await getSupabaseAdminClient().from("user").select("*").eq("user_id", userId).single();
    if (error) {
        console.error("Error fetching user:", error.message);
        return new Response("Error fetching user", { status: 500 });
    }
  return new Response(JSON.stringify(data));
}

export async function PATCH(request: Request, context: RequestContext ) {
  const userId = (await context.params).userId;
  const body = await request.json();
  const {data, error} = await getSupabaseAdminClient().from("user").select("*").eq("user_id", userId).single();
  if (error) {
      console.error("Error fetching user:", error.message);
      return new Response("User not found", { status: 404 });
  }
  const payload = {
      ...data,
      ...body,
  }
  await getSupabaseAdminClient().from("user").update(payload).eq("user_id", userId);
  return new Response(JSON.stringify(payload));
}

export async function DELETE(request: Request, context: RequestContext ) {
  const userId = (await context.params).userId;
  const {data, error} = await getSupabaseAdminClient().from("user").select("*").eq("user_id", userId).single();
  if (error) {
      console.error("Error fetching user:", error.message);
      return new Response("User not found", { status: 404 });
  }

  await getSupabaseAdminClient().from("user").delete().eq("user_id", userId);
  return new Response("User deleted", { status: 200 });
}