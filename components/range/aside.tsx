"use client";
import { useQuery } from "@tanstack/react-query";
import React from "react";
import { format } from "date-fns";
import { fetchCoinMarketChartData } from "./beside";
import { useMarketData } from "@/lib/hooks/useFetchMarketData";
interface CoinProps {
  coinId: string;
}

const Coin: React.FC<CoinProps> = ({ coinId }) => {
  console.log(`Rendering Coin component for coinId: ${coinId}`);
  const { data, isLoading, error } = useMarketData("rwa-finance");

  return (
    <div className="p-4 bg-gray-800 text-white shadow rounded">
      <h1 className="text-2xl font-bold">Market Chart Data for {coinId}</h1>
      <h2 className="text-xl font-semibold mt-4">Prices</h2>
      <table className="min-w-full divide-y divide-gray-700">
        <thead>
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
              Time
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
              Price (USD)
            </th>
          </tr>
        </thead>
        <tbody className="bg-gray-800 divide-y divide-gray-700">
          {data?.prices.map(([timestamp, price]: [number, number]) => (
            <tr key={timestamp}>
              <td className="px-6 py-4 whitespace-nowrap">
                {format(new Date(timestamp), "PPpp")}
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                {price.toFixed(8)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <h2 className="text-xl font-semibold mt-4">Market Caps</h2>
      <table className="min-w-full divide-y divide-gray-700">
        <thead>
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
              Time
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
              Market Cap (USD)
            </th>
          </tr>
        </thead>
        <tbody className="bg-gray-800 divide-y divide-gray-700">
          {data?.market_caps.map(([timestamp, marketCap]: [number, number]) => (
            <tr key={timestamp}>
              <td className="px-6 py-4 whitespace-nowrap">
                {format(new Date(timestamp), "PPpp")}
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                {marketCap.toFixed(8)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <h2 className="text-xl font-semibold mt-4">Total Volumes</h2>
      <table className="min-w-full divide-y divide-gray-700">
        <thead>
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
              Time
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
              Volume (USD)
            </th>
          </tr>
        </thead>
        <tbody className="bg-gray-800 divide-y divide-gray-700">
          {data?.total_volumes.map(([timestamp, volume]: [number, number]) => (
            <tr key={timestamp}>
              <td className="px-6 py-4 whitespace-nowrap">
                {format(new Date(timestamp), "PPpp")}
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                {volume.toFixed(8)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Coin;
