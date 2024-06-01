// components/HeroSection.tsx
import React from "react";
import Image from "next/image";
import ShineBorder from "../magicui/shine-border";
import TheMobilePhone from "./thePhoneItSelf";
import ModalButton from "./dialogue";
import LargeNumber from "./largeNumber";

const MobileApp: React.FC = ({}) => {
  return (
    <section
      id="mobileApp"
      className="body-font relative flex max-h-[98dvh] min-h-[95dvh] max-w-[100dvw]  flex-col items-center justify-center  px-8 text-gray-600  md:max-w-[70dvw]"
    >
      <LargeNumber number={1} />
      <h1 className=" absolute top-[99%] bg-gradient-to-r from-blue-500 to-pink-500 bg-clip-text  text-4xl  font-extrabold text-transparent md:relative md:text-6xl">
        OUR MOBILE APP
      </h1>

      <div
        className={`"md:flex-row  container mx-auto flex  flex-col  items-center   px-5 md:flex-row`}
      >
        <div className="mb-16 flex flex-col items-center text-center md:mb-0 md:w-1/2 md:items-start md:pr-16 md:text-left lg:flex-grow lg:pr-24">
          <h1 className="title-font mb-4 text-3xl font-medium text-gray-900 dark:text-white sm:text-4xl">
            Download Our Mobile App
            <br className="hidden lg:inline-block" />
          </h1>
          <p className="text-md mb-8 leading-relaxed text-gray-700 dark:text-gray-300 md:text-lg">
            You can download our mobile app in every operating system and that
            is what we want you to do
          </p>
          <div className="flex justify-center">
            {/* <button className="inline-flex rounded border-0 bg-indigo-500 px-6 py-2 text-lg text-white hover:bg-indigo-600 focus:outline-none">
              {buttonText1}
            </button> */}
            {/* <ShineBorder
                          
              className="text-center text-sm font-bold  capitalize md:text-lg"
              color={["#A07CFE", "#FE8FB5", "#FFBE7B"]}
            >
              Download
            </ShineBorder> */}
            <ModalButton />
            <button className="ml-4 inline-flex rounded border-0 bg-gray-100 px-6 py-2 text-lg text-gray-700 hover:bg-gray-200 focus:outline-none">
              Learn More
            </button>
          </div>
        </div>
        <div className="w-5/6 md:w-1/2 lg:w-full lg:max-w-lg">
          {/* <img
            className="  bg-inherit object-cover object-center"
            alt="hero"
            src={"https://dummyimage.com/720x600"}
          /> */}
          <TheMobilePhone />
        </div>
      </div>
    </section>
  );
};

export default MobileApp;
