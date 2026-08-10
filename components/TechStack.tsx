"use client";

import { motion } from "framer-motion";
import { technologies } from "@/data/technologies";

export default function TechStack() {
  return (
    <section className="border-y border-slate-200 bg-white py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center">
          <p className="font-semibold text-blue-600">TECHNOLOGY STACK</p>

          <h2 className="mt-3 text-3xl font-bold text-slate-900 sm:text-4xl">
            Tools I use to build backend systems
          </h2>
        </div>

        <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
          {technologies.map((technology, index) => (
            <motion.div
              key={technology.name}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.04 }}
              whileHover={{ y: -5 }}
              className="group flex flex-col items-center justify-center rounded-2xl border border-slate-200 bg-slate-50 p-5 text-center transition hover:border-blue-200 hover:bg-blue-50 hover:shadow-md"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white font-bold text-blue-600 shadow-sm transition group-hover:bg-blue-600 group-hover:text-white">
                {technology.icon}
              </div>

              <span className="mt-3 text-sm font-semibold text-slate-700 transition group-hover:text-blue-600">
                {technology.name}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}