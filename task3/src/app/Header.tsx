"use client";
import React from "react";

export default function Header() {
    return (
    <header className="sticky top-0 z-20 flex items-center justify-between px-12 py-6 bg-transparent" >  
      <a href="/" className="flex items-center">
        <img
          src="/logo.png"
          alt="Blackcoffer Logo"
          className="h-20 w-auto object-contain filter invert"
        />
      </a>
      <nav className="flex-1 flex justify-center">
        <div className="flex gap-10 text-white font-medium">
          <div className="flex items-center justify-center gap-1 cursor-pointer hover:text-blue-400">
            Who we are <span>▼</span>
          </div>
          <div className="flex items-center justify-center gap-1 cursor-pointer hover:text-blue-400">
            What we do <span>▼</span>
          </div>
          <div className="flex items-center justify-center gap-1 cursor-pointer hover:text-blue-400">
            Insights <span>▼</span>
          </div>
          <div className="flex items-center justify-center gap-1 cursor-pointer hover:text-blue-400">
            Careers <span>▼</span>
          </div>
        </div>
      </nav>
      <div className="flex items-center gap-4">
        <button className="p-2 rounded hover:bg-white/10 transition">
          <svg
            className="w-5 h-5 text-white"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <circle cx="11" cy="11" r="8" />
            <line x1="21" y1="21" x2="16.65" y2="16.65" />
          </svg>
        </button>
        <button className="relative flex items-center gap-2 px-5 py-2 border border-white rounded-md font-medium overflow-hidden">
          <span
            className="absolute inset-0 bg-white/10 backdrop-blur-md rounded-md z-0"
            aria-hidden="true"
          />
          <span className="relative flex items-center gap-2 z-10 text-white">
            <svg className="w-6 h-6" fill="none" stroke="white" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M22 16.92V19a2 2 0 0 1-2 2h-1A17.92 17.92 0 0 1 3 5v-1a2 2 0 0 1 2-2h3a2 2 0 0 1 2 1.72c.13.81.38 1.6.73 2.34a2 2 0 0 1-.45 2.11l-1.27 1.27a16 16 0 0 0 6.29 6.29l1.27-1.27a2 2 0 0 1 2.11-.45c.74.35 1.53.6 2.34.73A2 2 0 0 1 19 17h3a2 2 0 0 1 2 2z" />
            </svg>
            Contact Us
          </span>
        </button>
      </div>
    </header>
  );
} 