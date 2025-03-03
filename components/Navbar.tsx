"use client";
import { link } from "fs";
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
    { name: "ALUMNI", href: "#" },
    { name: "SPONSORS", href: "#" },
    { name: "LINKS", href: "#" },
    { name: "CONTACT", href: "#" },
  ];

  return (
    <nav>
      <div className="flex justify-center items-center h-16 md:h-10 bg-white text-black relative font-oswald text-center">
        <div className="flex justify-between items-center w-[65%]">
          <div className="flex space-x-4">
            <img src="/images/logo.png" alt="logo" className="h-8 w-8" />
            <h1 className="text-xl font-normal font-oswald text-[#014321]">
              SCIOTO FOOTBALL
            </h1>
          </div>
          <h2 className="hidden md:block text-md font-normal text-[#014321]">
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
                className="text-md font-normal"
              >
                {link.name}
              </a>
            ))}
          </div>
          <div className="flex space-x-4">
            <a href="#" className="text-2xl md:text-4xl font-normal">
              <FaInstagram />
            </a>
            <a href="#" className="text-2xl md:text-4xl font-normal">
              <FaFacebook />
            </a>
            <a href="#" className="text-2xl md:text-4xl font-normal">
              <FaTwitter />
            </a>
          </div>
        </div>
      </div>
      {/* Mobile Menu */}
      <div
        className={`md:hidden absolute top-0 w-screen h-screen bg-[#014321] text-white text-center transition-all ease-in-out duration-300 ${
          isOpen ? "left-0" : "-left-full"
        }`}
      >
        <div className="flex w-full justify-end items-center">
          <button onClick={handleMenu} className="text-3xl text-white p-4">
            {isOpen ? <LiaTimesSolid /> : <LiaBarsSolid />}
          </button>
        </div>
        <div className="flex flex-col space-y-12 items-center justify-center h-[75%]">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className="text-xl font-normal font-oswald">
              {link.name}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
