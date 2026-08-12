const timeline = [
  {
    period: "2022",
    title: "B.Sc. Graduate — Caritas University",
    place: "Enugu, Nigeria",
    points: [
      "Completed my Bachelor's degree and began focusing on backend development.",
      "Started learning TypeScript, Node.js, and REST API fundamentals.",
    ],
  },
  {
    period: "2023",
    title: "Backend Development Deep Dive",
    place: "Self-directed",
    points: [
      "Specialized in NestJS, building modular, scalable backend services.",
      "Worked with PostgreSQL and MongoDB, designing schemas and optimizing queries.",
    ],
  },
  {
    period: "2024 — Present",
    title: "Independent Backend Projects",
    place: "Personal & Freelance Work",
    points: [
      "Designed and shipped multiple backend systems end-to-end — auth, file management, and business logic APIs.",
      "Focused on clean architecture, security, and writing maintainable, well-documented code.",
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="bg-[#0b0e14] py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <p className="font-semibold text-[#d4af37]">MY JOURNEY</p>

        <h2 className="mt-3 text-4xl font-bold text-[#e6e8ec]">
          Where I&apos;ve Grown
        </h2>

        <div className="mt-12 space-y-10 border-l border-[#1f2430] pl-8">
          {timeline.map((item) => (
            <div key={item.period} className="relative">
              <span className="absolute -left-[37px] top-1 h-3 w-3 rounded-full bg-[#d4af37]" />

              <p className="text-sm font-semibold uppercase tracking-wider text-[#d4af37]">
                {item.period}
              </p>

              <h3 className="mt-2 text-xl font-bold text-[#e6e8ec]">
                {item.title}
              </h3>

              <p className="text-sm text-[#94a3b8]">{item.place}</p>

              <ul className="mt-3 space-y-1.5">
                {item.points.map((point) => (
                  <li key={point} className="text-sm leading-6 text-[#94a3b8]">
                    <span className="text-[#d4af37]">✓</span> {point}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}