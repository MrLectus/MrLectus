"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import {
  SVGTypeScript,
  SVGNext,
  SVGTailwind,
  SVGReact,
  SVGNode,
} from "@/components/icons";

const skills = [
  { icon: SVGTypeScript, name: "TypeScript" },
  { icon: SVGReact, name: "React" },
  { icon: SVGNext, name: "Next.js" },
  { icon: SVGNode, name: "Node.js" },
  { icon: SVGTailwind, name: "Tailwind" },
];

const About = () => {
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
              About Me
            </h1>
            <p className="text-base sm:text-lg text-zinc-400 px-4 sm:px-0">
              Passionate about crafting beautiful and functional web experiences
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 sm:gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="px-4 sm:px-0"
            >
              <div className="relative max-w-sm mx-auto">
                <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl blur opacity-25" />
                <div className="relative aspect-square rounded-2xl overflow-hidden">
                  <Image
                    src="/id.jpg"
                    alt="Profile"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="space-y-6 px-4 sm:px-0"
            >
              <div className="glass rounded-2xl p-4 sm:p-6 space-y-3 sm:space-y-4">
                <h2 className="text-xl sm:text-2xl font-bold gradient-text">
                  Background
                </h2>
                <p className="text-sm sm:text-base text-zinc-400">
                  I'm a full-stack developer with a passion for building modern
                  web applications. I specialize in React, Next.js, and Node.js,
                  creating responsive and performant solutions.
                </p>
              </div>

              <div className="glass rounded-2xl p-4 sm:p-6">
                <h2 className="text-xl sm:text-2xl font-bold gradient-text mb-4">
                  Skills
                </h2>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4">
                  {skills.map((skill) => (
                    <div
                      key={skill.name}
                      className="flex flex-col items-center gap-2 p-2 sm:p-3 rounded-xl hover:bg-white/5 transition-colors"
                    >
                      <skill.icon className="w-6 h-6 sm:w-8 sm:h-8" />
                      <span className="text-xs sm:text-sm text-zinc-400">
                        {skill.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
