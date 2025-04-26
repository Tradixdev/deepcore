"use client";

import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ChevronDown } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

interface AccordionItemProps {
  number: number;
  question: string;
  answer: string;
}

interface FAQItem {
  question: string;
  answer: string;
}

const AccordionItem: React.FC<AccordionItemProps> = ({
  number,
  question,
  answer,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);
  const answerRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (contentRef.current && answerRef.current) {
      const tl = gsap.timeline();

      if (isOpen) {
        // First set height to auto to get the actual height
        gsap.set(contentRef.current, {
          visibility: "visible",
          height: "fit-content",
        });

        // Get the actual height
        const height = contentRef.current.offsetHeight;

        // Reset height to 0 before animating
        gsap.set(contentRef.current, { height: 0 });

        // Animate
        tl.to(contentRef.current, {
          height: height,
          duration: 0.5,
          ease: "power2.out",
        });

        tl.fromTo(
          answerRef.current,
          { y: -20, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.3 },
          "-=0.2"
        );
      } else {
        tl.to(contentRef.current, {
          height: 0,
          duration: 0.4,
          ease: "power2.in",
          onComplete: () => {
            gsap.set(contentRef.current, {
              visibility: "hidden",
            });
          },
        });
      }
    }
  }, [isOpen]);

  return (
    <div
      ref={containerRef}
      className="cursor-pointer mb-4"
      onClick={() => setIsOpen(!isOpen)}
    >
      <div className="flex w-full border border-[#EAFC35] bg-[#EAFC35]  px-10 items-center justify-between py-4 clip-custom md:py-6">
        <div className="flex items-center gap-8">
          <span className="text-lg font-medium text-background">
            {number < 10 ? `0${number}` : number}
          </span>
          <h3 className="text-lg md:text-xl text-background font-medium">
            {question}
          </h3>
        </div>
        <span
          className={`transform transition-transform text-background duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
        >
          <ChevronDown />
        </span>
      </div>
      <div
        ref={contentRef}
        className="overflow-hidden h-0 clip-custom-left bg-[#EAFC35]"
        style={{
          visibility: "hidden",
          height: 0,
        }}
      >
        <div ref={answerRef} className="px-10 py-6 text-background">
          {answer}
        </div>
      </div>
    </div>
  );
};

const FAQ: React.FC = () => {
  const accordionRef = useRef<HTMLDivElement>(null);

  const faqData: FAQItem[] = [
    {
      question: "What is OctonetAI?",
      answer:
        "OctonetAI is a decentralized AI network powered by Solana, offering scalable machine learning solutions, GPU rentals, and an AI marketplace for developers, businesses, and researchers.",
    },
    {
      question: "How can I rent GPUs on OctonetAI?",
      answer:
        "Simply sign up, select the GPU rental option, and choose the configuration that suits your AI project. Rentals are flexible and scalable, allowing you to get the performance you need.",
    },
    {
      question: " What AI models does OctonetAI offer?",
      answer:
        "OctonetAI provides a library of pre-trained and customizable machine learning models for various applications, including image recognition, natural language processing, and more.",
    },
    {
      question: "How does OctonetAI ensure security?",
      answer:
        "OctonetAI leverages Solana’s blockchain technology to offer decentralized, secure, and transparent AI operations, ensuring the integrity of your data and models.",
    },
    {
      question: "Can I share or sell my AI models on OctonetAI?",
      answer:
        "Yes! OctonetAI’s AI Marketplace allows users to share, buy, and sell machine learning models, algorithms, and AI tools, fostering collaboration within the community.",
    },
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      if (accordionRef.current) {
        const accordionItems = Array.from(accordionRef.current.children);
        const isMobile = window.innerWidth <= 768;

        gsap.fromTo(
          accordionItems,
          { y: 50, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            stagger: 0.2,
            duration: 0.8,
            ease: "power4.out",
            scrollTrigger: {
              trigger: accordionRef.current,
              start: "top 80%",
              ...(isMobile ? {} : { scroller: "[data-scroll-container]" }),
              once: true,
            },
          }
        );
      }
    }, 500); // Delay to ensure Locomotive is ready

    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="max-w-7xl mx-auto">
      <div className="flex flex-col py-10 px-5 md:px-0 md:py-20">
        <div className="mb-10 md:mb-20 flex justify-center items-center">
          <div className="flex flex-col justify-center items-center">
            <div className="overflow-hidden">
              <h2 className="text-5xl font-semibold">
                Frequently Asked Questions
              </h2>
            </div>
          </div>
        </div>
        <div ref={accordionRef} className="space-y-4 w-full">
          {faqData.map((faq, index) => (
            <AccordionItem
              key={index}
              number={index + 1}
              question={faq.question}
              answer={faq.answer}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
