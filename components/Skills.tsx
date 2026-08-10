import { Code2 } from "lucide-react";
import { skillGroups } from "@/data/skills";

export default function Skills() {
  return (
    <section id="skills" className="bg-slate-50 py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="font-semibold text-blue-600">TECHNICAL SKILLS</p>

          <h2 className="mt-3 text-4xl font-bold text-slate-900">
            Technologies I work with
          </h2>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {skillGroups.map((group) => (
            <div
              key={group.title}
              className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm"
            >
              <h3 className="text-xl font-bold text-slate-900">
                {group.title}
              </h3>

              <div className="mt-6 flex flex-wrap gap-3">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="flex items-center gap-2 rounded-xl bg-slate-100 px-4 py-2.5 text-sm font-medium text-slate-700 transition hover:bg-blue-50 hover:text-blue-600"
                  >
                    <Code2 size={15} />
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}