import "server-only";

import { YOUTUBE_CHANNEL_ID } from "@/setting";

const YOUTUBE_API_BASE_URL = "https://www.googleapis.com/youtube/v3";
const uploadsPlaylistId = YOUTUBE_CHANNEL_ID.replace(/^UC/, "UU");
const COMPLETED_BROADCASTS_CACHE_SECONDS = 30 * 60;

type YouTubeThumbnail = {
  url: string;
};

type PlaylistItemsResponse = {
  items?: Array<{
    contentDetails?: {
      videoId?: string;
    };
    snippet?: {
      resourceId?: {
        videoId?: string;
      };
    };
  }>;
};

type VideoDetails = {
  id: string;
  snippet: {
    title: string;
    publishedAt: string;
    liveBroadcastContent?: "live" | "upcoming" | "none";
    thumbnails?: {
      high?: YouTubeThumbnail;
      medium?: YouTubeThumbnail;
      default?: YouTubeThumbnail;
    };
  };
  liveStreamingDetails?: {
    actualEndTime?: string;
    actualStartTime?: string;
    scheduledStartTime?: string;
  };
  status?: {
    embeddable?: boolean;
  };
};

type CompletedBroadcastsResponse = {
  items?: Array<{
    id?: {
      videoId?: string;
    };
  }>;
};

type VideoDetailsResponse = {
  items?: VideoDetails[];
};

export type ChannelVideo = {
  id: string;
  title: string;
  publishedAt: string;
  thumbnailUrl: string;
  isLive: boolean;
  isLivestream: boolean;
  isEmbeddable: boolean;
};

export type ChannelVideosResult = {
  videos: ChannelVideo[];
  error: "missing-key" | "request-failed" | null;
};

async function youtubeApiRequest<T>(
  resource: string,
  parameters: Record<string, string>,
  apiKey: string,
  revalidateSeconds = 60,
): Promise<T> {
  const url = new URL(`${YOUTUBE_API_BASE_URL}/${resource}`);
  Object.entries(parameters).forEach(([name, value]) => {
    url.searchParams.set(name, value);
  });
  url.searchParams.set("key", apiKey);

  const response = await fetch(url, {
    next: { revalidate: revalidateSeconds },
  });
  if (!response.ok) {
    console.error(
      `YouTube Data API ${resource} request failed with status ${response.status}.`,
    );
    throw new Error("YouTube Data API request failed");
  }

  return (await response.json()) as T;
}

export async function getChannelVideos(): Promise<ChannelVideosResult> {
  const apiKey = process.env.YOUTUBE_API_KEY;
  if (!apiKey) {
    return { videos: [], error: "missing-key" };
  }

  try {
    const [playlist, completedBroadcasts] = await Promise.all([
      youtubeApiRequest<PlaylistItemsResponse>(
        "playlistItems",
        {
          part: "snippet,contentDetails",
          playlistId: uploadsPlaylistId,
          maxResults: "5",
        },
        apiKey,
      ),
      youtubeApiRequest<CompletedBroadcastsResponse>(
        "search",
        {
          part: "snippet",
          channelId: YOUTUBE_CHANNEL_ID,
          eventType: "completed",
          maxResults: "5",
          order: "date",
          type: "video",
        },
        apiKey,
        COMPLETED_BROADCASTS_CACHE_SECONDS,
      ),
    ]);

    const uploadVideoIds = (playlist.items ?? [])
      .map(
        (item) =>
          item.contentDetails?.videoId ?? item.snippet?.resourceId?.videoId,
      )
      .filter((id): id is string => Boolean(id));
    const completedBroadcastIds = (completedBroadcasts.items ?? [])
      .map((item) => item.id?.videoId)
      .filter((id): id is string => Boolean(id));
    const completedBroadcastIdSet = new Set(completedBroadcastIds);
    const videoIds = Array.from(
      new Set([...completedBroadcastIds, ...uploadVideoIds]),
    );

    if (videoIds.length === 0) {
      return { videos: [], error: null };
    }

    const details = await youtubeApiRequest<VideoDetailsResponse>(
      "videos",
      {
        part: "snippet,status,liveStreamingDetails",
        id: videoIds.join(","),
      },
      apiKey,
    );

    const detailsById = new Map(
      (details.items ?? []).map((video) => [video.id, video]),
    );
    const videos = videoIds.flatMap((id) => {
      const video = detailsById.get(id);
      if (!video) {
        return [];
      }

      return [
        {
          id: video.id,
          title: video.snippet.title,
          publishedAt: video.snippet.publishedAt,
          thumbnailUrl:
            video.snippet.thumbnails?.high?.url ??
            video.snippet.thumbnails?.medium?.url ??
            video.snippet.thumbnails?.default?.url ??
            `https://i.ytimg.com/vi/${video.id}/hqdefault.jpg`,
          isLive: video.snippet.liveBroadcastContent === "live",
          isLivestream:
            completedBroadcastIdSet.has(video.id) ||
            Boolean(video.liveStreamingDetails),
          isEmbeddable: video.status?.embeddable !== false,
        },
      ];
    });
    videos.sort(
      (a, b) =>
        new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime(),
    );

    return { videos, error: null };
  } catch {
    console.error("Failed to load Elim Sanctuary videos from YouTube.");
    return { videos: [], error: "request-failed" };
  }
}
