import React from "react";
import { FaArrowRight } from "react-icons/fa";

const data = [
  {
    title: "Documentation",
    description: "Download our e-book guide to learn how it works.",
  },
  {
    title: "Join Community",
    description: "Join Xend Finance Developer Community.",
  },
  {
    title: "Project Example",
    description: "Check out the winners from our Hackathon.",
  },
];

const DeveloperResources: React.FC = () => {
  return (
    <div className="flex h-screen flex-col items-center justify-center  gap-6 bg-neutral-950 md:h-screen ">
      <div className="max-w-2xl text-center text-white">
        <h1 className="mb-4 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-purple-700 via-orange-600 to-sky-700 bg-clip-text text-3xl font-bold text-transparent sm:text-4xl md:text-5xl">
          Developer Resources
        </h1>
      </div>
      <div className="flex max-w-[98dvw] flex-col items-center justify-between space-y-4 md:max-w-[90dvw] md:flex-row  lg:max-w-[80dvw] lg:space-x-4 lg:space-y-0">
        {data.map((item, index) => (
          <div
            key={index}
            className="flex transform flex-col justify-between rounded-lg bg-slate-950 p-8 shadow-md ring-1  ring-green-700 backdrop-blur-2xl transition-transform hover:scale-105"
          >
            <h3 className="mb-2 text-xl font-semibold text-orange-700">
              {item.title}
            </h3>
            <div className="flex flex-row">
              <p className="mb-4 text-gray-400">{item.description}</p>
              <FaArrowRight className="ml-2" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DeveloperResources;
