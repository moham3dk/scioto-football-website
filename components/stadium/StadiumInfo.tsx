import React from "react";

interface StadiumInfoProps {
  info: { label: string; value: string | React.ReactNode }[];
}

const StadiumInfo = ({ info }: StadiumInfoProps) => {
  return (
    <div className="overflow-x-auto bg-white border border-[#014321] p-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {info.map((item, index) => (
          <div key={index} className="flex flex-col">
            <span className="font-semibold text-[#014321]">{item.label}</span>
            <span className="text-[#014321]">{item.value}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StadiumInfo;
