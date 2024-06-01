// components/HeroSection.tsx
import React from "react";
import ShineBorder from "./magicui/shine-border";
import Image from "next/image";

interface HeroSectionProps {
  title: string;
  description: string;
  buttonText1: string;
  buttonText2: string;
  imageUrl: string;
  reverse?: boolean;
}

const HeroSection: React.FC<HeroSectionProps> = ({
  title,
  description,
  buttonText1,
  buttonText2,
  imageUrl,
  reverse = false,
}) => {
  return (
    <section className="body-font max-w-[950dvw] bg-neutral-950 text-gray-600 dark:bg-neutral-950 md:max-w-[80dvw]">
      <div
        className={`container mx-auto flex flex-col items-center  px-5  md:flex-row  ${reverse ? "md:flex-row-reverse" : "md:flex-row "}`}
      >
        <div className="mb-16 flex flex-col items-center text-center md:mb-0 md:w-1/2 md:items-start md:pr-16 md:text-left lg:flex-grow lg:pr-24">
          <h1 className="title-font mb-4 text-3xl font-medium text-gray-900 dark:text-white sm:text-4xl">
            {title}
            <br className="hidden lg:inline-block" />
          </h1>
          <p className="mb-8 text-xs leading-relaxed text-gray-700 dark:text-gray-300 md:text-sm">
            {description}
          </p>
          <div className="flex justify-center">
            {/* <button className="inline-flex rounded border-0 bg-indigo-500 px-6 py-2 text-lg text-white hover:bg-indigo-600 focus:outline-none">
              {buttonText1}
            </button> */}
            <ShineBorder
              className="text-center text-sm font-bold  capitalize md:text-lg"
              color={["#A07CFE", "#FE8FB5", "#FFBE7B"]}
            >
              {buttonText1}
            </ShineBorder>
            <button className="ml-4 inline-flex rounded border-0 bg-gray-100 px-6 py-2 text-lg text-gray-700 hover:bg-gray-200 focus:outline-none">
              {buttonText2}
            </button>
          </div>
        </div>
        <div className="w-5/6 md:w-1/2 lg:w-full lg:max-w-lg">
          <Image
            className=" rounded-full bg-inherit object-cover object-center"
            alt="hero"
            width={800}
            height={800}
            quality={70}
            src={imageUrl}
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
