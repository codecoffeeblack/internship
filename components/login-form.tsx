interface LoginFormProps {
    children?: React.ReactNode;
    label: string;
}

const LoginForm = ({ children, label }: LoginFormProps) => {
    return (
        <div className="w-full max-w-sm p-6 bg-gray-200 rounded-lg shadow-md border border-gray-300">
            <h2 className="text-lg font-bold mb-2 text-gray-700">{label}</h2>
            {children}
        </div>
    )
}

export default LoginForm;