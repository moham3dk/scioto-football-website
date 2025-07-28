"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Error from "@/components/common/Error";
import Loading from "@/components/common/Loading";
import PageTitle from "@/components/common/PageTitle";
import VideoCard from "@/components/media/VideoCard";

interface Video {
  snippet: any;
}

const Page = () => {
  const [loading, setLoading] = useState(true);
  const [videos, setVideos] = useState<Video[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const response = await axios.get("/api/storied-rivals");
        setVideos(response.data["items"]);
        setError(null);
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
    <div className="min-h-screen bg-white p-4">
      <PageTitle title="Storied Rivals Highlights" />
      <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
        {videos.map((video, index) => (
          <VideoCard key={index} snippet={video.snippet} />
        ))}
      </div>
    </div>
  );
};

export default Page;
