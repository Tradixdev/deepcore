"use client";

import Categories from "@/components/layout/home/categories";
import Hero from "@/components/layout/home/hero";
import Workflow from "@/components/layout/home/workflow";

export default function Home() {
  return (
    <div className="">
      <Hero />
      <Workflow />
      <Categories />
    </div>
  );
}
