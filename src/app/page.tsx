"use client";

import Categories from "@/components/layout/home/categories";
import Commands from "@/components/layout/home/commands";
import DeepResearch from "@/components/layout/home/deep-research";
import FAQ from "@/components/layout/home/faq";
import Hero from "@/components/layout/home/hero";
import Protocol from "@/components/layout/home/protocol";
import Showcase from "@/components/layout/home/showcase";
import Workflow from "@/components/layout/home/workflow";

export default function Home() {
  return (
    <div className="overflow-hidden">
      <Hero />
      <Workflow />
      <Categories />
      <Showcase />
      <Commands/>
      <DeepResearch/>
      <Protocol/>
      <FAQ />
    </div>
  );
}
