import Image from "next/image";
import React from "react";

type Props = {
  imgUrl: string;
  title: string;
  date: string;
  description: string;
};

const Card = ({ imgUrl, title, date, description }: Props) => {
  return (
    <a className="clip-custom bg-[#EAFC35] duration-500 hover:-translate-y-2 px-8 py-5 text-background">
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
    </a>
  );
};

export default Card;
