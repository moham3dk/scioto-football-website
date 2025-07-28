"use client";
import React, { useState } from "react";
import PageTitle from "@/components/common/PageTitle";
import ImageMarquee from "@/components/stadium/ImageMarquee";
import StadiumInfo from "@/components/stadium/StadiumInfo";
import ImageModal from "@/components/stadium/ImageModal";

const Page = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const images = [
    { src: "/images/stadium/field.jpg", alt: "Our Field" },
    { src: "/images/stadium/home-stands.jpg", alt: "Home Stands" },
    { src: "/images/stadium/press-box.jpg", alt: "Press Box" },
    { src: "/images/stadium/visitor-stands.jpg", alt: "Visitor Stands" },
    { src: "/images/stadium/scoreboard.jpg", alt: "Scoreboard" },
  ];

  const info = [
    {
      label: "Map Link",
      value: (
        <a
          href="https://maps.app.goo.gl/VU8QY9vPziD7m5Wr8"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 underline"
        >
          Google Maps
        </a>
      ),
    },
    { label: "Address", value: "4000 Hard Road, Dublin, Ohio 43016" },
    {
      label: "Weather",
      value: (
        <a
          href="https://weather.com/weather/today/l/Dublin+OH"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 underline"
        >
          Local Weather
        </a>
      ),
    },
    { label: "Owner", value: "Dublin City Schools" },
    { label: "County", value: "Franklin" },
    { label: "Seating Capacity", value: "5000" },
    { label: "Stadium Type", value: "High School" },
    { label: "Year Opened", value: "1995" },
    { label: "Video Scoreboard", value: "No" },
    { label: "Press Box Elevator", value: "No" },
    { label: "Wheelchair Access", value: "Good" },
    { label: "Playing Surface", value: "Artificial" },
    { label: "Home Teams", value: "Dublin Scioto Irish" },
    { label: "Sports", value: "Football, Track, Soccer, Lacrosse" },
  ];

  return (
    <div className="min-h-screen bg-white w-full flex justify-center items-center p-4">
      <div className="w-full max-w-6xl by-4 md:mb-8">
        <PageTitle title="Stadium Information" />

        <ImageMarquee images={images} onImageClick={setSelectedImage} />

        <StadiumInfo info={info} />

        <ImageModal
          selectedImage={selectedImage}
          onClose={() => setSelectedImage(null)}
        />
      </div>
    </div>
  );
};

export default Page;
