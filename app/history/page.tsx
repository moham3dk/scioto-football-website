"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";
import Loading from "@/components/Loading";
import Error from "@/components/Error";

const tabs = ["Alumni", "Irish in the NFL", "Records and Awards", "Stats"];

const Page = () => {
  const [selectedTab, setSelectedTab] = useState("Alumni");
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
      setLoading(false);
    } else {
      setData([]);
      setLoading(false);
    }
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
        <h1 className="text-4xl font-oswald text-[#014321] text-center mb-8">
          {selectedTab.toUpperCase()}
        </h1>

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
                    className="hover:bg-gray-50 transition-colors"
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
        ) : (
          <div className="text-center text-[#014321] text-lg">
            {selectedTab} content coming soon.
          </div>
        )}
      </div>
    </div>
  );
};

export default Page;
