import React from "react";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="py-10 border-t">
      <div className="max-w-5xl mx-auto flex-col lg:flex-row gap-5 flex items-center justify-between">
        <div className="">© 2025 DeepCore. All rights reserved.</div>
        <div className="flex items-center gap-5">
          <a>Terms & Conditions</a>
          <a>Privacy & Policy</a>
        </div>
        <div className="flex items-center gap-5">
          <Link href={""}>
            <Image
              src={"/images/9919.png"}
              alt="Twitter"
              width={28}
              height={28}
            />
          </Link>
          <Link href={""}>
            <Image
              src={"/images/twitter.svg"}
              alt="Twitter"
              width={24}
              height={24}
            />
          </Link>
          <Link href={""}>
            <Image
              src={"/images/telegram.png"}
              alt="Twitter"
              width={24}
              height={24}
            />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
