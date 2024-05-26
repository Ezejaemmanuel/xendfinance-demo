// import { NextRequest, NextResponse } from "next/server";
// import { marketData } from "@/lib/db/schema-turso/schema-turso";
// import { eq } from "drizzle-orm";
// import { turso } from "@/lib/db/index-turso";
// import {
//   fromUnixTime,
//   formatDistanceToNow,
//   differenceInMilliseconds,
// } from "date-fns";
// import { cookies } from "next/headers";

// const COINGECKO_API_URL = "https://api.coingecko.com/api/v3";
// const CACHE_DURATION = 10 * 60 * 1000; // 3 minutes in milliseconds

// // Function to get the most recent timestamp from the prices array
// const getMostRecentTimestampFromPrices = (prices: [number, number][]) => {
//   return Math.max(...prices.map((price) => price[0]));
// };

// function logDifferenceFromNow(timestamp1: number, timestamp2: number): void {
//   // Convert Unix timestamps to Date objects
//   const date1 = fromUnixTime(timestamp1 / 1000); // Convert milliseconds to seconds
//   const date2 = fromUnixTime(timestamp2 / 1000); // Convert milliseconds to seconds

//   // Calculate the difference in milliseconds
//   const difference = differenceInMilliseconds(date1, date2);

//   // Convert the difference to a Date object from now
//   const result = formatDistanceToNow(new Date(Date.now() - difference));

//   // Log the result
//   console.log(result);
// }

// export const GET = async (request: NextRequest) => {
//   const cookies_ = await cookies();
//   console.log("Received request:", request.url);

//   const url = new URL(request.url);
//   const coinId = url.searchParams.get("coinId");
//   console.log("Parsed coinId:", coinId);

//   if (!coinId) {
//     console.error("coinId is required");
//     return NextResponse.json({ error: "coinId is required" }, { status: 400 });
//   }

//   // Check if cached data exists in SQLite
//   const cachedData = await turso
//     .select()
//     .from(marketData)
//     .where(eq(marketData.id, coinId))
//     .limit(1);

//   console.log("Fetched cached data:");
//   console.log("cachedData.length:", cachedData.length);

//   if (cachedData.length > 0) {
//     const currentTimestamp = Date.now();
//     const cachedTimestamp = cachedData[0].timestamp;
//     const timeDifference = currentTimestamp - cachedTimestamp;

//     console.log("Current timestamp:", currentTimestamp);
//     console.log("Cached timestamp:", cachedTimestamp);
//     console.log("Time difference:", timeDifference);

//     // Log the time from now for the current and cached timestamps
//     console.log(
//       "Current timestamp (from now):",
//       formatDistanceToNow(new Date(currentTimestamp))
//     );
//     console.log(
//       "Cached timestamp (from now):",
//       formatDistanceToNow(new Date(cachedTimestamp))
//     );

//     if (timeDifference < CACHE_DURATION) {
//       console.log("Returning cached data");
//       return NextResponse.json({
//         prices: JSON.parse(cachedData[0].prices),
//         market_caps: JSON.parse(cachedData[0].marketCaps),
//         total_volumes: JSON.parse(cachedData[0].totalVolumes),
//       });
//     }
//   }

//   // Fetch data from CoinGecko API
//   const response = await fetch(
//     `${COINGECKO_API_URL}/coins/${coinId}/market_chart?vs_currency=usd&days=1&precision=18`,
//     {
//       method: "GET",
//       headers: {
//         accept: "application/json",
//       },
//     }
//   );
//   console.log("Fetched data from CoinGecko API");

//   if (!response.ok) {
//     const errorData = await response.json();
//     console.error(`Error fetching data: ${response.statusText}`, errorData);
//     return NextResponse.json({ error: errorData }, { status: response.status });
//   }

//   const data = await response.json();
//   console.log("Fetched data:");

//   // Get the latest timestamp from the fetched data
//   const latestTimestamp = getMostRecentTimestampFromPrices(data.prices);
//   console.log("Latest timestamp:", latestTimestamp);

//   // Log the time from now for the latest timestamp
//   console.log(
//     "Latest timestamp (from now):",
//     formatDistanceToNow(new Date(latestTimestamp))
//   );

//   // Delete old cache before storing new data
//   const deleteResult = await turso
//     .delete(marketData)
//     .where(eq(marketData.id, coinId))
//     .returning();
//   console.log("Deleted old cache:");

//   // Store data in SQLite
//   const storedData = await turso
//     .insert(marketData)
//     .values({
//       id: coinId,
//       prices: JSON.stringify(data.prices),
//       marketCaps: JSON.stringify(data.market_caps),
//       totalVolumes: JSON.stringify(data.total_volumes),
//       timestamp: latestTimestamp,
//     })
//     .returning();
//   console.log("Stored data in SQLite");

