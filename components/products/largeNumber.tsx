import React from "react";

interface LargeNumberProps {
  number: number;
}

const LargeNumber: React.FC<LargeNumberProps> = ({ number }) => {
  return (
    <div className="absolute right-0 top-0 mr-4 mt-4 flex h-20 w-20 items-center justify-center rounded-full bg-yellow-500 text-black">
      <span className="text-4xl font-bold">{number}</span>
    </div>
  );
};

export default LargeNumber;
