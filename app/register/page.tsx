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
                    <InputField 
                        label="First Name" 
                        placeholder="Enter your first name" 
                        type="text"
                        name="First_name"
                        onChange={() => {}}/>
                    <InputField 
                        label="Last Name" 
                        placeholder="Enter your last name" 
                        type="text"
                        name="Last_name"
                        onChange={() => {}}/>
                    <InputField 
                        label="Email or username" 
                        placeholder="Enter your email or username" 
                        type="text"
                        name="Email"
                        onChange={() => {}}/>
                    <InputField 
                        label="Password" 
                        placeholder="Enter your password" 
                        type="password"
                        name="Password"
                        onChange={() => {}}/>
                    <InputField 
                        label="Confirm Password" 
                        placeholder="Confirm your password" 
                        type="password"
                        name="Confirm_Password"
                        onChange={() => {}}/>
                    <Button label="Register" type="submit"></Button>        
                </form>
            </LoginForm>

            <div className="flex gap-1 text-sm">
                <p>Already have an account?</p><Link href="/login" className="underline">Sign in</Link>
            </div>
            
        </div>
    )
}

export default RegisterPage