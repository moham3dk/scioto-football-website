import React from "react";
import { CgSpinner } from "react-icons/cg";
const Loading = () => {
  return (
    <div className="bg-white h-screen flex justify-center items-center">
      <CgSpinner className="text-[#014321] text-6xl animate-spin" />
    </div>
  );
};

export default Loading;
