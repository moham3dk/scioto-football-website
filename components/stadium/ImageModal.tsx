"use client";
import React from "react";
import Image from "next/image";

interface ImageModalProps {
  selectedImage: string | null;
  onClose: () => void;
}

const ImageModal = ({ selectedImage, onClose }: ImageModalProps) => {
  if (!selectedImage) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4"
      onClick={onClose}
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
          onClick={onClose}
          className="absolute top-0 right-1 md:right-2 text-red-500 text-4xl font-bold"
        >
          ×
        </button>
      </div>
    </div>
  );
};

export default ImageModal;
