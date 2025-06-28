import React from "react";

const features = [
  {
    label: "Consistency",
    image: "/consistent.png",
  },
  {
    label: "Improvement",
    image: "/improvement.png",
  },
  {
    label: "Branching",
    image: "/globe.png",
  },
  {
    label: "Expertise",
    image: "/expertise.png",
  },
  {
    label: "Security",
    image: "/security.png",
  },
  {
    label: "Transparency",
    image: "/transparency.png",
  },
];

export default function WhatDifference() {
  return (
    <section className="w-full max-w-7xl mx-auto mt-24 mb-16">
      <h2 className="text-5xl font-bold text-white text-center mb-16">What Makes Us Different</h2>
      <div className="flex flex-wrap justify-center gap-12">
        {features.map((feature) => (
          <div key={feature.label} className="flex flex-col items-center">
            <div className="bg-[#232323] border border-gray-500 rounded-lg p-6 mb-4 flex items-center justify-center shadow-inner">
              <div className="w-20 h-20 flex items-center justify-center">
                <img
                  src={feature.image}
                  alt={feature.label}
                  className="w-16 h-16 object-contain invert"
                />
              </div>
            </div>
            <span className="text-gray-300 text-xl mt-2">{feature.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
