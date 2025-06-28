import React from "react";

export default function RequestCallBack() {
  return (
    <section className="w-full flex justify-center items-center my-24">
      <div className="w-full max-w-6xl border border-gray-500 bg-[#191919] py-16 px-4 flex flex-col items-center text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 tracking-wide">
          REQUEST A CALL BACK
        </h2>
        <h3 className="text-3xl md:text-4xl font-semibold text-white mb-6">
          Get your Business Right up There
        </h3>
        <p className="text-gray-200 text-lg max-w-3xl mb-10">
          When you need intelligent answers to your toughest questions, we're here to help. We're just a call or email away! Don't hang back from getting in touch with us. We'll be glad to assist you.
        </p>
        <div className="border border-gray-400 p-2 bg-transparent">
          <button
            className="
              relative w-full
              px-10 py-4
              text-2xl font-semibold text-white
              rounded
              bg-white/10
              border border-white/30
              backdrop-blur-md
              transition
              hover:bg-white/20
              "
            style={{
              boxShadow: "0 1px 8px 0 rgba(255,255,255,0.05)",
            }}
          >
            Request a Call Back
          </button>
        </div>
      </div>
    </section>
  );
}
