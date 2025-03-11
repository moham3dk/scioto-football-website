"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";
import Error from "@/components/Error";
import Loading from "@/components/Loading";
const Page = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("/api/roster");
        setData(response.data["values"]);
        setLoading(false);
      } catch (error: any) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      {error ? (
        <Error />
      ) : loading ? (
        <Loading />
      ) : (
        <div className="min-h-screen bg-white w-full flex justify-center items-center p-4">
          <div className="w-full max-w-6xl my-4 md:my-8">
            <h1 className="text-4xl font-oswald text-[#014321] text-center mb-8">
              ROSTER
            </h1>
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
                  {data.map((player, index) => (
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
                      <td className="py-2 px-4 border-b text-[#014321]">
                        {player[5]}
                      </td>
                      <td className="py-2 px-4 border-b text-[#014321]">
                        {player[6]}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Page;
