// "use client";
// import { CardTitle, CardHeader, CardContent, Card } from "@/components/ui/card";
// import CountUp from "./countup";

// const data = [
//   {
//     number: 2534023452,
//     label: "Fee paying accounts, all time",
//     color: "#bd1e59",
//   },
//   { number: 303427891221, label: "NFTs minted", color: "#00d8ff" },
//   {
//     number: 332917819821,
//     label: "Median fee per transaction",
//     color: "#00ff89",
//   },
// ];

// export default function Statistics() {
//   return (
//     <Card className="bg-[#000000] py-6 flex flex-col md:flex-row text-white">
//       <CardHeader className="mb-4">
//         <CardTitle className="text-4xl font-bold leading-tight sm:text-3xl md:text-4xl lg:text-5xl">
//           Join a community of millions.
//         </CardTitle>
//       </CardHeader>
//       <CardContent className="flex flex-col gap-10">
//         {data.map((item, index) => (
//           <NumberDisplay
//             key={index}
//             number={item.number}
//             label={item.label}
//             color={item.color}
//             index={index}
//           />
//         ))}
//       </CardContent>
//     </Card>
//   );
// }

// interface NumberDisplayProps {
//   number: number;
//   label: string;
//   color: string;
//   index: number;
// }

// const NumberDisplay: React.FC<NumberDisplayProps> = ({
//   number,
//   label,
//   index,
//   color,
// }) => {
//   // Extract numeric value from the string for CountUp

//   return (
//     <div className="space-y-2">
//       <div className={`text-3xl md:text-6xl font-bold`} style={{ color }}>
//         <CountUp
//           end={number}
//           duration={3 * index * 1.5}
//           enableScrollSpy
//           scrollSpyDelay={100}
//           className=""
//         />
//       </div>
//       <div className="text-sm uppercase" style={{ color }}>
//         {label}
//       </div>
//     </div>
//   );
// };

"use client";
import React from "react";
import { CardTitle, CardHeader, CardContent, Card } from "@/components/ui/card";
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
    <Card className="flex flex-col bg-[#000000] py-6 text-white md:flex-row">
      <CardHeader className="mb-4">
        <CardTitle className="text-4xl font-bold leading-tight sm:text-3xl md:text-4xl lg:text-5xl">
          Join a community of millions.
        </CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col gap-10">
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
