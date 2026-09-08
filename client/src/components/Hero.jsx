import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center text-center px-6">
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-5xl md:text-7xl font-bold glow-text"
      >
        Hi, I'm <span className="text-glow-violet">Mahima</span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="mt-4 text-lg text-gray-300 max-w-xl"
      >
        Full-stack developer building dreamy, dynamic web experiences ✨
      </motion.p>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="flex gap-4 mt-8"
      >
        <a
          href="https://github.com/m21ahima"
          target="_blank"
          rel="noreferrer"
          className="glass px-6 py-3 rounded-full text-sm hover:border-glow-violet transition-colors"
        >
          GitHub
        </a>
        <a
          href="#projects"
          className="glass px-6 py-3 rounded-full text-sm hover:border-glow-blue transition-colors"
        >
          View my work ↓
        </a>
      </motion.div>
    </section>
  );
}