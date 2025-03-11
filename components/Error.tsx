import React from "react";
import Link from "next/link";

const Error = () => {
  return (
    <div className="bg-white min-h-screen max-w-screen flex justify-center items-center">
      <div className="text-center space-y-6 px-4 -mt-[10%]">
        <h1 className="font-oswald text-[#014321] text-6xl md:text-8xl lg:text-9xl uppercase tracking-wide animate-bounce">
          UH OH!
        </h1>
        <h2 className="font-oswald text-[#014321] text-xl md:text-2xl lg:text-3xl italic">
          We ran into an unexpected error. Let's get you back on track.
        </h2>
        <Link
          href="/"
          className="inline-block bg-[#014321] hover:bg-green-950 text-white font-semibold py-3 px-8 mt-2 font-oswald transition duration-300 transform hover:scale-105"
        >
          GO HOME
        </Link>
      </div>
    </div>
  );
};

export default Error;
