import React from "react";

type ScheduleRow = Array<string | number>;

interface ScheduleCardProps {
  row: ScheduleRow;
  isNextGame: boolean;
}

const ScheduleCard: React.FC<ScheduleCardProps> = ({ row, isNextGame }) => (
  <div
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
    <p className="text-sm">
      Where: {row[6] === "H" ? "Home" : `Away (${row[3]})`}
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

export default ScheduleCard;
