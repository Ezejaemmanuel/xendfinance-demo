"use client";

import { cn } from "@/lib/utils";
import { AnimatedList } from "@/components/magicui/animated-list";
import {
  FaWallet,
  FaSign,
  FaCheck,
  FaExchangeAlt,
  FaEthereum,
  FaUnlink,
  FaNetworkWired,
} from "react-icons/fa";

interface Item {
  name: string;
  description: string;
  icon: JSX.Element;
  color: string;
  time: string;
}

let notifications = [
  {
    name: "Visit Migration Tool",
    description: "Go to migrate.xend.finance",
    time: "Step 1",
    icon: <FaNetworkWired />,
    color: "#00C9A7",
  },
  {
    name: "Connect Wallet",
    description: "Connect your preferred wallet",
    time: "Step 2",
    icon: <FaWallet />,
    color: "#FFB800",
  },
  {
    name: "Approve Transaction",
    description: "Click the Approve button",
    time: "Step 3",
    icon: <FaSign />,
    color: "#FF3D71",
  },
  {
    name: "Sign Transaction",
    description: "Sign the transaction in your wallet",
    time: "Step 4",
    icon: <FaCheck />,
    color: "#1E86FF",
  },
  {
    name: "Click Migrate",
    description: "Click the Migrate button",
    time: "Step 5",
    icon: <FaExchangeAlt />,
    color: "#00C9A7",
  },
  {
    name: "Confirm Transaction",
    description: "Confirm in your wallet",
    time: "Step 6",
    icon: <FaCheck />,
    color: "#FFB800",
  },
  {
    name: "Import Token",
    description: "Import RWA token using contract address",
    time: "Step 7",
    icon: <FaEthereum />,
    color: "#FF3D71",
  },
  {
    name: "Bridge to Arbitrum",
    description: "Optional: Bridge RWA to Arbitrum",
    time: "Optional",
    icon: <FaUnlink />,
    color: "#1E86FF",
  },
];

const Notification = ({ name, description, icon, color, time }: Item) => {
  return (
    <figure
      className={cn(
        "relative mx-auto min-h-fit w-full max-w-[400px] transform cursor-pointer overflow-hidden rounded-2xl p-4",
        "transition-all duration-200 ease-in-out hover:scale-[103%]",
        "bg-white [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)]",
        "transform-gpu dark:bg-transparent dark:backdrop-blur-md dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]",
      )}
    >
      <div className="flex flex-row items-center gap-3">
        <div
          className="flex h-10 w-10 items-center justify-center rounded-2xl"
          style={{
            backgroundColor: color,
          }}
        >
          <span className="text-lg">{icon}</span>
        </div>
        <div className="flex flex-col overflow-hidden">
          <figcaption className="flex flex-row items-center whitespace-pre text-lg font-medium dark:text-white ">
            <span className="text-sm sm:text-lg">{name}</span>
            <span className="mx-1">·</span>
            <span className="text-xs text-gray-500">{time}</span>
          </figcaption>
          <p className="text-sm font-normal dark:text-white/60">
            {description}
          </p>
        </div>
      </div>
    </figure>
  );
};

export function AnimatedListSteps() {
  return (
    <div className="relative flex max-h-[400px] min-h-[400px] w-full max-w-[32rem] flex-col overflow-hidden rounded-lg border bg-background p-6 shadow-lg">
      <AnimatedList>
        {notifications.map((item, idx) => (
          <Notification {...item} key={idx} />
        ))}
      </AnimatedList>
    </div>
  );
}
