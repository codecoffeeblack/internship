import getSupabaseAdminClient from "@/lib/supabase/server";

interface RequestContext {params: Promise<{ email: string }>}

export async function GET(request: Request, context: RequestContext ) {
    const email = (await context.params).email;
    console.log("Fetching user with ID:", email);
    const {data, error} = await getSupabaseAdminClient().from('user').select(`*, profile (*)`).eq('email', email).single();
    if (error) {
        console.error("Error fetching user:", error.message);
        return new Response("Error fetching user", { status: 500 });
    }
  return new Response(JSON.stringify(data));
}

export async function PATCH(request: Request, context: RequestContext ) {
  const email = (await context.params).email;
  const body = await request.json();
  const {data, error} = await getSupabaseAdminClient().from("user").select("*").eq("email", email).single();
  if (error) {
      console.error("Error fetching user:", error.message);
      return new Response("User not found", { status: 404 });
  }
  const payload = {
      ...data,
      ...body,
  }
  await getSupabaseAdminClient().from("user").update(payload).eq("email", email);
  return new Response(JSON.stringify(payload));
}

export async function DELETE(request: Request, context: RequestContext ) {
  const email = (await context.params).email;
  const {data, error} = await getSupabaseAdminClient().from("user").select("*").eq("email", email).single();
  if (error) {
      console.error("Error fetching user:", error.message);
      return new Response("User not found", { status: 404 });
  }

  await getSupabaseAdminClient().from("user").delete().eq("email", email);
  return new Response("User deleted", { status: 200 });
}