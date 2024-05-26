// Adjusted imports based on available icons
import {
  FiGlobe,
  FiCreditCard,
  FiShield,
  FiDollarSign,
  FiBank,
  FiPercent,
  FiRocket,
} from "react-icons/fi";

const features = [
  {
    title: "Real-world Assets",
    description: "Invest in real-world assets like stocks, real estate, etc.",
    imageSrc: "/icons/assets/real-world-assets.svg",
    IconComponent: FiRocket, // Using Rocket as a substitute for Real Estate
  },
  {
    title: "A Global Access",
    description: "Unrestricted membership from around the world.",
    imageSrc: "/icons/assets/global.svg",
    IconComponent: FiGlobe,
  },
  {
    title: "Flexible Loans",
    description: "Access to loans with flexible repayment and terms.",
    imageSrc: "/icons/assets/flexible.svg",
    IconComponent: FiCreditCard,
  },
  {
    title: "Insurance",
    description: "Decentralized insurance to protect assets and investments.",
    imageSrc: "/icons/assets/insurance.svg",
    IconComponent: FiShield,
  },
  {
    title: "Save in Stable Currencies",
    description: "Fluctuating and devalued currency is a worry of the past.",
    imageSrc: "/icons/assets/stable.svg",
    IconComponent: FiDollarSign,
  },
  {
    title: "Earn Interest and Tokens",
    description:
      "Our secure savings earn multiple levels of interest and benefits.",
    imageSrc: "/icons/assets/earn.svg",
    IconComponent: FiBank, // Keeping FiBank as it seems to fit well here
  },
  {
    title: "High Interest Rates",
    description: "Up to 15% APY. Traditional interest rates offer 1 – 2% APY",
    imageSrc: "/icons/assets/high-interest.svg",
    IconComponent: FiPercent,
  },
  {
    title: "XEND-AI",
    description: "Get real-time AI assistance for smart investment decisions",
    imageSrc: "/icons/assets/xend-ai.svg",
    IconComponent: FiRocket, // Reusing Rocket for AI-related services
  },
];

// Make sure to import the correct icons from react-icons
// For example:
// import { FiRealEstate, FiGlobe, FiCreditCard, FiShield, FiDollarSign, FiBank, FiPercent, FiRobot } from 'react-icons/fi';
// Import necessary libraries and components
import React from "react";
import Image from "next/image";

interface FeatureProps {
  title: string;
  description: string;
  imageSrc: string;
  IconComponent?: React.ComponentType<any>; // Optional because not all features may have an icon
}

const Feature: React.FC<FeatureProps> = ({
  title,
  description,
  imageSrc,
  IconComponent,
}) => (
  <div className="flex flex-col items-center p-4">
    {IconComponent && <IconComponent size={32} />}
    <Image src={imageSrc} alt={title} width={64} height={64} />
    <h3 className="mt-2 text-lg font-semibold">{title}</h3>
    <p className="mt-1 text-sm">{description}</p>
  </div>
);

const FeaturesSection: React.FC = () => (
  <section className="step-3">
    <h2 className="topic-3">Features</h2>
    <p className="optimize">
      Every tool you need to optimize your savings and Investment potential
    </p>
    <div className="feat-box space-y-4 md:space-y-8">
      {features.map((feature, index) => (
        <Feature key={index} {...feature} />
      ))}
    </div>
  </section>
);

export default FeaturesSection;
