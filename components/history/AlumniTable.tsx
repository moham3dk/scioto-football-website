import React from "react";

interface AlumniTableProps {
  data: Array<Array<string | number>>;
}

const AlumniTable: React.FC<AlumniTableProps> = ({ data }) => (
  <div className="overflow-x-auto mb-6">
    <table className="min-w-full bg-white border border-[#014321]">
      <thead>
        <tr className="bg-[#014321] text-white">
          <th className="py-3 px-4 border-b text-left">#</th>
          <th className="py-3 px-4 border-b text-left">First Name</th>
          <th className="py-3 px-4 border-b text-left">Last Name</th>
          <th className="py-3 px-4 border-b text-left">Grad Year</th>
          <th className="py-3 px-4 border-b text-left">Position</th>
        </tr>
      </thead>
      <tbody>
        {data.map((player: Array<string | number>, index) => (
          <tr key={index} className="hover:bg-gray-300 transition-colors">
            <td className="py-2 px-4 border-b text-[#014321]">{player[0]}</td>
            <td className="py-2 px-4 border-b text-[#014321]">{player[1]}</td>
            <td className="py-2 px-4 border-b text-[#014321]">{player[2]}</td>
            <td className="py-2 px-4 border-b text-[#014321]">{player[3]}</td>
            <td className="py-2 px-4 border-b text-[#014321]">{player[4]}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

export default AlumniTable;
