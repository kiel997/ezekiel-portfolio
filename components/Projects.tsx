import ProjectCard from "./ProjectCard";
import { projects } from "@/data/projects";

export default function Projects() {
  return (
    <section id="projects" className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <p className="font-semibold text-blue-600">
          FEATURED PROJECTS
        </p>

        <h2 className="mt-3 text-4xl font-bold text-slate-900">
          Backend systems I’ve built
        </h2>

        <p className="mt-4 max-w-2xl text-lg text-slate-600">
          A selection of backend systems I’ve designed and developed.
        </p>

        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          {projects.map((project) => (
            <ProjectCard
              key={project.slug}
              project={project}
            />
          ))}
        </div>
      </div>
    </section>
  );
}