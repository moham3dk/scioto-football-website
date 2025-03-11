import React from "react";

const Page = () => {
  return (
    <div className="bg-white min-h-screen flex flex-col justify-center py-4 px-4 md:px-12">
      <h1 className="text-4xl font-oswald text-[#014321] text-center my-8">
        SCHEDULE
      </h1>
      <iframe
        src="https://calendar.google.com/calendar/embed?height=1200&amp;wkst=1&amp;bgcolor=%23ffffff&amp;ctz=America%2FNew_York&amp;src=NXVvdjc2b2E4cTVkazJ2dG0zYnMzZGd0cGNAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&amp;color=%230B8043"
        className="google-calendar w-full h-full min-h-[90vh] border-none mb-8"
      ></iframe>
    </div>
  );
};

export default Page;