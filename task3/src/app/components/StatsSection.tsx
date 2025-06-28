import React from "react";

export default function StatsSection() {
  return (
    <section className="w-full max-w-7xl mx-auto mt-16">
      {/* Headings */}
      <div className="mb-6">
        <div className="text-gray-400 text-lg mb-1">
          The reason why Blackcoffer stands out
        </div>
        <div className="text-3xl md:text-4xl font-bold text-white">
          Blackcoffer Unfolds Solutions To Everything
        </div>
      </div>
      {/* Grid */}
      <div className="overflow-hidden border border-gray-700 bg-black/80 rounded-tl-[48px] rounded-br-[48px]">
        <div className="grid grid-cols-4 grid-rows-3 gap-0">
          {/* Top Row */}
          <div className="bg-black/80 p-8 border-b border-r border-gray-700 flex flex-col justify-center relative min-h-[120px]">
            <span className="text-3xl font-bold text-white">12+</span>
            <span className="text-lg text-white mt-2">Years of<br />Experience</span>
            {/* Optional icon */}
            <span className="absolute right-4 bottom-4 opacity-10 text-6xl select-none">📅</span>
          </div>
          <div className="bg-black/80 p-8 border-b border-r border-gray-700 flex flex-col justify-center relative min-h-[120px]">
            <span className="text-3xl font-bold text-white">100+</span>
            <span className="text-lg text-white mt-2">Clients</span>
            <span className="absolute right-4 bottom-4 opacity-10 text-6xl select-none">👥</span>
          </div>
          <div className="bg-black/80 p-8 border-b border-gray-700 flex flex-col justify-center relative min-h-[120px]">
            <span className="text-3xl font-bold text-white">97%</span>
            <span className="text-lg text-white mt-2">Client Retention<br />Rate</span>
            <span className="absolute right-4 bottom-4 opacity-10 text-6xl select-none">📈</span>
          </div>
          {/* Meeting image (spans 3 rows, bottom-right rounded) */}
          <div className="row-span-3 col-start-4 col-end-5">
            <img
              src="/statssection.jpg"
              alt="Meeting"
              className="w-full h-full object-cover rounded-br-[48px]"
            />
          </div>
          {/* Middle Row */}
          <div className="relative p-0 border-b border-r border-gray-700">
            {/* AI image with overlay */}
            <div className="absolute inset-0">
              <img
                src="/AI solution.jpg"
                alt="AI solutions"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/60" />
            </div>
            <div className="relative z-10 p-8 flex flex-col justify-center min-h-[120px]">
              <span className="text-3xl font-bold text-white">40+</span>
              <span className="text-lg text-white mt-2">AI solutions</span>
            </div>
          </div>
          <div className="bg-black/80 p-8 border-b border-r border-gray-700 flex flex-col justify-center relative min-h-[120px]">
            <span className="text-3xl font-bold text-white">350+</span>
            <span className="text-lg text-white mt-2">Employees</span>
            <span className="absolute right-4 bottom-4 opacity-10 text-6xl select-none">➕</span>
          </div>
          <div className="bg-black/80 p-8 border-b border-gray-700 flex flex-col justify-center relative min-h-[120px]">
            <span className="text-3xl font-bold text-white">2+</span>
            <span className="text-lg text-white mt-2">Countries</span>
            <span className="absolute right-4 bottom-4 opacity-10 text-6xl select-none">🌐</span>
          </div>
          {/* Bottom Row */}
          <div className="bg-black/80 p-8 border-r border-gray-700 flex flex-col justify-center relative min-h-[120px]">
            <span className="text-3xl font-bold text-white">80+</span>
            <span className="text-lg text-white mt-2">Big Data Solutions</span>
            <span className="absolute left-4 bottom-4 opacity-10 text-6xl select-none font-black">BIG DATA</span>
          </div>
          <div className="col-span-2 bg-black/80 p-8 flex flex-col justify-center min-h-[120px]">
            <span className="text-gray-300 text-lg">Dedicated to</span>
            <span className="text-white text-2xl font-bold mt-2 leading-tight">
              Providing Top-Notch Big Data<br />
              Analytics &amp; BI Services
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
