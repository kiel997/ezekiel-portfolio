"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Mail,
  Download,
} from "lucide-react";

import { FaGithub, FaLinkedin } from "react-icons/fa";

import Terminal from "./Terminal";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden bg-slate-50 pt-32"
    >
      {/* Background decoration */}
      <div className="pointer-events-none absolute left-[-120px] top-32 h-72 w-72 rounded-full bg-blue-500/10 blur-3xl" />

      <div className="pointer-events-none absolute right-[-120px] top-48 h-80 w-80 rounded-full bg-cyan-400/10 blur-3xl" />

      <div className="pointer-events-none absolute left-1/2 top-1/3 h-64 w-64 -translate-x-1/2 rounded-full bg-blue-400/5 blur-3xl" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-16 px-6 pb-20 lg:grid-cols-[1.05fr_0.95fr] lg:px-8 lg:pb-28">
        {/* LEFT SIDE */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-700">
            <span className="h-2 w-2 rounded-full bg-blue-600" />
            BACKEND DEVELOPER
          </div>

          {/* Heading */}
          <h1 className="mt-7 max-w-3xl font-[family-name:var(--font-space-grotesk)] text-5xl font-bold leading-[1.05] tracking-tight text-slate-950 sm:text-6xl lg:text-7xl">
            Building secure,
            <span className="block bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-500 bg-clip-text text-transparent">
              scalable backend
            </span>
            systems.
          </h1>

          {/* Description */}
          <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-600 sm:text-xl">
            I’m Ezekiel Udoe, a backend developer passionate about building
            clean, secure, and maintainable applications using modern backend
            technologies.
          </p>

          {/* Buttons */}
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Link
              href="#projects"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-6 py-3.5 font-semibold text-white shadow-lg shadow-blue-600/20 transition-all duration-200 hover:-translate-y-1 hover:bg-blue-700"
            >
              View Projects
              <ArrowRight size={18} />
            </Link>

            <a
              href="/cv/Ezekiel_Udoe_CV.pdf"
              download
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-300 bg-white px-6 py-3.5 font-semibold text-slate-800 transition-all duration-200 hover:-translate-y-1 hover:border-blue-400 hover:text-blue-600"
            >
              Download CV
              <Download size={18} />
            </a>
          </div>

          {/* Social links */}
          <div className="mt-9 flex items-center gap-3">
            <span className="mr-2 text-sm font-medium text-slate-500">
              Connect
            </span>

            <a
              href="https://github.com/kiel997"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="rounded-xl border border-slate-200 bg-white p-2.5 text-slate-500 transition-all hover:-translate-y-1 hover:border-blue-300 hover:text-blue-600"
            >
              <FaGithub size={19} />
            </a>

            <a
              href="https://www.linkedin.com/in/ezekiel-udoe-b03565354/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="rounded-xl border border-slate-200 bg-white p-2.5 text-slate-500 transition-all hover:-translate-y-1 hover:border-blue-300 hover:text-blue-600"
            >
              <FaLinkedin size={19} />
            </a>

            <a
              href="mailto:ezekieludoe3@gmail.com"
              aria-label="Email"
              className="rounded-xl border border-slate-200 bg-white p-2.5 text-slate-500 transition-all hover:-translate-y-1 hover:border-blue-300 hover:text-blue-600"
            >
              <Mail size={19} />
            </a>
          </div>
        </motion.div>

        {/* RIGHT SIDE */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="relative"
        >
          {/* Photo */}
          <div className="relative mx-auto max-w-md">
            {/* Decorative ring */}
            <div className="absolute -inset-4 rounded-[2.5rem] border border-blue-200/60" />

            <div className="relative overflow-hidden rounded-[2rem] border border-white bg-white p-2 shadow-2xl shadow-slate-900/10">
              <div className="relative aspect-[4/5] overflow-hidden rounded-[1.6rem] bg-slate-200">
                <Image
                  src="/images/ezekiel-udoe.jpg"
                  alt="Ezekiel Udoe - Backend Developer"
                  fill
                  priority
                  sizes="(max-width: 768px) 90vw, 420px"
                  className="object-cover"
                />

                {/* Image overlay */}
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950/60 to-transparent p-6">
                  <p className="text-sm font-medium text-white/80">
                    Backend Developer
                  </p>

                  <p className="mt-1 text-xl font-bold text-white">
                    Ezekiel Udoe
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Terminal */}
          <div className="relative mx-auto mt-8 max-w-md">
            <Terminal />
          </div>
        </motion.div>
      </div>

      {/* Bottom fade */}
      <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-white to-transparent" />
    </section>
  );
}