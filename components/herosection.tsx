import Meteors from "./magicui/meteors";
import World from "./globe-yes";
import { Suspense } from "react";
import WordRotate from "./magicui/word-rotate";
import LoadingComponent from "./loaderComponent";

const HeroSection = () => {
  return (
    <div className="relative flex flex-col overflow-hidden items-center mt-3 lg:mt-10">
      <div className="absolute top-[80%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 -z-10">
        <Suspense>
          <World />
        </Suspense>
      </div>
      {/* <div className="absolute top-0 left-1/2 w-64 h-64 bg-[radial-gradient(circle,_rgba(255,0,150,0.5),_rgba(0,204,255,0.5))] rounded-full"></div> */}
      <Suspense>
        <Meteors number={30} />
      </Suspense>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(255,165,0,0.8),_transparent)] rounded-full w-20 h-20"></div>
      {/* <h1 className="text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide z-10">
        Revolutionizing Finance with
        <span className="bg-gradient-to-r from-orange-500 to-red-800 text-transparent bg-clip-text">
          {" "}
          Cryptocurrency-backed Real World Assets (RWA)
        </span>
      </h1> */}
      <h1 className="text-4xl sm:text-6xl  lg:text-7xl text-center tracking-wide z-10">
        <div className="h-18">
          <WordRotate
            className="text-4xl  sm:text-6xl  lg:text-7xl text-center tracking-wide z-10"
            words={[
              "Revolutionizing",
              "Transforming",
              "Reforming",
              "Remodeling",
              "Recasting",
              "Refashioning",
            ]}
          />
        </div>{" "}
        Finance with
        <span className="bg-gradient-to-r from-orange-500 to-red-800 text-transparent bg-clip-text">
          {" "}
          Cryptocurrency-backed Real World Assets (RWA)
        </span>
      </h1>
      <p className="mt-10 md:text-lg text-sm text-center text-neutral-300 max-w-4xl z-10">
        New Era of Financial Freedom: Explore the Fusion of Cryptocurrency and
        Real World Assets on Xend Finance.
      </p>
      <div className="flex justify-center my-10 z-10">
        <a
          href="#"
          className="bg-gradient-to-r from-orange-500 to-red-800 py-3 px-4 mx-3 rounded-md text-white"
        >
          Learn More
        </a>
        <a
          href="/getStarted"
          className="py-3 px-4 mx-3 rounded-md border border-orange-500 text-green-500"
        >
          Get Started
        </a>
      </div>
    </div>
  );
};

export default HeroSection;
