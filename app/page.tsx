"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Marquee from "react-fast-marquee";
import { CgSpinner } from "react-icons/cg";
import axios from "axios";

export default function Home() {
  const [sponorsLoading, setSponsorsLoading] = useState(true);
  const [sponsors, setSponsors] = useState([]);
  const [sponsorsError, setSponsorsError] = useState(null);

  const [announcementsLoading, setAnnouncementsLoading] = useState(true);
  const [announcements, setAnnouncements] = useState([]);
  const [announcementsError, setAnnouncementsError] = useState(null);

  useEffect(() => {
    const fetchSponsors = async () => {
      try {
        const response = await axios.get("/api/sponsors");
        setSponsors(response.data["values"]);
      } catch (error: any) {
        setSponsorsError(error.message);
      } finally {
        setSponsorsLoading(false);
      }
    };

    const fetchAnnouncements = async () => {
      try {
        const response = await axios.get("/api/announcements");
        setAnnouncements(response.data["values"]);
      } catch (error: any) {
        setAnnouncementsError(error.message);
      } finally {
        setAnnouncementsLoading(false);
      }
    };

    fetchSponsors();
    fetchAnnouncements();
  }, []);
  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <div className="h-96 flex justify-center items-center relative overflow-hidden">
        {/* Background Image */}
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

        {/* Content */}
        <div className="z-10 text-center space-y-4 px-4">
          <h1 className="font-oswald text-white text-4xl md:text-5xl uppercase tracking-wide">
            Dublin Scioto High School Football
          </h1>
          <p className="text-white text-lg md:text-xl italic">
            Home of the Irish
          </p>

          {/* Buttons */}
          <div className="flex justify-center gap-4 mt-6">
            <Link
              href="/tickets"
              className="bg-[#014321] hover:bg-green-950 text-white font-semibold py-2 px-8 font-oswald transition duration-300 transform hover:scale-105"
            >
              BUY TICKETS
            </Link>
            <Link
              href="/about"
              className="bg-transparent border-2 font-oswald border-white hover:bg-white/20 text-white font-semibold py-2 px-8 transition duration-300 transform hover:scale-105"
            >
              LEARN MORE
            </Link>
          </div>
        </div>
      </div>
      {/* Announcements Section */}
      <div className="flex flex-col w-full py-12">
        <h2 className="text-3xl font-oswald text-[#014321] text-center">
          ANNOUNCEMENTS
        </h2>
        {announcementsLoading ? (
          <div className="h-48 flex justify-center items-center">
            <CgSpinner className="animate-spin h-8 w-8 text-[#014321]" />
          </div>
        ) : announcementsError ? (
          <p className="text-[#014321] font-oswald text-lg">
            {announcementsError}
          </p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
            {announcements.map((announcement: any) => (
              <div
                key={announcement[0]}
                className="flex flex-col justify-center items-center p-4 border-2 border-[#014321] hover:shadow-lg transform hover:scale-105 transition duration-300"
              >
                <p className="text-[#014321] font-oswald text-lg text-center">
                  {announcement[1]}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>
      {/* Sponsors */}
      <div className="flex flex-col w-full py-12">
        <h2 className="text-3xl font-oswald text-[#014321] text-center">
          OUR SPONSORS
        </h2>
        <p className="text-center text-lg font-normal text-[#014321] mt-4">
          We are grateful for the support of our sponsors. Please consider
          supporting them.
        </p>
        <div className="flex justify-center items-center mx-auto">
          {sponorsLoading ? (
            <div className="h-48 flex justify-center items-center">
              <CgSpinner className="animate-spin h-8 w-8 text-[#014321]" />
            </div>
          ) : sponsorsError ? (
            <p className="text-[#014321] font-oswald text-lg">
              {sponsorsError}
            </p>
          ) : (
            <Marquee gradient={false} speed={50}>
              {sponsors.map((sponsor: any) => (
                <Link
                  target="_self"
                  href={sponsor[3] == "https://#" ? "" : sponsor[3]}
                  key={sponsor[0]}
                >
                  <div className="mx-4 flex flex-col items-center justify-center my-10 h-48 border-2 border-[#014321] hover:shadow-lg transform hover:scale-105 transition duration-300">
                    {" "}
                    {/* Fixed height and centered content */}
                    <div className="flex items-center justify-center h-32">
                      {" "}
                      {/* Fixed height for image container */}
                      <Image
                        src={`/images/sponsors/${sponsor[4]}`}
                        alt={sponsor[0]}
                        width={200}
                        height={100}
                        className="object-contain max-h-full" /* Ensure image fits within container */
                      />
                    </div>
                    <p className="text-[#014321] font-oswald text-lg mt-2 text-center">
                      {" "}
                      {/* Centered text */}
                      {sponsor[1]}
                    </p>
                  </div>
                </Link>
              ))}
            </Marquee>
          )}
        </div>
      </div>
    </div>
  );
}
