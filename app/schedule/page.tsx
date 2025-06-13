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
        <h1 className="text-4xl font-oswald text-[#014321] text-center mb-8">
          {selectedTab.toUpperCase()} SCHEDULE
        </h1>

        {loading ? (
          <Loading />
        ) : error ? (
          <Error errorMessage={error} />
        ) : (
          <div className="grid grid-cols-2 gap-6 w-full max-w-6xl font-oswald ">
            {rows.map((row, idx) => (
              <div
                key={idx}
                className="border border-[#014321] text-[#014321] shadow-md p-4"
              >
                <h2 className="text-xl uppercase mb-2">Scioto vs. {row[3]}</h2>
                <p className="text-sm">When: {row[7]}</p>
                <p className="text-sm">
                  Where: {row[6] === "H" ? "Home" : "Away"}
                </p>
                {row[8] && <p className="text-sm">Event: {row[8]}</p>}
                {row[1] && row[2] && row[4] && (
                  <p className="text-sm font-extrabold">
                    Score: {row[1]} - {row[2]} ({row[4]})
                  </p>
                )}

                {row[10] && (
                  <a
                    href={row[10].toString()}
                    className="text-sm text-blue-500 underline mt-2 inline-block"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    MaxPreps Link
                  </a>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Page;
