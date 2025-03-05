"use client";
import Link from "next/link";
import React, { useState } from "react";
import { FaInstagram, FaFacebook, FaTwitter } from "react-icons/fa";
import { LiaTimesSolid, LiaBarsSolid } from "react-icons/lia";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navLinks = [
    { name: "HOME", href: "#" },
    { name: "ABOUT", href: "#" },
    { name: "ROSTER", href: "#" },
    { name: "COACHES", href: "#" },
    { name: "SCHEDULE", href: "#" },
    { name: "STADIUM", href: "#" },
    { name: "MEDIA", href: "#" },
    { name: "SHOP", href: "#" },
    { name: "LINKS", href: "#" },
    { name: "CONTACT", href: "#" },
  ];

  return (
    <nav>
      <div className="flex justify-center items-center h-16 md:h-12 bg-white text-black relative font-oswald text-center">
        <div className="flex justify-between items-center w-[65%]">
          <Link href="/">
            <div className="flex space-x-4">
              <img src="/images/logo.png" alt="logo" className="h-8 w-8" />
              <h1 className="text-2xl font-normal font-oswald text-[#014321]">
                SCIOTO FOOTBALL
              </h1>
            </div>
          </Link>
          <h2 className="hidden md:block text-lg font-normal text-[#014321]">
            TRUST - COMMITMENT - LOVE - BELIEF
          </h2>
          <div className="md:hidden flex items-center">
            <button onClick={handleMenu} className="text-3xl text-[#014321]">
              {isOpen ? <LiaTimesSolid /> : <LiaBarsSolid />}
            </button>
          </div>
        </div>
      </div>
      <div className="hidden md:flex justify-center items-center h-14 bg-[#014321] text-white relative">
        <div className="flex justify-between items-center w-[75%]">
          <div className="flex space-x-4 font-oswald">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-lg font-normal hover:text-gray-400 transition-colors duration-300"
              >
                {link.name}
              </a>
            ))}
          </div>
          <div className="flex space-x-4">
            <a
              href="#"
              className="text-2xl md:text-4xl font-normal hover:text-gray-400 transition-colors duration-300"
            >
              <FaInstagram />
            </a>
            <a
              href="#"
              className="text-2xl md:text-4xl font-normal hover:text-gray-400 transition-colors duration-300"
            >
              <FaFacebook />
            </a>
            <a
              href="#"
              className="text-2xl md:text-4xl font-normal hover:text-gray-400 transition-colors duration-300"
            >
              <FaTwitter />
            </a>
          </div>
        </div>
      </div>
      {/* Mobile Menu */}
      <div
        className={`md:hidden z-50 fixed top-0 w-screen h-screen bg-[#014321] text-white text-center transition-all ease-in-out duration-300 ${
          isOpen ? "left-0" : "-left-full"
        }`}
      >
        <div className="flex w-full justify-end items-center">
          <button onClick={handleMenu} className="text-3xl text-white p-4">
            {isOpen ? <LiaTimesSolid /> : <LiaBarsSolid />}
          </button>
        </div>
        <div className="flex flex-col items-center justify- h-screen">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-xl font-normal font-oswald hover:text-green-950 transition-colors duration-300 pb-10 sm:pb-12"
            >
              {link.name}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
