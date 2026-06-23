import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import getSupabaseAdminClient from "@/lib/supabase/server";
import bcrypt from "bcryptjs";

interface Credentials {
    email: string;
    password: string;
}

export default NextAuth({
    providers: [
        Credentials({
            credentials: {
                email: { label: "Email", type: "email" },
                password: { label: "Password", type: "password" },
            },
            async authorize(credentials: any) {
                const {data, error} = await getSupabaseAdminClient()
                .from("user")
                .select("*")
                .eq("email", credentials.email as string).single();

                if (error || !data) {
                    console.error("Error fetching user:", error);
                    return null;
                }
                const isPasswordValid = await bcrypt.compare(credentials.password as string, data.password);
                if (!isPasswordValid) {
                    return null;
                }
                return data;
            }
        })
    ],

    pages: {
        signIn: "/login"
    },

    callbacks: {
        async jwt({token, user}) {
            console.log(user)
            if (user) {
                token.id = user.id;
                token.name = `${user?.first_name} ${user?.last_name}`;
            }
            return token;
        },

        async session({session, token}: any) {
            session.user.name=token.name
            if(token.id) {
                session.user.id = token.id as string;
            }
            return session;
        },
    },
    session:{
        strategy:"jwt"
    }
});
