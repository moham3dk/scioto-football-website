"use client";
import React from "react";

const links = [
  {
    name: "Dublin Scioto High School",
    url: "https://www.dublinschools.net/Scioto",
    description:
      "Official website of Dublin Scioto High School. Includes academic and student info.",
  },
  {
    name: "Dublin City Schools",
    url: "http://www.dublinschools.net/",
    description:
      "District-wide info for Dublin City Schools including calendars, news, and resources.",
  },
  {
    name: "OHSAA (Ohio High School Athletic Association)",
    url: "http://www.ohsaa.org/",
    description:
      "Governing body for Ohio high school sports with rules, rankings, and updates.",
  },
  {
    name: "Ohio Helmet Project",
    url: "http://www.ohiohelmetproject.com/",
    description:
      "Visual archive of football helmets for teams across Ohio, updated regularly.",
  },
  {
    name: "ThisWeek News",
    url: "http://www.thisweeknews.com/",
    description:
      "Local news and sports coverage including high school athletics.",
  },
  {
    name: "OHSAA Football Page",
    url: "http://www.ohsaa.org/sports/football",
    description:
      "Dedicated page for football rules, schedules, and playoff info from OHSAA.",
  },
  {
    name: "Dublin Football",
    url: "http://www.dublinfootball.org/",
    description:
      "Home for all things Dublin Football — schedules, updates, and player info.",
  },
  {
    name: "JJ Huddle (Archived)",
    url: "http://www.jjhuddle.com/",
    description:
      "Archived Ohio HS sports site with historical articles and forums.",
  },
  {
    name: "Yappi Sports",
    url: "http://www.yappi.com/",
    description:
      "High school sports scores, forums, and rankings for Ohio schools.",
  },
  {
    name: "Joe Eitel Rankings",
    url: "http://www.joeeitel.com/hsfoot/",
    description:
      "Official OHSAA computer points rankings used for playoff qualification.",
  },
  {
    name: "OCC Athletics",
    url: "http://occathletics.org/",
    description:
      "Official site for the Ohio Capital Conference — league standings and schedules.",
  },
  {
    name: "Google Sheet – Team Stats & Info",
    url: "https://docs.google.com/spreadsheets/d/1Qwtsk86v_acr-za_3G1c-dWAnwMXnXKUYkbwQfxvEzo/edit#gid=0",
    description:
      "Live-updated spreadsheet with team stats, schedules, and more.",
  },
];

const Page = () => {
  return (
    <div className="min-h-screen bg-white px-4 py-8">
      <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-[#014321] mb-4 font-oswald">
            RESOURCES & LINKS
          </h1>
          <div className="w-24 h-1 bg-[#014321] mx-auto"></div>
        </div>
      <div className="max-w-5xl mx-auto grid gap-6 sm:grid-cols-1 md:grid-cols-2">
        {links.map((link, index) => (
          <a
            key={index}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="block border border-[#014321] p-4 shadow hover:shadow-lg transition duration-300"
          >
            <h2 className="text-lg font-semibold text-[#014321] mb-2">
              {link.name}
            </h2>
            <p className="text-sm text-gray-600">{link.description}</p>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Page;
