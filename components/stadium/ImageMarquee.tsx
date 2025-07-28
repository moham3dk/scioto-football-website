"use client";
import React from "react";
import Image from "next/image";
import Marquee from "react-fast-marquee";

interface ImageMarqueeProps {
  images: { src: string; alt: string }[];
  onImageClick: (src: string) => void;
}

const ImageMarquee = ({ images, onImageClick }: ImageMarqueeProps) => {
  return (
    <Marquee speed={50} gradient={false} className="mb-10">
      {images.map((image, index) => (
        <div
          key={index}
          className="mx-4 cursor-pointer"
          onClick={() => onImageClick(image.src)}
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
  );
};

export default ImageMarquee;
