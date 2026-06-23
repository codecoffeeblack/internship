import Link from "next/link"
import Navigation from "@/components/navigation"
import { getServerSession, Session } from "next-auth";
import auth from "@/lib/auth";

interface User {
    name: string
    email: string
    image: string
}

const AppPrivateLayout = async ({children}: Readonly<{children: React.ReactNode}>) => {
      const session:Session | null = await getServerSession(auth);
      console.log("session", session?.user);
    return (
            <div>
            <Navigation user={session?.user}/>
            {children}   
        </div>
    )
}

export default AppPrivateLayout