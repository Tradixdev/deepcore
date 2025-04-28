import Image from "next/image";
import React, { useState } from "react";

type Props = {
  imgUrl: string;
  title: string;
  date: string;
  description: string;
};

const Card = ({ imgUrl, title, date, description }: Props) => {
  return (
    <a className="clip-custom relative bg backdrop-blur-3xl border border-[#00C9A7] duration-500 hover:-translate-y-2 px-8 py-5 text-foreground">
      <div className="flex items-center gap-5">
        <Image
          src={imgUrl}
          alt="Agent"
          width={44}
          height={44}
          className="rounded-full object-cover"
        />
        <div className="">
          <h3 className="text-xl font-semibold">{title}</h3>
          <p>{date}</p>
        </div>
      </div>
      <div className="mt-4 line-clamp-3 text-lg">
        <p>{description}</p>
      </div>
      <div className="absolute -bottom-40 left-1/2 -translate-x-1/2 w-full h-60 rounded-full blur-2xl opacity-30 -z-20 bg-[#00C9A7]" />
      <div className="absolute glow-blur-token bottom-0 right-0 w-full h-full -z-10" />
    </a>
  );
};

export default Card;
