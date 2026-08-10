import { ArrowUpRight } from "lucide-react";
import { FaGithub } from "react-icons/fa";

export default function GithubSection() {
  return (
    <section className="bg-slate-950 py-24 text-white">
      <div className="mx-auto max-w-4xl px-6 text-center">
        <FaGithub className="mx-auto" size={45} />

        <h2 className="mt-6 text-4xl font-bold">
          Explore My Code
        </h2>

        <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-300">
          Explore my repositories, projects, and backend development
          work on GitHub.
        </p>

        <a
          href="https://github.com/kiel997"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3.5 font-semibold text-slate-900 transition hover:-translate-y-1"
        >
          Visit GitHub
          <ArrowUpRight size={18} />
        </a>
      </div>
    </section>
  );
}