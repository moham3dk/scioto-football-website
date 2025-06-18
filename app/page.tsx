"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Marquee from "react-fast-marquee";
import { CgSpinner } from "react-icons/cg";
import axios from "axios";
import dynamic from "next/dynamic";

const FacebookEmbed = dynamic(
  () => import("react-social-media-embed").then((mod) => mod.FacebookEmbed),
  { ssr: false }
);
const InstagramEmbed = dynamic(
  () => import("react-social-media-embed").then((mod) => mod.InstagramEmbed),
  { ssr: false }
);
const XEmbed = dynamic(
  () => import("react-social-media-embed").then((mod) => mod.XEmbed),
  { ssr: false }
);

export default function Home() {
  const [sponorsLoading, setSponsorsLoading] = useState(true);
  const [sponsors, setSponsors] = useState([]);
  const [sponsorsError, setSponsorsError] = useState<string | null>(null);

  const [announcementsLoading, setAnnouncementsLoading] = useState(true);
  const [announcements, setAnnouncements] = useState([]);
  const [announcementsError, setAnnouncementsError] = useState<string | null>(
    null
  );

  useEffect(() => {
    const fetchSponsors = async () => {
      try {
        const response = await axios.get("/api/sponsors");
        setSponsors(response.data["values"]);
      } catch (error: any) {
        if (error.response?.status === 429) {
          setSponsorsError(
            "It seems like we've hit a rate limit. Please try again later."
          );
        } else if (error.message) {
          setSponsorsError(`An error occurred: ${error.message}`);
        } else {
          setSponsorsError(
            "An unknown error occurred while fetching sponsors."
          );
        }
      } finally {
        setSponsorsLoading(false);
      }
    };

    const fetchAnnouncements = async () => {
      try {
        const response = await axios.get("/api/announcements");
        setAnnouncements(response.data["values"]);
      } catch (error: any) {
        if (error.response?.status === 429) {
          setAnnouncementsError(
            "It seems like we've hit a rate limit. Please try again later."
          );
        } else if (error.message) {
          setAnnouncementsError(`An error occurred: ${error.message}`);
        } else {
          setAnnouncementsError(
            "An unknown error occurred while fetching announcements."
          );
        }
      } finally {
        setAnnouncementsLoading(false);
      }
    };

    fetchSponsors();
    fetchAnnouncements();
  }, []);

  return (
    <div className="bg-white min-h-screen max-w-screen">
      {/* Hero Section */}
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
      {/* Announcements */}
      <div className="flex flex-col w-full py-8 bg-white items-center">
        <h2 className="text-3xl font-oswald text-[#014321] text-center mb-6">
          ANNOUNCEMENTS
        </h2>
        {announcementsLoading ? (
          <div className="h-48 flex justify-center items-center">
            <CgSpinner className="animate-spin h-8 w-8 text-[#014321]" />
          </div>
        ) : announcementsError ? (
          <p className="text-red-600 font-oswald text-lg">
            {announcementsError}
          </p>
        ) : (
          <div className="flex flex-wrap justify-center gap-6 w-full max-w-6xl">
            {announcements.map(
              (announcement: any, index: number) =>
                announcement.length > 0 &&
                announcement[0] != "" &&
                announcement[3] &&
                new Date(announcement[3]) > new Date(Date.now()) && (
                  <div
                    key={index}
                    className="flex flex-col items-center p-6 border-2 border-[#014321] hover:shadow-lg transition duration-300 bg-white mx-4 w-96 h-64"
                  >
                    <p className="text-[#014321] font-oswald text-lg text-center my-auto overflow-hidden whitespace-nowrap text-ellipsis w-full">
                      {announcement[0]}
                    </p>

                    <p className="text-[#014321] font-oswald text-sm text-center mt-2 my-auto line-clamp-3">
                      {announcement[1]}
                    </p>

                    {announcement[4] && (
                      <a
                        href={announcement[4]}
                        target="_self"
                        rel="noopener noreferrer"
                        className="mt-4 px-6 py-2 bg-[#014321] text-white font-oswald text-sm hover:bg-[#012a1a] transition duration-300"
                      >
                        SEE MORE
                      </a>
                    )}
                  </div>
                )
            )}
          </div>
        )}
      </div>
      {/* Social Media */}
      <div className="flex flex-col w-full py-12 bg-[#014321]">
        <h2 className="text-3xl font-oswald text-white text-center">
          WHAT'S NEW
        </h2>
        <p className="text-center text-lg font-oswald text-white mt-4">
          Stay updated with the latest news and events on our social media
          channels.
        </p>
        <div className="flex flex-col md:flex-row flex-wrap justify-center items-center gap-4 p-4 w-full">
          {/* Facebook Embed */}
          <div className="w-full md:w-[calc(33%-1rem)] min-w-[300px] max-w-[90vw] h-[500px] md:h-[700px]">
            <FacebookEmbed
              url="https://www.facebook.com/DublinSciotoIrishFootball/posts/107651307709133"
              width="100%"
              height="100%"
            />
          </div>

          {/* Instagram Embed */}
          <div className="w-full md:w-[calc(33%-1rem)] min-w-[300px] max-w-[90vw] h-[500px] md:h-[700px]">
            <InstagramEmbed
              url="https://www.instagram.com/dshsirishfootball/p/DG4BydaSGGh"
              width="100%"
              height="100%"
            />
          </div>

          {/* Twitter (X) Embed */}
          <div className="w-full md:w-[calc(33%-1rem)] min-w-[300px] max-w-[90vw] h-[500px] md:h-[700px]">
            <XEmbed
              url="https://x.com/sciotofootball/status/1896940453758726294"
              width="100%"
              height="100%"
            />
          </div>
        </div>
      </div>

      {/* Sponsors */}
      <div className="flex flex-col w-full py-12 bg-white]">
        <h2 className="text-3xl font-oswald text-[#014321] text-center">
          OUR SPONSORS
        </h2>
        <p className="text-center text-lg font-oswald text-[#014321] mt-4">
          We are grateful for the support of our sponsors. Please consider
          supporting them.
        </p>
        <div className="flex justify-center items-center mx-auto">
          {sponorsLoading ? (
            <div className="h-48 flex justify-center items-center">
              <CgSpinner className="animate-spin h-8 w-8 text-[#014321]" />
            </div>
          ) : sponsorsError ? (
            <p className="text-red-600 font-oswald text-lg">
              {sponsorsError}
            </p>
          ) : (
            <Marquee gradient={false} speed={50} className="max-w-screen">
              {sponsors.map((sponsor: any) => (
                <Link
                  target="_self"
                  href={sponsor[3] == "https://#" ? "" : sponsor[3]}
                  key={sponsor[0]}
                >
                  <div className="flex flex-col items-center justify-center mx-4 my-10 h-48 border-2 bg-[#014321] hover:shadow-lg transform hover:scale-105 transition duration-300">
                    {" "}
                    <div className="flex items-center justify-center h-32">
                      {" "}
                      <Image
                        src={`/images/sponsors/${sponsor[4]}`}
                        alt={sponsor[0]}
                        width={200}
                        height={100}
                        className="object-contain max-h-full"
                      />
                    </div>
                    <p className="text-white font-oswald text-lg mt-2 text-center">
                      {sponsor[1]}
                    </p>
                  </div>
                </Link>
              ))}
            </Marquee>
          )}
        </div>
      </div>
      {/* Contact */}
      <div className="flex flex-col w-full py-12 bg-[#014321] items-center">
        <h2 className="text-3xl font-oswald text-white text-center mb-6">
          CONTACT US
        </h2>
        <p className="text-white font-oswald text-lg text-center">
          For any questions or inquiries, feel free to contact us below.
        </p>
        <Link href="/contact">
          <button className="bg-white hover:bg-gray-300 text-[#014321] py-2 px-8 font-oswald mt-4 transition duration-300 transform hover:scale-105">
            CONTACT US
          </button>
        </Link>
      </div>
    </div>
  );
}
