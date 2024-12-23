"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { SVGGitHub } from "@/components/icons";
import { projects } from "@/app/store/data";

interface Project {
  title: string;
  description: string;
  image: string;
  github: string;
  demo?: string;
  tech: string[];
}

const Projects = () => {
  return (
    <section className="relative min-h-screen pt-16 sm:pt-24 md:pt-32 overflow-hidden bg-[#030303] animated-gradient">
      {/* Gradient Orbs */}
      <div className="absolute top-20 sm:top-40 -left-20 sm:-left-40 w-60 sm:w-80 h-60 sm:h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob" />
      <div className="absolute top-20 sm:top-40 -right-20 sm:-right-40 w-60 sm:w-80 h-60 sm:h-80 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-2000" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-8 sm:mb-16"
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold gradient-text mb-4 sm:mb-6">
              My Projects
            </h1>
            <p className="text-base sm:text-lg text-zinc-400 px-4 sm:px-0">
              A collection of my recent work and side projects
            </p>
          </motion.div>

          <div className="grid gap-4 sm:gap-8 md:grid-cols-2 lg:grid-cols-3 px-4 sm:px-0">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="group relative">
                  <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl blur opacity-25 transition-opacity group-hover:opacity-50" />
                  <div className="relative glass rounded-2xl overflow-hidden">
                    <div className="aspect-video relative">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                        <div className="flex gap-3 sm:gap-4">
                          <Link
                            href={project.github}
                            target="_blank"
                            className="p-2 sm:p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
                          >
                            <SVGGitHub className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                          </Link>
                          {project.demo && (
                            <Link
                              href={project.demo}
                              target="_blank"
                              className="p-2 sm:p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
                            >
                              <span className="text-sm sm:text-base text-white">
                                Demo
                              </span>
                            </Link>
                          )}
                        </div>
                      </div>
                    </div>
                    <div className="p-4 sm:p-6">
                      <h3 className="text-lg sm:text-xl font-bold gradient-text mb-2 sm:mb-3">
                        {project.title}
                      </h3>
                      <p className="text-sm sm:text-base text-zinc-400 mb-3 sm:mb-4">
                        {project.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {project.tech.map((tech) => (
                          <span
                            key={tech}
                            className="px-2 sm:px-3 py-1 text-xs sm:text-sm rounded-full bg-white/5 text-zinc-400"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
