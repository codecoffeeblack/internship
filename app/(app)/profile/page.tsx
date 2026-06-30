"use client";

import Button from "@/components/button";
import ModalDialog from "@/components/modal";
import Modal from "@/components/modal";
import ProfileHeader from "@/components/profile-header";
import { signOut, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const ProfilePage = () => {
  const router = useRouter();
  const { data: session, status } = useSession();

  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/");
    }
  }, [status, router]);

  const handleSignOut = () => {
    signOut({ redirect: true, callbackUrl: "/" });
  };

  if (status === "loading") {
    return <p>Loading...</p>;
  }

  return (
    <div className="flex justify-center h-screen items-center flex-col gap-4">
      {session?.user && (
        <ProfileHeader
          avatar={session.user.image}
          firstName={session.user.name?.split(" ")[0] || "First"}
          lastName={session.user.name?.split(" ")[1] || "Last"}
          email={session.user.email || ""}
        />
      )}

      <div className="w-24">
        <Button
          onClick={handleSignOut}
          type="button"
          label="Log out"
        />

      </div>
    </div>
  );
};

export default ProfilePage;