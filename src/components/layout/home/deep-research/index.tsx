import React from "react";
import Image from "next/image";
import { TextAnimate } from "@/components/magicui/text-animate";

const DeepResearch = () => {
    return (
        <section className="px-5 lg:px-0 relative lg:py-0">
            <div className="max-w-7xl min-h-screen space-y-10 mx-auto">
                <div className="space-y-4">
                    <h2 className="text-9xl relative top-14 bg-gradient-to-b from-[#00C9A7] inline-block bg-clip-text font-bold text-transparent">01</h2>
                    <TextAnimate duration={1.2} startOnView as={"h2"} className="text-4xl lg:text-6xl text-shadow-white font-semibold">Deep Research Agent, Seriously.</TextAnimate>
                    <TextAnimate duration={1.2} startOnView as={"p"} className="text-[#b2b2b2] text-xl max-w-5xl">
                        {`Deep Research is a specialized project research assistant designed for the crypto that generates comprehensive reports on any topic following a workflow similar to OpenAI and Gemini Deep Research. it allows you to customize the models, prompts, report structure, search API, and research depth.`}
                    </TextAnimate>
                </div>
                <div className="relative lg:absolute w-full lg:w-7xl h-full lg:right-60 lg:top-10">
                    <Image
                        src={"/images/planning.svg"}
                        alt="Image1"
                        width={1000}
                        height={1000}
                        className="w-full h-full"
                    />
                </div>
                <div data-scroll data-scroll-speed="3" className="bg-agent-blur hidden lg:block absolute -left-[550px] top-1/2 -translate-y-1/2 z-10"></div>
            </div>
        </section>
    );
};

export default DeepResearch;
