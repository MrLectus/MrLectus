"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { SVGGitHub, SVGLinkedin } from "@/components/icons";

const socialLinks = [
  {
    name: "GitHub",
    icon: SVGGitHub,
    href: "https://github.com/VesperQuartz",
  },
  {
    name: "LinkedIn",
    icon: SVGLinkedin,
    href: "https://linkedin.com/in/abdulwaheed-j-64561494",
  },
];

export default function Home() {
  return (
    <section className="relative min-h-screen pt-16 sm:pt-24 md:pt-32 overflow-hidden bg-[#030303] animated-gradient">
      {/* Gradient Orbs */}
      <div className="absolute top-20 sm:top-40 -left-20 sm:-left-40 w-60 sm:w-80 h-60 sm:h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob" />
      <div className="absolute top-20 sm:top-40 -right-20 sm:-right-40 w-60 sm:w-80 h-60 sm:h-80 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-2000" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="px-4 sm:px-0"
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 sm:mb-6">
              <span className="gradient-text">Hello, I'm</span>
              <br className="hidden sm:block" />
              <span className="text-white block sm:inline mt-2 sm:mt-0 sm:ml-2">
                Jimoh, Abdulwaheed
              </span>
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-zinc-400 mb-8 sm:mb-12">
              Full Stack Developer specializing in modern web technologies
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-8 sm:mb-16 px-4 sm:px-0"
          >
            <Link
              href="/projects"
              className="glass px-6 sm:px-8 py-3 sm:py-4 rounded-full hover:bg-white/10 transition-colors"
            >
              <span className="gradient-text font-medium text-sm sm:text-base">
                View My Work
              </span>
            </Link>
            <Link
              href="/contact"
              className="glass px-6 sm:px-8 py-3 sm:py-4 rounded-full hover:bg-white/10 transition-colors"
            >
              <span className="gradient-text font-medium text-sm sm:text-base">
                Get in Touch
              </span>
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex justify-center gap-4"
          >
            {socialLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                target="_blank"
                className="glass p-3 sm:p-4 rounded-full hover:bg-white/10 transition-colors"
              >
                <link.icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
              </Link>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
