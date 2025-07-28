import React from "react";
import Image from "next/image";
import Link from "next/link";

const HeroSection = () => {
  return (
    <div className="h-96 flex justify-center items-center relative overflow-hidden">
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
          Dublin Scioto High School Football
        </h1>
        <p className="text-white text-lg md:text-xl italic">
          Home of the Irish
        </p>

        <div className="flex justify-center gap-4 mt-6">
          <Link
            href="https://scioto.dublinschools.net/scioto-high-school/event-tickets"
            className="bg-[#014321] hover:bg-green-950 text-white font-semibold py-2 px-8 font-oswald transition duration-300 transform hover:scale-105"
          >
            BUY TICKETS
          </Link>
          <Link
            href="/schedule"
            className="bg-transparent border-2 font-oswald border-white hover:bg-white/20 text-white font-semibold py-2 px-8 transition duration-300 transform hover:scale-105"
          >
            VIEW SCHEDULE
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
