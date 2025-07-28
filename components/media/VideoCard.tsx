// components/common/VideoCard.tsx
import React from "react";

interface Snippet {
  resourceId: { videoId: string };
  thumbnails: { high: { url: string } };
  title: string;
  description: string;
  publishedAt: string;
}

interface VideoCardProps {
  snippet: Snippet;
}

const VideoCard: React.FC<VideoCardProps> = ({ snippet }) => {
  return (
    <a
      href={`https://www.youtube.com/watch?v=${snippet.resourceId.videoId}`}
      target="_blank"
      rel="noopener noreferrer"
      className="border shadow hover:bg-gray-300 transition duration-300 overflow-hidden"
    >
      <img
        src={snippet.thumbnails.high.url}
        alt={snippet.title}
        className="w-full object-cover"
      />
      <div className="p-4">
        <h2 className="text-xl font-semibold text-[#014321] mb-2">
          {snippet.title}
        </h2>
        <p className="text-sm text-gray-600">{snippet.description}</p>
        <p className="text-xs text-gray-400 mt-2">
          Published: {new Date(snippet.publishedAt).toLocaleDateString()}
        </p>
      </div>
    </a>
  );
};

export default VideoCard;
