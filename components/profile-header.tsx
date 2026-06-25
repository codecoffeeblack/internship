"use client"

import Image from "next/image";
import DefaultAvatar from "./default-avatar";

interface ProfileHeaderProps {
  avatar?: string | null;
  firstName: string;
  lastName: string;
  username: string;
}

const ProfileHeader = ({
  avatar,
  firstName,
  lastName,
  username,
}: ProfileHeaderProps) => {
  return (
    <div className="flex items-center gap-4 rounded-lg border p-6">
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

        <p className="text-gray-500">@{username}</p>
      </div>
    </div>
  );
};

export default ProfileHeader;