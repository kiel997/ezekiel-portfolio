import { Download } from "lucide-react";

export default function ResumeCTA() {
  return (
    <section className="bg-[#d4af37] py-20">
      <div className="mx-auto max-w-4xl px-6 text-center text-[#0b0e14]">
        <h2 className="text-4xl font-bold">
          Want to know more about my experience?
        </h2>

        <p className="mx-auto mt-5 max-w-2xl text-lg text-[#0b0e14]/80">
          Download my CV to learn more about my technical background,
          projects, and skills.
        </p>

        <a
          href="/cv/Ezekiel_Udoe_CV.pdf"
          download
          className="mt-8 inline-flex items-center gap-2 rounded-xl bg-[#0b0e14] px-7 py-4 font-semibold text-[#d4af37] transition hover:-translate-y-1"
        >
          <Download size={18} />
          Download CV
        </a>
      </div>
    </section>
  );
}