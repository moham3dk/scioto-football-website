import React from "react";

interface LinkCardProps {
  name: string;
  url: string;
  description: string;
}

const LinkCard: React.FC<LinkCardProps> = ({ name, url, description }) => (
  <a
    href={url}
    target="_blank"
    rel="noopener noreferrer"
    className="block border border-[#014321] p-4 shadow hover:shadow-lg transition duration-300"
  >
    <h2 className="text-lg font-semibold text-[#014321] mb-2">{name}</h2>
    <p className="text-sm text-gray-600">{description}</p>
  </a>
);

export default LinkCard;
