import Link from "next/link";
import { notFound } from "next/navigation";
import { projects } from "@/data/projects";

type ProjectPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function ProjectPage({
  params,
}: ProjectPageProps) {
  const { slug } = await params;

  const project = projects.find(
    (item) => item.slug === slug
  );

  if (!project) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-slate-50 px-6 py-32">
      <div className="mx-auto max-w-5xl">
        <Link
          href="/projects"
          className="text-sm font-semibold text-blue-600 transition hover:text-blue-700"
        >
          ← Back to Projects
        </Link>

        <div className="mt-10">
          <p className="font-semibold text-blue-600">
            PROJECT {project.number}
          </p>

          <h1 className="mt-3 text-4xl font-bold text-slate-900 sm:text-5xl">
            {project.title}
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600">
            {project.description}
          </p>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-3">
          <section className="rounded-2xl border border-slate-200 bg-white p-7 lg:col-span-2">
            <h2 className="text-2xl font-bold text-slate-900">
              Project Overview
            </h2>

            <p className="mt-4 leading-8 text-slate-600">
              This project demonstrates the design and implementation of a
              structured backend system focused on secure APIs, data
              management, validation, and maintainable application architecture.
            </p>
          </section>

          <section className="rounded-2xl border border-slate-200 bg-white p-7">
            <h2 className="text-xl font-bold text-slate-900">
              Technologies
            </h2>

            <div className="mt-5 flex flex-wrap gap-2">
              {project.technologies.map((technology) => (
                <span
                  key={technology}
                  className="rounded-lg bg-blue-50 px-3 py-2 text-sm font-semibold text-blue-700"
                >
                  {technology}
                </span>
              ))}
            </div>
          </section>
        </div>

        <section className="mt-8 rounded-2xl border border-slate-200 bg-white p-7">
          <h2 className="text-2xl font-bold text-slate-900">
            Key Features
          </h2>

          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {project.features.map((feature) => (
              <div
                key={feature}
                className="rounded-xl bg-slate-50 p-4 text-slate-700"
              >
                <span className="mr-2 font-bold text-blue-600">
                  ✓
                </span>
                {feature}
              </div>
            ))}
          </div>
        </section>

        <section className="mt-8 rounded-2xl border border-slate-200 bg-white p-7">
          <h2 className="text-2xl font-bold text-slate-900">
            Architecture
          </h2>

          <div className="mt-6 overflow-x-auto rounded-xl bg-slate-950 p-6">
            <pre className="font-mono text-sm leading-8 text-cyan-400">
{`Client
   ↓
REST API
   ↓
NestJS
   ↓
TypeORM
   ↓
PostgreSQL`}
            </pre>
          </div>
        </section>

        <div className="mt-10 flex flex-wrap gap-4">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl bg-slate-900 px-6 py-3 font-semibold text-white transition hover:bg-slate-800"
            >
              View on GitHub
            </a>
          )}

          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700"
            >
              View Live Application
            </a>
          )}
        </div>
      </div>
    </main>
  );
}
