import React from "react";
import { MarqueeAgent } from "./MarqueeAgent";

const Categories = () => {
  return (
    <section className="py-40">
      <div className="max-w-7xl space-y-10 mx-auto">
        <div className="space-y-4 text-center">
          <h2 className="text-6xl font-semibold mt-4">Agent Categories</h2>
          <p className="text-[#b2b2b2] text-xl max-w-lg mx-auto">
            Explore our diverse collection of specialized AI agents designed to
            meet your specific needs
          </p>
        </div>
        <MarqueeAgent />
      </div>
    </section>
  );
};

export default Categories;
