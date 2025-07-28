"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Loading from "@/components/common/Loading";
import Error from "@/components/common/Error";
import PageTitle from "@/components/common/PageTitle";
import Tabs from "@/components/common/Tabs";
import ScheduleCard from "@/components/schedule/ScheduleCard";

const tabs = ["Varsity", "JV", "Freshmen"];

type ScheduleRow = Array<string | number>;

const Page = () => {
  const [selectedTab, setSelectedTab] = useState("Varsity");
  const [loading, setLoading] = useState(true);
  const [schedule, setScheduleData] = useState<ScheduleRow[]>([]);
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

  // Filter out past games
  const rows = schedule.filter(
    (row) => row[7] > new Date().toISOString().split("T")[0]
  );

  return (
    <div className="min-h-screen bg-white w-full flex flex-col items-center p-4">
      <div className="w-full max-w-6xl">
        <PageTitle title={`${selectedTab} Schedule`} />

        <div className="w-full max-w-6xl mb-12 -mt-6">
          <Tabs
            tabs={tabs}
            selectedTab={selectedTab}
            onSelectTab={setSelectedTab}
          />
        </div>

        {loading ? (
          <Loading />
        ) : error ? (
          <Error errorMessage={error} />
        ) : (
          <div className="grid grid-cols-2 gap-6 w-full max-w-6xl font-oswald ">
            {rows.map((row, idx) => (
              <ScheduleCard key={idx} row={row} isNextGame={idx === 0} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Page;