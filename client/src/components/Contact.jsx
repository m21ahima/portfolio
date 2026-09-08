import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section id="contact" className="max-w-3xl mx-auto px-6 py-20 text-center">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold glow-text mb-4"
      >
        Let's Connect
      </motion.h2>
      <p className="text-gray-400 mb-8">
        Open to internships, collaborations, and interesting conversations.
      </p>
      <div className="flex justify-center gap-4 flex-wrap">
        <a
          href="mailto:m21ahima.cjc@gmail.com"
          className="glass px-6 py-3 rounded-full text-sm hover:border-glow-violet transition-colors"
        >
          Email Me
        </a>
        <a
          href="https://github.com/m21ahima"
          target="_blank"
          rel="noreferrer"
          className="glass px-6 py-3 rounded-full text-sm hover:border-glow-blue transition-colors"
        >
          GitHub
        </a>
        <a
          href="https://www.linkedin.com/in/mahima-c-712b47318/"
          target="_blank"
          rel="noreferrer"
          className="glass px-6 py-3 rounded-full text-sm hover:border-glow-pink transition-colors"
        >
          LinkedIn
        </a>
      </div>
      <p className="text-gray-600 text-xs mt-16">
        Built with React, Tailwind CSS & Framer Motion ✨
      </p>
    </section>
  );
}