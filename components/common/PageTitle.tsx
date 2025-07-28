import React from "react";

const PageTitle = ({ title }: { title: string }) => {
  return (
    <div className="text-center mb-12">
      <h1 className="text-4xl md:text-5xl font-bold text-[#014321] mb-4 font-oswald uppercase">
        {title}
      </h1>
      <div className="w-24 h-1 bg-[#014321] mx-auto"></div>
    </div>
  );
};

export default PageTitle;
