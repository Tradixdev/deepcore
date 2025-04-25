/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useEffect, useRef } from "react";
import "locomotive-scroll/dist/locomotive-scroll.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

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
          multiplier: 1, // optional: adjust scroll speed
        });

        scroll.on("scroll", ScrollTrigger.update);

        ScrollTrigger.scrollerProxy(scrollRef.current, {
          scrollTop(value) {
            return arguments.length
              ? scroll.scrollTo(value, { duration: 0, disableLerp: true })
              : scroll.scroll.instance.scroll.y;
          },
          getBoundingClientRect() {
            return {
              top: 0,
              left: 0,
              width: window.innerWidth,
              height: window.innerHeight,
            };
          },
          pinType: scrollRef.current.style.transform ? "transform" : "fixed",
        });

        ScrollTrigger.addEventListener("refresh", () => scroll.update());
        ScrollTrigger.refresh();
      }
    };

    initScroll();

    return () => {
      if (scroll) {
        scroll.destroy();
        ScrollTrigger.removeEventListener("refresh", () => scroll.update());
      }
    };
  }, []);

  return (
    <div data-scroll-container ref={scrollRef} className="relative">
      {children}
    </div>
  );
}
