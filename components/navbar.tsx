"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navItems = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Projects", path: "/projects" },
  { name: "Contact", path: "/contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full z-50">
      <motion.div
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="glass mx-4 my-4 rounded-full px-2 py-2 md:px-8 md:py-4"
      >
        <nav className="container mx-auto flex items-center justify-between relative">
          <Link href="/" className="relative group">
            <span className="font-bold text-xl gradient-text">MR</span>
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-500 to-pink-500 group-hover:w-full transition-all duration-300"></span>
          </Link>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-white hover:bg-white/10 rounded-full transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-6"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>

          {/* Desktop Menu */}
          <ul className="hidden md:flex items-center gap-1 md:gap-2 text-sm">
            {navItems.map((item) => (
              <li key={item.path}>
                <Link
                  href={item.path}
                  className={`relative px-4 py-2 rounded-full transition-colors duration-300 hover:bg-white/10 ${
                    pathname === item.path ? "text-white" : "text-white/60"
                  }`}
                >
                  {pathname === item.path && (
                    <motion.span
                      layoutId="bubble"
                      className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full -z-10"
                      transition={{
                        type: "spring",
                        bounce: 0.2,
                        duration: 0.6,
                      }}
                    />
                  )}
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>

          {/* Mobile Menu Backdrop */}
          {isOpen && (
            <div
              className="fixed inset-0 bg-black/60 backdrop-blur-sm md:hidden"
              onClick={() => setIsOpen(false)}
              style={{ zIndex: 40 }}
            />
          )}

          {/* Mobile Menu */}
          <motion.div
            initial={false}
            animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
            className={`${
              isOpen ? "flex" : "hidden"
            } absolute top-full left-0 right-0 mt-2 glass rounded-2xl overflow-hidden md:hidden`}
            style={{ zIndex: 41 }}
          >
            <ul className="w-full py-2 backdrop-blur-md bg-[#030303]/80">
              {navItems.map((item) => (
                <li key={item.path}>
                  <Link
                    href={item.path}
                    onClick={() => setIsOpen(false)}
                    className={`block px-6 py-3 transition-colors duration-300 hover:bg-white/10 ${
                      pathname === item.path
                        ? "text-white bg-gradient-to-r from-purple-500/20 to-pink-500/20"
                        : "text-white/60"
                    }`}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        </nav>
      </motion.div>
    </header>
  );
}
