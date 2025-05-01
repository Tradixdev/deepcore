import { RainbowButton } from "@/components/magicui/rainbow-button";
import gsap from "gsap";
import LocomotiveScroll from "locomotive-scroll";
import Image from "next/image";
import React, { useEffect, useRef } from "react";
import Marquee from "react-fast-marquee";
// import { useLocomotiveScroll } from "react-locomotive-scroll";


const Hero = () => {
  const headingRef1 = useRef<HTMLDivElement>(null);
  const headingRef2 = useRef<HTMLDivElement>(null);
  const paragraphRef1 = useRef<HTMLDivElement>(null);
  const paragraphRef2 = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLDivElement>(null);
  const videoRef1 = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const heading = headingRef1.current;
    const heading2 = headingRef2.current;
    const paragraph1 = paragraphRef1.current;
    const paragraph2 = paragraphRef2.current;
    const button = buttonRef.current;
    const video = videoRef1.current;

    // const { scroll } = useLocomotiveScroll();

    gsap.fromTo(
      [heading, heading2, paragraph1, paragraph2, button],
      { y: 100, rotateZ: 3, opacity: 0 },
      { y: 0, rotateZ: 0, opacity: 1, ease: "power4.inOut", duration: 2.6 }
    );
    gsap.fromTo(
      [video],
      { scale: 0.8, opacity: 0 },
      {
        scale: 1,
        opacity: 1,
        ease: "power4.out",
        duration: 2,
        stagger: 0.5,
        delay: 0.7,
      }
    );
  });


  // const handleScroll = () => {
  //   if (scroll) {
  //     scroll.scrollTo("#target-section", {
  //       offset: 0,
  //       duration: 1000,
  //       easing: [0.25, 0.0, 0.35, 1.0],
  //     });
  //   } else {
  //     console.warn("LocomotiveScroll not ready");
  //   }
  // };

  const scrollRef = useRef<LocomotiveScroll | null>(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      scrollRef.current = new LocomotiveScroll({
        el: document.querySelector("[data-scroll-container]") as HTMLElement,
        smooth: true,
      });
    }

    return () => {
      scrollRef.current?.destroy();
    };
  }, []);


  const handleScroll = () => {
    scrollRef.current?.scrollTo("#target-section");
  };

  return (
    <section
      data-scroll
      data-scroll-speed="2"
      className="min-h-screen relative"
    >
      <div className="max-w-7xl flex items-center pt-[100px] lg:pt-[150px] mx-5 lg:mx-auto">
        <div className="w-full space-y-8">
          <div className=" flex flex-col">
            <div className="overflow-hidden">
              <h1
                ref={headingRef1}
                className="text-4xl heading lg:text-6xl font-medium tracking-tight leading-snug"
              >
                The Best{" "}
                <span className="lg:italic font-bold bg-gradient-to-b from-[#00C9A7] to-[#fcffdf] bg-clip-text pr-5 text-transparent">
                  Web3 AI Agent Platform
                </span>{" "}MCP-Powered
              </h1>
            </div>
          </div>
          <div className="flex overflow-hidden flex-col">
            <div className="overflow-hidden">
              <p
                ref={paragraphRef1}
                className=" text-[#b2b2b2] text-xl max-w-lg"
              >
                Reshaping Web3 AI Agent infrastructure to build a new
              </p>
            </div>
            <p ref={paragraphRef2} className=" text-[#b2b2b2] text-xl max-w-lg">
              era of composable AI Agents.
            </p>
          </div>
          <div className="overflow-hidden">
            <div ref={buttonRef}>
              <RainbowButton onClick={handleScroll} className="rounded-full px-5 py-1">
                Get Started
              </RainbowButton>
            </div>
          </div>
        </div>
      </div>

      <div
        data-scroll
        data-scroll-speed="-1"
        className="w-full h-screen lg:h-full absolute top-0 left-0 -z-10"
        ref={videoRef1}
      >
        <video
          src="/videos/herovideo.mp4"
          autoPlay
          muted
          loop
          controls={false}
          className="w-full h-full object-cover"
        />
        {/* <div className="absolute hero top-0 left-0 min-h-screen w-full z-10 "></div> */}
      </div>
      <div className="w-full mx-auto mt-[400px] lg:mt-[300px] text-center space-y-10">
        <h3 className="max-w-80 mx-auto text-xl text-[#b2b2b2]">
          Supported by cutting-edge encryption and AI technology
        </h3>
        <Marquee autoFill gradient gradientColor="" className="-z-10">
          <Image
            src={"/images/9919.png"}
            alt="Twitter"
            width={40}
            height={40}
            className="mx-5"
          />
          <Image
            src={"/images/twitter.svg"}
            alt="Twitter"
            width={40}
            height={40}
            className="mx-5"
          />
          <Image
            src={"/images/telegram.png"}
            alt="Twitter"
            width={40}
            height={40}
            className="mx-5"
          />
        </Marquee>
      </div>
    </section>
  );
};

export default Hero;
