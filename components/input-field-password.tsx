import { ChangeEventHandler, useState } from "react";
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/outline";

interface InputFieldProps {
    label: string;
    placeholder: string;
    type: string;
    name: string;
    onChange: ChangeEventHandler<HTMLInputElement>;
}

const InputFieldPassword = (props: InputFieldProps) => {
    const { label, placeholder, type, name, onChange } = props;
    const [isShowPassword, setIsShowPassword] = useState(false)
    const handleShowPassword = () => {
        setIsShowPassword(!isShowPassword)
    }
    return (
    <div className="flex flex-col gap-1 mb-4 relative">
        <label className="text-sm font-medium text-gray-700">{label}</label>
        <input onChange={onChange} 
        type={
            isShowPassword? "text" : "password"
        } 
        placeholder={placeholder} 
        name={name} 
        className="border border-1 border-gray-400 bg-white p-1 rounded-md"/>
        <button type="button" onClick={handleShowPassword} className="absolute right-2 top-8">
            {
            isShowPassword? <EyeIcon style={{width: "20px"}}/> : <EyeSlashIcon style={{width: "20px"}}/>
            }
        </button>
    </div>
    )
}

export default InputFieldPassword