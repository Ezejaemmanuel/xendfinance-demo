// components/Section2.tsx
import React from "react";
import Image from "next/image";
import StickySection from "@/app/products/stickySection";
import ShineBorder from "@/components/magicui/shine-border";

const Section2: React.FC = () => {
  const section = {
    title: "x-Vault system",
    description:
      "The x-vault system is a system that implements multiple yield generation strategies that automatically seek out the highest yields available in DeFi. These x-vaults accept your deposit, then the vault system distributes the funds through multiple strategies, which automatically seek out the best yields (inspired by yearn vaults). Supported Blockchains: BSC and Polygon.",
    imageUrl: "/why-2.png",
    reverse: true,
  };

  return (
    <section className="body-font mx-auto flex max-w-[99dvw] flex-col items-center justify-center overflow-hidden bg-neutral-950 py-6 text-gray-600 dark:bg-neutral-950 md:max-w-[96dvw] md:py-0 lg:max-w-[95dvw]">
      <div
        className={`container mx-auto flex items-center overflow-hidden px-5 ${section.reverse ? "flex-col md:flex-row" : "flex-col-reverse md:flex-row-reverse"}`}
      >
        <div className="mb-16 flex flex-col items-center text-center md:mb-0 md:w-1/2 md:items-start md:pr-16 md:text-left lg:flex-grow lg:pr-24">
          <h1 className="title-font mb-4  bg-[conic-gradient(at_top,_var(--tw-gradient-stops))] from-amber-600 via-sky-500 to-teal-300 bg-clip-text text-3xl font-medium  text-transparent  sm:text-4xl md:text-5xl">
            {section.title}
          </h1>
          <p className="mb-8 text-xs leading-relaxed text-gray-700 dark:text-gray-300 sm:text-sm md:text-lg">
            {section.description}
          </p>
          <div className="flex justify-center">
            <ShineBorder
              className="md:text-md text-center text-sm font-bold capitalize"
              color={["#A07CFE", "#FE8FB5", "#FFBE7B"]}
            >
              Learn More
            </ShineBorder>
            <button className="ml-4 inline-flex rounded border-0 bg-gray-100 px-6 py-2 text-lg text-gray-700 hover:bg-gray-200 focus:outline-none">
              Get Started
            </button>
          </div>
        </div>
        <div className="relative w-5/6 overflow-hidden md:w-1/2 lg:w-full lg:max-w-lg">
          <Image
            className="bg-inherit object-cover object-center"
            alt="hero"
            width={2000}
            height={2000}
            quality={70}
            src={section.imageUrl}
          />
        </div>
      </div>
    </section>
  );
};

export default Section2;
