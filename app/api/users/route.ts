import getSupabaseAdminClient from "@/lib/supabase/server";
import { validateEmail, validatePassword } from "@/lib/util";
import bcrypt from "bcryptjs";
import { NextRequest, NextResponse } from "next/server";


interface User{
  first_name: string;
  last_name: string;
  email: string;
  password: string;
  confirm_password?: string;
}

export async function GET() {
  const supabase = getSupabaseAdminClient();
  const { data, error } = await supabase.from("user").select("*");
  if (error) {
    console.error("Error fetching users:", error.message);
    return new Response("Error fetching users", { status: 500 });
  }

  return new Response(JSON.stringify(data));
}

export async function POST(request: NextRequest) {
  const payload: User = await request.json()
  const {first_name, last_name, email, password, confirm_password} = payload;

  if (!first_name || !last_name || !email || !password || !confirm_password) {
    return NextResponse.json({
      error: "Missing Credentials"
    }, {status: 400})
  }

  const {valid: validEmail, reason: invalidEmailReason} = validateEmail(email)

  if (!validEmail) {
    return NextResponse.json({
      error: invalidEmailReason
    }, {status: 400})
  }

  const {valid, reason} = validatePassword(password)

  if (!valid) {
    return NextResponse.json({
      error: reason
    }, {status: 400})
  }

  if (password !== confirm_password) {
    return NextResponse.json({
      error: "Password does not match"
    }, {status: 400})
  }

  const { data: existingUser, error: existingUserError } = await getSupabaseAdminClient().from("user").select("*").eq("email", email).single();
  console.log (existingUser, existingUserError);
  if (existingUser) {
    console.error("Error fetching user:", existingUser?.error?.message);
    return NextResponse.json({
      error: "Email already in use"
    }, {status: 400})
  }

  const hashedPassword = await bcrypt.hash(password, 10);
  payload.password = hashedPassword;
  delete payload.confirm_password;

  const {data, error} = await getSupabaseAdminClient().from("user").insert(payload);
  console.log(data);

  if (error) {
    console.error("Error creating user:", error.message);
    return NextResponse.json({
      error: "Error creating user"
    }, {status: 500})
  }

  const { data: newUser, error: errorCreateUser } = await getSupabaseAdminClient().from("user").select("*").eq("email", email).single();
  if (errorCreateUser) {
    console.error("Error fetching user:", errorCreateUser?.message);
    return NextResponse.json({
      error: "Error in creating user"
    }, {status: 500})
  }

  delete newUser.password;

  return NextResponse.json(newUser, {status: 201});

}



