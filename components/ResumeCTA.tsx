import { Download } from "lucide-react";

export default function ResumeCTA() {
  return (
    <section className="bg-blue-600 py-20">
      <div className="mx-auto max-w-4xl px-6 text-center text-white">
        <h2 className="text-4xl font-bold">
          Want to know more about my experience?
        </h2>

        <p className="mx-auto mt-5 max-w-2xl text-lg text-blue-100">
          Download my CV to learn more about my technical background,
          projects, and skills.
        </p>

        <a
          href="/cv/Ezekiel_Udoe_CV.pdf"
          download
          className="mt-8 inline-flex items-center gap-2 rounded-xl bg-white px-7 py-4 font-semibold text-blue-600 transition hover:-translate-y-1"
        >
          <Download size={18} />
          Download CV
        </a>
      </div>
    </section>
  );
}