// components/HeroSection.tsx
import React from "react";
import Image from "next/image";
import ShineBorder from "../magicui/shine-border";
import { BorderBeam } from "../magicui/border-beam";
import { TextGenerateEffect } from "../magicui/text-generate-effect";
import { AnimatedListSteps } from "../magicui/animated-list-component";
import { Vortex } from "../magicui/noisy-votex";

const MigrationPage: React.FC = () => {
  return (
    <div className="flex  max-h-screen max-w-[95dvw] flex-col justify-between gap-4 py-5  md:max-h-[95dvh] md:max-w-[80dvw] md:py-12">
      <div className="flex flex-col px-4">
        <h1 className="bg-[conic-gradient(at_left,_var(--tw-gradient-stops))] from-lime-500 via-stone-300 to-green-500 bg-clip-text text-4xl font-extrabold text-transparent md:text-6xl">
          Migrating
          <span className="bg-[conic-gradient(var(--tw-gradient-stops))] from-neutral-300 via-red-400 to-yellow-600 bg-clip-text text-transparent">
            {" "}
            $XEND{" "}
          </span>
          to
          <span className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-300 via-fuchsia-700 to-indigo-200 bg-clip-text text-transparent">
            {" "}
            $RWA{" "}
          </span>
          ?
        </h1>

        <TextGenerateEffect
          words={
            "Migration in Xend Finance involves moving your assets seamlessly to a new protocol or version, ensuring you continue to benefit from improved features and security."
          }
          className={
            " md:text-md bg-[conic-gradient(at_left,_var(--tw-gradient-stops))] from-fuchsia-200 via-orange-500  to-gray-200 bg-clip-text text-sm font-bold   text-transparent "
          }
        />
      </div>

      <div className="body-font flex  flex-col items-center justify-center overflow-hidden bg-neutral-950 text-gray-600 dark:bg-neutral-950 ">
        <div className="container mx-auto flex flex-col items-center  overflow-hidden md:flex-row md:px-5">
          <div className="mb-16 flex flex-col items-center text-center md:mb-0 md:w-1/2 md:items-start md:pr-16 md:text-left lg:flex-grow lg:pr-24">
            <h1 className="title-font mb-4 hidden text-3xl font-medium text-gray-900 dark:text-white sm:text-4xl md:block">
              Seamless Asset Migration
              <br className="hidden lg:inline-block" />
            </h1>
            <p className="mb-8 hidden text-xs leading-relaxed text-gray-700 dark:text-gray-300 md:block md:text-sm">
              Transition your assets effortlessly to the latest version of our
              platform. Enjoy enhanced features, better security, and continued
              growth of your investments with our streamlined migration process.
            </p>
            <div className="flex justify-center">
              <ShineBorder
                className="text-center text-sm font-bold capitalize md:text-lg"
                color={["#A07CFE", "#FE8FB5", "#FFBE7B"]}
              >
                Learn More
              </ShineBorder>
              <button className="ml-4 inline-flex rounded border-0 bg-gray-100 px-6 py-2 text-lg text-gray-700 hover:bg-gray-200 focus:outline-none">
                Get Started
              </button>
            </div>
          </div>
          <div className="relative h-1/2 w-[97dvw] overflow-hidden  md:w-1/2 lg:w-full lg:max-w-lg">
            <AnimatedListSteps />
            <BorderBeam size={250} duration={1} delay={9} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MigrationPage;
