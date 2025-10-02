"use client";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-20">
      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="text-5xl font-extrabold"
      >
        Hi, I’m <span className="text-blue-600">Zain Ul Abdin</span>
      </motion.h1>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.7 }}
        className="mt-6 text-lg text-gray-600 max-w-2xl"
      >
        I design and ship production ML systems — Computer Vision, NLP and Generative AI.
      </motion.p>
      <div className="mt-8 flex gap-4">
        <a href="/contact" className="px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold shadow hover:bg-blue-700">Hire Me</a>
        <a href="/projects" className="px-6 py-3 border border-gray-300 rounded-lg font-semibold text-gray-700 hover:border-blue-600 hover:text-blue-600">View Work</a>
      </div>
    </section>
  );
}
