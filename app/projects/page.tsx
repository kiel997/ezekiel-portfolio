import Link from "next/link";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/data/projects";

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-slate-50 px-6 py-32">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-3xl">
          <Link
            href="/"
            className="text-sm font-semibold text-blue-600 transition hover:text-blue-700"
          >
            ← Back to Home
          </Link>

          <p className="mt-10 font-semibold text-blue-600">
            PROJECTS
          </p>

          <h1 className="mt-3 text-4xl font-bold text-slate-900 sm:text-5xl">
            Featured Projects
          </h1>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            A selection of backend systems I&apos;ve designed and developed,
            focusing on security, scalability, maintainability, and clean API
            architecture.
          </p>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          {projects.map((project) => (
            <ProjectCard
              key={project.slug}
              project={project}
            />
          ))}
        </div>
      </div>
    </main>
  );
}