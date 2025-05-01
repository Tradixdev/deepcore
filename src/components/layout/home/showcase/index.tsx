import { RainbowButton } from "@/components/magicui/rainbow-button";
import React, { useEffect, useRef } from "react";
import Card from "./Card";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
// mport toast from "react-hot-toast";

gsap.registerPlugin(ScrollTrigger);

const Showcase = () => {
  const accordionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (accordionRef.current) {
        const accordionItems = Array.from(accordionRef.current.children);
        const isMobile = window.innerWidth <= 768;

        gsap.fromTo(
          accordionItems,
          { y: 50, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            stagger: 0.3,
            duration: 0.5,
            ease: "power4.inOut",
            scrollTrigger: {
              trigger: accordionRef.current,
              start: "top 80%",
              ...(isMobile ? {} : { scroller: "[data-scroll-container]" }),
              once: true,
            },
          }
        );
      }
    }, 500); // Delay to ensure Locomotive is ready

    return () => clearTimeout(timer);
  }, []);

  //   const handleClick = () => {
  //     toast("Please connect your wallet first", {
  //       icon: "🔌",
  //       style: {
  //         borderRadius: "10px",
  //         background: "#333",
  //         color: "#fff",
  //         zIndex: 9999999999,
  //       },
  //     });
  //   };

  return (
    <section className="px-5 lg:px-0 py-20 lg:py-40">
      <div className="max-w-7xl space-y-10 mx-auto">
        <div className="flex justify-between flex-col lg:flex-row gap-5 lg:items-center">
          <div className="">
            <h2 className="text-5xl heading capitalize font-semibold tracking-wider">Agent Showcase</h2>
            <p className="text-[#b2b2b2] text-xl">
              Experience the most valuable AI agent in web3.
            </p>
          </div>
          <div className="">
            <RainbowButton
              //   onClick={handleClick}
              className="rounded-full px-5 py-1"
            >
              Agent Info
            </RainbowButton>
          </div>
        </div>
        <div
          //   ref={accordionRef}
          className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-5"
        >
          <Card
            imgUrl={"https://avatar.vercel.sh/jill"}
            title={"CryptoAnalyst"}
            date={"2025-01-25"}
            description={
              "This agent specializes in in-depth analysis of cryptocurrency tokens in the Web3 space. By providing a token address or name, it can perform"
            }
          />
          <Card
            imgUrl={"https://avatar.vercel.sh/jill"}
            title={"CryptoTrader"}
            date={"2025-01-24"}
            description={
              "CryptoTrader streamlines Web3 token trading, offering token buy, sell, buy limit orders, sell limit orders, stop-limit orders, and limit order queries on"
            }
          />
          <Card
            imgUrl={"https://avatar.vercel.sh/jill"}
            title={"CryptoSearch"}
            date={"2025-01-23"}
            description={
              "CryptoSearch scans the latest data across the web—X, Google, YouTube, Web3 media, and communities—delivering precise insights through"
            }
          />
        </div>
      </div>
    </section>
  );
};

export default Showcase;
