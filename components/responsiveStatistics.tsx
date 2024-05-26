"use client";
import React from "react";
import { useMarketData } from "@/lib/hooks/useFetchMarketData";
import CountUp from "./countup-2";

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

  return {
    latestPrice: latestPriceEntry[0],
    latestMarketCap: latestMarketCapEntry[0],
    latestTotalVolume: latestTotalVolumeEntry[0],
  };
};

interface StatisticsProps {
  statisticsData: {
    number: number;
    label: string;
    color: string;
    prefix: string;
    prefixStyle: string;
    spanClassName: string;
    decimalPlaces: number;
  }[];
}

const Statistics: React.FC<StatisticsProps> = ({ statisticsData }) => {
  return (
    <div className="flex flex-col gap-10">
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
    </div>
  );
};

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
          duration={index + 3 * 3 * 1.5}
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

const ResponsiveComponent = () => {
  const { data } = useMarketData("rwa-finance");
  const latestData = extractLatestMarketData(data);

  const statisticsData = [
    {
      number: latestData.latestTotalVolume,
      label: "Latest Total Volume",
      color: "#00ff89",
      prefix: "$RWA",
      prefixStyle: "text-xl",
      spanClassName: "text-3xl md:text-5xl",
      decimalPlaces: 10,
    },
    {
      number: latestData.latestPrice,
      label: "Price Per Token",
      color: "#bd1e59",
      prefix: "$",
      prefixStyle: "text-xl",
      spanClassName: "text-3xl md:text-5xl",
      decimalPlaces: 10,
    },
    {
      number: latestData.latestMarketCap,
      label: "Latest Market Cap",
      color: "#00d8ff",
      prefix: "$",
      prefixStyle: "text-xl",
      spanClassName: "text-3xl md:text-5xl",
      decimalPlaces: 10,
    },
  ];

  return (
    <div className="bg-neutral-950 p-6 text-white">
      <div className="flex flex-col md:flex-row">
        <div className="flex-1 p-5">
          <img
            src="https://via.placeholder.com/300"
            alt="Placeholder"
            className="h-full w-full object-cover object-center"
          />
          <div className="mt-4 text-3xl md:text-4xl lg:text-7xl">
            Join a community of millions.
          </div>
        </div>
        <div className="flex-1 p-5">
          <Statistics statisticsData={statisticsData} />
        </div>
      </div>
    </div>
  );
};

export default ResponsiveComponent;
