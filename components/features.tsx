// import React from "react";
// import {
//   FiGlobe,
//   FiCreditCard,
//   FiShield,
//   FiDollarSign,
//   FiPercent,
//   FiBriefcase,
//   FiCpu,
// } from "react-icons/fi";
// import { NeonGradientCard } from "./magicui/neon-gradient";
// import { MotionDiv } from "./animateOnEnter";

// const features = [
//   {
//     title: "Real-world Assets",
//     description: "Invest in real-world assets like stocks, real estate, etc.",
//     IconComponent: FiBriefcase,
//   },
//   {
//     title: "A Global Access",
//     description: "Unrestricted membership from around the world.",
//     IconComponent: FiGlobe,
//   },
//   {
//     title: "Flexible Loans",
//     description: "Access to loans with flexible repayment and terms.",
//     IconComponent: FiCreditCard,
//   },
//   {
//     title: "Insurance",
//     description: "Decentralized insurance to protect assets and investments.",
//     IconComponent: FiShield,
//   },
//   {
//     title: "Save in Stable Currencies",
//     description: "Fluctuating and devalued currency is a worry of the past.",
//     IconComponent: FiDollarSign,
//   },
//   {
//     title: "Earn Interest and Tokens",
//     description:
//       "Our secure savings earn multiple levels of interest and benefits.",
//     IconComponent: FiBriefcase,
//   },
//   {
//     title: "High Interest Rates",
//     description: "Up to 15% APY. Traditional interest rates offer 1 – 2% APY.",
//     IconComponent: FiPercent,
//   },
//   {
//     title: "XEND-AI",
//     description: "Get real-time AI assistance for smart investment decisions.",
//     IconComponent: FiCpu,
//   },
// ];

// interface FeatureProps {
//   title: string;
//   description: string;
//   IconComponent?: React.ComponentType<any>;
// }

// const Feature: React.FC<FeatureProps> = ({
//   title,
//   description,
//   IconComponent,
// }) => (
//   <div className="flex flex-col items-center p-4 bg-neutral-950 text-white rounded-lg shadow-lg">
//     {IconComponent && <IconComponent size={32} className="text-blue-500" />}
//     <h3 className="mt-2 text-lg font-semibold">{title}</h3>
//     <p className="mt-1 text-sm text-center">{description}</p>
//   </div>
// );

// const FeaturesSection: React.FC = () => (
//   <section className="py-12 bg-black">
//     <div className="container mx-auto text-center">
//       <h2 className="text-3xl font-bold text-white">Features</h2>
//       <p className="mt-4 text-lg text-gray-300">
//         Every tool you need to optimize your savings and investment potential
//       </p>
//       <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
//         {features.map((feature, index) => (
//           <MotionDiv key={index} delay={index * 0.4}>
//             <Feature  {...feature} />
//             </MotionDiv>
//         ))}
//       </div>
//     </div>
//   </section>
// );

// export defaul;t FeaturesSection;
"use client";
import React from "react";

import { HoverEffect } from "./magicui/cardHover";
import { MultiDirectionSlide } from "./magicui/multi-direction";

import {
  FaBriefcase,
  FaGlobe,
  FaCreditCard,
  FaShieldAlt,
  FaDollarSign,
  FaPercentage,
  FaMicrochip,
} from "react-icons/fa";

const featureItems = [
  {
    title: "Real-world Assets",
    description: "Invest in real-world assets like stocks, real estate, etc.",
    link: "/real-world-assets",
    IconComponent: FaBriefcase,
  },
  {
    title: "A Global Access",
    description: "Unrestricted membership from around the world.",
    link: "/global-access",
    IconComponent: FaGlobe,
  },
  {
    title: "Flexible Loans",
    description: "Access to loans with flexible repayment and terms.",
    link: "/flexible-loans",
    IconComponent: FaCreditCard,
  },
  {
    title: "Insurance",
    description: "Decentralized insurance to protect assets and investments.",
    link: "/insurance",
    IconComponent: FaShieldAlt,
  },
  {
    title: "Save in Stable Currencies",
    description: "Fluctuating and devalued currency is a worry of the past.",
    link: "/stable-currencies",
    IconComponent: FaDollarSign,
  },
  {
    title: "Earn Interest and Tokens",
    description:
      "Our secure savings earn multiple levels of interest and benefits.",
    link: "/earn-interest",
    IconComponent: FaBriefcase,
  },
  {
    title: "High Interest Rates",
    description: "Up to 15% APY. Traditional interest rates offer 1 – 2% APY.",
    link: "/high-interest-rates",
    IconComponent: FaPercentage,
  },
  {
    title: "XEND-AI",
    description: "Get real-time AI assistance for smart investment decisions.",
    link: "/xend-ai",
    IconComponent: FaMicrochip,
  },
];

const App = () => {
  return (
    <div>
      <MultiDirectionSlide
        text1={"Features"}
        text2={
          "Every tool you need to optimize your savings and Investment potential"
        }
        className1="font-bold text-4xl md:text-6xl"
        className2="text-sm md:text-xl"
      />
      <HoverEffect items={featureItems} className="your-custom-class" />
    </div>
  );
};

export default App;
