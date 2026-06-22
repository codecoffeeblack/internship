import { ChangeEventHandler } from "react";

interface InputFieldProps {
    label: string;
    placeholder: string;
    type: string;
    name: string;
    onChange: ChangeEventHandler<HTMLInputElement>;
}

const InputField = (props: InputFieldProps) => {
    const { label, placeholder, type, name, onChange } = props;
    return (
    <div className="flex flex-col gap-1 mb-4">
        <label className="text-sm font-medium text-gray-700">{label}</label>
        <input onChange={onChange} 
        type={type} 
        placeholder={placeholder} 
        name={name} 
        className="border border-1 border-gray-400 bg-white p-1 rounded-md"/>
    </div>
    )
}

export default InputField