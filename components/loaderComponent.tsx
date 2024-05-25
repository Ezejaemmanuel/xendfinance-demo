"use client";

import { cn } from "@/lib/utils";
import Loader from "./loader";

interface LoadingComponentProps {
  className?: string;
  // other props...
}

const LoadingComponent: React.FC<LoadingComponentProps> = ({ className }) => {
  return (
    <div className={cn("flex justify-center items-center", className)}>
      <Loader />
    </div>
  );
};

export default LoadingComponent;
