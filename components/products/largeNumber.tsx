import React from "react";

interface LargeNumberProps {
  number: number;
  className: string;
}

const LargeNumber: React.FC<LargeNumberProps> = ({ number, className }) => {
  return (
    <div
      className={`absolute right-0 top-0  flex h-10 w-10 items-center ${className} justify-center rounded-full bg-yellow-500 text-black md:h-20 md:w-20`}
    >
      <span className=" text-2xl font-bold md:text-4xl">{number}</span>
    </div>
  );
};

export default LargeNumber;
