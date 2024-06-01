// components/HeroSection.tsx
import React from "react";
import Image from "next/image";
import ShineBorder from "../magicui/shine-border";
import { BorderBeam } from "../magicui/border-beam";
import { SlightFlip } from "../magicui/slipFitText";
import { TextGenerateEffect } from "../magicui/text-generate-effect";

const AutoYieldPage: React.FC = () => {
  return (
    <div className="flex max-h-[70dvh] max-w-[95dvw] flex-col justify-between gap-4 py-5 md:h-[90dvh] md:max-w-[80dvw] md:py-12">
      <div className="flex flex-col px-4">
        <h1 className="bg-[conic-gradient(at_left,_var(--tw-gradient-stops))] from-lime-500 via-stone-300 to-green-500 bg-clip-text text-4xl font-extrabold text-transparent md:text-6xl">
          What is Auto Yielding?
        </h1>
        <TextGenerateEffect
          words={
            "Auto-yielding in Xend Finance is like a self-operating piggy bank that grows your money without any effort on your part."
          }
          className={
            " md:text-md bg-[conic-gradient(at_left,_var(--tw-gradient-stops))] from-fuchsia-200 via-orange-500  to-gray-200 bg-clip-text text-sm font-bold   text-transparent "
          }
        />
      </div>

      <section className="body-font flex  flex-col items-center justify-center overflow-hidden bg-neutral-950 text-gray-600 dark:bg-neutral-950 ">
        <div className="container mx-auto flex flex-col items-center  overflow-hidden px-5 md:flex-row">
          <div className="mb-16 flex flex-col items-center text-center md:mb-0 md:w-1/2 md:items-start md:pr-16 md:text-left lg:flex-grow lg:pr-24">
            <h1 className="title-font mb-4 hidden text-3xl font-medium text-gray-900 dark:text-white sm:text-4xl md:block">
              Automated Yield Farming
              <br className="hidden lg:inline-block" />
            </h1>
            <p className="mb-8 hidden text-xs leading-relaxed text-gray-700 dark:text-gray-300 md:block md:text-sm">
              Leverage cutting-edge DeFi protocols to maximize your crypto asset
              returns with minimal effort. Our platform automates the yield
              farming process, ensuring optimal performance and convenience.
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
              className=" bg-inherit object-cover object-center"
              alt="hero"
              width={2000}
              height={2000}
              quality={70}
              src="/autoYieldImage.png"
            />
            <BorderBeam size={250} duration={12} delay={9} />
          </div>
        </div>
      </section>
    </div>
  );
};

export default AutoYieldPage;
