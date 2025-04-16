"use client";

import React, { useState } from "react";
import Link from "next/link";

export const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
    if (isOpen) {
      return (
        <div>
          <ul>
            <li>
              <a href="#section1">Home</a>
            </li>
            <li>
              <a href="#section2">Projects</a>
            </li>
            <li>
              <a href="#section3">Contact</a>
            </li>
          </ul>
        </div>
      );
    }
  };
  return (
    <div>
      <button
        onClick={handleClick}
        className="flex flex-col justify-center items-center"
      >
        <span
          className={`bg-[#333333] block transition-all duration-300 ease-out 
                    h-1 w-12 rounded-sm ${
                      isOpen ? "rotate-45 translate-y-2" : "-translate-y-1"
                    }`}
        ></span>
        <span
          className={`bg-[#333333] block transition-all duration-300 ease-out 
            h-1 w-12 rounded-sm my-0.5 ${isOpen ? "opacity-0" : "opacity-100"}`}
        ></span>
        <span
          className={`bg-[#333333] block transition-all duration-300 ease-out 
            h-1 w-12 rounded-sm ${
              isOpen ? "-rotate-45 -translate-y-1" : "translate-y-1"
            }`}
        ></span>
      </button>
      {isOpen && (
        <div className="absolute mt-4 lg:-mt-7 bg-[#A0D6FF] p-8 lg:p-2 rounded-md lg:ml-12 lg:w-8/12">
          <ul className="flex flex-col text-xl lg:text-3xl space-y-4 lg:space-y-0 lg:flex-row justify-center lg:space-x-24 ">
            <li>
              <a
                href="#section1"
                className="text-[#333333] hover:underline font-bold"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#section2"
                className="text-[#333333] hover:underline font-bold"
              >
                Projects
              </a>
            </li>
            <li>
              <a
                href="#section3"
                className="text-[#333333] hover:underline font-bold"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};
