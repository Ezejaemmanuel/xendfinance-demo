// components/Section3.tsx
import React from "react";
import Image from "next/image";
import StickySection from "@/app/products/stickySection";
import ShineBorder from "@/components/magicui/shine-border";

const Section3: React.FC = () => {
  const section = {
    title: "Governance",
    description:
      "The Xend Finance governance system will determine strategies that are accepted into the vaults and community members who participate in governance earn a part of the processing fees from the vault operations. The Xend Finance governance system will be deployed across blockchains and users can govern on multiple blockchains.",
    imageUrl: "/why-3.png",
    reverse: false,
  };

  return (
    <section className="body-font mx-auto flex max-w-[99dvw] flex-col items-center justify-center overflow-hidden bg-neutral-950 text-gray-600 dark:bg-neutral-950 md:max-w-[90dvw] lg:max-w-[80dvw]">
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

export default Section3;
