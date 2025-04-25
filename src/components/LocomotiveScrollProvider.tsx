/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useEffect, useRef } from "react";
import "locomotive-scroll/dist/locomotive-scroll.css";

export default function LocomotiveScrollProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const scrollRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    let scroll: any;

    const initScroll = async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;

      if (scrollRef.current) {
        scroll = new LocomotiveScroll({
          el: scrollRef.current,
          smooth: true,
          lerp: 0.1,
        });
      }
    };

    initScroll();

    return () => {
      scroll?.destroy();
    };
  }, []);

  return (
    <div data-scroll-container ref={scrollRef} className="relative">
      {children}
    </div>
  );
}
