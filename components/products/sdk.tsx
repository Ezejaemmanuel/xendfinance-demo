"use client";
import React from "react";
import { BackgroundBeams } from "../magicui/background-beams";
import FeaturesDemo from "./sdk-code-formatter";

export function SdkPage() {
  return (
    <div className="relative flex h-[98dvh] w-full flex-col  rounded-md bg-neutral-950 antialiased">
      <h1 className="relative z-10  bg-gradient-to-l from-cyan-500  via-red-500 to-indigo-400   bg-clip-text text-center font-sans text-3xl  font-bold text-transparent md:text-7xl">
        Explore The Xend finance SDK
      </h1>
      <div className="">
        <FeaturesDemo />
      </div>
      <BackgroundBeams />
    </div>
  );
}