//   return NextResponse.json(data);
// };

import { NextRequest, NextResponse } from "next/server";
import { marketData } from "@/lib/db/schema-turso/schema-turso";
import { eq } from "drizzle-orm";
import { turso } from "@/lib/db/index-turso";
import {
  fromUnixTime,
  formatDistanceToNow,
  differenceInMilliseconds,
} from "date-fns";
import { cookies } from "next/headers";

const COINGECKO_API_URL = "https://api.coingecko.com/api/v3";
const CACHE_DURATION = 10 * 60 * 1000; // 10 minutes in milliseconds

// Function to get the most recent timestamp from the prices array
const getMostRecentTimestampFromPrices = (prices: [number, number][]) => {
  return Math.max(...prices.map((price) => price[0]));
};

function logDifferenceFromNow(timestamp1: number, timestamp2: number): void {
  // Convert Unix timestamps to Date objects
  const date1 = fromUnixTime(timestamp1 / 1000); // Convert milliseconds to seconds
  const date2 = fromUnixTime(timestamp2 / 1000); // Convert milliseconds to seconds

  // Calculate the difference in milliseconds
  const difference = differenceInMilliseconds(date1, date2);

  // Convert the difference to a Date object from now
  const result = formatDistanceToNow(new Date(Date.now() - difference));

  // Log the result
  console.log(result);
}

export const GET = async (request: NextRequest) => {
  const cookies_ = await cookies();
  console.log("Received request:", request.url);

  const url = new URL(request.url);
  const coinId = url.searchParams.get("coinId");
  console.log("Parsed coinId:", coinId);

  if (!coinId) {
    console.error("coinId is required");
    return NextResponse.json({ error: "coinId is required" }, { status: 400 });
  }

  // Check if cached data exists in SQLite
  const cachedData = await turso
    .select()
    .from(marketData)
    .where(eq(marketData.id, coinId))
    .limit(1);

  console.log("Fetched cached data:");
  console.log("cachedData.length:", cachedData.length);

  if (cachedData.length > 0) {
    const currentTimestamp = Date.now();
    const cachedTimestamp = cachedData[0].timestamp;
    const timeDifference = currentTimestamp - cachedTimestamp;

    console.log("Current timestamp:", currentTimestamp);
    console.log("Cached timestamp:", cachedTimestamp);
    console.log("Time difference:", timeDifference);

    // Log the time from now for the current and cached timestamps
    console.log(
      "Current timestamp (from now):",
      formatDistanceToNow(new Date(currentTimestamp))
    );
    console.log(
      "Cached timestamp (from now):",
      formatDistanceToNow(new Date(cachedTimestamp))
    );

    if (timeDifference < CACHE_DURATION) {
      console.log("Returning cached data");
      return NextResponse.json({
        prices: JSON.parse(cachedData[0].prices),
        market_caps: JSON.parse(cachedData[0].marketCaps),
        total_volumes: JSON.parse(cachedData[0].totalVolumes),
      });
    }
  }

  // Fetch data from CoinGecko API
  const response = await fetch(
    `${COINGECKO_API_URL}/coins/${coinId}/market_chart?vs_currency=usd&days=1&precision=18`,
    {
      method: "GET",
      headers: {
        accept: "application/json",
      },
    }
  );
  console.log("Fetched data from CoinGecko API");

  if (!response.ok) {
    const errorData = await response.json();
    console.error(`Error fetching data: ${response.statusText}`, errorData);
    return NextResponse.json({ error: errorData }, { status: response.status });
  }

  const data = await response.json();
  console.log("Fetched data:");

  // Get the latest timestamp from the fetched data
  const latestTimestamp = getMostRecentTimestampFromPrices(data.prices);
  console.log("Latest timestamp:", latestTimestamp);

  // Log the time from now for the latest timestamp
  console.log(
    "Latest timestamp (from now):",
    formatDistanceToNow(new Date(latestTimestamp))
  );

  // Store data in SQLite with onConflictDoUpdate
  const storedData = await turso
    .insert(marketData)
    .values({
      id: coinId,
      prices: JSON.stringify(data.prices),
      marketCaps: JSON.stringify(data.market_caps),
      totalVolumes: JSON.stringify(data.total_volumes),
      timestamp: latestTimestamp,
    })
    .onConflictDoUpdate({
      target: marketData.id,
      set: {
        prices: JSON.stringify(data.prices),
        marketCaps: JSON.stringify(data.market_caps),
        totalVolumes: JSON.stringify(data.total_volumes),
        timestamp: latestTimestamp,
      },
    })
    .returning();
  console.log("Stored data in SQLite");

  return NextResponse.json(data);
};
// export const revalidate = 0;
export const dynamic = "force-dynamic";
