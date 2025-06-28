"use client"

import React from "react";

const stories = [
  {
    date: "March 16, 2024",
    title: "Streamlined Equity Waterfall Calculation and Deal Management System",
  },
  {
    date: "March 16, 2024",
    title: "Automated Orthopedic Report Generation: Harnessing NLP and AI Integration",
  },
  {
    date: "March 15, 2024",
    title: "AI-powered Customer Support Chatbot for E-commerce",
  },
  {
    date: "March 14, 2024",
    title: "Real-time Fraud Detection System for Online Banking",
  },
  {
    date: "March 13, 2024",
    title: "Predictive Maintenance Platform for Manufacturing",
  },
  {
    date: "March 12, 2024",
    title: "Personalized Marketing Automation for Retail",
  },
];

export default function SuccessStories() {
  // Duplicate the stories for seamless looping
  const marqueeStories = [...stories, ...stories];

  return (
    <section className="w-full max-w-7xl mx-auto mt-24 mb-16 relative">
      {/* Header row */}
      <div className="flex items-center justify-between mb-12">
        <h2 className="text-5xl font-bold text-white text-center w-full">
          Success Stories
        </h2>
        <a
          href="#"
          className="absolute right-0 mr-8 flex items-center text-2xl text-white font-medium"
        >
          Read all stories
          <span className="ml-2 inline-block bg-blue-600 rounded p-1">
            <svg width="18" height="18" fill="none" stroke="white" strokeWidth="2" viewBox="0 0 24 24">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </span>
        </a>
      </div>
      {/* Marquee row */}
      <div className="relative overflow-hidden w-[1200px] mx-auto h-[180px]">
        <div
          className="flex items-center gap-24 animate-marquee"
          style={{
            width: "max-content",
            animation: "marquee 30s linear infinite",
          }}
        >
          {marqueeStories.map((story, idx) => (
            <div key={idx} className="flex flex-col min-w-[600px] max-w-[600px]">
              <span className="text-2xl text-white mb-4">{story.date}</span>
              <span className="text-4xl font-bold text-white leading-tight">{story.title}</span>
            </div>
          ))}
        </div>
      </div>
      {/* Navigation buttons (optional, can be removed for pure marquee) */}
      {/* <div className="flex justify-end gap-4 mt-12 pr-8">
        <button className="w-12 h-12 flex items-center justify-center bg-[#232323] rounded text-white text-2xl" aria-label="Previous">
          <svg width="24" height="24" fill="none" stroke="white" strokeWidth="2" viewBox="0 0 24 24">
            <path d="M15 19l-7-7 7-7"/>
          </svg>
        </button>
        <button className="w-12 h-12 flex items-center justify-center bg-[#232323] rounded text-white text-2xl" aria-label="Next">
          <svg width="24" height="24" fill="none" stroke="white" strokeWidth="2" viewBox="0 0 24 24">
            <path d="M9 5l7 7-7 7"/>
          </svg>
        </button>
      </div> */}
      <style jsx global>{`
        @keyframes marquee {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </section>
  );
}
