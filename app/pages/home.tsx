"use client";
import { motion } from "framer-motion";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Link from "next/link";
import { SVGGitHub, SVGLinkedin } from "@/components/icons";
import { TechStack } from "@/components/tech-stack";

const HomePage = () => {
  return (
    <section id="home" className="mt-24 p-10 relative overflow-hidden">
      <div className="hero-gradient absolute inset-0 z-0" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="relative z-10"
      >
        <div className="flex flex-col items-center gap-8 max-w-4xl mx-auto">
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <Avatar className="w-32 h-32 ring-4 ring-primary/10">
              <AvatarImage src="/id.jpg" />
              <AvatarFallback>AJ</AvatarFallback>
            </Avatar>
          </motion.div>

          <div className="text-center space-y-4">
            <motion.h1
              className="text-6xl font-black gradient-bg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              Software Developer 👋🏿
            </motion.h1>

            <motion.p
              className="text-xl text-muted-foreground max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              Hi, I am a Software developer with experience in building and
              maintaining responsive, user friendly websites and applications.
            </motion.p>

            <motion.div
              className="flex justify-center gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <Link
                href="https://www.linkedin.com/in/abdulwaheed-j-64561494"
                target="_blank"
                className="transform hover:scale-110 transition-transform"
              >
                <SVGLinkedin />
              </Link>
              <Link
                href="https://www.github.com/mrlectus"
                target="_blank"
                className="transform hover:scale-110 transition-transform"
              >
                <SVGGitHub />
              </Link>
            </motion.div>
          </div>

          <TechStack />
        </div>
      </motion.div>
    </section>
  );
};

export default HomePage;
