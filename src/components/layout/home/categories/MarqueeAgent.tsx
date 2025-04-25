import { Marquee } from "@/components/magicui/marquee";
import { cn } from "@/lib/utils";
import Image from "next/image";

const reviews = [
  {
    name: "Programmer",
    username: "Expert coders and system architects",
    img: "https://avatar.vercel.sh/jack",
  },
  {
    name: "Researcher",
    username: "AI and scientific research specialists",

    img: "https://avatar.vercel.sh/jill",
  },
  {
    name: "All Agents",
    username: "Browse all AI agents",
    img: "https://avatar.vercel.sh/john",
  },
  {
    name: "Twitter",
    username: "Expert coders and system architects",
    img: "https://avatar.vercel.sh/jack",
  },
  {
    name: "Network",
    username: "AI and scientific research specialists",

    img: "https://avatar.vercel.sh/jill",
  },
  {
    name: "Analyst",
    username: "Browse all AI agents",
    img: "https://avatar.vercel.sh/john",
  },
  {
    name: "Crypto News",
    username: "Expert coders and system architects",
    img: "https://avatar.vercel.sh/jack",
  },
  {
    name: "Graphics",
    username: "AI and scientific research specialists",
    img: "https://avatar.vercel.sh/jill",
  },
  {
    name: "Videos",
    username: "Browse all AI agents",
    img: "https://avatar.vercel.sh/john",
  },
];

const firstRow = reviews.slice(0, reviews.length / 3);
const secondRow = reviews.slice(reviews.length / 3);
const thirdRow = reviews.slice(reviews.length / 3);

const ReviewCard = ({
  img,
  name,
  username,
}: {
  img: string;
  name: string;
  username: string;
}) => {
  return (
    <figure
      className={cn(
        "relative h-full w-80 cursor-pointer clip-custom overflow-hidden border border-yellow-400/70 px-8 py-4",
        // light styles
        " bg-gray-950/[.01] hover:bg-gray-950/[.05]",
        // dark styles
        " dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]"
      )}
    >
      <div className="flex flex-row justify-between items-center gap-2">
        <div className="flex flex-col">
          <figcaption className="text-base font-medium dark:text-white">
            {name}
          </figcaption>
          <p className="text-base font-medium dark:text-white/40">{username}</p>
        </div>
        <Image
          className="rounded-full"
          width="32"
          height="32"
          alt=""
          src={img}
        />
      </div>
      {/* <blockquote className="mt-2 text-sm">{body}</blockquote> */}
    </figure>
  );
};

export function MarqueeAgent() {
  return (
    <div className="relative flex w-full flex-col gap-8 items-center justify-center overflow-hidden">
      <Marquee pauseOnHover className="[--duration:80s]">
        {firstRow.map((review) => (
          <ReviewCard key={review.name} {...review} />
        ))}
      </Marquee>
      <Marquee reverse pauseOnHover className="[--duration:80s]">
        {secondRow.map((review) => (
          <ReviewCard key={review.name} {...review} />
        ))}
      </Marquee>
      <Marquee pauseOnHover className="[--duration:80s]">
        {thirdRow.map((review) => (
          <ReviewCard key={review.name} {...review} />
        ))}
      </Marquee>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-background"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-background"></div>
    </div>
  );
}
