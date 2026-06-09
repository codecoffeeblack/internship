import getSupabaseAdminClient from "@/lib/supabase/server";

export async function GET() {
  const supabase = getSupabaseAdminClient();
  const { data, error } = await supabase.from("user").select("*");
  if (error) {
    console.error("Error fetching users:", error.message);
    return new Response("Error fetching users", { status: 500 });
  }

  return new Response(JSON.stringify(data));
}

export function POST() {

}