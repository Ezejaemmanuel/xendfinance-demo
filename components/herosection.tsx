import Meteors from "./magicui/meteors";
// import World from "./globe-yes";
import { Suspense } from "react";
import WordRotate from "./magicui/word-rotate";
import LoadingComponent from "./loaderComponent";
import dynamic from "next/dynamic";

const World = dynamic(() => import("./globe-yes"), {
  ssr: false,
});
const HeroSection = () => {
  return (
    <div className="relative mt-3 flex flex-col items-center overflow-hidden lg:mt-10">
      <div className="absolute left-1/2 top-[80%] -z-10 -translate-x-1/2 -translate-y-1/2 transform">
        <Suspense>
          <World />
        </Suspense>
      </div>
      {/* <div className="absolute top-0 left-1/2 w-64 h-64 bg-[radial-gradient(circle,_rgba(255,0,150,0.5),_rgba(0,204,255,0.5))] rounded-full"></div> */}
      <Suspense>
        <Meteors number={30} />
      </Suspense>
      <div className="absolute inset-0 h-20 w-20 rounded-full bg-[radial-gradient(circle_at_center,_rgba(255,165,0,0.8),_transparent)]"></div>
      {/* <h1 className="text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide z-10">
        Revolutionizing Finance with
        <span className="bg-gradient-to-r from-orange-500 to-red-800 text-transparent bg-clip-text">
          {" "}
          Cryptocurrency-backed Real World Assets (RWA)
        </span>
      </h1> */}
      <h1 className="z-10 text-center  text-4xl tracking-wide sm:text-6xl lg:text-7xl">
        <div className="h-18">
          <WordRotate
            className="z-10  text-center  text-4xl tracking-wide sm:text-6xl lg:text-7xl"
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
        <span className="bg-gradient-to-r from-orange-500 to-red-800 bg-clip-text text-transparent">
          {" "}
          Cryptocurrency-backed Real World Assets (RWA)
        </span>
      </h1>
      <p className="z-10 mt-10 max-w-4xl text-center text-sm text-neutral-300 md:text-lg">
        New Era of Financial Freedom: Explore the Fusion of Cryptocurrency and
        Real World Assets on Xend Finance.
      </p>
      <div className="z-10 my-10 flex justify-center">
        <a
          href="#"
          className="mx-3 rounded-md bg-gradient-to-r from-orange-500 to-red-800 px-4 py-3 text-white"
        >
          Learn More
        </a>
        <a
          href="/getStarted"
          className="mx-3 rounded-md border border-orange-500 px-4 py-3 text-green-500"
        >
          Get Started
        </a>
      </div>
    </div>
  );
};

export default HeroSection;
