// components/ResponsiveSection.tsx
import React from "react";
import Image from "next/image";

interface SectionData {
  title: string;
  description: string;
}

interface ResponsiveSectionProps {
  section: SectionData;
}

const ResponsiveSection: React.FC<ResponsiveSectionProps> = ({ section }) => {
  return (
    <div className="flex h-[50dvh] flex-col items-center bg-neutral-950 px-5 py-10 md:h-[70dvh] md:py-20">
      <div className="max-w-2xl text-center text-white">
        <h1 className="mb-4 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-purple-700 via-orange-600 to-sky-700 bg-clip-text text-3xl font-bold text-transparent sm:text-4xl md:text-5xl">
          {section.title}
        </h1>
        <p className="text-base sm:text-lg md:text-xl">{section.description}</p>
      </div>
    </div>
  );
};

const sectionData = {
  title: "Why Build with Xend SDK?",
  description:
    "Xend Finance has created a highly flexible and robust infrastructure to become a Layer-2 DeFi protocol. Xend Finance has composed multiple Layer-1 DeFi protocols across different blockchains to provide better yields, as opposed to using Layer-1 DeFi yield platforms individually.",
};

const WhySection = () => {
  return <ResponsiveSection section={sectionData} />;
};

export default WhySection;
