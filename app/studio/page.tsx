import type { Metadata } from "next";
import {
  ArrowDown,
  ArrowRight,
  AudioLines,
  Camera,
  Check,
  Clapperboard,
  Clock3,
  Headphones,
  Mail,
  Mic,
  Phone,
  Podcast,
  Scissors,
  Settings2,
  Video,
} from "lucide-react";
import { StudioBookingForm } from "@/components/StudioBookingForm";
import { StudioGallery } from "@/components/StudioGallery";

const studioPhone = "+234 802 955 6990";
const whatsappUrl = "https://wa.me/2348029556990";
const studioEmail = "Elimstudio247@gmail.com";
const instagramUrl = "https://www.instagram.com/ElimStudio247";

export const metadata: Metadata = {
  title: {
    absolute: "Elim Studio | Creative & Media Services",
  },
  description:
    "Empowering Creators, Elevating Faith, and Crafting Excellence. Explore audio, video, photography, and content services at Elim Studio.",
};

const services = [
  {
    title: "Podcast Studio Setup",
    description:
      "A multi-mic, acoustically treated space for audio and video podcast recordings.",
    deliverables: [
      "High-quality multi-track audio",
      "Multi-camera 4K video recording",
      "Live switching",
    ],
    icon: Podcast,
    number: "01",
  },
  {
    title: "Audio & Voice Recording",
    description:
      "Voiceovers, voice acting, audiobooks, backing vocals, and song tracking.",
    deliverables: [
      "Clean raw stems",
      "Noise reduction and vocal processing",
      "Mastering-ready files",
    ],
    icon: Mic,
    number: "02",
  },
  {
    title: "Photography Sessions",
    description:
      "Studio photography for headshots, portraits, products, and brands.",
    deliverables: [
      "Professional studio lighting",
      "High-resolution edited photos",
      "Color grading",
    ],
    icon: Camera,
    number: "03",
  },
  {
    title: "Videography & Production",
    description:
      "Studio shoots, promotional reels, interviews, and music videos.",
    deliverables: [
      "Multi-angle video shoots",
      "Professional lighting and crisp audio",
      "Post-production",
    ],
    icon: Clapperboard,
    number: "04",
  },
  {
    title: "Content & Social Media",
    description:
      "Short-form content, YouTube recordings, and tutorials made for your platforms.",
    deliverables: [
      "Batch content shoots",
      "Vertical and horizontal formats",
      "Reels, TikToks, and Shorts",
    ],
    icon: Video,
    number: "05",
  },
  {
    title: "Editing & Post-Production",
    description:
      "Polished audio and video that bring your finished project together.",
    deliverables: [
      "Audio mixing and mastering",
      "Video editing and color correction",
      "Graphics overlays and captions",
    ],
    icon: Scissors,
    number: "06",
  },
];

const studioBenefits = [
  {
    title: "Professional equipment",
    description:
      "Top-tier cameras, lighting rigs, broadcast-grade microphones, and sound-treated acoustics.",
    icon: Headphones,
  },
  {
    title: "Versatile setups",
    description:
      "Choose from customizable backdrops, cozy podcast seating, and green screen setups.",
    icon: Settings2,
  },
  {
    title: "Budget-friendly rates",
    description:
      "Flexible hourly and day packages for creators, ministries, and personal projects.",
    icon: Check,
  },
  {
    title: "On-site technical support",
    description:
      "A dedicated studio engineer is available to manage the technical details of your session.",
    icon: AudioLines,
  },
];

const bookingSteps = [
  {
    title: "Select a service",
    description:
      "Tell us what you’re creating: a podcast, photo session, video, voice recording, or something else.",
  },
  {
    title: "Choose a date and duration",
    description:
      "Share your preferred date and time, and whether you need an hourly, half-day, or full-day session.",
  },
  {
    title: "Send your project details",
    description:
      "Include your name, email, phone number, and a few details about your project.",
  },
  {
    title: "Confirm your reservation",
    description:
      "We’ll confirm availability and share your reservation details, studio rules, and directions.",
  },
];

