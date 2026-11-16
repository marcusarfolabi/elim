import type { Metadata } from "next";
import TestimonySection from "@/components/TestimonySection";

export const metadata: Metadata = {
  title: "Testimonies | Elim Sanctuary",
  description:
    "Read testimonies shared by the Elim Sanctuary community.",
};

export const dynamic = "force-dynamic";

export default function TestimoniesPage() {
  return (
    <main className="min-h-screen bg-background">
      <section className="relative overflow-hidden bg-[#080b12] px-6 pb-16 pt-36 text-white sm:px-10 sm:pb-20 lg:px-12">
        <div className="absolute -right-32 -top-40 h-120 w-120 rounded-full bg-brand-blue/40 blur-[120px]" />
        <div className="absolute -bottom-48 left-1/4 h-100 w-100 rounded-full bg-brand-red/15 blur-[120px]" />
        <div className="relative mx-auto max-w-7xl">
          <p className="inline-flex items-center gap-3 text-xs font-bold uppercase tracking-[0.25em] text-brand-gold">
            <span className="h-px w-9 bg-brand-red" />
            Elim Sanctuary · Testimonies
          </p>
          <h1 className="mt-6 max-w-4xl text-5xl font-bold leading-[1.02] tracking-tight sm:text-6xl lg:text-7xl">
            Stories of faith,
            <br />
            <span className="text-brand-gold">hope, and grace.</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-white/70">
            Read the testimonies our community has chosen to share and be
            encouraged by what God is doing.
          </p>
        </div>
      </section>
      <TestimonySection showArchiveLink={false} />
    </main>
  );
}
