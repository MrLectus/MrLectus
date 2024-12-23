import { motion } from "framer-motion";
import {
  SVGTailwind,
  SVGTypeScript,
  SVGNext,
  SVGNode,
  SVGReact,
} from "@/components/icons";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export const TechStack = () => {
  return (
    <div className="w-full max-w-2xl mx-auto">
      <motion.h4
        className="text-2xl font-bold text-center mb-8 gradient-bg"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
      >
        Tech Stack
      </motion.h4>

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="grid grid-cols-2 md:grid-cols-4 gap-8"
      >
        {[SVGTailwind, SVGTypeScript, SVGNext, SVGNode, SVGReact].map(
          (Icon, index) => (
            <motion.div
              key={index}
              variants={item}
              className="flex justify-center items-center p-4 bg-white/50 rounded-xl hover:shadow-lg transition-shadow"
            >
              <Icon />
            </motion.div>
          ),
        )}
      </motion.div>
    </div>
  );
};