export default function StudioPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-background">
      <section className="relative flex min-h-[min(760px,92svh)] items-end overflow-hidden bg-[#080b12] pt-28 text-white">
        <video
          autoPlay
          muted
          loop
          playsInline
          poster="/assets/studio/500781.jpg"
          aria-hidden="true"
          className="absolute inset-0 z-0 h-full w-full object-cover object-center opacity-55"
        >
          <source src="/assets/studio/600363.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 z-10 bg-gradient-to-r from-[#080b12] via-[#080b12]/75 to-[#080b12]/25" />
        <div className="absolute inset-0 z-10 bg-gradient-to-t from-[#080b12] via-transparent to-[#080b12]/25" />
        <div className="relative z-20 mx-auto w-full max-w-7xl px-6 pb-20 pt-16 sm:px-10 lg:px-12 lg:pb-28">
          <div className="max-w-4xl">
            <p className="mb-6 inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.3em] text-brand-gold sm:text-sm">
              <span className="h-px w-10 bg-brand-red" />
              Elim Studio · Creative & Media Services
            </p>
            <h1 className="max-w-4xl text-5xl font-bold leading-[0.98] tracking-[-0.06em] sm:text-7xl lg:text-8xl">
              Your vision,
              <br />
              <span className="text-brand-gold">beautifully</span> brought
              to life.
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-white/75 sm:text-xl">
              Empowering Creators, Elevating Faith, and Crafting Excellence.
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a
                href="#booking-form"
                className="inline-flex min-h-14 items-center justify-center gap-3 rounded-full bg-brand-red px-8 font-semibold text-white transition-colors hover:bg-red-700"
              >
                Book a Session
                <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="#services"
                className="inline-flex min-h-14 items-center justify-center gap-3 rounded-full border border-white/35 px-8 font-semibold text-white transition-colors hover:border-white hover:bg-white/10"
              >
                Explore Our Services
                <ArrowDown className="h-4 w-4" />
              </a>
            </div>
          </div>
          <div className="mt-16 hidden items-center gap-3 text-xs uppercase tracking-[0.24em] text-white/55 sm:flex">
            <span className="h-px w-12 bg-brand-gold/70" />
            Create with purpose
          </div>
        </div>
      </section>

      <section id="about" className="scroll-mt-24 px-6 py-24 sm:px-10 lg:px-12 lg:py-32">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.24em] text-brand-red">
              A space to create
            </p>
            <h2 className="mt-5 text-4xl font-bold tracking-tight text-brand-blue dark:text-white sm:text-5xl">
              Welcome to
              <br />
              Elim Studio
            </h2>
          </div>
          <div className="border-l-2 border-brand-gold pl-6 sm:pl-9">
            <p className="text-xl leading-9 text-foreground/85 sm:text-2xl sm:leading-10">
              Elim Studio is a state-of-the-art multimedia studio dedicated to
              high-quality audio, video, photo, and digital content creation.
              Built to serve creators, gospel artists, podcasters, businesses,
              and ministries, we combine modern technology with professional
              expertise to bring your creative vision to life.
            </p>
          </div>
        </div>
      </section>

      <StudioGallery />

      <section
        id="services"
        className="scroll-mt-24 bg-brand-accent px-6 py-24 dark:bg-white/[0.03] sm:px-10 lg:px-12 lg:py-32"
      >
        <div className="mx-auto max-w-7xl">
          <div className="mb-14 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.24em] text-brand-red">
                What we do
              </p>
              <h2 className="mt-4 text-4xl font-bold tracking-tight text-brand-blue dark:text-white sm:text-5xl">
                Our core services
              </h2>
            </div>
            <p className="max-w-lg text-base leading-7 text-muted-foreground">
              From the first recording to the final edit, find the right
              creative support for your next project.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <article
                  key={service.title}
                  className="group flex h-full flex-col rounded-3xl border border-border bg-background p-7 transition-all duration-300 hover:-translate-y-1 hover:border-brand-blue/30 hover:shadow-xl hover:shadow-brand-blue/5 sm:p-8"
                >
                  <div className="flex items-start justify-between">
                    <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-blue/5 text-brand-blue transition-colors group-hover:bg-brand-blue group-hover:text-white dark:bg-white/10 dark:text-brand-gold">
                      <Icon className="h-5 w-5" />
                    </span>
                    <span className="font-mono text-xs tracking-widest text-muted-foreground/60">
                      {service.number}
                    </span>
                  </div>
                  <h3 className="mt-7 text-xl font-bold text-foreground">
                    {service.title}
                  </h3>
                  <p className="mt-3 min-h-14 leading-7 text-muted-foreground">
                    {service.description}
                  </p>
                  <div className="mt-6 border-t border-border pt-5">
                    <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-brand-red">
                      Included
                    </p>
                    <ul className="mt-4 space-y-3">
                      {service.deliverables.map((deliverable) => (
                        <li
                          key={deliverable}
                          className="flex items-start gap-3 text-sm leading-6 text-foreground/75"
                        >
                          <Check className="mt-1 h-4 w-4 shrink-0 text-brand-green" />
                          {deliverable}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-7 inline-flex items-center gap-2 text-sm font-bold text-brand-blue transition-colors hover:text-brand-red dark:text-brand-gold"
                  >
                    Ask about this service
                    <ArrowRight className="h-4 w-4" />
                  </a>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="px-6 py-24 sm:px-10 lg:px-12 lg:py-32">
        <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.24em] text-brand-red">
              Made for your vision
            </p>
            <h2 className="mt-4 text-4xl font-bold leading-tight tracking-tight text-brand-blue dark:text-white sm:text-5xl">
              Why create
              <br />
              with Elim?
            </h2>
            <p className="mt-6 max-w-md leading-7 text-muted-foreground">
              Bring your idea. We’ll bring the space, tools, and technical
              support to help you create with confidence.
            </p>
          </div>
          <div className="grid gap-x-10 sm:grid-cols-2">
            {studioBenefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <div
                  key={benefit.title}
                  className={`border-t border-border py-7 ${
                    index < 2 ? "sm:border-t-0 sm:pt-0" : ""
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <Icon className="h-5 w-5 text-brand-red" />
                    <h3 className="font-bold text-foreground">
                      {benefit.title}
                    </h3>
                  </div>
                  <p className="mt-4 text-sm leading-7 text-muted-foreground">
                    {benefit.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section
        id="booking"
        className="scroll-mt-24 bg-[#090d18] px-6 py-24 text-white sm:px-10 lg:px-12 lg:py-32"
      >
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.24em] text-brand-gold">
                Make it happen
              </p>
              <h2 className="mt-4 text-4xl font-bold leading-tight tracking-tight sm:text-5xl">
                Your session,
                <br />
                step by step.
              </h2>
              <p className="mt-6 max-w-md leading-7 text-white/65">
                Reach out with your idea and preferred dates. We’ll help you
                find the right setup and confirm availability.
              </p>
              <a
                href="#booking-form"
                className="mt-8 inline-flex min-h-13 items-center gap-3 rounded-full bg-brand-red px-7 font-semibold text-white transition-colors hover:bg-red-700"
              >
                Start your booking
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>

            <ol className="space-y-0">
              {bookingSteps.map((step, index) => (
                <li
                  key={step.title}
                  className="grid grid-cols-[48px_1fr] gap-5 border-t border-white/15 py-6 sm:grid-cols-[56px_1fr] sm:gap-7 sm:py-7"
                >
                  <span className="flex h-11 w-11 items-center justify-center rounded-full border border-brand-gold/50 font-mono text-sm text-brand-gold">
                    0{index + 1}
                  </span>
                  <div>
                    <h3 className="text-lg font-bold">{step.title}</h3>
                    <p className="mt-2 leading-7 text-white/60">
                      {step.description}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </div>

          <div
            id="booking-form"
            className="mt-16 scroll-mt-24 rounded-3xl bg-background p-6 text-foreground sm:p-9 lg:p-12"
          >
            <div className="grid gap-8 lg:grid-cols-[0.7fr_1.3fr] lg:gap-14">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.24em] text-brand-red">
                  Booking request
                </p>
                <h3 className="mt-4 text-3xl font-bold tracking-tight text-brand-blue dark:text-white">
                  Tell us about your session.
                </h3>
                <p className="mt-4 leading-7 text-muted-foreground">
                  Share your preferred service, date, and project details. Your
                  booking request will be saved for studio follow-up.
                </p>
              </div>
              <StudioBookingForm />
            </div>
          </div>
        </div>
      </section>

      <section
        id="contact"
        className="scroll-mt-24 px-6 py-24 sm:px-10 lg:px-12 lg:py-32"
      >
        <div className="mx-auto max-w-7xl rounded-[2rem] bg-brand-blue px-7 py-12 text-white sm:px-12 sm:py-16 lg:px-16">
          <div className="grid gap-12 lg:grid-cols-[1fr_auto] lg:items-end">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.24em] text-brand-gold">
                Let’s talk about your project
              </p>
              <h2 className="mt-4 max-w-2xl text-4xl font-bold tracking-tight sm:text-5xl">
                Great work starts with a conversation.
              </h2>
              <p className="mt-5 max-w-xl leading-7 text-white/70">
                Contact us directly for availability, rates, and session
                details. We’d love to hear what you’re creating.
              </p>
            </div>
            <a
              href="#booking-form"
              className="inline-flex min-h-14 items-center justify-center gap-3 self-start rounded-full bg-brand-red px-8 font-semibold text-white transition-colors hover:bg-red-700 lg:self-end"
            >
              Book a Session
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>

          <div className="mt-12 grid gap-4 border-t border-white/20 pt-8 md:grid-cols-3">
            <a
              href="tel:+2348029556990"
              className="flex items-center gap-4 rounded-2xl p-4 transition-colors hover:bg-white/10"
            >
              <Phone className="h-5 w-5 shrink-0 text-brand-gold" />
              <span>
                <span className="block text-xs uppercase tracking-widest text-white/55">
                  Phone & WhatsApp
                </span>
                <span className="mt-1 block font-semibold">{studioPhone}</span>
              </span>
            </a>
            <a
              href={`mailto:${studioEmail}`}
              className="flex items-center gap-4 rounded-2xl p-4 transition-colors hover:bg-white/10"
            >
              <Mail className="h-5 w-5 shrink-0 text-brand-gold" />
              <span>
                <span className="block text-xs uppercase tracking-widest text-white/55">
                  Email
                </span>
                <span className="mt-1 block break-all font-semibold">
                  {studioEmail}
                </span>
              </span>
            </a>
            <a
              href={instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 rounded-2xl p-4 transition-colors hover:bg-white/10"
            >
              <Camera className="h-5 w-5 shrink-0 text-brand-gold" />
              <span>
                <span className="block text-xs uppercase tracking-widest text-white/55">
                  Instagram
                </span>
                <span className="mt-1 block font-semibold">@ElimStudio247</span>
              </span>
            </a>
          </div>
          <div className="mt-8 flex items-center gap-2 text-xs text-white/45">
            <Clock3 className="h-4 w-4" />
            Session times and availability are confirmed directly with the
            studio.
          </div>
        </div>
      </section>
    </main>
  );
}
