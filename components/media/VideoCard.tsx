// components/common/VideoCard.tsx
import React from "react";

interface Snippet {
  resourceId?: { videoId?: string };
  thumbnails?: { high?: { url?: string } };
  title?: string;
  description?: string;
  publishedAt?: string;
}

interface VideoCardProps {
  snippet?: Snippet;
}

const VideoCard: React.FC<VideoCardProps> = ({ snippet = {} }) => {
  const videoId = snippet.resourceId?.videoId || "dQw4w9WgXcQ";
  const thumbnail =
    snippet.thumbnails?.high?.url ||
    "https://placehold.co/480x270?text=No+Thumbnail";
  const title = snippet.title || "Untitled Video";
  const description = snippet.description || "No description available.";
  const publishedAt = snippet.publishedAt
    ? new Date(snippet.publishedAt).toLocaleDateString()
    : "Unknown date";

  return (
    <a
      href={`https://www.youtube.com/watch?v=${videoId}`}
      target="_blank"
      rel="noopener noreferrer"
      className="border shadow hover:bg-gray-300 transition duration-300 overflow-hidden block rounded-2xl"
    >
      <img
        src={thumbnail}
        alt={title}
        className="w-full h-48 object-cover bg-gray-200"
      />
      <div className="p-4">
        <h2 className="text-xl font-semibold text-[#014321] mb-2 line-clamp-2">
          {title}
        </h2>
        <p className="text-sm text-gray-600 line-clamp-3">{description}</p>
        <p className="text-xs text-gray-400 mt-2">Published: {publishedAt}</p>
      </div>
    </a>
  );
};

export default VideoCard;
