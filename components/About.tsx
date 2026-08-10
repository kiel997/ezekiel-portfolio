import {
  MapPin,
  Server,
  Code2,
  Database,
} from "lucide-react";

const information = [
  {
    title: "Location",
    value: "Akwa Ibom State, Nigeria",
    icon: MapPin,
  },
  {
    title: "Specialization",
    value: "Backend Development",
    icon: Server,
  },
  {
    title: "Primary Technologies",
    value: "TypeScript & NestJS",
    icon: Code2,
  },
  {
    title: "Databases",
    value: "PostgreSQL • MySQL • MongoDB",
    icon: Database,
  },
];

export default function About() {
  return (
    <section id="about" className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="font-semibold text-blue-600">ABOUT ME</p>

            <h2 className="mt-3 text-4xl font-bold tracking-tight text-slate-900">
               About Me
            </h2>

            <div className="mt-6 space-y-5 text-lg leading-8 text-slate-600">
              <p>
                I am a motivated and adaptable backend developer with a strong
                passion for problem-solving and continuous learning.
              </p>

              <p>
                I specialize in building scalable and efficient backend systems
                using TypeScript and NestJS, with experience working with
                PostgreSQL, MySQL, and MongoDB.
              </p>

              <p>
                I am committed to writing clean, secure, and maintainable code
                while continuously improving my technical skills.
              </p>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {information.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="rounded-2xl border border-slate-200 bg-slate-50 p-6 transition hover:-translate-y-1 hover:border-blue-200 hover:shadow-lg"
                >
                  <Icon className="text-blue-600" size={25} />

                  <p className="mt-5 text-sm font-medium text-slate-500">
                    {item.title}
                  </p>

                  <p className="mt-2 font-semibold text-slate-900">
                    {item.value}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}