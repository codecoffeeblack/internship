"use client";

import Button from "@/components/button";
import { signOut, useSession } from "next-auth/react";
import { redirect, useRouter } from "next/dist/client/components/navigation";
import { useEffect } from "react";

const ProfilePage = () => {
    const router = useRouter();
    const { data: session, status } = useSession();
    
    useEffect(() => {
        if (status === "unauthenticated"){
            router.push("/");
        }
    }, [status]) 
    
    const handleSignOut = () => {
        signOut({ redirect: true, callbackUrl: "/" });
    }
    
    return (
        <div className="flex justify-center h-screen items-center flex-col gap-4">
            <div className="flex items-center flex-col gap-2">
                <h1 className="font-bold text-2xl">thread.</h1>
                <p className="text-gray-500">A quieter kind of social.</p>
            </div>
            <p className="text-lg text-center">
               profile page
            </p>
        <div className="w-24">
            <Button onClick={handleSignOut} type="button" label="Log out"></Button>
        </div>
        
            
        </div>
    )
}

export default ProfilePage