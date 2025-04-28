import React from "react";
import Image from "next/image";
import { TextAnimate } from "@/components/magicui/text-animate";

const Protocol = () => {
    return (
        <section className="px-5 lg:px-0 relative lg:py-0">
            <div className="max-w-7xl min-h-screen space-y-10 mx-auto">
                <div className="space-y-4 lg:text-right">
                    <h2 className="text-9xl relative top-14 bg-gradient-to-b from-[#00C9A7] inline-block bg-clip-text font-bold text-transparent">02</h2>
                    <TextAnimate duration={1.2} startOnView as={"h2"} className="text-4xl lg:text-6xl text-shadow-white font-semibold">Model Context Protocol</TextAnimate>
                    <TextAnimate duration={1.2} startOnView as={"p"} className="text-[#b2b2b2] text-xl max-w-5xl ml-auto">
                    {`DeepCore fully integrates the MCP protocol. Any standard MCP Server can be converted into a Tool for Agent invocation after integration. Agents can also be published as MCP Servers, allowing external clients such as Cursor and Claude to invoke them. Additionally, DeepCore builds its own MCP Store to enable the registration, discovery, and invocation of all MCP Servers in the crypto domain.`}
                    </TextAnimate>
                </div>
                <div className="lg:absolute w-full lg:w-3xl h-full lg:left-60 lg:top-40">
                    <Image
                        src={"/images/hwdcpc.svg"}
                        alt="Image1"
                        width={1000}
                        height={1000}
                        className="w-full h-full"
                    />
                </div>
                <div data-scroll data-scroll-speed="3" className="bg-agent-blur absolute -right-[550px] top-1/2 -translate-y-1/2 z-10"></div>
            </div>
        </section>
    );
};

export default Protocol;
