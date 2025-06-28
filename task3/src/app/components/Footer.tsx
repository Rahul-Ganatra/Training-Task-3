"use client";
import React from "react";

export default function Footer() {
  return (
    <footer className="w-full bg-black py-16 flex justify-center items-center">
      <div className="w-full max-w-7xl flex flex-row justify-between items-start gap-8">
        {/* Left: Links */}
        <div className="grid grid-cols-3 gap-20">
          <div className="flex flex-col gap-4 text-white text-xl">
            <span>About us</span>
            <span>About Founder</span>
            <span>Contact us</span>
            <span>Team</span>
            <span>Locations</span>
          </div>
          <div className="flex flex-col gap-4 text-white text-xl">
            <span>FAQ</span>
            <span>Terms & Conditions</span>
            <span>Careers</span>
            <span>Solutions</span>
            <span>Our Process</span>
          </div>
          <div className="flex flex-col gap-4 text-white text-xl">
            {/* This column can be left empty or used for more links if needed */}
          </div>
        </div>
        {/* Center: Get In Touch */}
        <div className="flex flex-col items-start gap-4 min-w-[320px]">
          <span className="text-gray-400 text-xl mb-2">Get In Touch</span>
          <span className="text-white text-lg mb-4">
            Taking seamless key performance indicators offline to maximise the long tail.
          </span>
          <div className="flex flex-row gap-4 mt-2">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <img src="/facebook.png" alt="Facebook" className="w-10 h-10 rounded-full object-cover bg-black" />
            </a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
              <img src="/youtube.png" alt="YouTube" className="w-10 h-10 rounded-full object-cover bg-black" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <img src="/linkedin.png" alt="LinkedIn" className="w-10 h-10 rounded-full object-cover bg-black" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <img src="/twitter.png" alt="Twitter" className="w-10 h-10 rounded-full object-cover bg-black" />
            </a>
          </div>
        </div>
        {/* Right: Animation GIF, moved up */}
        <div className="flex-1 flex justify-end">
          <div className="w-[400px] h-[400px] -mt-12">
            <img
              src="/animation.gif"
              alt="Technology Animation"
              className="w-full h-full object-contain"
            />
          </div>
        </div>
      </div>
    </footer>
  );
}
