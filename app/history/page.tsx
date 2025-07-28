"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";
import Loading from "@/components/common/Loading";
import Error from "@/components/common/Error";
import PageTitle from "@/components/common/PageTitle";
import Tabs from "@/components/common/Tabs";
import AlumniTable from "@/components/history/AlumniTable";
import NFLPlayerCard from "@/components/history/NFLPlayerCard";

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
  const [alumniData, setAlumniData] = useState<Array<Array<string | number>>>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchAlumni = async () => {
      try {
        const response = await axios.get("/api/alumni");
        setAlumniData(response.data["values"]);
      } catch (err: any) {
        if (err.response?.status === 429) {
          setError("It seems like we've hit a rate limit. Please try again later.");
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
      <div className="w-full max-w-6xl">
        <PageTitle title={`${selectedTab} Information`} />

        <div className="w-full max-w-6xl mb-12 -mt-6">
          <div className="flex justify-center gap-2 flex-wrap">
            <Tabs
              tabs={tabs}
              selectedTab={selectedTab}
              onSelectTab={setSelectedTab}
            />
          </div>
        </div>

        {loading ? (
          <Loading />
        ) : error ? (
          <Error errorMessage={error} />
        ) : selectedTab === "Alumni" ? (
          <AlumniTable data={data} />
        ) : selectedTab === "Irish in the NFL" ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {nflPlayers.map((player, idx) => (
              <NFLPlayerCard key={idx} player={player} />
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
