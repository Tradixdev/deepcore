"use client";

import Categories from "@/components/layout/home/categories";
import FAQ from "@/components/layout/home/faq";
import Hero from "@/components/layout/home/hero";
import Showcase from "@/components/layout/home/showcase";
import Workflow from "@/components/layout/home/workflow";

export default function Home() {
  return (
    <div className="">
      <Hero />
      <Workflow />
      <Categories />
      <Showcase />
      <FAQ />
    </div>
  );
}
