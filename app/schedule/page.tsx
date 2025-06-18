"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Loading from "@/components/Loading";
import Error from "@/components/Error";

const tabs = ["Varsity", "JV", "Freshmen"];

const Page = () => {
  const [selectedTab, setSelectedTab] = useState("Varsity");
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState<Array<Array<string | number>>>([]);
  const [schedule, setScheduleData] = useState<Array<Array<string | number>>>(
    []
  );
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchSchedule = async () => {
      setLoading(true);
      try {
        let endpoint = "/api/schedule/varsity";
        if (selectedTab === "JV") endpoint = "/api/schedule/jv";
        else if (selectedTab === "Freshmen")
          endpoint = "/api/schedule/freshman";

        const response = await axios.get(endpoint);
        setScheduleData(response.data["values"]);
        setError(null);
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
      } finally {
        setLoading(false);
      }
    };

    fetchSchedule();
  }, [selectedTab]);

  const rows = schedule || [];

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
            {selectedTab.toUpperCase()} SCHEDULE
          </h1>
          <div className="w-24 h-1 bg-[#014321] mx-auto"></div>
        </div>

        {loading ? (
          <Loading />
        ) : error ? (
          <Error errorMessage={error} />
        ) : (
          <div className="grid grid-cols-2 gap-6 w-full max-w-6xl font-oswald ">
            {rows
              .filter((row) => row[7] > new Date().toISOString().split("T")[0])

              .map((row, idx) => {
                const isNextGame = idx == 0;
                return (
                  <div
                    key={idx}
                    className={`border text-[#014321] shadow-md p-4 ${
                      isNextGame
                        ? "bg-[#014321] border-2 border-[#014321] text-white"
                        : "bg-white border-[#014321]"
                    }`}
                  >
                    <h2 className="text-xl uppercase mb-2">
                      Scioto vs. {row[3]}{" "}
                      {isNextGame && (
                        <span className="ml-2 bg-white text-[#014321] px-2 py-0.5 rounded text-xs">
                          Next Game
                        </span>
                      )}
                    </h2>
                    <p className="text-sm">When: {row[7]}</p>
                    <p className="text-sm">Where: {row[6] === "H" ? "Home" : `Away (${row[3]})`}</p>

                    {row[8] && <p className="text-sm">Event: {row[8]}</p>}
                    {row[1] && row[2] && row[4] && (
                      <p className="text-sm font-extrabold">
                        Score: {row[1]} - {row[2]} ({row[4]})
                      </p>
                    )}
                    {row[10] && (
                      <a
                        href={row[10].toString()}
                        className={`text-sm underline mt-2 inline-block ${
                          isNextGame ? "text-white" : "text-blue-500"
                        }`}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        MaxPreps Link
                      </a>
                    )}
                  </div>
                );
              })}
          </div>
        )}
      </div>
    </div>
  );
};

export default Page;
