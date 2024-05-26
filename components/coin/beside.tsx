import { ResType } from "./response.type";

// lib/coingecko.ts
const COINGECKO_API_URL = "https://api.coingecko.com/api/v3";
const API_KEY = process.env.NEXT_PUBLIC_COINGECKO_API_KEY;

export const fetchCoinData = async ({
  queryKey,
}: {
  queryKey: [string, string];
}) => {
  const [, coinId] = queryKey;
  console.log(`Fetching data for coin: ${coinId}`);

  const response = await fetch(
    `${COINGECKO_API_URL}/coins/${coinId}?localization=false&tickers=false&market_data=false&community_data=false&developer_data=false&sparkline=false`,
    {
      method: "GET",
      headers: {
        accept: "application/json",
      },
    },
  );
  console.log(`Response status: ${response.status}`);

  if (!response.ok) {
    const errorData = await response.json();
    console.log("this is the errorData ", errorData);

    console.error(`Error fetching data: ${response.statusText}`);
    throw new Error("Network response was not ok");
  }

  const data: ResType = await response.json();
  console.log(`Data fetched for coin ${coinId}:`, data);
  return data;
};
