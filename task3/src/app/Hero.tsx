import React from "react";

export default function Hero() {
  return (
    <section className="relative flex flex-col md:flex-row items-start justify-between min-h-[70vh] pt-32 pb-12 px-12 overflow-hidden">
      {/* Background wave image */}
      <img
        src="/background.png"
        alt="wave"
        className="absolute inset-0 w-full h-full object-cover opacity-80 pointer-events-none z-0"
        style={{ objectPosition: "center" }}
      />
      {/* Left: Main text */}
      <div className="relative z-10 flex-1">
        <h1 className="text-6xl md:text-7xl font-extrabold text-white leading-tight">
          TOGETHER WE <br />
          <span className="text-white">REINVENTED</span>
        </h1>
      </div>
      {/* Right: Description */}
      <div className="relative z-10 flex-1 mt-10 md:mt-0 md:ml-16 max-w-lg">
        <div className="h-2 w-20 bg-white mb-6"></div>
        <p className="text-lg text-white mb-6">
          Together, we can reinvent your business. Reinvention is about breaking industry norms. Our wide range of capabilities, ecosystem partnerships and unmatched industry expertise can help your business become the next best version of itself.
        </p>
        <a href="#services" className="inline-flex items-center gap-2 text-white font-semibold hover:text-white transition">
          See what we do
          <span className="inline-block bg-white rounded p-1 ml-2">
            <svg width="18" height="18" fill="none" stroke="black" strokeWidth="2" viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          </span>
        </a>
      </div>
    </section>
  );
} 