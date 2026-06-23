import LoginPage from "./login/page";
import auth from "@/lib/auth";
import { redirect } from "next/navigation";
import { getServerSession } from "next-auth";

export default async function Home() {
  const session = await getServerSession(auth);
  console.log("session", session?.user);
  if (session) {
    redirect("/home");
  }
  return (
    <main className="">
      <LoginPage />
    </main>
  );
}
