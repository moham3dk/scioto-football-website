"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";
import Error from "@/components/Error";
import Loading from "@/components/Loading";

const Page = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState<Array<Array<string | number>>>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("/api/roster");
        setData(response.data["values"]);
      } catch (err: any) {
        if (err.response?.status === 429) {
          setError(
            "It seems like we've hit a rate limit. Please try again later."
          );
        } else if (err.message) {
          setError(`An error occurred: ${err.message}`);
        } else {
          setError("An unknown error occurred while fetching the roster.");
        }
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <Loading />;
  if (error) return <Error errorMessage={error} />;

  return (
    <div className="min-h-screen bg-white w-full flex justify-center items-center p-4">
      <div className="w-full max-w-6xl mb-4 md:mb-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-[#014321] mb-4 font-oswald">
            ROSTER
          </h1>
          <div className="w-24 h-1 bg-[#014321] mx-auto"></div>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border border-[#014321]">
            <thead>
              <tr className="bg-[#014321] text-white">
                <th className="py-3 px-4 border-b text-left">#</th>
                <th className="py-3 px-4 border-b text-left">First Name</th>
                <th className="py-3 px-4 border-b text-left">Last Name</th>
                <th className="py-3 px-4 border-b text-left">Grade</th>
                <th className="py-3 px-4 border-b text-left">Height</th>
                <th className="py-3 px-4 border-b text-left">Weight</th>
                <th className="py-3 px-4 border-b text-left">Position</th>
              </tr>
            </thead>
            <tbody>
              {data.map((player: Array<string | number>, index) => (
                <tr key={index} className="hover:bg-gray-300 transition-colors">
                  {player.map((item: string | number, i: number) => (
                    <td key={i} className="py-2 px-4 border-b text-[#014321]">
                      {item}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Page;
