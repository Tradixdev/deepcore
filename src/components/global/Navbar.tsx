"use client";

import Image from "next/image";
import React, { useEffect, useRef } from "react";
import { RainbowButton } from "../magicui/rainbow-button";
import gsap from "gsap";

const navItems = [
  {
    label: "Workspace",
    href: "/workspace",
  },
  {
    label: "Agent Store",
    href: "/agent-store",
  },
  {
    label: "MCP Store",
    href: "/mcp-store",
  },
  {
    label: "A2A",
    href: "/a2a",
  },
  {
    label: "Tools",
    href: "/tools",
  },
  {
    label: "Github",
    href: "/github",
  },
  {
    label: "Docs",
    href: "/docs",
  },
];

const Navbar = () => {
  const navRef1 = useRef<HTMLHeadElement>(null);

  useEffect(() => {
    const navbar = navRef1.current;

    gsap.fromTo(
      [navbar],
      { y: -100, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        ease: "power4.inOut",
        duration: 2,
        stagger: 0.5,
        delay: 1,
      }
    );
  });

  return (
    <header
      ref={navRef1}
      className="fixed z-[999999999] border-b top-0 w-full px-12 py-6 bg-black/40 backdrop-blur-2xl"
    >
      <div className="flex justify-between items-center">
        <div className="">
          <Image src={"/images/logo.png"} alt="Logo" width={170} height={170} />
        </div>
        <nav>
          <ul className="flex items-center gap-5">
            {navItems.map((item, idx) => (
              <li key={idx} className="hover:text-[#EAFC35]">
                <a href={item.href}>{item.label}</a>
              </li>
            ))}
          </ul>
        </nav>
        <div className="">
          <RainbowButton className="h-fit px-5 py-1 rounded-full">
            Connect Wallet
          </RainbowButton>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
