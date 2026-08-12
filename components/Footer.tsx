import { Mail } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#0b0e14] py-12 text-[#e6e8ec] border-t border-[#1f2430]">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex flex-col justify-between gap-8 md:flex-row">
          <div>
            <h2 className="text-xl font-bold">
              EZEKIEL UDOE
            </h2>

            <p className="mt-2 text-[#d4af37]">
              Backend Developer
            </p>

            <p className="mt-4 max-w-sm leading-7 text-[#94a3b8]">
              Building secure, scalable and maintainable backend
              systems.
            </p>
          </div>

          <div className="flex items-start gap-5">
            <a
              href="https://github.com/kiel997"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#94a3b8] transition hover:text-[#d4af37]"
            >
              <FaGithub size={22} />
            </a>

            <a
              href="https://www.linkedin.com/in/ezekiel-udoe-b03565354/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#94a3b8] transition hover:text-[#d4af37]"
            >
              <FaLinkedin size={20} />
            </a>

            <a
              href="mailto:ezekieludoe3@gmail.com"
              className="text-[#94a3b8] transition hover:text-[#d4af37]"
            >
              <Mail />
            </a>
          </div>
        </div>

        <div className="mt-10 border-t border-[#1f2430] pt-6 text-sm text-[#94a3b8]">
          © 2026 Ezekiel Udoe. All rights reserved.
        </div>
      </div>
    </footer>
  );
}