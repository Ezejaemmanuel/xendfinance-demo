// "use client";
// import React from "react";
// import {
//   ResponsiveContainer,
//   AreaChart,
//   XAxis,
//   YAxis,
//   Area,
//   Tooltip,
//   CartesianGrid,
// } from "recharts";
// import { format, formatDistanceToNow } from "date-fns";
// import { useMarketData } from "@/lib/hooks/useFetchMarketData";
// import { formatCurrency } from "@/lib/formatCurrency";

// interface CustomTooltipProps {
//   active?: boolean;
//   payload?: any;
//   label?: string;
// }

// const CustomTooltip: React.FC<CustomTooltipProps> = ({
//   active,
//   payload,
//   label,
// }) => {
//   if (active && payload && payload.length && label) {
//     return (
//       <div className="tooltip bg-white p-3 rounded shadow-lg text-green-500">
//         <h4 className="text-sm font-bold">
//           {format(new Date(label), "eeee, d MMM, yyyy, HH:mm")}
//         </h4>
//         <p className="text-sm mt-2 text-green-400">
//           ${payload[0].value.toFixed(5)}
//         </p>
//         <p className="text-sm mt-2 text-red-500">
//           {formatDistanceToNow(new Date(label))}
//         </p>
//       </div>
//     );
//   }
//   return null;
// };

// interface MarketDataChartProps {
//   coinId: string;
// }

// const MarketDataChart: React.FC<MarketDataChartProps> = ({ coinId }) => {
//   const { data } = useMarketData(coinId);

//   console.log("Fetched data:", data);

//   const chartData =
//     data?.prices.map(([timestamp, price]) => ({
//       date: new Date(timestamp),
//       value: price,
//     })) || [];

//   console.log("Formatted chart data:", chartData);

//   return (
//     <ResponsiveContainer width="100%" height={500}>
//       <AreaChart data={chartData}>
//         <defs>
//           <linearGradient id="color" x1="0" y1="0" x2="0" y2="1">
//             <stop offset="0%" stopColor="#3fff43" stopOpacity={0.4} />
//             <stop offset="75%" stopColor="#3fff43" stopOpacity={0.05} />
//           </linearGradient>
//         </defs>
//         <Area
//           dataKey="value"
//           stroke="#3fff43"
//           fill="url(#color)"
//           animationDuration={30000}
//         />
//         <XAxis
//           dataKey="date"
//           axisLine={false}
//           tickLine={true}
//           domain={["auto", "auto"]}
//           tickFormatter={(date) => format(new Date(date), "MMM d, HH:mm")}
//           tick={{ fontSize: 10 }}
//         />
//         <YAxis
//           dataKey="value"
//           axisLine={false}
//           tickLine={false}
//           tickCount={8}
//           tickFormatter={(number: number) => number.toFixed(3)}
//           domain={["auto", "auto"]}
//           width={70}
//           tick={{ fontSize: 8 }}
//         />
//         <Tooltip content={<CustomTooltip />} />
//         <CartesianGrid opacity={0.1} vertical={false} />
//       </AreaChart>
//     </ResponsiveContainer>
//   );
// };

// export default MarketDataChart;

"use client";
import React from "react";
import {
  ResponsiveContainer,
  AreaChart,
  XAxis,
  YAxis,
  Area,
  Tooltip,
  CartesianGrid,
} from "recharts";
import { format, formatDistanceToNow } from "date-fns";
import { useMarketData } from "@/lib/hooks/useFetchMarketData";
import { formatCurrency } from "@/lib/formatCurrency";
import { useWindowSize } from "@uidotdev/usehooks";

interface CustomTooltipProps {
  active?: boolean;
  payload?: any;
  label?: string;
}

const CustomTooltip: React.FC<CustomTooltipProps> = ({
  active,
  payload,
  label,
}) => {
  if (active && payload && payload.length && label) {
    return (
      <div className="tooltip rounded bg-white p-3 text-green-500 shadow-lg">
        <h4 className="text-sm font-bold">
          {format(new Date(label), "eeee, d MMM, yyyy, HH:mm")}
        </h4>
        <p className="mt-2 text-sm text-green-400">
          ${payload[0].value.toFixed(5)}
        </p>
        <p className="mt-2 text-sm text-red-500">
          {formatDistanceToNow(new Date(label))}
        </p>
      </div>
    );
  }
  return null;
};

interface MarketDataChartProps {
  coinId: string;
}

const MarketDataChart: React.FC<MarketDataChartProps> = ({ coinId }) => {
  const { data } = useMarketData(coinId);
  const { width } = useWindowSize();

  let chartData =
    data?.prices.map(([timestamp, price]) => ({
      date: new Date(timestamp),
      value: price,
    })) || [];

  // If the screen width is defined and less than 768px, show only half of the data
  // Show only the second half of the data on small screens
  if (width && width < 768) {
    const startIndex = Math.floor(chartData.length / 2); // Start from the middle
    chartData = chartData.slice(startIndex);
  }
  return (
    <ResponsiveContainer width="100%" height={500}>
      <AreaChart data={chartData}>
        <defs>
          <linearGradient id="color" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#3fff43" stopOpacity={0.4} />
            <stop offset="75%" stopColor="#3fff43" stopOpacity={0.05} />
          </linearGradient>
        </defs>
        <Area
          dataKey="value"
          stroke="#3fff43"
          fill="url(#color)"
          animationDuration={30000}
        />
        <XAxis
          dataKey="date"
          axisLine={false}
          tickLine={true}
          domain={["auto", "auto"]}
          tickFormatter={(date) => format(new Date(date), "MMM d, HH:mm")}
          tick={{ fontSize: 10 }}
        />
        <YAxis
          dataKey="value"
          axisLine={false}
          tickLine={false}
          tickCount={8}
          tickFormatter={(number: number) => number.toFixed(3)}
          domain={["auto", "auto"]}
          width={70}
          tick={{ fontSize: 8 }}
        />
        <Tooltip content={<CustomTooltip />} />
        <CartesianGrid opacity={0.1} vertical={false} />
      </AreaChart>
    </ResponsiveContainer>
  );
};

export default MarketDataChart;
