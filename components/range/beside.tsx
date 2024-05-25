export interface ResType {
  prices: [number, number][];
  market_caps: [number, number][];
  total_volumes: [number, number][];
}

const COINGECKO_API_URL = "https://api.coingecko.com/api/v3";

export const fetchCoinMarketChartData = async ({
  queryKey,
}: {
  queryKey: [string, string];
}): Promise<ResType> => {
  const [, coinId] = queryKey;
  console.log(`Fetching market chart data for coin: ${coinId}`);

  const now = Math.floor(Date.now() / 1000);
  const from = now - 23.5 * 60 * 60;

  const response = await fetch(
    `${COINGECKO_API_URL}/coins/${coinId}/market_chart/range?vs_currency=usd&from=${from}&to=${now}&precision=18`,
    {
      method: "GET",
      headers: {
        accept: "application/json",
      },
    }
  );
  console.log(`Response status: ${response.status}`);

  if (!response.ok) {
    const errorData = await response.json();
    console.log("this is the errorData ", errorData);

    console.error(`Error fetching data: ${response.statusText}`);
    throw new Error("Network response was not ok");
  }

  const data: ResType = await response.json();
  console.log(`Market chart data fetched for coin ${coinId}:`, data);
  return data;
};
