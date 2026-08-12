"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Mail, Download } from "lucide-react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import Terminal from "./Terminal";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-[#0b0e14] pt-32 sm:pt-36"
    >
      {/* Background decoration */}
      <div className="pointer-events-none absolute left-[-120px] top-20 h-72 w-72 rounded-full bg-[#d4af37]/10 blur-3xl" />
      <div className="pointer-events-none absolute right-[-100px] top-32 h-80 w-80 rounded-full bg-[#d4af37]/5 blur-3xl" />

      <div className="mx-auto grid max-w-7xl gap-14 px-6 pb-24 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:px-8 lg:pb-32">
        {/* LEFT SIDE */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-[#d4af37]/40 bg-[#d4af37]/10 px-4 py-2 text-sm font-semibold text-[#d4af37]">
            <span className="h-2 w-2 rounded-full bg-[#d4af37]" />
            Available for opportunities
          </div>

          <p className="mt-7 text-sm font-bold uppercase tracking-[0.2em] text-[#d4af37]">
            Backend Developer
          </p>

          <h1 className="mt-4 max-w-4xl font-[family-name:var(--font-space-grotesk)] text-5xl font-bold leading-[1.05] tracking-tight text-[#e6e8ec] sm:text-6xl lg:text-7xl">
            Building
            <span className="block text-[#d4af37]">
              secure & scalable
            </span>
            backend systems.
          </h1>

          <p className="mt-7 max-w-2xl text-lg leading-8 text-[#94a3b8]">
            I&apos;m Ezekiel Udoe, a backend developer passionate about
            building clean, secure, and maintainable applications using modern
            backend technologies.
          </p>

          <div className="mt-9 flex flex-wrap gap-4">
            <Link
              href="#projects"
              className="group inline-flex items-center gap-2 rounded-xl bg-[#d4af37] px-6 py-3.5 font-semibold text-[#0b0e14] shadow-lg shadow-[#d4af37]/20 transition duration-300 hover:-translate-y-1 hover:opacity-90"
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
              className="inline-flex items-center gap-2 rounded-xl border border-[#1f2430] bg-transparent px-6 py-3.5 font-semibold text-[#e6e8ec] transition duration-300 hover:-translate-y-1 hover:border-[#d4af37] hover:text-[#d4af37]"
            >
              <Download size={18} />
              Download CV
            </a>
          </div>

          <div className="mt-9 flex items-center gap-5">
            <span className="text-sm font-medium text-[#94a3b8]">
              Find me on
            </span>

            <a
              href="https://github.com/kiel997"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="text-[#94a3b8] transition duration-200 hover:text-[#d4af37]"
            >
              <FaGithub size={21} />
            </a>

            <a
              href="https://www.linkedin.com/in/ezekiel-udoe-b03565354/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-[#94a3b8] transition duration-200 hover:text-[#d4af37]"
            >
              <FaLinkedinIn size={21} />
            </a>

            <a
              href="mailto:ezekieludoe3@gmail.com"
              aria-label="Email"
              className="text-[#94a3b8] transition duration-200 hover:text-[#d4af37]"
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
          <><div className="relative mx-auto max-w-md">
              <div className="absolute -inset-4 rounded-[2rem] border border-[#1f2430]" />

              <div className="relative overflow-hidden rounded-[2rem] border border-[#1f2430] bg-[#12161f] p-2 shadow-2xl shadow-black/30">
                <div className="relative aspect-[4/5] overflow-hidden rounded-[1.6rem]">
                  <Image
                    src="/images/ezekiel-udoe.jpg"
                    alt="Ezekiel Udoe"
                    fill
                    priority
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 450px" />
                </div>
              </div>

              {/* Floating technology card */}
              <div className="absolute -bottom-7 -left-5 hidden rounded-2xl border border-[#1f2430] bg-[#161b26] p-4 shadow-xl sm:block">
                <p className="text-xs font-semibold uppercase tracking-wider text-[#94a3b8]">
                  Primary Stack
                </p>
                <p className="mt-2 font-[family-name:var(--font-space-grotesk)] font-bold text-[#e6e8ec]">
                  TypeScript · NestJS
                </p>
                <p className="mt-1 text-sm text-[#94a3b8]">
                  PostgreSQL · MongoDB
                </p>
              </div>
            </div><div className="mt-12">
                <Terminal />
              </div></>
        </motion.div>
      </div>
    </section>
  );
}