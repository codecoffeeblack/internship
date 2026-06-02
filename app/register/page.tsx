import InputField from "@/components/input-field";
import LoginForm from "@/components/login-form";
import Button from "@/components/button";
import Link from "next/link";

const RegisterPage = () => {
    return (
        <div className="flex justify-center h-screen items-center flex-col gap-4">
            <div className="flex items-center flex-col gap-2">
                <h1 className="font-bold text-2xl">thread.</h1>
                <p className="text-gray-500">A quieter kind of social.</p>
            </div>
            
            <LoginForm label="Register">
                <form>
                    <InputField label="First Name" placeholder="Enter your first name" type="text"/>
                    <InputField label="Last Name" placeholder="Enter your last name" type="text"/>
                    <InputField label="Email or username" placeholder="Enter your email or username" type="text"/>
                    <InputField label="Password" placeholder="Enter your password" type="password"/>
                    <Button label="Register"></Button>        
                </form>
            </LoginForm>

            <div className="flex gap-1 text-sm">
                <p>Already have an account?</p><Link href="/login" className="underline">Sign in</Link>
            </div>
            
        </div>
    )
}

export default RegisterPage