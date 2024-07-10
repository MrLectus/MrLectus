"use client";
import { useToggle } from "@/app/hooks/toogle";
import { clsx } from "clsx";
import Link from "next/link";

const NavBar = () => {
  const [showNav, setShowNav] = useToggle();
  return (
    <header className="h-24 drop-shadow-sm border-b flex items-center bg-white z-20 fixed top-0 left-0 right-0">
      <nav className="flex justify-between m-4 w-full relative">
        <div>
          <Link
            href="https://mrlectus.me"
            className="font-bold text-xl font-poppins"
          >
            mrlectus.me
          </Link>
        </div>
        <div
          className="md:hidden border-2 flex w-fit border-black/50 cursor-pointer p-1 rounded-md drop-shadow-md"
          onClick={setShowNav}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </div>

        <div
          className={clsx("", {
            "flex flex-col gap-2 z-10 absolute w-full bg-white/95 h-screen backdrop-blur-xl":
              showNav,
            "hidden md:flex": !showNav,
          })}
        >
          <div
            className="md:hidden flex flex-row justify-end p-2 w-full cursor-pointer"
            onClick={setShowNav}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-10 h-10"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
              />
            </svg>
          </div>
          <div className="flex flex-col gap-10 font-black h-full justify-center items-center text-2xl text-center md:flex md:flex-row md:gap-2 md:text-xl md:text-bold ">
            <Link
              className="hover:underline md:hover:text-blue-400"
              href="#home"
              onClick={setShowNav}
            >
              Home
            </Link>
            <Link
              className="hover:underline md:hover:text-blue-400"
              onClick={setShowNav}
              href="#about"
            >
              About
            </Link>
            <Link
              className="hover:underline md:hover:text-blue-400"
              href="#projects"
              onClick={setShowNav}
            >
              Projects
            </Link>
            <Link
              className="hover:underline md:hover:text-blue-400"
              href="#contacts"
              onClick={setShowNav}
            >
              Contact
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
