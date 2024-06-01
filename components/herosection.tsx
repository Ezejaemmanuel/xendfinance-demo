import Meteors from "./magicui/meteors";
// import World from "./globe-yes";
import { Suspense } from "react";
import WordRotate from "./magicui/word-rotate";
import LoadingComponent from "./loaderComponent";
import dynamic from "next/dynamic";
import ShineBorder from "./magicui/shine-border";
import Link from "next/link";

const World = dynamic(() => import("./globe-yes"), {
  ssr: false,
});
const HeroSection = () => {
  return (
    <div className="relative mt-3 flex flex-col items-center  overflow-hidden bg-transparent lg:mt-10">
      <div className="absolute left-1/2 top-[80%] -z-10 -translate-x-1/2 -translate-y-1/2 transform !bg-transparent">
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
          {/* <WordRotate
            className="z-10  text-center  text-4xl tracking-wide sm:text-6xl lg:text-7xl"
            words={[
              "Revolutionizing",
              "Transforming",
              "Reforming",
              "Remodeling",
              "Recasting",
              "Refashioning",
            ]}
          /> */}
          <h1 className="z-10  text-center  text-4xl tracking-wide sm:text-6xl lg:text-7xl">
            Revolutionizing
          </h1>
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
        <Link href="/getStarted">
          <ShineBorder
            className="bg-orange-500 text-center text-sm font-bold  capitalize md:text-lg"
            color={["#A07CFE", "#FE8FB5", "#FFBE7B"]}
          >
            Get Started
          </ShineBorder>
        </Link>
        <a
          href="#"
          className="mx-3 rounded-md bg-gradient-to-r from-orange-500 to-red-800 px-4 py-3 text-white"
        >
          Learn More
        </a>
        {/* <a
          href="/getStarted"
          className="mx-3 rounded-md border border-orange-500 px-4 py-3 text-green-500"
        >
          Get Started
        </a> */}
      </div>
    </div>
  );
};

export default HeroSection;

// "use client";
// import { Stars } from "@react-three/drei";
// import { Canvas } from "@react-three/fiber";
// import React, { useEffect } from "react";
// import { FiArrowRight } from "react-icons/fi";
// import {
//   useMotionTemplate,
//   useMotionValue,
//   motion,
//   animate,
// } from "framer-motion";

// const COLORS_TOP = ["#13FFAA", "#1E67C6", "#CE84CF", "#DD335C"];

// export const AuroraHero = () => {
//   const color = useMotionValue(COLORS_TOP[0]);

//   useEffect(() => {
//     animate(color, COLORS_TOP, {
//       ease: "easeInOut",
//       duration: 10,
//       repeat: Infinity,
//       repeatType: "mirror",
//     });
//   }, []);

//   const backgroundImage = useMotionTemplate`radial-gradient(125% 125% at 50% 0%, #020617 50%, ${color})`;
//   const border = useMotionTemplate`1px solid ${color}`;
//   const boxShadow = useMotionTemplate`0px 4px 24px ${color}`;

//   return (
//     <motion.section
//       style={{
//         backgroundImage,
//       }}
//       className="relative grid min-h-screen place-content-center overflow-hidden bg-gray-950 px-4 py-24 text-gray-200"
//     >
//       <div className="relative z-10 flex flex-col items-center">
//         <span className="mb-1.5 inline-block rounded-full bg-gray-600/50 px-3 py-1.5 text-sm">
//           Beta Now Live!
//         </span>
//         <h1 className="max-w-3xl bg-gradient-to-br from-white to-gray-400 bg-clip-text text-center text-3xl font-medium leading-tight text-transparent sm:text-5xl sm:leading-tight md:text-7xl md:leading-tight">
//           Decrease your SaaS churn by over 90%
//         </h1>
//         <p className="my-6 max-w-xl text-center text-base leading-relaxed md:text-lg md:leading-relaxed">
//           Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quae, et,
//           distinctio eum impedit nihil ipsum modi.
//         </p>
//         <motion.button
//           style={{
//             border,
//             boxShadow,
//           }}
//           whileHover={{
//             scale: 1.015,
//           }}
//           whileTap={{
//             scale: 0.985,
//           }}
//           className="group relative flex w-fit items-center gap-1.5 rounded-full bg-gray-950/10 px-4 py-2 text-gray-50 transition-colors hover:bg-gray-950/50"
//         >
//           Start free trial
//           <FiArrowRight className="transition-transform group-hover:-rotate-45 group-active:-rotate-12" />
//         </motion.button>
//       </div>

//       <div className="absolute inset-0 z-0">
//         <Canvas>
//           <Stars radius={50} count={2500} factor={4} fade speed={2} />
//         </Canvas>
//       </div>
//     </motion.section>
//   );
// };
