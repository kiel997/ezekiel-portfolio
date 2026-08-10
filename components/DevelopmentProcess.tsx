const steps = [
  {
    number: "01",
    title: "Understand",
    description:
      "Understand the requirements and expected functionality.",
  },
  {
    number: "02",
    title: "Design",
    description:
      "Plan the API structure, database relationships, and application architecture.",
  },
  {
    number: "03",
    title: "Develop",
    description:
      "Build modular and maintainable backend services.",
  },
  {
    number: "04",
    title: "Validate",
    description:
      "Test endpoints, validate requests, and handle errors.",
  },
  {
    number: "05",
    title: "Deploy",
    description:
      "Deploy the application and verify that it works correctly in production.",
  },
];

export default function DevelopmentProcess() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <p className="font-semibold text-blue-600">
          DEVELOPMENT PROCESS
        </p>

        <h2 className="mt-3 text-4xl font-bold text-slate-900">
          My Development Process
        </h2>

        <div className="mt-12 grid gap-6 md:grid-cols-5">
          {steps.map((step) => (
            <div
              key={step.number}
              className="rounded-2xl border border-slate-200 bg-slate-50 p-6"
            >
              <span className="text-3xl font-bold text-blue-600">
                {step.number}
              </span>

              <h3 className="mt-5 text-xl font-bold">
                {step.title}
              </h3>

              <p className="mt-3 text-sm leading-6 text-slate-600">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}