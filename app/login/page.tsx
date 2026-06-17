"use client";

import InputField from "@/components/input-field";
import LoginForm from "@/components/login-form";
import Button from "@/components/button";
import Link from "next/link";
import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";


const LoginPage = () => {
    const router = useRouter();
    const [form, setForm] = useState({ email: '', password:'' })

    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setIsLoading(true);
        setIsError(false);
        const response = await signIn('credentials', {
            email: form.email,
            password: form.password,
            redirect: false
        })
        if (response?.ok) {
            router.push("/home");
        } else {
            console.log(response);
            setIsError(true);
        }
        setIsLoading(false);

    }
   
    
    
    return (
        <div className="flex justify-center h-screen items-center flex-col gap-4">
            <div className="flex items-center flex-col gap-2">
                <h1 className="font-bold text-2xl">thread.</h1>
                <p className="text-gray-500">A quieter kind of social.</p>
            </div>
            
            <LoginForm label="Sign in">
                <form onSubmit={ handleSubmit }>
                    <InputField 
                        onChange={(event) => {setForm({...form, email: event.target.value})}} 
                        name="email" 
                        label="Email or username" 
                        placeholder="Enter your email or username" 
                        type="text"
                    />
                    <InputField 
                        onChange={(event) => {setForm({...form, password: event.target.value})}} 
                        name="password" 
                        label="Password" 
                        placeholder="Enter your password" 
                        type="password"/>
                    <Button type="submit" label={isLoading ? "Loading..." : "Sign in"}></Button>        
                </form>
                {
                    isError ? <p className="text-red-500">Invalid Email or Password</p> : <></>
                }
                
            </LoginForm>

            <div className="flex gap-1 text-sm">
                <p> Don't have an account?</p><Link href="/register" className="underline">Register</Link>
            </div>
            
        </div>
    )
}

export default LoginPage