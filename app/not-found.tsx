"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="bg-white min-h-screen max-w-screen">
      <div className="min-h-screen flex justify-center items-center relative overflow-hidden">
        <div className="absolute inset-0 w-full h-full">
          <Image
            src="/images/team.jpeg"
            alt="Team Background"
            fill
            style={{ objectFit: "cover", opacity: 0.9 }}
            quality={75}
            priority
          />
          <div className="absolute inset-0 backdrop-filter backdrop-blur-md bg-black/30"></div>
        </div>

        <div className="z-10 text-center space-y-4 px-4">
          <h1 className="font-oswald text-white text-4xl md:text-5xl uppercase tracking-wide">
            404 - Page Not Found
          </h1>
          <p className="text-white text-lg md:text-xl italic">
            Oops! The page you're looking for doesn't exist.
          </p>

          <div className="flex justify-center mt-6">
            <Link
              href="/"
              className="bg-[#014321] hover:bg-green-950 text-white font-semibold py-2 px-8 font-oswald transition duration-300 transform hover:scale-105"
            >
              GO HOME
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
