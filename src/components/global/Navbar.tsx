import Image from "next/image";
import React from "react";
import { RainbowButton } from "../magicui/rainbow-button";

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
  return (
    <header className="fixed border-b top-0 w-full px-12 py-6 bg-black/70 backdrop-blur-3xl">
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
          <RainbowButton className="h-fit px-5 py-1rounded-md">
            Connect Wallet
          </RainbowButton>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
