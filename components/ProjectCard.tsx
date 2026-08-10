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
    <article className="group rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl">
      <div className="flex items-start justify-between">
        <span className="text-sm font-bold text-blue-600">
          PROJECT {project.number}
        </span>

        <Link
          href={`/projects/${project.slug}`}
          className="rounded-full border border-slate-200 p-2 transition group-hover:border-blue-500 group-hover:text-blue-600"
        >
          <ArrowUpRight size={18} />
        </Link>
      </div>

      <h3 className="mt-5 text-2xl font-bold text-slate-900">
        {project.title}
      </h3>

      <p className="mt-4 leading-7 text-slate-600">
        {project.description}
      </p>

      <div className="mt-6">
        <p className="text-sm font-semibold text-slate-900">
          Key Features
        </p>

        <ul className="mt-3 grid gap-2 sm:grid-cols-2">
          {project.features.map((feature) => (
            <li
              key={feature}
              className="text-sm text-slate-600"
            >
              ✓ {feature}
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-7 flex flex-wrap gap-2">
        {project.technologies.map((technology) => (
          <span
            key={technology}
            className="rounded-lg bg-blue-50 px-3 py-1.5 text-xs font-semibold text-blue-700"
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
            className="flex items-center gap-2 rounded-xl border border-slate-200 px-4 py-2 text-sm font-semibold"
          >
            <FaGithub size={16} />
            GitHub
          </a>
        )}

        <Link
          href={`/projects/${project.slug}`}
          className="rounded-xl bg-slate-900 px-4 py-2 text-sm font-semibold text-white"
        >
          View Details
        </Link>
      </div>
    </article>
  );
}