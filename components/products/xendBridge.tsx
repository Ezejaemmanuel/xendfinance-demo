// components/HeroSection.tsx
import React from "react";
import Image from "next/image";
import ShineBorder from "../magicui/shine-border";
import { BorderBeam } from "../magicui/border-beam";
import { SlightFlip } from "../magicui/slipFitText";
import { TextGenerateEffect } from "../magicui/text-generate-effect";
import dynamic from "next/dynamic";
const LottieAnimation = dynamic(
  () => import("@/components/magicui/lottie-animations"),
  {
    ssr: false,
  },
);
import blockchain from "@/public/blockchain.json";

const XendBridge: React.FC = () => {
  return (
    <div className="flex max-h-[90dvh] max-w-[95dvw] flex-col justify-between gap-4  overflow-hidden py-5 md:h-[90dvh] md:max-w-[80dvw] md:py-12">
      <div className="relative flex flex-col overflow-hidden rounded-[10%] px-4">
        <h1 className="bg-gradient-to-bl from-fuchsia-600 via-purple-200 to-violet-200 bg-clip-text text-4xl font-extrabold text-transparent md:text-6xl">
          What is XendBridge?
        </h1>

        {/* <TextGenerateEffect
          words={
            "XendBridge is a tool that lets people and businesses easily swap their regular money for cryptocurrencies, and vice versa. It's like a super simple money exchange service for both dollars and digital coins."
          }
          className={
            " md:text-md bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-orange-700 via-lime-400 to-violet-100 bg-clip-text text-sm font-bold   text-transparent "
          }
        /> */}
        <TextGenerateEffect
          words={
            "XendBridge is a tool that lets people and businesses easily swap their regular money for cryptocurrencies, and vice versa. It is like a super simple money exchange service for both dollars and digital coins."
          }
          className={
            " md:text-md bg-[conic-gradient(at_left,_var(--tw-gradient-stops))] from-fuchsia-200 via-orange-500  to-gray-200 bg-clip-text text-sm font-bold   text-transparent "
          }
        />
      </div>

      <section className="body-font flex   flex-col items-center justify-center overflow-hidden ">
        <div className="container mx-auto flex flex-col items-center  gap-4  overflow-hidden px-5 md:flex-row md:gap-12">
          <div className="relative w-full overflow-hidden rounded-full p-6 md:w-1/2 lg:w-full lg:max-w-lg">
            <LottieAnimation animationData={blockchain} largeScreenSize={500} />
            <BorderBeam size={250} duration={2} delay={2} />
          </div>
          <div className="mb-16 flex flex-col items-center text-center md:mb-0 md:w-1/2 md:items-start md:pr-16 md:text-left lg:flex-grow lg:pr-24">
            <h1 className="title-font mb-4 hidden text-3xl font-medium text-gray-900 dark:text-white sm:text-4xl md:block">
              Easy Money Exchange
              <br className="hidden lg:inline-block" />
            </h1>
            <p className="mb-8 hidden text-xs leading-relaxed text-gray-700 dark:text-gray-300 md:block md:text-sm">
              XendBridge makes it super easy to convert your dollars into
              digital money like Bitcoin, or turn your digital money back into
              regular cash. It is safe and fast, so you do not have to worry
              about complicated steps or losing your money.
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
        </div>
      </section>
    </div>
  );
};

export default XendBridge;
