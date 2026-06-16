import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import getSupabaseAdminClient from "@/lib/supabase/server";
import bcrypt from "bcryptjs";

interface Credentials {
    email: string;
    password: string;
}

export const {handlers, signIn, signOut, auth} = NextAuth({
    providers: [
        Credentials({
            credentials: {
                email: { label: "Email", type: "email" },
                password: { label: "Password", type: "password" },
            },
            async authorize(credentials: Credentials) {
                const {data, error} = await getSupabaseAdminClient().from("user").select("*").eq("email", credentials.email).single();
                if (error || !data) {
                    console.error("Error fetching user:", data?.error?.message);
                    return null;
                }
                const isPasswordValid = await bcrypt.compare(credentials.password, data.password);
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
            if (user) {
                token.id = user.id
            }
            return token;
        },

        async session({session, token}) {
            if(token.id) {
                session.user.id = token.id as string
            }
            return session;
        },
    }
});