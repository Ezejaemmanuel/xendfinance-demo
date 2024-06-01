// components/SwitchWallet.tsx
import React from "react";
import Image from "next/image";
import ShineBorder from "../magicui/shine-border";
import { BorderBeam } from "../magicui/border-beam";
import { SlightFlip } from "../magicui/slipFitText";
import { TextGenerateEffect } from "../magicui/text-generate-effect";
import dynamic from "next/dynamic";
import RetroGrid from "../magicui/retro-grid";

const SwitchWallet: React.FC = () => {
  return (
    <div className="flex max-h-[90dvh] max-w-[95dvw] flex-col justify-between gap-4  overflow-hidden py-5 md:h-[90dvh] md:max-w-[80dvw] md:py-12">
      <div className="relative flex flex-col overflow-hidden rounded-[10%] px-4">
        <h1 className="bg-gradient-to-bl from-fuchsia-600 via-purple-200 to-violet-200 bg-clip-text text-2xl font-extrabold text-transparent md:text-4xl">
          Easy And Secure Wallet Infrastructure For Your Business
        </h1>
      </div>

      <section className="body-font relative  flex  flex-col items-center justify-center overflow-hidden ">
        <RetroGrid className="" />
        <div className="container mx-auto flex flex-col items-center  gap-4  overflow-hidden px-5 md:flex-row md:gap-12">
          <div className="mb-16 flex flex-col items-center gap-4 text-center md:mb-0 md:w-1/2 md:items-start md:pr-16 md:text-left lg:flex-grow lg:pr-24">
            <h1 className="title-font mb-4 hidden text-3xl font-medium text-gray-900 dark:text-white sm:text-4xl md:block">
              SwitchWallet
              <br className="hidden lg:inline-block" />
            </h1>
            <TextGenerateEffect
              words={
                "SwitchWallet is an enterprise-grade wallet provision service. Leveraging our technology, you can securely process transactions in a fraction of the time while saving costs."
              }
              className={
                " md:text-md bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-orange-700 via-lime-400 to-violet-100 bg-clip-text text-sm font-bold   text-transparent "
              }
            />
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
          <div className="relative w-full overflow-hidden rounded-full p-6 md:w-1/2 lg:w-full lg:max-w-lg">
            <Image
              className=" rounded-full bg-inherit  object-cover object-center"
              alt="hero"
              width={2000}
              height={2000}
              quality={70}
              src="/wallet.png"
            />
            <BorderBeam size={250} duration={12} delay={9} />
          </div>
        </div>
      </section>
    </div>
  );
};

export default SwitchWallet;
