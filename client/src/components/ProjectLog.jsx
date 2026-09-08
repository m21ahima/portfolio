import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { projects } from "../data/projects";

export default function ProjectLog() {
  const [active, setActive] = useState(projects[0]);

  return (
    <section id="projects" className="max-w-6xl mx-auto px-6 py-20">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold glow-text mb-2"
      >
        Projects
      </motion.h2>
      <p className="text-gray-400 mb-10">Things I've built</p>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Left: index list */}
        <div className="glass rounded-2xl p-4 h-fit">
          <div className="flex justify-between text-xs text-gray-400 px-2 pb-3 border-b border-white/10">
            <span>[DIRECTORY_INDEX]</span>
            <span className="text-glow-blue">● {projects.length} PROJECTS</span>
          </div>
          {projects.map((p, i) => (
            <button
              key={p.id}
              onMouseEnter={() => setActive(p)}
              onClick={() => setActive(p)}
              className={`w-full flex justify-between items-center px-2 py-3 text-left text-sm border-b border-white/5 transition-colors ${
                active.id === p.id ? "text-glow-violet" : "text-gray-300"
              }`}
            >
              <span>
                LOG.{String(i + 1).padStart(2, "0")} // {p.title.toUpperCase()}
              </span>
              <span className="text-xs uppercase tracking-wide text-gray-500">
                {p.status}
              </span>
            </button>
          ))}
        </div>

        {/* Right: detail panel */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active.id}
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -10 }}
            transition={{ duration: 0.25 }}
            className="glass rounded-2xl p-6 flex flex-col justify-between"
          >
            <div>
              <p className="text-glow-blue text-xs uppercase tracking-widest mb-1">
                {active.subtitle}
              </p>
              <h3 className="text-2xl font-bold glow-text mb-3">
                {active.title}
              </h3>
              <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                {active.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {active.techStack.map((t) => (
                  <span
                    key={t}
                    className="text-xs px-3 py-1 rounded-full bg-glow-blue/10 border border-glow-blue/30 font-mono"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
            <div className="flex gap-4 mt-6 text-sm">
              <a
                href={active.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="underline hover:text-glow-violet transition-colors"
              >
                View Code →
              </a>
              {active.liveUrl && (
                <a
                  href={active.liveUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="underline hover:text-glow-blue transition-colors"
                >
                  Live Demo →
                </a>
              )}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}