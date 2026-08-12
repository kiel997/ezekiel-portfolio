"use client";

import { useState } from "react";
import Link from "next/link";
import { Download, Menu, X } from "lucide-react";

const links = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
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
        <div className="rounded-2xl border border-[#1f2430] bg-[#0b0e14]/90 px-5 py-3 shadow-lg shadow-black/20 backdrop-blur-xl">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link
              href="#home"
              className="font-[family-name:var(--font-space-grotesk)] text-xl font-bold tracking-tight text-[#e6e8ec]"
            >
              EZEKIEL EZEKIEL UDOE
              <span className="text-[#d4af37]">.</span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden items-center gap-7 md:flex">
              {links.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-sm font-medium text-[#94a3b8] transition-colors duration-200 hover:text-[#d4af37]"
                >
                  {link.name}
                </Link>
              ))}

              <Link
                href="/cv/Ezekiel_Udoe_CV.pdf"
                download
                className="inline-flex items-center gap-2 rounded-xl border border-[#d4af37] px-4 py-2.5 text-sm font-semibold text-[#d4af37] transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#d4af37] hover:text-[#0b0e14]"
              >
                <Download size={16} />
                Download CV
              </Link>
            </nav>

            {/* Mobile Button */}
            <button
              type="button"
              onClick={() => setOpen(!open)}
              className="rounded-xl border border-[#1f2430] p-2 text-[#e6e8ec] transition hover:border-[#d4af37] hover:text-[#d4af37] md:hidden"
              aria-label="Toggle navigation"
              aria-expanded={open}
            >
              {open ? <X size={21} /> : <Menu size={21} />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {open && (
            <div className="border-t border-[#1f2430] pt-4 md:hidden">
              <nav className="flex flex-col gap-2">
                {links.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="rounded-xl px-4 py-3 text-sm font-medium text-[#94a3b8] transition hover:bg-[#161b26] hover:text-[#d4af37]"
                  >
                    {link.name}
                  </Link>
                ))}

                <Link
                  href="/cv/Ezekiel_Udoe_CV.pdf"
                  download
                  onClick={() => setOpen(false)}
                  className="mt-2 inline-flex items-center justify-center gap-2 rounded-xl bg-[#d4af37] px-4 py-3 text-sm font-semibold text-[#0b0e14] transition hover:opacity-90"
                >
                  <Download size={16} />
                  Download CV
                </Link>
              </nav>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}