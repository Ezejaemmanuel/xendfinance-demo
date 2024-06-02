// components/HeroSection.tsx
import React from "react";
import Image from "next/image";
import ShineBorder from "../magicui/shine-border";
import { BorderBeam } from "../magicui/border-beam";
import StickySection from "@/app/products/stickySection";

interface SectionData {
  title: string;
  description: string;
  imageUrl: string;
  reverse: boolean;
}

interface AutoYieldPageProps {
  sections: SectionData[];
}

const AutoYieldPage: React.FC<AutoYieldPageProps> = ({ sections }) => {
  return (
    <div className="relative flex w-screen flex-col items-center justify-center gap-4 overflow-hidden bg-neutral-950 md:px-12">
      <BorderBeam size={250} duration={12} delay={9} />

      {sections.map((section, index) => (
        <StickySection key={`${index}`}>
          <section
            key={index}
            className={`body-font flex  max-w-[99dvw] flex-col overflow-hidden bg-neutral-950 text-gray-600 dark:bg-neutral-950 md:max-w-[90dvw] lg:max-w-[80dvw]`}
          >
            <div
              className={`container mx-auto flex  items-center overflow-hidden px-5  ${section.reverse ? "flex-col md:flex-row" : "flex-col-reverse md:flex-row-reverse"}`}
            >
              <div className="mb-16 flex flex-col items-center text-center md:mb-0 md:w-1/2 md:items-start md:pr-16 md:text-left lg:flex-grow lg:pr-24">
                <h1 className="title-font mb-4 text-3xl font-medium text-gray-900 dark:text-white sm:text-4xl md:text-5xl">
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
        </StickySection>
      ))}
    </div>
  );
};

export default AutoYieldPage;
