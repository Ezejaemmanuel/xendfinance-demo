import { getBaseUrl } from "../baseUrl";
import { ResType } from "./useFetchMarketData";

// lib/fetchMarketData.ts

export const fetchMarketData = async ({
  queryKey,
}: {
  queryKey: [string, string];
}) => {
  const [, coinId] = queryKey;
  const url = getBaseUrl(`api/market-cap?coinId=${coinId}`);
  const response = await fetch(url);

  if (!response.ok) {
    const errorData = await response.json();

    throw new Error(
      errorData.error || "An Error Occured in the market cap query"
    );
  }

  const data: ResType = await response.json();
  return data;
};
