"use client";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Enter a valid email"),
  subject: z.string().min(3, "Subject is required"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactForm = z.infer<typeof contactSchema>;

export default function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ContactForm>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = (data: ContactForm) => {
    console.log(data);
  };

  return (
    <section id="contact" className="bg-[#0b0e14] py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <p className="font-semibold text-[#d4af37]">CONTACT</p>

            <h2 className="mt-3 text-4xl font-bold text-[#e6e8ec]">
              Let&apos;s Work Together
            </h2>

            <p className="mt-5 text-lg leading-8 text-[#94a3b8]">
              Have a project, opportunity, or technical challenge?
              I&apos;d be happy to connect.
            </p>

            <div className="mt-8 space-y-5">
              <div>
                <p className="text-sm text-[#94a3b8]">Email</p>
                <a
                  href="mailto:ezekieludoe3@gmail.com"
                  className="font-semibold text-[#e6e8ec] hover:text-[#d4af37]"
                >
                  ezekieludoe3@gmail.com
                </a>
              </div>

              <div>
                <p className="text-sm text-[#94a3b8]">Phone</p>
                <a
                  href="tel:08158998309"
                  className="font-semibold text-[#e6e8ec] hover:text-[#d4af37]"
                >
                  08158998309
                </a>
              </div>

              <div>
                <p className="text-sm text-[#94a3b8]">Location</p>
                <p className="font-semibold text-[#e6e8ec]">
                  Akwa Ibom State, Nigeria
                </p>
              </div>
            </div>
          </div>

          <form
            onSubmit={handleSubmit(onSubmit)}
            className="rounded-3xl border border-[#1f2430] bg-[#12161f] p-7 shadow-sm"
          >
            <div className="grid gap-5">
              <div>
                <label className="text-sm font-semibold text-[#e6e8ec]">Full Name</label>
                <input
                  {...register("name")}
                  className="mt-2 w-full rounded-xl border border-[#1f2430] bg-[#0b0e14] px-4 py-3 text-[#e6e8ec] outline-none focus:border-[#d4af37]"
                  placeholder="Your name"
                />
                {errors.name && <p className="mt-1 text-sm text-red-400">{errors.name.message}</p>}
              </div>

              <div>
                <label className="text-sm font-semibold text-[#e6e8ec]">Email Address</label>
                <input
                  {...register("email")}
                  type="email"
                  className="mt-2 w-full rounded-xl border border-[#1f2430] bg-[#0b0e14] px-4 py-3 text-[#e6e8ec] outline-none focus:border-[#d4af37]"
                  placeholder="you@example.com"
                />
                {errors.email && <p className="mt-1 text-sm text-red-400">{errors.email.message}</p>}
              </div>

              <div>
                <label className="text-sm font-semibold text-[#e6e8ec]">Subject</label>
                <input
                  {...register("subject")}
                  className="mt-2 w-full rounded-xl border border-[#1f2430] bg-[#0b0e14] px-4 py-3 text-[#e6e8ec] outline-none focus:border-[#d4af37]"
                  placeholder="Project opportunity"
                />
                {errors.subject && <p className="mt-1 text-sm text-red-400">{errors.subject.message}</p>}
              </div>

              <div>
                <label className="text-sm font-semibold text-[#e6e8ec]">Message</label>
                <textarea
                  {...register("message")}
                  rows={6}
                  className="mt-2 w-full rounded-xl border border-[#1f2430] bg-[#0b0e14] px-4 py-3 text-[#e6e8ec] outline-none focus:border-[#d4af37]"
                  placeholder="Tell me about your project..."
                />
                {errors.message && <p className="mt-1 text-sm text-red-400">{errors.message.message}</p>}
              </div>

              <button
                type="submit"
                className="rounded-xl bg-[#d4af37] px-6 py-3.5 font-semibold text-[#0b0e14] transition hover:opacity-90"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}