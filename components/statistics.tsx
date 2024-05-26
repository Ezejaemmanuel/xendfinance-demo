"use client";
import React from "react";
import { CardTitle, CardHeader, CardContent, Card } from "@/components/ui/card";
import { useMarketData } from "@/lib/hooks/useFetchMarketData";
import CountUp from "./countup-2";
import Image from "next/image";

interface MarketData {
  prices: [number, number][];
  market_caps: [number, number][];
  total_volumes: [number, number][];
}

interface LatestMarketData {
  latestPrice: number;
  latestMarketCap: number;
  latestTotalVolume: number;
}

const extractLatestMarketData = (data: MarketData): LatestMarketData => {
  const latestPriceEntry = data.prices[data.prices.length - 1];
  const latestMarketCapEntry = data.market_caps[data.market_caps.length - 1];
  const latestTotalVolumeEntry =
    data.total_volumes[data.total_volumes.length - 1];

  const latestPrice = latestPriceEntry[1];
  const latestMarketCap = latestMarketCapEntry[1];
  const latestTotalVolume = latestTotalVolumeEntry[1];

  return {
    latestPrice,
    latestMarketCap,
    latestTotalVolume,
  };
};

export default function Statistics() {
  const { data } = useMarketData("rwa-finance"); // Replace "coinId" with the actual coin ID
  const latestData = extractLatestMarketData(data);

  const statisticsData = [
    {
      number: latestData.latestTotalVolume,
      label: "Latest Total Volume",
      color: "#00ff89",
      prefix: "$RWA",
      prefixStyle: "text-xl",
      spanClassName: "text-4xl md:text-6xl",
      decimalPlaces: 5,
    },
    {
      number: latestData.latestPrice,
      label: "Price Per Token",
      color: "#bd1e59",
      prefix: "$",
      prefixStyle: "text-xl",
      spanClassName: "text-4xl md:text-6xl",
      decimalPlaces: 5,
    },
    {
      number: latestData.latestMarketCap,
      label: "Latest Market Cap",
      color: "#00d8ff",
      prefix: "$",
      prefixStyle: "text-xl",
      spanClassName: "text-4xl md:text-6xl",
      decimalPlaces: 5,
    },
  ];

  return (
    <Card className="mx-auto  flex w-full  items-center justify-center space-y-4 bg-[#000000] py-6 text-white md:mb-10 ">
      <CardContent className="flex flex-col items-center   justify-between gap-10 md:flex-row md:gap-0 ">
        {statisticsData.map((item, index) => (
          <NumberDisplay
            key={index}
            prefix={item.prefix}
            number={item.number}
            label={item.label}
            color={item.color}
            prefixStyle={item.prefixStyle}
            index={index}
            spanClassName={item.spanClassName}
            decimalPlaces={item.decimalPlaces}
          />
        ))}
      </CardContent>
    </Card>
  );
}

// const BackgroundText: React.FC = () => {
//   return (
//     <div className="relative flex h-full items-center justify-center bg-neutral-950 md:w-[40%]">
//       <div className="absolute inset-0 h-full w-full opacity-50">
//         <Image
//           src="/futuristic-coin.jpeg"
//           alt="Background"
//           quality={75}
//           fill={true}
//           className="object-cover"
//         />
//       </div>
//       <div className="absolute bottom-4 right-4 text-right text-4xl font-bold leading-tight sm:text-3xl md:text-4xl lg:text-5xl">
//         Join a community of millions.
//       </div>
//     </div>
//   );
// };

interface NumberDisplayProps {
  number: number;
  label: string;
  color: string;
  index: number;
  prefix: string;
  prefixStyle: string;
  decimalPlaces?: number;
  spanClassName?: string;
}

const NumberDisplay: React.FC<NumberDisplayProps> = ({
  number,
  label,
  index,
  color,
  prefix,
  prefixStyle,
  decimalPlaces,
  spanClassName,
}) => {
  return (
    <div className="space-y-2">
      <div className={`text-3xl font-bold md:text-6xl`} style={{ color }}>
        <CountUp
          end={number}
          duration={3}
          enableScrollSpy={true}
          prefix={prefix}
          prefixStyle={prefixStyle}
          scrollSpyDelay={100}
          className=""
          spanClassName={spanClassName}
          decimalPlaces={decimalPlaces}
        />
      </div>
      <div className="text-sm uppercase" style={{ color }}>
        {label}
      </div>
    </div>
  );
};
