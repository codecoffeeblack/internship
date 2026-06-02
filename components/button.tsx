import React from 'react'
interface ButtonProps {
    label: string;
}

const Button = ({ label }: ButtonProps) => {
  return (
    <button className="w-full bg-black text-white p-2 rounded-md text-sm mt-2
    hover:cursor-pointer">
        {label}
    </button>
  )
}

export default Button  
