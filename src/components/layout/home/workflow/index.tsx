"use client";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const cards = [
  {
    title: "Trade Agent",
    description:
      "A Web3 transaction agent operates as an intelligent intermediary...",
    tokenValue: "12.5M",
    tokenCA: "79vpE...7LZ9PASD",
    functions: ["Quote&Swap API", "Analyst Agent"],
  },
  {
    title: "Analyst",
    description:
      "Analyze on-chain and off-chain data multi-dimensionally to deliver precision...",
    tokenValue: "30.5M",
    tokenCA: "DEzkpE...7LZ9Pr6",
    functions: ["On-chain API", "Twitter Agent"],
  },
  {
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
    title: "Model Hub",
    description: "Aggregates various powerful AI models.",
    tokenValue: "",
    tokenCA: "",
    functions: ["DeepSeek R1", "DeepSeek V3", "OpenAI 4O", "OpenAI O3/O1"],
  },
];

const Workflow = () => {
  return (
    <section className="bg-[#EAFC35] py-20 overflow-hidden">
      <div className="flex flex-col md:flex-row relative gap-10 md:gap-20">
        <div
          data-scroll
          data-scroll-speed="-5"
          className="w-full md:w-1/2 sticky top-40 flex flex-col items-center h-fit"
        >
          <Image
            src="/images/workflow.svg"
            alt="Workflow"
            width={200}
            height={200}
          />
          <h1 className="text-6xl text-center font-semibold text-background mt-4">
            Workflow
          </h1>
        </div>

        <div className="md:w-1/2 flex flex-col gap-5 w-full">
          {cards.map((card) => (
            <div
              key={card.title}
              data-scroll
              data-scroll-speed="4"
              className="bg-black text-white p-8 transition-all duration-100 w-full clip-custom max-w-[520px] shadow-2xl"
            >
              <h2 className="text-3xl font-bold mb-2">{card.title}</h2>
              <p className="text-lg mb-4">{card.description}</p>
              {card.tokenCA && (
                <div className="text-base mb-2">
                  <strong className="text-[#EAFC35]">Token CA:</strong>{" "}
                  {card.tokenCA}
                </div>
              )}

              {card.tokenValue && (
                <div className="text-base mb-4">
                  <strong className="text-[#EAFC35]">Token Value:</strong>{" "}
                  {card.tokenValue}
                </div>
              )}
              <div>
                <strong className="text-[#EAFC35]">Functions:</strong>
                <ul className="list-disc list-inside text-base mt-2">
                  {card.functions.map((func) => (
                    <li key={func}>{func}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Workflow;
