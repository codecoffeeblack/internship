import InputField from "@/components/input-field";
import LoginForm from "@/components/login-form";
import Button from "@/components/button";
import Link from "next/link";

const LoginPage = () => {
    return (
        <div className="flex justify-center h-screen items-center flex-col gap-4">
            <div className="flex items-center flex-col gap-2">
                <h1 className="font-bold text-2xl">thread.</h1>
                <p className="text-gray-500">A quieter kind of social.</p>
            </div>
            
            <LoginForm label="Sign in">
                <form>
                    <InputField label="Email or username" placeholder="Enter your email or username" type="text"/>
                    <InputField label="Password" placeholder="Enter your password" type="password"/>
                    <Button label="Sign in"></Button>        
                </form>
            </LoginForm>

            <div className="flex gap-1 text-sm">
                <p> Don't have an account?</p><Link href="/register" className="underline">Register</Link>
            </div>
            
        </div>
    )
}

export default LoginPage