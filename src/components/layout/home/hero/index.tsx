import React from "react";

const Hero = () => {
  return (
    <section className="min-h-screen relative">
      <div className="max-w-7xl mx-auto pt-[170px] flex items-center">
        <div className="w-full space-y-8">
          <h1 className="text-7xl font-medium tracking-tight leading-snug">
            The Best{" "}
            <span className="italic font-bold bg-gradient-to-b from-[#EAFC35] to-[#fcffdf] bg-clip-text pr-5 text-transparent">
              Web3 AI Agent Platform
            </span>{" "}
            MCP-Powered
          </h1>
          <p className="text-[#b2b2b2] text-xl max-w-lg">
            Reshaping Web3 AI Agent infrastructure to build a new era of
            composable AI Agents.
          </p>
        </div>
      </div>
      <div className="w-full h-full absolute top-0 left-0 -z-10">
        <video
          src="/videos/herovideo.webm"
          autoPlay
          muted
          loop
          className="w-full h-auto"
        ></video>
      </div>
    </section>
  );
};

export default Hero;
