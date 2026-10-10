"use client";
import Image from "next/image";
import NavLinks from "./NavLinks";
import { Suspense } from "react";
import Link from "next/link";
import Marquee from "./Marquee";
import { toast } from "sonner";
import { signOut } from "../lib/auth-client";
import { useSession } from "../lib/auth-client";import { useState } from "react";


const NavbarSkeleton = () => (
  <div className="flex items-center gap-1.5 sm:gap-2 md:gap-3 animate-pulse">
    <div className="h-7 w-16 rounded-lg bg-gray-200 sm:h-8 sm:w-20 md:h-10 md:w-24" />
    <div className="h-7 w-16 rounded-lg bg-gray-200 sm:h-8 sm:w-20 md:h-10 md:w-24" />
  </div>
);


const Navbar = () => {
const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
const { data: session, isPending } = useSession();



console.log('user session in navbar', session);

    return (
        <nav className="w-[95%] sm:w-[90%] md:w-[85%] mx-auto mt-3 sm:mt-5 rounded-xl sm:rounded-2xl bg-white px-3 py-2 sm:px-4 sm:py-3 md:px-6 md:py-4 shadow-sm">

            <div className="flex items-center justify-between">

                {/* Left Side */}
         {/* Left Side */}
<div className="flex items-center gap-2 sm:gap-3">
  <Image
    src="/logo-icon.png"
    alt="Bazar Dor Logo"
    width={24}
    height={24}
    className="h-6 w-6 sm:h-7 sm:w-7 object-contain bg-green-500 p-1 rounded-[5px]"
  />

  {isPending ? (
    <div className="flex animate-pulse flex-col gap-1">
      <div className="h-4 w-20 rounded bg-gray-200 sm:h-5 md:h-6" />
      <div className="h-2.5 w-16 rounded bg-gray-200 sm:h-3" />
    </div>
  ) : (
    <Link href="/">
      <div className="flex flex-col">
        <span className="text-sm sm:text-base md:text-xl font-bold text-black">
          বাজার দর
        </span>
        <span className="text-[9px] sm:text-xs md:text-sm text-gray-500">
          ৬ অক্টোবর ২০২৬
        </span>
      </div>
    </Link>
  )}
</div>

                {/* Right Side */}
       <div className="flex items-center gap-1.5 sm:gap-2 md:gap-3">
{isPending ? (
  <NavbarSkeleton />
) : session?.user ? (
  <div className="relative">
    <button
      type="button"
      onClick={() => setIsUserMenuOpen((open) => !open)}
      className="rounded-lg px-2 py-1.5 text-xs font-medium text-gray-800 hover:bg-gray-100 sm:px-3 sm:py-2 md:text-base"
    >
      Welcome, {session.user.name} ▾
    </button>

    {isUserMenuOpen && (
      <div className="absolute right-0 z-50 mt-2 w-40 rounded-lg border border-gray-200 bg-white p-1 shadow-lg">
        <Link
          href="/profile"
          onClick={() => setIsUserMenuOpen(false)}
          className="block rounded-md px-3 py-2 text-sm text-gray-700 hover:bg-green-50 hover:text-green-700"
        >
          Profile
        </Link>

        <button
          type="button"
          onClick={async () => {
            await signOut();
            toast.success("Logged out successfully!");
            setTimeout(() => {
              window.location.href = "/";
            }, 800);
          }}
          className="block w-full rounded-md px-3 py-2 text-left text-sm text-red-600 hover:bg-red-50"
        >
          লগ আউট
        </button>
      </div>
    )}
  </div>
) : (
  <>
    <Link
      href="/SignIn"
      className="rounded-lg bg-gray-200 px-2 py-1.5 text-[10px] font-medium text-black hover:bg-gray-300 sm:px-3 sm:py-2 sm:text-xs md:px-5 md:py-2.5 md:text-base"
    >
      সাইন ইন
    </Link>

    <Link
      href="/Signup"
      className="rounded-lg bg-green-600 px-2 py-1.5 text-[10px] font-medium text-white hover:bg-green-700 sm:px-3 sm:py-2 sm:text-xs md:px-5 md:py-2.5 md:text-base"
    >
      সাইন আপ
    </Link>
  </>
)}
</div>
            </div>


        {/* <Suspense fallback='loading'></Suspense> */}

        </nav>
    );
};

export default Navbar;