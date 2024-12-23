"use client";

import { motion } from "framer-motion";
import { SVGMail, SVGGitHub } from "@/components/icons";
import Link from "next/link";

const contactLinks = [
  {
    name: "Email",
    icon: SVGMail,
    href: "mailto:waheedjimoh444@gmail.com",
    color: "from-blue-500 to-cyan-500",
  },
  {
    name: "GitHub",
    icon: SVGGitHub,
    href: "https://github.com/VesperQuartz",
    color: "from-purple-500 to-pink-500",
  },
];

const Contact = () => {
  return (
    <section className="relative min-h-screen pt-16 sm:pt-24 md:pt-32 overflow-hidden bg-[#030303] animated-gradient">
      {/* Gradient Orbs */}
      <div className="absolute top-20 sm:top-40 -left-20 sm:-left-40 w-60 sm:w-80 h-60 sm:h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob" />
      <div className="absolute top-20 sm:top-40 -right-20 sm:-right-40 w-60 sm:w-80 h-60 sm:h-80 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-2000" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-8 sm:mb-16"
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold gradient-text mb-4 sm:mb-6">
              Get in Touch
            </h1>
            <p className="text-base sm:text-lg text-zinc-400 px-4 sm:px-0">
              Let's collaborate on your next project
            </p>
          </motion.div>

          <div className="grid gap-4 sm:gap-8 md:grid-cols-2 px-4 sm:px-0">
            {contactLinks.map((link, index) => (
              <motion.div
                key={link.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link href={link.href} target="_blank" className="block">
                  <div className="group relative">
                    <div
                      className={`absolute inset-0 bg-gradient-to-r ${link.color} rounded-2xl blur opacity-25 transition-opacity group-hover:opacity-50`}
                    />
                    <div className="relative glass rounded-2xl p-4 sm:p-6">
                      <div className="flex items-center gap-3 sm:gap-4">
                        <div
                          className={`p-2 sm:p-3 rounded-xl bg-gradient-to-r ${link.color}`}
                        >
                          <link.icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                        </div>
                        <div>
                          <h3 className="text-lg sm:text-xl font-bold text-white">
                            {link.name}
                          </h3>
                          <p className="text-xs sm:text-sm text-zinc-400">
                            Click to{" "}
                            {link.name === "Email"
                              ? "send an email"
                              : "visit profile"}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-8 sm:mt-16 px-4 sm:px-0"
          >
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl blur opacity-25" />
              <div className="relative glass rounded-2xl p-4 sm:p-8">
                <h2 className="text-xl sm:text-2xl font-bold gradient-text mb-3 sm:mb-4">
                  Let's Build Something Amazing
                </h2>
                <p className="text-sm sm:text-base text-zinc-400">
                  I'm always open to discussing new projects, creative ideas, or
                  opportunities to be part of your visions. Feel free to reach
                  out through any of the channels above.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
