"use client"

import InputField from "@/components/input-field";
import LoginForm from "@/components/login-form";
import Button from "@/components/button";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import InputFieldPassword from "@/components/input-field-password";


const RegisterPage = () => {
    const router = useRouter();
    const [form, setForm] = useState({ first_name: '', last_name: '', email: '', password: '', confirm_password: '' });

    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');

    const handleSubmit = async (event: React.SubmitEvent<HTMLFormElement>) => {
            event.preventDefault();
            setIsLoading(true);
            setIsError(false);
            const response = await fetch("/api/users", {
                method: "POST",
                body: JSON.stringify(form)
            });
            if (response?.ok) {
                router.push("/login");
            } else {
                const data = await response.json();
                console.log(data);
                setErrorMessage(data.error);
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
            
            <LoginForm label="Register">
                <form onSubmit={ handleSubmit }>
                    <InputField 
                        label="First Name" 
                        placeholder="Enter your first name" 
                        type="text"
                        name="first_name"
                        onChange={(event) => setForm({...form, first_name: event.target.value})}/>
                    <InputField 
                        label="Last Name" 
                        placeholder="Enter your last name" 
                        type="text"
                        name="last_name"
                        onChange={(event) => setForm({...form, last_name: event.target.value})}/>
                    <InputField 
                        label="Email or username" 
                        placeholder="Enter your email or username" 
                        type="text"
                        name="email"
                        onChange={(event) => setForm({...form, email: event.target.value})}/>
                    <InputFieldPassword 
                        label="Password" 
                        placeholder="Enter your password" 
                        type="password"
                        name="password"
                        onChange={(event) => setForm({...form, password: event.target.value})}/>
                    <InputFieldPassword
                        label="Confirm Password" 
                        placeholder="Confirm your password" 
                        type="password"
                        name="confirm_password"
                        onChange={(event) => setForm({...form, confirm_password: event.target.value})}/>
                    <Button label={isLoading ? "Loading..." : "Register"} type="submit"></Button>        
                </form>
                {
                    isError ? <p className="text-red-500">{errorMessage}</p> : <></>
                }
            </LoginForm>

            <div className="flex gap-1 text-sm">
                <p>Already have an account?</p><Link href="/login" className="underline">Sign in</Link>
            </div>
            
        </div>
    )
}

export default RegisterPage