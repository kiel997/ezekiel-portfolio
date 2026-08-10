import { CheckCircle2 } from "lucide-react";

const technologies = [
  "TypeScript",
  "NestJS",
  "PostgreSQL",
  "MongoDB",
  "REST APIs",
];

export default function Terminal() {
  return (
    <div className="overflow-hidden rounded-2xl border border-slate-700 bg-slate-950 shadow-2xl">
      <div className="flex items-center gap-2 border-b border-slate-800 px-5 py-4">
        <span className="h-3 w-3 rounded-full bg-red-400" />
        <span className="h-3 w-3 rounded-full bg-yellow-400" />
        <span className="h-3 w-3 rounded-full bg-green-400" />
      </div>

      <div className="p-6 font-mono text-sm">
        <p className="text-slate-400">
          $ npm run developer
        </p>

        <div className="mt-5 space-y-3">
          {technologies.map((technology) => (
            <p key={technology} className="text-cyan-400">
              <span className="mr-2 text-blue-400">&gt;</span>
              {technology}
            </p>
          ))}
        </div>

        <div className="mt-6 flex items-center gap-2 text-green-400">
          <CheckCircle2 size={17} />
          System ready
        </div>
      </div>
    </div>
  );
}