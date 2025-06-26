"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";
import Loading from "@/components/Loading";
import Error from "@/components/Error";

const tabs = ["History", "Alumni", "Irish in the NFL", "Records and Awards"];

const nflPlayers = [
  {
    name: "Bradley McDougald",
    position: "FS",
    teams: "TAM, KAN, SEA, NYJ, TEN, JAX",
    years: "2013 - 2021",
    img: "https://www.pro-football-reference.com/req/20230307/images/headshots/McDoBr01_2019.jpg",
    pfr: "https://www.pro-football-reference.com/players/M/McDoBr01.htm",
    wiki: "https://en.wikipedia.org/wiki/Bradley_McDougald",
  },
  {
    name: "Jay Richardson",
    position: "DE",
    teams: "AK, SEA, NOR",
    years: "2007 - 2013",
    img: "https://www.pro-football-reference.com/req/20230307/images/headshots/RichJa99_2019.jpg",
    pfr: "https://www.pro-football-reference.com/players/R/RichJa99.htm",
    wiki: "https://en.wikipedia.org/wiki/Jay_Richardson",
  },
  {
    name: "Nick Goings",
    position: "RB",
    teams: "CAR",
    years: "2001 - 2008",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ee/Nick_Goings_in_2006.jpg/440px-Nick_Goings_in_2006.jpg",
    pfr: "https://www.pro-football-reference.com/players/G/GoinNi00.htm",
    wiki: "https://en.wikipedia.org/wiki/Nick_Goings",
  },
  {
    name: "Deji Olatoye",
    position: "CB",
    teams: "DAL, ATL",
    years: "2016 - 2017",
    img: "https://a.espncdn.com/combiner/i?img=/i/headshots/nfl/players/full/17224.png&w=350&h=254",
    pfr: "https://www.espn.com/nfl/player/_/id/17224/deji-olatoye",
    wiki: "https://en.wikipedia.org/wiki/Deji_Olatoye",
  },
];

const Page = () => {
  const [selectedTab, setSelectedTab] = useState("History");
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState<Array<Array<string | number>>>([]);
  const [alumniData, setAlumniData] = useState<Array<Array<string | number>>>(
    []
  );
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchAlumni = async () => {
      try {
        const response = await axios.get("/api/alumni");
        setAlumniData(response.data["values"]);
      } catch (err: any) {
        if (err.response?.status === 429) {
          setError(
            "It seems like we've hit a rate limit. Please try again later."
          );
        } else if (err.message) {
          setError(`An error occurred: ${err.message}`);
        } else {
          setError("An unknown error occurred.");
        }
      }
    };
    fetchAlumni();
  }, []);

  useEffect(() => {
    setLoading(true);
    setError(null);

    if (selectedTab === "Alumni") {
      setData(alumniData);
    } else {
      setData([]);
    }

    setLoading(false);
  }, [selectedTab, alumniData]);

  return (
    <div className="min-h-screen bg-white w-full flex flex-col items-center p-4">
      <div className="w-full max-w-6xl mb-6">
        <div className="flex justify-center gap-2 flex-wrap">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setSelectedTab(tab)}
              className={`px-4 py-2 border-2 font-oswald uppercase transition-all ${
                selectedTab === tab
                  ? "bg-[#014321] text-white border-[#014321]"
                  : "bg-white text-[#014321] border-[#014321] hover:bg-[#014321] hover:text-white"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      <div className="w-full max-w-6xl">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-[#014321] mb-4 font-oswald">
            {selectedTab.toUpperCase()}
          </h1>
          <div className="w-24 h-1 bg-[#014321] mx-auto"></div>
        </div>

        {loading ? (
          <Loading />
        ) : error ? (
          <Error errorMessage={error} />
        ) : selectedTab === "Alumni" ? (
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white border border-[#014321]">
              <thead>
                <tr className="bg-[#014321] text-white">
                  <th className="py-3 px-4 border-b text-left">#</th>
                  <th className="py-3 px-4 border-b text-left">First Name</th>
                  <th className="py-3 px-4 border-b text-left">Last Name</th>
                  <th className="py-3 px-4 border-b text-left">Grad Year</th>
                  <th className="py-3 px-4 border-b text-left">Position</th>
                </tr>
              </thead>
              <tbody>
                {data.map((player: Array<string | number>, index) => (
                  <tr
                    key={index}
                    className="hover:bg-gray-300 transition-colors"
                  >
                    <td className="py-2 px-4 border-b text-[#014321]">
                      {player[0]}
                    </td>
                    <td className="py-2 px-4 border-b text-[#014321]">
                      {player[1]}
                    </td>
                    <td className="py-2 px-4 border-b text-[#014321]">
                      {player[2]}
                    </td>
                    <td className="py-2 px-4 border-b text-[#014321]">
                      {player[3]}
                    </td>
                    <td className="py-2 px-4 border-b text-[#014321]">
                      {player[4]}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : selectedTab === "Irish in the NFL" ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {nflPlayers.map((player, idx) => (
              <div
                key={idx}
                className="border border-[#014321] p-4 hover:bg-gray-300 transition-colors"
              >
                <img
                  src={player.img}
                  alt={player.name}
                  className="w-full h-60 object-cover mb-4"
                />
                <h2 className="text-2xl font-bold text-[#014321]">
                  <a
                    href={player.pfr}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {player.name}
                  </a>
                </h2>
                <ul className="text-[#014321] mt-2 space-y-1">
                  <li>
                    <strong>Position:</strong> {player.position}
                  </li>
                  <li>
                    <strong>Teams:</strong> {player.teams}
                  </li>
                  <li>
                    <strong>Years:</strong> {player.years}
                  </li>
                  <li>
                    <a
                      href={player.wiki}
                      className="text-blue-600 underline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Wikipedia
                    </a>
                  </li>
                </ul>
              </div>
            ))}
          </div>
        ) : selectedTab === "Records and Awards" ? (
          <iframe
            className="w-full h-[800px] border-2 border-[#014321]"
            src="https://docs.google.com/spreadsheets/d/e/2PACX-1vSm3nUkjyx6FiyWzJiIx3sHsp3r5MBrBzDyzcpP-smmT618lfyQ9Yc5VHX78EokVdhG-3flXG4mFY7_/pubhtml?widget=true&amp;headers=false"
            title="Records and Awards"
          ></iframe>
        ) : (
          <iframe
            className="w-full h-[800px] border-2 border-[#014321]"
            src="https://fourseasonsfootball.com/Ohio%20Web/Dublin%20Scioto.htm"
            title="Dublin Scioto Football History"
          ></iframe>
        )}
      </div>
    </div>
  );
};

export default Page;