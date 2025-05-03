"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";
import Error from "@/components/Error";
import Loading from "@/components/Loading";

const Page = () => {
  const [loading, setLoading] = useState(true);
  const [videos, setVideos] = useState([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const response = await axios.get("/api/storied-rivals");
        setVideos(response.data["items"]);
      } catch (err: any) {
        if (err.response?.status === 429) {
          setError(
            "It seems like we've hit a rate limit. Please try again later."
          );
        } else if (err.message) {
          setError(`An error occurred: ${err.message}`);
        } else {
          setError("An unknown error occurred while fetching videos.");
        }
      } finally {
        setLoading(false);
      }
    };

    fetchVideos();
  }, []);

  if (loading) return <Loading />;
  if (error) return <Error errorMessage={error} />;

  return (
    <div className="min-h-screen bg-white px-4 py-8">
      <h1 className="text-4xl font-oswald text-[#014321] text-center mb-8">
        STORIED RIVALS HIGHLIGHTS
      </h1>
      <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
        {videos.map((video: any, index) => {
          const snippet = video.snippet;
          return (
            <a
              key={index}
              href={`https://www.youtube.com/watch?v=${snippet.resourceId.videoId}`}
              target="_blank"
              rel="noopener noreferrer"
              className="border rounded-2xl shadow hover:shadow-lg transition duration-300 overflow-hidden"
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
                  Published:{" "}
                  {new Date(snippet.publishedAt).toLocaleDateString()}
                </p>
              </div>
            </a>
          );
        })}
      </div>
    </div>
  );
};

export default Page;
