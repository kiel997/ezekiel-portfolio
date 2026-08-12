import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { FaGithub } from "react-icons/fa";

type Project = {
  slug: string;
  number: string;
  title: string;
  description: string;
  features: string[];
  technologies: string[];
  github: string;
  live: string;
};

export default function ProjectCard({
  project,
}: {
  project: Project;
}) {
  return (
    <article className="group rounded-3xl border border-[#1f2430] bg-[#12161f] p-7 shadow-sm transition duration-300 hover:-translate-y-2 hover:border-[#d4af37]/40 hover:shadow-xl hover:shadow-black/20">
      <div className="flex items-start justify-between">
        <span className="text-sm font-bold text-[#d4af37]">
          PROJECT {project.number}
        </span>

        <Link
          href={`/projects/${project.slug}`}
          className="rounded-full border border-[#1f2430] p-2 transition group-hover:border-[#d4af37] group-hover:text-[#d4af37]"
        >
          <ArrowUpRight size={18} />
        </Link>
      </div>

      <h3 className="mt-5 text-2xl font-bold text-[#e6e8ec]">
        {project.title}
      </h3>

      <p className="mt-4 leading-7 text-[#94a3b8]">
        {project.description}
      </p>

      <div className="mt-6">
        <p className="text-sm font-semibold text-[#e6e8ec]">
          Key Features
        </p>

        <ul className="mt-3 grid gap-2 sm:grid-cols-2">
          {project.features.map((feature) => (
            <li
              key={feature}
              className="text-sm text-[#94a3b8]"
            >
              <span className="text-[#d4af37]">✓</span> {feature}
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-7 flex flex-wrap gap-2">
        {project.technologies.map((technology) => (
          <span
            key={technology}
            className="rounded-lg bg-[#d4af37]/10 px-3 py-1.5 text-xs font-semibold text-[#d4af37]"
          >
            {technology}
          </span>
        ))}
      </div>

      <div className="mt-7 flex gap-3">
        {project.github && (
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-xl border border-[#1f2430] px-4 py-2 text-sm font-semibold text-[#e6e8ec] transition hover:border-[#d4af37] hover:text-[#d4af37]"
          >
            <FaGithub size={16} />
            GitHub
          </a>
        )}

        <Link
          href={`/projects/${project.slug}`}
          className="rounded-xl bg-[#d4af37] px-4 py-2 text-sm font-semibold text-[#0b0e14] transition hover:opacity-90"
        >
          View Details
        </Link>
      </div>
    </article>
  );
}