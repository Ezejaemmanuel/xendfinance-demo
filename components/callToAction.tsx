import { ArrowRightIcon } from "lucide-react";
import React from "react";
import Image from "next/image";
import { MotionDiv } from "./animateOnEnter";
const GlassmorphismComponent = () => {
  return (
    <MotionDiv>
      <div className="relative flex h-full max-h-[90dvh] items-center  justify-center bg-neutral-900 py-9">
        {/* Glassmorphism Background */}

        <div className="absolute inset-0 bg-neutral-950 backdrop-blur-3xl"></div>

        {/* Responsive Card */}
        <div className="relative mx-4 w-full max-w-6xl rounded-lg border  bg-neutral-950 p-12 shadow-2xl backdrop-blur-lg">
          <Image
            src="/futuristic-coin.jpeg"
            alt="Background"
            quality={75}
            fill={true}
            className="-z-10 object-cover opacity-20"
          />
          <h1 className="mb-6 scroll-m-20 text-5xl font-extrabold tracking-tight text-orange-500 lg:text-6xl">
            For Developers
          </h1>
          <p className="md:text-md mb-8 text-xs leading-8 text-neutral-100 sm:text-sm lg:text-lg">
            Xend Finance has created a highly flexible and robust infrastructure
            to become a Layer-2 DeFi protocol. Composed of multiple Layer-1 DeFi
            protocols across different blockchains to provide better yields, as
            opposed to using Layer-1 DeFi yield platforms individually, we
            invite developers to build for free.
          </p>
          <div className="flex items-center justify-center space-x-6">
            <button className="flex items-center rounded-lg bg-orange-500 px-6 py-3 text-sm text-white transition hover:bg-orange-600">
              Download SDK <ArrowRightIcon className="ml-2 h-6 w-6" />
            </button>
            <button className="rounded-lg bg-black px-6 py-3 text-lg text-white transition hover:bg-neutral-800">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </MotionDiv>
  );
};

export default GlassmorphismComponent;
