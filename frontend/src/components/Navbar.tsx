import React from "react";
import Link from "next/link";
import { getServerSession } from "next-auth";
import {
  authOptions,
  CustomSession,
  CustomUser,
} from "@/app/api/auth/[...nextauth]/options";
import LogoutDropdown from "./LogoutDropdown";
import LoginButton from "./LoginButton";

const Navbar = async () => {
  const session: CustomSession | null = await getServerSession(authOptions);
  const user = session?.user as CustomUser | undefined;

  return (
    <nav className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <Link href="/" className="text-2xl font-bold text-blue-600">
              SpeedPost Chat
            </Link>
          </div>
          <div className="flex items-center">
            {!user ? (
              <LoginButton />
            ) : (
              <LogoutDropdown name={user?.name!} image={user?.image!} />
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
