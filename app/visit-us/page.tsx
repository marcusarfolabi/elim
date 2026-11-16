import type { Metadata } from "next";
import { ArrowUpRight, Mail, MapPin, Navigation, Phone } from "lucide-react";
import { FOOTER_DATA } from "@/setting";

export const metadata: Metadata = {
  title: "Visit Us | Elim Sanctuary",
  description:
    "Find Elim Sanctuary in Akowonjo, Lagos. Get directions, contact our team, and plan your visit.",
};

const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
  FOOTER_DATA.address,
)}`;

export default function VisitUsPage() {
  return (
    <main className="min-h-screen bg-background">
      <section className="relative overflow-hidden bg-[#080b12] px-6 pb-16 pt-36 text-white sm:px-10 sm:pb-20 lg:px-12">
        <div className="absolute -right-32 -top-40 h-120 w-120 rounded-full bg-brand-blue/40 blur-[120px]" />
        <div className="absolute -bottom-48 left-1/4 h-100 w-100 rounded-full bg-brand-red/15 blur-[120px]" />
        <div className="relative mx-auto max-w-7xl">
          <p className="inline-flex items-center gap-3 text-xs font-bold uppercase tracking-[0.25em] text-brand-gold">
            <span className="h-px w-9 bg-brand-red" />
            Elim Sanctuary · Plan Your Visit
          </p>
          <h1 className="mt-6 max-w-4xl text-5xl font-bold leading-[1.02] tracking-tight sm:text-6xl lg:text-7xl">
            We look forward
            <br />
            <span className="text-brand-gold">to welcoming you.</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-white/70">
            Find us in Akowonjo, Lagos. Use the map for directions or contact
            the church if you need help planning your visit.
          </p>
        </div>
      </section>

      <section className="px-6 py-16 sm:px-10 lg:px-12 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.8fr_1.2fr]">
          <div className="rounded-3xl border border-border bg-card p-7 shadow-xl shadow-black/5 sm:p-9">
            <p className="text-xs font-bold uppercase tracking-[0.24em] text-brand-red">
              Visit Elim Sanctuary
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-brand-blue dark:text-white">
              We’re here for you.
            </h2>

            <div className="mt-8 space-y-6">
              <div className="flex items-start gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-blue/10 text-brand-blue dark:bg-brand-gold/10 dark:text-brand-gold">
                  <MapPin className="h-5 w-5" />
                </span>
                <div>
                  <h3 className="font-semibold text-foreground">Our address</h3>
                  <p className="mt-1 leading-7 text-muted-foreground">
                    {FOOTER_DATA.address}
                  </p>
                </div>
              </div>

              <a
                href={`tel:${FOOTER_DATA.phone}`}
                className="flex items-center gap-4 rounded-xl text-foreground transition-colors hover:text-brand-red"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-blue/10 text-brand-blue dark:bg-brand-gold/10 dark:text-brand-gold">
                  <Phone className="h-5 w-5" />
                </span>
                <span>
                  <span className="block font-semibold">Call us</span>
                  <span className="mt-1 block text-muted-foreground">
                    {FOOTER_DATA.phone}
                  </span>
                </span>
              </a>

              <a
                href={`mailto:${FOOTER_DATA.email}`}
                className="flex items-center gap-4 rounded-xl text-foreground transition-colors hover:text-brand-red"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-blue/10 text-brand-blue dark:bg-brand-gold/10 dark:text-brand-gold">
                  <Mail className="h-5 w-5" />
                </span>
                <span className="min-w-0">
                  <span className="block font-semibold">Email us</span>
                  <span className="mt-1 block break-all text-muted-foreground">
                    {FOOTER_DATA.email}
                  </span>
                </span>
              </a>
            </div>

            <a
              href={directionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-9 inline-flex items-center gap-2 rounded-full bg-brand-red px-6 py-3 font-semibold text-white transition-colors hover:bg-red-700"
            >
              <Navigation className="h-4 w-4" />
              Get directions
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>

          <div className="relative min-h-[380px] overflow-hidden rounded-3xl border border-border bg-muted shadow-xl shadow-black/5 sm:min-h-[480px]">
            <iframe
              src={FOOTER_DATA.mapEmbedUrl}
              title="Map showing the location of Elim Sanctuary"
              className="absolute inset-0 h-full w-full dark:invert"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
        </div>
      </section>
    </main>
  );
}
