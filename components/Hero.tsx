"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Mail,
  Download,
} from "lucide-react";

import { FaGithub, FaLinkedinIn } from "react-icons/fa";

import Terminal from "./Terminal";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-white pt-32 sm:pt-36"
    >
      {/* Background decoration */}
      <div className="pointer-events-none absolute left-[-120px] top-20 h-72 w-72 rounded-full bg-blue-500/10 blur-3xl" />

      <div className="pointer-events-none absolute right-[-100px] top-32 h-80 w-80 rounded-full bg-cyan-400/10 blur-3xl" />

      <div className="mx-auto grid max-w-7xl gap-14 px-6 pb-24 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:px-8 lg:pb-32">
        {/* LEFT SIDE */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-700">
            <span className="h-2 w-2 rounded-full bg-cyan-500" />
            Available for opportunities
          </div>

          <p className="mt-7 text-sm font-bold uppercase tracking-[0.2em] text-blue-600">
            Backend Developer
          </p>

          <h1 className="mt-4 max-w-4xl font-[family-name:var(--font-space-grotesk)] text-5xl font-bold leading-[1.05] tracking-tight text-slate-950 sm:text-6xl lg:text-7xl">
            Building
            <span className="block bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
              secure & scalable
            </span>
            backend systems.
          </h1>

          <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-600">
            I&apos;m Ezekiel Udoe, a backend developer passionate about
            building clean, secure, and maintainable applications using modern
            backend technologies.
          </p>

          <div className="mt-9 flex flex-wrap gap-4">
            <Link
              href="#projects"
              className="group inline-flex items-center gap-2 rounded-xl bg-blue-600 px-6 py-3.5 font-semibold text-white shadow-lg shadow-blue-600/20 transition duration-300 hover:-translate-y-1 hover:bg-blue-700"
            >
              View Projects

              <ArrowRight
                size={18}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>

            <a
              href="/cv/Ezekiel_Udoe_CV.pdf"
              download
              className="inline-flex items-center gap-2 rounded-xl border border-slate-300 bg-white px-6 py-3.5 font-semibold text-slate-800 transition duration-300 hover:-translate-y-1 hover:border-blue-500 hover:text-blue-600"
            >
              <Download size={18} />
              Download CV
            </a>
          </div>

          <div className="mt-9 flex items-center gap-5">
            <span className="text-sm font-medium text-slate-400">
              Find me on
            </span>

            <a
              href="https://github.com/kiel997"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="text-slate-500 transition duration-200 hover:text-blue-600"
            >
              <FaGithub size={21} />
            </a>

            <a
              href="https://www.linkedin.com/in/ezekiel-udoe-b03565354/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-slate-500 transition duration-200 hover:text-blue-600"
            >
              <FaLinkedinIn size={21} />
            </a>

            <a
              href="mailto:ezekieludoe3@gmail.com"
              aria-label="Email"
              className="text-slate-500 transition duration-200 hover:text-blue-600"
            >
              <Mail size={21} />
            </a>
          </div>
        </motion.div>

        {/* RIGHT SIDE */}
        <motion.div
          initial={{ opacity: 0, x: 35 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="relative"
        >
          <div className="relative mx-auto max-w-md">
            {/* Decorative ring */}
            <div className="absolute -inset-4 rounded-[2rem] border border-blue-100" />

            <div className="relative overflow-hidden rounded-[2rem] border border-slate-200 bg-slate-100 p-2 shadow-2xl shadow-slate-900/10">
              <div className="relative aspect-[4/5] overflow-hidden rounded-[1.6rem]">
                <Image
                  src="/images/ezekiel-udoe.jpg"
                  alt="Ezekiel Udoe"
                  fill
                  priority
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 450px"
                />
              </div>
            </div>

            {/* Floating technology card */}
            <div className="absolute -bottom-7 -left-5 hidden rounded-2xl border border-slate-200 bg-white p-4 shadow-xl sm:block">
              <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                Primary Stack
              </p>

              <p className="mt-2 font-[family-name:var(--font-space-grotesk)] font-bold text-slate-900">
                TypeScript · NestJS
              </p>

              <p className="mt-1 text-sm text-slate-500">
                PostgreSQL · MongoDB
              </p>
            </div>
          </div>

          <div className="mt-12">
            <Terminal />
          </div>
        </motion.div>
      </div>
    </section>
  );
}