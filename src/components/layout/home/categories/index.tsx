import React from "react";
import { MarqueeAgent } from "./MarqueeAgent";

const Categories = () => {
  return (
    <section className="px-5 lg:px-0 py-20 lg:py-40">
      <div className="max-w-7xl space-y-10 relative mx-auto">
        <div className="space-y-4 text-center">
          <h2 className="lg:text-6xl heading font-semibold mt-4">Agent Categories</h2>
          <p className="text-[#b2b2b2] text-xl max-w-lg mx-auto">
            Explore our diverse collection of specialized AI agents designed to
            meet your specific needs
          </p>
        </div>
        <MarqueeAgent />
        <div data-scroll data-scroll-speed="3" className="bg-agent-blur absolute -left-[950px] top-1/2 -translate-y-1/2 z-10"></div>
      </div>
    </section>
  );
};

export default Categories;
