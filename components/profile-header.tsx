"use client"

import Image from "next/image";
import DefaultAvatar from "./default-avatar";
import ModalDialog from "./modal";
import { useEffect, useState } from "react";
import InputField from "./input-field";

interface ProfileHeaderProps {
  avatar?: string | null;
  firstName: string;
  lastName: string;
  email: string;
}

const ProfileHeader = ({
  avatar,
  firstName,
  lastName,
  email,
}: ProfileHeaderProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(!isOpen)
  }

  const handleSave = () => {

  }

  const handleGet = async () => {
    const response = await fetch(`/api/users/email/${email}`)
    const data = await response.json()
    console.log(data)
  }
  
  useEffect(() => {
    handleGet()
  }, [])

  return (
    <>
    <div className="flex items-center gap-4 rounded-lg border p-6 relative">
      <button className="absolute top-1 right-1 border border-gray-300 rounded p-1 cursor-pointer" onClick={handleOpen}>Edit Profile</button>
      {avatar ? (
        <Image
          src={avatar}
          alt={`${firstName} ${lastName}`}
          width={80}
          height={80}
          className="rounded-full object-cover"
        />
      ) : (
        <DefaultAvatar
          firstName={firstName}
          lastName={lastName}
          size={80}
        />
      )}

      <div>
        <h1 className="text-2xl font-bold">
          {firstName} {lastName}
        </h1>

        <p className="text-gray-500">@</p>
      </div>
    </div>
     <ModalDialog title='Edit Profile' cancelButtonLabel='Cancel' saveButtonLabel='Save' handleSave={()=>{}} handleClose ={handleOpen} status={isOpen}>
                    <InputField 
                        label="First Name" 
                        placeholder="Enter your first name" 
                        type="text"
                        name="first_name"
                        onChange={() => {}}
                        />
                    <InputField 
                        label="Last Name" 
                        placeholder="Enter your last name" 
                        type="text"
                        name="last_name"
                        onChange={() => {}}
                        />
                    <InputField 
                        label="Username" 
                        placeholder="Enter your username" 
                        type="text"
                        name="username"
                        onChange={() => {}}
                        />
                    <textarea 
                        placeholder="Enter your bio" 
                        rows={6}
                        cols={53}
                        name="bio"
                        onChange={() => {}}
                        /> 
    </ModalDialog>
    </>
  );
};

export default ProfileHeader;