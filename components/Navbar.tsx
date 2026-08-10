"use client";

import { useState } from "react";
import Link from "next/link";
import { Download, Menu, X } from "lucide-react";

const links = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Education", href: "#education" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="mx-auto max-w-7xl px-4 pt-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl border border-slate-200/80 bg-white/90 px-5 py-3 shadow-lg shadow-slate-900/5 backdrop-blur-xl">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link
              href="#home"
              className="font-[family-name:var(--font-space-grotesk)] text-xl font-bold tracking-tight text-slate-900"
            >
              EZEKIEL
              <span className="text-blue-600">.</span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden items-center gap-7 md:flex">
              {links.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-sm font-medium text-slate-600 transition-colors duration-200 hover:text-blue-600"
                >
                  {link.name}
                </Link>
              ))}

              <a
                href="/cv/Ezekiel_Udoe_CV.pdf"
                download
                className="inline-flex items-center gap-2 rounded-xl bg-slate-900 px-4 py-2.5 text-sm font-semibold text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-blue-600"
              >
                <Download size={16} />
                Download CV
              </a>
            </nav>

            {/* Mobile Button */}
            <button
              type="button"
              onClick={() => setOpen(!open)}
              className="rounded-xl border border-slate-200 p-2 text-slate-700 transition hover:border-blue-300 hover:text-blue-600 md:hidden"
              aria-label="Toggle navigation"
              aria-expanded={open}
            >
              {open ? <X size={21} /> : <Menu size={21} />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {open && (
            <div className="border-t border-slate-200 pt-4 md:hidden">
              <nav className="flex flex-col gap-2">
                {links.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="rounded-xl px-4 py-3 text-sm font-medium text-slate-700 transition hover:bg-blue-50 hover:text-blue-600"
                  >
                    {link.name}
                  </Link>
                ))}

                <a
                  href="/cv/Ezekiel_Udoe_CV.pdf"
                  download
                  onClick={() => setOpen(false)}
                  className="mt-2 inline-flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-4 py-3 text-sm font-semibold text-white transition hover:bg-blue-700"
                >
                  <Download size={16} />
                  Download CV
                </a>
              </nav>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}