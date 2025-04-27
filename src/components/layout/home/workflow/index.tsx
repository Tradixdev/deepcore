"use client";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SpotlightCard from "@/components/magicui/SpotlightCard/SpotlightCard";

gsap.registerPlugin(ScrollTrigger);

const cards = [
  {
    id: 1,
    title: "Trade Agent",
    description:
      "A Web3 transaction agent operates as an intelligent intermediary...",
    tokenValue: "12.5M",
    tokenCA: "79vpE...7LZ9PASD",
    functions: ["Quote&Swap API", "Analyst Agent"],
  },
  {
    id: 2,
    title: "Analyst",
    description:
      "Analyze on-chain and off-chain data multi-dimensionally to deliver precision...",
    tokenValue: "30.5M",
    tokenCA: "DEzkpE...7LZ9Pr6",
    functions: ["On-chain API", "Twitter Agent"],
  },
  {
    id: 3,
    title: "Twitter Knowledge",
    description:
      "By identifying and linking tweets, users, and hashtags related to Web3...",
    tokenValue: "11.2M",
    tokenCA: "D9vpE...7LZPwDC",
    functions: [
      "Model Definition",
      "Graph Extraction",
      "Graph Fusion",
      "Graph Database",
    ],
  },
  {
    id: 4,
    title: "Model Hub",
    description: "Aggregates various powerful AI models.",
    tokenValue: "",
    tokenCA: "",
    functions: ["DeepSeek R1", "DeepSeek V3", "OpenAI 4O", "OpenAI O3/O1"],
  },
];

const Workflow = () => {
  return (
    <section className=" relative py-5 lg:py-20">
      <div data-scroll data-scroll-speed="-3" className="bg-circle-blur absolute -right-[450px] top-1/2 -translate-y-1/2 z-10"></div>
      <div data-scroll data-scroll-speed="-3" className="bg-circle-blur absolute -left-[450px] top-0 -translate-y-1/2 z-20"></div>
      <div className="max-w-7xl mx-auto flex flex-col md:flex-col gap-10 md:gap-20">
        <div
          data-scroll
          data-scroll-speed="-1"
          className="w-full flex flex-col items-center h-fit"
        >
          <Image
            src="/images/workflow-white.svg"
            alt="Workflow"
            width={200}
            height={200}
          />
          <h1 className="text-6xl text-center font-semibold text-foreground mt-4">
            Workflow
          </h1>
        </div>

        <div className="relative flex w-full">
          {/* Grid of Cards */}
          <div className="px-5 lg:px-0 grid grid-cols-1 lg:grid-cols-2 gap-5 w-full">
            {cards.map((card) => (
              <SpotlightCard
                key={card.id}
                className={`bg-[#00C9A7] border-amber-300 text-black p-8 transition-all duration-100 w-full ${(card.id == 2 || card.id == 3) ? "clip-custom-left" : "clip-custom"
                  } shadow-2xl`}
              >
                <h2 className="text-3xl font-bold mb-2">{card.title}</h2>
                <p className="text-lg mb-4">{card.description}</p>
                {card.tokenCA && (
                  <div className="text-base mb-2">
                    <strong className="">Token CA:</strong> {card.tokenCA}
                  </div>
                )}
                {card.tokenValue && (
                  <div className="text-base mb-4">
                    <strong className="">Token Value:</strong> {card.tokenValue}
                  </div>
                )}
                <div>
                  <strong className="">Functions:</strong>
                  <ul className="list-disc list-inside text-base mt-2">
                    {card.functions.map((func) => (
                      <li key={func}>{func}</li>
                    ))}
                  </ul>
                </div>
              </SpotlightCard>
            ))}
          </div>

          {/* Image in Right Middle */}
          <div className="absolute hidden lg:flex pb-11 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <Image
              src="/images/logo2.png"
              alt="Logo"
              width={50}
              height={50}
              className=""
            />
          </div>
        </div>

      </div>
    </section>
  );
};

export default Workflow;
