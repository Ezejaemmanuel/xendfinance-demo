// hooks/useMarketData.ts
import { useSuspenseQuery } from "@tanstack/react-query";
import { fetchMarketData } from "./fetchMarketData";
// types.ts
export interface ResType {
  prices: [number, number][];
  market_caps: [number, number][];
  total_volumes: [number, number][];
}

export const useMarketData = (coinId: string) => {
  return useSuspenseQuery({
    queryKey: ["marketData", coinId],
    queryFn: fetchMarketData,
    // staleTime: 1000 * 3 * 60,
    staleTime: 1000 * 3 * 60,
  });
};
