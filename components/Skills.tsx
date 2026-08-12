import { Code2 } from "lucide-react";
import { skillGroups } from "@/data/skills";

export default function Skills() {
  return (
    <section id="skills" className="bg-[#0b0e14] py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="font-semibold text-[#d4af37]">TECHNICAL SKILLS</p>
          <h2 className="mt-3 text-4xl font-bold text-[#e6e8ec]">
            Technologies I work with
          </h2>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {skillGroups.map((group) => (
            <div
              key={group.title}
              className="rounded-2xl border border-[#1f2430] bg-[#12161f] p-7 shadow-sm"
            >
              <h3 className="text-xl font-bold text-[#e6e8ec]">
                {group.title}
              </h3>

              <div className="mt-6 flex flex-wrap gap-3">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="flex items-center gap-2 rounded-xl bg-[#161b26] px-4 py-2.5 text-sm font-medium text-[#94a3b8] transition hover:text-[#d4af37]"
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