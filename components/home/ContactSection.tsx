"use client";
import React from "react";
import Link from "next/link";

const ContactSection: React.FC = () => {
  return (
    <div className="flex flex-col w-full py-12 bg-[#014321] items-center">
      <h2 className="text-3xl font-oswald text-white text-center mb-6">
        CONTACT US
      </h2>
      <p className="text-white font-oswald text-lg text-center">
        For any questions or inquiries, feel free to contact us below.
      </p>
      <Link href="/contact">
        <button className="bg-white hover:bg-gray-300 text-[#014321] py-2 px-8 font-oswald mt-4 transition duration-300 transform hover:scale-105">
          CONTACT US
        </button>
      </Link>
    </div>
  );
};

export default ContactSection;
