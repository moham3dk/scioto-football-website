"use client";
import React, { useState } from "react";
import Image from "next/image";
import Marquee from "react-fast-marquee";

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
      <div className="w-full max-w-6xl my-4 md:my-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-[#014321] mb-4 font-oswald">
            STADIUM
          </h1>
          <div className="w-24 h-1 bg-[#014321] mx-auto"></div>
        </div>

        <Marquee speed={50} gradient={false} className="mb-10">
          {images.map((image, index) => (
            <div
              key={index}
              className="mx-4 cursor-pointer"
              onClick={() => setSelectedImage(image.src)}
            >
              <Image
                src={image.src}
                alt={image.alt}
                width={300}
                height={200}
                className="object-cover hover:scale-105 transition-transform duration-300 border-2 border-[#014321]"
              />
            </div>
          ))}
        </Marquee>

        <div className="overflow-x-auto bg-white border border-[#014321] p-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {info.map((item, index) => (
              <div key={index} className="flex flex-col">
                <span className="font-semibold text-[#014321]">
                  {item.label}
                </span>
                <span className="text-[#014321]">{item.value}</span>
              </div>
            ))}
          </div>
        </div>

        {selectedImage && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4"
            onClick={() => setSelectedImage(null)}
          >
            <div
              className="relative w-full max-w-4xl mx-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={selectedImage}
                alt="Full view"
                width={1200}
                height={800}
                className="object-contain w-full max-h-[80vh] mx-auto border-2 border-[#014321]"  
              />
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-0 right-1 md:right-2 text-red-500 text-4xl font-bold"
              >
                ×
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Page;
