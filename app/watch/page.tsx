import type { Metadata } from "next";
import Image from "next/image";
import { ArrowUpRight, PlayCircle, Radio } from "lucide-react";
import { YOUTUBE_CHANNEL_URL } from "@/setting";
import { getChannelVideos, type ChannelVideo } from "@/lib/youtube";

export const metadata: Metadata = {
  title: {
    absolute: "Watch Online | Elim Sanctuary",
  },
  description:
    "Watch live services and catch up on recent messages from Elim Sanctuary on YouTube.",
};

export const dynamic = "force-dynamic";

const channelUrl = YOUTUBE_CHANNEL_URL;
const streamsUrl = `${channelUrl}/streams`;

function VideoGrid({ videos }: { videos: ChannelVideo[] }) {
  return (
    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
      {videos.map((video) => (
        <a
          key={video.id}
          href={`https://www.youtube.com/watch?v=${video.id}`}
          target="_blank"
          rel="noopener noreferrer"
          className="group overflow-hidden rounded-2xl border border-border bg-background transition-transform hover:-translate-y-1"
        >
          <div className="relative aspect-video overflow-hidden bg-black">
            <Image
              src={video.thumbnailUrl}
              alt=""
              fill
              unoptimized
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
            {video.isLivestream && (
              <span className="absolute left-3 top-3 rounded-full bg-brand-red px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-white">
                Stream replay
              </span>
            )}
            <span className="absolute bottom-3 right-3 flex h-9 w-9 items-center justify-center rounded-full bg-brand-red text-white">
              <PlayCircle className="h-5 w-5" />
            </span>
          </div>
          <div className="p-4">
            <h3 className="line-clamp-2 font-semibold leading-6 text-foreground group-hover:text-brand-red">
              {video.title}
            </h3>
            <time
              dateTime={video.publishedAt}
              className="mt-2 block text-xs text-muted-foreground"
            >
              {new Date(video.publishedAt).toLocaleDateString("en-NG", {
                day: "numeric",
                month: "short",
                year: "numeric",
              })}
            </time>
          </div>
        </a>
      ))}
    </div>
  );
}

export default async function WatchPage() {
  const { videos, error } = await getChannelVideos();
  const liveVideo = videos.find((video) => video.isLive && video.isEmbeddable);
  const featuredVideo =
    liveVideo ??
    videos.find((video) => video.isLivestream && video.isEmbeddable) ??
    videos.find((video) => video.isEmbeddable) ??
    null;
  const recentVideos = videos
    .filter((video) => video.id !== featuredVideo?.id)
    .slice(0, 4);

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
        {featuredVideo ? (
          <div className="mx-auto max-w-7xl">
            <div className="overflow-hidden rounded-3xl border border-border bg-card shadow-xl shadow-black/5">
              <div className="flex flex-col gap-3 p-5 sm:flex-row sm:items-center sm:justify-between sm:p-7">
                <div className="flex items-center gap-3">
                  <span className="flex h-11 w-11 items-center justify-center rounded-full bg-brand-red/10 text-brand-red">
                    {liveVideo ? (
                      <Radio className="h-5 w-5" />
                    ) : (
                      <PlayCircle className="h-5 w-5" />
                    )}
                  </span>
                  <div>
                    <h2 className="font-bold text-foreground">
                      {liveVideo
                        ? "Live from Elim"
                        : featuredVideo.isLivestream
                          ? "Latest stream from Elim"
                          : "Latest from Elim"}
                    </h2>
                    <p className="text-sm text-muted-foreground">
                      {liveVideo
                        ? "We’re broadcasting live now."
                        : "Watch our latest message right here."}
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
              <div className="relative aspect-video bg-black">
                <iframe
                  title={
                    liveVideo
                      ? "Elim Sanctuary live YouTube stream"
                      : `Elim Sanctuary video: ${featuredVideo.title}`
                  }
                  src={`https://www.youtube-nocookie.com/embed/${featuredVideo.id}?rel=0`}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  referrerPolicy="strict-origin-when-cross-origin"
                  className="absolute inset-0 h-full w-full border-0"
                />
              </div>
              <p className="px-5 py-4 text-sm leading-6 text-muted-foreground sm:px-7">
                {liveVideo
                  ? "You’re watching the current live broadcast."
                  : featuredVideo.isLivestream
                    ? "You’re watching our most recent livestream replay."
                    : "You’re watching the latest upload."}
              </p>
            </div>

          </div>
        ) : (
          <div className="mx-auto max-w-7xl">
            <div className="mb-9 flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.24em] text-brand-red">
                  Watch again
                </p>
                <h2 className="mt-3 text-3xl font-bold tracking-tight text-brand-blue dark:text-white sm:text-4xl">
                  Recent messages &amp; services
                </h2>
              </div>
              <p className="max-w-lg leading-7 text-muted-foreground">
                No live broadcast right now. Catch up on recent uploads from
                Elim Sanctuary.
              </p>
            </div>
            {recentVideos.length > 0 ? (
              <VideoGrid videos={recentVideos} />
            ) : (
              <div className="rounded-2xl border border-border bg-card p-6 text-muted-foreground">
                <p>
                  {error === "missing-key"
                    ? "YouTube videos aren’t configured on this server yet."
                    : error === "request-failed"
                      ? "Recent videos are temporarily unavailable."
                      : "More videos will appear here as they are published."}
                </p>
                <a
                  href={streamsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 inline-flex items-center gap-2 font-semibold text-brand-red hover:text-brand-blue dark:hover:text-brand-gold"
                >
                  Browse videos on YouTube
                  <ArrowUpRight className="h-4 w-4" />
                </a>
              </div>
            )}
          </div>
        )}
      </section>

      {featuredVideo && recentVideos.length > 0 && (
        <section className="bg-brand-accent px-6 py-16 dark:bg-white/[0.03] sm:px-10 lg:px-12 lg:py-24">
          <div className="mx-auto max-w-7xl">
            <div className="mb-9 flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.24em] text-brand-red">
                  Watch again
                </p>
                <h2 className="mt-3 text-3xl font-bold tracking-tight text-brand-blue dark:text-white sm:text-4xl">
                  Recent uploads
                </h2>
              </div>
              <p className="max-w-lg leading-7 text-muted-foreground">
                New uploads from our channel appear here automatically.
              </p>
            </div>
            <VideoGrid videos={recentVideos} />
          </div>
        </section>
      )}
    </main>
  );
}
