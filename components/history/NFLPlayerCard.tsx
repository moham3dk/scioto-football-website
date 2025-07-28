// components/history/NFLPlayerCard.tsx
import React from "react";

interface NFLPlayer {
  name: string;
  position: string;
  teams: string;
  years: string;
  img: string;
  pfr: string;
  wiki: string;
}

const NFLPlayerCard: React.FC<{ player: NFLPlayer }> = ({ player }) => (
  <div className="border border-[#014321] p-4 hover:bg-gray-300 transition-colors">
    <img
      src={player.img}
      alt={player.name}
      className="w-full h-60 object-cover mb-4"
    />
    <h2 className="text-2xl font-bold text-[#014321]">
      <a href={player.pfr} target="_blank" rel="noopener noreferrer">
        {player.name}
      </a>
    </h2>
    <ul className="text-[#014321] mt-2 space-y-1">
      <li>
        <strong>Position:</strong> {player.position}
      </li>
      <li>
        <strong>Teams:</strong> {player.teams}
      </li>
      <li>
        <strong>Years:</strong> {player.years}
      </li>
      <li>
        <a
          href={player.wiki}
          className="text-blue-600 underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          Wikipedia
        </a>
      </li>
    </ul>
  </div>
);

export default NFLPlayerCard;
