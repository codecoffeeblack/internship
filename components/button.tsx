import React from 'react'
interface ButtonProps {
    label: string;
    type: "button" | "submit" | "reset" | undefined;
    onClick?: () => void;
}

const Button = ({ label, type, onClick }: ButtonProps) => {
  return (
    <button type={type} onClick={onClick} className="w-full bg-black text-white p-2 rounded-md text-sm mt-2
    hover:cursor-pointer">
        {label}
    </button>
  )
}

export default Button  
