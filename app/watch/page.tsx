import type { Metadata } from "next";
import { ArrowUpRight, PlayCircle, Radio } from "lucide-react";
import { YOUTUBE_CHANNEL_ID, YOUTUBE_CHANNEL_URL } from "@/setting";

export const metadata: Metadata = {
  title: {
    absolute: "Watch Online | Elim Sanctuary",
  },
  description:
    "Watch live services and catch up on recent messages from Elim Sanctuary on YouTube.",
};

const channelUrl = YOUTUBE_CHANNEL_URL;
const streamsUrl = `${channelUrl}/streams`;
const liveUrl = `https://www.youtube-nocookie.com/embed/live_stream?channel=${YOUTUBE_CHANNEL_ID}&rel=0`;
const uploadsPlaylistId = YOUTUBE_CHANNEL_ID.replace(/^UC/, "UU");
const uploadsUrl = `https://www.youtube-nocookie.com/embed/videoseries?list=${uploadsPlaylistId}&rel=0`;

const iframePermissions =
  "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share";

export default function WatchPage() {
  return (
    <main className="min-h-screen bg-background">
      <section className="relative overflow-hidden bg-[#080b12] px-6 pb-16 pt-36 text-white sm:px-10 sm:pb-20 lg:px-12">
        <div className="absolute -right-32 -top-40 h-120 w-120 rounded-full bg-brand-blue/40 blur-[120px]" />
        <div className="absolute -bottom-48 left-1/4 h-100 w-100 rounded-full bg-brand-red/15 blur-[120px]" />
        <div className="relative mx-auto max-w-7xl">
          <p className="inline-flex items-center gap-3 text-xs font-bold uppercase tracking-[0.25em] text-brand-gold">
            <span className="h-px w-9 bg-brand-red" />
            Elim Sanctuary · Watch Online
          </p>
          <h1 className="mt-6 max-w-4xl text-5xl font-bold leading-[1.02] tracking-tight sm:text-6xl lg:text-7xl">
            Gather with us,
            <br />
            <span className="text-brand-gold">wherever you are.</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-white/70">
            Join our live services when we’re on air, or watch recent messages
            and moments from Elim Sanctuary.
          </p>
        </div>
      </section>

      <section className="px-6 py-16 sm:px-10 lg:px-12 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1.55fr_0.75fr] lg:gap-12">
          <div className="overflow-hidden rounded-3xl border border-border bg-card shadow-xl shadow-black/5">
            <div className="flex flex-col gap-3 p-5 sm:flex-row sm:items-center sm:justify-between sm:p-7">
              <div className="flex items-center gap-3">
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-brand-red/10 text-brand-red">
                  <Radio className="h-5 w-5" />
                </span>
                <div>
                  <h2 className="font-bold text-foreground">Live from Elim</h2>
                  <p className="text-sm text-muted-foreground">
                    The player shows our broadcast when we’re live.
                  </p>
                </div>
              </div>
              <a
                href={streamsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-semibold text-brand-blue hover:text-brand-red dark:text-brand-gold"
              >
                Open YouTube
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>
            <div className="aspect-video bg-black">
              <iframe
                title="Elim Sanctuary live YouTube stream"
                src={liveUrl}
                allow={iframePermissions}
                allowFullScreen
                referrerPolicy="strict-origin-when-cross-origin"
                className="h-full w-full border-0"
              />
            </div>
            <p className="px-5 py-4 text-sm leading-6 text-muted-foreground sm:px-7">
              Not live right now? Browse recent services and messages below.
            </p>
          </div>

          <aside className="flex flex-col justify-between rounded-3xl bg-brand-accent p-7 dark:bg-white/[0.04] sm:p-9">
            <div>
              <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-blue text-white dark:bg-brand-gold dark:text-black">
                <PlayCircle className="h-6 w-6" />
              </span>
              <h2 className="mt-6 text-2xl font-bold text-brand-blue dark:text-white">
                Stay connected to the message.
              </h2>
              <p className="mt-4 leading-7 text-muted-foreground">
                Find the latest services, teachings, worship, and community
                moments from our YouTube channel.
              </p>
            </div>
            <a
              href={channelUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center gap-2 font-semibold text-brand-red hover:text-brand-blue dark:hover:text-brand-gold"
            >
              Visit our YouTube channel
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </aside>
        </div>
      </section>

      <section className="bg-brand-accent px-6 py-16 dark:bg-white/[0.03] sm:px-10 lg:px-12 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-9 flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.24em] text-brand-red">
                Watch again
              </p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-brand-blue dark:text-white sm:text-4xl">
                Recent videos
              </h2>
            </div>
            <p className="max-w-lg leading-7 text-muted-foreground">
              New uploads from our channel appear here automatically.
            </p>
          </div>
          <div className="overflow-hidden rounded-3xl border border-border bg-black shadow-xl shadow-black/10">
            <div className="aspect-video">
              <iframe
                title="Recent Elim Sanctuary YouTube videos"
                src={uploadsUrl}
                loading="lazy"
                allow={iframePermissions}
                allowFullScreen
                referrerPolicy="strict-origin-when-cross-origin"
                className="h-full w-full border-0"
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
