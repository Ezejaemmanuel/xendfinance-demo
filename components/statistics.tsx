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
  const latestTotalVolumeEntry = data.total_volumes[data.total_volumes.length - 1];

  const latestPrice = latestPriceEntry[1];
  const latestMarketCap = latestMarketCapEntry[1];
  const latestTotalVolume = latestTotalVolumeEntry[1];

  return {
    latestPrice,
    latestMarketCap,
    latestTotalVolume,
  };
};

const calculateFontSize = (number: number): string => {
  const length = number.toString().length;
  if (length <= 4) return "text-6xl md:text-8xl";
  if (length <= 7) return "text-5xl md:text-7xl";
  if (length <= 10) return "text-4xl md:text-6xl";
  return "text-3xl md:text-5xl";
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
    },
    {
      number: latestData.latestPrice,
      label: "Price Per Token",
      color: "#bd1e59",
      prefix: "$",
    },
    {
      number: 432093489,
      label: "Latest Market Cap",
      color: "#00d8ff",
      prefix: "$",
    },
  ];

  return (
    <Card className=" flex w-full items-center justify-center space-y-4 w bg-neutral-950 py-6 text-white md:mb-10">
      <CardContent className="flex flex-col items-center justify-between gap-4 md:gap-20">
        <div className="flex flex-col items-center ">
          <div className="text-2xl font-bold md:text-4xl">About Xend</div>
        </div>
        <div className="flex flex-col items-center md:text-left gap-4 md:gap-10 justify-between">
          {statisticsData.map((item, index) => (
            <NumberDisplay
              key={index}
              prefix={item.prefix}
              number={item.number}
              label={item.label}
              color={item.color}
              index={index}
            />
          ))}
        </div>
      </CardContent>
    </Card>
  );
}

interface NumberDisplayProps {
  number: number;
  label: string;
  color: string;
  index: number;
  prefix: string;
}

const NumberDisplay: React.FC<NumberDisplayProps> = ({
  number,
  label,
  index,
  color,
  prefix,
}) => {
  const fontSizeClass = calculateFontSize(number);

  return (
    <div className="space-y-2 text-center ">
      <div className={`font-bold ${fontSizeClass}`} style={{ color }}>
        <CountUp
          end={number}
          duration={3}
          enableScrollSpy={true}
          className="s"
          decimalPlaces={4}
          prefixStyle="text-xl"
          prefix={prefix}
          scrollSpyDelay={100}
        />
      </div>
      <div className="text-sm uppercase" style={{ color }}>
        {label}
      </div>
    </div>
  );
};
