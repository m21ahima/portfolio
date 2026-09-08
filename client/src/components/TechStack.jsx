import { motion } from "framer-motion";
import {
  SiReact, SiJavascript, SiTailwindcss, SiHtml5, SiCss,
  SiNodedotjs, SiExpress, SiMongodb, SiPython, SiSolidity,
  SiVercel, SiGit, SiGithub, SiDocker,
} from "react-icons/si";

const stack = {
  "Frontend": [
    { name: "React", icon: <SiReact className="text-cyan-400" /> },
    { name: "JavaScript", icon: <SiJavascript className="text-yellow-400" /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss className="text-sky-400" /> },
    { name: "HTML5", icon: <SiHtml5 className="text-orange-500" /> },
    { name: "CSS3", icon: <SiCss className="text-blue-500" /> },
  ],
  "Backend & Database": [
    { name: "Node.js", icon: <SiNodedotjs className="text-green-500" /> },
    { name: "Express.js", icon: <SiExpress className="text-gray-300" /> },
    { name: "MongoDB", icon: <SiMongodb className="text-green-400" /> },
    { name: "Python", icon: <SiPython className="text-yellow-300" /> },
  ],
  "Other": [
    { name: "Solidity", icon: <SiSolidity className="text-gray-300" /> },
    { name: "Docker", icon: <SiDocker className="text-blue-400" /> },
    { name: "Git", icon: <SiGit className="text-red-500" /> },
    { name: "GitHub", icon: <SiGithub className="text-gray-200" /> },
    { name: "Vercel", icon: <SiVercel className="text-white" /> },
  ],
};

export default function TechStack() {
  return (
    <section className="max-w-5xl mx-auto px-6 py-20">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold glow-text mb-2"
      >
        Tech Stack
      </motion.h2>
      <p className="text-gray-400 mb-10">Tools and languages I work with</p>

      {Object.entries(stack).map(([category, items]) => (
        <div key={category} className="mb-10">
          <h3 className="text-glow-blue text-sm uppercase tracking-widest mb-4">
            {category}
          </h3>
          <div className="flex flex-wrap gap-3">
            {items.map((item) => (
              <motion.div
                key={item.name}
                whileHover={{ scale: 1.08, borderColor: "#8a5cff" }}
                className="glass px-5 py-3 rounded-xl flex items-center gap-2 text-sm border border-white/10"
              >
                <span className="text-xl">{item.icon}</span>
                {item.name}
              </motion.div>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
}